/**
 * 多语言切换引擎
 * 默认中文，支持英语
 * 通过 localStorage 持久化，跨标签页/页面自动同步
 */
(function(){
  var STORAGE_KEY = 'site-lang';

  window.I18N = {
    lang: localStorage.getItem(STORAGE_KEY) || 'zh',

    dict: {
      zh: {
        // 通用
        'nav.back': '← 返回工具箱',
        'nav.backHome': '← 返回主页',
        'common.toolboxSuffix': '三月七的工具箱',
        'common.detecting': '检测中...',
        'common.loading': '加载中...',
        'common.computing': '计算中...',
        'common.clear': '清除记录',
        'common.enterFullscreen': '进入全屏',
        'common.exitFullscreen': '退出全屏',
        'common.fullscreen': '全屏',
        'common.start': '开始',
        'common.pause': '暂停',
        'common.continue': '继续',
        'common.reset': '重置',
        'common.yes': '是',
        'common.no': '否',
        'common.unknown': '未知',
        'common.unavailable': '不可用',
        'common.supported': '支持',
        'common.unsupported': '不支持',
        'common.copy': '复制',
        'common.copied': '已复制 ✓',
        'common.verify': '比对',
        'mobile.noticeTitle': '该功能暂时不对移动端用户开放',
        'mobile.mouseNotice': '鼠标测试需要真实的鼠标按键和滚轮，请在电脑端访问使用。',
        'mobile.keyboardNotice': '键盘测试需要真实的物理键盘，请在电脑端访问使用。',

        // 主页
        'index.title': '三月七的个人主页 - 实用在线工具箱合集',
        'index.desc': '三月七的个人主页，包含实用工具箱：北京时间、倒计时器、硬件检测、键盘测试、鼠标测试、MD5校验等在线工具',
        'index.nickname': '三月七',
        'index.bioTitle': '个人简介',
        'index.bioContent': '本人男，年纪不大，认为三月七很可爱。',
        'index.skillsTitle': '会些什么',
        'index.skillsContent': '会修修电脑啥的，不多',
        'index.contactTitle': '联系方式',
        'index.contactTip': '如果发现有网站或工具无法正常访问或您有更好的网站提议请使用此联系方式联系站长。',
        'index.mailLabel': 'mail：',
        'index.bilibiliBtn': '前往bilibili个人主页',
        'index.douyinBtn': '前往抖音个人主页',
        'index.footer': '© 2026 三月七 - 个人主页',
        quotes: [
          {text:'所谓开拓，就是沿着前人未尽的道路，走出更遥远的距离。',author:'姬子'},
          {text:'即便离开了星空，无名客的开拓也不会结束旅程，所谓的终点，只有你能决定。',author:'姬子'},
          {text:'这片银河容得下任何的可能性，而人的命运，也不应当只有上天给予的那一条道路。',author:'瓦尔特'},
          {text:'专注于眼前的路，才能走向远方。',author:'三月七'},
          {text:'以自己的意志，抵达结局吧。',author:'开拓者'},
          {text:'一步两步，迈向未来的路就在脚下。',author:'卡芙卡'},
          {text:'每一颗星星都是一个奇迹，目标就如星辰一般，并非都是遥不可及哟。',author:'艾丝妲'},
          {text:'去吧，身为自己故事的主角，就该披荆斩棘，一往无前。',author:'瓦尔特'},
          {text:'远方的风景看不真切，但一定很美。',author:'黄泉'},
          {text:'选择并非像看上去那般遥不可及，选择的价值因坚定的意志而可贵，列车的轨迹衔接起群星，就如影线串联璀璨珍珠。',author:'姬子'},
          {text:'飞萤扑火，向死而生。',author:'流萤'},
          {text:'当有机会做出选择的时候，不要让自己后悔。',author:'开拓者 / 卡芙卡'},
          {text:'人类太过高估逻辑，执着于理性，会成为情绪奴隶。',author:'阮·梅'},
          {text:'消磨自己，撕碎敌人，便是兵刃。',author:'刃'},
          {text:'人生每一步就像出牌，时间久了总能摸着想要的牌嘛。',author:'青雀'},
          {text:'这世上有种顽疾名为愚钝，比任何病症都更难根除，袖手旁观才是真正的医治，天才们漫步繁星，凡庸却连一处脚印都无法追及，庸人只得学着独立行走，在跌倒爬起中度过碌碌一生，但失败的人生同样是人生，他们有权品尝至最后，也只有摔倒在地无人扶起的时候，愚者才能领悟如何站起。',author:'维里塔斯·拉帝奥'}
        ],
        'index.webSectionTitle': '实用网页',
        'index.webSectionDesc': '常用在线服务导航',
        'index.toolSectionTitle': '工具箱',
        'index.toolSectionDesc': '实用小工具集合',

        // 实用网页名称与描述
        'web.speedtest.name': '测速网',
        'web.speedtest.desc': '在线网络测速，检测网速与延迟',
        'web.typhoon.name': '台风地图',
        'web.typhoon.desc': '实时台风路径追踪，预警信息查询',
        'web.mc.name': '我的世界安卓版本库',
        'web.mc.desc': '基岩版安卓安装包下载，正式版与测试版齐全',
        'web.msdn.name': 'MSDN 下载站',
        'web.msdn.desc': '微软官方系统镜像与开发工具原版资源',
        'web.steam.name': 'Steam 商店',
        'web.steam.desc': '全球数字游戏发行平台，购买与下载游戏',
        'web.someacg.name': 'SomeACG 壁纸',
        'web.someacg.desc': '二次元高清壁纸聚合，精选 ACG 美图下载',
        'web.gequbao.name': '歌曲宝',
        'web.gequbao.desc': '免费在线听歌与下载音乐，多平台聚合搜索',
        'web.airportal.name': 'AirPortal 文件快传',
        'web.airportal.desc': '跨设备文件传输，取件码快捷接收',

        // 工具箱
        'tool.hardware.name': '硬件检测',
        'tool.hardware.desc': '检测操作系统、浏览器、屏幕与硬件信息',
        'tool.md5.name': 'MD5 校验',
        'tool.md5.desc': '文件 MD5 哈希计算与比对，纯本地不上传',
        'tool.mouse.name': '鼠标测试',
        'tool.mouse.desc': '测试鼠标按键、滚轮、双击功能与坐标',
        'tool.keyboard.name': '键盘测试',
        'tool.keyboard.desc': '测试键盘按键功能，显示键值与按键记录',
        'tool.countdown.name': '倒计时器',
        'tool.countdown.desc': '自定义时长倒计时，到点响铃，支持全屏',
        'tool.beijing.name': '北京时间',
        'tool.beijing.desc': '东八区标准时间，精确到毫秒，支持全屏',

        // 硬件检测
        'hw.title': '硬件检测 - 系统与硬件信息在线检测工具',
        'hw.desc': '在线硬件检测工具，检测操作系统、浏览器、屏幕分辨率、CPU、内存等电脑硬件信息',
        'hw.subtitle': '一键查看操作系统、浏览器、屏幕分辨率与硬件参数',
        'hw.os': '操作系统',
        'hw.browser': '浏览器',
        'hw.screen': '屏幕',
        'hw.hardware': '硬件',
        'hw.refresh': '重新检测',
        'hw.version': '版本 ',
        'hw.arch': '架构 ',
        'hw.windowsOld': 'Windows (旧版本)',
        'hw.availArea': '可用区: ',
        'hw.resolution': '分辨率: ',
        'hw.pixelRatio': '像素比: ',
        'hw.colorDepth': '色深: ',
        'hw.bit': '位',
        'hw.cpuThreads': '核心线程',
        'hw.cpu': 'CPU: ',
        'hw.memory': '设备内存: ',
        'hw.language': '语言: ',
        'hw.touch': '触屏: ',

        // MD5
        'md5.title': 'MD5校验工具 - 文件哈希计算与比对验证工具',
        'md5.desc': '在线MD5校验工具，本地计算文件MD5哈希值，支持文件拖拽上传和MD5比对验证',
        'md5.subtitle': '在浏览器本地计算文件 MD5 哈希值，支持拖拽上传与结果比对',
        'md5.dropTitle': '点击选择文件 或 拖拽到此处',
        'md5.dropDesc': '文件仅在浏览器本地计算，不会上传到服务器',
        'md5.fileName': '文件名',
        'md5.size': '大小',
        'md5.verifyTitle': '与已知 MD5 比对',
        'md5.verifyPlaceholder': '粘贴已知 MD5 值，不区分大小写',
        'md5.note': '说明：',
        'md5.note1': 'MD5 仅适用于快速完整性校验（如检测下载损坏），',
        'md5.note2': '不适用于安全敏感场景',
        'md5.note3': '。MD5 抗碰撞能力已被攻破，涉及安全验证请使用 SHA-256 等更强算法。',
        'md5.verifyEmpty': '请输入要比对的 MD5 值',
        'md5.verifyNoFile': '请先选择文件计算 MD5',
        'md5.match': 'MD5 一致，文件完整',
        'md5.mismatch': 'MD5 不一致，文件可能已损坏或被修改',

        // 鼠标测试
        'mouse.title': '鼠标测试 - 按键滚轮双击检测工具',
        'mouse.desc': '在线鼠标测试工具，测试鼠标左键、右键、中键、侧键、滚轮、双击功能和坐标显示',
        'mouse.subtitle': '在测试区移动、点击、滚动鼠标，检查按键与滚轮状态',
        'mouse.zoneTitle': '在此区域内移动鼠标并点击测试',
        'mouse.coord': 'X: 0 px  |  Y: 0 px',
        'mouse.labelX': 'X 坐标',
        'mouse.labelY': 'Y 坐标',
        'mouse.labelClicks': '总点击数',
        'mouse.labelScroll': '滚动距离',
        'mouse.left': '左键',
        'mouse.middle': '中键',
        'mouse.right': '右键',
        'mouse.back': '后退侧键',
        'mouse.forward': '前进侧键',
        'mouse.btnPrefix': '按键',
        'mouse.dblTitle': '双击测试',
        'mouse.dblDesc': '快速双击此区域',
        'mouse.wheelTitle': '滚轮测试',
        'mouse.wheelDesc': '在上方区域滚动滚轮',
        'mouse.history': '事件历史',
        'mouse.historyEmpty': '在测试区域内移动鼠标并点击开始测试...',
        'mouse.down': '按下',
        'mouse.dbl': '双击',
        'mouse.dblSuccess': '成功触发 dblclick',
        'mouse.wheel': '滚轮',

        // 键盘测试
        'kb.title': '键盘测试 - 按键检测与键值查看工具',
        'kb.desc': '在线键盘测试工具，实时显示按键信息、键值、code码，支持按键记录和键盘故障检测',
        'kb.subtitle': '按下键盘按键，实时查看键名、键值与按键历史',
        'kb.history': '按键记录',
        'kb.historyEmpty': '按下任意键开始测试...',

        // 倒计时
        'cd.title': '倒计时器 - 自定义时长定时提醒工具',
        'cd.desc': '在线倒计时器，支持自定义时长，预设5/10/25/45/60分钟，到点响铃提醒，支持全屏显示',
        'cd.subtitle': '设置时间，到点响铃提醒',
        'cd.hour': '时',
        'cd.minute': '分',
        'cd.second': '秒',
        'cd.preset5': '5 分钟',
        'cd.preset10': '10 分钟',
        'cd.preset25': '25 分钟（番茄钟）',
        'cd.preset45': '45 分钟',
        'cd.preset60': '1 小时',
        'cd.banner': '倒计时结束！',

        // 北京时间
        'bt.title': '北京时间 - 东八区标准时间在线显示',
        'bt.desc': '在线北京时间显示，东八区标准时间，精确到毫秒，实时与服务器时间同步，支持全屏显示',
        'bt.subtitle': '东八区标准时间，精确到毫秒',
        'bt.tzLabel': '时区：',
        'bt.tzSynced': '已经与服务器时间同步',
        'bt.tzCST': 'UTC+8 (中国标准时间)',
        'bt.tzFaster': '设备比北京快 ',
        'bt.tzSlower': '设备比北京慢 ',
        'bt.hour': '小时',
        'bt.minute': '分',
        'bt.sun': '星期日',
        'bt.mon': '星期一',
        'bt.tue': '星期二',
        'bt.wed': '星期三',
        'bt.thu': '星期四',
        'bt.fri': '星期五',
        'bt.sat': '星期六',
        'bt.weekPrefix': '第',
        'bt.weekSuffix': '周',
        'bt.year': '年',
        'bt.month': '月',
        'bt.day': '日'
      },

      en: {
        // Common
        'nav.back': '← Back to Toolbox',
        'nav.backHome': '← Back to Home',
        'common.toolboxSuffix': "March 7th's Toolbox",
        'common.detecting': 'Detecting...',
        'common.loading': 'Loading...',
        'common.computing': 'Computing...',
        'common.clear': 'Clear',
        'common.enterFullscreen': 'Enter Fullscreen',
        'common.exitFullscreen': 'Exit Fullscreen',
        'common.fullscreen': 'Fullscreen',
        'common.start': 'Start',
        'common.pause': 'Pause',
        'common.continue': 'Resume',
        'common.reset': 'Reset',
        'common.yes': 'Yes',
        'common.no': 'No',
        'common.unknown': 'Unknown',
        'common.unavailable': 'Unavailable',
        'common.supported': 'Supported',
        'common.unsupported': 'Not supported',
        'common.copy': 'Copy',
        'common.copied': 'Copied ✓',
        'common.verify': 'Verify',
        'mobile.noticeTitle': 'This feature is temporarily unavailable on mobile',
        'mobile.mouseNotice': 'Mouse testing requires real mouse buttons and scroll wheel. Please use a computer to access this page.',
        'mobile.keyboardNotice': 'Keyboard testing requires a real physical keyboard. Please use a computer to access this page.',

        // Index
        'index.title': "March 7th's Homepage - Free Online Tools Collection",
        'index.desc': "March 7th's personal homepage with useful tools: Beijing Time, Countdown Timer, Hardware Detection, Keyboard Test, Mouse Test, MD5 Checksum and more online utilities",
        'index.nickname': 'March 7th',
        'index.bioTitle': 'About Me',
        'index.bioContent': "Male, young, and I think March 7th is adorable.",
        'index.skillsTitle': 'What I Can Do',
        'index.skillsContent': "I can fix computers and stuff — not much more.",
        'index.contactTitle': 'Contact',
        'index.contactTip': 'If you find any website or tool inaccessible, or have a better site to recommend, please use the contact info below to reach the webmaster.',
        'index.mailLabel': 'mail: ',
        'index.bilibiliBtn': 'Visit my Bilibili page',
        'index.douyinBtn': 'Visit my Douyin page',
        'index.footer': '© 2026 March 7th - Personal Homepage',
        quotes: [
          {text:'To forge ahead means to walk further along the path left unfinished by predecessors.',author:'Himeko'},
          {text:"Even after leaving the starry sky, the Nameless's trailblazing never ends. The so-called destination is only for you to decide.",author:'Himeko'},
          {text:'This galaxy holds infinite possibilities, and human destiny should not be confined to the single path granted by the heavens.',author:'Welt'},
          {text:'Focus on the road ahead, and you will reach far.',author:'March 7th'},
          {text:'Reach the ending with your own will.',author:'Trailblazer'},
          {text:'One step, two steps — the road to the future is right beneath your feet.',author:'Kafka'},
          {text:'Every star is a miracle. Goals, like stars, are not always out of reach.',author:'Asta'},
          {text:'Go forth — as the protagonist of your own story, you must cut through all obstacles and press onward.',author:'Welt'},
          {text:"The scenery in the distance isn't clear, but it must be beautiful.",author:'Acheron'},
          {text:"Choices are not as unreachable as they seem. The value of choice lies in unwavering will. The train's tracks connect the stars, like threads stringing together brilliant pearls.",author:'Himeko'},
          {text:'Fireflies dart into the flame, living toward death.',author:'Firefly'},
          {text:"When you have a chance to choose, don't let yourself regret it.",author:'Trailblazer / Kafka'},
          {text:'Humans overestimate logic. Obsessed with reason, they become slaves to emotion.',author:'Ruan Mei'},
          {text:'To wear oneself down and tear enemies apart — that is a blade.',author:'Blade'},
          {text:'Every step in life is like playing a card. Play long enough, and you\'ll always get the hand you want, yeah?',author:'Qingque'},
          {text:'There is a malady in this world called obtuseness, harder to eradicate than any ailment. Standing by and doing nothing is the true cure. Geniuses stroll among the stars, while the mediocre cannot trace even a single footprint. Fools must learn to walk on their own, living mediocre lives as they stumble and rise. But a failed life is still a life — they have the right to savor it to the end. Only when they fall and no one helps them up can fools finally understand how to stand.',author:'Veritas Ratio'}
        ],
        'index.webSectionTitle': 'Useful Websites',
        'index.webSectionDesc': 'Navigation for commonly used online services',
        'index.toolSectionTitle': 'Toolbox',
        'index.toolSectionDesc': 'A collection of handy tools',

        // Web entries
        'web.speedtest.name': 'Speedtest',
        'web.speedtest.desc': 'Online network speed test, measure bandwidth and latency',
        'web.typhoon.name': 'Typhoon Map',
        'web.typhoon.desc': 'Real-time typhoon path tracking and alerts',
        'web.mc.name': 'Minecraft Android Archive',
        'web.mc.desc': 'Bedrock Edition Android APK downloads, stable and beta versions',
        'web.msdn.name': 'MSDN Downloads',
        'web.msdn.desc': 'Official Microsoft system images and development tools',
        'web.steam.name': 'Steam Store',
        'web.steam.desc': 'Global digital game distribution platform, buy and download games',
        'web.someacg.name': 'SomeACG Wallpapers',
        'web.someacg.desc': 'High-definition anime wallpaper aggregation, curated ACG art downloads',
        'web.gequbao.name': 'Gequbao Music',
        'web.gequbao.desc': 'Free online music streaming and downloads, multi-platform search',
        'web.airportal.name': 'AirPortal Transfer',
        'web.airportal.desc': 'Cross-device file transfer, quick pickup via code',

        // Tools
        'tool.hardware.name': 'Hardware Check',
        'tool.hardware.desc': 'Detect OS, browser, screen and hardware information',
        'tool.md5.name': 'MD5 Checksum',
        'tool.md5.desc': 'File MD5 hash calculation and comparison, fully local',
        'tool.mouse.name': 'Mouse Test',
        'tool.mouse.desc': 'Test mouse buttons, scroll wheel, double-click and coordinates',
        'tool.keyboard.name': 'Keyboard Test',
        'tool.keyboard.desc': 'Test keyboard keys, display key codes and press history',
        'tool.countdown.name': 'Countdown Timer',
        'tool.countdown.desc': 'Custom duration countdown with alarm, supports fullscreen',
        'tool.beijing.name': 'Beijing Time',
        'tool.beijing.desc': 'UTC+8 standard time, millisecond precision, fullscreen supported',

        // Hardware
        'hw.title': 'Hardware Check - System and Hardware Info Detection Tool',
        'hw.desc': 'Online hardware detection tool, check OS, browser, screen resolution, CPU, memory and computer hardware information',
        'hw.subtitle': 'View OS, browser, screen resolution and hardware parameters',
        'hw.os': 'Operating System',
        'hw.browser': 'Browser',
        'hw.screen': 'Screen',
        'hw.hardware': 'Hardware',
        'hw.refresh': 'Re-detect',
        'hw.version': 'Version ',
        'hw.arch': 'Architecture ',
        'hw.windowsOld': 'Windows (legacy)',
        'hw.availArea': 'Avail: ',
        'hw.resolution': 'Resolution: ',
        'hw.pixelRatio': 'Pixel ratio: ',
        'hw.colorDepth': 'Color depth: ',
        'hw.bit': '-bit',
        'hw.cpuThreads': ' cores / threads',
        'hw.cpu': 'CPU: ',
        'hw.memory': 'Device memory: ',
        'hw.language': 'Language: ',
        'hw.touch': 'Touch: ',

        // MD5
        'md5.title': 'MD5 Checksum Tool - File Hash Calculator and Comparison Verifier',
        'md5.desc': 'Online MD5 checksum tool, compute file MD5 hash locally, supports drag-and-drop upload and MD5 comparison verification',
        'md5.subtitle': 'Compute file MD5 hash locally, supports drag-and-drop and comparison',
        'md5.dropTitle': 'Click to select a file or drag it here',
        'md5.dropDesc': 'Files are computed locally in your browser and never uploaded',
        'md5.fileName': 'File name',
        'md5.size': 'Size',
        'md5.verifyTitle': 'Compare with known MD5',
        'md5.verifyPlaceholder': 'Paste a known MD5 value, case-insensitive',
        'md5.note': 'Note: ',
        'md5.note1': 'MD5 is only suitable for quick integrity checks (e.g. detecting download corruption). ',
        'md5.note2': 'It is not suitable for security-sensitive scenarios',
        'md5.note3': '. MD5 collision resistance has been broken; for security verification please use a stronger algorithm such as SHA-256.',
        'md5.verifyEmpty': 'Please enter an MD5 value to compare',
        'md5.verifyNoFile': 'Please select a file and compute its MD5 first',
        'md5.match': 'MD5 matches, file is intact',
        'md5.mismatch': 'MD5 does not match, file may be corrupted or modified',

        // Mouse
        'mouse.title': 'Mouse Test - Button, Scroll Wheel and Double-Click Detector',
        'mouse.desc': 'Online mouse test tool, test left/right/middle/side buttons, scroll wheel, double-click function and coordinate display',
        'mouse.subtitle': 'Move, click and scroll in the test area to check buttons and wheel',
        'mouse.zoneTitle': 'Move and click the mouse inside this area to test',
        'mouse.coord': 'X: 0 px  |  Y: 0 px',
        'mouse.labelX': 'X Coordinate',
        'mouse.labelY': 'Y Coordinate',
        'mouse.labelClicks': 'Total clicks',
        'mouse.labelScroll': 'Scroll distance',
        'mouse.left': 'Left',
        'mouse.middle': 'Middle',
        'mouse.right': 'Right',
        'mouse.back': 'Back side',
        'mouse.forward': 'Forward side',
        'mouse.btnPrefix': 'Button',
        'mouse.dblTitle': 'Double-click test',
        'mouse.dblDesc': 'Quickly double-click this area',
        'mouse.wheelTitle': 'Scroll wheel test',
        'mouse.wheelDesc': 'Scroll the wheel over the area above',
        'mouse.history': 'Event history',
        'mouse.historyEmpty': 'Move and click the mouse inside the test area to begin...',
        'mouse.down': 'down',
        'mouse.dbl': 'Double-click',
        'mouse.dblSuccess': 'dblclick triggered',
        'mouse.wheel': 'Wheel',

        // Keyboard
        'kb.title': 'Keyboard Test - Key Detection and Key Code Viewer',
        'kb.desc': 'Online keyboard test tool, display key info, keyCode, code in real-time, supports key press history and keyboard fault detection',
        'kb.subtitle': 'Press any key to see key name, code and press history',
        'kb.history': 'Key history',
        'kb.historyEmpty': 'Press any key to start testing...',

        // Countdown
        'cd.title': 'Countdown Timer - Custom Duration Timer',
        'cd.desc': 'Online countdown timer, custom duration, presets 5/10/25/45/60 minutes, alarm notification, fullscreen supported',
        'cd.subtitle': 'Set a duration and get an alarm when it ends',
        'cd.hour': 'h',
        'cd.minute': 'm',
        'cd.second': 's',
        'cd.preset5': '5 min',
        'cd.preset10': '10 min',
        'cd.preset25': '25 min (Pomodoro)',
        'cd.preset45': '45 min',
        'cd.preset60': '1 hour',
        'cd.banner': 'Countdown finished!',

        // Beijing time
        'bt.title': 'Beijing Time - UTC+8 Standard Time Online',
        'bt.desc': 'Online Beijing Time display, UTC+8 standard time, millisecond precision, real-time server sync, fullscreen supported',
        'bt.subtitle': 'UTC+8 standard time, millisecond precision',
        'bt.tzLabel': 'Time zone: ',
        'bt.tzSynced': 'Synced with server time',
        'bt.tzCST': 'UTC+8 (China Standard Time)',
        'bt.tzFaster': 'Device is ',
        'bt.tzSlower': 'Device is ',
        'bt.hour': 'h ',
        'bt.minute': 'm ',
        'bt.sun': 'Sunday',
        'bt.mon': 'Monday',
        'bt.tue': 'Tuesday',
        'bt.wed': 'Wednesday',
        'bt.thu': 'Thursday',
        'bt.fri': 'Friday',
        'bt.sat': 'Saturday',
        'bt.weekPrefix': 'Week ',
        'bt.weekSuffix': '',
        'bt.year': '',
        'bt.month': '/',
        'bt.day': '/'
      }
    },

    t: function(key){
      var d = this.dict[this.lang];
      if (d && Object.prototype.hasOwnProperty.call(d, key)) return d[key];
      d = this.dict['zh'];
      if (d && Object.prototype.hasOwnProperty.call(d, key)) return d[key];
      return key;
    },

    setLang: function(lang){
      this.lang = lang;
      try { localStorage.setItem(STORAGE_KEY, lang); } catch(e){}
      this.apply();
      window.dispatchEvent(new CustomEvent('langchange', {detail:{lang:lang}}));
    },

    toggle: function(){
      this.setLang(this.lang === 'zh' ? 'en' : 'zh');
    },

    apply: function(){
      var self = this;
      document.querySelectorAll('[data-i18n]').forEach(function(el){
        el.textContent = self.t(el.getAttribute('data-i18n'));
      });
      document.querySelectorAll('[data-i18n-title]').forEach(function(el){
        el.title = self.t(el.getAttribute('data-i18n-title'));
      });
      document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el){
        el.placeholder = self.t(el.getAttribute('data-i18n-placeholder'));
      });
      document.querySelectorAll('[data-i18n-content]').forEach(function(el){
        el.content = self.t(el.getAttribute('data-i18n-content'));
      });
      var docTitleKey = document.documentElement.getAttribute('data-i18n-doctitle');
      if (docTitleKey) document.title = self.t(docTitleKey);
      document.documentElement.lang = self.lang;
      this.updatePanel();
      window.dispatchEvent(new CustomEvent('langapply', {detail:{lang:self.lang}}));
    },

    buildPanel: function(){
      var sw = document.querySelector('.lang-switcher');
      if(!sw || document.getElementById('langPanel')) return;
      var panel = document.createElement('div');
      panel.id = 'langPanel';
      panel.className = 'lang-panel';
      panel.innerHTML =
        '<div class="lang-option" data-lang="en"><span class="check">✓</span><span class="label">English</span></div>' +
        '<div class="lang-option" data-lang="zh"><span class="check">✓</span><span class="label">简体中文</span></div>' +
        '<div class="lang-divider"></div>' +
        '<div class="lang-disclaimer">翻译不能保证100%正确<span class="en">Translations may not be 100% accurate</span></div>';
      sw.appendChild(panel);
      var self = this;
      panel.querySelectorAll('.lang-option').forEach(function(opt){
        opt.addEventListener('click', function(e){
          e.stopPropagation();
          var lang = opt.getAttribute('data-lang');
          self.setLang(lang);
          self.closePanel();
        });
      });
      var btn = document.getElementById('langBtn');
      if(btn){
        btn.addEventListener('click', function(e){
          e.stopPropagation();
          panel.classList.toggle('show');
        });
      }
      document.addEventListener('click', function(e){
        if(!sw.contains(e.target)) panel.classList.remove('show');
      });
    },

    closePanel: function(){
      var panel = document.getElementById('langPanel');
      if(panel) panel.classList.remove('show');
    },

    updatePanel: function(){
      var btn = document.getElementById('langBtn');
      if(btn) btn.textContent = 'Language';
      var panel = document.getElementById('langPanel');
      if(!panel) return;
      panel.querySelectorAll('.lang-option').forEach(function(opt){
        var check = opt.querySelector('.check');
        if(!check) return;
        if(opt.getAttribute('data-lang') === I18N.lang){
          opt.classList.add('active');
          check.style.visibility = 'visible';
        }else{
          opt.classList.remove('active');
          check.style.visibility = 'hidden';
        }
      });
    }
  };

  // cross-tab sync
  window.addEventListener('storage', function(e){
    if (e.key === STORAGE_KEY && e.newValue && e.newValue !== I18N.lang){
      I18N.lang = e.newValue;
      I18N.apply();
    }
  });

  // init on DOM ready
  document.addEventListener('DOMContentLoaded', function(){
    I18N.buildPanel();
    I18N.apply();
  });
})();
