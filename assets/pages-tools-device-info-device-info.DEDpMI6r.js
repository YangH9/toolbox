import{v as t,k as e,x as i,y as l,z as o,A as n,B as r,C as a,D as d,E as s,G as m,H as c,J as u,K as f,L as h,M as p,N as g,a as x,c as T,w as v,i as y,o as b,e as z,f as w,F as _,b as A,d as I,t as k,j as B,O as S}from"./index-B_UDXFNQ.js";const H={__name:"device-info",setup(H){var $,N,L,V,O,F,E,j,C,P,M,R,W,D;uni.$sharePageTitle="程序设备信息";const X=t({systemInfo:null,deviceInfo:null,windowInfo:null,appBaseInfo:null,appAuthorizeSetting:null,systemSetting:null,networkType:null,screenBrightness:null,batteryInfo:null,accelerometer:null,compass:null,gyroscope:null}),Y={systemInfo:{title:"系统信息",children:{appName:{title:"名称"},appLanguage:{title:"语言"},appVersion:{title:"版本"},uniPlatform:{title:"平台"},system:{title:"系统"},deviceBrand:{title:"设备品牌"},deviceModel:{title:"设备型号",formatHtml:t=>t.replace(">","&gt;").replace("<","<br/>&lt;")},deviceType:{title:"设备类型"},deviceOrientation:{title:"设备方向",formatText:t=>({portrait:"竖屏",landscape:"横屏"}[t]||t)},devicePixelRatio:{title:"设备像素比"},hostName:{title:"宿主名称"},hostVersion:{title:"宿主版本"},hostLanguage:{title:"宿主语言"},hostTheme:{title:"宿主主题",formatText:t=>({light:"明亮",dark:"黑暗"}[t]||t)},hostFontSizeSetting:{title:"用户字体大小设置"},browserName:{title:"浏览器名称"},osName:{title:"系统名称"},osVersion:{title:"系统版本"},osLanguage:{title:"系统语言"},osTheme:{title:"系统主题"},romName:{title:"rom 名称"},romVersion:{title:"rom 版本"}}},deviceInfo:{title:"设备信息",children:{deviceBrand:{title:"设备品牌"},deviceModel:{title:"设备型号",formatHtml:t=>t.replace(">","&gt;").replace("<","<br/>&lt;")},deviceType:{title:"设备类型"},deviceOrientation:{title:"设备方向",formatText:t=>({portrait:"竖屏",landscape:"横屏"}[t]||t)},devicePixelRatio:{title:"设备像素比"},benchmarkLevel:{title:"设备性能等级"},system:{title:"操作系统及版本"},platform:{title:"客户端平台"},osName:{title:"系统名称"},osVersion:{title:"系统版本"},osLanguage:{title:"系统语言"},osTheme:{title:"系统主题"},romName:{title:"rom 名称"},romVersion:{title:"rom 版本"}}},windowInfo:{title:"窗口信息",children:{pixelRatio:{title:"设备像素比"},screenWidth:{title:"屏幕宽度"},screenHeight:{title:"屏幕高度"},windowWidth:{title:"可使用窗口宽度"},windowHeight:{title:"可使用窗口高度"},windowTop:{title:"可使用窗口顶部位置"},windowBottom:{title:"可使用窗口底部位置"},statusBarHeight:{title:"状态栏高度"},screenTop:{title:"屏幕顶部位置"},safeArea:{title:"安全区域",formatHtml:t=>`左上角横坐标：${t.left}<br/>右下角横坐标：${t.right}<br/>左上角纵坐标：${t.top}<br/>右下角纵坐标：${t.bottom}<br/>宽度：${t.width}<br/>高度：${t.height}`},safeAreaInsets:{title:"安全区域插入",formatHtml:t=>`左侧插入位置：${t.left}<br/>右侧插入位置：${t.right}<br/>顶部插入位置：${t.top}<br/>底部插入位置：${t.bottom}`}}},appBaseInfo:{title:"应用基础信息",children:{appName:{title:"名称"},appLanguage:{title:"语言"},appVersion:{title:"版本"},appTheme:{title:"主题"},appLaunchTime:{title:"启动时间"},appInstallTime:{title:"安装时间"},appUpdateInfo:{title:"更新信息"},hostName:{title:"宿主名称"},hostVersion:{title:"宿主版本"},hostLanguage:{title:"宿主语言"},hostTheme:{title:"宿主主题",formatText:t=>({light:"明亮",dark:"黑暗"}[t]||t)},hostFontSizeSetting:{title:"用户字体大小设置"},enableDebug:{title:"是否已打开调试",formatText:t=>t?"是":"否"}}},appAuthorizeSetting:{title:"应用授权设置",children:{albumAuthorized:{title:"允许使用相册的开关",formatText:t=>({authorized:"已获取",denied:"被拒绝","not determined":"暂未获取"}[t]||t)},bluetoothAuthorized:{title:"允许使用蓝牙的开关",formatText:t=>({authorized:"已获取",denied:"被拒绝","not determined":"暂未获取","config error":"配置错误"}[t]||t)},cameraAuthorized:{title:"允许使用摄像头的开关",formatText:t=>({authorized:"已获取",denied:"被拒绝","not determined":"暂未获取","config error":"配置错误"}[t]||t)},locationAuthorized:{title:"允许使用定位的开关",formatText:t=>({authorized:"已获取",denied:"被拒绝","not determined":"暂未获取","config error":"配置错误"}[t]||t)},locationAccuracy:{title:"定位准确度",formatText:t=>({reduced:"模糊定位",full:"精准定位",unsupported:"不支持"}[t]||t)},microphoneAuthorized:{title:"允许使用麦克风的开关",formatText:t=>({authorized:"已获取",denied:"被拒绝","not determined":"暂未获取","config error":"配置错误"}[t]||t)},notificationAuthorized:{title:"允许通知的开关",formatText:t=>({authorized:"已获取",denied:"被拒绝","not determined":"暂未获取","config error":"未配置推送模块"}[t]||t)},notificationAlertAuthorized:{title:"允许通知带有提醒的开关",formatText:t=>({authorized:"已获取",denied:"被拒绝","not determined":"暂未获取","config error":"未配置推送模块"}[t]||t)},notificationBadgeAuthorized:{title:"允许通知带有标记的开关",formatText:t=>({authorized:"已获取",denied:"被拒绝","not determined":"暂未获取","config error":"未配置推送模块"}[t]||t)},notificationBadgeAuthorized:{title:"允许通知带有标记的开关",formatText:t=>({authorized:"已获取",denied:"被拒绝","not determined":"暂未获取","config error":"未配置推送模块"}[t]||t)},notificationSoundAuthorized:{title:"允许通知带有声音的开关",formatText:t=>({authorized:"已获取",denied:"被拒绝","not determined":"暂未获取","config error":"未配置推送模块"}[t]||t)},phoneCalendarAuthorized:{title:"允许读写日历的开关",formatText:t=>({authorized:"已获取",denied:"被拒绝","not determined":"暂未获取"}[t]||t)}}},systemSetting:{title:"设备设置",children:{bluetoothEnabled:{title:"蓝牙的系统开关",formatText:t=>t?"已开启":"未开启"},locationEnabled:{title:"定位的系统开关",formatText:t=>t?"已开启":"未开启"},wifiEnabled:{title:"Wi-Fi的系统开关",formatText:t=>t?"已开启":"未开启"},deviceOrientation:{title:"设备方向",formatText:t=>({portrait:"竖屏",landscape:"横屏"}[t]||t)}}},networkType:{title:"网络类型",children:{isConnected:{title:"是否连接",formatText:t=>t?"已连接":"未连接"},networkType:{title:"网络类型",formatText:t=>({ethernet:"有线",unknown:"未知",none:"无网络"}[t]||t)}}},screenBrightness:{title:"屏幕亮度",children:{value:{title:"屏幕亮度值",formatText:t=>{var e;return`${null==(e=100*t)?void 0:e.toFixed(2)}%`}}}},batteryInfo:{title:"设备电量",children:{level:{title:"电量值",formatText:t=>`${null==t?void 0:t.toFixed(2)}%`},isCharging:{title:"是否在充电",formatText:t=>t?"正在充电":"未充电"}}},accelerometer:{title:"加速度数据",children:{x:{title:"绕 X 轴的加速度"},y:{title:"绕 Y 轴的加速度"},z:{title:"绕 Z 轴的加速度"}}},compass:{title:"罗盘数据",children:{direction:{title:"方向"}}},gyroscope:{title:"陀螺仪",children:{x:{title:"绕 X 轴的角度"},y:{title:"绕 Y 轴的角度"},z:{title:"绕 Z 轴的角度"}}}},Z=(t,e)=>{void 0!==e&&(X[t]={title:Y[t].title,key:t,children:{}},Y[t].children&&Object.entries(Y[t].children).forEach((([i,l])=>{Object.hasOwn(e,i)&&(X[t].children[i]={title:l.title,formatHtml:!!l.formatHtml,value:l.formatText?l.formatText(e[i]):l.formatHtml?l.formatHtml(e[i]):e[i]})})))};return Z("systemInfo",null==($=e)?void 0:$()),Z("deviceInfo",null==(N=i)?void 0:N()),Z("windowInfo",null==(L=l)?void 0:L()),Z("appBaseInfo",null==(V=o)?void 0:V()),Z("appAuthorizeSetting",null==(O=uni.getAppAuthorizeSetting)?void 0:O.call(uni)),Z("systemSetting",null==(F=uni.getSystemSetting)?void 0:F.call(uni)),null==(E=n)||E({success(t){Z("screenBrightness",t)}}),null==(j=uni.getBatteryInfo)||j.call(uni,{success(t){Z("batteryInfo",t)}}),null==(C=r)||C({success(t){Z("networkType",t)}}),null==(P=a)||P(),null==(M=d)||M((t=>{Z("accelerometer",t)})),null==(R=s)||R((t=>{Z("compass",t)})),null==(W=m)||W(),null==(D=c)||D((t=>{Z("gyroscope",t)})),u((()=>{var t,e,i,l;null==(t=f)||t(),null==(e=h)||e(),null==(i=p)||i(),null==(l=g)||l()})),(t,e)=>{const i=y,l=S,o=x("my-ad-custom"),n=x("my-bottom-safety-space");return b(),T(i,{class:"pt_4"},{default:v((()=>[(b(!0),z(_,null,w(X,((t,e)=>(b(),z(_,{key:e},[t?(b(),T(i,{key:0,class:"mx_4 mb_4 shadow radius bg-color"},{default:v((()=>[A(i,{class:"px_4 pt_3 pb_2"},{default:v((()=>[A(i,{class:"font_bold"},{default:v((()=>[I(k(t.title),1)])),_:2},1024)])),_:2},1024),(b(!0),z(_,null,w(t.children,((t,e)=>(b(),z(_,{key:e},[void 0!==t.value?(b(),T(i,{key:0,class:"d_flex px_4 py_3 items_center border_t"},{default:v((()=>[A(i,{class:"title grow"},{default:v((()=>[I(k(t.title),1)])),_:2},1024),t.formatHtml?(b(),T(l,{key:0,class:"text_right text-info",nodes:t.value},null,8,["nodes"])):(b(),T(i,{key:1,class:"text_right text-info"},{default:v((()=>[I(k(t.value),1)])),_:2},1024))])),_:2},1024)):B("",!0)],64)))),128))])),_:2},1024)):B("",!0)],64)))),128)),A(o,{mp_weixin:"adunit-3eaf9cea980e809f"}),A(n,{version:""})])),_:1})}}};export{H as default};
