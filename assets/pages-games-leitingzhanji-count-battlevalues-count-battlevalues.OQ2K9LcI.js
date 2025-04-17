import{_ as a,r as l,c as e,w as t,i as b,a as s,o as c,b as o,f as r,d as i,F as _,g as n,n as d,h as u,t as m}from"./index-sV_94MSN.js";const h=a({__name:"count-battlevalues",setup(a){uni.$sharePageTitle="战力计算器-雷霆战机",l([{label:"战机",part:1,children:[{label:"暗夜神锋",level:[{label:"Lv.50",attack:0,health:0},{label:"Lv.55",attack:0,health:0},{label:"Lv.60",attack:0,health:0},{label:"Lv.65",attack:0,health:0},{label:"Lv.70",attack:0,health:0},{label:"Lv.75",attack:0,health:0},{label:"Lv.80",attack:0,health:0},{label:"Lv.85",attack:0,health:0},{label:"Lv.90",attack:0,health:0},{label:"Lv.95",attack:0,health:0},{label:"Lv.100",attack:0,health:0}]}]}]),l([{label:"专属百分比",attack:[.07,.115,.205],health:[.07,.115,.205],isPercentage:!0},{label:"专属数值",attack:[308,516,905],health:[6156,10320,18105]},{label:"通用百分比",attack:[.015,.025,.045],health:[.07,.115,.205],isPercentage:!0},{label:"通用数值",attack:[60,121,205],health:[1207,2414,4104]}]),l([{label:"皮肤",attack:50,health:1e3}]),l([{label:"布莱德",coreLabel:"充能火花",level:[{label:"Lv.30",combat:[]},{label:"Lv.50",combat:[]},{label:"Lv.70",combat:[]},{label:"Lv.90",combat:[]},{label:"潜能MAX",combat:[]}]},{label:"莉亚",coreLabel:"星辰守护",level:[{label:"Lv.30",combat:[]},{label:"Lv.50",combat:[]},{label:"Lv.70",combat:[]},{label:"Lv.90",combat:[]},{label:"潜能Lv.1",combat:[]},{label:"潜能Lv.2",combat:[]},{label:"潜能Lv.4",combat:[]}]}]),l([]);const h=l([{key:"",label:"暗夜神锋(MAX)",part:1,partLabel:"战机",combat:6026,originalCrystal:[{label:"20.5%"},{label:"905"},{label:"4.5%"},{label:"205"}],hasSkin:!0},{key:"",label:"月华之轮(MAX)",part:2,partLabel:"装甲",combat:120578,originalCrystal:[{label:"20.5%"},{label:"18105"},{label:"4.5%"},{label:"4104"}],hasSkin:!1},{key:"",label:"集束光刃(MAX)",part:3,partLabel:"副武器",combat:6026,originalCrystal:[{label:"20.5%"},{label:"905"},{label:"4.5%"},{label:"205"}],hasSkin:!1},{key:"",label:"超旋奇点(MAX)",part:4,partLabel:"僚机",combat:6026,originalCrystal:[{label:"20.5%"},{label:"905"},{label:"4.5%"},{label:"205"}],hasSkin:!0}]),v=l([{key:"",label:"莉亚(潜能MAX)",level:90,potential:4,isMain:!0,quality:1,combat:4836,partCombat:[1512,18134,1512,906]},{key:"",label:"罗伊(潜能MAX)",level:90,potential:4,isMain:!1,quality:1,combat:1451,partCombat:[1512,30248,906,906]},{key:"",label:"维多利亚(潜能MAX)",level:90,potential:4,isMain:!1,quality:1,combat:1451,partCombat:[906,30248,1512,906]},{key:"",label:"娜塔莉(潜能MAX)",level:90,potential:4,isMain:!1,quality:1,combat:1451,partCombat:[1512,18134,906,1512]}]),p=l([{key:"",label:"希望之光(Lv4)",level:4,type:1,typeLabel:"核心1",quality:1,combat:1209,partCombat:[1512,30248,906,906]},{key:"",label:"星辰守护(Lv4)",level:4,type:1,typeLabel:"核心2",quality:1,combat:1209,partCombat:[1512,18134,1512,906]},{key:"",label:"能量倾泻(Lv4)",level:4,type:1,typeLabel:"核心3",quality:1,combat:1209,partCombat:[1512,18134,906,1512]}]);return(a,l)=>{const y=b,f=s("my-divider"),L=s("my-ad-custom"),k=s("my-bottom-safety-space");return c(),e(y,{class:"pt_4"},{default:t((()=>[o(y,{class:"mx_4 mb_4 shadow radius bg-color"},{default:t((()=>[o(y,{class:"d_flex px_4 items_center"},{default:t((()=>[o(y,{class:"py_4 font_bold"},{default:t((()=>[r("总战力")])),_:1}),o(y,{class:"grow"}),o(y,{class:"py_4"},{default:t((()=>[r("50725")])),_:1})])),_:1})])),_:1}),o(y,{class:"mx_4 mb_4 shadow radius bg-color"},{default:t((()=>[(c(!0),i(_,null,n(h.value,((a,l)=>(c(),e(y,{key:l,class:d(["d_flex items_center text_base px_4 p_relative",0===l?"radius_t border_b":l===h.value.length?"radius_b":"border_b"]),"hover-class":"bg-hover"},{default:t((()=>[o(y,{class:"my_4 p_relative"},{default:t((()=>[r(m(a.label||a.partLabel)+" ",1),o(y,{class:"text_xs text-info"},{default:t((()=>[r(m(a.originalCrystal.map((a=>a.label)).join("、")),1)])),_:2},1024),a.hasSkin?(c(),e(y,{key:0,class:"yang-badge basic count circle warning"},{default:t((()=>[r("有皮肤")])),_:1})):u("",!0)])),_:2},1024),o(y,{class:"grow"}),o(y,{class:"text-info text_right"},{default:t((()=>[r(m(a.combat),1)])),_:2},1024),o(y,{class:"yang-badge ribbon"},{default:t((()=>[o(y,{class:"content basic"},{default:t((()=>[r(m(a.partLabel),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["class"])))),128))])),_:1}),o(y,{class:"mx_4 mb_4 shadow radius bg-color"},{default:t((()=>[(c(!0),i(_,null,n(v.value,((a,l)=>(c(),e(y,{key:l,class:d(["d_flex items_center text_base px_4 p_relative",0===l?"radius_t border_b":l===v.value.length?"radius_b":"border_b"]),"hover-class":"bg-hover"},{default:t((()=>[o(y,{class:"my_4 p_relative"},{default:t((()=>[r(m(a.label||a.typeLabel)+" ",1),o(y,{class:"text_xs text-info"},{default:t((()=>[r(m(a.partCombat.map((l=>Math.round(l*(a.isMain?1:.3)))).join("、")),1)])),_:2},1024)])),_:2},1024),o(y,{class:"grow"}),o(y,{class:"text-info text_right"},{default:t((()=>[r(m(a.combat),1)])),_:2},1024),o(y,{class:"yang-badge ribbon"},{default:t((()=>[o(y,{class:"content basic"},{default:t((()=>[r(m(a.isMain?"主驾驶":"副驾驶"),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["class"])))),128))])),_:1}),o(y,{class:"mx_4 mb_4 shadow radius bg-color"},{default:t((()=>[(c(!0),i(_,null,n(p.value,((a,l)=>(c(),e(y,{key:l,class:d(["d_flex items_center text_base px_4 p_relative",0===l?"radius_t border_b":l===p.value.length?"radius_b":"border_b"]),"hover-class":"bg-hover"},{default:t((()=>[o(y,{class:"my_4 p_relative"},{default:t((()=>[r(m(a.label)+" ",1),o(y,{class:"text_xs text-info"},{default:t((()=>[r(m(a.partCombat.map((a=>Math.round(.25*a))).join("、")),1)])),_:2},1024)])),_:2},1024),o(y,{class:"grow"}),o(y,{class:"text-info text_right"},{default:t((()=>[r(m(a.combat),1)])),_:2},1024),o(y,{class:"yang-badge ribbon"},{default:t((()=>[o(y,{class:"content basic"},{default:t((()=>[r(m(a.typeLabel),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["class"])))),128))])),_:1}),o(f,{content:"本页内容仅供参考，具体以官方数据为准。"}),o(L,{mp_weixin:"adunit-8c89cc4610403c81",mp_qq:"54ea1b2e68ecb1caa66494c8dc68d3b7"}),o(k,{version:""})])),_:1})}}},[["__scopeId","data-v-98d7253b"]]);export{h as default};
