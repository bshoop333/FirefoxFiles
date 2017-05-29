rules = [
    {
        name: "about:haoutil",                  // 规则名称
        from: "about:haoutil",                  // 需要重定向的地址
        to: "https://haoutil.googlecode.com",   // 目标地址
                                                // 支持函数(function(matches){}),返回必须是字符串
                                                // 参数 matches: 正则,匹配结果数组(match函数结果); 通配符,整个网址和(*)符号匹配结果组成的数组; 字符串,整个网址
        // wildcard: false,                         // 可选，true 表示 from 是通配符
        // regex: false,                            // 可选，true 表示 from 是正则表达式
        // resp: false,                             // 可选，true 表示替换 response body
        // state: false,                            // 可选，true 表示该条规则生效
        // decode: false,                           // 可选，true 表示尝试对 from 解码
    },
    // {
    //     name: "优酷收费视频>>脱裤视频",
    //     from: /^(http:\/\/v\.youku\.com\/v_show\/*)/i,
    //     to: "http://goapi.sturgeon.mopaas.com/player.php?url=$1",
    //     state: true,
    //     regex: true,
    // },
    {
        name: "去知乎重定向",
        state: true,
        from: "https://ling.zhihu.com/?target=*",
        to: "$1",
        wildcard: true
    },
    {
        name: "萌娘百科>>中文",
        state: true,
        from: "http://zh.moegirl.org/zh-tw/*",
        to: "http://zh.moegirl.org/zh/$1",
        wildcard: true
    },
    {
        name: "hao123防跳转",
        state: true,
        from: "http://www.hao123.com/?*",
        to: "http://www.hao123.com",
        wildcard: true
    },
    // {
    //     name: "Gmail通讯录>>老版",
    //     state: true,
    //     from: "https://contacts.google.com/preview/all",
    //     to: "https://www.google.com/contacts/u/0/?cplus=0",
    //     wildcard: true
    // },
    // {
    //     name: "Firefox中文社区大图",
    //     state: true,
    //     from: "https://www.firefox.net.cn/attachment/thumb/*",
    //     to: "https://www.firefox.net.cn/attachment/thumb/$1",
    //     wildcard: true
    // },
    {
        name: "v贴吧>>普通贴吧",
        state: true,
        from: "http://v.tieba.com/*",
        to: "http://tieba.baidu.com/$1",
        wildcard: true
    },
    {
        name: "去GooglePlay重定向",
        state: true,
        from: "https://www.google.com/url?q=http*&sa*/",
        to: "http$1",
        wildcard: true
    },
    {
        name: "去QQ邮箱重定向",
        state: true,
        from: "http?://mail.qq.com/cgi-bin/mail_spam?action=check_link&url=http*&mailid=*",
https://mail.qq.com/cgi-bin/readtemplate?t=safety&check=false&gourl=http%3A%2F%2Ftmail.zhihu.com%2Ft%3Fu%3DaHR0cHM6Ly9iZXNwb2tlLnpoaWh1LmNvbS9kaXZvcmNlP3V0bV9jYW1wYWlnbj16aGlodTAwMyZ1dG1fc291cmNlPXpoaWh1MDAzJnV0bV9tZWRpdW09ZW1haWw%253D%26i%3D724138981%26l%3Dzhihu%26s%3D2%26c%3DaT03MjQxMzg5ODEmbD16aGlodSZzPTI%253D&subtemplate=gray&evil=0
        to: "http$1",
        wildcard: true
    },
    {
        name: "迅雷离线>>新版",
        state: true,
        from: "http://dynamic.cloud.vip.xunlei.com/user_task?userid=*",
        to: "http://cloud.vip.xunlei.com/folders/",
        wildcard: true
    },
    {
        name: "手机微博>>电脑微博",
        state: true,
        from: /^http:\/\/(m\.)?weibo\.cn\/(.+)/,
        to: "http://www.weibo.com/$2",
        regex: true
    },
    // {
    //     name: "百度盘网格模式>>列表模式",
    //     state: true,
    //     from: /^(https?:\/\/(yun|pan)\.baidu\.com\/share\/link\?shareid=.+)&render-type=grid-view$/,
    //     to: '$1&render-type=list-view',
    //     regex: true
    // },
    // {
    //     name: "百度盘普通分享手机版>>PC版",
    //     state: true,
    //     from: "http?://pan.baidu.com/wap/share/home*",
    //     to: "http://pan.baidu.com/share/home$1",
    //     wildcard: true
    // },
    // {
    //     name: "百度盘专辑分享手机版>>PC版",
    //     state: true,
    //     from: "http?://pan.baidu.com/wap/album/file*",
    //     to: 'http://yun.baidu.com/pcloud/album/file$1',
    //     wildcard: true
    // },
    {
        name: "Mozest广场>>http",
        state: true,
        from: /^https:\/\/((g|j)\.)?mozest\.com\/(.+)/,
        to: "http://$1mozest.com/$3",
        regex: true
    },
    {
	name: "论坛Archiver>>正常页面",
	from: /(.+)\/archiver\/\??tid\-(\d+)(\-page\-(\d+))?\.html$/,
	to: "$1/viewthread.php?tid=$2",
	regex: true
    },
    // {
    //     name: "Mozest不用简版",
    //     state: true,
    //     from: /^http:\/\/g\.mozest\.com\/archiver\/tid-(\d+)(-page-\d+)?\.html$/,
    //     to: "http://g.mozest.com/viewthread.php?tid=$1",
    //     regex: true
    // },
    // {
    //     name: "51CTO不用简版",
    //     state: true,
    //     from: /^http:\/\/bbs\.51cto\.com\/archiver\/tid-(\d+)(-page-\d+)?\.html$/,
    //     to: "http://bbs.51cto.com/viewthread.php?tid=$1",
    //     regex: true
    // },
    {
        name: "百度搜索>>https",
        state: true,
        from: "http://www.baidu.com/s?wd=*",
        to: "https://www.baidu.com/s?wd=$1",
        wildcard: true
    },
    {
        name: "ArchWiki>>中文",
        state: false,
        from: /^https:\/\/wiki\.archlinux\.org\/index\.php\/(.*?[^\)])(#.+)?$/,
        to: "https://wiki.archlinux.org/index.php/$1_(简体中文)$2",
        exclude: /^https:\/\/wiki\.archlinux\.org\/index\.php.+_\(简体中文\)/,
        regex: true
    },
    {
        name: "去Google搜索结果跳转",
        state: true,
        from: /^https?:\/\/www\.google\.com\/url\?.*url=([^&]*).+/,
        to: "$1",
        regex: true
    },
    {
        name: "USO>>mirror",
        state: true,
        from: /^https?:\/\/userscripts\.org(:8080)?\/(.+)/,
        to: "http://userscripts-mirror.org/$2",
        regex: true
    },
    {// 包含手机版界面
        name: "百度随身听(音质改320)",
        state: true,
        from: /^http:\/\/music\.baidu\.com\/data\/music\/fmlink(.*[&\?])rate=[^3]\d+(.+)/,
        to: "http://music.baidu.com/data/music/fmlink$1rate=320$2",
        regex: true
    },
    {
        name: "pixiv不跳转",
        state: true,
        from: "http://www.pixiv.net/jump.php?http%3A%2F%2F*",
        to: 'http://$1',
        wildcard: true
    },
    // {
        // // 测试：http://sourceforge.net/projects/pcxfirefox/files/Release/Firefox/36.x/36.0.1/x86/sse2/
        // name: "sourceforge下載 >> ftp鏡像站點",
        // state: true,
        // from: /^https?:\/\/sourceforge\.net\/projects\/(((\w)\w).*)\/files\/(.*)\/download/i,
        // to: "http://liquidtelecom.dl.sourceforge.net/project/$1/$4",
        // to: "ftp://ftp.jaist.ac.jp/pub/sourceforge/$3/$2/$1/$4",
        // to: "http://softlayer-sng.dl.sourceforge.net/project/$1/$4",
        // regex: true
    // },
    // {
        // name: "Firefox中文社区大图",
        // state: true,
        // from: /^https?:\/\/www\.firefox\.net\.cn\/attachment\/thumb\/(.+)/,
        // to: "https://www.firefox.net.cn/attachment/$1",
        // regex: true
    // },
    // {
        // name: "酷安大图1",
        // state: true,
        // from: /^http:\/\/image\.coolapk\.com\/apk_image\/(.*)\.t\.jpg$/,
        // to: "http://image.coolapk.com/apk_image/$1",
        // regex: true
    // },
    // {
        // name: "酷安大图2",
        // state: true,
        // from: /^http:\/\/image\.coolapk\.com\/(discovery|feed)\/(.*)\.s\.jpg$/,
        // to: "http://image.coolapk.com/$1/$2.m.jpg",
        // regex: true
        // },
    // {
        // name: "贴吧帖子列表大图",
        // state: true,
        // from: /^http:\/\/(imgsrc\.baidu\.com\/forum\/)ab(pic\/item\/\w+\.jpg)$/,
        // to: "http://$1$2",
        // regex: true
    // },
    // {
        // name: "贴吧大图",
        // state: false,
        // from: /^http:\/\/imgsrc\.baidu\.com\/forum\/.*\/sign=.*\/(.*)\.jpg(\?ssitoken_\d*_)?$/,
        // to: "http://imgsrc.baidu.com/forum/pic/item/$1.jpg",
        // regex: true
    // },
    // {
        // name: "贴吧头像大图",
        // state: true,
        // from: /^http:\/\/tb\.himg\.baidu\.com\/sys\/portrait\/item\/(.+)/,
        // to: "http://himg.baidu.com/sys/portraitl/item/$1",
        // regex: true
    // },
    // {
        // name: "Qzone大图",
        // state: true,
        // from: /^(http:\/\/\w\d+\.)(qpic\.cn|photo\.store\.qq\.com)(\/psb\?\/.+\/)[cm](\/.+)/,
        // to: "$1$2$3d$4",
        // regex: true
    // },
    // {
        // name: "腾讯微博大图",
        // state: true,
        // from: /^(http:\/\/t\d\.qpic\.cn\/mblogpic\/\w+\/)\d+/,
        // exclude:/^http:\/\/t\d.qpic.cn\/mblogpic\/\w+\/2000$/,
        // to: "$12000",
        // regex: true
    // },
    // {
        // name: "pixiv大图",
        // state: false,
        // from: /^(http:\/\/i\d\.pixiv\.net\/img\d+\/img\/.*\/\d+)_m\.jpg$/,
        // to: "$1.jpg",
        // regex: true
    // },
    // {
        // name: "userstyles.org大图",
        // state: false,
        // from: /^https:\/\/(.*)\.https\.cdn\.softlayer\.net\/(.*)\/static\.userstyles\.org\/style_screenshot_thumbnails\/(.+)/,
        // to: "https://$1.https.cdn.softlayer.net/$2/static.userstyles.org/style_screenshots/$3",
        // regex: true
    // },
    // {
        // name: "百度网盘lx.cdn重定向",
        // state: true,
        // from: /^http:\/\/lx\.cdn\.baidupcs\.com\/file\/(.+)/,
        // to: "http://qd.baidupcs.com/file/$1",
        // regex: true
    // },
    // {
        // name: "Google不用.hk",
        // state: false,
        // from: /^https?:\/\/www\.google\.com\.hk\/search\?(.+)/,
        // to: "https://www.google.com/ncr#hl=en&newwindow=1&$1",
        // regex: true
    // },
    // {
        // name: "Gravatar头像重定向至多说",
        // state: true,
        // from: /^https?:\/\/([0-9]?)\.gravatar\.com\/avatar\/(.+)/,
        // to: "http://gravatar.duoshuo.com/avatar/$2",
        // regex: true
    // },
];
