import{_ as a,r as s,a as t,c as e,w as l,i,o as c,b as o,e as n,f as r,F as d,g as _,h as u,d as p,t as m,n as g}from"./index-B_UDXFNQ.js";const x=a({__name:"xiangjiangshikaipao",setup(a){uni.$sharePageTitle="向僵尸开炮";const x=s({});x.value={logo:"/static/web/xiangjiangshikaipao/icon.png"};const f=[{title:"兑换码",path:"redemption-code",icon:"ticket",hidden:""}],h=a=>{const{path:s}=a.currentTarget.dataset;g({url:`/pages/games/xiangjiangshikaipao/${s}/${s}`,fail:()=>{g({url:"/pages/abnormal/fail/fail"})}})};return(a,s)=>{const g=_,b=i,y=t("my-divider"),v=t("my-ad-custom"),k=t("my-bottom-safety-space");return c(),e(b,{class:"pt_4"},{default:l((()=>[o(b,{class:"d_flex center mb_4"},{default:l((()=>[o(g,{src:x.value.logo,class:"logo"},null,8,["src"])])),_:1}),o(b,{class:"mx_4 mb_4 shadow radius bg-color"},{default:l((()=>[o(b,{class:"d_flex border_t wrap"},{default:l((()=>[(c(),n(d,null,r(f,((a,s)=>o(b,{key:s,class:"col_4 d_flex vertical center py_3 radius","hover-class":"bg-hover","data-path":a.path,onClick:h},{default:l((()=>[o(b,{class:u(`my-icon my-icon-${a.icon} text_size_xxxl text-primary mb_2`)},null,8,["class"]),o(b,{class:"text_xs"},{default:l((()=>[p(m(a.title),1)])),_:2},1024)])),_:2},1032,["data-path"]))),64))])),_:1})])),_:1}),o(y,{content:"本内容仅为个人搬运整理，具体内容以官方为准。"}),o(v,{mp_weixin:"adunit-8c89cc4610403c81"}),o(k,{version:""})])),_:1})}}},[["__scopeId","data-v-40bb30e7"]]);export{x as default};
