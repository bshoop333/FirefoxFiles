[
  // url, nextLink, pageElement are necessary elements
  {
    name: "看漫画",
    url: "^https://www\\.manhuagui\\.com/comic/\\d+/\\d+\\.html",
    nextLink: "//a[@href='javascript:SMH.utils.goPage(2)']",
    pageElement: "//div[@class=\"clearfix\"]",
    exampleUrl: "https://www.manhuagui.com/comic/17332/372862.html"
  },
  {
    name: "動漫狂",
    url: "^http://www\\.cartoonmad\\.com/comic/\\d{5,}\\.html",
    nextLink: "//a[normalize-space(text())=\"下一頁\"]",
    pageElement: "//a[@class='pages']/../../../tr[last()-2]",
    //insertBefore: "//td[@height=\"36\"][@align=\"center\"]",
    exampleUrl: "http://www.cartoonmad.com/comic/408501852015001.html"
  },
  {
    name: "非常爱漫",
    url: "^http://www\\.verydm\\.com/chapter\\.php\\?id=\\d+",
    nextLink: "//a[text()=\"下一页\"]",
    pageElement: "//img[@id=\"mainImage2\"]",
    insertBefore: "",
    exampleUrl: "http://www.verydm.com/chapter.php?id=32182"
  },
  {
    name: "韩饭网",
    url: "^https://www\\.hanfan\\.cc/.*",
    nextLink: "//a[text()=\"下一页\"]",
    pageElement: "//div[@class=\"content\"]",
    insertBefore: "",
    exampleUrl: "https://www.hanfan.cc/variety/"
  },
  {
    name: "Manga Stream Homepage",
    url: "^https://readms\\.net/",
    nextLink: "//a[text()=\"Older →\"]",
    pageElement: "//div[@class=\"blog\"]",
    insertBefore: "",
    exampleUrl: "https://readms.net/"
  },
  {
    name: "Manga Stream Manga Pages",
    url: "^https://readms\\.net/r/.*",
    nextLink: "//a[text()=\"Next →\"]",
    pageElement: "//img[@id=\"manga-page\"]",
    insertBefore: "",
    exampleUrl: "https://readms.net/r/yona/163/5334/1"
  },
  {
    name: "中国网生活频道",
    url: "^http://life\\.china\\.com\\.cn/.*",
    nextLink: "//div[@class=\"left2\"]//a[text()=\"下一页\"]",
    pageElement: "//div[@class=\"left2\"]",
    insertBefore: "//div[@class=\"epages\"]",
    exampleUrl: "http://life.china.com.cn/news/"
  },
  {
    name: "轻之文库搜索",
    url: "^https://www\\.lightnovel\\.cn/search\\.php.*",
    nextLink: "//a[@class='nxt']",
    pageElement: "//div[@id='threadlist']"
  },
  {
    name: "新浪博客博文目录",
    url: "^https?://blog\\.sina\\.com\\.cn/s/articlelist_.*",
    exampleUrl: "http://blog.sina.com.cn/s/articlelist_1343656690_0_1.html",
    nextLink: "//li[@class='SG_pgnext']/a",
    pageElement: "//div[@class='articleList']"
  }
];

// MICROFORMAT 配列に SITEINFO を記述する
// Wedata に登録された SITEINFO より後にチェックされる
MICROFORMAT = [{
  url: '^http://example\\.com/',
  nextLink: 'id("nextPage")',
  pageElement: '//div[@class="entry"]',
}];