import{_ as a,r as e,l as t,a as s,e as l,b as d,w as r,F as o,U as c,V as u,s as i,W as n,i as _,o as f,d as p,c as m,t as b,j as v,f as y,Q as g,h as x,q as w,m as h}from"./index-auO82zA0.js";import{a as k,b as j,c as T}from"./config.CQQo8NVQ.js";import{M as $}from"./my-share-button.DRvFUg68.js";import"./uni-popup.CGQmyLcT.js";const M=a({__name:"redemption-code",setup(a){uni.$sharePageTitle=`兑换码-${k}`;const M=`${j}-redemption-code-use`,K=e({updateTime:"",rewardKeyMap:[],data:[]}),N=e(t(M)||[]);c({title:"加载中"}),u({url:`https://runjs.work/transformer/project?id=${T}`,sslVerify:!1,success:a=>{var e,t;const s=null==(t=null==(e=a.data.data)?void 0:e.js)?void 0:t.source;if(s){const a=JSON.parse(s.replace(/\n/g," ").replace(/&quot;/g,'"')),{updateTime:e,rewardKeyMap:t,data:l}=a;K.value.updateTime=e,K.value.rewardKeyMap=t,K.value.data=l.reverse()}else i({title:"资源加载异常",icon:"none"})},fail:()=>{i({title:"资源加载失败",icon:"error"})},complete:()=>{n()}});const q=a=>{const{code:e}=a.currentTarget.dataset;N.value.find((a=>a===e))||N.value.push(e),w(M,N.value),h({data:e})};return(a,e)=>{const t=_,c=g,u=s("my-divider"),i=s("my-ad-custom"),n=s("my-bottom-safety-space");return f(),l(o,null,[d(t,{class:"pt_4"},{default:r((()=>[d(t,{class:"mx_4 mb_2 shadow radius bg-color"},{default:r((()=>[d(t,{class:"d_flex px_4 py_4 items_center"},{default:r((()=>[d(t,{class:"font_bold grow"},{default:r((()=>[p("兑换码")])),_:1}),K.value.updateTime?(f(),m(t,{key:0},{default:r((()=>[d(c,{class:"mr_2 text-info"},{default:r((()=>[p("更新时间:")])),_:1}),d(c,{class:"text-error font_bold"},{default:r((()=>[p(b(K.value.updateTime),1)])),_:1})])),_:1})):v("",!0)])),_:1})])),_:1}),d(u,null,{default:r((()=>[K.value.data.length?(f(),m(c,{key:0},{default:r((()=>[p("总计"),d(c,{class:"text-primary"},{default:r((()=>[p(b(K.value.data.length),1)])),_:1}),p("个，新增"),d(c,{class:"text-primary"},{default:r((()=>[p(b(K.value.data.filter((a=>a.isNew)).length),1)])),_:1}),p("个，")])),_:1})):v("",!0),p("点击"),d(c,{class:"text-error"},{default:r((()=>[p("复制")])),_:1}),p("。 ")])),_:1}),d(t,{class:"mx_4 mb_4 shadow radius bg-color"},{default:r((()=>[(f(!0),l(o,null,y(K.value.data,((a,e)=>(f(),l(o,{key:e},[d(t,{class:x(["d_flex items_center text_base p_4 p_relative",0===e?"radius_t border_b":e===K.value.data.length?"radius_b":"border_b"]),"hover-class":"bg-hover","data-code":a.code,onClick:q},{default:r((()=>[d(t,{class:"p_relative"},{default:r((()=>[p(b(a.code)+" ",1),N.value.includes(a.code)?(f(),m(t,{key:0,class:"yang-badge basic count circle warning"},{default:r((()=>[p("已使用")])),_:1})):v("",!0)])),_:2},1024),d(t,{class:"grow"}),d(t,{class:"text-info text_right"},{default:r((()=>[p(b(a.reward.map(((a,e)=>((a,e)=>e?`${e}${K.value.rewardKeyMap[a]||""}`:"")(e,a))).filter((a=>a)).join("，")),1)])),_:2},1024),a.invalidity?(f(),m(t,{key:0,class:"yang-badge ribbon info"},{default:r((()=>[d(t,{class:"content basic"},{default:r((()=>[p("已失效")])),_:1})])),_:1})):v("",!0),a.forever?(f(),m(t,{key:1,class:"yang-badge ribbon"},{default:r((()=>[d(t,{class:"content basic"},{default:r((()=>[p("永久")])),_:1})])),_:1})):v("",!0),a.isNew?(f(),m(t,{key:2,class:"yang-badge ribbon"},{default:r((()=>[d(t,{class:"content basic"},{default:r((()=>[p("NEW")])),_:1})])),_:1})):v("",!0)])),_:2},1032,["class","data-code"]),!((e-2)%15)&&e<K.value.data.length-15+2?(f(),m(t,{key:0},{default:r((()=>[d(i,{mp_weixin:"adunit-a4678d8d13df3114",custom_class:"p_0 m_0"})])),_:1})):v("",!0)],64)))),128))])),_:1}),d(i,{mp_weixin:"adunit-8c89cc4610403c81"}),d(n,{version:""})])),_:1}),d($)],64)}}},[["__scopeId","data-v-0e2d662f"]]);export{M as default};
