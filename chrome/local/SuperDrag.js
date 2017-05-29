self.GESTURES = {
	image: {
		// U: {
		// 	//新标签打开图片链接(后台)
		// 	name: "\u65b0\u6807\u7b7e\u6253\u5f00\u56fe\u7247\u94fe\u63a5(\u540e\u53f0)",
		// 	cmd: function(event, self) {
		// 		gBrowser.addTab(event.dataTransfer.getData("text/x-moz-url").split("\n")[0]);
		// 	}
		// },
		U: {
			// 新标签打开图片链接(前台)
			name: "\u65b0\u6807\u7b7e\u6253\u5f00\u56fe\u7247\u94fe\u63a5(\u524d\u53f0)",
			cmd: function(event, self) {
				gBrowser.selectedTab = gBrowser.addTab(event.dataTransfer.getData("text/x-moz-url").split("\n")[0]);
			}
		},
		D: {
			//下载图片(指定位置不弹窗)
			name: "\u4e0b\u8f7d\u56fe\u7247(\u6307\u5b9a\u4f4d\u7f6e\u4e0d\u5f39\u7a97)",
			cmd: function(event, self) {
				var path = "c:\\users\\feather\\desktop\\";
				var uri = Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService).newURI(event.dataTransfer.getData("application/x-moz-file-promise-url"), null, null)
				var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
				file.initWithPath(path);
				file.append(getDefaultFileName(null, uri));
				internalSave(null, null, null, null, null, null, null, {
					file: file,
					uri: uri
				}, null, internalSave.length === 12 ? document : true, internalSave.length === 12 ? true : null, null);
			}
		},
		L: {
			//搜索相似图片(Google)
			name: "\u641c\u7d22\u76f8\u4f3c\u56fe\u7247(Google)",
			cmd: function(event, self) {
				gBrowser.addTab('http://www.google.com/searchbyimage?image_url=' + encodeURIComponent(event.dataTransfer.getData("application/x-moz-file-promise-url")));
			}
		},
		R: {
			//复制图片地址
			name: "\u590d\u5236\u56fe\u7247\u5730\u5740",
			cmd: function(event, self) {
				Components.classes['@mozilla.org/widget/clipboardhelper;1'].createInstance(Components.interfaces.nsIClipboardHelper).copyString(event.dataTransfer.getData("application/x-moz-file-promise-url"));
			}
		},
		UD: {
			//复制图片
			name: "\u590d\u5236\u56fe\u7247",
			cmd: function(event, self) {
				(document.popupNode = content.document.createElement('img')).src = event.dataTransfer.getData("application/x-moz-file-promise-url");
				goDoCommand('cmd_copyImageContents');
			}
		},
	},
	link: {
		U: {
			//新标签打开链接(后台)
			name: "\u65b0\u6807\u7b7e\u6253\u5f00\u94fe\u63a5(\u540e\u53f0)",
			cmd: function(event, self) {
				gBrowser.addTab(event.dataTransfer.getData("text/x-moz-url").split("\n")[0]);
			}
		},
		D: {
			//新标签打开链接(前台)
			name: "\u65b0\u6807\u7b7e\u6253\u5f00\u94fe\u63a5(\u524d\u53f0)",
			cmd: function(event, self) {
				gBrowser.selectedTab = gBrowser.addTab(event.dataTransfer.getData("text/x-moz-url").split("\n")[0]);
			}
		},
		// L: {
		// 	//Google搜索链接文字(后台)
		// 	name: "Google\u641c\u7d22\u94fe\u63a5\u6587\u5b57(\u540e\u53f0)",
		// 	cmd: function(event, self) {
		// 		gBrowser.addTab('http://www.google.com/search?q=' + encodeURIComponent(event.dataTransfer.getData("text/x-moz-url").split("\n")[1]));
		// 	}
		// },
                L: {
			//复制链接文字
			name: "\u590d\u5236\u94fe\u63a5\u6587\u5b57",
			cmd: function(event, self) {
				Components.classes['@mozilla.org/widget/clipboardhelper;1'].createInstance(Components.interfaces.nsIClipboardHelper).copyString(event.dataTransfer.getData("text/x-moz-url").split("\n")[1]);
			}
		},
		R: {
			//复制链接
			name: "\u590d\u5236\u94fe\u63a5",
			cmd: function(event, self) {
				Components.classes['@mozilla.org/widget/clipboardhelper;1'].createInstance(Components.interfaces.nsIClipboardHelper).copyString(event.dataTransfer.getData("text/x-moz-url").split("\n")[0]);
			}
		}
	},
	text: {
		// U: {
			// // baidu搜索选中文字(前台)[识别URL并打开]
			// name: "baidu\u641c\u7d22\u9009\u4e2d\u6587\u5b57(\u524d\u53f0)[\u8bc6\u522bURL\u5e76\u6253\u5f00]",
			// cmd: function(event, self) {
				// (self.seemAsURL(event.dataTransfer.getData("text/unicode")) && (gBrowser.selectedTab = gBrowser.addTab(event.dataTransfer.getData("text/unicode")))) || (gBrowser.selectedTab = gBrowser.addTab('http://www.baidu.com/s?wd=' + event.dataTransfer.getData("text/unicode")));
			// }
		// },
		// U: {
			// // Google搜索选中文字(前台)[识别URL并打开]
			// name: "Google\u641c\u7d22\u9009\u4e2d\u6587\u5b57(\u524d\u53f0)[\u8bc6\u522bURL\u5e76\u6253\u5f00]",
			// cmd: function(event, self) {
				// (self.seemAsURL(event.dataTransfer.getData("text/unicode")) && (gBrowser.selectedTab = gBrowser.addTab(event.dataTransfer.getData("text/unicode")))) || (gBrowser.selectedTab = gBrowser.addTab('http://www.google.com/search?q=' + encodeURIComponent(event.dataTransfer.getData("text/unicode"))));
			// }
		// },
		U: {
			// Google搜索选中文字(后台)[识别URL并打开]
			name: "Google\u641c\u7d22\u9009\u4e2d\u6587\u5b57(\u540e\u53f0)[\u8bc6\u522bURL\u5e76\u6253\u5f00]",
			cmd: function(event, self) {
				(self.seemAsURL(event.dataTransfer.getData("text/unicode")) && gBrowser.addTab(event.dataTransfer.getData("text/unicode"))) || gBrowser.addTab('https://www.google.com/search?q=' + encodeURIComponent(event.dataTransfer.getData("text/unicode")));
			}
		},
		// U: {
			// // 搜索框搜索选中文字(前台)[识别URL并打开]
			// name: "\u641c\u7d22\u6846\u641c\u7d22\u9009\u4e2d\u6587\u5b57(\u524d\u53f0)[\u8bc6\u522bURL\u5e76\u6253\u5f00]",
			// cmd: function(event, self) {
				// (self.seemAsURL(event.dataTransfer.getData("text/unicode")) && (gBrowser.selectedTab = gBrowser.addTab(event.dataTransfer.getData("text/unicode")))) || ((gBrowser.selectedTab = gBrowser.addTab()) & BrowserSearch.loadSearch(event.dataTransfer.getData("text/unicode"), false));
			// }
		// },
		// U: {
			// // 螃蟹版弹出搜索框(后台)
			// name: "\u5f39\u51fa\u641c\u7d22\u6846(\u540e\u53f0)",
			// cmd: function(event, self) {
				// let cE = function (name, attr, parent){
					// var e = document.createElementNS('http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul', name);
					// if(attr) for (var i in attr) e.setAttribute(i, attr[i]);
					// if(parent) parent.appendChild(e);
					// return e;
				// }, popup = cE('menupopup', null, document.getElementById('mainPopupSet'));
				// popup.addEventListener('popuphidden', e => {
					// e.target.parentNode.removeChild(e.target);
				// }, false)
				// Services.search.getVisibleEngines({}).forEach(engine => {
					// cE(
						// 'menuitem', {class: 'menuitem-iconic',label: engine.name,
						// tooltiptext: engine.description,src: engine.iconURI ? engine.iconURI.asciiSpec : ''
						// },
						// popup).addEventListener('command', () => {
							// gBrowser.loadOneTab(
							// engine.getSubmission(event.dataTransfer.getData('text/unicode'), null).uri.spec,null, null, null, false, false);
						// }, false);
				// });
				// popup.openPopup(null, null,event.screenX - gBrowser.selectedBrowser.boxObject.screenX,event.screenY - gBrowser.selectedBrowser.boxObject.screenY + popup.boxObject.screenY/2);
			// }
		// },
		D: {
			//打开查找栏搜索文本
			name: "\u6253\u5f00\u67e5\u627e\u680f\u641c\u7d22\u6587\u672c",
			cmd: function(event, self) {
				gFindBar._findField.value = event.dataTransfer.getData("text/unicode");
				gFindBar.open();
				gFindBar.toggleHighlight(1);
			}
		},
	},
}
