configs = {
	links : [
		{
			label: "以特定方式开启链结\n左键：此分页\n中键：新分页前景\n右键：新分页背景",
			image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABEklEQVQ4jY3Svy9DYRjF8Q+WhvpVrcV/IXZ/hklCIla7BoPEYDYZ/CVWiRKJCYuEpLGogaRIqRruo7m5yXvjSc6d3vO973PeQ3oW0cYgoR/cl/iNYg0vJZD+3+ERTKMRmkctIBt4L4GooYlL3IWusYoK9tArAxzhC885wD5msYuPEvMAXiOsZdRD1X+aB+LTwlQuwC18Jgy9QiYGOMdkmCs4LTEfYhOdFEBk0E+Yx+N11vGUAszgGN8F8xxWIuAxLKUA4tABzrAt68kOrmQ9GU4KIP4yIStaHTeyZ24UAa0EID+NMN8WAV08xj7VABU1IetJBxexznBOZGE9xCoptWUv0yxebSEgXeWNe5PVvpY3/wKvmopUA46xeAAAAABJRU5ErkJggg==",
			onclick: function() {
				var link = $("urlbar").value || $("LS-src").value;
				switch(event.button) {
					case 0:
						loadURI(link);
					break;
					case 1:
						gBrowser.selectedTab = gBrowser.addTab(link);
					break;
					case 2:
						gBrowser.addTab(link);
					break;
				}
			},
		},
		{
			label: "以特定方式开启链结\n左键：Internet Explorer\n中键：Opera\n右键：Chrome",
			image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAABVklEQVQokXXSP0gXQBjG8U8Q/CIKB6XCpWhqFHTUQRzCKImgRXKJJiEIBCWaGptcElwE/43SH6NwtcX4TU0iWqmTgiIqmVqaDr/34Dj04IHjXp7nfe97x/mrgltowl28xXcs4BuGcOMs41V04z0WsY4dnGAFT9CIB+gqzbcxhYMwlDrGLzxFA+7l5kZ8ihF/Z4Zt7BVBO3iN1mS+iAGMoBrGH+hFCzowhsMsZBPtKeB6jPUlilsBLl+XMJkF/MdwKl7GYHQ+UaPdFt2TmmPKoyxkOQV0xl1T4V9wKFXCPYY6zBSF9QA6XegjPmR6B4/xpwiooj7g5qpEw6QrImUJq1nAXkC9kEGs4BW+hmbRA2vow4sC0AbeBJ+HGMV+Vp/HHQGvTe0Lj2cvkXSIv8XZGu6n0VbxKPbXzuiU6yj4dObX68Nn9ON56Bkm8BO7ar9uDi9xM+PiFNTfigdowYAeAAAAAElFTkSuQmCC",
			onclick: function() {
				switch(event.button) {
					case 0:
						LS.BrowserWith(1);
					break;
					case 1:
						LS.BrowserWith(3);
					break;
					case 2:
						LS.BrowserWith(2);
					break;
				}
			},
		},
		{
			label: "以特定方式开启链结\n左键：Google 快照\n中键：Google Docs\n右键：检视源代码",
			image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABW0lEQVQ4jY3Tv0vVYRQG8M+96e3mz0wtf4AgNGhBOAhproE1SToJgqCgo5u4OOigCA5trrq1JE4KBbloWoPiH+DWEDSJ4NCQDu9R5PL12pnO+77nPDzPc85LdlRgAefYRRtq8Qy5O3pAAdV4ghNc4i+m8RnH+FAO4EUUVGIZv/EVM/gXgBvlACpQjPwRetESEj7hO8YxhgHkoQoTaC0Bq8EaXse5iDosBpvTYKyIITSVADzGAd6X3M/iQvLjeTk59djDuwxmb9GPhzCI5gyARvzMABCsDrEO23hz6zEnmbeBI/RkACxJEzkjGZOPh6dYicaP6JK9OB2Yw4hobg09nVgNffmMxmtpk7dZd2Nf8uJ/Yjzo/5A2Vh2G0X5PY6W0M6+wFRIKpUWjkkG1ca7GgyhcwRdp9gUZ3uQwjx1J50t8w5S0bJv4JU3ozqhCQ+R9+CN9a5LzPdJ/uYkrdMU1Pl3abSkAAAAASUVORK5CYII=",
			onclick: function() {
				var urls = [
					"http://webcache.googleusercontent.com/search?q=cache:",
					"http://docs.google.com/viewer?url=",
					"view-source:"
				];
				gBrowser.selectedTab = gBrowser.addTab(urls[event.button] + $("urlbar").value);
			},
		},
		{
			label: "以特定格式复制链结\n左键：BBCode\n中键：MD 格式\n右键：HTML Code",
			image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMklEQVQ4jY3Svy6DYRTH8U8TqYa0KhH0ErgAbGKoqxARrkPM4s8uzGKphYhu5hqx6BWw0c6t4TmN16uqv+057/f3nOc958dolXGFZ9T+YYdqCW94wcI4hjKqmfMmurhHBTPBDFUtnnuduWQPPZxhDo1gFvPmEo4Cvo1ucIA+9jEV33rBlgbmAnbQwStWoj6B8zDsRm0lmE54CrCBNj6wlZtHM2ZQz9S3gm2H12N0OUYxAy5I03+XtjFQMdheeLXicJK74K8VFnEanhasx399YjsD1uP5Td9DFcxneNbzxTbWorYbXS6kgcJqMPlmJnEYhjtMS6vrS6sUr7gL5jA8P7SISyksc1J4+lKYSOFqBPMrSAOVpbhWpPh2pTgPVDUiylnN40la4fI4hrwquMEDZkeBX+GNS2NYlc3uAAAAAElFTkSuQmCC",
			onclick: function() {
				var url = $("urlbar").value,
					txt = $("LS-text").value,
					str;
				switch(event.button) {
					case 0:
						str = "[url=" + url + "]" + txt + "[/url]";
					break;
					case 1:
						str = "[" + txt + "](" + url + ")";
					break;
					case 2:
						str = '<a href="' + url + '">' + txt + "</a><br>";
					break;
				}
				XULBrowserWindow.statusTextField.label = "复制：" + str;
				Cc['@mozilla.org/widget/clipboardhelper;1'].createInstance(Ci.nsIClipboardHelper).copyString(str.replace(/\n/g, ""));
			},
		},
	],
	imgs : [
		{
			label: "Google 加密搜寻相似图像",
			image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFUlEQVQ4jZ3SzUqCURDG8R+uuwLRILDvRXvvok0fSF1FhUvB+/EOgjICpfYZSNQqK2gVLZK0xRmp7PWNGpjNmXn+Z+Y5h88oooEehpHXaKLkl1jHMd5D+BA5jLMTbMwSF0M8xiX2sBJZQzdq7ej9EQ2MQrycUa+gE5CjLMBVjLk/c0F245JTzE0X36R913IASxjgFuXp4sS01RzAIu5nAXrSCrUcwHb0nMlYoSkZ1JUMm44FnEdPPYtekt55LLm9EyNXsPVF3Jez5kaMN5I8GUg7Tz5SH89oSYZmRlF657Zk1l1A69KnasUkF6jOgpBMKmPed8OWQzzGDTZRyANlRTXEYzzi4K8AcfNTQF7+AyjgEK/ofAC3mVBm4A8/iQAAAABJRU5ErkJggg==",
			oncommand: function() {
				gBrowser.selectedTab = gBrowser.addTab('https://encrypted.google.com/searchbyimage?image_url=' + encodeURIComponent($("LS-src").value));
			},
			state: "img"
		},
		{
			label: "检视图像 (新分页前景)",
			image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABDElEQVQ4jZXTvUpDQRCG4Sf4V4lt4JgIxioSC8Gfwluw9iq8hii2XoGp1cbSG7DXSkQEIScXECGxVWLhiMfN0ZiFj91Z5ntnYWcgwxmGGP1Tw/Bk0MEbBughj/0vDcLTgde4OMAqttFADfUSLUfuILxGQW2gjSccY87vqx6e0Rcgj8oPET+iOg2gh7Wo/IwTzE8LqMezq1hIDLNYQmUSoGzN4BA32JkEqGCxUAn20Y+8i3hlrQyQYQNXWA9zA3e+G6iP3cgdA9RwFPG1z1+5NN6Fp1hJATk2cRvxO15iTwH32ArPD0AL50Huxl03US9yWkVAsZWb2JugpqSVi8NUVjVVLhmmLA7TjnMH2Qdlp5RhEz7CGgAAAABJRU5ErkJggg==",
			oncommand: function() {gBrowser.selectedTab = gBrowser.addTab($("LS-src").value);},
			state: "img"
		},
		{
			label: "下载图像 (不弹窗)",
			image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA4ElEQVQ4je3Tu0pDURCF4c9GISRFXiA2qQIi2PtQeQXTiJdCwS59Gi2tfAATOdimEAQvWIgEBRVBTo7FmWJHYyLaOrDYMKz1s28DG3jCOw6xhe1EO9jDPg5wiV1URT2iwANWo7eQaBGbOEIz1jx6VREucI+Wr7WEE4ywgl7432KHvwYUeP0roEgBI6yjglqiOtrKy2zh+DvAGBcY4OyT+jjFOV6mAXLc4Rq3M3SDq/DmKWCINTSwPEeN8A5TQD/O+9OqReYfEIBnZMoPw+QgTZPwZpHVUb5/1+QYz1I3Mp0PSLxyh/4u69UAAAAASUVORK5CYII=",
			oncommand: function() {saveImageURL($("LS-src").value, null, null, null, true, null, document);},
			state: "img"
		},
		{
			label: "打开图像 RAR",
			image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAABb0lEQVQ4jZXTTUtVURgF4Ccc2C8IB4KUiQNxJg6CUASFIESH2sCyDycpBI4iL9okM6/gzFmQmNGXDYRAg7Jo4gcUltRAHNXAH6CC0HFw3isH4+K9CxZ7n73ftdh7vfuQYghLeF6E8/iJAUWQQwcqi/BsGP2Nuv8wgtZi7oFnSPALTeUanMFcGCRYQ125J7iDl8FPuJ/dfICWUwyyaA0NuInP0pDymIoxj8nMPI8neIxX+Ip++I1B9GE4vhNs4noUF8K7hRtx5T/YJw3kAp7iKm6HYAw1uIIDvEdtZNCE8aizhot4iHZMYy+Ej6L4B5ZxHhO4hIWCwXps9Ehb8xHfUY1OVGEGH2KtBw3Ywj9YRT2+4RruRmDNWEQvuvAOjdjG5ahJYCfusxvdmMFsCJIwnsRGdGgfr/EChzAq/VFW8CbDt1FYmGfXvkQuowI5tKGiRLaF5hgjynuJLaE5Rg7dOFciu0+e4J60Leslcis0jgC4x3GoQGJP5wAAAABJRU5ErkJggg==",
			oncommand: function() {
				var file = Cc["@mozilla.org/file/local;1"].createInstance(Ci.nsILocalFile);
				try {
					var path = Cc["@mozilla.org/preferences-service;1"].getService(Ci.nsIPrefService).getCharPref("browser.cache.disk.parent_directory") + "\\Cache\\" + new Date().getTime() + ".rar";
					file.initWithPath(path);
				} catch (e) {
					var path = Cc["@mozilla.org/file/directory_service;1"].getService(Ci.nsIProperties).get("ProfLD", Ci.nsILocalFile).path + "\\Cache\\" + new Date().getTime() + ".rar";
				}
				file.initWithPath(path);
				Cc["@mozilla.org/embedding/browser/nsWebBrowserPersist;1"].createInstance(Ci.nsIWebBrowserPersist).saveURI(Cc["@mozilla.org/network/io-service;1"].getService(Ci.nsIIOService).newURI($("LS-src").value, null, null), null, null, null, null, file, null);
				setTimeout(function () {file.launch();}, 100);
			},
			state: "img"
		},
	]
};