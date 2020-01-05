[
  // url, nextLink, pageElement are necessary elements
  {
    name: "������",
    url: "^https://www\\.manhuagui\\.com/comic/\\d+/\\d+\\.html",
    nextLink: "//a[@href='javascript:SMH.utils.goPage(2)']",
    pageElement: "//div[@class=\"clearfix\"]",
    exampleUrl: "https://www.manhuagui.com/comic/17332/372862.html"
  },
  {
    name: "������",
    url: "^http://www\\.cartoonmad\\.com/comic/\\d{5,}\\.html",
    nextLink: "//a[normalize-space(text())=\"��һ�\"]",
    pageElement: "//a[@class='pages']/../../../tr[last()-2]",
    //insertBefore: "//td[@height=\"36\"][@align=\"center\"]",
    exampleUrl: "http://www.cartoonmad.com/comic/408501852015001.html"
  },
  {
    name: "�ǳ�����",
    url: "^http://www\\.verydm\\.com/chapter\\.php\\?id=\\d+",
    nextLink: "//a[text()=\"��һҳ\"]",
    pageElement: "//img[@id=\"mainImage2\"]",
    insertBefore: "",
    exampleUrl: "http://www.verydm.com/chapter.php?id=32182"
  },
  {
    name: "������",
    url: "^https://www\\.hanfan\\.cc/.*",
    nextLink: "//a[text()=\"��һҳ\"]",
    pageElement: "//div[@class=\"content\"]",
    insertBefore: "",
    exampleUrl: "https://www.hanfan.cc/variety/"
  },
  {
    name: "Manga Stream Homepage",
    url: "^https://readms\\.net/",
    nextLink: "//a[text()=\"Older ��\"]",
    pageElement: "//div[@class=\"blog\"]",
    insertBefore: "",
    exampleUrl: "https://readms.net/"
  },
  {
    name: "Manga Stream Manga Pages",
    url: "^https://readms\\.net/r/.*",
    nextLink: "//a[text()=\"Next ��\"]",
    pageElement: "//img[@id=\"manga-page\"]",
    insertBefore: "",
    exampleUrl: "https://readms.net/r/yona/163/5334/1"
  },
  {
    name: "�й�������Ƶ��",
    url: "^http://life\\.china\\.com\\.cn/.*",
    nextLink: "//div[@class=\"left2\"]//a[text()=\"��һҳ\"]",
    pageElement: "//div[@class=\"left2\"]",
    insertBefore: "//div[@class=\"epages\"]",
    exampleUrl: "http://life.china.com.cn/news/"
  },
  {
    name: "��֮�Ŀ�����",
    url: "^https://www\\.lightnovel\\.cn/search\\.php.*",
    nextLink: "//a[@class='nxt']",
    pageElement: "//div[@id='threadlist']"
  },
  {
    name: "���˲��Ͳ���Ŀ¼",
    url: "^https?://blog\\.sina\\.com\\.cn/s/articlelist_.*",
    exampleUrl: "http://blog.sina.com.cn/s/articlelist_1343656690_0_1.html",
    nextLink: "//li[@class='SG_pgnext']/a",
    pageElement: "//div[@class='articleList']"
  }
];

// MICROFORMAT ���Ф� SITEINFO ��ӛ������
// Wedata �˵��h���줿 SITEINFO �����˥����å������
MICROFORMAT = [{
  url: '^http://example\\.com/',
  nextLink: 'id("nextPage")',
  pageElement: '//div[@class="entry"]',
}];