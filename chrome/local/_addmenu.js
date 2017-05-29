// 可以导入多文件的配置。默认在这个文件加载后执行。 include('');
// 调整位置3种方法: insertBefore, insertAfter, position

// 添加样式
// css('\
// /* 右键菜单 */ \
// #context-savepage
// { display: none; !important; }\
// ')
// app({
// label: "重启浏览器",
// oncommand: "Application.restart();"
// });

// 横排按钮1
var openMenu = GroupMenu({id: "RowMenu1", label: '打开...', condition:"noinput nocanvas nomedia", insertBefore: 'context-sep-navigation'});
openMenu([
	{
		label: "在其它浏览器中打开",
		tooltiptext: "左:Chrome\n右:IE",
		onclick: function(event){
			var url = addMenu.convertText("%RLINK_OR_URL%");
			if (event.button === 0)
				// addMenu.exec("/usr/bin/chromium", url);
				addMenu.exec("C:\\software\\mychrome\\MyChrome.exe", url);
			else if (event.button === 2)
                                addMenu.exec("C:\\Program Files\\Internet Explorer\\iexplore.exe", url);
		},
  image:"moz-icon://file:///C:/software/mychrome/MyChrome.exe?size=16"
		// image:"moz-icon://file:///c:/software/myfirefox/myfirefox.exe?size=16"
	},
	// {
	// 	label: '翻译当前页面',
	// 	tooltiptext: "左：有道翻译\n中：百度全文翻译\n右：iCIBA划词",
	// 	image:"chrome://browser/skin/translating-16@2x.png",
	// 	onclick: function(e){
	// 		switch(e.button){
	// 			case 0:
	// 				gBrowser.loadURI("javascript:%20void((function()%20{var%20element%20=%20document.createElement('script');element.id%20=%20'outfox_seed_js';element.charset%20=%20'utf-8',element.setAttribute('src',%20'http://fanyi.youdao.com/web2/seed.js?'%20+%20Date.parse(new%20Date()));document.body.appendChild(element);})())")
	// 				break;
	// 			case 1:
	// 				gBrowser.loadURI("javascript:(function(){window.open('http://fanyi.baidu.com/transpage?query='+document.location.href+'&from=auto&to=zh&source=url&render=1')})();")
	// 				break;
 //                case 2:
	// 				gBrowser.loadURI("javascript:var%20ICIBA_HUAYI_ALLOW=1,iciba_huaci_url=%22http://open.iciba.com/huaci/%22;void%20function(){if(!document.getElementById(%22icIBahyI-yi%22)){var%20a=document.createElement(%22div%22);a.id=%22icIBahyI-yi%22,a.style.display=%22none%22,a.style.zIndex=%224294967295%22,document.body.insertBefore(a,document.body.firstChild);var%20i=document.createElement(%22div%22);i.id=%22icIBahyI-main_box%22,i.style.display=%22none%22,document.body.insertBefore(i,document.body.firstChild);var%20e='%3Clink%20type=%22text/css%22%20rel=%22stylesheet%22%20href=%22'+iciba_huaci_url+'mini.css%22%20/%3E%3Cobject%20style=%22height:0px;width:0px;overflow:hidden;%22%20classid=%22clsid:d27cdb6e-ae6d-11cf-96b8-444553540000%22%20codebase=%22http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab%23version=6,0,0,0%22%20width=%220%22%20height=%220%22%20id=%22asound_hanci%22%20align=%22absmiddle%22%3E%3Cparam%20name=%22allowScriptAccess%22%20value=%22always%22%20/%3E%3Cparam%20name=%22movie%22%20value=%22http://www.iciba.com/top/asound.swf%22%20/%3E%3Cparam%20name=%22quality%22%20value=%22high%22%20/%3E%3Cembed%20src=%22http://www.iciba.com/top/asound.swf%22%20quality=%22high%22%20width=%220%22%20height=%220%22%20name=%22asound_hanci%22%20align=%22absmiddle%22%20allowScriptAccess=%22always%22%20type=%22application/x-shockwave-flash%22%20pluginspage=%22http://www.macromedia.com/go/getflashplayer%22%20/%3E%3C/object%3E%3Cdiv%20class=%22icIBahyI-main_title%22%20id=%22icIBahyI-main_title%22%20%3E%3Ca%20href=%22javascript:;%22%20id=%22icIBahyI-gb%22%20class=%22icIBahyI-gb%22%20title=%22关闭%22%3E%3C/a%3E%3Ca%20href=%22javascript:;%22%20id=%22icIBahyI-dq%22%20class=%22icIBahyI-dq2%22%20title=%22点击固定结果%22%3E%3C/a%3E爱词霸%20即划即译%3Cdiv%20class=%22icIBahyI-sz_list%22%20id=%22icIBahyI-sz_list%22%3E%3Ca%20href=%22javascript:;%22%3E关闭即划即译%3C/a%3E%3Ca%20href=%22%23%22%20target=%22_blank%22%3E反馈%3C/a%3E%3Ca%20href=%22%23%22%20style=%22border:none;%22%20target=%22_blank%22%3E帮助%3C/a%3E%3Cspan%20class=%22icIBahyI-j%20icIBahyI-tl%22%3E%3C/span%3E%3Cspan%20class=%22icIBahyI-j%20icIBahyI-tr%22%3E%3C/span%3E%3Cspan%20class=%22icIBahyI-j%20icIBahyI-bl%22%3E%3C/span%3E%3Cspan%20class=%22icIBahyI-j%20icIBahyI-br%22%3E%3C/span%3E%3C/div%3E%3C/div%3E%3Cdiv%20class=%22icIBahyI-search%22%3E%3Cinput%20id=%22ICIBA_HUAYI_input%22%20name=%22%22%20type=%22text%22%20onkeydown=%22ICIBA_HUAYI_KEYDOWN(event);%22%3E%3Ca%20href=%22javascript:;%22%20class=%22icIBahyI-sear%22%20onclick=%22ICIBA_HUAYI_searchword()%22%20%3E查%20词%3C/a%3E%3C/div%3E%3Cspan%20class=%22icIBahyI-contTop%22%3E%3C/span%3E%3Cdiv%20class=%22icIBahyI-loading%22%20id=%22loading%22%3E%3C/div%3E%3Cdiv%20class=%22icIBahyI-main_cont%22%20id=%22icIBahyI-main_cont%22%3E%3C/div%3E%3Cdiv%20class=%22icIBahyI-CB%22%20id=%22icIBahyI-scbiframe%22%20style=%22display:none%22%3E%3C/div%3E%3Cdiv%20id=%22ICIBA_TOO_LONG%22%20style=%22height:150px%22%20class=%22icIBahyI-footer%22%3E您划取的内容太长，建议您去爱词霸%3Ca%20href=%22http://fy.iciba.com%22%3E翻译%3C/a%3E页面。%3C/div%3E%3Cspan%20class=%22icIBahyI-contB%22%3E%3C/span%3E';document.getElementById(%22icIBahyI-main_box%22).innerHTML=e;var%20c=document.createElement(%22script%22);c.setAttribute(%22src%22,iciba_huaci_url+%22dict.php%22),document.body.appendChild(c);var%20i=document.createElement(%22div%22);i.id=%22icIBahyI-USER_LOGIN%22,i.className=%22icIBahyI-USER_LOGIN%22,i.style.display=%22none%22,document.body.insertBefore(i,document.body.firstChild);var%20t=document.createElement(%22script%22);t.setAttribute(%22src%22,iciba_huaci_url+%22ICIBA_HUACI_COM.js%22),document.body.appendChild(t)}}();")
	// 				break;
	// 		}
	// 	},
	// },
	{
		label: "自动刷新",
		tooltiptext:"自动刷新，快捷键：A",
		accesskey:"a",
		url: "javascript:(function(p)%7Bopen('','',p).document.write('%3Cbody%20id=1%3E%3Cnobr%20id=2%3E%3C/nobr%3E%3Chr%3E%3Cnobr%20id=3%3E%3C/nobr%3E%3Chr%3E%3Ca%20href=%22#%22onclick=%22return!(c=t)%22%3E%E7%82%B9%E5%87%BB%E5%BC%BA%E5%88%B6%E5%88%B7%E6%96%B0%3C/a%3E%3Cscript%3Efunction%20i(n)%7Breturn%20d.getElementById(n)%7Dfunction%20z()%7Bc+=0.2;if(c%3E=t)%7Bc=0;e.location=u;r++%7Dx()%7Dfunction%20x()%7Bs=t-Math.floor(c);m=Math.floor(s/60);s-=m*60;i(1).style.backgroundColor=(r==0%7C%7Cc/t%3E2/3?%22fcc%22:c/t%3C1/3?%22cfc%22:%22ffc%22);i(2).innerHTML=%22%E5%88%B7%E6%96%B0%E8%AE%A1%E6%95%B0:%20%22+r;i(3).innerHTML=%22%E5%88%B7%E6%96%B0%E5%80%92%E8%AE%A1%E6%97%B6:%20%22+m+%22:%22+(s%3C10?%220%22+s:s)%7Dc=r=0;d=document;e=opener.top;u=prompt(%22%E9%93%BE%E6%8E%A5%E5%9C%B0%E5%9D%80%22,e.location.href);t=u?prompt(%22%E5%88%B7%E6%96%B0%E9%97%B4%E9%9A%94/%E7%A7%92%EF%BC%9A%22,300):0;setInterval(%22z()%22,200);if(!t)%7Bwindow.close()%7D%3C/script%3E%3C/body%3E')%7D)('status=0,scrollbars=0,width=240,height=160,left=1,top=1')",
		image: "chrome://browser/skin/syncProgress-toolbar.png",
	},
	{
		label:"在谷歌缓存打开",
		url:"https://webcache.googleusercontent.com/search?q=cache:%RLINK_OR_URL%",
		image:"chrome://browser/content/abouthome/history.png"
	},
	{
		label: "Google站内搜索",
		accesskey: "s",
		tooltiptext:"Google站内搜索(S)",
		url: "javascript:q%20=%20%22%22%20+%20(window.getSelection%20?%20window.getSelection()%20:%20document.getSelection%20?%20document.getSelection()%20:%20document.selection.createRange().text);%20if%20(!q)%20q%20=%20prompt(%22%E8%AF%B7%E8%BE%93%E5%85%A5%E5%85%B3%E9%94%AE%E8%AF%8D:%22,%20%22%22);%20if%20(q!=null)%20{var%20qlocation=%22%20%22;qlocation=('http://www.google.com/search?num=30&hl=zh-CN&newwindow=1&q='+q+'&sitesearch='+location.host+'');window.open(qlocation);}%20void%200",
		image: "chrome://mozapps/skin/extensions/category-search.png"
	},
	{
		label:"在隐私窗口打开",
		oncommand: "openLinkIn(addMenu.convertText('%RLINK_OR_URL%'), 'window',{private:true});",
		image:"chrome://browser/skin/privatebrowsing/private-browsing.svg"

		// image:"chrome://browser/skin/controlcenter/tracking-protection.svg"
	},
]);

// page({id:"context-sep-navigation", condition:"link",insertBefore:"page-menu-separator", clone:true});

//快捷回复
var menu = PageMenu({
			label:"快速回复",
			condition:"input",
			accesskey: "w",
			insertBefore:"context-openlinkintab",
			// position: 1,
			image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAiElEQVQ4jc2SPQ6DMAxG38ABmHoARq5i2fJU9ZI5IQI6NJaiqAEEDDzJQ36+L7ZjeBod8AaSiMzuvrr7KiIzkPJZ1xKPZjaFqBVmNgFjLR7KF/ciZzSUBumoOCKX9ENVl7zZA31xqblW1eU+g8sl3NHEy98Y/B2kKvXmIG3xCcMz4uBF1bhn8AVkfMGhwd7kMAAAAABJRU5ErkJggg==",
			oncommand: function(event){
				var input_text = event.target.getAttribute('input_text');
				if(input_text) {
					addMenu.copy(input_text);
					setTimeout(function() {
						goDoCommand("cmd_paste");
					}, 100);
				}
			}
		});
	new function(){
		var items = [
			{label:"Gmail 1",input_text: "",accesskey: "1",image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACiElEQVQ4ja2TX0hTcRTHfyLhg6gvPfTWjIhA55o6gjk3NS3UMk2ioiIIIipmYw9BLzLosYceJHoKoh7SJCQqihIV/ySJLcjpdnfdvb/727xgm3dep4vdi79vD6mlD4HgFz6cl8OHc+AcQv4mb5fsfYoJIUUb9T/s3+zZSsHj6vKB2M3Lujg6nGaplE5l+Q+U6pRSXZYkXZYkXUmm9OjwUFq80qH3lB8aIIQUEEJIyVSrO8fa6sAutCD5ph8Zw0Amm0VmeRkr6TRW1taQyeWw+LoX9IwHrMGBoRpbjhBSQgghxcP1juRUi5uHTjnXpTo7Vx7c50uJOE9nf3Etm+WpOONK4B4Xjx/lIY99fchl488rSpObqxRP1ju0ufMnMfHsKQ9eaoPkLIN8rRM/J8ew+GUU8tUOiNWH8ePiaQRfvuAf66vQZz2obQnG66q06LlGUFnmYyMjGPfeQLS2AlKLC1JzDSLOMkz7b2MmGIREZT7osaPXavlH4KnUhPYGKJEwZ6qKiekgRh49xGyrG6HmWnx90oNZcR50QYU0N8s/e+zo2yZwH9OE9npQIcLjiQQYpZgOC5h69xbfPrxHmDFIsRiowiALAh907xCMuWxa5GwdqCBwJZ5AnDEsqipEqiASkzAviohJElhiATQa5YOeyh0TuGxLM621hhgK5ShjhppIGKqqGnHGDEEQjHBEMKJR0ZAUaszPzeU+1dqNV1bL0qagaNxpXUl2nkA2rYEDMA0DpmnCNE0YponVtTVkMhlkcwZWtSV8b3Sg31q6snG5JK+6pLCp64glcNfr7fb5/QGfzxfw+f3b6OrqCvh8/oD3zq3u65YDgfLCgiayl0+VTwjZt0vyCSHkN2rMuyKFwRkzAAAAAElFTkSuQmCC"},
			{label:"QQ邮箱",input_text: "",accesskey: "2",image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADNElEQVQ4jW2TbUzVdRTHDyIDhF3gqhu6lAdh8iI1k0lzMpVI1JivWmUbjR7mVq4ac5W8sNX0rdsVHA8CKzMoGE9SROzikGC3WQOkdBVyebC4QOrkApd7//f+fr9PLy5auT7bd+fsbOfFOd99RcJErFQ5VhB36Ltzkc3zfdtn9B2HGfPUasf1g1Pv1uys3304JU/+IeI/TXqSJHSdt31BfwS434TgHABlN56npC+eTwbTODuUbooupNSJSPy/dyNSEyVxpiNhiAHBGnlDa9AKjNKKltFS3r4abU72rlOn+jaZszdTONGQ5hKROBFZJSIi3ztimxiIwte92SLkxRgNaB7y6/02zg8dpqQ3kZM9G6wzP6fyyoVNn4qISNGh1QX02/C1ilK/la6sKDxLisu3vNSOzON+EJ7+4LlMaX8q7znXqo8Ht7DtuXX7xOVY87VxxprlNlHqLydgmJwPkNvwB+nV42RcHCer1k3vHR8Ak95hTl3LVB+4kikuz2yWpQ7bfasjikBHtAl5fwfg3I/32FjhJvvzKXZdmiKlapzj3bOAWjmp17xz1c6HPVlz4r8Si79tNf4OG9o3BcCrnR6eqBwnq26SrXWTpFZPkN/4J0Ft0CYEQM1IMSecSUigPc74W6Lwta6BwBg37sHa8tukXZx4pC01E8Q7xmgZXQQ0BsPgTDtvdSchD5rss4GvhKUvxejFm4x54aOBuySVj5NQ5iahzE2cw03xt7MMepbD3hhtprzDlHRnzomz9uV67UzDf+2oUiE/YGi/vciGigmebZymsNVDcvkYp11hK0K+BQA1HfyFIsfWJnkhO3s/nlsoUGiNUSGMUniXg6DCT/MCoWUfurwEfWQjuuq0GrVc7Mhfv1dERDrzMuoZ7iEIFo9hAK53wWvbIUcI5kiQl5KpriytepiFVXYR2+TTET/xfiHLzRXacnXqYP8VE/zsDNbxZ7ByxFh7RFkHIg0FUYy8vqdHRKJFJPJRIOwitvYtcim4Q0zgKWFhW1hLuwT/XoH9kXDEploLn6wUkZj/TaSIyIubE/K/2W1vnD1g98znxpiF3Bhz9+D66a68lIZjOzP2PR7nvwG45XEEnT6voAAAAABJRU5ErkJggg=="},
			{label:"Gmail 2",input_text: "",accesskey: "3",image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACiElEQVQ4ja2TX0hTcRTHfyLhg6gvPfTWjIhA55o6gjk3NS3UMk2ioiIIIipmYw9BLzLosYceJHoKoh7SJCQqihIV/ySJLcjpdnfdvb/727xgm3dep4vdi79vD6mlD4HgFz6cl8OHc+AcQv4mb5fsfYoJIUUb9T/s3+zZSsHj6vKB2M3Lujg6nGaplE5l+Q+U6pRSXZYkXZYkXUmm9OjwUFq80qH3lB8aIIQUEEJIyVSrO8fa6sAutCD5ph8Zw0Amm0VmeRkr6TRW1taQyeWw+LoX9IwHrMGBoRpbjhBSQgghxcP1juRUi5uHTjnXpTo7Vx7c50uJOE9nf3Etm+WpOONK4B4Xjx/lIY99fchl488rSpObqxRP1ju0ufMnMfHsKQ9eaoPkLIN8rRM/J8ew+GUU8tUOiNWH8ePiaQRfvuAf66vQZz2obQnG66q06LlGUFnmYyMjGPfeQLS2AlKLC1JzDSLOMkz7b2MmGIREZT7osaPXavlH4KnUhPYGKJEwZ6qKiekgRh49xGyrG6HmWnx90oNZcR50QYU0N8s/e+zo2yZwH9OE9npQIcLjiQQYpZgOC5h69xbfPrxHmDFIsRiowiALAh907xCMuWxa5GwdqCBwJZ5AnDEsqipEqiASkzAviohJElhiATQa5YOeyh0TuGxLM621hhgK5ShjhppIGKqqGnHGDEEQjHBEMKJR0ZAUaszPzeU+1dqNV1bL0qagaNxpXUl2nkA2rYEDMA0DpmnCNE0YponVtTVkMhlkcwZWtSV8b3Sg31q6snG5JK+6pLCp64glcNfr7fb5/QGfzxfw+f3b6OrqCvh8/oD3zq3u65YDgfLCgiayl0+VTwjZt0vyCSHkN2rMuyKFwRkzAAAAAElFTkSuQmCC"},
		];
		menu(items);
	};
	
// Host Exceptions 设置显示条件
/* css('#exex-menu {display: none;}')
page({
    label: "Host Exceptions",
    oncommand: "ExEx.onCommand()",
    condition: "nolink noimage noselect nomedia noinput nomailto"
}) */

// 标签右键菜单
tab([
    
    {
        label: "复制标题",
        text: "%TITLE%",
        accesskey: "t"
    },
    {
        label: "复制标题(简短)+地址",
        text: "%TITLES%\n%URL%",
        accesskey: "c"
    },
    {
        label: "复制所有标签标题+地址",
        class: "copy",
        oncommand: function(){
            var text = "";
            var tabs = gBrowser.mTabContainer.childNodes;
            for (var i = 0, l = tabs.length, doc; i < l; i++) {
                doc = tabs[i].linkedBrowser.contentDocument;
                text += doc.title + "\n" + doc.location.href + "\n";
            }
			Cc["@mozilla.org/widget/clipboardhelper;1"].getService(Ci.nsIClipboardHelper).copyString(text);
        }
    },
    { // 标签的右键菜单中加入复制图标网址的功能
        label: "复制 Favicon 的 URL",
        text: "%FAVICON%",
        accesskey: "g"
    },
    {
        label: "复制 Favicon 的 base64",
        text: "%FAVICON_BASE64%",
        accesskey: "h"
    }
]);

// 链接
page([
    // {
        // label: "复制链接文本",
        // accesskey: "C",
        // text: "%LINK_TEXT%",
        // insertAfter: "context-copylink",
        // condition: "link noimage"
    // },
    // {
        // label: "复制链接地址",
        // accesskey: "Y",
        // text: "%LINK%",
        // insertAfter: "context-copylink",
        // condition: "link noimage"
    // },
])

// 图像
page([
		// {
			// label: 'Google以图搜图',
			// url : 'http://www.google.com/searchbyimage?image_url=%IMAGE_URL%',
			// accesskey: "S",
			// insertAfter: "context-viewimageinfo",
			// condition: "image",
			// image: "chrome://mynewtab/content/img/google.ico"
		// },
		// {
			// label: 'Copy the image',
			// oncommand: function() {
				// var selection = content.getSelection();
				// var ranges = [];
				// for (var i = 0; i < selection.rangeCount; i++)
					// ranges.push(selection.getRangeAt(i));
				// var range = document.createRange();
				// range.selectNode(document.popupNode);
				// selection.removeAllRanges();
				// selection.addRange(range);
				// goDoCommand("cmd_copy");
				// selection.removeAllRanges();
				// for (i in ranges)
					// selection.addRange(ranges[i]);
			// },
			// condition: "image",
			// insertBefore: "context-openlinkintab",
			// image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACOklEQVQ4ja3PzWvTcBzH8aDbzZs3/wH/D50eZKIysAgqiFVR2zUEaW03s1HbrhTGMkZg1lpToQdBtj7quj5ubkqRgqAoqHWICEqzZnn6Je0OHw9K1h7ECn7hc/y+4UVR//MEQbibSCTERCKhDrhIXyAej4uqqoIQMtBisZjaF4hGox3TNOF/cgTB9AjCuWOIrBzH7OoJcKVTWCiPga/acG/tPLrdLqLRKPoC9Xp9lxCCwPJRhDIjCOd/BeaKo5gvnf4dOAu+akOn0wHP8+hzC4KAZDIJ4dGDPy5XTmKhPAbTNMFxHP7ZHRfu4+HmNRiGgUgkAst9ZlmELbONC7k2ruTbuFHYAVOUcbusgF3TEVg3LHfmdQCEEAQCAVA8zxuEENjSLZxLbeNiWoI9K+HmigymqMBTkeGraZioEcs9VzwJXdfBsiwojuMMXddxKSPicl6EPd/G1ayI6/k2XKsKPOUd+KoK3BXVco/aD0PTNHi9XlDhcNjQNA2uwg+4iyJ8lTama22E1mXMbGoIbyiYf6VjsUEstyRJkCQJDMMQyu/3G4qiYPHFdzxutJB6p6DwgWBjy8DzLzqqWypeftXR+GZa7kKhsEvTNHE6nbMUy7KGLMsIpt9gJv0Wwex7TOY+wZf9iMlsE3dyTUw9bWI6/3nP3Xsej8eUZRmHpko4OPEMB27lMEynMDS+hKHxJex3pbCPSWHYnd5z9x7DMFKr1bJcfxvDMKQv4HA4Qi6XS6Jpmgwyp9M52/v/EzSplPbPrmTzAAAAAElFTkSuQmCC"
		// },
		{
			label: "OCR文字识别",
			condition: "image",
			image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADhklEQVQ4jV2RTUgjZwCGv4NePLQgJfRgafEku/S4yB4L0h66FOphLY3FbilCm66H9VCNJVIpuya2XexWREoRs4lo/SESNDGJyU7Nj9lkYmYwk8lsNn8zozGiST5EL/q9Pa2HPrf3eY4vGRkZmS6VSvVyudysVCpNVVWpqqpU0zSayWSoIAhU1/Ubp6pqs1wuN0ulUn10dHSaqKp6AQCMMbzh+voaALC5uQmTyXSz/4+maRdEkqTm+fk5Ozs7Y/V6ndXrddZoNBillPX29rLW1lbG8zy7vLy8aY1Gg11cXLBsNtskiUSCHh8fQ1VVpmkaVFVFrVYDx3Fob28HIQTDw8M4PT2FpmnQdR26rrNarQae5ykJh8O0UCggl8sxRVEgyzI0XYPJZEJPTw86OjrQ2dmJ/XQa+XweiqJAURRWLBYRDocpCQQCVJIkCKLARFGELMsIBUPo7u6G1+vFwNcDIITAZrWhWCxCEASIosgkSUIgEKDE4/FQIS0gxafYPr+P/Ks8fhofQ98X9/H61Ws4HQ68/c5b+OTex0ileIiCiFSSZ0JagGfLQ4lrw0WjL2N4EfuXheMRrO5t4NM/+/DMNweloCAixdA78xXu/PwRZn1/Y4+P40WUY9GXMbg2XJQsrS5Tz64PKyEX29jbwuN/fsWH392BaeYRHv32I4afjeJz65fo/OY2Bia/xWbCh9Wgi22H/VhaW6bEubxIA9wOtoJeFhcTuHf/Mzz4/gGm//oDvzx9jCfTVvw++xTvdb0PwwfvYivoRWB3hwW4HSwuL1HidDpoMBhEJBJhq2truHX7FlKpFGRZhizLkCQJmqbhh4cPQQjB+Pg4eJ5n/oAfTqeTErvdTn0+PxRFYf39/RgaGkK5XEYsFkMymUQikYAoigiFQmhra0NXVxeSySTjOA4LCwuU2O32pt/vh81mY4QQDA4OIh6PQxCEN5chnU7D4XCgpaUFhBD09fUxt9sNu93eJA6H49zr9V5NTExcTU5OsqmpKeZ2u1k+n2fZbJblcjmWTqfZzMwMs9lszGq1srGxsav5+fmrxcXFc2KxWAocx+Hg4ACVSgUnJyeoVqs4PDxEtVrF0dERdF2/8YVCAZlMBpFIBBaLpUAMBsNdo9H43Gw2783NzZXW19dP/H5/IxwO02g0SqPRKN3d3aXb29uNlZWVk9nZ2ZLZbN4zGo3PDQbD3f8AcKsIEFmF5hEAAAAASUVORK5CYII=",
			oncommand: function() {
				// apikey
				var apikey = "65122890469c0decf32299fcfdf6576e";
				var base64str = img2base64(gContextMenu.mediaURL || gContextMenu.imageURL || gContextMenu.bgImageURL).replace("data:image/jpeg;base64,", "");
				var xmlHttp = new XMLHttpRequest();
				xmlHttp.open("POST", "http://apis.baidu.com/apistore/idlocr/ocr", true);
				xmlHttp.setRequestHeader("apikey", apikey);
				xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				xmlHttp.send("fromdevice=pc&clientip=10.10.10.0&detecttype=LocateRecognize&languagetype=CHN_ENG&imagetype=1&image=" + base64str);
				xmlHttp.onload = function() {
					if (xmlHttp.status == 200) {
						var data = JSON.parse(xmlHttp.responseText);
						if (data.errNum != 0)	alert("错误：" + data.errMsg);
						else {
							var str = "识别内容：";
							for (var i in data.retData) str += data.retData[i].word;
							alert(str);addMenu.copy(str);
						}
					}
				};
				function img2base64(imgsrc) {
					if (typeof imgsrc == 'undefined') return "";
					const NSURI = "http://www.w3.org/1999/xhtml";
					var img = new Image();
					var that = this;
					var canvas,
					isCompleted = false;
					img.onload = function() {
						var width = this.naturalWidth,
						height = this.naturalHeight;
						canvas = document.createElementNS(NSURI, "canvas");
						canvas.width = width;
						canvas.height = height;
						var ctx = canvas.getContext("2d");
						ctx.drawImage(this, 0, 0);
						isCompleted = true;
					};
					img.onerror = function() {
						Components.utils.reportError("Count not load: " + imgsrc);
						isCompleted = true;
					};
					img.src = imgsrc;
					var thread = Cc['@mozilla.org/thread-manager;1'].getService().mainThread;
					while (!isCompleted) {	thread.processNextEvent(true);	}
					var data = canvas ? canvas.toDataURL("image/jpeg", 1) : "";
					canvas = null;
					return data;
				}
			}
		},
		{
			label: '复制图像base64',
			text: "%IMAGE_BASE64%",
			insertAfter: "context-viewimageinfo",
			condition: "image",
			accesskey: "h"
		},
		{
			label: "打开图像RAR",
			accesskey: "R",
			condition: 'image',
			image: "moz-icon://file:///c:/program%20files/7-zip/7zfm.exe?size=16",
			insertBefore: "context-savevideo",
			oncommand: function(){
				var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
				try {
					var path = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService).getCharPref("browser.cache.disk.parent_directory") + "\\Cache2\\" + new Date().getTime() + ".rar";
					file.initWithPath(path);
				}
				catch (e) {
					var path = Components.classes["@mozilla.org/file/directory_service;1"].getService(Components.interfaces.nsIProperties).get("ProfLD", Components.interfaces.nsILocalFile).path + "\\Cache2\\" + new Date().getTime() + ".rar";
				}
				file.initWithPath(path);
				Components.classes["@mozilla.org/embedding/browser/nsWebBrowserPersist;1"].createInstance(Components.interfaces.nsIWebBrowserPersist).saveURI(Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService).newURI((gContextMenu.mediaURL || gContextMenu.imageURL), null, null), null, null, null, null, null, file, null);
				setTimeout(function () {
					file.launch();
				}, 100);
			}
		}
]);

//页面菜单
page([
	/*
	{
		label: "用 Chrome 打开当前页面",
		text: "%u",
		exec: "C:\\Software\\Chrome\\MyChrome.exe",
		accesskey: "c",
		condition: "noinput noimage nolink"
	},
	{
		label: "用 Chrome 打开当前链接",
		text: "%l",
		exec: "C:\\Software\\Chrome\\MyChrome.exe",
		accesskey: "c",
	}, */
	{
		label: "明文显示密码",
		condition: "input",
		url: "javascript:(function()%7Bvar%20IN,F;IN=document.getElementsByTagName('input');for(var%20i=0;i<IN.length;i++)%7BF=IN%5Bi%5D;if(F.type.toLowerCase()=='password')%7Btry%7BF.type='text'%7Dcatch(r)%7Bvar%20n,Fa;n=document.createElement('input');Fa=F.attributes;for(var%20ii=0;ii<Fa.length;ii++)%7Bvar%20k,knn,knv;k=Fa%5Bii%5D;knn=k.nodeName;knv=k.nodeValue;if(knn.toLowerCase()!='type')%7Bif(knn!='height'&&knn!='width'&!!knv)n%5Bknn%5D=knv%7D%7D;F.parentNode.replaceChild(n,F)%7D%7D%7D%7D)()",
		image:"chrome://mozapps/skin/passwordmgr/key-64.png"
	},
	{ // 给 Firebug 换个快捷键
        id: "menu_firebug_firebugInspect",
        accesskey: "F",
        clone: false
        }, 
	// { // 给 View Page Source 换个快捷键
        // id: "context-viewsource",
        // accesskey: "p",
        // clone: false
    // }, 
]);

// var pagesub1 = PageMenu({
		// label: "网络功能",
		// conditon: "noinput noimage",
		// accesskey: "z",
		// image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAABX0lEQVRIie3UsUscURAG8N96HEhE7gJqYyeInpUBNSIEgqhnDixUEFJbWQRBiQiCEGNlY5NGEQQLK2ux9S9bi5sNy7p6a5HKDDz28c3M982b93b4b+/GEvShFt+koq+njSONdYVh9AdJgl85/ywGQqga8cXdQ3px95ARzGEoquwr8S+h0UvgL3Fn5zRL3MUXjERyLapNt4//5OOWXxMoI95HBy0M5iofxEpVgZeIz2J/go+oYy+w31jvJZAgvb1/zAf8xFqGB9ZCMysisHlsluSP44M45jTSzs5penh+kwV8x0Hsz/A5+n4U2GXEFIl/YCZOKgmVxRKBDd2XsoCJOG4TU9gqId5HO1+56E8j+lUUWMdYkNZjfXqB+Bsmyy71NYHia3kTcalArGvP3/llzr+H1V7ERYEJfI0eFv/QocDaEZPdR6URUNOdFyMY9Xy29Ac2GjGVZ0tm/2wqvnN7AiW0saH7gTsjAAAAAElFTkSuQmCC"
		// });
// pagesub1([
		// {
			// label: "用IE打开当前链接",
			// text: "%l",
			// accesskey: "I",
			// exec: "C:\\Program Files\\Internet Explorer\\iexplore.exe"
		// },
		// {
			// label: "用IE打开当前页面",
			// text: "%u",
			// exec: "C:\\Program Files\\Internet Explorer\\iexplore.exe",
			// accesskey: "I",
			// condition: "nolink"
		// },
		// {
			// label:"发送到 OneNote",
			// condition: "nolink nomailto noimage nomedia noinput",
			// image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABTElEQVRIieWUvUrDUBTHM/gAjo4dHfMADn2EjBl9AIcODo7dHXwMB4cMDhEUW4SAXZKgSJSAGQo2WEsJ5t6bz/t3iC3ExnhNm0E88IcLh3N+93xwpFDS0aak/wWguzdgigmyc70eYJEoPnpCevqC3AoAlmNhrDtqBvia6DuL9u+Q9N0VRapdDxC1pO9WO1KO3AnXBzDFBOuOSsqtYOlvrwJRAJ9Exa9csgwQqYDPE2SXbwIAjyKUdESqXQmIew6ywawkPk+Ktz4VB1DZQG4FK4CqLeIeLUCfsUKATPPBFLM9AABQ2fhVi+LDRwHAmIF0hgCATPOFh5wNZkjPJu2tqXCLfrK6CjYCqKsgOfFqjt39O5ByYQCfxshdUgxa8xH3HIFzvXUBKhuIVBvJ8TOy81fwMSu3qOm5rhPZvgLbu0V88ADSGW4e0FR/H/ABav0UESRAke8AAAAASUVORK5CYII=",
			// insertBefore: "context-searchselect",
			// oncommand: function(){
				// var onenotePath = "C:\\Program Files\\Microsoft Office\\Office15\\Onenote.exe";
				// var focusedWindow = document.commandDispatcher.focusedWindow;
				// var selection = new String(focusedWindow.getSelection());
				// if (selection.length == 0) {
					// goDoCommand('cmd_selectAll');
					// var allSelection = new String(focusedWindow.getSelection());
					// if (allSelection.length == 0)return;
					// goDoCommand('cmd_copy');
					// goDoCommand('cmd_selectNone');
				// }
				// else{
					// goDoCommand('cmd_copy');
				// }
				// var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
				// file.initWithPath(onenotePath);
				// var process = Components.classes["@mozilla.org/process/util;1"].createInstance(Components.interfaces.nsIProcess);
				// process.init(file);
				// var args = ["/sidenote", "/paste"];
				// process.run(false, args, args.length);
			// }
		// },
		// {
			// label: '海词翻译',
			// url:"http://m.dict.cn/%SEL%",
			// insertBefore:"context-copy",
			// condition: "select noimage",
			// image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAgUlEQVQ4jWNgoBJwZmBgWMjAwPCfAF4DVeeMrnkZAwODLJGWyULVww1ZTYJmZENWwzj/0SRnQsVmEjDkPwYDzQBkTLIBR6HsPCRDlMkxAJ8YSQZ4YHEFSQZgCwuSAvE/AyQ8iDIA5lxk7MGACeD6KE5IFCdlmCHEZKb/DFgyE0UAAEEbSnUAikxKAAAAAElFTkSuQmCC"
		// },
		// {
			// label:"谷歌短网址",
			// url:"javascript:function%20iprl5(){var%20d=document,z=d.createElement('scr'+'ipt'),b=d.body,l=d.location;try{if(!b)throw(0);if%20(!l)%20{alert('%E8%AF%B7%E8%BE%93%E5%85%A5%E7%BD%91%E5%9D%80%EF%BC%81');return;}d.title='(Shortening...)%20'+d.title;z.setAttribute('src','http://www.ruanyifeng.com/webapp/url_shortener_plugin.php?longUrl='+encodeURIComponent(l));b.appendChild(z);}catch(e){alert('%E8%AF%B7%E7%AD%89%E5%BE%85%E7%BD%91%E9%A1%B5%E5%8A%A0%E8%BD%BD%E5%AE%8C%E6%AF%95%EF%BC%81');}}iprl5();void(0)",
			// image:"chrome://mynewtab/content/img/google.ico",
			// condition:"nolink"
		// },
		// {
			// label: "Mouseover DOM Inspector",
			// url: "javascript:void(z=document.body.appendChild(document.createElement('script')));void(z.language='javascript');void(z.type='text/javascript');void(z.src='http://slayeroffice.com/tools/modi/modi.js');void(z.id='modi');"
		// },
		// {
			// label: "Google docs",
			// url : "http://docs.google.com/viewer?url=%l",
			// accesskey: "d",
			// where: "tab",
			// image: "chrome://mynewtab/content/img/google.ico"
		// },
		// {
			// label: "Web Archive",
			// url: "http://web.archive.org/web/*/%u",
			// accesskey: "w",
			// condition: "nolink"
		// },
		// {
			// label: "Web Archive",
			// accesskey: "w",
			// url: "http://web.archive.org/web/*/%l"
		// },
// ]);


// IE 等外部程序菜单
// var execute = PageMenu({ label: "外部应用程序", accesskey: "E", class: "exec" });
// execute([]);

// var selmenu = PageMenu({ label: "选取范围", condition:"select", accesskey: "R", insertBefore: "context-sep-open" });
// selmenu([
// {
// label: "站内搜索"
// ,url: "http://www.google.com/search?q=site:%HOST%+%SEL%"
// },
// ]);


var pagesub2 = PageMenu({
	label: "功能增强",
	conditon: "noinput",
	accesskey: "z",
	image:"chrome://browser/content/aboutRobots-widget-left.png"
});
pagesub2([
	{
		label: "更新视频解析下载器",
		tooltiptext: "更新 you-get 与 youtube-dl",
		image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABQklEQVRYhcWX0RGEIAxEtwRKuBIsgVIowRLo0BIswRK4H+IoR2CD3JiZfIgk+zQaABgznz1ml+u/mQOwAtgApI5vea6bJRwBHIRw6UeOHQZZAOwDwqXvOZfJwgTh0sOb4jTEQibaca+tA18utRyWJLESHwfhzQmeAlTjHWy/2lOAo3wLqyF4BkDKmqcxHW42wHYNtgTOAkgS6DuUH/yWiAFYc2zr7foWwIb7hxIMAOEy7hoQvkYuXvtXBaIFECr3nKIRrQACoQHUxLsAXrlZlqBMyIzJeLMEGkAPgrGW+AmAxoQnED3xdJ3cm2iFYMRvjYhpxSwEIy594hbELEY9CFb8ZzEC+FaqQbDiWh8xbUhKCIv4rjwAAH5LdoWwiCcQO+RgSHbAtpEJPfERiOniYq8eTMRePZqVIK8cTjXzmHQ8/wIqlzajfa/GYwAAAABJRU5ErkJggg==",
		onclick: function(e) {
		var path;
		switch (e.button) {
			case 0:
				path = Services.dirsvc.get("ProfD", Ci.nsILocalFile).path + "\\chrome\\local\\updateVideoDownloader.bat";
			break;
		}
		var file = Cc['@mozilla.org/file/local;1'].createInstance(Ci.nsILocalFile);
		file.initWithPath(path);
		file.launch();},
	},
    {
		label: "更新Webui & YAAW",
		tooltiptext: "左键更新失败时，右键在代理模式下更新",
		// image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB8klEQVQ4jWNgIBLc5OUVeaOjGfvRzKTvvb5+7REGBl5i9TI8VFY2/mhpueOHm+uPn96e/z/b2127yMMjRpTmO8pyxm9trK9+cXf7/8XD/f8XD7f/b20srx0lxoDdDAz8T4yNt751dvz/1tnp/yt72y/PTIzX31NTi93PwMBB0IDLysrhj60sfjyzs/3/2ML84w119cz5xGhkYGBgmMTAwH5VR3vdXXOz/3fNzP5fVlef2sDAwEKUZgYGBoYdYmL6F3R0XlwxNPx/WV/v3yk1tSPHVVWW7pWS8iXKgD3yssUnNTX/n9TW+n9SW+v/KW2t/ye1NP/vVVCoIKh5KgMDz3Z5uT37VJT/71NW+rdXSfHbHiXFr7uVlX5skpYuJGjAQnFxlw2yMh83ycn+XycjfWuZuLjvSklJu+USEg7zhIRk8Wpu4OMTWiAuumWZhPj/ZRLi/xeJiS0MZWBgJmQpYxoDA1ensLDmVEHBhbMEBP7MFhT8P0tI8PskYeEggk5u4OER6+LnX9PLw/NkAjf3vwnc3P8n8PD87+Pj29QgJMRH0IByQUG5Vk7O+61sbP9b2dj+t7Kz/2/l5r5cKyBgSFAzzIBadvb7NSws/2tYWT/UcnKuryBWMwMDA0OaoCB/KTd3YRk3d2kZN7dzkogI0VkVAM0qpIpLElafAAAAAElFTkSuQmCC",
		image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABQklEQVRYhcWX0RGEIAxEtwRKuBIsgVIowRLo0BIswRK4H+IoR2CD3JiZfIgk+zQaABgznz1ml+u/mQOwAtgApI5vea6bJRwBHIRw6UeOHQZZAOwDwqXvOZfJwgTh0sOb4jTEQibaca+tA18utRyWJLESHwfhzQmeAlTjHWy/2lOAo3wLqyF4BkDKmqcxHW42wHYNtgTOAkgS6DuUH/yWiAFYc2zr7foWwIb7hxIMAOEy7hoQvkYuXvtXBaIFECr3nKIRrQACoQHUxLsAXrlZlqBMyIzJeLMEGkAPgrGW+AmAxoQnED3xdJ3cm2iFYMRvjYhpxSwEIy594hbELEY9CFb8ZzEC+FaqQbDiWh8xbUhKCIv4rjwAAH5LdoWwiCcQO+RgSHbAtpEJPfERiOniYq8eTMRePZqVIK8cTjXzmHQ8/wIqlzajfa/GYwAAAABJRU5ErkJggg==",
		onclick: function(e) {
		var path;
		switch (e.button) {
			case 0:
				path = Services.dirsvc.get("ProfD", Ci.nsILocalFile).path + "\\chrome\\local\\update.webui.bat";
			break;
            case 2:
				path = Services.dirsvc.get("ProfD", Ci.nsILocalFile).path + "\\chrome\\local\\update.webui.proxy.bat";
			break;
		}
		var file = Cc['@mozilla.org/file/local;1'].createInstance(Ci.nsILocalFile);
		file.initWithPath(path);
		file.launch();},
	},
	{
		label: "更新播放器与脚本",
		tooltiptext: "左键更新失败时，右键在代理模式下更新",
		// image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB8klEQVQ4jWNgIBLc5OUVeaOjGfvRzKTvvb5+7REGBl5i9TI8VFY2/mhpueOHm+uPn96e/z/b2127yMMjRpTmO8pyxm9trK9+cXf7/8XD/f8XD7f/b20srx0lxoDdDAz8T4yNt751dvz/1tnp/yt72y/PTIzX31NTi93PwMBB0IDLysrhj60sfjyzs/3/2ML84w119cz5xGhkYGBgmMTAwH5VR3vdXXOz/3fNzP5fVlef2sDAwEKUZgYGBoYdYmL6F3R0XlwxNPx/WV/v3yk1tSPHVVWW7pWS8iXKgD3yssUnNTX/n9TW+n9SW+v/KW2t/ye1NP/vVVCoIKh5KgMDz3Z5uT37VJT/71NW+rdXSfHbHiXFr7uVlX5skpYuJGjAQnFxlw2yMh83ycn+XycjfWuZuLjvSklJu+USEg7zhIRk8Wpu4OMTWiAuumWZhPj/ZRLi/xeJiS0MZWBgJmQpYxoDA1ensLDmVEHBhbMEBP7MFhT8P0tI8PskYeEggk5u4OER6+LnX9PLw/NkAjf3vwnc3P8n8PD87+Pj29QgJMRH0IByQUG5Vk7O+61sbP9b2dj+t7Kz/2/l5r5cKyBgSFAzzIBadvb7NSws/2tYWT/UcnKuryBWMwMDA0OaoCB/KTd3YRk3d2kZN7dzkogI0VkVAM0qpIpLElafAAAAAElFTkSuQmCC",
		image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC6klEQVQ4ja3Tb2wTdRzH8V9K76537fVud7d27E/X9bYCq8TGKaNPCEYxMfGJieHJAI2AgxBGFCJggkBZBLlpNFumzi0wiWZhOAKbguvWTRNkIxCSRWOIIQjE+AAFszCIIHn7ZOzUJz7xm7yfffN69hHi/7i+2gZ3pD63czSzdF8xk8sXM7n8yGzDmVz+dCaXP72oMf/lgifyg4sa9x2vb9x5uLbBnQOOl6V3F+NpxmN+Y7E6RmN1jMTqKNguo4lHKNYvZagszYCT4pCT2j0HHLNqvDHbZdxx+dpxGbddirbLqJ2iWFrHVFMzvxXGufntJIVMjmNGFV1GpTcH9FvVXsFO8bBhO8VXVg0FK8X3G7dy/9bvANya+o5TmUb6jEo6/w4cKanyhqwkQ1aSQSvJSSvJoJngmyVPMXP5Cg/u3ePSux2calhGn53kE6OC9/VyH+g2Kr1+M0G/meComeCoWcXnRhU/tLYBcOPMBMOPL+fTkgQ90XI+is7noB7zgXa9zOs1Kug1KjhsVNAbLWfAzXLz4hQA92/f5sbkeT5b+Bgd4RjvReLsUR0fOBB2vE69jId9qMUYa1rHn3fu8Mf0NNPXrvPz2Ul60o9yUHPYH3bYrpb4wC7V8rxIKW2RUt5RHbriKa4MnOTBzAwTrW/z8YIsHbWLeSsaZ49msUuzaFEMH3hNMby9ms3+aJyexUs4t/cAd69e55czE3xQ38CbssEbIZMdIZPXQybbQgbrZd0HmmXd264YtNUs5KcTX3D30o/8eu4CfStXsSNk8mrIYIsSpUWJslnR2aTorJJVH1gjq95mWSdfnWbq0BEudHbR9cxzbNVK2CTrbJAjNMsR1ssR1slh1sphXggqPvB8MNS6Vg6zUTXYNr+alqjDK0GNl6UwL0kaL0oaaySN1ZLGakmlSVJ5Nii3zgFZIbJPB5T2FQGle0VAmk3pfjIg/aPlsy0LzGvPCpH99ygDQoigEGLefxSc/RVCCPEXEp5y265bcrcAAAAASUVORK5CYII=",
		onclick: function(e) {
		var path;
		switch (e.button) {
			case 0:
				path = Services.dirsvc.get("ProfD", Ci.nsILocalFile).path + "\\chrome\\local\\update.swf.bat";
			break;
            case 2:
				path = Services.dirsvc.get("ProfD", Ci.nsILocalFile).path + "\\chrome\\local\\update.swf.proxy.bat";
			break;
		}
		var file = Cc['@mozilla.org/file/local;1'].createInstance(Ci.nsILocalFile);
		file.initWithPath(path);
		file.launch();},
	},
        {
	  label:"复制链接decode地址",
	  oncommand:"Components.classes['@mozilla.org/widget/clipboardhelper;1'].getService(Components.interfaces.nsIClipboardHelper).copyString(decodeURIComponent(gContextMenu.linkURL));",		
	  image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAD1BMVEUAAAAqpRUqpRUqpRUqpRXOcSRkAAAABHRSTlMAgDbD2dd/ZQAAADRJREFUCNdjYGBxAQEHBhYRXAyQGmclE4iIE4MKKgMihWKOEYMyhKHAwARhMDAwoKrBxQAAkOYXUkSJqx8AAAAASUVORK5CYII="
	},
        {
	  label: "生成短网址到剪切板",
	  tooltiptext: "左键：dwz.cn (百度短网址服务)\n中键：t.cn (新浪短网址服务)\n右鍵：url.cn（腾讯短网址服务）",// 中键：goo.gl ( Google短网址服务)\n右鍵：is.gd ( From the u.k. )
	  image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB7klEQVRIid2VP2gTURyAu3fIIHToEKgEkStSElDIcOAQMFAHR4MOhQ4BO3WolA4ZlCsEFG4IqbWpehyxgQzBDJXYGkTtKQlKK4QoGDy9EoeWUE7lgkY+px6GXHKxtA49+Ib73Xv3vd/783sDI4lBjpKB4ykIpLycu3fy6ASFWp5CLd8WO71wgkgu7IqoCO4Cw9SJa7G2WPDBKQxTd+Xmi+u9BaG0H4CXX4pkq6pNKO0/nCmSSxKGqTO/MQfAwptbzKxHD7wmHQJ9r0ZciyEqAgCRXNj+lq2quD09BRcensUwdcaWhrsKvn7bRlSEDpY3E+6Cv+kmMEzdsb1cktwFoiIglyTkkmSPKFtVkUsS0dXL/0fQsHaZWY92UKjl/22KIrkwAHffynYsrsV4tf28J30Lbr++wY+f32m2LPt0+pIeJvKXHLfstcdXHONdBZWdLZR3d8hWVSo7W4wuDuFLemhYu8xvzDluiOm1yf4EVx9dBGA8EySQ8vKx8YHlzQQjiUFy71co17W29rPFKZoti9HFIXfB2NIw+l6NTOW+HTuvnrE7T69N0vr9q+1nTsXRURBIeSnXNcp1rWM0+wdqPBMEYLY4hagIhNJ+mi3Lfu9ZTZ9+WuXZ5yeOqfZTSffpmYEv6XFM9aAc0zv5MPkDvLDWdz1wnlMAAAAASUVORK5CYII=",
	  onclick: function(e) {
	    switch(e.button) {
	    case 0:
	    var url = addMenu.convertText("%RLINK_OR_URL%");
	    var form = new FormData();
	    form.append('url', url);
	    var xhr = new XMLHttpRequest();
	    xhr.open("POST", "http://dwz.cn/create.php", true);
	    xhr.onload = function() {
	      var obj = JSON.parse(xhr.responseText);
	      if (obj.status == -1) {
		alert(obj.err_msg);
	      }
	      else {
		addMenu.copy(obj.tinyurl);
	      }
	    }
	    xhr.send(form);
	    break;
	    case 1:
		var appkey = "1562966081"; //你的新浪开放平台appkey
		Url = "http://api.t.sina.com.cn/short_url/shorten.json?source=" + appkey + "&url_long=" + addMenu.convertText("%RLINK_OR_URL_ENCODE%");
		httpRequest = new XMLHttpRequest();
		httpRequest.open("GET", Url, true);
		httpRequest.onload = function() {
			var text = httpRequest.responseText;
			var ret = JSON.parse(text);
			addMenu.copy(ret[0].url_short);
		}
		httpRequest.send(null);
	    break;
	    /*case 1: //Google短网址服务
	    	var url = addMenu.convertText("%RLINK_OR_URL%");
	    	var xhr = new XMLHttpRequest();
	    	xhr.open("POST", "https://www.googleapis.com/urlshortener/v1/url", true);
	    	xhr.setRequestHeader("Content-Type", "application/json");
	    	xhr.onload = function() {
	    		var obj = JSON.parse(xhr.responseText);
	    		addMenu.copy(obj.id);
	    	}
	    	xhr.send(JSON.stringify({longUrl: url}));
	    break; */
	    case 2:
	      var appkey = "801058005"; //填写你申请的key：http://test.open.t.qq.com/#short_url/shorten（oAuth2.0授权）
	      var access_token = "c6d9e5a010710a4495fb5f558bb54026"; //填写你申请的。。。
	      var openid = "8E971E02C180AC9E6358FF22ED450D8B"; //。。。
	      Url = "https://open.t.qq.com/api/short_url/shorten?long_url=" + addMenu.convertText("%RLINK_OR_URL_ENCODE%") + "&format=JSON&access_token=" + access_token + "&oauth_consumer_key=" + appkey + "&openid=" + openid + "&oauth_version=2.a";
	      httpRequest = new XMLHttpRequest();
	      httpRequest.open("GET", Url, true);
	      httpRequest.onload = function() {	
	      	var obj = JSON.parse(httpRequest.responseText);
	      	var text = obj.data.short_url;
	      	var shorturl = "http://url.cn/" + text;
	      	addMenu.copy(shorturl);
	      }
	      httpRequest.send(null);
	      break;
	      /* case 2: //is.gd短网址
	      Url = "http://is.gd/api.php?longurl=" + addMenu.convertText("%RLINK_OR_URL_ENCODE%");
	      httpRequest = new XMLHttpRequest();
	      httpRequest.open("GET", Url, true);
	      httpRequest.onload = function() {
	      	addMenu.copy(httpRequest.responseText);
	      }
	      httpRequest.send(null);
	      break; */
	    }
	  },
        },
	{
		label: "虚拟键盘",
        oncommand: function() {
               gBrowser.loadURI("javascript:(function(){var%20st;st=document.createElement('script');st.charset='utf-8';st.src='https://mimace.sinaapp.com/tool/soft_keyboard/plugins/soft_keyboard.js';document.body.appendChild(st);})()");
                           },
        image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC7UlEQVQ4jQXBTYhVZRjA8f/zfpxzZ0bHmkqJsCwsaJGbImpTWEFQhGC0aONAEkhgLjRq00AKojSLXPSxKM2oTdQQBBnZtGljBGJDJDFli8zKmebr3nvOPe/X0+8nu1/5QYtZwmcD1hI1Y6MiVkiAtRYbM9ELNjmQBCjFg4034dD/uO/urRzeey87btxEKQkhU9QgIpy9sMj0w3dhpAZGQI+rK2u8duYyy9fXMTErzz60nZnTPzHsAm1WuuIIURgVuHVsG13ydG2gSY4mFmY/+ZHTB+9n5eplZPfhL/S7N/fQhob5C4sc/fB7XN1DehVWKryvydliKoWQiVmoKwOAHVvHqQqKImKZ+eBbPjv+IlM3j7HZejCZokKRgs2KqzwlKV0qLK2u8dKJr3G5gKqi1FgVfv1jiUembmckgek3vkKiQ6WAhaKJt488xbYtPRavrdIRcJoLRgyUgPM9+l0LVnj+9TkkOz4+9gxFIyTPvmNzHDhxjrnjT+OpsZpwIBz9dIEH79lO8o42C8RC0waMSWhpSMmBFprQ4fMQqGhioksWF7Uw89wuBmmEiZEuZbK10BaCdOQ8TsmJrBu0XYPkHtkVmmaEyx3G58JguI61HkTZWB8ChbYdkkYDIoE9B9+nyzVpY8hosIoJmUEpRCIu+IgTQ06KKeMMWkgx0HURJFA6+PytfTx54D2cFc6efAHFsdI0FARTtYVkwIijyDpro4DD8827+xmMAo/tn+WJ6Vm0G9K2Q/a+fApvM4N+pM6Ky2SqlAluhIgw5oTl4QbWO86feZVKIhOVRb1BY6Ier7nyb58//+4TqXC2VFxZS3x0fpGUHLt23MY7cwu0MREGDSX3KTmifjO9HlgzhRPlgZ1b+fmXBRwSOHTqIl+efJT5+Xku/f4XN1QVk2M9mJwgyy0A1MWgxZJtJAtc+u06oiCPHzmng7V/GCxfI29cxE/cSTVeU7lJfGXoVVNo7TFFCXFI7lra2Mcmz847NvE/KHybsdkQl2AAAAAASUVORK5CYII="
    },
    {
      label:"夜间模式",
      image:"data:image/png;base64,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",
      // image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACyElEQVQ4jYWTTWhTWxDHp/ELpKAbQRTRjajo4j1UUEGtrnShIBjwY2F67zmTNE1sFa1WbTpnzo2pJWlFEHThQnjweCLCk0cfWGySe885rTGWWm1RF1VBcOnKtS5sS/0emM188WPmPwBfWwwAQOqRNtTuE7J9K9k+l9oNJtnh/uzAorl1P7IGAIAElZdKFVUEu3ueNgcl2zSy/U+wfdje/+qP3w2ZBwCQLj3b4atoLMGVrUJXN3hkVqA2p/zuysts6em2Xw1pAIAYEMUwcPeRzbE4lRu9XGVPnMqNgh36FI6le2vLZ4h/SiGDYY3KFgEAkOqLm6m6N053FibZ/SMo7J1b/K0vbGqi+ciuHfOPbgBQDAAa0kFtlU/lTYKiJmQ72twZLvsZAXwhcGeSQU3NjSWovBTPDS6R7Oo+RfsgW3yus6XJ/pN9E1dP9k32ZUuT/ZnixDVkm0ftnqC2jyXbrene8Q6hTNf+7MAiIIoh2yHJJgVebog9igo+VS/5VA08qrCg6nmp7V9SuynUriuhq2t9ijyhXOssHbuKZJOawVqPbPM+uz9RmRNSuzbU7g5q906yySGbAirDqAxLtiXJ4W7Jru6r6ABAPD6vtWd0l6TohmCzUyorJdsPUrspyfa0VLYHlWGhbbdQNpDankN25yXbcI4yZxe0Rmp7TajogVBhi09hzuuqbPfJCKFsgMoSsslIba1Q0XuhqhfhSMeDFScuDF7E/PDfyG5EsLmdCtzKluL45kxx/GbmytODmH901qeoJLXplNpN+RR+SPfUC5nSRABxKjem8vXrojv8KFV06Fdn9di0N+fKY5n+ib3fJdNXxo/7FP6Pwcit4x0Dh4+eursx3vbvuqPt97YnLg2dRe1qQtlqpu/FlumWBTOKbZh2aA1GV/sq7EzmayZVqL9uuVx/kyrU3yb1cFmyTWzGmwumm2ef6DNBC2ePs7DU0wAAAABJRU5ErkJggg==",
      oncommand: function(){
	var id = [380];
	var service = Components.classes["@userstyles.org/style;1"].getService(Components.interfaces.stylishStyle)
	  for (var i = 0; i < id.length; i++){
	    var style = service.find(id[i], service.REGISTER_STYLE_ON_CHANGE);
	    style.enabled = !style.enabled;
	    style.save();
	  }
      }
    }, 
	{
		label: "当前日期+时间",
		oncommand: function() {
			var localnow = new Date().toLocaleFormat("%Y.%m.%d %H:%M:%S");
			var localnowstr=localnow;
			addMenu.copy(localnowstr);
			goDoCommand("cmd_paste");
		},
		condition: "input",
		position:3,
		image: "chrome://browser/skin/places/calendar.png"
	},
	{
	    label: "为此页搜索GM脚本",
	    image: "chrome://greasemonkey/skin/icon16.png",
	    oncommand: function() {
	    	var domain = content.location.hostname;
	    	// gBrowser.selectedTab = gBrowser.addTab('https://www.google.com/search?q=site:userscripts.org%20' + domain);
	    	// gBrowser.selectedTab = gBrowser.addTab('https://www.google.com/search?q=site:greasyfork.org%20' + domain);
	    	gBrowser.selectedTab = gBrowser.addTab('https://greasyfork.org/zh-CN/scripts/search?q=' + domain);
	    }
	},
	{
	    label: "批量安装GM脚本",
	    image:"chrome://greasemonkey/skin/icon16.png",
	    tooltiptext: "从剪贴板中的多个网址覆盖安装",
	    oncommand: function() {
	    	if (!window.GM_BrowserUI) return;
	    	var scope = {};
	    	Cu.import('resource://greasemonkey/remoteScript.js', scope);
	    	var install_GM_script = function(url) {
	    	    var rs = new scope.RemoteScript(url);
	    	    rs.download(function(aSuccess, aType) {
	    	        if (aSuccess && 'dependencies' == aType) {
	    		    rs.install();
	    		}
	    	    });
	    	};
	    	var data = readFromClipboard();
	    	var m = data.match(/(https?:\/\/.*)/g);
	    	if (m) {
	    	    m.forEach(function(url) {
	    	        // 处理下 userscripts 的问题
	    		url = url.replace(/^https?:\/\/userscripts\.org\//, 'http://userscripts-mirror.org/');
	    		install_GM_script(url);
	    	    })
	    	}
            }
	},
	/* {
		label: "用 Flvcd 解析当前链接",
		url: "http://www.flvcd.com/parse.php?kw=%LINK_ENCODE%&flag=&format=high",
		where: "tab",
		accesskey:"f",
		image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIElEQVQ4jXXRz0/TYBjA8f2LArogCIyZ6MHEiydPXDUcCEuEgUNEXFzBX9FgpgcPxkFAwM3MjXbttnZjZW3XdiuBLCZfD8uolfEkn9P7PN/LGwoNmBlBYZBBu4GJpXViaZ2K5eF1u5z96fG6XarWKf33K48752d0zs/Q3TZVy0ExeqqWg+62L94vRfrHuttBbtqUTmxKzZ6y6aLaHVTHQ3U8DO/0ciSW1tHbHaQTO0AxXQqmx6dyG0F0eV9y2T32qLc7fmBGUDhUTRTD4ajRQtTtC5LRRijYzO2bxLIt5g8tYvsm32ttPmZ1xmfzhGYEhZJhIzZsisetC5Jus6c5zO+ZPMk6LORcFnIOsYMWSwcmnyXLD8imw++aRb7uE3WbrYLF40yTub2W70eL2UyTZM70A/t1m11ZZ1tqsC012JEaZGsmj77Wib7TuLd1HHD3Q42Hac0PbPwyyDZsdmSdbVnnsGbxRTS5nZKZ2lSJvtECpl+rTKdkPxB5ViD50yCj2nyr2Gxkm9zflAk/l5hKVZh8FTS9WfUD/Z+YfCkxligwligyEs8zslxk7IUStKZwc03hztuaf9wPRAWNW0mFa/EiI8si4ZVST0IinJC4kZC4/lQikqoSSVWDgVAoFHqwkiMqaEQFjfBKieG4yNDiEUOLRwzHRcKJElFBG3zcn9ElkdElkYlVhch6mUiy0rNeZmJVYXw2f/Xxv9Nf/N+g3b/3UqHdPGBmngAAAABJRU5ErkJggg=="
	}, */
	{
		label: "勾选所有选择框",
		icon: "checkbox",checked: true,
		oncommand: function(event) {
			addMenu.$$('input[type="checkbox"]:not(:disabled)', null, true).forEach(function(a){a.checked = true;});
		},
		image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAALUlEQVQ4jWNgkEv8TxHGJ/nr18//v379HDWALgbAFJKKqWfAwIfBqAF4JInAAIZN/GgepyNAAAAAAElFTkSuQmCC"
	},
	{
		label: "取消勾选所有选择框",
		icon: "checkbox",
		oncommand: function(event) {
			addMenu.$$('input[type="checkbox"]:not(:disabled)', null, true).forEach(function(a){a.checked = false;});
		},
		image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAALUlEQVQ4jWNgkEv8TxHGJ/nr18//v379HDWALgbAFJKKqWfAwIfBqAF4JInAAIZN/GgepyNAAAAAAElFTkSuQmCC"
	},
	{
		label: "编辑当前网页",
		image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAK1SURBVDhPY6AGYHn14fOqt2+/3MaHQWoYGCS5GLi5xRgY+BUYGHhEgXpZQQbwPH/z8Ty3pPIzRi6xx4w8oo9QMFCMTUju1cNnby4ANets3L53xa0HT3/NWLB6DgOPpAjIAKEnL9+dAip+6M8edguGmXhET/lHJYNpkEH7j5y6uGL1pi33n775f+LS7f9N05Z+YWDgUwYZIPz01bsTDFySd5i4xA5hYvHDIMNX7zrxY9aK7f93HTv/v2fu2v8dU2bvhhvw8NX7Y4xc4jcZeST2RgfIXYRhIH8/v1PM9aaeSV+Xbzn43zeu6H/HnDX/y5t6LzLxiKUC9cqADXj0/P0RBk7Rq4w84jsQWGIX0AUHW3snvoQ5G6RZN7f9NQOHRDUDt7gDMDAFwAY8fvHhEAOHyGVGLolNCUHKJ2ND5E/5ecpemDlr2nuYZpCzkyra7jDwSNUyMIu5MHBxSQD1soANePry436gqReA3ljLyC2+npFHbHvnxCnPkDU390//wsgp0YauGQSEH738sJeJX/IM0Nkrov0Uj02fNfN99+w1/5ds3AvWnJJT/S01p+QuA5tEELpmEBB+9OrdbiZu0ZMMfCKLgS5Y1zhh0S/v+ML/aX1L/2eUVL0HpYVpC5aeZWCQ0ASqR9EMAsKPX73bycgtcTwjp2QPv6z2Vp+E4v8xrbP/miRXfgJ65ywwgK+dOHPlAAMw5KB6UIDwk+fvtwMD8AQDn8R8bhGljVwSqkeBMXEOJAaKEZD3Hjx5vQOkFqIFFQg/ffF+q4SK/kURGY29glJqB3hEVU7xiiueAybvk3zSKodFFHSugNSA1EK0oAKhq3ceTnn17vOJd+8+nwQl68s37p69dP3uuXuPX5x5+e7dKZAcSA1ILUQLKuABJggloPe0GXiENbBiBh4tsBqwWmTAwAAAYo9bM5woFn0AAAAASUVORK5CYII=",
		oncommand: function() {document.onkeydown=ck;content.document.body.contentEditable=true;function ck(e){k=window.event?window.event.keyCode:e.keyCode;if(k==27){content.document.body.contentEditable=false}}}
	},
	{
		label: "分屏浏览",
		condition: "noselect nomedia noinput nomailto",
		ccesskey: "b",
		oncommand: function(event) {
			var title = gContextMenu.onLink? gContextMenu.linkText() : gContextMenu.target.ownerDocument.title;
			var url = gContextMenu.linkURL || gContextMenu.target.ownerDocument.location.href;
			openWebPanel(title, url);
		},
		image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAPElEQVQ4jWNgoBL4jwcTbQAp4kPUADsGBoZfUJpkA/zxaSZkgB0DEbFEUxfAgAM+Q4ZGNBI0gKK8MHAAANGVMRA9chdTAAAAAElFTkSuQmCC",
	},
        {
	  label:"自动翻页",
	  url:"javascript:(function(){if(window['pgzp']){_pgzpToggleBookmarklet();}else{window._page_zipper_is_bookmarklet=true;window._page_zipper=document.createElement('script');window._page_zipper.type='text/javascript';window._page_zipper.src='http://www.printwhatyoulike.com/static/pagezipper/pagezipper_10.js';document.getElementsByTagName('head')[0].appendChild(window._page_zipper);}})();",
	  image:" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAYUlEQVQ4jWNgoBAwovH/U6ifJAP+MzAwMLDgkyTGVlwGYDgNF0A3AJtGdNcQNNyOgYHhF5TGB/CGF8wQfzya/iMz8GFcLqGeC3BpdsBnA8wAYqILVyz8x6Z/GKREQrZjAACcgyBE8VS2qwAAAABJRU5ErkJggg=="
	},
        {
	  label:"置顶当前窗口",
	  oncommand:function () {
            (function (){
              if(document.getElementById('main-window').hasAttribute('ontop'))
                onTop=false;else onTop=true;
                try {
                  Components.utils.import("resource://gre/modules/ctypes.jsm");
	          var lib = ctypes.open("user32.dll");
	          var funcActiveWindow = 0;
                  try{
                    funcActiveWindow = lib.declare("GetActiveWindow", ctypes.winapi_abi, ctypes.int32_t);
                  }
                  catch (ex){
                    funcActiveWindow = lib.declare("GetActiveWindow", ctypes.stdcall_abi, ctypes.int32_t);
                  }
	          if (funcActiveWindow != 0){
	            var activeWindow = funcActiveWindow();
		    var funcSetWindowPos = 0;
		    try{
		      funcSetWindowPos = lib.declare("SetWindowPos",
		      ctypes.winapi_abi,
		      ctypes.bool,
		      ctypes.int32_t,
		      ctypes.int32_t,
		      ctypes.int32_t,
		      ctypes.int32_t,
		      ctypes.int32_t,
		      ctypes.int32_t,
		      ctypes.uint32_t);
		    }
                    catch(ex){
		      funcSetWindowPos = lib.declare("SetWindowPos",
		      ctypes.stdcall_abi,
		      ctypes.bool,
		      ctypes.int32_t,
		      ctypes.int32_t,
		      ctypes.int32_t,
		      ctypes.int32_t,
		      ctypes.int32_t,
		      ctypes.int32_t,
		      ctypes.uint32_t);		
		    }
		    var hwndAfter = -2;
                    if (onTop){
                      hwndAfter = -1;document.getElementById('main-window').setAttribute('ontop','true');
                    }
                    else
                      document.getElementById('main-window').removeAttribute('ontop');
                    funcSetWindowPos(activeWindow, hwndAfter, 0, 0, 0, 0, 19);
                  }
	          lib.close();
                }
                catch (ex){
                  alwaysontop_log(ex);
                }
            })()
          },
          image:" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA9UlEQVQ4jZ2SoY4CQRBE5zN6Xv3HijUoDAp/5hIkEnXhFxAkiDM4/H0EDoPD3A9gVpGg50wPmZBdZo9Wk+6q6pqaCWFEAUdJhzHYIYFOUooxfr8lIOkEtMAN2L8jkMrzv0R86xG4Fb27pO0zcCFpK+kATL13zfcG9pJ+gamZTSSlR7BA69Y6YANcHHB6WnLOfceey+ES6Iq7fnr6a59vgM7MmldhrcrAzKxxZz/AfVRoMcYPJ7XZSSlarSKglO3m8KrkvM3MGn+VFEIIwK76lQvr86L35WlfgF2VbGazHlcrF170krPVPnIuM5sMbvcnmg8CKvUHlS1YnrKdBIcAAAAASUVORK5CYII="
        },
	{
          label: "恢复默认窗口",
          oncommand: function(e) {window.innerWidth=1240, window.innerHeight=740; window.moveTo(100, 50);},//可视区域居中
          image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAgUlEQVQ4jd3Orw3CYBCG8V9JJQMgKjoCkoQg2IRRukMHqEQiOkM9IyBwFYzQGkB8yaVNERDe5HJ/nrvLy7eV4YxdwAvcA3bDEYYETPV9Oh9mRP/Mj6QHl8DilGrIscEpWNqjC1j5KpqFDipYLTx+6w8eZGixDvgW14DlOHxq4Ac0Am4mHKhHtyEUAAAAAElFTkSuQmCC"
        },
        {
	  label:"显示所有链接",
	  url: "javascript:WN7z=open('','Z6','width=400,height=200,scrollbars,resizable,menubar');DL5e=document.links;with(WN7z.document){write('<base%20target=_blank>');for(lKi=0;lKi<DL5e.length;lKi++){write(DL5e[lKi].toString().link(DL5e[lKi])+'<br><br>')};void(close())}",
	  image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAABFJREFUCNdjgAPzP0CEkw0DAKqRBzPWW0nIAAAAAElFTkSuQmCC"
	}, 
        {
          label: "网页字体查询",
          // url: "javascript:(function(){var%20d=document,s=d.createElement('scr'+'ipt'),b=d.body,l=d.location;s.setAttribute('src','http://chengyinliu.com/wf.js?o='+encodeURIComponent(l.href)+'&t='+(new%20Date().getTime()));b.appendChild(s)})();",
          url: "javascript:(function(){var%20d=document,s=d.createElement('scr'+'ipt'),b=d.body,l=d.location;s.setAttribute('src','https://i-lovemoe.rhcloud.com/wf.js?o='+encodeURIComponent(l.href)+'&t='+(new%20Date().getTime()));b.appendChild(s)})();",
          image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAABNJREFUCNdjgAD5DwyMDAQREAAAK6kBHIC7lQ4AAAAASUVORK5CYII="
        },
])


// var pagesub3 = PageMenu({ label: "启动程序", conditon: "noinput",accesskey: "z",image:"moz-icon://file:///c:/windows/system32/cmd.exe?size=16"});
// pagesub3([
	// {
		// label: "切换用户配置",
		// image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAApElEQVQ4jb3RoQ0CURCE4U8gEQgkAomgHEqggCuAHigBgUQgKABBAQgKQCBOnkAiDrO5PO5y4QUCf7LJ5GVnspPHjxn16GzuKEJXic6mjimwwCMnZBZL6yQgK2SCXcvUnt6QMW5vzDVKDHAJ3bDKNM/jyjKqNpyTxQqbODHLDNdYPHn97zox9Jol/aet921iSHWHQ4R8zBLHbwKG2H8TQLf/f3gC0mhFYvYgbcYAAAAASUVORK5CYII=',
		// text: "-no-remote -p",
		// exec: "D:\\Program Files (x86)\\pcxFirefox\\firefox.exe"
	// },
	// {
		// label:"GoAgent",
		// exec:"c:/software/goagent/local/goagent-uv.exe",
		// image:"moz-icon://file:///c:/software/goagent/local/goagent-uv.exe?size=16"
	// },
	// {
		// label:"FSCapture",
		// exec:"c:/software/fscapture/FSCapture.exe",
		// image:"moz-icon://file:///c:/software/fscapture/FSCapture.exe?size=16"
	// },
	// {
		// label:"画图",
		// exec:"C:\\Windows\\System32\\mspaint.exe",
		// image:"moz-icon://file:///C:\\Windows\\System32\\mspaint.exe?size=16"
	// },
	// {
		// label:"计算器",
		// exec:"C:\\Windows\\System32\\calc.exe",
		// image:"moz-icon://file:///C:\\Windows\\System32\\calc.exe?size=16"
	// },
	// {
		// label:"记事本",
		// exec:"C:\\Windows\\System32\\notepad.exe",
		// image:"moz-icon://file:///C:\\Windows\\System32\\notepad.exe?size=16"
	// },
	// /* {
		// label:"QQ",
		// exec:"c:/software/qq/bin/qq.exe",
		// image:"moz-icon://file:///c:/software/qq/bin/qq.exe?size=16"
	// },
	// {
		// label:"Word",
		// exec:"c:/Software/WPS%20Office%20Professional/office6/wps.exe",
		// image:"moz-icon://file:///c:/Software/WPS%20Office%20Professional/office6/wps.exe?size=16"
	// },
	// {
		// label:"Excel",
		// exec:"c:/Software/WPS%20Office%20Professional/office6/et.exe",
		// image:"moz-icon://file:///c:/Software/WPS%20Office%20Professional/office6/et.exe?size=16"
	// },
	// {
		// label:"PowerPoint",
		// exec:"c:/Software/WPS%20Office%20Professional/office6/wpp.exe",
		// image:"moz-icon://file:///c:/Software/WPS%20Office%20Professional/office6/wpp.exe?size=16"
	// }, */
// ]);
var pagesub4 = PageMenu({
	label: "图像相关",
	accesskey: "s",
	image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADE0lEQVQ4ja2TT0yTdwCGv3jZzjtMs01cROfYTHRzO8xddGRbsmmIh10cMYvLYuoELdS/maxUjBUjdBYChbJJu5Ih/yYNlIAOpWJBEvnT0bmAsiJiEUi/+n39vtLfB89OLtlpO/gk7/F9T+8jSc8D4AVd13cIIbL/T1RV3fJPWVXVNcvLy+H0io5uqOiGgiYSqCKOkl4kkZpH1mMsJh8xrz5k7ulfpNJPDcMwKiRJkqR0Ou19rCxQ1DmBrSfK+ZszXLw9S8Wdx1TcmcURmuFCMMqZ7lHM9Yc5VPct1jYfwtBIJBIbJSGMjvG5WU4H5mgc0+h5sMTgrEEsucKiDjPKCqHpeUoadlHgWoel9lWOeCvQlhZIJpPvS0IYHZEnUUpv3sd9d4KG8Ud0TwlGnkBUgUhsjpM/7eBI1Tostesxu7I41tSKllpAluX3JCGMjmg8RN1vXxN8WMr1B2fpniyjb8pH8M9Gir0fkefMoNCdiaVmA/U3DnDKsxktJSPL8jZJCNExuXiDluFCrgxYaAsX0DJ6mF8GzHj8RRwsfwVLXSaFro3U3/qKo7XvYK7KJKnLxOPxrZIQou2PWIDmkXyqu3MJTBThHznDaGSQeFymoauYgsosnF05lLfvocCVSf6l10nqcRRFeUsSS6Ll7nQTrr49XA59SaVnN/4WN3IiwdT0BKPjIcqu7qKwZgP7bGsxlWVguvAaqvZsQIgrg5NerK2bsTu24shej23nJrqaPdwa6qSk+UNO+jaR58xgn3U139jXsN/2MklNRlGULEnTtA9UfV7vGXNwrupjGg9uoerzNyj55G2uBu38GrLR1l9MU28RPwdO4fEfp3+4CSHEeG9v74vPzrTt9kj74HfV27luepea3Ddx2/bGwvf7RoYinZGhSOdY/2j77/3D7ffC9waCqVQqPxwOr5YkSZKsVuuqE87PvKcv7+SSfy++gIm6aybON36xVFSd03rcsbvcXJrtOFqac6LYcejTsjLrS/8SyWq1rjrrNOV978yttLv3X/vBlx88V33AXvnjxbXPxdT/4m8rRF0b1W6NxQAAAABJRU5ErkJggg=="
});
pagesub4([
	{
		label: "页面可见区域截图",
		oncommand : function() {
			var canvas = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
			canvas.width = content.innerWidth;
			canvas.height = content.innerHeight;
			var ctx = canvas.getContext("2d");
			ctx.drawWindow(content, content.pageXOffset, content.pageYOffset, canvas.width, canvas.height, "rgb(255,255,255)");
			saveImageURL(canvas.toDataURL(), content.document.title + ".png", null, null, null, null, document);
		},
		image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADE0lEQVQ4ja2TT0yTdwCGv3jZzjtMs01cROfYTHRzO8xddGRbsmmIh10cMYvLYuoELdS/maxUjBUjdBYChbJJu5Ih/yYNlIAOpWJBEvnT0bmAsiJiEUi/+n39vtLfB89OLtlpO/gk7/F9T+8jSc8D4AVd13cIIbL/T1RV3fJPWVXVNcvLy+H0io5uqOiGgiYSqCKOkl4kkZpH1mMsJh8xrz5k7ulfpNJPDcMwKiRJkqR0Ou19rCxQ1DmBrSfK+ZszXLw9S8Wdx1TcmcURmuFCMMqZ7lHM9Yc5VPct1jYfwtBIJBIbJSGMjvG5WU4H5mgc0+h5sMTgrEEsucKiDjPKCqHpeUoadlHgWoel9lWOeCvQlhZIJpPvS0IYHZEnUUpv3sd9d4KG8Ud0TwlGnkBUgUhsjpM/7eBI1Tostesxu7I41tSKllpAluX3JCGMjmg8RN1vXxN8WMr1B2fpniyjb8pH8M9Gir0fkefMoNCdiaVmA/U3DnDKsxktJSPL8jZJCNExuXiDluFCrgxYaAsX0DJ6mF8GzHj8RRwsfwVLXSaFro3U3/qKo7XvYK7KJKnLxOPxrZIQou2PWIDmkXyqu3MJTBThHznDaGSQeFymoauYgsosnF05lLfvocCVSf6l10nqcRRFeUsSS6Ll7nQTrr49XA59SaVnN/4WN3IiwdT0BKPjIcqu7qKwZgP7bGsxlWVguvAaqvZsQIgrg5NerK2bsTu24shej23nJrqaPdwa6qSk+UNO+jaR58xgn3U139jXsN/2MklNRlGULEnTtA9UfV7vGXNwrupjGg9uoerzNyj55G2uBu38GrLR1l9MU28RPwdO4fEfp3+4CSHEeG9v74vPzrTt9kj74HfV27luepea3Ddx2/bGwvf7RoYinZGhSOdY/2j77/3D7ffC9waCqVQqPxwOr5YkSZKsVuuqE87PvKcv7+SSfy++gIm6aybON36xVFSd03rcsbvcXJrtOFqac6LYcejTsjLrS/8SyWq1rjrrNOV978yttLv3X/vBlx88V33AXvnjxbXPxdT/4m8rRF0b1W6NxQAAAABJRU5ErkJggg=="
	},
	{
		label: '页面所有区域截图',
		oncommand: function() {
			var canvas = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
			canvas.width = content.document.documentElement.scrollWidth;
			canvas.height = content.document.documentElement.scrollHeight;
			var ctx = canvas.getContext("2d");
			ctx.drawWindow(content, 0, 0, canvas.width, canvas.height, "rgb(255,255,255)");
			saveImageURL(canvas.toDataURL(), content.document.title + ".png", null, null, null, null, document);
		},
		image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADE0lEQVQ4ja2TT0yTdwCGv3jZzjtMs01cROfYTHRzO8xddGRbsmmIh10cMYvLYuoELdS/maxUjBUjdBYChbJJu5Ih/yYNlIAOpWJBEvnT0bmAsiJiEUi/+n39vtLfB89OLtlpO/gk7/F9T+8jSc8D4AVd13cIIbL/T1RV3fJPWVXVNcvLy+H0io5uqOiGgiYSqCKOkl4kkZpH1mMsJh8xrz5k7ulfpNJPDcMwKiRJkqR0Ou19rCxQ1DmBrSfK+ZszXLw9S8Wdx1TcmcURmuFCMMqZ7lHM9Yc5VPct1jYfwtBIJBIbJSGMjvG5WU4H5mgc0+h5sMTgrEEsucKiDjPKCqHpeUoadlHgWoel9lWOeCvQlhZIJpPvS0IYHZEnUUpv3sd9d4KG8Ud0TwlGnkBUgUhsjpM/7eBI1Tostesxu7I41tSKllpAluX3JCGMjmg8RN1vXxN8WMr1B2fpniyjb8pH8M9Gir0fkefMoNCdiaVmA/U3DnDKsxktJSPL8jZJCNExuXiDluFCrgxYaAsX0DJ6mF8GzHj8RRwsfwVLXSaFro3U3/qKo7XvYK7KJKnLxOPxrZIQou2PWIDmkXyqu3MJTBThHznDaGSQeFymoauYgsosnF05lLfvocCVSf6l10nqcRRFeUsSS6Ll7nQTrr49XA59SaVnN/4WN3IiwdT0BKPjIcqu7qKwZgP7bGsxlWVguvAaqvZsQIgrg5NerK2bsTu24shej23nJrqaPdwa6qSk+UNO+jaR58xgn3U139jXsN/2MklNRlGULEnTtA9UfV7vGXNwrupjGg9uoerzNyj55G2uBu38GrLR1l9MU28RPwdO4fEfp3+4CSHEeG9v74vPzrTt9kj74HfV27luepea3Ddx2/bGwvf7RoYinZGhSOdY/2j77/3D7ffC9waCqVQqPxwOr5YkSZKsVuuqE87PvKcv7+SSfy++gIm6aybON36xVFSd03rcsbvcXJrtOFqac6LYcejTsjLrS/8SyWq1rjrrNOV978yttLv3X/vBlx88V33AXvnjxbXPxdT/4m8rRF0b1W6NxQAAAABJRU5ErkJggg=="
	},
	{
	  label : '浏览器界面截图',
	  oncommand: function() {
	    var canvas = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
	    canvas.width = innerWidth;
	    canvas.height = innerHeight;
	    var ctx = canvas.getContext("2d");
	    ctx.drawWindow(window, 0, 0, canvas.width, canvas.height, "rgb(255,255,255)");
	    saveImageURL(canvas.toDataURL(), content.document.title + ".png", null, null, null, null, document);
	  },
	  image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADE0lEQVQ4ja2TT0yTdwCGv3jZzjtMs01cROfYTHRzO8xddGRbsmmIh10cMYvLYuoELdS/maxUjBUjdBYChbJJu5Ih/yYNlIAOpWJBEvnT0bmAsiJiEUi/+n39vtLfB89OLtlpO/gk7/F9T+8jSc8D4AVd13cIIbL/T1RV3fJPWVXVNcvLy+H0io5uqOiGgiYSqCKOkl4kkZpH1mMsJh8xrz5k7ulfpNJPDcMwKiRJkqR0Ou19rCxQ1DmBrSfK+ZszXLw9S8Wdx1TcmcURmuFCMMqZ7lHM9Yc5VPct1jYfwtBIJBIbJSGMjvG5WU4H5mgc0+h5sMTgrEEsucKiDjPKCqHpeUoadlHgWoel9lWOeCvQlhZIJpPvS0IYHZEnUUpv3sd9d4KG8Ud0TwlGnkBUgUhsjpM/7eBI1Tostesxu7I41tSKllpAluX3JCGMjmg8RN1vXxN8WMr1B2fpniyjb8pH8M9Gir0fkefMoNCdiaVmA/U3DnDKsxktJSPL8jZJCNExuXiDluFCrgxYaAsX0DJ6mF8GzHj8RRwsfwVLXSaFro3U3/qKo7XvYK7KJKnLxOPxrZIQou2PWIDmkXyqu3MJTBThHznDaGSQeFymoauYgsosnF05lLfvocCVSf6l10nqcRRFeUsSS6Ll7nQTrr49XA59SaVnN/4WN3IiwdT0BKPjIcqu7qKwZgP7bGsxlWVguvAaqvZsQIgrg5NerK2bsTu24shej23nJrqaPdwa6qSk+UNO+jaR58xgn3U139jXsN/2MklNRlGULEnTtA9UfV7vGXNwrupjGg9uoerzNyj55G2uBu38GrLR1l9MU28RPwdO4fEfp3+4CSHEeG9v74vPzrTt9kj74HfV27luepea3Ddx2/bGwvf7RoYinZGhSOdY/2j77/3D7ffC9waCqVQqPxwOr5YkSZKsVuuqE87PvKcv7+SSfy++gIm6aybON36xVFSd03rcsbvcXJrtOFqac6LYcejTsjLrS/8SyWq1rjrrNOV978yttLv3X/vBlx88V33AXvnjxbXPxdT/4m8rRF0b1W6NxQAAAABJRU5ErkJggg=="
      },
      {
        label: "检查所有图片元素",
        oncommand: function() {
	  gBrowser.loadURI("javascript:outText='';for(i=0;i<document.images.length;i++){if(outText.indexOf(document.images%5Bi%5D.src)==-1){outText+='<tr><td><img%20src='+document.images%5Bi%5D.src+'></td><td>'+document.images%5Bi%5D.height+'</td><td>'+document.images%5Bi%5D.width+'</td><td>'+document.images%5Bi%5D.src+'</td></tr>'}};if(outText!=''){imgWindow=window.open('','imgWin','width=800,height=600');imgWindow.document.write%20('<table%20border=1%20cellpadding=10><tr><th>Image</th><th>Height</th><th>Width</th><th>URL</th></tr>'+outText+'</table>');imgWindow.document.close()}else{alert('No%20images!')}");
	},
	image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADE0lEQVQ4ja2TT0yTdwCGv3jZzjtMs01cROfYTHRzO8xddGRbsmmIh10cMYvLYuoELdS/maxUjBUjdBYChbJJu5Ih/yYNlIAOpWJBEvnT0bmAsiJiEUi/+n39vtLfB89OLtlpO/gk7/F9T+8jSc8D4AVd13cIIbL/T1RV3fJPWVXVNcvLy+H0io5uqOiGgiYSqCKOkl4kkZpH1mMsJh8xrz5k7ulfpNJPDcMwKiRJkqR0Ou19rCxQ1DmBrSfK+ZszXLw9S8Wdx1TcmcURmuFCMMqZ7lHM9Yc5VPct1jYfwtBIJBIbJSGMjvG5WU4H5mgc0+h5sMTgrEEsucKiDjPKCqHpeUoadlHgWoel9lWOeCvQlhZIJpPvS0IYHZEnUUpv3sd9d4KG8Ud0TwlGnkBUgUhsjpM/7eBI1Tostesxu7I41tSKllpAluX3JCGMjmg8RN1vXxN8WMr1B2fpniyjb8pH8M9Gir0fkefMoNCdiaVmA/U3DnDKsxktJSPL8jZJCNExuXiDluFCrgxYaAsX0DJ6mF8GzHj8RRwsfwVLXSaFro3U3/qKo7XvYK7KJKnLxOPxrZIQou2PWIDmkXyqu3MJTBThHznDaGSQeFymoauYgsosnF05lLfvocCVSf6l10nqcRRFeUsSS6Ll7nQTrr49XA59SaVnN/4WN3IiwdT0BKPjIcqu7qKwZgP7bGsxlWVguvAaqvZsQIgrg5NerK2bsTu24shej23nJrqaPdwa6qSk+UNO+jaR58xgn3U139jXsN/2MklNRlGULEnTtA9UfV7vGXNwrupjGg9uoerzNyj55G2uBu38GrLR1l9MU28RPwdO4fEfp3+4CSHEeG9v74vPzrTt9kj74HfV27luepea3Ddx2/bGwvf7RoYinZGhSOdY/2j77/3D7ffC9waCqVQqPxwOr5YkSZKsVuuqE87PvKcv7+SSfy++gIm6aybON36xVFSd03rcsbvcXJrtOFqac6LYcejTsjLrS/8SyWq1rjrrNOV978yttLv3X/vBlx88V33AXvnjxbXPxdT/4m8rRF0b1W6NxQAAAABJRU5ErkJggg=="
      },
      {
        label:"移除所有图片",
        url:"javascript:(function(){function%20toArray%20(c){var%20a,%20k;a=new%20Array;for%20(k=0;%20k%20<%20c.length;%20++k)a[k]=c[k];return%20a;}var%20images,%20img,%20altText;images=toArray(document.images);for%20(var%20i=0;%20i%20<%20images.length;%20++i){img=images[i];altText=document.createTextNode(img.alt);img.parentNode.replaceChild(altText,%20img)}})();",
        image:" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFklEQVQ4jc3SPy9EQRQF8N+uREcUT6EgJIr1DUSyQUQpEgq+jKAgW9EoiEJCr9UoEBZR6JAt/Glka6HaYhVvJtZkt+ZWb+45590zZy5/XYUO/WFMYChw3lDFK0p4jNpiIpzEGS4xh170hO9r3ATxWLupm2HCUgdXJTTxjtUU3MIFsnDOUAnkOnaDuBSwO6xF8XywlfmpCk4wgHIQH7XgGV4wDTXMJI7qQRxtl/GRcBZwW5QH2UjAIkb9BFZDV8JpoBsW8ZBc4SBMHkcfjrGfXOEZs7Gxg9MARNuH+MQX9vwOuIqNxJFt+TPGtNvVcuCsx0brJsYNu0c/zuUbWMAIpgK+gqt2P2jKA3uSr3IZg6Hfusr/rL4BuIFAjab+mzQAAAAASUVORK5CYII="
      },
      {
        label: "显示丢失图片",
        url: "javascript:(function(){var%20ims=document.images,%20brokenCount=0,%20brokenURLs=%22%22,%20text,%20i;%20for(i=0;i<ims.length;++i)%20if%20(!%20(ims[i].naturalHeight%20||%20ims[i].fileSize%20>%200))%20{%20++brokenCount;%20brokenURLs%20+=%20%22URL:%20%22%20+%20ims[i].src%20+%20%22\n%22;%20};%20text%20=%20brokenCount%20+%20%22%20broken%20image%22%20+%20(brokenCount==1?%22%22:%22s%22);%20if(brokenCount)%20alert(text%20+%20%22:\n\n%22%20+%20brokenURLs);%20else%20alert(%22No%20broken%20images.%22);%20})()",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAv0lEQVR42mNkoBAwUssAByAOB2IOIvX9AeKNQLwFZsBzIJYk0fLXQCwKM+A/1DURQOwMxJ1AfIeAAfeBWBHdgN9AzALEa4A4FEkxDxBrAPEZQgYcB2ILIM4F4ilImrcDsQEQewLxEXwGgIAIEL9B02wD5X9BMgSnASDFyUBcCMSbkTQzIBmiCMSnsRlgA7URZPMHIBbAE/1YXfAZqpmY9IPVgP1EpgFHdAPeA7EgJQkJlIDcSTTgJBDPYBzw3AgApMktEXd8LEwAAAAASUVORK5CYII="
      },
]);
