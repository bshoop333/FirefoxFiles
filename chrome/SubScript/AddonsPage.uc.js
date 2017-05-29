// ==UserScript==
// @name         AddonsPage.uc.js
// @description  附件组件页面右键新增查看所在目录，详细信息页面新增安装地址或路径，新增 uc脚本管理页面。
// @author       ywzhaiqi
// @include      main
// @charset      utf-8
// @version      2014.09.11
// @downloadURL  https://raw.github.com/ywzhaiqi/userChromeJS/master/AddonsPage/AddonsPage.uc.js
// @homepageURL  https://github.com/ywzhaiqi/userChromeJS/tree/master/AddonsPage
// @reviewURL    http://bbs.kafan.cn/thread-1617407-1-1.html
// @optionsURL   about:config?filter=view_source.editor.path
// @note         - 附件组件页面右键新增查看所在目录（支持扩展、主题、插件）、复制名字。Greasemonkey、Scriptish 自带已经存在
// @note         - 附件组件详细信息页面新增GM脚本、扩展、主题安装地址和插件路径，右键即复制
// @note         - 新增 uc脚本管理页面
// @note         - 右键菜单 "查看附加组件" 需要 DOM Inspector
// @note         uc脚本管理界面
// @note         - 启用禁用需要 rebuild_userChrome.uc.xul
// @note         - 编辑命令需要首先设置 view_source.editor.path 的路径
// @note         - 图标请自行添加样式，详细信息见主页
// @note         其它信息见主页
// ==/UserScript==

location == "chrome://browser/content/browser.xul" && (function(){

    var iconURL = "";  // uc 脚本列表的图标

    var Config = {
        debug: 0,  // 1 则uc管理界面右键菜单会有 "重载 uc 脚本" 的菜单
        detailView: 1,  // 详细信息页面是否添加安装链接
    };

    if(window.AM_Helper){  // 修改调试用，重新载入无需重启
        window.AM_Helper.uninit();
        delete window.AM_Helper;
    }
    if(window.userChromeJSAddon){
        window.userChromeJSAddon.uninit();
        delete window.userChromeJSAddon;
    }

    Cu.import("resource://gre/modules/Services.jsm");
    Cu.import("resource://gre/modules/AddonManager.jsm");

    const isCN = Services.prefs.getCharPref("general.useragent.locale").indexOf("zh") != -1;

    var ApplyPatchForScript = (function(){
        const USO_URL_RE = /(^https?:\/\/userscripts.org.*\/scripts\/source\/\d+)\.\w+\.js$/i;

        const GFO_URL_RE_1 = /(^https?:\/\/greasyfork.org\/scripts\/code\/\w+)\.\w+\.js$/i;
        const GFO_URL_RE_2 = /(^https?:\/\/greasyfork.org\/scripts\/[^\/]+\/)code[\.\/].*\w+\.js$/i;

        // (http://binux.github.io/ThunderLixianExporter/)master/ThunderLixianExporter.user.js
        const GITHUB_URL_RE_1 = /(^https?:\/\/\w+.github.io\/\w+\/)master\/.*.*\w+\.js$/i;
        // 从   https://raw.githubusercontent.com/ywzhaiqi/userscript/master/noNoticetitleflashOnBBS.user.js
        // 转为 https://github.com/ywzhaiqi/userscript/blob/master/noNoticetitleflashOnBBS.user.js
        const GITHUB_URL_RE_2 = /(^https?:\/\/raw.githubusercontent.com\/.*?\/master\/.*\.user\.js$)/i;

        function getScriptHomeURL(downURL) {
            var url;
            if (downURL && downURL.startsWith('http')) {
                if (USO_URL_RE.test(downURL)) {
                    url = RegExp.$1.replace(/source/, "show");
                } else if (GFO_URL_RE_1.test(downURL)) {
                    url = RegExp.$1;
                } else if (GFO_URL_RE_2.test(downURL)) {
                    url = RegExp.$1;
                } else if (GITHUB_URL_RE_1.test(downURL)) {
                    url = RegExp.$1;
                } else if (GITHUB_URL_RE_2.test(downURL)) {
                    url = RegExp.$1.replace('raw.githubusercontent.com', 'github.com')
                            .replace('/master/', '/blob/master/');
                }
            }
            return url ? decodeURIComponent(url) : null;
        }

        function addHomePage(){
            // 添加 Scriptish 脚本的主页
            if (window.Scriptish_config) {
                Scriptish_config.scripts.forEach(function(script){
                    if(script.homepageURL) return;

                    var url = script.updateURL || script.downloadURL;
                    script.homepageURL = getScriptHomeURL(url);
                });
            }

            // 添加 Greasemonkey 脚本的主页
            AddonManager.getAddonsByTypes(['greasemonkey-user-script'], function (aAddons) {
                aAddons.forEach(function (aAddon) {
                    if (aAddon.homepageURL) return;

                    var url = aAddon._script._downloadURL || aAddon._script._updateURL;
                    var homepageURL = getScriptHomeURL(url);
                    if (homepageURL) {
                        aAddon.homepageURL = homepageURL;
                    } else {
                        // console.log(aAddon.name, url);
                    }
                });
            });
        }

        return {
            init: addHomePage
        }
    })();

    setTimeout(function(){
        ApplyPatchForScript.init();
    }, 2000);

    window.AM_Helper = {
        init: function(){
            document.addEventListener("DOMContentLoaded", this, false);
        },
        uninit: function(){
            document.removeEventListener("DOMContentLoaded", this, false);
        },
        handleEvent: function(event){
            switch(event.type){
                case "DOMContentLoaded":
                    var doc = event.target;
                    var win = doc.defaultView;

                    if (["about:addons","chrome://mozapps/content/extensions/extensions.xul"].indexOf(doc.URL) == -1)
                        return;

                    this.addPopupMenu(doc);

                    // 给菜单调用
                    win.AM_Helper = AM_Helper;
                    this.win = win;

                    if (Config.detailView) {
                        var self = this;
                        var observer = new MutationObserver(function(e) {
                            e = e[e.length-1];
                            if(e.attributeName == "loading") {
                                var doc = e.target.ownerDocument;
                                self.setUrlOrPath(doc);
                            }
                        });
                        observer.observe(doc.getElementById("detail-view"), {attributes: true});
                    }
                    break;
                case "popupshowing":
                    this.getAddon(this.win.document.popupNode.value,
                                  this.setItemsAttributes,
                                  event);
                    break;
            }
        },
        addPopupMenu: function(doc){
            var ins = doc.getElementById("menuitem_uninstallItem");
            if(!ins) return;

            ins = ins.nextSibling;
            var popup = ins.parentNode;

            var menuitem = $C("menuseparator", {
                id: "AM-separator-1"
            });
            popup.insertBefore(menuitem, ins);

            menuitem = $C("menuitem", {
                id: "AM-inspect-addon",
                label: isCN ? "查看附加组件" : "Inspect Addon",
                accesskey: "i",
                tooltipText: isCN ? "调用 DOM Inspector 查看 addon 对象" : "inspect addon use DOM Inspector",
                oncommand: "AM_Helper.getAddon(AM_Helper.getPopupNode(this).value, AM_Helper.inspectAddon);"
            });
            popup.insertBefore(menuitem, ins);

            menuitem = $C("menuitem", {
                id: "AM-edit-script",
                label: isCN ? "编辑" : "Edit",
                accesskey: "e",
                hidden: true,
                oncommand: "AM_Helper.getAddon(AM_Helper.getPopupNode(this).value, AM_Helper.editScript);"
            });
            popup.insertBefore(menuitem, ins);

            menuitem = $C("menuitem", {
                id: "AM-reload-uc",
                hidden: true,
                label: isCN ? "重载 uc 脚本（慎用）" : "Reload uc script",
                style: "font-weight:bold",
                tooltiptext: "仅部分脚本支持。如有问题，重启解决。",
                oncommand: "AM_Helper.getAddon(AM_Helper.getPopupNode(this).value, AM_Helper.reloadUserChromeJS);"
            });
            popup.insertBefore(menuitem, ins);

            menuitem = $C("menuitem", {
                id: "AM-browse-dir",
                label: isCN ? "查看所在目录" : "Browser Dir",
                accesskey: "b",
                oncommand: "AM_Helper.getAddon(AM_Helper.getPopupNode(this).value, AM_Helper.browseDir);"
            });
            popup.insertBefore(menuitem, ins);

            menuitem = $C("menuitem", {
                id: "AM-open-url",
                label: isCN ? "打开安装页面" : "Open Install URL",
                accesskey: "u",
                tooltiptext: null,
                oncommand: "openURL(this.tooltipText)",
            });
            popup.insertBefore(menuitem, ins);

            menuitem = $C("menuitem", {
                id: "AM-copy-name",
                label: isCN ? "复制名称" : "Copy Name",
                accesskey: "c",
                oncommand: "AM_Helper.getAddon(AM_Helper.getPopupNode(this).value, AM_Helper.copyName);"
            });
            popup.insertBefore(menuitem, ins);

            // menuitem = $C("menuitem", {
            //     id: "AM-go-uso",
            //     class: "greasemonkey",
            //     hidden: true,
            //     label: isCN ? "在 Userscripts.org 上查看" : "View on Userscripts.org",
            //     oncommand: "openURL(this.tooltipText);"
            // });
            // popup.appendChild(menuitem);

            // menuitem = $C("menuitem", {
            //     id: "AM-find-uso",
            //     class: "greasemonkey",
            //     hidden: true,
            //     label: isCN ? "在 Userscripts.org 上查找" : "Find on Userscripts.org",
            //     oncommand: "openURL(this.getAttribute('find-on-uso'));"
            // });
            // popup.appendChild(menuitem);

            popup.addEventListener("popupshowing", this, true);
        },
        setItemsAttributes: function(aAddon, event){
            var popup = event.target;
            var doc = popup.ownerDocument;

            var
                isExtension = (aAddon.type == "extension"),
                isTheme = (aAddon.type == "theme"),
                isPlugin = (aAddon.type == "plugin"),
                isUserStyle = (aAddon.type == "userstyle"),
                isScriptish = (aAddon.type == "userscript"),
                isGreasemonkey = (aAddon.type == "user-script") || // Greasemonkey
                                (aAddon.type == "greasemonkey-user-script"), // Greasemonkey 1.7+
                isUserScript = isGreasemonkey || isScriptish,
                isUserChromeJS = (aAddon.type == "userchromejs"),
                isService = (aAddon.type == "service"),
                menuitem
            ;

            menuitem = doc.getElementById("AM-browse-dir");
            menuitem.hidden = isUserStyle || isUserScript || isService;

            menuitem = doc.getElementById("AM-edit-script");
            menuitem.hidden = !isUserChromeJS;

            menuitem = doc.getElementById("AM-reload-uc");
            menuitem.hidden = !Config.debug || !isUserChromeJS;

            var className = isGreasemonkey ? "greasemonkey" : "";

            // install url
            menuitem = doc.getElementById("AM-open-url");
            var installURL = isExtension ?
                        (this.getInstallURL(aAddon) || aAddon.homepageURL) :
                        (aAddon.homepageURL || this.getInstallURL(aAddon));
            menuitem.tooltipText = installURL;
            menuitem.hidden = !installURL;
            menuitem.className = installURL ? className : '';

            menuitem = doc.getElementById("AM-inspect-addon");
            menuitem.disabled = !("inspectObject" in window);
            menuitem.className = menuitem.disabled ? '' : className;

            menuitem = doc.getElementById("AM-copy-name");
            menuitem.tooltipText = aAddon.name;
            menuitem.className = className;

            // if(isUserScript && !isScriptish){
            //     var usoURL = "";
            //     if (aAddon._script) {
            //         var usDownloadURL = aAddon._script._downloadURL;
            //         var usUpdateURL = aAddon._script._updateURL;
            //         if (USO_URL_RE.test(usDownloadURL)) {
            //             usoURL = usDownloadURL;
            //         } else if (USO_URL_RE.test(usUpdateURL)) {
            //             usoURL = usUpdateURL;
            //         }
            //     }

            //     menuitem = doc.getElementById("AM-go-uso");
            //     menuitem.disabled = !USO_URL_RE.test(usoURL);
            //     menuitem.className = isUserScript ? menuitem.disabled ? "" : "greasemonkey" : "";
            //     menuitem.tooltipText = usoURL.replace(/source/, "show")
            //         .replace(/.\w+.js$/, "");

            //     menuitem = doc.getElementById("AM-find-uso");
            //     menuitem.disabled = USO_URL_RE.test(usoURL);
            //     menuitem.className = isUserScript ? menuitem.disabled ? "" : "greasemonkey" : "";
            //     menuitem.setAttribute("find-on-uso",
            //         "https://www.google.com.hk/search?q=site:userscripts.org+inurl:scripts+inurl:show+" +
            //         encodeURIComponent(aAddon.name));
            // }
        },

        getPopupNode: function (aNode) {
            var doc = aNode.ownerDocument;
            return "triggerNode" in aNode.parentNode ? aNode.parentNode.triggerNode : doc.popupNode;
        },
        getAddon: function (aId, aCallback, aEvent) {
            var self = this;

            if (this.win.gDetailView._addon) {
                aCallback.apply(this, [this.win.gDetailView._addon, aEvent]);
                return;
            }

            AddonManager.getAllAddons(function(aAddons) {
                for (var i = 0; i < aAddons.length; i++) {
                    if (aAddons[i].id == aId) {
                        aCallback.apply(self, [aAddons[i], aEvent]);
                        return;
                    }
                }
            });
        },

        inspectAddon: function (aAddon) {
            inspectObject(aAddon);
        },
        inspectUserscript: function (aAddon) {
            inspectObject(aAddon._script);
        },
        browseDir: function (aAddon) {
            switch(aAddon.type){
                case "plugin":
                    var pathes = aAddon.pluginFullpath;
                    for (var i = 0; i < pathes.length; i++) {
                        this.revealPath(pathes[i]);
                    }
                    return;
                case "userchromejs":
                    var file = aAddon._script.file;
                    if(file.exists())
                        file.reveal();
                    return;
            }

            // addon
            var gecko = parseInt(Services.appinfo.platformVersion);
            var nsLocalFile = Components.Constructor("@mozilla.org/file/local;1", (gecko >= 14) ? "nsIFile" : "nsILocalFile",
                "initWithPath");

            var dir = Services.dirsvc.get("ProfD", Ci.nsIFile);
            dir.append("extensions");
            dir.append(aAddon.id);
            var fileOrDir = dir.path + (dir.exists() ? "" : ".xpi");
            //Application.console.log(fileOrDir);
            try {
                (new nsLocalFile(fileOrDir)).reveal();
            } catch (ex) {
                var addonDir = /.xpi$/.test(fileOrDir) ? dir.parent : dir;
                try {
                    if (addonDir.exists()) {
                        addonDir.launch();
                    }
                } catch (ex) {
                    var uri = Services.io.newFileURI(addonDir);
                    var protSvc = Cc["@mozilla.org/uriloader/external-protocol-service;1"].
                    getService(Ci.nsIExternalProtocolService);
                    protSvc.loadUrl(uri);
                }
            }
        },
        editScript: function(aAddon) {
            if(aAddon.type == "userchromejs"){
                var path = aAddon._script.file.path;
                this.launchEditor(path);
            }
        },
        reloadUserChromeJS: function (aAddon) {
            if(aAddon.type != "userchromejs") return;

            var result = confirm("确定要重载吗？\n慎用，仅部分脚本支持，不支持的脚本会出现重复添加按钮或菜单或事件等问题。\n如有问题，重启火狐。");
            if(!result) return;

            var script = aAddon._script;

            Services.obs.notifyObservers(null, "startupcache-invalidate", "");
            Services.scriptloader.loadSubScript(script.url, {}, script.charset || "utf-8");
        },
        launchEditor: function(path){
            var editor = Services.prefs.getCharPref("view_source.editor.path");
            if (!editor) {
                toOpenWindowByType('pref:pref', 'about:config?filter=view_source.editor.path');
                return;
            }

            var UI = Cc['@mozilla.org/intl/scriptableunicodeconverter'].createInstance(Ci.nsIScriptableUnicodeConverter);
            var platform = window.navigator.platform.toLowerCase();
            UI.charset = platform.indexOf('win') > -1 ? 'GB2312' : 'UTF-8';
            path = UI.ConvertFromUnicode(path);

            var appfile = Cc['@mozilla.org/file/local;1'].createInstance(Ci.nsILocalFile);
            appfile.initWithPath(editor);
            var process = Cc['@mozilla.org/process/util;1'].createInstance(Ci.nsIProcess);
            process.init(appfile);
            process.run(false, [path], 1, {});
        },
        copyName: function (aAddon) {
            this.copyToClipboard(aAddon.name);
        },

        getInstallURL: function(aAddon){
            aAddon = aAddon || this.win.gViewController.viewObjects.detail._addon;
            if(!aAddon) return null;

            var url = null;
            switch(aAddon.type){
                case "extension":
                case "theme":
                    url = (aAddon.contributionURL || aAddon.reviewURL) || null;
                    return url && url.replace(/\/developers|\/reviews/g, "") || aAddon.creator.url;
                case "greasemonkey-user-script":
                    return aAddon._script._downloadURL || aAddon._script._updateURL;
                case "userscript":
                    url = aAddon._downloadURL || aAddon._updateURL;
                    return url;
                case "userchromejs":
                    return aAddon.homepageURL || aAddon.reviewURL || aAddon.downloadURL || aAddon.updateURL;
                default:
                    return aAddon.homepageURL;
            }
        },

        get getPath(){
            var url = this.win.gViewController.viewObjects.detail._addon;
            if(!url) return false;
            return url.pluginFullpath || false;
        },
        setUrlOrPath :function(doc){
            var installURL = this.getInstallURL();
            if (!installURL && !this.getPath) return;

            if(!doc.getElementById("detail-InstallURL-row")){
                var value = "",label = "";
                if(this.win.gViewController.currentViewId.indexOf("detail")!= -1){
                    var aAddon = this.win.gViewController.viewObjects.detail._addon;
                    switch (aAddon.type){
                        case "extension":
                        case "theme":
                        case "greasemonkey-user-script":
                            value = installURL;
                            label = "%Installpage%";
                            break;
                        case "plugin":
                            value = this.getPath;
                            label = "%Path%";
                            break;
                    }
                }
                if(!!value && !!label){
                    var xul = "";
                    if(typeof(value) != "string"){
                        xul = "<vbox>";
                        for(var i=0;i< value.length;i++){
                            xul += ('<label class="detail-row-value text-link" crop="end" onclick="\
                                if(event.button == 0) { \
                                    AM_Helper.revealPath(this.value); \
                                } else if (event.button == 2){ \
                                    AM_Helper.copyToClipboard(this.value); \
                                } \
                                return false;" \
                                value="' + value[i] +'" href="'+ value[i] +'"/>');
                        }
                        xul += "</vbox>";
                    }else{
                        xul = '<label class="detail-row-value text-link" crop="end" onclick="\
                            if(event.button == 2){\
                                AM_Helper.copyToClipboard(this.value); \
                                return false;\
                            }" value="'+ value +'" href="'+ value +'"/>';
                    }
                    xul = '<row class="detail-row-complex" id="detail-InstallURL-row" label="'+ label +'">'+
                                '<label class="detail-row-label" value="'+ label +'"/>'+ xul +'</row>';
                    if(isCN){
                        xul = xul.replace(/\%Installpage\%/g, "安装页面").replace(/\%Path\%/g, "路径");
                    }else{
                        xul = xul.replace(/\%/g,"");
                    }
                    // doc.getElementById("detail-rows").innerHTML += xul;
                    doc.getElementById("detail-rows").appendChild(doc.createElement("row")).outerHTML = xul;
                }
            }
        },
        revealPath: function(path){
            var file = Cc['@mozilla.org/file/local;1'].createInstance(Ci.nsILocalFile);
            file.initWithPath(path);
            if(file.exists())
                file.reveal();
        },
        copyToClipboard: function (aString) {
            Cc["@mozilla.org/widget/clipboardhelper;1"].
                getService(Ci.nsIClipboardHelper).copyString(aString);
        }
    };

    window.userChromeJSAddon = {
        scripts:[],
        unloads: [],

        init: function(){
	        if ('userchromejs' in AddonManager.addonTypes) return;

            this.initScripts();
            this.registerProvider();
            this.addStyle();
        },
        uninit: function(){
            this.unloads.forEach(function(func){ func(); });
        },
        initScripts: function(){
            var scripts = window.userChrome_js.scripts.concat(window.userChrome_js.overlays);

            var self = this;
            scripts.forEach(function(script, i){
                self.scripts[i] = new ScriptAddon(script);
            });
        },
        getScriptById: function(aId){
            for (var i = 0; i < this.scripts.length; i++) {
                if(this.scripts[i].id == aId)
                    return this.scripts[i];
            }
            return null;
        },
        registerProvider: function(){
            var types = null;
            if (AddonManagerPrivate.AddonType) {
                types = [new AddonManagerPrivate.AddonType(
                    "userchromejs",
                    "",
                    isCN ? "uc 脚本" : "userChrome JS",
                    AddonManager.VIEW_TYPE_LIST,
                    9000)];
            }

            let provider = {
                getAddonByID: function(aId, aCallback) {
                    let script = userChromeJSAddon.getScriptById(aId);
                    aCallback(script);
                },

                getAddonsByTypes: function(aTypes, aCallback) {
                    if (aTypes && aTypes.indexOf("userchromejs") < 0) {
                        aCallback([]);
                    } else {
                        aCallback(userChromeJSAddon.scripts);
                    }
                }
            };

            AddonManagerPrivate.registerProvider(provider, types);

            this.unloads.push(function(){
                AddonManagerPrivate.unregisterProvider(provider);
            });
        },
        addStyle: function(){
            let data = '@namespace url(http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul);\
                \
                @-moz-document url("about:addons"), url("chrome://mozapps/content/extensions/extensions.xul") {\
                    #category-userchromejs > .category-icon {\
                        list-style-image: url(data:image/png;base64,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);\
                    }\
                }';
            let styleService = Cc["@mozilla.org/content/style-sheet-service;1"].getService(Ci.nsIStyleSheetService);
            let styleURI = Services.io.newURI("data:text/css," + encodeURIComponent(data), null, null);
            styleService.loadAndRegisterSheet(styleURI, Ci.nsIStyleSheetService.USER_SHEET);

            this.unloads.push(function(){
                styleService.unregisterSheet(styleURI, Ci.nsIStyleSheetService.USER_SHEET);
            });
        },
    };

    function ScriptAddon(aScript){
        this._script = aScript;

        this.id = this._script.url;
        this.name = this._script.filename;
        this.description = this._script.description;
        this.enabled = !userChrome_js.scriptDisable[this.name];

        // 我修改过的 userChrome.js 新增的
        this.version = this._script.version || null;
        this.author = this._script.author || null;
        this.homepageURL = this._script.homepageURL || null;
        this.reviewURL = this._script.reviewURL || null;
        this.reviewCount = 0;
        this.fullDescription = this._script.fullDescription || null;
        this.downloadURL = this._script.downloadURL || null;

        this.iconURL = iconURL;
    }

    ScriptAddon.prototype = {
        version: null,
        type: "userchromejs",
        isCompatible: true,
        blocklistState: 0,
        appDisabled: false,
        scope: AddonManager.SCOPE_PROFILE,
        name: null,
        creator: null,
        pendingOperations: AddonManager.PENDING_NONE,  // 必须，否则所有都显示 restart
        operationsRequiringRestart: 6,
        // operationsRequiringRestart: AddonManager.OP_NEEDS_RESTART_DISABLE,

        get optionsURL(){
            if (this.isActive && this._script.optionsURL)
                return this._script.optionsURL;
        },

        get isActive() !this.userDisabled,
        get userDisabled() !this.enabled,
        set userDisabled(val) {
            if (val == this.userDisabled) {
                return val;
            }

            AddonManagerPrivate.callAddonListeners(val ? 'onEnabling' : 'onDisabling', this, false);

            if(this.pendingOperations == AddonManager.PENDING_NONE){
                this.pendingOperations = val ? AddonManager.PENDING_DISABLE : AddonManager.PENDING_ENABLE;
            }else{
                this.pendingOperations = AddonManager.PENDING_NONE;
            }

            this.enabled = !val;
            if(window.userChromejs){
                userChromejs.chgScriptStat(this.name);
            }

            AddonManagerPrivate.callAddonListeners(val ? 'onEnabled' : 'onDisabled', this);
        },
        get permissions() {
            // var perms = AddonManager.PERM_CAN_UNINSTALL;
            // perms |= this.userDisabled ? AddonManager.PERM_CAN_ENABLE : AddonManager.PERM_CAN_DISABLE;
            var perms = this.userDisabled ? AddonManager.PERM_CAN_ENABLE : AddonManager.PERM_CAN_DISABLE;
            // if (this.updateURL) perms |= AddonManager.PERM_CAN_UPGRADE;
            return perms;
        },

        uninstall: function() {
            AddonManagerPrivate.callAddonListeners("onUninstalling", this, false);
            this.needsUninstall = true;
            this.pendingOperations |= AddonManager.PENDING_UNINSTALL;
            AddonManagerPrivate.callAddonListeners("onUninstalled", this);
        },
        cancelUninstall: function() {
            this.needsUninstall = false;
            this.pendingOperations ^= AddonManager.PENDING_UNINSTALL;
            AddonManagerPrivate.callAddonListeners("onOperationCancelled", this);
        },
    };


    AM_Helper.init();

    userChromeJSAddon.init();

    function $C(name, attr) {
        var el = document.createElement(name);
        if (attr) Object.keys(attr).forEach(function(n) el.setAttribute(n, attr[n]));
        return el;
    }
})();
