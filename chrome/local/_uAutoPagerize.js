// uAutoPagerize2.uc.js 的配置文件。

var prefs = {
    pauseA: true, // 快速停止翻页开关，需要刷新页面
    Pbutton: [0, 0, 0], // 需要按住的键.....0: 不按住任何键;1: shift键;2: ctrl键; 3: alt键;(同时按3个键.就填 1 2 3)(一个都不按.就填 0 0 0)
    mouseA: false, // 按住鼠标左键..否则.双击;
    Atimeout: 200, // 按住左键时..延时.多少生效..(单位:毫秒);
    stop_ipage: true, // 如果在连续翻页过程中暂停.重新启用后.不在继续..连续翻页..
    ipages: [false, 2], // 立即翻页,第一项是控制是否在js加载的时候立即翻第二项(必须小于maxpage)的页数,比如[true,3].就是说JS加载后.立即翻3页.
    // 下一页图片延迟加载的移除，是 image 节点的属性。该功能会把属性地址替换到图片地址。
    lazyImgSrc: 'zoomfile|file|original|load-src|_src|imgsrc|real_src|src2|data-lazyload-src|data-ks-lazyload|data-lazyload|data-src|data-original|data-thumb|data-imageurl|data-defer-src|data-placeholder',
};

// 页面不刷新的站点，通过延迟加载和额外添加 hashchange 事件来解决。
var HashchangeSites = [
    { url: /^https?:\/\/(www|encrypted)\.google\..{2,9}\/(webhp|#|$|\?)/, timer: 1500 },
    { url: /^https?:\/\/www\.baidu\.com\/($|#wd=)/, timer: 1000 },
    { url: /^https?:\/\/(www\.)?newsmth\.net/, timer: 1000 }, // 水木清华社区延迟加载及下一页加载的修复
];

// 自定义站点，优先级最高
var MY_SITEINFO = [
    // 下面的都是示例
    // {
    //    siteName: "google",
    //     url: '^https?\\:\\/\\/(www|encrypted)\\.google\\..{2,9}\\/(webhp|search|#|$|\\?)',
    //     nextLink: "//a[div[@id=('nn')]] | //a[span/@id='nn'] | id('nav')//td[last()]/a | id('nn')/parent::a",
    //     pageElement: "//div[@id='ires']",
    //     exampleUrl: 'http://www.google.com.hk/'
    // },
    // 示例：ipages 参数的使用。打开百度后立即加载3页。
    // {
    //     // 通过更改 pageElement 解决清爽百度的问题
    //     name: '百度搜索',
    //     url: "^https?://www\\.baidu\\.com/(?:s|baidu)\\?",
    //     nextLink: '//p[@id="page"]/a[contains(text(),"下一页")][@href]',
    //     pageElement: 'css;div#content_left',
    //     stylish: '.autopagerize_page_info { margin-bottom: 10px; }',
    //     ipages: [true, 3]
    // },
    {
        name: 'Github - issues',
        url: '^https://github\\.com/.+/.+/issues(\\?q=.+)?',
        nextLink: '//a[text()="Next"]',
        pageElement: '//div[@class="border-right border-bottom border-left"]',
        exampleUrl: 'https://github.com/chengr28/Pcap_DNSProxy/issues?q=is%3Aissue+is%3Aclosed',
    }, {
        name: '站长素材',
        url: '^http://sc\\.chinaz\\.com/tag_\\w+/\\w+\\.html',
        nextLink: '//a[text()="下一页"]',
        pageElement: '//div[@class="all_wrap"]',
        exampleUrl: 'http://sc.chinaz.com/tag_jiaoben/ShiJianZhou.html',
    }, {
        name: '联想NBD社区帖子',
        url: '^http://www\.newbandeng\.com/thread-\d+-\d+-\d+\.html',
        nextLink: '//a[text()="下一页"]',
        pageElement: 'css;div.comment-box2',
        exampleUrl: 'http://www.newbandeng.com/thread-26480-1-1.html',
    }, {
        name: '联想NBD社区帖子列表',
        url: '^http://www\\.newbandeng\\.com/forum-\\d+-\\d+\\.html',
        nextLink: '//a[text()="下一页"]',
        pageElement: '//div[@id="threadlist"]',
        exampleUrl: 'http://www.newbandeng.com/forum-113-1.html',
    }, {
        name: '收藏夹 - 知乎',
        url: '^https://www\\.zhihu\\.com/collection/\\d+(\\?page=\\d+)?',
        nextLink: '//a[text()="下一页"]',
        pageElement: '//div[@role="main"]/div',
        exampleUrl: 'https://www.zhihu.com/collection/37406996?page=2',
    }, {
        name: '一站资源网CG资源自助下载',
        url: '^http://down\\.ezhanzy\\.com/',
        nextLink: '//a[text()="下一页"]',
        pageElement: '//div/div[@class="hero-unit"]',
        exampleUrl: 'http://down.ezhanzy.com/',
    }, {
        name: 'Github Issues',
        url: '^https://github\\.com/.+/issues',
        nextLink: '//a[text()="Next"]',
        pageElement: 'css;ul.table-list.table-list-bordered.table-list-issues.js-navigation-container.js-active-navigation-container',
        exampleUrl: 'https://github.com/XX-net/XX-Net/issues',
    }, {
        name: 'icon100',
        url: '^http://www\\.icon100\\.com/search/',
        nextLink: '//a[text()="Next >"]',
        pageElement: '//div[@class="photo-gallery"]',
        exampleUrl: 'http://www.icon100.com/search/delete',
    }, {
        name: '全部收藏 - 卡饭 - 互助分享 - 大气谦和!',
        url: '^http://www\\.kafan\\.cn/home\\.php\\?mod=space&do=favorite&view=me',
        nextLink: '//a[text()="下一页"]',
        pageElement: '//div/div[@class="ct2_a wp cl"]',
        exampleUrl: 'http://www.kafan.cn/home.php?mod=space&do=favorite&view=me',
    }, {
        name: '网盘007',
        url: '^http://wangpan007\\.com/share/',
        nextLink: '//a[text()="下一页"]',
        pageElement: '//div[@class="list-wrap"]',
        exampleUrl: 'http://wangpan007.com/share/kwCOMIC1%E2%98%86+%E7%BF%BBpg2',
    }, {
        name: 'MIUI社区',
        url: '^http://www\\.miui\\.com/thread-\\d+-\\d+-\\d+\\.html',
        nextLink: '//a[@class="nxt"]',
        pageElement: '//div/div/div[@class="pl bm"]',
        exampleUrl: 'http://www.miui.com/thread-3277783-1-1.html',
    }, {
        name: '动漫花园',
        url: '^https://share\\.dmhy\\.org/',
        nextLink: '//a[text()="下一页"]',
        pageElement: '//div/div/div/div[@class="table clear"]',
        exampleUrl: 'https://share.dmhy.org/',
    }, {
        name: '动漫花园-dandanplay',
        url: '^http://dmhy\\.dandanplay\\.com/',
        nextLink: '//a[text()="下一页"]',
        pageElement: '//div/div/div/div[@class="table clear"]',
        exampleUrl: 'http://dmhy.dandanplay.com/',
    }, {
        name: '风之动漫',
        url: '^http://manhua\\.fzdm\\.com/\\d+/\\d+/',
        nextLink: '//a[text()="下一页"]',
        pageElement: '//div/li',
        exampleUrl: 'http://manhua.fzdm.com/141/143/',
    }, {
        name: '火狐范',
        url: '^http://firefoxfan\\.cc/',
        nextLink: '//a[text()="下一页"]',
        pageElement: '//section/div/div/article',
        exampleUrl: 'http://firefoxfan.cc/',
    }, {
        name: '就要分享91sh.cn-有爱共分享-SOLDIER|繁华博客',
        url: '^http://www\\.91sh\\.cn/',
        nextLink: '//a[text()="下一页"]',
        pageElement: '//section/div/div[@class="content"]',
        exampleUrl: 'http://www.91sh.cn/',
    }, {
        name: '娱乐在线',
        url: '^http://read\\.huabian\\.com/minithree/show\\d+_\\d+\\.html',
        nextLink: '//a[text()="下一页"]',
        pageElement: '//div[@class="box03_left p03"]',
        exampleUrl: 'http://read.huabian.com/minithree/show3169_1.html',
    }, {
        name: '网易数码',
        url: '^http://digi\\.163\\.com/\\d+/\\d+/\\d+/\\w+\\.html',
        nextLink: 'id("js-epContent")/div[@class="ep-content-bg clearfix"]/div[@class="ep-content-main"]/div[@class="ep-pages"]/a[@class="ep-pages-ctrl"]',
        pageElement: '//div[@id="endText"]',
        exampleUrl: 'http://digi.163.com/13/0415/03/8SFJ401C001664LU.html',
    }, {
        name: '紫荆站 | ZiJingBT v2 | 种子页',
        url: '^http://210\\.28\\.143\\.192/',
        nextLink: '//a[text()="下一页>>"]',
        pageElement: '//form[@enctype="multipart/form-data" and @action="/index.html" and @method="post" and @name="torrentsFrm"]',
        exampleUrl: 'http://210.28.143.192/',
    }, {
        name: 'bilibili搜索结果',
        url: '^http://www\\.bilibili\\.com/search\\?keyword=',
        nextLink: '//a[@class="nextPage"]',
        pageElement: '//ul[@class="result"]',
        exampleUrl: 'http://www.bilibili.com/search?keyword=fate+ubw&seid=14172652277675617135',
    }, {
        name: '水木社区帖子内容',
        url: '^http://www\\.newsmth\\.net/',
        nextLink: '//a[@title="下一页" and contains(text(),">>")]',
        pageElement: '//section[@id="body" and @class="corner"]/div[@class="b-content corner"]',
        exampleUrl: 'http://www.newsmth.net/nForum/#!article/NewSoftware/50681',
    },
    // {
    //     name: 'SF轻小说',
    //     url: '^http://book\\.sfacg\\.com/Novel/\\d+/\\d.*',
    //     nextLink: '//a[text()="下一章"]',
    //     pageElement: '//div/div/div[@class="content_left2"]',
    //     exampleUrl: 'http://book.sfacg.com/Novel/29112/86452/600422/',
    // },
    {
        name: '尘封之泪',
        url: '^http://www\\.xxmer\\.com/',
        nextLink: '//a[text()="下一页"]',
        pageElement: '//section/div/div[@class="content"]',
        exampleUrl: 'http://www.xxmer.com/',
    }, {
        name: '天猫',
        url: '^http://list\\.tmall\\.com//search_product\\.htm\\?q=*',
        nextLink: '//a[@class="ui-page-next"]',
        pageElement: 'id("J_ItemList")',
        exampleUrl: 'http://list.tmall.com//search_product.htm?q=%D2%F4%CF%E4&type=p&cat=all',
    }, {
        name: 'User scripts on Greasy Fork',
        url: '^https://greasyfork\\.org/*',
        nextLink: '//div[@class="pagination"]/a[@class="next_page"]',
        pageElement: 'id("browse-script-list")',
        exampleUrl: 'https://greasyfork.org/scripts',
    }, {
        name: 'Yanu',
        url: '^http://www\\.ccav1\\.com/*',
        nextLink: 'id("content-list")/div[@class="pagination"]/a[text()="下页"]',
        pageElement: '//div[@id="content-list"]',
        exampleUrl: 'http://www.ccav1.com/',
    }, {
        name: '软件阁',
        url: '^http://www\\.lite6\\.com/',
        nextLink: '//div[@class="fuck"]/div[@class="main"]/div[@class="left"]/ol[@class="page-navigator"]/li[@class="next"]/a',
        pageElement: '//div[@class="fuck"]/div[@class="main"]/div[@class="left"]',
        exampleUrl: 'http://www.lite6.com/',
    }, {
        name: 'iconarchive',
        url: '^http://www\\.iconarchive\\.com/search\\?q=*',
        nextLink: 'id("layout-search-content")/div[@class="pagination-bar"]/div[@class="pagination"]/a[@class="next"]',
        pageElement: 'id("layout-search-content")',
        exampleUrl: 'http://www.iconarchive.com/search?q=pin',
    }, {
        name: 'Find Icons',
        url: '^http://findicons\\.com/search/',
        nextLink: '//div[@class="pages"]/a[contains(text(), "Next")]',
        pageElement: 'id("search_con")/div[@class="icon_list icon_list_165"]',
        exampleUrl: 'http://findicons.com/search/earth',
    }, {
        name: 'findicons',
        url: '^http://findicons\\.com/search/*',
        nextLink: 'id("search_con")/div[@class="info_page"]/div[@class="box_page right"]/div[@class="pages"]/a[text()="下一页 >"]',
        pageElement: 'id("search_con")/div[@class="icon_list icon_list_165"]',
        exampleUrl: 'http://findicons.com/search/player',
    }, {
        name: 'IconPng.com',
        url: '^http://www\\.iconpng\\.com/search/*',
        nextLink: 'id("searchresults")/div[@class="paging"]/a[text()="下一页"]',
        pageElement: 'id("searchresults")',
        exampleUrl: 'http://www.iconpng.com/search/tag=download',
    }, {
        name: 'iconarchiveShow',
        url: '^http://www\\.iconarchive\\.com/show/*',
        nextLink: 'id("allcontent")/div[@class="contentbox"]/div[@class="pagination-bar"]/div[@class="pagination"]/a[text()="Next >"]',
        pageElement: 'id("allcontent")/div[@class="contentbox"]',
        exampleUrl: 'http://www.iconarchive.com/show/icons8-metro-style-icons-by-visualpharm.2.html',
    }, {
        name: '炫电影',
        url: '^http://www\\.xuandy\\.com/*',
        nextLink: '//a[text()="下一页"]',
        pageElement: 'id("center")',
        exampleUrl: 'http://www.xuandy.com/tag/dzp',
    }, {
        name: '八零电子书',
        url: '^http://www\\.80txt\\.com/shuku/*',
        nextLink: 'id("pagelink")/a[@class="next"]',
        pageElement: 'id("centerl")/div[@class="bookstoretwo"]/div[@class="twoleft"]',
        exampleUrl: 'http://www.80txt.com/shuku/allvisit_0_5_2_0_2_0_2.html',
    },

];

// 本体に组み込まれている MICROFORMAT を利用するか？
USE_MICROFORMAT = true;
