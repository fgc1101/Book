
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/Home/Home","pages/Test/Test","pages/My/My","pages/Setting/Setting","pages/Search/Search","pages/Store/Store","pages/index/index"],"window":{"rpxCalcMaxDeviceWidth":1024,"rpxCalcBaseDeviceWidth":375,"rpxCalcIncludeWidth":750,"navigationBarTextStyle":"white","navigationBarTitleText":"导航","navigationBarBackgroundColor":"#2e272e","backgroundColorTop":"2e272e","backgroundColor":"#2e272e","navigationStyle":"custom","bounce":"none","scrollIndicator":"none","safearea":{"background":"#2e272e","bottom":{"offset":"none"}}},"tabBar":{"color":"#d8d8d8","selectedColor":"#fb6894","borderStyle":"black","backgroundColor":"#2e272e","iconfontSrc":"static/font/iconfont.ttf","list":[{"pagePath":"pages/Home/Home","iconPath":"static/images/tabbar/home.png","selectedIconPath":"static/images/tabbar/home_selected.png"},{"pagePath":"pages/Search/Search","iconPath":"static/images/tabbar/earth.png","selectedIconPath":"static/images/tabbar/earth_selected.png"},{"pagePath":"pages/Store/Store","iconPath":"static/images/tabbar/book.png","selectedIconPath":"static/images/tabbar/book_selected.png"},{"pagePath":"pages/My/My","iconPath":"static/images/tabbar/my.png","selectedIconPath":"static/images/tabbar/my_selected.png"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"Book","compilerVersion":"3.4.6","entryPagePath":"pages/Home/Home","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/Home/Home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/Test/Test","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/My/My","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/Setting/Setting","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/Search/Search","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/Store/Store","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/index","meta":{},"window":{"navigationBarTitleText":"uni-app"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
