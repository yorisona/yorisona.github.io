"use strict";(self["webpackChunkgoumee_star_temp"]=self["webpackChunkgoumee_star_temp"]||[]).push([[1130],{61130:function(t,a,e){e.r(a),e.d(a,{default:function(){return A}});var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"data-center-collect flex-auto tg-card"},[e("div",{staticClass:"collect-select"},[e("select-date",{on:{selectDate:t.selectDate}}),e("data-switch",{attrs:{index:t.activeIndex},on:{checkATab:t.handleCheckTab}})],1),0===t.activeIndex?e("div",{staticStyle:{padding:"6px 18px 0 18px",color:"#5392ff"}},[t._v(" 小店GMV包含直播GMV和橱窗GMV ")]):t._e(),0===t.activeIndex?[e("data-center-list",{staticClass:"center-list-min-height",attrs:{list:t.dataList,loading:t.tableLoading,"current-date-type":t.selectedDateType}}),e("div",{staticClass:"related-project",staticStyle:{"margin-top":"16px"}},[e("div",{staticClass:"related-project-title"},[e("head-lines",{attrs:{title:"相关项目"}}),e("el-input",{staticStyle:{width:"182px"},attrs:{size:"mini",placeholder:"项目名称/编码","suffix-icon":"el-icon-search"},nativeOn:{keypress:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.onEnterPressSearch.apply(null,arguments)},click:function(a){return t.onEnterPressSearch.apply(null,arguments)}},model:{value:t.project_id,callback:function(a){t.project_id=a},expression:"project_id"}})],1),e("related-project",{attrs:{list:t.project_list_filter},on:{viewDetail:t.viewDetail}})],1)]:t._e(),1===t.activeIndex?e("data-center-chart",{attrs:{currentDate:t.currentDate}}):t._e()],2)},n=[],i=e(97434),l=e(86919),r=e(99824),d=e(60226),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"data-center-chart"},[e("h3",{staticClass:"center-chart-title",staticStyle:{margin:"14px 0 20px 0"}},[t._v("汇总数据")]),e("div",{staticClass:"center-chart-total"},[e("div",{staticClass:"item"},[e("p",{staticClass:"title"},[t._v("GMV")]),null===t.numberFormat(t.summaryData.GMV,2)?e("p",{staticClass:"num"},[t._v("--")]):e("p",{staticClass:"num"},[e("span",{staticClass:"per"},[t._v("￥")]),t._v(t._s(t.numberFormat(t.summaryData.GMV,2)))])]),e("div",{staticClass:"item"},[e("p",{staticClass:"title"},[t._v("预估净销售额")]),null===t.numberFormat(t.summaryData.预估净销额,2)?e("p",{staticClass:"num"},[t._v("--")]):e("p",{staticClass:"num"},[e("span",{staticClass:"per"},[t._v("￥")]),t._v(t._s(t.numberFormat(t.summaryData.预估净销额,2))+" ")])]),e("div",{staticClass:"item"},[e("p",{staticClass:"title"},[t._v("投放金额")]),null===t.numberFormat(t.summaryData.投放金额,2)?e("p",{staticClass:"num"},[t._v("--")]):e("p",{staticClass:"num"},[e("span",{staticClass:"per"},[t._v("￥")]),t._v(t._s(t.numberFormat(t.summaryData.投放金额,2))+" ")])]),e("div",{staticClass:"item"},[e("p",{staticClass:"title"},[t._v("预估佣金收入")]),null===t.numberFormat(t.summaryData.预估佣金收入,2)?e("p",{staticClass:"num"},[t._v("--")]):e("p",{staticClass:"num"},[e("span",{staticClass:"per"},[t._v("￥")]),t._v(t._s(t.numberFormat(t.summaryData.预估佣金收入,2))+" ")])]),e("div",{staticClass:"item"},[e("p",{staticClass:"title"},[t._v("到账金额")]),null===t.numberFormat(t.summaryData.到账金额,2)?e("p",{staticClass:"num"},[t._v("--")]):e("p",{staticClass:"num"},[e("span",{staticClass:"per"},[t._v("￥")]),t._v(t._s(t.numberFormat(t.summaryData.到账金额,2))+" ")])])]),e("div",{staticClass:"center-chart-total",staticStyle:{"margin-bottom":"32px"}},[e("div",{staticClass:"item"},[e("p",{staticClass:"title"},[t._v("定向投放ROI（倍数）")]),e("p",{staticClass:"num"},[t._v(" "+t._s(t.summaryData["定向投放ROI(倍数)"]?t.summaryData["定向投放ROI(倍数)"].toLocaleString():"--")+" ")])]),e("div",{staticClass:"item"},[e("p",{staticClass:"title"},[t._v("直播时长")]),t.summaryData["直播时长(小时)"]?e("p",{staticClass:"num"},[t._v(" "+t._s(t.summaryData["直播时长(小时)"].toLocaleString())+" "),e("span",{staticClass:"per"},[t._v("h")])]):e("p",{staticClass:"num"},[t._v("--")])]),e("div",{staticClass:"item"},[e("p",{staticClass:"title"},[t._v("新增粉丝数")]),e("p",{staticClass:"num"},[t._v(" "+t._s(t.summaryData["新增粉丝数"]?t.summaryData["新增粉丝数"].toLocaleString():"--")+" ")])]),e("div",{staticClass:"item"},[e("p",{staticClass:"title"},[t._v("同时最高在线人数")]),e("p",{staticClass:"num"},[t._v(" "+t._s(t.summaryData["同时最高在线人数"]?t.summaryData["同时最高在线人数"].toLocaleString():"--")+" ")])]),e("div",{staticClass:"item"},[e("p",{staticClass:"title"},[t._v("用户停留时长")]),t.summaryData["用户停留时长(秒)"]?e("p",{staticClass:"num"},[t._v(" "+t._s(t.summaryData["用户停留时长(秒)"].toLocaleString())+" "),e("span",{staticClass:"per"},[t._v("s")])]):e("p",{staticClass:"num"},[t._v("--")])])]),e("div",{staticClass:"line-pie-box"},[e("div",{staticClass:"line-box"},[e("h3",{staticClass:"center-chart-title"},[t._v("到账金额趋势")]),e("div",{staticClass:"chart-border-box"},[e("LineEcharts",{attrs:{date:t.IncomeAmountTrend.date,list:t.IncomeAmountTrend.data,loading:t.IncomeAmountTrend.loading}})],1)]),e("div",{staticClass:"pie-box"},[e("h3",{staticClass:"center-chart-title"},[t._v("各项目到账金额占比")]),e("div",{staticClass:"chart-border-box"},[e("pieEcharts",{attrs:{"pie-data":t.IncomeAmountPercentData,loading:t.IncomeAmountPercentLoading}})],1)])]),e("h3",{staticClass:"center-chart-title"},[t._v("预估净销额趋势")]),e("div",{staticClass:"single-line-box"},[e("LineEcharts",{attrs:{date:t.NetSalesAmountTrend.date,list:t.NetSalesAmountTrend.data,loading:t.NetSalesAmountTrend.loading}})],1),e("h3",{staticClass:"center-chart-title"},[t._v("预估佣金趋势")]),e("div",{staticClass:"single-line-box"},[e("LineEcharts",{attrs:{date:t.CommissonAmountTrend.date,list:t.CommissonAmountTrend.data,loading:t.CommissonAmountTrend.loading}})],1),e("div",{staticClass:"line-pie-box"},[e("div",{staticClass:"line-box"},[e("h3",{staticClass:"center-chart-title"},[t._v("投放金额趋势")]),e("div",{staticClass:"chart-border-box"},[e("LineEcharts",{attrs:{date:t.PromoteAmountTrend.date,list:t.PromoteAmountTrend.data,loading:t.PromoteAmountTrend.loading}})],1)]),e("div",{staticClass:"pie-box"},[e("h3",{staticClass:"center-chart-title"},[t._v("业务投放TOP5")]),e("div",{staticClass:"chart-border-box",staticStyle:{padding:"20px"}},[e("TopFive",{attrs:{list:t.PromoteAmountTop,loading:t.PromoteAmountTopLoading}})],1)])]),e("div",{staticClass:"line-pie-box",staticStyle:{"margin-top":"0"}},[e("div",{staticClass:"line-box"},[e("h3",{staticClass:"center-chart-title"},[t._v("GMV变化趋势")]),e("div",{staticClass:"chart-border-box"},[e("LineEcharts",{attrs:{date:t.GmvTrend.date,list:t.GmvTrend.data,loading:t.GmvTrend.loading}})],1)]),e("div",{staticClass:"pie-box"},[e("h3",{staticClass:"center-chart-title"},[t._v("各项目GMV占比")]),e("div",{staticClass:"chart-border-box"},[e("pieEcharts",{attrs:{"pie-data":t.GmvPercentData,loading:t.GmvPercentDataLoading}})],1)])]),e("h3",{staticClass:"center-chart-title"},[t._v("定向投放ROI趋势")]),e("div",{staticClass:"single-line-box"},[e("LineEcharts",{attrs:{date:t.RoiTrend.date,list:t.RoiTrend.data,loading:t.RoiTrend.loading}})],1),e("h3",{staticClass:"center-chart-title",staticStyle:{"margin-top":"20px"}},[t._v("直播效果趋势")]),e("div",{staticClass:"tag-list"},[e("span",{staticClass:"tag-lable"},[t._v("维度：")]),e("div",{staticClass:"tag-content"},t._l(t.tagList,(function(a){return e("span",{key:a.value,class:["tag-btn",{"tag-btn-active":a.value===t.defaultTag}],on:{click:function(e){return t.handleTagFilter(a.value)}}},[t._v(t._s(a.label))])})),0)]),e("div",{staticClass:"single-line-box"},[e("LineEcharts",{attrs:{date:t.LiveEffectTrend[t.defaultTag].date,list:t.LiveEffectTrend[t.defaultTag].data,loading:t.LiveEffectLoading}})],1)])},c=[],u=e(36672),m=e(82598),v=e(31671),p=e(99575),_=e(87939),h=e(24643),y=(0,i.defineComponent)({components:{LineEcharts:u.Z,pieEcharts:m.Z,TopFive:v.Z},props:{currentDate:{type:String,default:null}},setup(t,a){(0,i.watch)((()=>t.currentDate),(()=>{x()}));const e=(0,i.ref)({}),s=(0,i.ref)([]),n=(0,i.ref)(!0),l=(0,i.ref)({date:[],data:[],loading:!0}),r=(0,i.ref)({date:[],data:[],loading:!0}),d=(0,i.ref)({date:[],data:[],loading:!0}),o=(0,i.ref)({date:[],data:[],loading:!0}),c=(0,i.ref)([]),u=(0,i.ref)(!0),m=(0,i.ref)({date:[],data:[],loading:!0}),v=(0,i.ref)([]),y=(0,i.ref)(!0),C=(0,i.ref)({date:[],data:[],loading:!0}),b=(0,i.ref)({live_add_fans:{date:[],data:[]},live_time:{date:[],data:[]},top_online:{date:[],data:[]},stay_time:{date:[],data:[]}}),g=(0,i.ref)(!0),D=(0,i.ref)("live_add_fans"),f=(0,i.ref)([{label:"直播增粉",value:"live_add_fans"},{label:"直播时长",value:"live_time"},{label:"同时最高在线人数",value:"top_online"},{label:"用户停留时长",value:"stay_time"}]),T=t=>{D.value=t},x=()=>{(0,p.wT)({business_type:_._.Douyin,the_date:t.currentDate,chart_type:_.o.Summary}).then((t=>{t.data&&t.data.success&&(e.value=t.data.data[0])})),(0,p.wT)({business_type:_._.Douyin,the_date:t.currentDate,chart_type:_.o.IncomeAmount}).then((t=>{l.value.loading=!1,t.data&&t.data.success&&(l.value.date=t.data.data.dates,l.value.data=t.data.data.lists.map((t=>(t.name=t.project_name??"--",t.smooth=!0,t.showSymbol=!0,t.type="line",t.data=t.values,t))))})),(0,p.wT)({business_type:_._.Douyin,the_date:t.currentDate,chart_type:_.o.IncomeAmountPercent}).then((t=>{n.value=!1,t.data&&t.data.success&&(s.value=t.data.data.lists.map((t=>{const a=Object();return a.name=t.project_name??"--",a.value=t.values[0],a})))})),(0,p.wT)({business_type:_._.Douyin,the_date:t.currentDate,chart_type:_.o.NetSalesAmount}).then((t=>{r.value.loading=!1,t.data&&t.data.success&&(r.value.date=t.data.data.dates,r.value.data=t.data.data.lists.map((t=>(t.name=t.project_name??"--",t.smooth=!0,t.showSymbol=!0,t.type="line",t.data=t.values,t))))})),(0,p.wT)({business_type:_._.Douyin,the_date:t.currentDate,chart_type:_.o.CommissionAmount}).then((t=>{d.value.loading=!1,t.data&&t.data.success&&(d.value.date=t.data.data.dates,d.value.data=t.data.data.lists.map((t=>(t.name=t.project_name??"--",t.smooth=!0,t.showSymbol=!0,t.type="line",t.data=t.values,t))))})),(0,p.wT)({business_type:_._.Douyin,the_date:t.currentDate,chart_type:_.o.PromoteAmount}).then((t=>{o.value.loading=!1,t.data&&t.data.success&&(o.value.date=t.data.data.dates,o.value.data=t.data.data.lists.map((t=>(t.name=t.project_name??"--",t.smooth=!0,t.showSymbol=!0,t.type="line",t.data=t.values,t))))})),(0,p.wT)({business_type:_._.Douyin,the_date:t.currentDate,chart_type:_.o.PromoteAmountTop}).then((t=>{u.value=!1,t.data&&t.data.success&&(c.value=t.data.data.lists.map(((t,a)=>{const e=Object();return e.project_name=t.project_name,e.values=t.values,e})))})),(0,p.wT)({business_type:_._.Douyin,the_date:t.currentDate,chart_type:_.o.Gmv}).then((t=>{m.value.loading=!1,t.data&&t.data.success&&(m.value.date=t.data.data.dates,m.value.data=t.data.data.lists.map((t=>(t.name=t.project_name??"--",t.smooth=!0,t.showSymbol=!0,t.type="line",t.data=t.values,t))))})),(0,p.wT)({business_type:_._.Douyin,the_date:t.currentDate,chart_type:_.o.GmvPercent}).then((t=>{y.value=!1,t.data&&t.data.success&&(v.value=t.data.data.lists.map((t=>{const a=Object();return a.name=t.project_name??"--",a.value=t.values[0],a})))})),(0,p.wT)({business_type:_._.Douyin,the_date:t.currentDate,chart_type:_.o.Roi}).then((t=>{C.value.loading=!1,t.data&&t.data.success&&(C.value.date=t.data.data.dates,C.value.data=t.data.data.lists.map((t=>(t.name=t.project_name??"--",t.smooth=!0,t.showSymbol=!0,t.type="line",t.data=t.values,t))))})),(0,p.wT)({business_type:_._.Douyin,the_date:t.currentDate,chart_type:_.o.NewFansCount}).then((t=>{g.value=!1,t.data&&t.data.success&&(b.value.live_add_fans.date=t.data.data.dates,b.value.live_add_fans.data=t.data.data.lists.map((t=>(t.name=t.project_name??"--",t.smooth=!0,t.showSymbol=!0,t.type="line",t.data=t.values,t))))})),(0,p.wT)({business_type:_._.Douyin,the_date:t.currentDate,chart_type:_.o.LiveDuration}).then((t=>{g.value=!1,t.data&&t.data.success&&(b.value.live_time.date=t.data.data.dates,b.value.live_time.data=t.data.data.lists.map((t=>(t.name=t.project_name??"--",t.smooth=!0,t.showSymbol=!0,t.type="line",t.data=t.values,t))))})),(0,p.wT)({business_type:_._.Douyin,the_date:t.currentDate,chart_type:_.o.MaxUv}).then((t=>{g.value=!1,t.data&&t.data.success&&(b.value.top_online.date=t.data.data.dates,b.value.top_online.data=t.data.data.lists.map((t=>(t.name=t.project_name??"--",t.smooth=!0,t.showSymbol=!0,t.type="line",t.data=t.values,t))))})),(0,p.wT)({business_type:_._.Douyin,the_date:t.currentDate,chart_type:_.o.AvgStay}).then((t=>{g.value=!1,t.data&&t.data.success&&(b.value.stay_time.date=t.data.data.dates,b.value.stay_time.data=t.data.data.lists.map((t=>(t.name=t.project_name??"--",t.smooth=!0,t.showSymbol=!0,t.type="line",t.data=t.values,t))))}))};return x(),{summaryData:e,IncomeAmountTrend:l,IncomeAmountPercentData:s,IncomeAmountPercentLoading:n,NetSalesAmountTrend:r,CommissonAmountTrend:d,PromoteAmountTrend:o,PromoteAmountTop:c,PromoteAmountTopLoading:u,GmvTrend:m,GmvPercentData:v,GmvPercentDataLoading:y,RoiTrend:C,LiveEffectTrend:b,LiveEffectLoading:g,tagList:f,defaultTag:D,handleTagFilter:T,numberFormat:h.Y4}}}),C=y,b=e(1001),g=(0,b.Z)(C,o,c,!1,null,null,null),D=g.exports,f=e(41947),T=e(1763),x=e(44928);const j=t=>{const a=(0,i.ref)(!0),e=(0,i.ref)([]),s=async s=>{a.value=!0;const{data:n}=await(0,p.BP)(s);n.success?e.value=n.data.data:t.root.$message.error(n.message),a.value=!1};return{getData:s,tableLoading:a,dataList:e}};var w=(0,i.defineComponent)({components:{DataSwitch:l.Z,DataCenterList:d.Z,DataCenterChart:D,SelectDate:r.Z,RelatedProject:f.Z},setup(t,a){const e=j(a),s=(0,i.ref)([]),n=(0,i.ref)(""),l=(0,i.ref)(0),r=(0,i.ref)(0),d=(0,i.ref)(""),o=(0,i.ref)(""),c=(0,i.computed)((()=>s.value.filter((t=>!o.value||(!(!t.project_name||-1===t.project_name.indexOf(o.value))||!(!t.project_uid||-1===t.project_uid.indexOf(o.value))))))),u=(0,i.ref)(null),m=t=>{l.value=t},v=async(t,n)=>{r.value=t,d.value=n,u.value=n,e.getData({business_type:_._.Douyin,the_date:n});try{const[t,a]=await Promise.all([(0,p.tF)({page_num:1,num:1e6,search_type:1,cooperation_type:1,business_type:_._.Douyin,end_date:n}),(0,p.tF)({page_num:1,num:1e6,search_type:1,cooperation_type:1,business_type:7,end_date:n})]),e=[...t.data.data.data,...a.data.data.data];s.value=e.map((t=>(t.title=null===t.project_name||""===t.project_name?t.project_uid:t.project_name,t)))}catch(i){a.root.$message.error("查询失败")}},h=t=>{const e=(0,x.t)(),{meta:s}=e.currentRoute;a.root.$router.push({name:"/datacenter/overview"===s?.activePath?T.xx.dataGeneralizationProject:T.xx.dataDouyinProject,params:{id:t.id,businessType:""+_._.Douyin},query:{dateType:""+r.value,dateValue:d.value,projectName:t.title}})},y=()=>{o.value=n.value};return{activeIndex:l,handleCheckTab:m,selectDate:v,selectedDateType:r,project_id:n,project_list_filter:c,viewDetail:h,onEnterPressSearch:y,...e,currentDate:u}}}),S=w,L=(0,b.Z)(S,s,n,!1,null,"dbf8507c",null),A=L.exports}}]);