import{_ as a,r as e,l as t,a as s,c as l,b as d,w as r,F as c,B as u,C as i,s as o,D as n,n as _,i as f,o as p,d as b,g as m,t as g,j as v,e as y,v as x,h,q as w,m as k}from"./index-BjzZs8Xf.js";const j="leitingzhanji-redemption-code-use",T=a({__name:"redemption-code",setup(a){uni.$sharePageTitle="兑换码-雷霆战机";const T=e({updateTime:"",rewardKeyMap:[],IDList:[],data:[]}),D=e(t(j)||[]);u({title:"加载中"}),i({url:"https://runjs.work/transformer/project?id=e73c35",sslVerify:!1,success:a=>{var e,t;const s=null==(t=null==(e=a.data.data)?void 0:e.js)?void 0:t.source;if(s){const a=JSON.parse(s.replace(/\n/g," ").replace(/&quot;/g,'"')),{updateTime:e,rewardKeyMap:t,data:l,IDList:d}=a;T.value.updateTime=e,T.value.rewardKeyMap=t,T.value.IDList=d,T.value.data=l.reverse()}else o({title:"资源加载异常",icon:"none"})},complete:()=>{n()}});const I=a=>{const{code:e}=a.currentTarget.dataset;D.value.find((a=>a===e))||D.value.push(e),w(j,D.value),k({data:e,success:()=>{}})},K=()=>{_({url:"/pages/games/leitingzhanji/redemption-code/update/update"})};return(a,e)=>{const t=f,u=x,i=s("my-divider"),o=s("my-bottom-safety-space");return p(),l(c,null,[d(t,{class:"pt_4"},{default:r((()=>[d(t,{class:"mx_4 mb_4 shadow radius bg-color"},{default:r((()=>[d(t,{class:"d_flex px_4 py_4 items_center"},{default:r((()=>[d(t,{class:"font_bold grow"},{default:r((()=>[b("兑换码")])),_:1}),T.value.updateTime?(p(),m(t,{key:0},{default:r((()=>[d(u,{class:"mr_2 text-info"},{default:r((()=>[b("更新时间:")])),_:1}),d(u,{class:"text-error font_bold"},{default:r((()=>[b(g(T.value.updateTime),1)])),_:1})])),_:1})):v("",!0)])),_:1})])),_:1}),d(i,null,{default:r((()=>[T.value.data.length?(p(),m(u,{key:0},{default:r((()=>[b("总计"),d(u,{class:"text-primary"},{default:r((()=>[b(g(T.value.data.length),1)])),_:1}),b("个，新增"),d(u,{class:"text-primary"},{default:r((()=>[b(g(T.value.data.filter((a=>a.isNew)).length),1)])),_:1}),b("个，")])),_:1})):v("",!0),b("点击"),d(u,{class:"text-error"},{default:r((()=>[b("复制")])),_:1}),b("。 "),d(t,{class:"text-error"},{default:r((()=>[b("底部有永久兑换码。")])),_:1})])),_:1}),d(t,{class:"mx_4 mb_4 shadow radius bg-color"},{default:r((()=>[(p(!0),l(c,null,y(T.value.data,((a,e)=>(p(),m(t,{key:e,class:h(["d_flex items_center text_base p_4 p_relative",0===e?"radius_t border_b":e===T.value.data.length?"radius_b":"border_b"]),"hover-class":"bg-hover","data-code":a.code,onClick:I},{default:r((()=>[d(t,{class:"p_relative"},{default:r((()=>[b(g(a.code)+" ",1),D.value.includes(a.code)?(p(),m(t,{key:0,class:"yang-badge basic count circle warning"},{default:r((()=>[b("已使用")])),_:1})):v("",!0)])),_:2},1024),d(t,{class:"grow"}),d(t,{class:"text-info text_right"},{default:r((()=>[b(g(a.reward.map(((a,e)=>((a,e)=>e?`${e}${T.value.rewardKeyMap[a]||""}`:"")(e,a))).filter((a=>a)).join("，")),1)])),_:2},1024),a.invalidity?(p(),m(t,{key:0,class:"yang-badge ribbon info"},{default:r((()=>[d(t,{class:"content basic"},{default:r((()=>[b("已失效")])),_:1})])),_:1})):v("",!0),a.forever?(p(),m(t,{key:1,class:"yang-badge ribbon"},{default:r((()=>[d(t,{class:"content basic"},{default:r((()=>[b("永久")])),_:1})])),_:1})):v("",!0),a.isNew?(p(),m(t,{key:2,class:"yang-badge ribbon"},{default:r((()=>[d(t,{class:"content basic"},{default:r((()=>[b("NEW")])),_:1})])),_:1})):v("",!0)])),_:2},1032,["class","data-code"])))),128))])),_:1})])),_:1}),d(t,{class:"edit yang-fab yang-button primary circle",onClick:K},{default:r((()=>[d(t,{class:"my-icon my-icon-edit text_xxl"})])),_:1}),d(o,{version:""})],64)}}},[["__scopeId","data-v-a60c5d56"]]);export{T as default};
