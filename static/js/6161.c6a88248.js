"use strict";(self["webpackChunkgoumee_star_temp"]=self["webpackChunkgoumee_star_temp"]||[]).push([[6161],{31671:function(a,t,e){e.d(t,{Z:function(){return d}});var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"center-top-5"},[a._m(0),a._l(a.list,(function(t,s){return e("div",{key:s,staticClass:"list-main"},[e("div",{class:["rank",{top:s<=2}]},[a._v(a._s(s+1))]),e("div",{staticClass:"name"},[a._v(a._s(t.project_name))]),e("div",{staticClass:"amount"},[a._v(a._s(a.numberMoneyFormat(t.values[0],2)))])])}))],2)},n=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"list-title"},[e("div",{staticClass:"rank"},[a._v("排名")]),e("div",{staticClass:"name"},[a._v("业务名称")]),e("div",{staticClass:"amount"},[a._v("金额")])])}],i=e(97434),l=e(24643),r=(0,i.defineComponent)({props:{list:{type:Array,default:()=>[]}},setup(a,t){return{numberMoneyFormat:l.rH}}}),o=r,c=e(1001),u=(0,c.Z)(o,s,n,!1,null,"d4eaf2a0",null),d=u.exports},24536:function(a,t,e){e.d(t,{Z:function(){return h}});var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"data-center-chart"},[e("h3",{staticClass:"center-chart-title",staticStyle:{margin:"14px 0 20px 0"}},[a._v("汇总数据")]),e("div",{staticClass:"center-chart-total"},[e("div",{staticClass:"item"},[e("p",{staticClass:"title"},[a._v("GMV")]),null===a.numberFormat(a.summaryData.GMV,2)?e("p",{staticClass:"num"},[a._v("--")]):e("p",{staticClass:"num"},[e("span",{staticClass:"per"},[a._v("￥")]),a._v(a._s(a.numberFormat(a.summaryData.GMV,2)))])]),e("div",{staticClass:"item"},[e("p",{staticClass:"title"},[a._v("预估净销售额")]),null===a.numberFormat(a.summaryData.预估净销额,2)?e("p",{staticClass:"num"},[a._v("--")]):e("p",{staticClass:"num"},[e("span",{staticClass:"per"},[a._v("￥")]),a._v(a._s(a.numberFormat(a.summaryData.预估净销额,2))+" ")])]),e("div",{staticClass:"item"},[e("p",{staticClass:"title"},[a._v("预估佣金收入")]),null===a.numberFormat(a.summaryData.预估佣金收入,2)?e("p",{staticClass:"num"},[a._v("--")]):e("p",{staticClass:"num"},[e("span",{staticClass:"per"},[a._v("￥")]),a._v(a._s(a.numberFormat(a.summaryData.预估佣金收入,2))+" ")])]),e("div",{staticClass:"item"},[e("p",{staticClass:"title"},[a._v("到账金额")]),null===a.numberFormat(a.summaryData.到账金额,2)?e("p",{staticClass:"num"},[a._v("--")]):e("p",{staticClass:"num"},[e("span",{staticClass:"per"},[a._v("￥")]),a._v(a._s(a.numberFormat(a.summaryData.到账金额,2))+" ")])])]),e("div",{staticClass:"center-chart-total",staticStyle:{"margin-bottom":"32px"}},[e("div",{staticClass:"item"},[e("p",{staticClass:"title"},[a._v("直播时长")]),a.summaryData["直播时长(小时)"]?e("p",{staticClass:"num"},[a._v(" "+a._s(a.summaryData["直播时长(小时)"].toLocaleString())+" "),e("span",{staticClass:"per"},[a._v("h")])]):e("p",{staticClass:"num"},[a._v("--")])]),e("div",{staticClass:"item"},[e("p",{staticClass:"title"},[a._v("新增粉丝数")]),e("p",{staticClass:"num"},[a._v(" "+a._s(a.summaryData["新增粉丝数"]?a.summaryData["新增粉丝数"].toLocaleString():"--")+" ")])]),e("div",{staticClass:"item"},[e("p",{staticClass:"title"},[a._v("同时最高在线人数")]),e("p",{staticClass:"num"},[a._v(" "+a._s(a.summaryData["同时最高在线人数"]?a.summaryData["同时最高在线人数"].toLocaleString():"--")+" ")])]),e("div",{staticClass:"item"},[e("p",{staticClass:"title"},[a._v("用户停留时长")]),a.summaryData["用户停留时长(秒)"]?e("p",{staticClass:"num"},[a._v(" "+a._s(a.summaryData["用户停留时长(秒)"].toLocaleString())+" "),e("span",{staticClass:"per"},[a._v("s")])]):e("p",{staticClass:"num"},[a._v("--")])])]),e("div",{staticClass:"line-pie-box"},[e("div",{staticClass:"line-box"},[e("h3",{staticClass:"center-chart-title"},[a._v("到账金额趋势")]),e("div",{staticClass:"chart-border-box"},[e("LineEcharts",{attrs:{date:a.IncomeAmountTrend.date,list:a.IncomeAmountTrend.data,loading:a.IncomeAmountTrend.loading}})],1)]),e("div",{staticClass:"pie-box"},[e("h3",{staticClass:"center-chart-title"},[a._v("各项目到账金额占比")]),e("div",{staticClass:"chart-border-box"},[e("pieEcharts",{attrs:{"pie-data":a.IncomeAmountPercentData,loading:a.IncomeAmountPercentLoading}})],1)])]),e("h3",{staticClass:"center-chart-title"},[a._v("预估净销额趋势")]),e("div",{staticClass:"single-line-box"},[e("LineEcharts",{attrs:{date:a.NetSalesAmountTrend.date,list:a.NetSalesAmountTrend.data,loading:a.NetSalesAmountTrend.loading}})],1),e("h3",{staticClass:"center-chart-title"},[a._v("预估佣金趋势")]),e("div",{staticClass:"single-line-box"},[e("LineEcharts",{attrs:{date:a.CommissonAmountTrend.date,list:a.CommissonAmountTrend.data,loading:a.CommissonAmountTrend.loading}})],1),e("div",{staticClass:"line-pie-box"},[e("div",{staticClass:"line-box"},[e("h3",{staticClass:"center-chart-title"},[a._v("GMV变化趋势")]),e("div",{staticClass:"chart-border-box"},[e("LineEcharts",{attrs:{date:a.GmvTrend.date,list:a.GmvTrend.data,loading:a.GmvTrend.loading}})],1)]),e("div",{staticClass:"pie-box"},[e("h3",{staticClass:"center-chart-title"},[a._v("各项目GMV占比")]),e("div",{staticClass:"chart-border-box"},[e("pieEcharts",{attrs:{"pie-data":a.GmvPercentData,loading:a.GmvPercentLoading}})],1)])]),e("h3",{staticClass:"center-chart-title"},[a._v("直播效果趋势")]),e("div",{staticClass:"tag-list"},[e("span",{staticClass:"tag-lable"},[a._v("维度：")]),e("div",{staticClass:"tag-content"},a._l(a.tagList,(function(t){return e("span",{key:t.value,class:["tag-btn",{"tag-btn-active":t.value===a.defaultTag}],on:{click:function(e){return a.handleTagFilter(t.value)}}},[a._v(a._s(t.label))])})),0)]),e("div",{staticClass:"single-line-box"},[e("LineEcharts",{attrs:{date:a.LiveEffectTrend[a.defaultTag].date,list:a.LiveEffectTrend[a.defaultTag].data,loading:a.LiveEffectLoading}})],1)])},n=[],i=e(97434),l=e(36672),r=e(82598),o=e(31671),c=e(99575),u=e(87939),d=e(24643),m=(0,i.defineComponent)({components:{LineEcharts:l.Z,pieEcharts:r.Z,TopFive:o.Z},props:{currentDate:{type:String,default:null}},setup(a,t){(0,i.watch)((()=>a.currentDate),(()=>{f()}));const e=(0,i.ref)({}),s=(0,i.ref)([]),n=(0,i.ref)(!0),l=(0,i.ref)({date:[],data:[],loading:!0}),r=(0,i.ref)({date:[],data:[],loading:!0}),o=(0,i.ref)({date:[],data:[],loading:!0}),m=(0,i.ref)({date:[],data:[],loading:!0}),v=(0,i.ref)([]),_=(0,i.ref)(!0),p=(0,i.ref)({live_add_fans:{date:[],data:[]},live_time:{date:[],data:[]},top_online:{date:[],data:[]},stay_time:{date:[],data:[]}}),h=(0,i.ref)(!0),b=(0,i.ref)("live_add_fans"),y=(0,i.ref)([{label:"直播增粉",value:"live_add_fans"},{label:"直播时长",value:"live_time"},{label:"同时最高在线人数",value:"top_online"},{label:"用户停留时长",value:"stay_time"}]),C=a=>{b.value=a},f=()=>{(0,c.wT)({business_type:u._.Taobao,the_date:a.currentDate,chart_type:u.o.Summary}).then((a=>{a.data&&a.data.success&&(e.value=a.data.data[0])})),(0,c.wT)({business_type:u._.Taobao,the_date:a.currentDate,chart_type:u.o.IncomeAmount}).then((a=>{l.value.loading=!1,a.data&&a.data.success&&(l.value.date=a.data.data.dates,l.value.data=a.data.data.lists.map((a=>(a.name=a.project_name??"--",a.smooth=!0,a.showSymbol=!0,a.type="line",a.data=a.values,a))))})),(0,c.wT)({business_type:u._.Taobao,the_date:a.currentDate,chart_type:u.o.IncomeAmountPercent}).then((a=>{n.value=!1,a.data&&a.data.success&&(s.value=a.data.data.lists.map((a=>{const t=Object();return t.name=a.project_name??"--",t.value=a.values[0],t})))})),(0,c.wT)({business_type:u._.Taobao,the_date:a.currentDate,chart_type:u.o.NetSalesAmount}).then((a=>{r.value.loading=!1,a.data&&a.data.success&&(r.value.date=a.data.data.dates,r.value.data=a.data.data.lists.map((a=>(a.name=a.project_name??"--",a.smooth=!0,a.showSymbol=!0,a.type="line",a.data=a.values,a))))})),(0,c.wT)({business_type:u._.Taobao,the_date:a.currentDate,chart_type:u.o.CommissionAmount}).then((a=>{o.value.loading=!1,a.data&&a.data.success&&(o.value.date=a.data.data.dates,o.value.data=a.data.data.lists.map((a=>(a.name=a.project_name??"--",a.smooth=!0,a.showSymbol=!0,a.type="line",a.data=a.values,a))))})),(0,c.wT)({business_type:u._.Taobao,the_date:a.currentDate,chart_type:u.o.Gmv}).then((a=>{m.value.loading=!1,a.data&&a.data.success&&(m.value.date=a.data.data.dates,m.value.data=a.data.data.lists.map((a=>(a.name=a.project_name??"--",a.smooth=!0,a.showSymbol=!0,a.type="line",a.data=a.values,a))))})),(0,c.wT)({business_type:u._.Taobao,the_date:a.currentDate,chart_type:u.o.GmvPercent}).then((a=>{_.value=!1,a.data&&a.data.success&&(v.value=a.data.data.lists.map((a=>{const t=Object();return t.name=a.project_name??"--",t.value=a.values[0],t})))})),(0,c.wT)({business_type:u._.Taobao,the_date:a.currentDate,chart_type:u.o.NewFansCount}).then((a=>{h.value=!1,a.data&&a.data.success&&(p.value.live_add_fans.date=a.data.data.dates,p.value.live_add_fans.data=a.data.data.lists.map((a=>(a.name=a.project_name??"--",a.smooth=!0,a.showSymbol=!0,a.type="line",a.data=a.values,a))))})),(0,c.wT)({business_type:u._.Taobao,the_date:a.currentDate,chart_type:u.o.LiveDuration}).then((a=>{h.value=!1,a.data&&a.data.success&&(p.value.live_time.date=a.data.data.dates,p.value.live_time.data=a.data.data.lists.map((a=>(a.name=a.project_name??"--",a.smooth=!0,a.showSymbol=!0,a.type="line",a.data=a.values,a))))})),(0,c.wT)({business_type:u._.Taobao,the_date:a.currentDate,chart_type:u.o.MaxUv}).then((a=>{h.value=!1,a.data&&a.data.success&&(p.value.top_online.date=a.data.data.dates,p.value.top_online.data=a.data.data.lists.map((a=>(a.name=a.project_name??"--",a.smooth=!0,a.showSymbol=!0,a.type="line",a.data=a.values,a))))})),(0,c.wT)({business_type:u._.Taobao,the_date:a.currentDate,chart_type:u.o.AvgStay}).then((a=>{h.value=!1,a.data&&a.data.success&&(p.value.stay_time.date=a.data.data.dates,p.value.stay_time.data=a.data.data.lists.map((a=>(a.name=a.project_name??"--",a.smooth=!0,a.showSymbol=!0,a.type="line",a.data=a.values,a))))}))};return f(),{summaryData:e,IncomeAmountTrend:l,IncomeAmountPercentData:s,IncomeAmountPercentLoading:n,NetSalesAmountTrend:r,CommissonAmountTrend:o,GmvTrend:m,GmvPercentData:v,GmvPercentLoading:_,LiveEffectTrend:p,LiveEffectLoading:h,tagList:y,defaultTag:b,handleTagFilter:C,numberFormat:d.Y4}}}),v=m,_=e(1001),p=(0,_.Z)(v,s,n,!1,null,null,null),h=p.exports},29625:function(a,t,e){var s,n;e.d(t,{Bs:function(){return v},C_:function(){return r},RB:function(){return _},UN:function(){return u},WD:function(){return s},Wj:function(){return o},Y$:function(){return n},Yh:function(){return l},Zb:function(){return i},i8:function(){return m},kA:function(){return p},x3:function(){return c}}),function(a){a[a["marketing"]=1]="marketing",a[a["taobao"]=2]="taobao",a[a["douyin"]=3]="douyin",a[a["base"]=4]="base",a[a["mcn"]=5]="mcn",a[a["douyinsh"]=7]="douyinsh"}(s||(s={})),function(a){a[a["common"]=1]="common",a[a["system"]=2]="system"}(n||(n={}));const i=new Map([[s.marketing,"营销业务"],[s.douyin,"抖音店播"],[s.taobao,"淘宝店播"],[s.base,"基地业务"],[s.mcn,"S2B2C"],[s.douyinsh,"抖音店播(上海)"]]),l=[{value:s.marketing,label:"整合营销"},{value:s.douyin,label:"抖音店播"},{value:s.taobao,label:"淘宝店播"},{value:s.mcn,label:"S2B2C"},{value:s.douyinsh,label:"抖音店播(上海)"}];var r;(function(a){a[a["creation"]=1]="creation",a[a["tryLive"]=2]="tryLive",a[a["execution"]=3]="execution",a[a["regionExecution"]=4]="regionExecution",a[a["finish"]=5]="finish",a[a["executionEnd"]=6]="executionEnd"})(r||(r={}));const o=new Map([[r.creation,"项目创建"],[r.tryLive,"试播中"],[r.execution,"项目执行中"],[r.regionExecution,"区域执行中"],[r.executionEnd,"执行结束"],[r.finish,"已完结"]]);var c;(function(a){a[a["region"]=2]="region",a[a["selfSupport"]=1]="selfSupport"})(c||(c={}));const u=new Map([[c.region,"区域"],[c.selfSupport,"自营"]]);var d;(function(a){a[a["month"]=1]="month",a[a["quarter"]=2]="quarter",a[a["halfAyear"]=3]="halfAyear"})(d||(d={}));const m=new Map([[d.month,"月结"],[d.quarter,"季结"],[d.halfAyear,"半年"]]),v=new Map([[1,"美妆"],[2,"生活"],[3,"服饰"],[4,"美食"],[5,"母婴"],[6,"数码"],[7,"家装"],[8,"健康"],[9,"宠物"],[10,"时尚"],[11,"配饰"],[12,"家电"],[13,"测评"],[14,"旅行"],[15,"运动"],[16,"摄影"],[17,"情感"],[18,"汽车"],[19,"搞笑"],[20,"教育"],[21,"财经"],[22,"萌娃"],[23,"文化"],[24,"影视"],[25,"娱乐"],[26,"游戏"],[27,"海外"],[28,"才艺"],[29,"三农"],[30,"二次元"],[31,"高颜值"]]);function _(a){return 0===a?"无":v.get(a)??"无"}var p;(function(a){a[a["live"]=1]="live",a[a["marketing"]=2]="marketing",a[a["common_business"]=3]="common_business"})(p||(p={}))}}]);