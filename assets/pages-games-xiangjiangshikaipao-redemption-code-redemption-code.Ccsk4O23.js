import{_ as a,r as e,l as s,a as t,c as l,w as d,U as r,V as c,s as u,W as o,i,o as n,b as _,d as f,t as p,j as b,e as m,f as v,F as g,Q as y,h as x,q as w,m as h}from"./index-B_UDXFNQ.js";const k="xiangjiangshikaipao-redemption-code-use",j=a({__name:"redemption-code",setup(a){uni.$sharePageTitle="兑换码-向僵尸开炮";const j=e({updateTime:"",rewardKeyMap:[],data:[]}),T=e(s(k)||[]);r({title:"加载中"}),c({url:"https://runjs.work/transformer/project?id=db6918",sslVerify:!1,success:a=>{var e,s;const t=null==(s=null==(e=a.data.data)?void 0:e.js)?void 0:s.source;if(t){const a=JSON.parse(t.replace(/\n/g," ").replace(/&quot;/g,'"')),{updateTime:e,rewardKeyMap:s,data:l}=a;j.value.updateTime=e,j.value.rewardKeyMap=s,j.value.data=l.reverse()}else u({title:"资源加载异常",icon:"none"})},complete:()=>{o()}});const K=a=>{const{code:e}=a.currentTarget.dataset;T.value.find((a=>a===e))||T.value.push(e),w(k,T.value),h({data:e,success:()=>{}})};return(a,e)=>{const s=i,r=y,c=t("my-divider"),u=t("my-ad-custom"),o=t("my-bottom-safety-space");return n(),l(s,{class:"pt_4"},{default:d((()=>[_(s,{class:"mx_4 mb_4 shadow radius bg-color"},{default:d((()=>[_(s,{class:"d_flex px_4 py_4 items_center"},{default:d((()=>[_(s,{class:"font_bold grow"},{default:d((()=>[f("兑换码")])),_:1}),j.value.updateTime?(n(),l(s,{key:0},{default:d((()=>[_(r,{class:"mr_2 text-info"},{default:d((()=>[f("更新时间:")])),_:1}),_(r,{class:"text-error font_bold"},{default:d((()=>[f(p(j.value.updateTime),1)])),_:1})])),_:1})):b("",!0)])),_:1})])),_:1}),_(c,null,{default:d((()=>[j.value.data.length?(n(),l(r,{key:0},{default:d((()=>[f("总计"),_(r,{class:"text-primary"},{default:d((()=>[f(p(j.value.data.length),1)])),_:1}),f("个，新增"),_(r,{class:"text-primary"},{default:d((()=>[f(p(j.value.data.filter((a=>a.isNew)).length),1)])),_:1}),f("个，")])),_:1})):b("",!0),f("点击"),_(r,{class:"text-error"},{default:d((()=>[f("复制")])),_:1}),f("。 ")])),_:1}),_(s,{class:"mx_4 mb_4 shadow radius bg-color"},{default:d((()=>[(n(!0),m(g,null,v(j.value.data,((a,e)=>(n(),m(g,{key:e},[_(s,{class:x(["d_flex items_center text_base p_4 p_relative",0===e?"radius_t border_b":e===j.value.data.length?"radius_b":"border_b"]),"hover-class":"bg-hover","data-code":a.code,onClick:K},{default:d((()=>[_(s,{class:"p_relative"},{default:d((()=>[f(p(a.code)+" ",1),T.value.includes(a.code)?(n(),l(s,{key:0,class:"yang-badge basic count circle warning"},{default:d((()=>[f("已使用")])),_:1})):b("",!0)])),_:2},1024),_(s,{class:"grow"}),_(s,{class:"text-info text_right"},{default:d((()=>[f(p(a.reward.map(((a,e)=>((a,e)=>e?`${e}${j.value.rewardKeyMap[a]||""}`:"")(e,a))).filter((a=>a)).join("，")),1)])),_:2},1024),a.invalidity?(n(),l(s,{key:0,class:"yang-badge ribbon info"},{default:d((()=>[_(s,{class:"content basic"},{default:d((()=>[f("已失效")])),_:1})])),_:1})):b("",!0),a.forever?(n(),l(s,{key:1,class:"yang-badge ribbon"},{default:d((()=>[_(s,{class:"content basic"},{default:d((()=>[f("永久")])),_:1})])),_:1})):b("",!0),a.isNew?(n(),l(s,{key:2,class:"yang-badge ribbon"},{default:d((()=>[_(s,{class:"content basic"},{default:d((()=>[f("NEW")])),_:1})])),_:1})):b("",!0)])),_:2},1032,["class","data-code"]),!((e-2)%15)&&e<j.value.data.length-15+2?(n(),l(s,{key:0},{default:d((()=>[_(u,{mp_weixin:"adunit-a4678d8d13df3114",custom_class:"p_0 m_0 border_b"})])),_:1})):b("",!0)],64)))),128))])),_:1}),_(u,{mp_weixin:"adunit-8c89cc4610403c81"}),_(o,{version:""})])),_:1})}}},[["__scopeId","data-v-e167b302"]]);export{j as default};
