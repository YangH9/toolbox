import{_ as a,r as e,l as s,a as t,e as l,b as d,w as r,F as c,U as o,V as u,s as i,W as n,i as _,o as f,d as p,c as m,t as b,j as v,R as y,f as g,Q as x,h as w,q as h,m as k}from"./index-4d8xuY-D.js";import{a as j,b as T,d as q,c as $}from"./config.C4oQfi-x.js";import{M}from"./my-share-button.ByyIO9uH.js";import"./uni-popup.C97e3Hjp.js";const K=a({__name:"redemption-code",setup(a){uni.$sharePageTitle=`兑换码-${j}`;const K=`${T}-redemption-code-use`,N=e({updateTime:"",rewardKeyMap:[],data:[]}),V=e(s(K)||[]);o({title:"加载中"}),u({url:`https://runjs.work/transformer/project?id=${q}`,sslVerify:!1,success:a=>{var e,s;const t=null==(s=null==(e=a.data.data)?void 0:e.js)?void 0:s.source;if(t){const a=JSON.parse(t.replace(/\n/g," ").replace(/&quot;/g,'"')),{updateTime:e,rewardKeyMap:s,data:l}=a;N.value.updateTime=e,N.value.rewardKeyMap=s,N.value.data=l.reverse()}else i({title:"资源加载异常",icon:"none"})},fail:()=>{i({title:"资源加载失败",icon:"error"})},complete:()=>{n()}});const W=a=>{const{code:e}=a.currentTarget.dataset;V.value.find((a=>a===e))||V.value.push(e),h(K,V.value),k({data:e,success:()=>{}})};return(a,e)=>{const s=_,o=x,u=t("my-divider"),i=t("my-ad-custom"),n=t("my-bottom-safety-space");return f(),l(c,null,[d(s,{class:"pt_4"},{default:r((()=>[d(s,{class:"mx_4 mb_2 shadow radius bg-color"},{default:r((()=>[d(s,{class:"d_flex px_4 py_4 items_center"},{default:r((()=>[d(s,{class:"font_bold grow"},{default:r((()=>[p("兑换码")])),_:1}),N.value.updateTime?(f(),m(s,{key:0},{default:r((()=>[d(o,{class:"mr_2 text-info"},{default:r((()=>[p("更新时间:")])),_:1}),d(o,{class:"text-error font_bold"},{default:r((()=>[p(b(N.value.updateTime),1)])),_:1})])),_:1})):v("",!0)])),_:1})])),_:1}),d(u,null,{default:r((()=>[N.value.data.length?(f(),m(o,{key:0},{default:r((()=>[p("总计"),d(o,{class:"text-primary"},{default:r((()=>[p(b(N.value.data.length),1)])),_:1}),p("个，新增"),d(o,{class:"text-primary"},{default:r((()=>[p(b(N.value.data.filter((a=>a.isNew)).length),1)])),_:1}),p("个，")])),_:1})):v("",!0),p("点击"),d(o,{class:"text-error"},{default:r((()=>[p("复制")])),_:1}),y($)?(f(),m(o,{key:1},{default:r((()=>[p("并启动"+b(y(j)),1)])),_:1})):v("",!0),p("。 ")])),_:1}),d(s,{class:"mx_4 mb_4 shadow radius bg-color"},{default:r((()=>[(f(!0),l(c,null,g(N.value.data,((a,e)=>(f(),l(c,{key:e},[d(s,{class:w(["d_flex items_center text_base p_4 p_relative",0===e?"radius_t border_b":e===N.value.data.length?"radius_b":"border_b"]),"hover-class":"bg-hover","data-code":a.code,onClick:W},{default:r((()=>[d(s,{class:"p_relative"},{default:r((()=>[p(b(a.code)+" ",1),V.value.includes(a.code)?(f(),m(s,{key:0,class:"yang-badge basic count circle warning"},{default:r((()=>[p("已使用")])),_:1})):v("",!0)])),_:2},1024),d(s,{class:"grow"}),d(s,{class:"text-info text_right"},{default:r((()=>[p(b(a.reward.map(((a,e)=>((a,e)=>e?`${e}${N.value.rewardKeyMap[a]||""}`:"")(e,a))).filter((a=>a)).join("，")),1)])),_:2},1024),a.invalidity?(f(),m(s,{key:0,class:"yang-badge ribbon info"},{default:r((()=>[d(s,{class:"content basic"},{default:r((()=>[p("已失效")])),_:1})])),_:1})):v("",!0),a.forever?(f(),m(s,{key:1,class:"yang-badge ribbon"},{default:r((()=>[d(s,{class:"content basic"},{default:r((()=>[p("永久")])),_:1})])),_:1})):v("",!0),a.isNew?(f(),m(s,{key:2,class:"yang-badge ribbon"},{default:r((()=>[d(s,{class:"content basic"},{default:r((()=>[p("NEW")])),_:1})])),_:1})):v("",!0)])),_:2},1032,["class","data-code"]),!((e-2)%15)&&e<N.value.data.length-15+2?(f(),m(s,{key:0},{default:r((()=>[d(i,{mp_weixin:"adunit-a4678d8d13df3114",mp_qq:"c74f0b30cbf1b82004c9c785b7afc1c0",custom_class:"p_0 m_0"})])),_:1})):v("",!0)],64)))),128))])),_:1}),d(i,{mp_weixin:"adunit-8c89cc4610403c81",mp_qq:"54ea1b2e68ecb1caa66494c8dc68d3b7"}),d(n,{version:""})])),_:1}),d(M)],64)}}},[["__scopeId","data-v-04240b78"]]);export{K as default};
