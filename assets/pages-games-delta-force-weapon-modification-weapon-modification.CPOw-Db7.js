import{_ as a,r as e,l as s,a as t,c as l,w as d,U as r,V as c,s as o,W as u,i,o as n,b as _,d as f,t as p,j as m,e as b,f as v,F as g,Q as y,h as w,q as x,m as h}from"./index-DG7GS2BU.js";import{a as k,b as j,c as T}from"./config.BoPkXGcf.js";const $=a({__name:"weapon-modification",setup(a){uni.$sharePageTitle=`兑换码-${k}`;const $=`${j}-redemption-code-use`,K=e({updateTime:"",rewardKeyMap:[],data:[]}),M=e(s($)||[]);r({title:"加载中"}),c({url:`https://runjs.work/transformer/project?id=${T}`,sslVerify:!1,success:a=>{var e,s;const t=null==(s=null==(e=a.data.data)?void 0:e.js)?void 0:s.source;if(t){const a=JSON.parse(t.replace(/\n/g," ").replace(/&quot;/g,'"')),{updateTime:e,rewardKeyMap:s,data:l}=a;K.value.updateTime=e,K.value.rewardKeyMap=s,K.value.data=l.reverse()}else o({title:"资源加载异常",icon:"none"})},complete:()=>{u()}});const N=a=>{const{code:e}=a.currentTarget.dataset;M.value.find((a=>a===e))||M.value.push(e),x($,M.value),h({data:e})};return(a,e)=>{const s=i,r=y,c=t("my-divider"),o=t("my-ad-custom"),u=t("my-bottom-safety-space");return n(),l(s,{class:"pt_4"},{default:d((()=>[_(s,{class:"mx_4 mb_2 shadow radius bg-color"},{default:d((()=>[_(s,{class:"d_flex px_4 py_4 items_center"},{default:d((()=>[_(s,{class:"font_bold grow"},{default:d((()=>[f("武器改装码")])),_:1}),K.value.updateTime?(n(),l(s,{key:0},{default:d((()=>[_(r,{class:"mr_2 text-info"},{default:d((()=>[f("更新时间:")])),_:1}),_(r,{class:"text-error font_bold"},{default:d((()=>[f(p(K.value.updateTime),1)])),_:1})])),_:1})):m("",!0)])),_:1})])),_:1}),_(c,null,{default:d((()=>[K.value.data.length?(n(),l(r,{key:0},{default:d((()=>[f("总计"),_(r,{class:"text-primary"},{default:d((()=>[f(p(K.value.data.length),1)])),_:1}),f("个，新增"),_(r,{class:"text-primary"},{default:d((()=>[f(p(K.value.data.filter((a=>a.isNew)).length),1)])),_:1}),f("个，")])),_:1})):m("",!0),f("点击"),_(r,{class:"text-error"},{default:d((()=>[f("复制")])),_:1}),f("。 ")])),_:1}),_(s,{class:"mx_4 mb_4 shadow radius bg-color"},{default:d((()=>[(n(!0),b(g,null,v(K.value.data,((a,e)=>(n(),b(g,{key:e},[_(s,{class:w(["d_flex items_center text_base p_4 p_relative",0===e?"radius_t border_b":e===K.value.data.length?"radius_b":"border_b"]),"hover-class":"bg-hover","data-code":a.code,onClick:N},{default:d((()=>[_(s,{class:"p_relative"},{default:d((()=>[f(p(a.code)+" ",1),M.value.includes(a.code)?(n(),l(s,{key:0,class:"yang-badge basic count circle warning"},{default:d((()=>[f("已使用")])),_:1})):m("",!0)])),_:2},1024),_(s,{class:"grow"}),_(s,{class:"text-info text_right"},{default:d((()=>[f(p(a.reward.map(((a,e)=>((a,e)=>e?`${e}${K.value.rewardKeyMap[a]||""}`:"")(e,a))).filter((a=>a)).join("，")),1)])),_:2},1024),a.invalidity?(n(),l(s,{key:0,class:"yang-badge ribbon info"},{default:d((()=>[_(s,{class:"content basic"},{default:d((()=>[f("已失效")])),_:1})])),_:1})):m("",!0),a.forever?(n(),l(s,{key:1,class:"yang-badge ribbon"},{default:d((()=>[_(s,{class:"content basic"},{default:d((()=>[f("永久")])),_:1})])),_:1})):m("",!0),a.isNew?(n(),l(s,{key:2,class:"yang-badge ribbon"},{default:d((()=>[_(s,{class:"content basic"},{default:d((()=>[f("NEW")])),_:1})])),_:1})):m("",!0)])),_:2},1032,["class","data-code"]),!((e-2)%15)&&e<K.value.data.length-15+2?(n(),l(s,{key:0},{default:d((()=>[_(o,{mp_weixin:"adunit-a4678d8d13df3114",custom_class:"p_0 m_0"})])),_:1})):m("",!0)],64)))),128))])),_:1}),_(o,{mp_weixin:"adunit-8c89cc4610403c81"}),_(u,{version:""})])),_:1})}}},[["__scopeId","data-v-72224716"]]);export{$ as default};
