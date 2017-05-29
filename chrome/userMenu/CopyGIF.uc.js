//==UserScript==
// @name         CopyGIF.uc.js
// @description  copy animated Gif image
// @author       紫云飞
// @include      main
// @charset      utf-8
// @version      1.1
// version      1.0
// @downloadURL  http://files.cnblogs.com/files/ziyunfei/CopyGIF.uc.js
// @note         2015.09.13 (1) 改为Cache2 (2) 加了个null
// 2014.12.03 Firefox34 用cache2有效

        location == "chrome://browser/content/browser.xul" && (function () {
                var contextMenu = document.getElementById("contentAreaContextMenu");
                (function (menuitem) {
                        menuitem.id = "context-copygif";
                        menuitem.setAttribute("label", "Copy this image");
                        menuitem.setAttribute("class", "menuitem-iconic");
                        menuitem.setAttribute("image", "");
                        menuitem.addEventListener("command", function () {
                                var Cc = Components.classes;
                                var Ci = Components.interfaces;
                                var trans = Cc["@mozilla.org/widget/transferable;1"].createInstance(Ci.nsITransferable);
                                var str = Cc["@mozilla.org/supports-string;1"].createInstance(Ci.nsISupportsString);
                                var file = Cc["@mozilla.org/file/local;1"].createInstance(Ci.nsILocalFile);
                                var partialPath = "\\Cache2\\" + (+new Date) + ".gif"; //Firefox34用cache2
                                try {
                                        var completePath = Cc["@mozilla.org/preferences-service;1"].getService(Ci.nsIPrefService).getCharPref("browser.cache.disk.parent_directory") + partialPath;
                                } catch (e) {
                                        var completePath = Cc["@mozilla.org/file/directory_service;1"].getService(Ci.nsIProperties).get("ProfLD", Ci.nsILocalFile).path + partialPath;
                                }
                                file.initWithPath(completePath);
                                Cc["@mozilla.org/embedding/browser/nsWebBrowserPersist;1"].createInstance(Ci.nsIWebBrowserPersist).saveURI(Cc["@mozilla.org/network/io-service;1"].getService(Ci.nsIIOService).newURI(gContextMenu.mediaURL || gContextMenu.imageURL, null, null), null, null, null, null, null, file, null);
                                str.data = '<img src="file:///' + completePath + '">';
                                trans.setTransferData("text/html", str, str.data.length * 2);
                                Cc["@mozilla.org/widget/clipboard;1"].createInstance(Ci.nsIClipboard).setData(trans, null, 1);
                        }, false);
                })(contextMenu.insertBefore(document.createElement("menuitem"), document.getElementById("context-copyimage")));
                contextMenu.addEventListener("popupshowing", function () {
                        gContextMenu.showItem("context-copygif", gContextMenu.onImage);
                }, false);
        })()
