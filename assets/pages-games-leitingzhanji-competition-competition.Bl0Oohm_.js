import{r as e,a,o as t,g as l,z as s,w as n,l as o,i as r,b as u,c as d,e as c,F as _,d as f,t as i,y as m,j as y,m as v,s as b,v as x,u as p,A as g}from"./index-Do7gyBnZ.js";const h={__name:"cache-prompt",setup(s){const n=e("");return n.value="移除小程序",n.value="清空浏览器数据",(e,s)=>{const o=a("my-divider");return t(),l(o,{content:`本功能依赖本地缓存，请勿${n.value}，以防数据丢失。`},null,8,["content"])}}},k="leitingzhanji-competition-data",Y=36e5,w={__name:"competition",setup(w){const D=s("dayjs");uni.$sharePageTitle="对战时间记录器-雷霆战机";const H=e([{label:"无尽限时小组赛",key:"xiaozusai",cd:16,date:0,energy:"100"},{label:"无尽争霸赛",key:"zhengbasai",cd:48,date:0,energy:"300"}]),j=[["今天","昨天"].map(((e,a)=>({label:e,value:-a-1+1}))),Array.from({length:24},((e,a)=>({label:`${a}时`,value:a}))),Array.from({length:60},((e,a)=>({label:`${a}分`,value:a})))],z=e([0,0,0]);let C=0;const M=()=>{const e=o(k);H.value.forEach((a=>{const{key:t}=a;e&&e[t]&&(a.date=e[t])}))};M();const $=()=>{const e=D();z.value=[0,e.hour(),e.minute()],C=e.valueOf()-e.hour()*Y-6e4*e.minute()},A=e=>{const{value:a}=e.detail,{key:t}=e.currentTarget.dataset,l={},s=[24*Y,Y,6e4];H.value.forEach((e=>l[e.key]=e.date));const n=j.map((e=>e.map((e=>e.value))));l[t]=a.reduce(((e,a,t)=>e+n[t][a]*s[t]),C),v(k,l),M()},T=e=>{const{index:a}=e.currentTarget.dataset;H.value[a],b({title:"浏览器暂不支持",icon:"none"})};return(e,s)=>{const o=a("my-divider"),v=r,b=x,k=p,w=g,C=a("my-bottom-safety-space");return t(),l(v,{class:"pt_2"},{default:n((()=>[u(o,{content:"本工具仅作辅助记录时间，具体内容以官方为准。"}),(t(!0),d(_,null,c(H.value,((e,a)=>(t(),l(v,{key:a,class:"mx_4 mb_4 shadow radius bg-color"},{default:n((()=>[u(v,{class:"d_flex items_center p_4"},{default:n((()=>[u(v,{class:"grow"},{default:n((()=>[u(v,{class:"text_base"},{default:n((()=>[f(i(e.label),1)])),_:2},1024),u(v,{class:"text-info"},{default:n((()=>[f("冷却结束后使用"),u(b,{class:"text-error font_bold px_1"},{default:n((()=>[f(i(e.energy),1)])),_:2},1024),f("体力触发")])),_:2},1024)])),_:2},1024),u(v,null,{default:n((()=>[f("CD:"),u(b,{class:"text-error font_bold px_1"},{default:n((()=>[f(i(e.cd),1)])),_:2},1024),f("H")])),_:2},1024)])),_:2},1024),u(w,{class:"cursor_default",mode:"multiSelector","range-key":"label",value:z.value,range:j,"data-key":e.key,onClick:$,onChange:A},{default:n((()=>[u(v,{class:"d_flex items_center p_4 border_t"},{default:n((()=>[u(v,{class:"grow"},{default:n((()=>[u(v,{class:"text_base"},{default:n((()=>[f("本次"),u(b,{class:"text-error font_bold px_1"},{default:n((()=>[f("开始匹配")])),_:1}),f("的时间")])),_:1}),e.date?(t(),l(v,{key:0,class:"text-info"},{default:n((()=>[f(i(m(D)(e.date).format("YYYY/MM/DD HH:mm")),1)])),_:2},1024)):y("",!0)])),_:2},1024),u(v,null,{default:n((()=>[u(k,{class:"yang-button primary small outline","hover-class":"hover"},{default:n((()=>[f("设置时间")])),_:1})])),_:1})])),_:2},1024)])),_:2},1032,["value","data-key"]),u(v,{class:"d_flex items_center p_4 border_t"},{default:n((()=>[u(v,{class:"grow"},{default:n((()=>[u(v,{class:"text_base"},{default:n((()=>[f("预估冷却结束时间")])),_:1}),e.date?(t(),l(v,{key:0,class:"text-info"},{default:n((()=>[f(i(m(D)(e.date+e.cd*Y).format("YYYY/MM/DD HH:mm")),1)])),_:2},1024)):y("",!0)])),_:2},1024),e.date?(t(),l(v,{key:0},{default:n((()=>[u(k,{class:"yang-button primary small outline","hover-class":"hover","data-index":a,onClick:T},{default:n((()=>[f("设置提醒")])),_:2},1032,["data-index"])])),_:2},1024)):y("",!0)])),_:2},1024)])),_:2},1024)))),128)),u(h),u(C,{version:""})])),_:1})}}};export{w as default};
