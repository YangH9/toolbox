import{_ as a,r as e,l as s,a as t,c as l,b as d,w as r,F as c,B as u,C as o,s as n,D as i,i as _,o as f,d as p,g as b,t as v,j as m,e as g,v as y,h as x,q as w,m as h}from"./index-BjzZs8Xf.js";const k="xianyuzhiwang-redemption-code-use",T=a({__name:"redemption-code",setup(a){uni.$sharePageTitle="兑换码-咸鱼之王";const T=e({updateTime:"",rewardKeyMap:[],data:[]}),j=e(s(k)||[]);u({title:"加载中"}),o({url:"https://runjs.work/transformer/project?id=e4cae7",sslVerify:!1,success:a=>{var e,s;const t=null==(s=null==(e=a.data.data)?void 0:e.js)?void 0:s.source;if(t){const a=JSON.parse(t.replace(/\n/g," ").replace(/&quot;/g,'"')),{updateTime:e,rewardKeyMap:s,data:l}=a;T.value.updateTime=e,T.value.rewardKeyMap=s,T.value.data=l.reverse()}else n({title:"资源加载异常",icon:"none"})},complete:()=>{i()}});const K=a=>{const{code:e}=a.currentTarget.dataset;j.value.find((a=>a===e))||j.value.push(e),w(k,j.value),h({data:e,success:()=>{}})};return(a,e)=>{const s=_,u=y,o=t("my-divider"),n=t("my-bottom-safety-space");return f(),l(c,null,[d(s,{class:"pt_4"},{default:r((()=>[d(s,{class:"mx_4 mb_4 shadow radius bg-color"},{default:r((()=>[d(s,{class:"d_flex px_4 py_4 items_center"},{default:r((()=>[d(s,{class:"font_bold grow"},{default:r((()=>[p("兑换码")])),_:1}),T.value.updateTime?(f(),b(s,{key:0},{default:r((()=>[d(u,{class:"mr_2 text-info"},{default:r((()=>[p("更新时间:")])),_:1}),d(u,{class:"text-error font_bold"},{default:r((()=>[p(v(T.value.updateTime),1)])),_:1})])),_:1})):m("",!0)])),_:1})])),_:1}),d(o,null,{default:r((()=>[T.value.data.length?(f(),b(u,{key:0},{default:r((()=>[p("总计"),d(u,{class:"text-primary"},{default:r((()=>[p(v(T.value.data.length),1)])),_:1}),p("个，新增"),d(u,{class:"text-primary"},{default:r((()=>[p(v(T.value.data.filter((a=>a.isNew)).length),1)])),_:1}),p("个，")])),_:1})):m("",!0),p("点击"),d(u,{class:"text-error"},{default:r((()=>[p("复制")])),_:1}),p("。 ")])),_:1}),d(s,{class:"mx_4 mb_4 shadow radius bg-color"},{default:r((()=>[(f(!0),l(c,null,g(T.value.data,((a,e)=>(f(),b(s,{key:e,class:x(["d_flex items_center text_base p_4 p_relative",0===e?"radius_t border_b":e===T.value.data.length?"radius_b":"border_b"]),"hover-class":"bg-hover","data-code":a.code,onClick:K},{default:r((()=>[d(s,{class:"p_relative"},{default:r((()=>[p(v(a.code)+" ",1),j.value.includes(a.code)?(f(),b(s,{key:0,class:"yang-badge basic count circle warning"},{default:r((()=>[p("已使用")])),_:1})):m("",!0)])),_:2},1024),d(s,{class:"grow"}),d(s,{class:"text-info text_right"},{default:r((()=>[p(v(a.reward.map(((a,e)=>((a,e)=>e?`${e}${T.value.rewardKeyMap[a]||""}`:"")(e,a))).filter((a=>a)).join("，")),1)])),_:2},1024),a.invalidity?(f(),b(s,{key:0,class:"yang-badge ribbon info"},{default:r((()=>[d(s,{class:"content basic"},{default:r((()=>[p("已失效")])),_:1})])),_:1})):m("",!0),a.forever?(f(),b(s,{key:1,class:"yang-badge ribbon"},{default:r((()=>[d(s,{class:"content basic"},{default:r((()=>[p("永久")])),_:1})])),_:1})):m("",!0),a.isNew?(f(),b(s,{key:2,class:"yang-badge ribbon"},{default:r((()=>[d(s,{class:"content basic"},{default:r((()=>[p("NEW")])),_:1})])),_:1})):m("",!0)])),_:2},1032,["class","data-code"])))),128))])),_:1})])),_:1}),d(n,{version:""})],64)}}},[["__scopeId","data-v-25ae7c0a"]]);export{T as default};
