import{_ as a,r as e,l as t,a as s,e as l,b as d,w as i,F as c,U as r,V as o,s as u,W as n,i as _,o as f,d as m,c as p,t as b,j as y,f as v,Q as g,h as x,q as w,m as h}from"./index-E3zeGIvY.js";import{a as T,b as j,c as k}from"./config.BJ04Aq8d.js";import{M as q}from"./my-share-button.CnRRe_oU.js";import"./uni-popup.BHIKmhjJ.js";const $=a({__name:"redemption-code",setup(a){uni.$sharePageTitle=`兑换码-${T}`;const $=`${j}-redemption-code-use`,M=e({updateTime:"",rewardKeyMap:[],data:[]}),K=e(t($)||[]);r({title:"加载中"}),o({url:`https://runjs.work/transformer/project?id=${k}`,sslVerify:!1,success:a=>{var e,t;const s=null==(t=null==(e=a.data.data)?void 0:e.js)?void 0:t.source;if(s){const a=JSON.parse(s.replace(/\n/g," ").replace(/&quot;/g,'"')),{updateTime:e,rewardKeyMap:t,data:l}=a;M.value.updateTime=e,M.value.rewardKeyMap=t,M.value.data=l.reverse()}else u({title:"资源加载异常",icon:"none"})},fail:()=>{u({title:"资源加载失败",icon:"error"})},complete:()=>{n()}});const N=a=>{const{code:e}=a.currentTarget.dataset;K.value.find((a=>a===e))||K.value.push(e),w($,K.value),h({data:e})};return(a,e)=>{const t=_,r=g,o=s("my-divider"),u=s("my-ad-custom"),n=s("my-bottom-safety-space");return f(),l(c,null,[d(t,{class:"pt_4"},{default:i((()=>[d(t,{class:"mx_4 mb_2 shadow radius bg-color"},{default:i((()=>[d(t,{class:"d_flex px_4 py_4 items_center"},{default:i((()=>[d(t,{class:"font_bold grow"},{default:i((()=>[m("兑换码")])),_:1}),M.value.updateTime?(f(),p(t,{key:0},{default:i((()=>[d(r,{class:"mr_2 text-info"},{default:i((()=>[m("更新时间:")])),_:1}),d(r,{class:"text-error font_bold"},{default:i((()=>[m(b(M.value.updateTime),1)])),_:1})])),_:1})):y("",!0)])),_:1})])),_:1}),d(o,null,{default:i((()=>[M.value.data.length?(f(),p(r,{key:0},{default:i((()=>[m("总计"),d(r,{class:"text-primary"},{default:i((()=>[m(b(M.value.data.length),1)])),_:1}),m("个，新增"),d(r,{class:"text-primary"},{default:i((()=>[m(b(M.value.data.filter((a=>a.isNew)).length),1)])),_:1}),m("个，")])),_:1})):y("",!0),m("点击"),d(r,{class:"text-error"},{default:i((()=>[m("复制")])),_:1}),m("。 ")])),_:1}),d(t,{class:"mx_4 mb_4 shadow radius bg-color"},{default:i((()=>[(f(!0),l(c,null,v(M.value.data,((e,s)=>(f(),l(c,{key:s},[d(t,{class:x(["d_flex items_center text_base p_4 p_relative",0===s?"radius_t border_b":s===M.value.data.length?"radius_b":"border_b"]),"hover-class":"bg-hover","data-code":e.code,onClick:N},{default:i((()=>[d(t,{class:"p_relative"},{default:i((()=>[m(b(e.code)+" ",1),K.value.includes(e.code)?(f(),p(t,{key:0,class:"yang-badge basic count circle warning"},{default:i((()=>[m("已使用")])),_:1})):y("",!0)])),_:2},1024),d(t,{class:"grow"}),d(t,{class:"text-info text_right"},{default:i((()=>[m(b(e.reward.map(((a,e)=>((a,e)=>e?`${e}${M.value.rewardKeyMap[a]||""}`:"")(e,a))).filter((a=>a)).join("，"))+" ",1),e.invalidityTime?(f(),p(t,{key:0,class:"text-info text_xs"},{default:i((()=>[m("失效时间："+b(e.invalidityTime),1)])),_:2},1024)):y("",!0)])),_:2},1024),e.invalidityTime&&a.dayjs(e.invalidityTime)<a.dayjs()?(f(),p(t,{key:0,class:"yang-badge ribbon info"},{default:i((()=>[d(t,{class:"content basic"},{default:i((()=>[m("已失效")])),_:1})])),_:1})):y("",!0),"永久"===e.invalidityTime?(f(),p(t,{key:1,class:"yang-badge ribbon"},{default:i((()=>[d(t,{class:"content basic"},{default:i((()=>[m("永久")])),_:1})])),_:1})):y("",!0),e.isNew?(f(),p(t,{key:2,class:"yang-badge ribbon"},{default:i((()=>[d(t,{class:"content basic"},{default:i((()=>[m("NEW")])),_:1})])),_:1})):y("",!0)])),_:2},1032,["class","data-code"]),!((s-2)%15)&&s<M.value.data.length-15+2?(f(),p(t,{key:0},{default:i((()=>[d(u,{mp_weixin:"adunit-a4678d8d13df3114",mp_qq:"c74f0b30cbf1b82004c9c785b7afc1c0",custom_class:"p_0 m_0"})])),_:1})):y("",!0)],64)))),128))])),_:1}),d(u,{mp_weixin:"adunit-8c89cc4610403c81",mp_qq:"54ea1b2e68ecb1caa66494c8dc68d3b7"}),d(n,{version:""})])),_:1}),d(q)],64)}}},[["__scopeId","data-v-b3a5df15"]]);export{$ as default};
