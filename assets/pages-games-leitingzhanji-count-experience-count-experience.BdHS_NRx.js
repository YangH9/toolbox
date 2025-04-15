import{r as e,c as t,w as l,i as a,a as i,o as n,b as c,d as r,F as s,g as o,n as u,f,t as p,a7 as x,a8 as d}from"./index-CsM9rjax.js";import{c as y}from"./data-all.DG4ihSFp.js";import{a as _}from"./config.Dny4K3GL.js";const b={__name:"count-experience",setup(b){uni.$sharePageTitle=`经验计算-${_}`;const k=[{title:"蓝色 30~45",key:"blue_30"},{title:"蓝色 0~45",key:"blue"},{title:"绿色 25~30",key:"green_25"},{title:"绿色 0~30",key:"green"},{title:"白色 0~25",key:"white"}],m=e(k[0].key),v=e([{title:"蓝色 30~45级",experience:105180},{title:"蓝色 0~45级",experience:164340},{title:"绿色 25~30级",experience:21360},{title:"绿色 0~30级",experience:59160},{title:"白色 0~25级",experience:37800}]),h=e([]);y.forEach((e=>{"magicCube"===e.key?e.children.forEach((t=>{h.value.push({title:t.label,key:`${e.key}-${t.value}`,quality:t.quality,experience:t.exp})})):"wreckage"===e.key&&e.children.forEach((t=>{t.level.forEach((l=>{h.value.push({title:t.label.replace("{level}",`Lv${l.value}`),key:`${e.key}-${t.value}`,quality:t.quality,level:l.value,experience:l.exp,access:[l.ordinary,l.hero]})}))}))}));(()=>{function e(e,t){const l=e.filter((e=>e.experience>0)).sort(((e,t)=>t.experience/(t.quality+1)-e.experience/(e.quality+1)));let a=1/0,i=null;const n=[{index:0,currentExp:0,used:new Array(l.length).fill(0),overflow:1/0}];for(;n.length>0;){const{index:e,currentExp:c,used:r,overflow:s}=n.pop();if(c>=t+a)continue;if(c>=t){const e=c-t;if(e<a&&(a=e,i=[...r],0===a))break;continue}if(e>=l.length)continue;const o=l[e];for(let l=Math.ceil((t-c)/o.experience)+1;l>=0;l--){const i=c+l*o.experience,s=i-t;if(s>=0&&s>=a)continue;const u=[...r];u[e]=l,n.push({index:e+1,currentExp:i,used:u,overflow:s})}}if(!i)return null;const c={combination:[],totalExperience:t+a,overflow:a};return i.forEach(((e,t)=>{e>0&&c.combination.push({key:l[t].key,title:l[t].title,quality:l[t].quality,count:e,experience:l[t].experience})})),c}v.value.forEach((t=>{t.materials=[e(h.value,t.experience)]}))})();return(e,y)=>{const _=a,b=i("my-divider"),h=i("my-ad-custom"),g=i("my-bottom-safety-space");return n(),t(_,{class:""},{default:l((()=>[c(_,{class:"yang-nav-tabs wrapper sticky shadow mb_4"},{default:l((()=>[(n(),r(s,null,o(k,((e,t)=>c(_,{key:t,class:u(["yang-tabs__item",m.value===e.key?"active":""]),onClick:e=>(e=>{m.value=k[e].key,x().selectAll(".floor_box").boundingClientRect((t=>{if(t&&t[e]){const l=t.reduce(((t,l,a)=>a<e?t+l.height:t),0);d({scrollTop:l})}})).exec()})(t)},{default:l((()=>[f(p(e.title),1)])),_:2},1032,["class","onClick"]))),64))])),_:1}),c(b,{content:"部分常用装备升级所需最佳经验搭配。"}),(n(!0),r(s,null,o(v.value,((e,a)=>(n(),t(_,{key:a,class:"floor_box pb_4"},{default:l((()=>[c(_,{class:"mx_4 shadow radius bg-color py_2"},{default:l((()=>[c(_,{class:"d_flex items_center px_4 py_2 mb_1 content_between border_b"},{default:l((()=>[c(_,{class:"font_bold"},{default:l((()=>[f(p(e.title),1)])),_:2},1024),c(_,{class:"text_xs text-info"},{default:l((()=>[f("经验消耗："+p(e.experience),1)])),_:2},1024)])),_:2},1024),(n(!0),r(s,null,o(e.materials,((e,a)=>(n(),t(_,{key:a,class:"d_flex vertical px_4"},{default:l((()=>[c(_,{class:""},{default:l((()=>[f("溢出经验："+p(e.overflow),1)])),_:2},1024),c(_,{class:"d_flex wrap"},{default:l((()=>[(n(!0),r(s,null,o(e.combination,((e,a)=>(n(),t(_,{key:a},{default:l((()=>[f(p(e.title)+"("+p(e.experience)+") * "+p(e.count)+"、",1)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1024)))),128)),c(h,{mp_weixin:"adunit-8c89cc4610403c81",mp_qq:"54ea1b2e68ecb1caa66494c8dc68d3b7"}),c(g,{version:""})])),_:1})}}};export{b as default};
