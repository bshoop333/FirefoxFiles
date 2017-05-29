keys['F4']= // EHH扩展
    "window._ehhWrapper.toggleSelection();";

// keys['q']= //添加高亮关键词
//     "gWHT.addWord();";
// 
// keys['w']= //取消高亮工具条
//     "gWHT.destroyToolbar();";

// keys[1]=
// 	"BrowserOpenTab();";

// keys[5]= // 一键打开标签页组
//     function(){
//         var x = prompt("输入变量", "").replace(/ /g,'+');
//         if(x){
//             var newtabs=["https://www.baidu.com/s?wd="+x+"+新闻", "https://www.baidu.com/s?wd="+x+"+价格", "https://www.baidu.com/s?wd="+x+"+图片"];
//             var i=0;
//             while(i<newtabs.length){
//                 gBrowser.selectedTab=gBrowser.addTab(newtabs[i]);
//                 i++;
//             }
//         }
//     }

// keys['F4']= // 生成二维码
//      function(){
//          document.querySelector("menuitem[label='Show QR']").click();
//      }

// keys['F4']= // 生成二维码
//     "document.querySelector('menuitem[label=\"Show QR\"]').click()";

// keys['alt+c']= // 打开BrowserToolbox
//     "BrowserToolboxProcess.init();";

// keys['a']= //自动翻页上一页
//     function(){
//         if(content.ap) uAutoPagerize.gotoprev();
//         else
//             if(uAutoPagerize && content.document.body.getAttribute("name")=="MyNovelReader")
//                 uAutoPagerize.gotoprev(content, ".title");
//             else content.scrollByPages(-1);
//         };

// keys['c']= //关闭当前页
//     "gBrowser.removeCurrentTab();";

// keys['d']= //自动翻页下一页
//     function(){
//         if(content.ap) uAutoPagerize.gotonext();
//         else
//             if(uAutoPagerize && content.document.body.getAttribute("name") == "MyNovelReader")
//             uAutoPagerize.gotonext(content, ".title");
//         else content.scrollByPages(1);
//     };

// keys['e']= //evernote clear
//     "__readable_by_evernote.button__call(event);";

// keys['f']= //站内搜索
//     "var s = prompt('站内搜索——请输入待搜索字符串', '');if (s.length > 0) gBrowser.addTab('http://www.google.de/search?q=site:' + encodeURIComponent(content.location.host) + ' ' + encodeURIComponent(s));";

// keys['g']= //自动滚屏
//     function(){
//         gBrowser.loadURI("javascript:var%20AS_interval_pointer;AS_speed=4;AS_speed_temp=4;AS_speed_pairs=%5B%5B0,0%5D,%5B1,200.0%5D,%5B1,120.0%5D,%5B1,72.0%5D,%5B1,43.2%5D,%5B1,25.9%5D,%5B2,31.0%5D,%5B4,37.2%5D,%5B8,44.8%5D,%5B8,26.4%5D,%5B16,32.0%5D%5D;AS_last_onkeypress=document.onkeypress;AS_stop=function()%7BclearTimeout(AS_interval_pointer)%7D;AS_start=function()%7BAS_abs_speed=Math.abs(AS_speed);AS_direction=AS_speed/AS_abs_speed;AS_speed_pair=AS_speed_pairs%5BAS_abs_speed%5D;AS_interval_pointer=setInterval('scrollBy(0,'+AS_direction*AS_speed_pair%5B0%5D+');%20if((pageYOffset%3C=1)%7C%7C(pageYOffset==document.height-innerHeight))%20AS_speed=0;',AS_speed_pair%5B1%5D);%7D;AS_adj=function(q)%7BAS_speed+=q;if(Math.abs(AS_speed)%3E=AS_speed_pairs.length)%7BAS_speed=(AS_speed_pairs.length-1)*(AS_speed/Math.abs(AS_speed));%7D%7D;AS_pause=function()%7Bif(AS_speed!=0)%7BAS_speed_temp=AS_speed;AS_speed=0;%7Delse%7BAS_speed=AS_speed_temp;%7D%7D;document.onkeypress=function(e)%7Bif(e.charCode==113)%7BAS_stop();document.onkeypress=AS_last_onkeypress;return;%7Delse%7Bswitch(e.charCode)%7Bcase%2057:AS_speed=4;break;case%2048:AS_speed=0;break;case%2061:AS_adj(1);break;case%2045:AS_adj(-1);break;case%2032:AS_pause();break;default:break;%7D;%7D;AS_stop();AS_start();%7D;AS_stop();AS_start();");
//     };

// keys['e']= //整个页面截图
//     function(){
//         var canvas=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");
//         canvas.width=content.document.documentElement.scrollWidth;
//         canvas.height=content.document.documentElement.scrollHeight;
//         var ctx=canvas.getContext("2d");
//         ctx.drawWindow(content,0,0,canvas.width,canvas.height,"rgb(255,255,255)");
//         saveImageURL(canvas.toDataURL(),content.document.title+".png",null,null,null,null,document);
//     };

// keys['p']=
//     "OpenBrowserWindow({private: true});";//隐私窗口

// keys['r']= //恢复关闭的标签
//     "undoCloseTab();";

// keys['c']= //snap links
//     "snapLinks.init();";

// keys["p+alt"]=// 选项
//     "openPreferences();";

// keys["x"]=// 硕鼠解析视频链接
//     "gBrowser.selectedTab = gBrowser.addTab('http://www.flvcd.com/parse.php?kw=' + encodeURIComponent(content.location) + '&flag=&format=super')";

// keys['h']=// 打开主页
//     "BrowserHome();";
 
// keys['b']=// 在当前标签打开这个网页
//     function(){
//         gBrowser.loadURI('http://www.google.com/');
//     };

// keys['a']=// 在新标签打开这个网页
//     function(){
//         var myUrl = "http://www.baidu.com";
//         var ff = document.getElementById("content");
//         var tab = ff.addTab(myUrl);
//         ff.selectedTab = tab;
//     };

// keys['x']= //前进
//     "getWebNavigation().canGoForward && getWebNavigation().goForward();";

// keys['z']= //后退
//     "getWebNavigation().canGoBack && getWebNavigation().goBack();";

// keys['x']= //增强型：前进|下页
//     function(){
//         var nav=gBrowser.webNavigation;
//         if(nav.canGoForward)
//             nav.goForward();
//         else{
//             var document=window._content.document;
//             var links=document.links;
//             for(i=0;i<links.length;i++){
//                 if((links[i].text=='下页')||(links[i].text=='下頁')||(links[i].text=='下一頁')||(links[i].text=='下一页')||(links[i].text=='下一页>')||(links[i].text=='下一页 »')||(links[i].text=='下一页>>')||(links[i].text=='[下一页]')||(links[i].text=='翻下页')||(links[i].text=='【下一页】')||(links[i].text=='Next')||(links[i].text=='next')||(links[i].text=='››')||(links[i].text=='>'))
//                     document.location=links[i].href;
//             }
//         }
//     };

// keys['z']= //增强型：后退|上页
//     function(){
//         var nav=gBrowser.webNavigation;
//         if(nav.canGoBack) nav.goBack();
//         else{
//             var document=window._content.document;
//             var links=document.links;
//             for(i=0;i<links.length;i++){
//                 if ((links[i].text=='上页')||(links[i].text=='上頁')||(links[i].text=='上一頁')||(links[i].text=='上一页')||(links[i].text=='<上一页')||(links[i].text=='« 上一页')||(links[i].text=='<<上一页')||(links[i].text=='[上一页]')||(links[i].text=='翻上页')||(links[i].text=='【上一页】')||(links[i].text=='Previous')||(links[i].text=='Prev')||(links[i].text=='previous')||(links[i].text=='prev')||(links[i].text=='‹‹')||(links[i].text=='<'))
//                     document.location=links[i].href;
//             }
//         }
//     };

// keys['t']= //NoScript临时允许全部
//     "noscriptOverlay.allowPage();";

// keys["Ctrl+Alt+R"]= //重启
//     "Services.appinfo.invalidateCachesOnRestart() || Application.restart();";
 
// keys["Shift+G"]= // サイトの CSS を ON/OFF トグル
//     "var s = getMarkupDocumentViewer();s.authorStyleDisabled = !s.authorStyleDisabled;";

// keys["VK_F12+Ctrl"]= //firefox选项
//     "openPreferences();";

// keys["U+Ctrl"]= //撤销关闭标签页
//     "undoCloseTab();";

// keys['a']=
//     function(){ //关闭当前标签并定位到左边的标签
//         var tab = gBrowser.mCurrentTab;
//         if (tab.previousSibling)
//             gBrowser.mTabContainer.selectedIndex--;
//         gBrowser.removeTab(tab);
//     };

// keys['a'] =
//     function(){ // 关闭当前标签并定位到右边的标签
//         var tab = gBrowser.mCurrentTab;
//         if (tab.nextSibling)
//             gBrowser.mTabContainer.selectedIndex++;
//         gBrowser.removeTab(tab);
//     };

// keys['w']=
//     function(){ // 关闭左边标签页
//         var tab = gBrowser.mCurrentTab.boxObject.previousSibling;
//         if (tab) gBrowser.removeTab(tab);
//     };

// keys['e']= //关闭右边标签页
//     function(){
//         var tab = gBrowser.mCurrentTab.boxObject.nextSibling;
//         if (tab) gBrowser.removeTab(tab);
//     };

// keys['e']= //关闭其他标签页
//     function(){
//         gBrowser.removeAllTabsBut(gBrowser.mCurrentTab);
//     };

// keys['f']= // 关闭所有标签页
//     function(){
//         gBrowser.removeAllTabsBut(gBrowser.mCurrentTab);
//         gBrowser.removeCurrentTab();
//     };

// keys['z']= //撤消关闭标签
//     function(ev){
//         undoCloseTab();
//     }

// keys['w'] = //复制当前标签页
//     function(){
//         var oldHistory = gBrowser.webNavigation.sessionHistory;
//         gBrowser.selectedTab = gBrowser.addTab("about:blank");
//         var newHistory = gBrowser.webNavigation.sessionHistory;
//         newHistory.QueryInterface(Components.interfaces.nsISHistoryInternal);
//         for (var i = 0; i < oldHistory.count; i++)
//             newHistory.addEntry(oldHistory.getEntryAtIndex(i, false), true);
//         if (oldHistory.count)
//             gBrowser.webNavigation.gotoIndex(oldHistory.index)
//     };

// keys['e']= //重新载入左边所有标签页
//     function(){
//         var browsers = gBrowser.browsers;
//         var i = gBrowser.mCurrentTab._tPos - 1;
//         var l = -1;
//         for(; i > l; i--)
//             try{
//                 browsers[i].reload();
//             }
//             catch   (err){};
//     }

// keys['e']= // 重新载入右边所有标签页
//     function(){
//         var browsers = gBrowser.browsers;
//         var i = gBrowser.mCurrentTab._tPos + 1;
//         var l = browsers.length;
//         for (; i < l; i++)
//             try {
//                 browsers[i].reload();
//             } catch (err) {};
//     };
// 
// keys['e'] = //重新载入其它标签页
//     function(){
//         var browsers = gBrowser.browsers;
//         var i = 0;
//         var l = browsers.length;
//         var x = gBrowser.mCurrentTab._tPos;
//         for (; i < l; i++)
//             if (i != x) try {
//                 browsers[i].reload();
//             } catch (err) {};
//     };

// keys[','] = //选择下一个标签
//     function(ev) {
//         getBrowser().mTabContainer.advanceSelectedTab(1, true);
//     };

// keys['m']= //选择上一个标签
//     function(ev) {
//         getBrowser().mTabContainer.advanceSelectedTab(-1, true);
//     };

// keys['e']= //定位到最左边标签页
//     function(){
//         gBrowser.selectedTab = gBrowser.mTabContainer.firstChild;
//     };

// keys['r']= //定位到最右边标签页
//     function(){
//         gBrowser.selectedTab = gBrowser.tabContainer.childNodes[gBrowser.tabContainer.childNodes.length - 1];
//     };

// keys['1']= //选中第1个标签，注意ctrl+1是原来默认的
//     function(ev, arg) {
//         getBrowser().selectedTab = getBrowser().mTabs[0]
//     };

// keys['2']= //选中第2个标签
//     "gBrowser.selectTabAtIndex(1, event);";

// keys[',']= // 选择下一个标签
//     function(ev) {
//         getBrowser().mTabContainer.advanceSelectedTab(1, true);
//     };

// keys['m']= // 选择上一个标签
//     function(ev) {
//         getBrowser().mTabContainer.advanceSelectedTab(-1, true);
//     };

// keys['e']= // 定位到最左边标签页
//     function(){
//         gBrowser.selectedTab = gBrowser.mTabContainer.firstChild;
//     };

// keys['r']= // 定位到最右边标签页
//     function(){
//         gBrowser.selectedTab = gBrowser.tabContainer.childNodes[gBrowser.tabContainer.childNodes.length - 1];
//     };

// keys['1']= // 选中第1个标签，注意ctrl+1是原来默认的
//     function(ev, arg) {
//         getBrowser().selectedTab = getBrowser().mTabs[0]
//     };

// keys['2']= // 选中第2个标签
//     "gBrowser.selectTabAtIndex(1, event);";

// 
// keys['n']= // 打开新窗口
//     function(ev) {
//         OpenBrowserWindow();
//     };

// keys['p']=
//     "OpenBrowserWindow({private: true});"; // 打开隐私窗口

// keys['b']= // 关闭窗口
//     function(ev) {
//         closeWindow(true);
//     };

// keys['.']= // 最小化窗口
//     function(ev) {
//         window.minimize();
//     };

// keys['U']= // 最大化还原或者窗口
//     function(ev) {
//         (window.windowState == window.STATE_MAXIMIZED) ? window.restore() : window.maximize();
//     };

// keys['g']= // 全屏
//     function(ev) {
//         BrowserFullScreen();
//     };

// keys['b']= // 页面区域布满整个窗口
//     function(ev, arg) {
//         var toolbox = document.getElementById("navigator-toolbox");
//         toolbox.hidden = !toolbox.hidden;
//         if (arg || !toolbox.hidden) {
//             var statusbar = document.getElementById("status-bar");
//             statusbar.hidden = toolbox.hidden;
//         }
//     };
//  
//  
// 
// keys['-']= // 页面缩小
//     function(ev) {
//         FullZoom.reduce();
//     };

// keys['=']= // 页面放大
//     function(ev) {
//         FullZoom.enlarge();
//     };

// keys['0']= // 页面重置
//     function(ev) {
//         FullZoom.reset();
//     };

// keys['u']= // 向上滚动
//     "goDoCommand('cmd_scrollLineUp');";

// keys['j']= // 向上滚动
//     "goDoCommand('cmd_scrollLineDown');";

// keys['v']= // 页面向左滚动
//     function(ev) {
//         goDoCommand('cmd_scrollLeft');
//     };

// keys['v']= // 页面向右滚动
//     function(ev) {
//         goDoCommand('cmd_scrollRight');
//     };

// keys['i']= // 向上翻页（与shift+space同）
//     function(ev) {
//         goDoCommand("cmd_scrollPageUp");
//     };

// keys['i']= // 向上翻页
//     "content.scrollByPages(-1);";

// keys['k']= // 向下翻页（与space同）
//     function(ev) {
//         goDoCommand("cmd_scrollPageDown");
//     };

// keys['k']= // 向下翻页
//     "content.scrollByPages(1);";
//  
// keys['o']= // 滚动到顶部
//     function(ev) {
//         goDoCommand("cmd_scrollTop");
//     };
//  
// keys['l']= // 滚动到底部
//     function(ev) {
//         goDoCommand("cmd_scrollBottom");
//     };
//  
// keys['U']= // 查看页面信息
//     function(ev) {
//         BrowserPageInfo();
//     };

// keys['a']= // 复制当前页的URL
//     function(){
//         var gClipboardHelper = Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Components.interfaces.nsIClipboardHelper);
//         gClipboardHelper.copyString(window._content.location.href);
//     };

// keys['a']= // 复制当前标签页标题
//     function(){
//         Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Components.interfaces.nsIClipboardHelper)
//             .copyString(content.document.title);
//     };
//  
// keys['c']= // 复制URL和标题（格式为：“标题” - “地址”）
//     function(){
//         Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Components.interfaces.nsIClipboardHelper).copyString(content.document.title + " - " + content.location);
//     };
//  
// keys['b']= // 当鼠标放在链接上时，按键复制链接地址
//     function(){
//         if (XULBrowserWindow.overLink) Components.classes["@mozilla.org/widget/clipboardhelper;1"].
//             getService(Components.interfaces.nsIClipboardHelper).copyString(XULBrowserWindow.overLink);
//     };
//  
//  
// 
// keys['w']= // 后退
//     function(ev) {
//         BrowserBack();
//     };

// keys['w']= // 后退
//     "getWebNavigation().canGoBack && getWebNavigation().goBack();";

// keys['e']= // 前进
//     function(ev) {
//         BrowserForward();
//     };

// keys['e']= // 前进
//     "getWebNavigation().canGoForward && getWebNavigation().goForward();";

// keys['n']= // 后退到最后
//     "getWebNavigation().gotoIndex(0);";

// keys['a']= // 后退到最后
//     function(){
//         if (gBrowser.sessionHistory.index > 0) gBrowser.gotoIndex(0);
//     };

// keys['b']= // 前进到最前
//     function(){
//         var nav = gBrowser.webNavigation;
//         var hist = nav.sessionHistory;
//         nav.gotoIndex(hist.count - 1);
//     };

// keys['r']= // 刷新
//     function(ev) {
//         BrowserReload();
//     };

// keys['r']= // 刷新页面
//     "gBrowser.mCurrentBrowser.reload();";

// keys['u']= // 刷新（跳过缓存）
//     function(ev) {
//         BrowserReloadSkipCache();
//     };

// keys['r']= // 跳过缓存刷新页面
//     "BrowserReloadSkipCache();";

// keys['n']= // 刷新所有页面
//     "gBrowser.reloadAllTabs();";

// keys['q']= // 停止加载内容
//     function(ev) {
//         document.getElementById("Browser:Stop").doCommand();
//     };

// keys['q']= // 停止载入当前页面
//     "BrowserStop();";

// keys['a']= // 停止载入所有页面
//     function(){
//         Array.map(gBrowser.browsers, function(browser) {
//             browser.stop()
//         });
//     };

// keys['m']= // 网址向上一层
//     function(){
//         loadURI(content.location.host + content.location.pathname.replace(/\/[^\/]+\/?$/, ""));
//     };

// keys['p']= // 打开上一级目录
//     function(ev) {
//         original code by gomita-san
//             var uri = getBrowser().currentURI;
//         if (uri.path == "/") return;
//         var pathList = uri.path.split("/");
//         if (!pathList.pop()) pathList.pop();
//         loadURI(uri.prePath + pathList.join("/") + "/");
//     };

// keys['y']= // 打开根目录
//     function(ev) {
//         original code by silog-san
//             var uri = window._content.location.href;
//         if (uri == null) return;
//         var root = uri.match(/^[a-z]+:\/\/[^/]+\// );
//         if (root) loadURI(root, null, null);
//     };

// keys['x']= // 聚焦到地址栏
//     "openLocation();";

// keys['U']= // 光标聚焦到浏览区域
//     function(ev, arg) {
//         content.focus();
//     };

// keys['f']= // 查找
//     "gFindBar.onFindCommand();";

// keys['b']= // 开关查找栏
//     function(){
//         gFindBar.hidden ? gFindBar.onFindCommand() : gFindBar.close();
//     };

// keys['ctrl+g']= // 开关查找栏，默认高亮所有
//     function(){
//         if (gFindBar.hidden) {
//             gFindBar.onFindCommand();
//             HighlightText();
//         }
//         else
//             gFindBar.close();
//     };

// keys['c']= // 开关导航栏
//     function(){
//         var toolbar = document.getElementById("nav-bar");
//         toolbar.collapsed = !toolbar.collapsed;
//         document.persist(toolbar.id, "collapsed");
//     };

// keys['a']= // 开关书签工具栏
//     function(){
//         const bmToolbar = document.getElementById("PersonalToolbar");
//         bmToolbar.collapsed = !bmToolbar.collapsed;
//     };

// keys['b']= // 开关书签工具栏
//     function(){
//         var toolbar = document.getElementById("PersonalToolbar");
//         toolbar.collapsed = !toolbar.collapsed;
//         document.persist(toolbar.id, "collapsed");
//     };

// keys['d']= // 开关标签栏
//     function(){
//         function tbtoggle(thisBTN) {
//             thisBTN.checked = !thisBTN.checked;
//             if (thisBTN.checked) {
//                 gBrowser.setStripVisibilityTo(false);
//                 gBrowser.mPrefs.setBoolPref("browser.tabs.forceHide", true);
//             }
//             else {
//                 gBrowser.setStripVisibilityTo(true);
//                 gBrowser.mPrefs.setBoolPref("browser.tabs.forceHide", false);
//             }
//         }
//         tbtoggle(this);
//     };
 
 

// keys['VK_F12+Ctrl']= // Firefox选项
//     "openPreferences();";

// keys['c']= // 参数设置
//     "gBrowser.selectedTab = gBrowser.addTab('about:config');";

// keys['U']= // 打开Chrome目录
//     function(){
//         Components.classes["@mozilla.org/file/directory_service;1"].getService(Components.interfaces.nsIProperties).get("UChrm", Components.interfaces.nsILocalFile).reveal();
//     };

// keys['a']= // 打开当前Firefox实例配置文件夹
//     function(){
//         Components.classes["@mozilla.org/file/directory_service;1"].getService(Components.interfaces.nsIProperties).get("ProfD", Components.interfaces.nsILocalFile).launch();
//     };

// keys['j']= // 我的足迹（下载）
//     "BrowserDownloadsUI();";

// keys['H']= // 我的足迹（历史）
//     "PlacesCommandHook.showPlacesOrganizer('History');";

// keys['a']= // 附加组件
//     "BrowserOpenAddonsMgr();";

// keys['N']= // 重启浏览器
//     "Application.restart();";

// keys["Alt+Q"]= // 删除启动缓存并重启
//     "Services.appinfo.invalidateCachesOnRestart()||Application.restart();";

// keys['c']= // 关闭所有正在运行的Firefox程序
//     function(){
//         goQuitApplication();
//     };

// keys["Shift+G"]= // サイトの CSS を ON/OFF トグル
//     "var s = getMarkupDocumentViewer();s.authorStyleDisabled = !s.authorStyleDisabled;";

// keys['c']= // Display JavaScript console 显示JavaScript控制台
//     function(ev) {
//         toJavaScriptConsole();
//     };
 
// keys['b']= // 新标签前台搜索选中文字（以当前搜索栏搜索引擎）
//     function(){
//         BrowserSearch.loadSearch(getBrowserSelection(), true);
//     };

// keys['a']= // 新标签后台搜索选中文字（以当前搜索栏搜索引擎）
//     function(){
//         var ss = Cc["@mozilla.org/browser/search-service;1"].getService(Ci.nsIBrowserSearchService);
//         var submission = ss.defaultEngine.getSubmission(getBrowserSelection(), null);
//         gBrowser.loadOneTab(submission.uri.spec, null, null, submission.postData, true, false);
//     };

// keys['d']= // 在当前标签页搜索（以当前搜索栏搜索引擎）
//     function(){
//         BrowserSearch.loadSearch(getBrowserSelection(), false);
//     };

// keys['s']= // Google站内搜索（弹框），后台新标签
//     "var s = prompt('Google站内搜索（后台）——请输入要搜索的内容', '');if (s.length > 0) gBrowser.addTab('http://www.google.com/search?q=site:' + encodeURIComponent(content.location.host) + ' ' + encodeURIComponent(s));";

// keys['c']= // google搜索选中文字
//     function(){
//         gBrowser.selectedTab = gBrowser.addTab('http://www.google.com/search?q=' + encodeURIComponent(getBrowserSelection()));
//     };

// keys['c']= // baidu搜索选中文字
//     function(){
// gBrowser.selectedTab = gBrowser.addTab('http://www.baidu.com/s?wd=' + getBrowserSelection());
// };

// keys['U']= // 打开本地文件
//     function(ev) {
//         BrowserOpenFileWindow();
//     };

// keys['U']= // 保存当前网页
//     function(ev) {
//         saveDocument(window.content.document);
//     };

// keys['i']= // 用IE打开当前页
//     function(){
//         try {
//             var file = Components.classes["@mozilla.org/file/directory_service;1"].getService(Components.interfaces.nsIProperties).get("ProgF", Components.interfaces.nsILocalFile);
//             file.append("Internet Explorer");
//             file.append("iexplore.exe");
//             var process = Cc["@mozilla.org/process/util;1"].createInstance(Ci.nsIProcess);
//             process.init(file);
//             process.run(false, [content.location.href], 1);
//         }
//         catch (ex)
//             alert("\u6253\u5f00IE\u5931\u8d25!")
//     };

// keys['ctrl+alt+p']= // 整个页面截图保存到
//     function(){
//         var canvas = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
//         canvas.width = content.document.documentElement.scrollWidth;
//         canvas.height = content.document.documentElement.scrollHeight;
//         var ctx = canvas.getContext("2d");
//         ctx.drawWindow(content, 0, 0, canvas.width, canvas.height, "rgb(255,255,255)");
//         saveImageURL(canvas.toDataURL(), content.document.title + ".png", null, null, null, null, document);
//     };
// keys['t']=
//     "noscriptOverlay.allowPage();"; // NoScript临时允许全部

// keys['c']=
//     function(){
//         var sidebar_box = document.getElementById('sidebar-box');
//         if (sidebar_box.hidden) {
//             openWebPanel("Google Talk", "http://talkgadget.google.com/talkgadget/popout");
//         }
//         else    toggleSidebar();
//     }; // 在侧边栏开关google talk

// keys['n']= // 打开新的浏览器窗口
//     function(ev) {
//         OpenBrowserWindow();
//     };

// keys['p']= //打开隐私窗口
//     "OpenBrowserWindow({private: true});";

// keys['b']= //关闭窗口
//     function(ev) {
//         closeWindow(true);
//     };

// keys['.']= //最小化窗口
//     function(ev) {
//         window.minimize();
//     };

// keys['U']= //最大化还原或者窗口
//     function(ev) {
//         (window.windowState == window.STATE_MAXIMIZED) ? window.restore() : window.maximize();
//     };

// keys['g']= //全屏
//     function(ev) {
//         BrowserFullScreen();
//     };

// keys['b']= //页面区域布满整个窗口
//     function(ev, arg) {
//         var toolbox = document.getElementById("navigator-toolbox");
//         toolbox.hidden = !toolbox.hidden;
//         if (arg || !toolbox.hidden) {
//             var statusbar = document.getElementById("status-bar");
//             statusbar.hidden = toolbox.hidden;
//         }
//     };

// keys['-']= //页面缩小
//     function(ev) {
//         FullZoom.reduce();
//     };

// keys['=']= //页面放大
//     function(ev) {
//         FullZoom.enlarge();
//     };

// keys['0']= //页面重置
//     function(ev) {
//         FullZoom.reset();
//     };

// keys['u']= //向上滚动
//     "goDoCommand('cmd_scrollLineUp');";

// keys['j']= //向上滚动
//     "goDoCommand('cmd_scrollLineDown');";

// keys['v']= //页面向左滚动
//     function(ev) {
//         goDoCommand('cmd_scrollLeft');
//     };

// keys['v']= //页面向右滚动
//     function(ev) {
//         goDoCommand('cmd_scrollRight');
//     };

// keys['i']= //向上翻页（与shift+space同）
//     function(ev) {
//     goDoCommand("cmd_scrollPageUp");
//     };

// keys['i']= //向上翻页
//     "content.scrollByPages(-1);";

// keys['k']= //向下翻页（与space同）
//     function(ev) {
//         goDoCommand("cmd_scrollPageDown");
//     };

// keys['k']= //向下翻页
//     "content.scrollByPages(1);";

// keys['o']= //滚动到顶部
//     function(ev) {
//         goDoCommand("cmd_scrollTop");
//     };

// keys['l']= //滚动到底部
//     function(ev) {
//         goDoCommand("cmd_scrollBottom");
//     };

// keys['U']= //查看页面信息
//     function(ev) {
//         BrowserPageInfo();
//     };

// keys['a']= //复制当前页的URL
//     function(){
//         var gClipboardHelper = Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Components.interfaces.nsIClipboardHelper);
//         gClipboardHelper.copyString(window._content.location.href);
//     };

// keys['a']= //复制当前标签页标题
//     function(){
//         Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Components.interfaces.nsIClipboardHelper)
//         .copyString(content.document.title);
//     };

// keys['c']= //复制URL和标题（格式为：“标题” - “地址”）
//     function(){
//         Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Components.interfaces.nsIClipboardHelper).copyString(content.document.title + " - " + content.location);
//     };

// keys['b']= //当鼠标放在链接上时，按键复制链接地址
//     function(){
//         if (XULBrowserWindow.overLink) Components.classes["@mozilla.org/widget/clipboardhelper;1"].
//         getService(Components.interfaces.nsIClipboardHelper).copyString(XULBrowserWindow.overLink);
//     };

// keys['w']= //后退
//     function(ev) {
//         BrowserBack();
//     };

// keys['w']= //后退
//     "getWebNavigation().canGoBack && getWebNavigation().goBack();";

// keys['e']= //前进
//     function(ev) {
//         BrowserForward();
//     };

// keys['e']= //前进
//     "getWebNavigation().canGoForward && getWebNavigation().goForward();";

// keys['n']= //后退到最后
//     "getWebNavigation().gotoIndex(0);";

// keys['a']= //后退到最后
//     function(){
//         if (gBrowser.sessionHistory.index > 0) gBrowser.gotoIndex(0);
//     };

// keys['b']= //前进到最前
//     function(){
//         var nav = gBrowser.webNavigation;
//         var hist = nav.sessionHistory;
//         nav.gotoIndex(hist.count - 1);
//     };

// keys['r']= //刷新
//     function(ev) {
//     BrowserReload();
//     };

// keys['r']= //刷新页面
//     "gBrowser.mCurrentBrowser.reload();";

// keys['u']= //刷新（跳过缓存）
//     function(ev) {
//         BrowserReloadSkipCache();
//     };

// keys['r']= //跳过缓存刷新页面
//     "BrowserReloadSkipCache();";

// keys['n']= //刷新所有页面
//     "gBrowser.reloadAllTabs();";

// keys['q']=  //停止加载内容
//     function(ev) {
//         document.getElementById("Browser:Stop").doCommand();
//     };

// keys['q']= //停止载入当前页面
//     "BrowserStop();";

// keys['a']= //停止载入所有页面
//     function(){
//         Array.map(gBrowser.browsers, function(browser) {
//             browser.stop()
//         });
//     };

// keys['m']= //网址向上一层
//     function(){
//         loadURI(content.location.host + content.location.pathname.replace(/\/[^\/]+\/?$/, ""));
//     };

// keys['p']= //打开上一级目录
//     function(ev) {
//         original code by gomita-san
//         var uri = getBrowser().currentURI;
//         if (uri.path == "/") return;
//         var pathList = uri.path.split("/");
//         if (!pathList.pop()) pathList.pop();
//         loadURI(uri.prePath + pathList.join("/") + "/");
//     };

// keys['y']= //打开根目录
//     function(ev) {
//         original code by silog-san
//         var uri = window._content.location.href;
//         if (uri == null) return;
//         var root = uri.match(/^[a-z]+:\/\/[^/]+\//);
//         if (root) loadURI(root, null, null);
//     };

// keys['x']= //聚焦到地址栏
//     "openLocation();";

// keys['U']= //光标聚焦到浏览区域
//     function(ev, arg) {
//         content.focus();
//     };

// keys['f']= //查找
//     "gFindBar.onFindCommand();";

// keys['b']= //开关查找栏
//     function(){
//         gFindBar.hidden ? gFindBar.onFindCommand() : gFindBar.close();
//     };

// keys['ctrl+g']= //开关查找栏，默认高亮所有
//     function(){
//         if (gFindBar.hidden) {
//             gFindBar.onFindCommand();
//             HighlightText();
//         }
//         else gFindBar.close();
//     };

// keys['c']= //开关导航栏
//     function(){
//         var toolbar = document.getElementById("nav-bar");
//         toolbar.collapsed = !toolbar.collapsed;
//         document.persist(toolbar.id, "collapsed");
//     };

// keys['a']= //开关书签工具栏
//     function(){
//         const bmToolbar = document.getElementById("PersonalToolbar");
//         bmToolbar.collapsed = !bmToolbar.collapsed;
//     };

// keys['b']= //开关书签工具栏
//     function(){
//         var toolbar = document.getElementById("PersonalToolbar");
//         toolbar.collapsed = !toolbar.collapsed;
//         document.persist(toolbar.id, "collapsed");
//     };

// keys['d']= //开关标签栏
//     function(){
//         function tbtoggle(thisBTN) {
//             thisBTN.checked = !thisBTN.checked;
//             if (thisBTN.checked) {
//                 gBrowser.setStripVisibilityTo(false);
//                 gBrowser.mPrefs.setBoolPref("browser.tabs.forceHide", true);
//             }
//             else {
//                 gBrowser.setStripVisibilityTo(true);
//                 gBrowser.mPrefs.setBoolPref("browser.tabs.forceHide",false);
//             }
//         }
//         tbtoggle(this);
//     };

// keys['VK_F12+Ctrl']= //Firefox选项
//     "openPreferences();";

// keys['c']= //参数设置
//     "gBrowser.selectedTab = gBrowser.addTab('about:config');";

// keys['U']= //打开Chrome目录
//     function(){
//         Components.classes["@mozilla.org/file/directory_service;1"].getService(Components.interfaces.nsIProperties).get("UChrm", Components.interfaces.nsILocalFile).reveal();
//     };

// keys['a']= //打开当前Firefox实例配置文件夹
//     function(){
//         Components.classes["@mozilla.org/file/directory_service;1"].
//         getService(Components.interfaces.nsIProperties).get("ProfD", Components.interfaces.nsILocalFile).launch();
//     };

// keys['j']= //我的足迹（下载）
//     "BrowserDownloadsUI();";

// keys['H']= //我的足迹（历史）
//     "PlacesCommandHook.showPlacesOrganizer('History');";

// keys['a']= //附加组件
//     "BrowserOpenAddonsMgr();";

// keys['N']= //重启浏览器
//     "Application.restart();";

// keys["Alt+Q"]= //删除启动缓存并重启
//     "Services.appinfo.invalidateCachesOnRestart() || Application.restart();";

// keys['c']= //关闭所有正在运行的Firefox程序
//     function(){
//         goQuitApplication();
//     };

// keys["Shift+G"]=// サイトの CSS を ON/OFF トグル
//     "var s = getMarkupDocumentViewer();s.authorStyleDisabled = !s.authorStyleDisabled;";

// keys['c']= //Display JavaScript console 显示JavaScript控制台
//     function(ev) {
//         toJavaScriptConsole();
//     };

// keys['b']= //新标签前台搜索选中文字（以当前搜索栏搜索引擎）
//     function(){
//         BrowserSearch.loadSearch(getBrowserSelection(), true);
//     };

// keys['a']= //新标签后台搜索选中文字（以当前搜索栏搜索引擎）
//     function(){
//         var ss = Cc["@mozilla.org/browser/search-service;1"].getService(Ci.nsIBrowserSearchService);
//         var submission = ss.defaultEngine.getSubmission(getBrowserSelection(), null);
//         gBrowser.loadOneTab(submission.uri.spec, null, null, submission.postData, true, false);
//     };

// keys['d']= //在当前标签页搜索（以当前搜索栏搜索引擎）
//     function(){
//         BrowserSearch.loadSearch(getBrowserSelection(), false);
//     };

// keys['s']= //Google站内搜索（弹框），后台新标签
//     "var s = prompt('Google站内搜索（后台）——请输入要搜索的内容', '');if (s.length > 0) gBrowser.addTab('http://www.google.com/search?q=site:' + encodeURIComponent(content.location.host) + ' ' + encodeURIComponent(s));";

// keys['c']= //google搜索选中文字
//     function(){
//         gBrowser.selectedTab = gBrowser.addTab('http://www.google.com/search?q=' + encodeURIComponent(getBrowserSelection()));
//     };

// keys['c']= //baidu搜索选中文字
//     function(){
//         gBrowser.selectedTab = gBrowser.addTab('http://www.baidu.com/s?wd=' + getBrowserSelection());
//     };

// keys['U']= //打开本地文件
//     function(ev) {
//         BrowserOpenFileWindow();
//     };

// keys['U']= //保存当前网页
//     function(ev) {
//         saveDocument(window.content.document);
//     };

// keys['i']= //用IE打开当前页
//     function(){
//         try {
//             var file = Components.classes["@mozilla.org/file/directory_service;1"].getService(Components.interfaces.nsIProperties).get("ProgF", Components.interfaces.nsILocalFile);
//             file.append("Internet Explorer");
//             file.append("iexplore.exe");
//             var process = Cc["@mozilla.org/process/util;1"].createInstance(Ci.nsIProcess);
//             process.init(file);
//             process.run(false, [content.location.href], 1);
//         }
//         catch (ex) {
//             alert("\u6253\u5f00IE\u5931\u8d25!")
//         }
//     };

// keys['ctrl+alt+p']= //整个页面截图保存到
//     function(){
//         var canvas = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
//         canvas.width = content.document.documentElement.scrollWidth;
//         canvas.height = content.document.documentElement.scrollHeight;
//         var ctx = canvas.getContext("2d");
//         ctx.drawWindow(content, 0, 0, canvas.width, canvas.height, "rgb(255,255,255)");
//         saveImageURL(canvas.toDataURL(), content.document.title + ".png", null, null, null, null, document);
//     };

// keys['t']= //NoScript临时允许全部
//     "noscriptOverlay.allowPage();";

// keys['c']= //在侧边栏开关google talk
//     function(){
//         var sidebar_box = document.getElementById('sidebar-box');
//         if (sidebar_box.hidden) {
//             openWebPanel("Google Talk", "http://talkgadget.google.com/talkgadget/popout");
//         }
//         else toggleSidebar();
//     };
