import{r as a,a as e,c as s,b as l,w as t,F as o,i as r,o as c,n,d as i,t as m,e as _,g as u,h as d}from"./index-ldp4mEf7.js";import{b as x}from"./games.DWcvoW1S.js";const f={__name:"games",setup(f){uni.$sharePageTitle="游戏工具列表";const p=a(x),g=a=>{let{item:{name:e,path:s=""}}=a.currentTarget.dataset,{name:l}=p.value;s||(e=e.replace(/^[A-Z]/,(a=>`${a}`.toLocaleLowerCase())),e=e.replace(/[A-Z]/g,(a=>`-${a.toLowerCase()}`)),l=l.replace(/^[A-Z]/,(a=>`${a}`.toLocaleLowerCase())),l=l.replace(/[A-Z]/g,(a=>`-${a.toLowerCase()}`)),s=`/pages/${l}/${e}/${e}`),d({url:s,fail:()=>{d({url:"/pages/abnormal/fail/fail"})}})};return(a,d)=>{const x=r,f=e("my-bottom-safety-space");return c(),s(o,null,[l(x,{class:"pt_4"},{default:t((()=>[l(x,{class:"mx_4 mb_4 shadow radius bg-color"},{default:t((()=>[l(x,{class:"d_flex px_4 items_center"},{default:t((()=>[l(x,{class:n(`my-icon my-icon-${p.value.icon} text_xxxl text-primary mr_2`)},null,8,["class"]),l(x,{class:"py_4 font_bold"},{default:t((()=>[i(m(p.value.label),1)])),_:1})])),_:1})])),_:1}),l(x,{class:"mx_4 mb_4 shadow radius bg-color"},{default:t((()=>[(c(!0),s(o,null,_(p.value.children,((a,e)=>(c(),u(x,{key:e,class:"d_flex px_4 items_center","hover-class":"bg-hover","data-item":a,onClick:g},{default:t((()=>[l(x,{class:n(`my-icon my-icon-${a.icon} text_xxxl text-primary mr_2`)},null,8,["class"]),l(x,{class:"grow"},{default:t((()=>[i(m(a.label),1)])),_:2},1024),l(x,{class:"my-icon my-icon-chevron-right text-info"})])),_:2},1032,["data-item"])))),128))])),_:1})])),_:1}),l(f,{version:!0})],64)}}};export{f as default};
