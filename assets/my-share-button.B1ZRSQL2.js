import{_ as e,r as a,aa as s,o as t,e as l,b as o,w as n,d as r,F as i,m as c,ab as u,i as _,u as m}from"./index-aBvzw6X8.js";import{u as p}from"./uni-popup.CBZ2yRjM.js";const d=e({__name:"my-share-button",setup(e){const d=a(null),f=s(),h=f[f.length-1].route,x=`${uni.$sharePageTitle}-${uni.$shareBaseTitle},\n微信内点击：#小程序:Yang昜工具箱\n点击查看更多：${uni.$webBaseUrl}${h}`,b=()=>{navigator.share?c({data:x,success:()=>{u(),d.value.open()}}):navigator.share({title:`${uni.$sharePageTitle}-${uni.$shareBaseTitle}`,text:`${uni.$sharePageTitle}，点击查看更多。`,url:`${uni.$webBaseUrl}${h}`})},y=()=>{window.location.href="weixin://"},g=()=>{const e=["mqq://","mqqapi://","mqqwpa://","tencent://"];let a=0;const s=()=>{a<e.length&&(window.location.href=e[a++],setTimeout(s,1e3))};s()},$=()=>{d.value.close()};return(e,a)=>{const s=_,c=m;return t(),l(i,null,[o(c,{class:"share yang-fab yang-button primary circle",onClick:b},{default:n((()=>[o(s,{class:"my-icon my-icon-share-1 text_xxl"})])),_:1}),o(p,{ref_key:"popupRef",ref:d},{default:n((()=>[o(s,{class:"edit-popup bg-color radius"},{default:n((()=>[o(s,{class:"d_flex px_4 py_3 items_center"},{default:n((()=>[o(s,null,{default:n((()=>[r("内容已复制，点击跳转程序。")])),_:1})])),_:1}),o(s,{class:"d_flex px_4 pt_3 pb_1 items_center border_t"},{default:n((()=>[o(c,{class:"yang-button primary small block","hover-class":"hover",onClick:y},{default:n((()=>[o(s,{class:"my-icon my-icon-logo-wechat-stroke text_xxl mr_2"}),r(" 微信 ")])),_:1}),o(c,{class:"yang-button primary small block","hover-class":"hover",onClick:g},{default:n((()=>[o(s,{class:"my-icon my-icon-logo-qq text_xxl mr_2"}),r(" QQ ")])),_:1})])),_:1}),o(s,{class:"d_flex px_4 pb_3 pt_1 items_center"},{default:n((()=>[o(c,{class:"yang-button outline small block","hover-class":"hover",onClick:$},{default:n((()=>[r("取消")])),_:1})])),_:1}),o(s,{class:"h_safe"})])),_:1})])),_:1},512)],64)}}},[["__scopeId","data-v-4069f128"]]);export{d as M};
