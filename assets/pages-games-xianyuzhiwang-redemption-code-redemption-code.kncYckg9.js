import{_ as a,r as e,l as t,a as s,e as l,b as d,w as c,F as i,U as r,V as u,s as o,W as n,i as _,o as f,d as m,c as p,t as b,j as y,R as v,f as g,Q as x,h as w,q as h,m as k}from"./index-E3zeGIvY.js";import{a as T,b as j,d as q,c as $}from"./config.B1N9QHK-.js";import{M}from"./my-share-button.CnRRe_oU.js";import"./uni-popup.BHIKmhjJ.js";const K=a({__name:"redemption-code",setup(a){uni.$sharePageTitle=`兑换码-${T}`;const K=`${j}-redemption-code-use`,N=e({updateTime:"",rewardKeyMap:[],data:[]}),V=e(t(K)||[]);r({title:"加载中"}),u({url:`https://runjs.work/transformer/project?id=${q}`,sslVerify:!1,success:a=>{var e,t;const s=null==(t=null==(e=a.data.data)?void 0:e.js)?void 0:t.source;if(s){const a=JSON.parse(s.replace(/\n/g," ").replace(/&quot;/g,'"')),{updateTime:e,rewardKeyMap:t,data:l}=a;N.value.updateTime=e,N.value.rewardKeyMap=t,N.value.data=l.reverse()}else o({title:"资源加载异常",icon:"none"})},fail:()=>{o({title:"资源加载失败",icon:"error"})},complete:()=>{n()}});const W=a=>{const{code:e}=a.currentTarget.dataset;V.value.find((a=>a===e))||V.value.push(e),h(K,V.value),k({data:e,success:()=>{}})};return(a,e)=>{const t=_,r=x,u=s("my-divider"),o=s("my-ad-custom"),n=s("my-bottom-safety-space");return f(),l(i,null,[d(t,{class:"pt_4"},{default:c((()=>[d(t,{class:"mx_4 mb_2 shadow radius bg-color"},{default:c((()=>[d(t,{class:"d_flex px_4 py_4 items_center"},{default:c((()=>[d(t,{class:"font_bold grow"},{default:c((()=>[m("兑换码")])),_:1}),N.value.updateTime?(f(),p(t,{key:0},{default:c((()=>[d(r,{class:"mr_2 text-info"},{default:c((()=>[m("更新时间:")])),_:1}),d(r,{class:"text-error font_bold"},{default:c((()=>[m(b(N.value.updateTime),1)])),_:1})])),_:1})):y("",!0)])),_:1})])),_:1}),d(u,null,{default:c((()=>[N.value.data.length?(f(),p(r,{key:0},{default:c((()=>[m("总计"),d(r,{class:"text-primary"},{default:c((()=>[m(b(N.value.data.length),1)])),_:1}),m("个，新增"),d(r,{class:"text-primary"},{default:c((()=>[m(b(N.value.data.filter((a=>a.isNew)).length),1)])),_:1}),m("个，")])),_:1})):y("",!0),m("点击"),d(r,{class:"text-error"},{default:c((()=>[m("复制")])),_:1}),v($)?(f(),p(r,{key:1},{default:c((()=>[m("并启动"+b(v(T)),1)])),_:1})):y("",!0),m("。 ")])),_:1}),d(t,{class:"mx_4 mb_4 shadow radius bg-color"},{default:c((()=>[(f(!0),l(i,null,g(N.value.data,((e,s)=>(f(),l(i,{key:s},[d(t,{class:w(["d_flex items_center text_base p_4 p_relative",0===s?"radius_t border_b":s===N.value.data.length?"radius_b":"border_b"]),"hover-class":"bg-hover","data-code":e.code,onClick:W},{default:c((()=>[d(t,{class:"p_relative"},{default:c((()=>[m(b(e.code)+" ",1),V.value.includes(e.code)?(f(),p(t,{key:0,class:"yang-badge basic count circle warning"},{default:c((()=>[m("已使用")])),_:1})):y("",!0)])),_:2},1024),d(t,{class:"grow"}),d(t,{class:"text-info text_right"},{default:c((()=>[m(b(e.reward.map(((a,e)=>((a,e)=>e?`${e}${N.value.rewardKeyMap[a]||""}`:"")(e,a))).filter((a=>a)).join("，"))+" ",1),e.invalidityTime?(f(),p(t,{key:0,class:"text-info text_xs"},{default:c((()=>[m("失效时间："+b(e.invalidityTime),1)])),_:2},1024)):y("",!0)])),_:2},1024),e.invalidityTime&&a.dayjs(e.invalidityTime)<a.dayjs()?(f(),p(t,{key:0,class:"yang-badge ribbon info"},{default:c((()=>[d(t,{class:"content basic"},{default:c((()=>[m("已失效")])),_:1})])),_:1})):y("",!0),"永久"===e.invalidityTime?(f(),p(t,{key:1,class:"yang-badge ribbon"},{default:c((()=>[d(t,{class:"content basic"},{default:c((()=>[m("永久")])),_:1})])),_:1})):y("",!0),e.isNew?(f(),p(t,{key:2,class:"yang-badge ribbon"},{default:c((()=>[d(t,{class:"content basic"},{default:c((()=>[m("NEW")])),_:1})])),_:1})):y("",!0)])),_:2},1032,["class","data-code"]),!((s-2)%15)&&s<N.value.data.length-15+2?(f(),p(t,{key:0},{default:c((()=>[d(o,{mp_weixin:"adunit-a4678d8d13df3114",mp_qq:"c74f0b30cbf1b82004c9c785b7afc1c0",custom_class:"p_0 m_0"})])),_:1})):y("",!0)],64)))),128))])),_:1}),d(o,{mp_weixin:"adunit-8c89cc4610403c81",mp_qq:"54ea1b2e68ecb1caa66494c8dc68d3b7"}),d(n,{version:""})])),_:1}),d(M)],64)}}},[["__scopeId","data-v-aad186b5"]]);export{K as default};
