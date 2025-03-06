import{_ as l,r as e,a,c as t,b as n,w as o,F as s,l as c,m as i,p as u,i as r,o as m,d,e as _,q as p,I as f,g as y,t as v,h as x,j as g,u as b}from"./index-5Yaluhhy.js";const h="fruit-vegetable-title",k="fruit-vegetable-data",V=l({__name:"fruit-vegetable",setup(l){uni.$sharePageTitle="果蔬价格文案";const V={0:"0️⃣",1:"1️⃣",2:"2️⃣",3:"3️⃣",4:"4️⃣",5:"5️⃣",6:"6️⃣",7:"7️⃣",8:"8️⃣",9:"9️⃣",".":"."},C={0:"",1:"一",2:"两",3:"三",4:"四",5:"五",6:"六",7:"七",8:"八",9:"九",10:"十"},w={name:"",price:"1",count:"1",unit:"斤"},U=e("[烟花]今日水果、蔬菜价格[烟花]"),I=e([JSON.parse(JSON.stringify(w))]);(()=>{const l=c(h);l&&(U.value=l);const e=c(k);e&&(e.forEach((l=>{l.unitLabel&&(l.unit=l.unitLabel,delete l.unitLabel),l.num&&(l.count=l.num,delete l.num)})),I.value=e)})();const $=()=>{p(h,U.value)},j=()=>{p(k,I.value)},J=(l,e)=>{"title"===l?(U.value="",$()):(I.value[e][l]="",j())},N=()=>{const l=`${U.value}\n${I.value.map((l=>`[烟花]${l.name} ${l.price.split("").map((l=>V[l])).join("")}元 ${("斤"===l.unit?C[l.count]:l.count.split("").map((l=>V[l])).join(""))||l.count}${l.unit}`)).join("\n")}`;i({data:l}),u({title:"文案预览",content:l,confirmText:uni.exitMiniProgram?"关闭程序":"确认",success:l=>{l.confirm&&uni.exitMiniProgram&&uni.exitMiniProgram()}})};return(l,e)=>{const c=r,i=f,p=b,h=a("my-bottom-safety-space");return m(),t(s,null,[n(c,{class:"pt_4"},{default:o((()=>[n(c,{class:"mx_4 mb_4 shadow radius bg-color"},{default:o((()=>[n(c,{class:"d_flex px_4 py_3 items_center"},{default:o((()=>[n(c,{class:"title"},{default:o((()=>[d("标题")])),_:1}),n(i,{modelValue:U.value,"onUpdate:modelValue":e[0]||(e[0]=l=>U.value=l),class:"grow text_right",placeholder:"文案第一行内容",onInput:$},null,8,["modelValue"]),n(c,{class:"my-icon my-icon-close-circle text-info ml_2",onClick:e[1]||(e[1]=l=>J("title"))})])),_:1})])),_:1}),(m(!0),t(s,null,_(I.value,((l,e)=>(m(),y(c,{key:e,class:"mx_4 mb_4 shadow radius bg-color"},{default:o((()=>[n(c,{class:"d_flex px_4 pt_3 pb_2 items_center"},{default:o((()=>[n(c,{class:""},{default:o((()=>[d("水果/蔬菜-"+v(e+1),1)])),_:2},1024),n(c,{class:"grow"}),n(c,null,{default:o((()=>[n(p,{class:x(["yang-button primary extra-small outline my-icon my-icon-arrow-up",0===e?"disabled":""]),"hover-class":"hover",onClick:l=>(l=>{if(0===l)return;const e=I.value[l];I.value[l]=I.value[l-1],I.value[l-1]=e,j()})(e)},null,8,["class","onClick"]),n(p,{class:x(["yang-button primary extra-small outline my-icon my-icon-arrow-down",e===I.value.length-1?"disabled":""]),"hover-class":"hover",onClick:l=>(l=>{if(l===I.value.length-1)return;const e=I.value[l];I.value[l]=I.value[l+1],I.value[l+1]=e,j()})(e)},null,8,["class","onClick"]),n(p,{class:"yang-button primary extra-small outline my-icon my-icon-add","hover-class":"hover",onClick:l=>(l=>{I.value.splice(l+1,0,JSON.parse(JSON.stringify(w))),j()})(e)},null,8,["onClick"]),1!==I.value.length?(m(),y(p,{key:0,class:"yang-button danger extra-small outline my-icon my-icon-delete","hover-class":"hover",onClick:l=>(l=>{u({title:"提示",content:"确定删除吗？",success:e=>{e.confirm&&(I.value.splice(l,1),j())}})})(e)},null,8,["onClick"])):g("",!0)])),_:2},1024)])),_:2},1024),n(c,{class:"d_flex px_4 py_3 items_center border_t"},{default:o((()=>[n(c,{class:"title"},{default:o((()=>[d("名称")])),_:1}),n(i,{modelValue:l.name,"onUpdate:modelValue":e=>l.name=e,class:"grow text_right",placeholder:"请输入名称",onInput:j},null,8,["modelValue","onUpdate:modelValue"]),n(c,{class:"my-icon my-icon-close-circle text-info ml_2",onClick:l=>J("name",e)},null,8,["onClick"])])),_:2},1024),n(c,{class:"d_flex px_4 py_3 items_center border_t"},{default:o((()=>[n(c,{class:"title"},{default:o((()=>[d("价格")])),_:1}),n(i,{modelValue:l.price,"onUpdate:modelValue":e=>l.price=e,class:"grow text_right",placeholder:"请输入价格",onInput:j},null,8,["modelValue","onUpdate:modelValue"]),n(c,{class:"my-icon my-icon-close-circle text-info ml_2",onClick:l=>J("price",e)},null,8,["onClick"])])),_:2},1024),n(c,{class:"d_flex px_4 py_3 items_center border_t"},{default:o((()=>[n(c,{class:"title"},{default:o((()=>[d("数量")])),_:1}),n(i,{modelValue:l.count,"onUpdate:modelValue":e=>l.count=e,class:"grow text_right",placeholder:"请输入数量",onInput:j},null,8,["modelValue","onUpdate:modelValue"]),n(c,{class:"my-icon my-icon-close-circle text-info ml_2",onClick:l=>J("count",e)},null,8,["onClick"])])),_:2},1024),n(c,{class:"d_flex px_4 py_3 items_center border_t"},{default:o((()=>[n(c,{class:"title"},{default:o((()=>[d("单位")])),_:1}),n(i,{modelValue:l.unit,"onUpdate:modelValue":e=>l.unit=e,class:"grow text_right",placeholder:"请输入单位",onInput:j},null,8,["modelValue","onUpdate:modelValue"]),n(c,{class:"my-icon my-icon-close-circle text-info ml_2",onClick:l=>J("unit",e)},null,8,["onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:1}),n(c,{class:"fab yang-fab yang-button small primary round",onClick:N},{default:o((()=>[n(c,{class:"my-icon my-icon-browse mr_2"}),n(c,null,{default:o((()=>[d("查看")])),_:1})])),_:1}),n(h,{version:""})],64)}}},[["__scopeId","data-v-cbda76f8"]]);export{V as default};
