import{_ as a,r as e,l as s,a as t,e as l,b as d,w as r,F as c,U as o,V as u,s as i,W as n,i as _,o as f,d as m,c as p,t as b,j as v,R as y,f as g,Q as x,h as w,q as h,m as k}from"./index-DZLkt-uP.js";import{a as j,b as T,d as $,c as M}from"./config.Cklr0nrL.js";import{M as K}from"./my-share-button.B2EMHid9.js";const N=a({__name:"redemption-code",setup(a){uni.$sharePageTitle=`兑换码-${j}`;const N=`${T}-redemption-code-use`,q=e({updateTime:"",rewardKeyMap:[],data:[]}),V=e(s(N)||[]);o({title:"加载中"}),u({url:`https://runjs.work/transformer/project?id=${$}`,sslVerify:!1,success:a=>{var e,s;const t=null==(s=null==(e=a.data.data)?void 0:e.js)?void 0:s.source;if(t){const a=JSON.parse(t.replace(/\n/g," ").replace(/&quot;/g,'"')),{updateTime:e,rewardKeyMap:s,data:l}=a;q.value.updateTime=e,q.value.rewardKeyMap=s,q.value.data=l.reverse()}else i({title:"资源加载异常",icon:"none"})},fail:()=>{i({title:"资源加载失败",icon:"error"})},complete:()=>{n()}});const W=a=>{const{code:e}=a.currentTarget.dataset;V.value.find((a=>a===e))||V.value.push(e),h(N,V.value),k({data:e,success:()=>{}})};return(a,e)=>{const s=_,o=x,u=t("my-divider"),i=t("my-ad-custom"),n=t("my-bottom-safety-space");return f(),l(c,null,[d(s,{class:"pt_4"},{default:r((()=>[d(s,{class:"mx_4 mb_2 shadow radius bg-color"},{default:r((()=>[d(s,{class:"d_flex px_4 py_4 items_center"},{default:r((()=>[d(s,{class:"font_bold grow"},{default:r((()=>[m("兑换码")])),_:1}),q.value.updateTime?(f(),p(s,{key:0},{default:r((()=>[d(o,{class:"mr_2 text-info"},{default:r((()=>[m("更新时间:")])),_:1}),d(o,{class:"text-error font_bold"},{default:r((()=>[m(b(q.value.updateTime),1)])),_:1})])),_:1})):v("",!0)])),_:1})])),_:1}),d(u,null,{default:r((()=>[q.value.data.length?(f(),p(o,{key:0},{default:r((()=>[m("总计"),d(o,{class:"text-primary"},{default:r((()=>[m(b(q.value.data.length),1)])),_:1}),m("个，新增"),d(o,{class:"text-primary"},{default:r((()=>[m(b(q.value.data.filter((a=>a.isNew)).length),1)])),_:1}),m("个，")])),_:1})):v("",!0),m("点击"),d(o,{class:"text-error"},{default:r((()=>[m("复制")])),_:1}),y(M)?(f(),p(o,{key:1},{default:r((()=>[m("并启动"+b(y(j)),1)])),_:1})):v("",!0),m("。 ")])),_:1}),d(s,{class:"mx_4 mb_4 shadow radius bg-color"},{default:r((()=>[(f(!0),l(c,null,g(q.value.data,((a,e)=>(f(),l(c,{key:e},[d(s,{class:w(["d_flex items_center text_base p_4 p_relative",0===e?"radius_t border_b":e===q.value.data.length?"radius_b":"border_b"]),"hover-class":"bg-hover","data-code":a.code,onClick:W},{default:r((()=>[d(s,{class:"p_relative"},{default:r((()=>[m(b(a.code)+" ",1),V.value.includes(a.code)?(f(),p(s,{key:0,class:"yang-badge basic count circle warning"},{default:r((()=>[m("已使用")])),_:1})):v("",!0)])),_:2},1024),d(s,{class:"grow"}),d(s,{class:"text-info text_right"},{default:r((()=>[m(b(a.reward.map(((a,e)=>((a,e)=>e?`${e}${q.value.rewardKeyMap[a]||""}`:"")(e,a))).filter((a=>a)).join("，")),1)])),_:2},1024),a.invalidity?(f(),p(s,{key:0,class:"yang-badge ribbon info"},{default:r((()=>[d(s,{class:"content basic"},{default:r((()=>[m("已失效")])),_:1})])),_:1})):v("",!0),a.forever?(f(),p(s,{key:1,class:"yang-badge ribbon"},{default:r((()=>[d(s,{class:"content basic"},{default:r((()=>[m("永久")])),_:1})])),_:1})):v("",!0),a.isNew?(f(),p(s,{key:2,class:"yang-badge ribbon"},{default:r((()=>[d(s,{class:"content basic"},{default:r((()=>[m("NEW")])),_:1})])),_:1})):v("",!0)])),_:2},1032,["class","data-code"]),!((e-2)%15)&&e<q.value.data.length-15+2?(f(),p(s,{key:0},{default:r((()=>[d(i,{mp_weixin:"adunit-a4678d8d13df3114",custom_class:"p_0 m_0"})])),_:1})):v("",!0)],64)))),128))])),_:1}),d(i,{mp_weixin:"adunit-8c89cc4610403c81"}),d(n,{version:""})])),_:1}),d(K)],64)}}},[["__scopeId","data-v-93f02b6b"]]);export{N as default};
