"use strict";(self["webpackChunkgoumee_star_temp"]=self["webpackChunkgoumee_star_temp"]||[]).push([[5013],{99824:function(e,t,a){a.d(t,{Z:function(){return h}});var n,i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"el-select-group"},[e.isMcnDouyinDaily?e._e():a("el-select",{staticClass:"time-select-type",staticStyle:{width:"102px"},attrs:{size:"small"},model:{value:e.selectDate.dateType,callback:function(t){e.$set(e.selectDate,"dateType",t)},expression:"selectDate.dateType"}},e._l(e.selectDate.dateTypeList,(function(e){return a("el-option",{key:e.value,attrs:{value:e.value,label:e.label}})})),1),a("el-select",{style:{width:e.isMonthWeek?"240px":e.isMcnDouyinDaily?"180px":"200px"},attrs:{size:"small"},model:{value:e.selectDate.dateValue,callback:function(t){e.$set(e.selectDate,"dateValue",t)},expression:"selectDate.dateValue"}},e._l(e.selectDate.dateValueList,(function(e){return a("el-option",{key:e.value,attrs:{value:e.value,label:e.label}})})),1)],1)},r=[],o=a(97434),s=a(6933),l=a.n(s);(function(e){e[e["Month"]=0]="Month",e[e["Year"]=1]="Year",e[e["Quarter"]=2]="Quarter",e[e["Week"]=3]="Week"})(n||(n={}));const c=(e=!1,t=!1,a=!1)=>{const i=(0,o.ref)(n.Month);let r=[{label:"按月查看",value:n.Month},{label:"按年查看",value:n.Year}];e&&(r=[{label:"按月查看",value:n.Month},{label:"按季查看",value:n.Quarter}]),a&&(r=[{label:"按月查看",value:n.Month},{label:"按周查看",value:n.Week}]);const s=(0,o.ref)(void 0),c=(0,o.ref)([]),u=()=>{if(i.value===n.Year){const e=l()().add(1,"years");c.value=new Array(10).fill(1).map((()=>(e.add(-1,"years"),{label:e.format("YYYY年"),value:e.format("YYYY")}))),s.value=c.value[0].value}else if(i.value===n.Quarter){const e=l()().add(1,"Q");c.value=[],new Array(10).fill(1).map((()=>{if(e.add(-1,"Q"),!(t&&Number(e.format("YYYY"))<2022))return c.value.push({label:e.format("YYYY年Q季度"),value:e.format("YYYY-Q")})})),s.value=c.value[0].value}else if(i.value===n.Month){const e=l()().add(1,"months");c.value=[],new Array(24).fill(1).map((()=>{if(e.add(-1,"months"),!(t&&Number(e.format("YYYY"))<2022))return c.value.push({label:e.format("YYYY年MM月"),value:e.format("YYYYMM")})})),s.value=c.value[0].value}else if(i.value===n.Week){const e=l()().add(1,"w");c.value=[],new Array(30).fill(1).map((()=>{if(e.add(-1,"w"),t&&Number(e.format("YYYY"))<2022)return;const a="MM.DD",n=e.startOf("w").format(a),i=e.endOf("w").format(a);return c.value.push({label:e.format("YYYY年第W周("+n+"-"+i+")"),value:e.format("YYYY-MM-DD")})})),s.value=c.value[0].value}};return(0,o.watch)((()=>i.value),(()=>{s.value=void 0,u()})),u(),(0,o.reactive)({dateType:i,dateTypeList:r,dateValue:s,dateValueList:c})};var u=a(44928),p=a(53451),_=a.n(p);const{debounce:d}=_();var m=(0,o.defineComponent)({props:{isMcnDouyinDaily:{type:Boolean,default:!1,require:!1},isMonthQuarter:{type:Boolean,default:!1,require:!1},isMonthWeek:{type:Boolean,default:!1,require:!1}},setup(e,t){const a=c(e.isMonthQuarter,e.isMcnDouyinDaily||e.isMonthQuarter,e.isMonthWeek),n=(0,u.t)(),{dateValue:i}=n.currentRoute.query;i&&(4===i.length?(a.dateType=1,setTimeout((()=>{a.dateValue=i}))):a.dateValue=i);const r=d((()=>{t.emit("selectDate",a.dateType,a.dateValue)}),200);return r(),(0,o.watch)((()=>a.dateValue),(()=>{r()})),{selectDate:a}}}),y=m,v=a(1001),f=(0,v.Z)(y,i,r,!1,null,"43dd05f4",null),h=f.exports},86919:function(e,t,a){a.d(t,{Z:function(){return u}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"overview-switch"},[a("div",{class:["base",{active:0===e.index}],on:{click:function(t){return e.handleCheckBtn(0)}}},[a("tg-icon",{attrs:{name:"ico-list"}}),e._v("列表样式 ")],1),a("div",{class:["base",{active:1===e.index}],on:{click:function(t){return e.handleCheckBtn(1)}}},[a("tg-icon",{attrs:{name:"ico-chart"}}),e._v("图表样式 ")],1)])},i=[],r=a(97434),o=(0,r.defineComponent)({name:"OverviewTab",props:{index:{type:Number,default:0}},setup(e,t){const a=e=>{t.emit("checkATab",e)};return{handleCheckBtn:a}}}),s=o,l=a(1001),c=(0,l.Z)(s,n,i,!1,null,"1e6dd9b8",null),u=c.exports},65013:function(e,t,a){a.r(t),a.d(t,{default:function(){return L}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"data-center-collect flex-auto tg-card"},[a("head-lines",{staticClass:"title-label",attrs:{title:"系统登录情况统计"}}),a("data-center-list",{staticClass:"center-list-min-height",attrs:{list:e.systemLoginDataList,loading:e.systemLoginTableLoading}}),a("head-lines",{staticClass:"title-label",attrs:{title:"客户&供应商信息管理情况统计"}}),a("data-center-list",{staticClass:"center-list-min-height",attrs:{list:e.customerSupplierManageDataList,loading:e.customerSupplierManageTableLoading}}),a("head-lines",{staticClass:"title-label",attrs:{title:"项目执行情况统计"}}),a("data-center-list",{staticClass:"center-list-min-height",attrs:{list:e.projectDataList,loading:e.projectTableLoading}}),a("head-lines",{staticClass:"title-label",attrs:{title:"项目结算单统计"}}),a("data-center-list",{staticClass:"center-list-min-height",attrs:{list:e.settlementDataList,loading:e.settlementTableLoading}}),a("head-lines",{staticClass:"title-label",attrs:{title:"开票审批情况统计"}}),a("data-center-list",{staticClass:"center-list-min-height",attrs:{list:e.invoiceApplyDataList,loading:e.invoiceApplyTableLoading}}),a("head-lines",{staticClass:"title-label",attrs:{title:"付款审批情况统计"}}),a("data-center-list",{staticClass:"center-list-min-height",attrs:{list:e.customerPayApplyDataList,loading:e.customerPayApplyTableLoading}}),a("head-lines",{staticClass:"title-label",attrs:{title:"合同审批情况统计"}}),a("data-center-list",{staticClass:"center-list-min-height",attrs:{list:e.contractApplyDataList,loading:e.contractApplyTableLoading}}),a("head-lines",{staticClass:"title-label",attrs:{title:"自营店播执行情况统计"}}),a("data-center-list",{staticClass:"center-list-min-height",attrs:{list:e.shopLiveDataList,loading:e.shopLiveTableLoading}})],1)},i=[],r=a(97434),o=a(86919),s=a(99824),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"data-center-list"},[e.list.length>0?a("el-table",{attrs:{data:e.list,border:"","cell-style":{height:"32px",padding:0},"header-cell-style":{background:"#ffffff",height:"36px !important",color:"#19232d",fontSize:"12px",padding:0,fontWeight:"bold",borderBottom:"1px solid #EAEEF0"}}},[a("el-table-column",{attrs:{label:"指标",width:"180",fixed:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"slash"},[e._v(e._s(t.row[0][1]))])]}}],null,!1,2675617597)},[a("template",{slot:"header"},[a("div",{staticClass:"header-price list-title-box-one"},[a("p",{staticClass:"date"},[e._v("数据指标")]),a("p",{staticClass:"title"},[e._v(e._s(e.list[0][0][0]))])])])],2),e._l(e.list[0],(function(t,n){return[n>0?a("el-table-column",{key:n,attrs:{"min-width":e.getWidth(t),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"cell-price"},[e._v(" "+e._s(null===t.row[n][1]?"--":t.row[n][1])+" ")])]}}],null,!0)},[a("template",{slot:"header"},[a("div",[e._v(" "+e._s(t[0])+" ")])])],2):e._e()]}))],2):a("div",{staticClass:"empty-img"},[a("empty-common",{attrs:{"detial-text":"暂无数据"}})],1)],1)},c=[],u=a(24643),p=(0,r.defineComponent)({name:"dataCenterList",props:{loading:{type:Boolean,default:!1},list:{type:Array,default:()=>[]}},setup(e,t){const a=e=>{const t=String(e[0]);return t.length>=7?"160":t.length>5?"100":t.length>4?"90":t.length>3?"80":"71"};return{getWidth:a,numberFormat:u.Y4}}}),_=p,d=a(1001),m=(0,d.Z)(_,l,c,!1,null,"d387a372",null),y=m.exports,v=a(1763),f=a(44928),h=a(99575),g=a(87939);const j=e=>{const t=(0,r.ref)(!0),a=(0,r.ref)(!0),n=(0,r.ref)(!0),i=(0,r.ref)(!0),o=(0,r.ref)(!0),s=(0,r.ref)(!0),l=(0,r.ref)(!0),c=(0,r.ref)(!0),u=(0,r.ref)([]),p=(0,r.ref)([]),_=(0,r.ref)([]),d=(0,r.ref)([]),m=(0,r.ref)([]),y=(0,r.ref)([]),v=(0,r.ref)([]),f=(0,r.ref)([]),g=async()=>{{t.value=!0;const{data:a}=await(0,h.Fr)();a.success?u.value=a.data:e.root.$message.error(a.message),t.value=!1}{a.value=!0;const{data:t}=await(0,h.vB)();t.success?p.value=t.data:e.root.$message.error(t.message),a.value=!1}{n.value=!0;const{data:t}=await(0,h._Z)();t.success?_.value=t.data:e.root.$message.error(t.message),n.value=!1}{i.value=!0;const{data:t}=await(0,h.nA)();t.success?d.value=t.data:e.root.$message.error(t.message),i.value=!1}{o.value=!0;const{data:t}=await(0,h.$V)();t.success?m.value=t.data:e.root.$message.error(t.message),o.value=!1}{s.value=!0;const{data:t}=await(0,h.GH)();t.success?y.value=t.data:e.root.$message.error(t.message),s.value=!1}{l.value=!0;const{data:t}=await(0,h.R5)();t.success?v.value=t.data:e.root.$message.error(t.message),l.value=!1}{c.value=!0;const{data:t}=await(0,h.th)();t.success?f.value=t.data:e.root.$message.error(t.message),c.value=!1}};return{getData:g,customerSupplierManageTableLoading:t,customerPayApplyTableLoading:a,contractApplyTableLoading:n,invoiceApplyTableLoading:i,systemLoginTableLoading:o,settlementTableLoading:s,projectTableLoading:l,shopLiveTableLoading:c,customerSupplierManageDataList:u,customerPayApplyDataList:p,contractApplyDataList:_,invoiceApplyDataList:d,systemLoginDataList:m,settlementDataList:y,projectDataList:v,shopLiveDataList:f}};var b=(0,r.defineComponent)({components:{DataSwitch:o.Z,DataCenterList:y,SelectDate:s.Z},setup(e,t){const a=j(t),n=(0,r.ref)(0),i=(0,r.ref)(""),o=(0,r.ref)(0),s=(0,r.ref)(""),l=(0,r.ref)(""),c=(0,r.ref)(null),u=e=>{n.value=e};a.getData();const p=e=>{const a=(0,f.t)(),{meta:n}=a.currentRoute;t.root.$router.push({name:"/datacenter/overview"===n?.activePath?v.xx.dataGeneralizationProject:v.xx.dataTaobaoProject,params:{id:e.id,businessType:""+g._.Taobao},query:{dateType:""+o.value,dateValue:s.value,projectName:e.title}})},_=()=>{l.value=i.value};return{activeIndex:n,handleCheckTab:u,currentDate:c,selectedDateType:o,viewDetail:p,project_id:i,onEnterPressSearch:_,...a}}}),G=b,X=(0,d.Z)(G,n,i,!1,null,"06a2a588",null),L=X.exports},87939:function(e,t,a){var n,i;a.d(t,{_:function(){return n},o:function(){return i}}),function(e){e[e["Marketing"]=1]="Marketing",e[e["Taobao"]=2]="Taobao",e[e["Douyin"]=3]="Douyin",e[e["Base"]=4]="Base",e[e["Mcn"]=5]="Mcn",e[e["Area"]=6]="Area"}(n||(n={})),function(e){e[e["Summary"]=0]="Summary",e[e["Gmv"]=1]="Gmv",e[e["LiveDuration"]=2]="LiveDuration",e[e["GmvPercent"]=3]="GmvPercent",e[e["OperatingAmount"]=4]="OperatingAmount",e[e["CommissionAmount"]=5]="CommissionAmount",e[e["Roi"]=6]="Roi",e[e["AnchorCount"]=7]="AnchorCount",e[e["PromoteAmountTop"]=8]="PromoteAmountTop",e[e["NetSalesAmount"]=9]="NetSalesAmount",e[e["IncomeAmount"]=10]="IncomeAmount",e[e["AvgStay"]=11]="AvgStay",e[e["PromoteAmount"]=12]="PromoteAmount",e[e["IncomeAmountPercent"]=13]="IncomeAmountPercent",e[e["LiveCount"]=14]="LiveCount",e[e["MaxUv"]=15]="MaxUv",e[e["NewFansCount"]=16]="NewFansCount"}(i||(i={}))},99575:function(e,t,a){a.d(t,{j_:function(){return fe},QC:function(){return ve},Av:function(){return E},e_:function(){return N},YM:function(){return K},RG:function(){return J},Ze:function(){return j},$1:function(){return g},hi:function(){return le},Fy:function(){return ce},hx:function(){return O},hU:function(){return R},_Z:function(){return C},vB:function(){return w},Fr:function(){return D},wT:function(){return L},BP:function(){return X},Qd:function(){return z},s0:function(){return U},Xj:function(){return H},nM:function(){return k},ki:function(){return B},f:function(){return V},Hk:function(){return W},mX:function(){return oe},GU:function(){return se},xU:function(){return I},tG:function(){return Q},OZ:function(){return $},GX:function(){return P},j1:function(){return Z},p8:function(){return q},zG:function(){return pe},A0:function(){return ue},nA:function(){return Y},wf:function(){return ke},tF:function(){return b},vN:function(){return G},Yf:function(){return _e},R5:function(){return M},Te:function(){return S},GH:function(){return T},N1:function(){return ae},NE:function(){return ne},v3:function(){return ie},th:function(){return x},Bm:function(){return te},aH:function(){return ee},$V:function(){return A},F7:function(){return re},LC:function(){return ye},PG:function(){return me},Be:function(){return be},Cb:function(){return F},p4:function(){return je},gV:function(){return Ge},ji:function(){return ge},Zn:function(){return xe},v6:function(){return Te},mm:function(){return Ae},yD:function(){return he},Zw:function(){return Me},G2:function(){return Ce},_d:function(){return Xe},R0:function(){return De},y2:function(){return Le},mW:function(){return we},mI:function(){return Ye},LQ:function(){return de}});a(21703);var n=a(76012),i=(a(48606),a(64236)),r=a(42963),o=a(74750);const s="/api/shop_live/query_ctr_projects",l="/api/shop_live/query_ctr_shop_live",c="/api/shop_live/query_project_shifts",u="/api/shop_live/query_shift_group_ctr_shop_live",p="/api/shop_live/save_shop_live_live_screenshot",_="/api/shop_live/query_shop_live_statistical_trends",d="/api/shop_live/operating/project_trade_funnel",m="/api/shop_live/operating/project_flow_sunburst",y="/api/shop_live/operating/department_project_statistics_detail",v="/api/shop_live/operating/query_project_top_products",f="/api/shop_live/operating/query_department_project_statistics",h="/api/shop_live/operating/get_last_update_time",g=async e=>(0,n.dX)("/api/data_center/query_common_project",{params:{...(0,i.jG)(e)}}),j=async e=>(0,n.dX)("/api/shop_live/query_project_douyin_by_date",{params:{...(0,i.jG)(e)}}),b=async e=>(0,n.dX)("/api/data_center/query_shop_live_project",{params:{...(0,i.jG)(e)}}),G=async e=>(0,n.dX)("/api/data_center/query_cooperation",{params:{...(0,i.jG)(e)}}),X=async e=>(0,n.dX)("/api/data_center/table",{params:{...(0,i.jG)(e)}}),L=async e=>(0,n.dX)("/api/data_center/chart",{params:{...(0,i.jG)(e)}}),D=async()=>(0,n.dX)("/api/data_center/customer_supplier_manage_table"),Y=async()=>(0,n.dX)("/api/data_center/invoice_apply_table"),w=async()=>(0,n.dX)("/api/data_center/customer_pay_apply_table"),C=async()=>(0,n.dX)("/api/data_center/contract_apply_table"),A=async()=>(0,n.dX)("/api/data_center/system_login_table"),T=async()=>(0,n.dX)("/api/data_center/settlement_table"),M=async()=>(0,n.dX)("/api/data_center/project_table"),x=async()=>(0,n.dX)("/api/data_center/shop_live_table"),k=async e=>(0,n.dX)("/api/shop_live/douyin_category_pie_chart",{params:{...(0,i.jG)(e)}}),q=async e=>(0,n.dX)("/api/shop_live/douyin_old_category_pie_chart",{params:{...(0,i.jG)(e)}}),$=async e=>(0,n.dX)("/api/shop_live/douyin_item_pie_chart",{params:{...(0,i.jG)(e)}}),S=async()=>(0,n.dX)("/api/shop_live/query_douyin_report_projects"),P=async e=>e.is_from_project?e.room_id&&""!==e.room_id?(0,n.dX)("/api/shop_live/project_data/douyin_item_report_by_room",{params:{...(0,i.jG)(e)}}):(0,n.dX)("/api/shop_live/project_data/douyin_item_report",{params:{...(0,i.jG)(e)}}):e.room_id&&""!==e.room_id?(0,n.dX)("/api/shop_live/operating/douyin_item_report_by_room",{params:{...(0,i.jG)(e)}}):(0,n.dX)("/api/shop_live/douyin_item_report",{params:{...(0,i.jG)(e)}}),B=async e=>(0,n.dX)("/api/shop_live/douyin_category_report",{params:{...(0,i.jG)(e)}}),V=async e=>(0,n.dX)("/api/shop_live/douyin_category_timeline",{params:{...(0,i.jG)(e)}}),Z=async e=>(0,n.dX)("/api/shop_live/douyin_item_timeline",{params:{...(0,i.jG)(e)}}),Q=async e=>(0,n.dX)("/api/shop_live/douyin_hot_item_report",{params:{...(0,i.jG)(e)}}),N=async e=>(0,n.dX)("/api/shop_live/check_project_douyin_access",{params:{...(0,i.jG)(e)}}),W=async e=>(0,n.dX)("/api/shop_live/query_douyin_competitive_item_categories",{params:{...(0,i.jG)(e)}}),O=async()=>(0,n.dX)("/api/shop_live/query_douyin_competitive_shops"),z=async e=>(0,n.dX)("/api/shop_live/query_douyin_competitive_items",{params:{...(0,i.jG)(e)}}),E=async e=>(0,n.dX)("/api/shop_live/query_douyin_competitive_items_total",{params:{...(0,i.jG)(e)}}),F=e=>(0,n.SO)("/api/shop_live/update_douyin_competitive_shops",{...(0,i.jG)({shop_names:e})}),R=async e=>(0,n.dX)("/api/shop_live/query_douyin_competitive_item_timeline",{params:{...(0,i.jG)(e)}}),I=async()=>(0,n.dX)("/api/data_center/douyin_composite_categories"),U=async e=>(0,n.dX)("/api/data_center/douyin_category_image",{params:{...(0,i.jG)(e)}}),H=async e=>(0,n.dX)("/api/data_center/douyin_category_image_detail",{params:{...(0,i.jG)(e)}}),J=async e=>(0,n.dX)("/api/shop_live/douyin_year_season_report",{params:{...(0,i.jG)(e)}}),K=async e=>(0,n.dX)("/api/shop_live/douyin_season_year_report",{params:{...(0,i.jG)(e)}}),ee=async e=>(0,n.dX)("/api/shop_live/query_douyin_tiange_category",{params:{...(0,i.jG)(e)}}),te=async e=>e.is_from_project?(0,n.dX)("/api/shop_live/project_data/douyin_tiange_category_report",{params:{...(0,i.jG)(e)}}):(0,n.dX)("/api/shop_live/douyin_tiange_category_report",{params:{...(0,i.jG)(e)}}),ae=async e=>(0,n.dX)("/api/shop_live/list_douyin_season",{params:{...(0,i.jG)(e)}}),ne=async e=>(0,n.dX)("/api/shop_live/list_douyin_season_year",{params:{...(0,i.jG)(e)}}),ie=async e=>e.room_id&&""!==e.room_id?e.is_from_project?(0,n.dX)("/api/shop_live/project_data/query_douyin_tiange_category_by_room",{params:{...(0,i.jG)(e)}}):(0,n.dX)("/api/shop_live/operating/query_douyin_tiange_category_by_room",{params:{...(0,i.jG)(e)}}):(0,n.dX)("/api/shop_live/query_douyin_tiange_category",{params:{...(0,i.jG)(e)}}),re=async e=>(0,n.dX)("/api/shop_live/douyin_contrast_category_timeline",{params:{...(0,i.jG)(e)}}),oe=async e=>(0,n.dX)("/api/data_center/get_douyin_completion_schedule_detail",{params:{...(0,i.jG)(e)}}),se=async e=>(0,n.dX)("/api/data_center/query_douyin_completion_schedule_trend",{params:{...(0,i.jG)(e)}}),le=async e=>(0,n.dX)("/api/shop_live/query_douyin_competitive_analysis",{params:{...(0,i.jG)(e)}}),ce=async e=>(0,n.dX)("/api/shop_live/query_douyin_competitive_analysis_detail",{params:{...(0,i.jG)(e)}}),ue=async e=>(0,n.dX)("/api/shop_live/query_feigua_hot_item_project",{params:{...(0,i.jG)(e)}}),pe=async e=>(0,n.dX)("/api/data_center/hot_item",{params:{...(0,i.jG)(e)}}),_e=async e=>(0,n.dX)("/api/data_center/feigua_monitor_config",{params:{...(0,i.jG)(e)}}),de=e=>(0,n.SO)("/api/data_center/feigua_monitor_config",{...(0,i.jG)(e)}),me=async(e,t=!1)=>t?(0,n.dX)("/api/data_center/hot_style_every_month",{params:{...(0,i.jG)(e)}}):(0,n.dX)("/api/data_center/hot_style_every_week",{params:{...(0,i.jG)(e)}}),ye=async()=>(0,n.dX)("/api/data_center/tiange_douyin_category",{params:{...(0,i.jG)({level:3})}}),ve=e=>{const t=(0,i.jG)(e),a=r.stringify(t),n=(0,o.LP)();window.open(`https://data.goumee.com/api/shop_live/export_douyin_tiange_category_report?${a}&Authorization=${n}`)},fe=e=>{if(e.room_id&&""!==e.room_id){const t=(0,o.LP)();if(e.is_from_project){e.is_from_project=void 0;const a=(0,i.jG)(e),n=r.stringify(a);window.open(`https://data.goumee.com/api/shop_live/project_data/export_douyin_item_report_by_room?${n}&Authorization=${t}`)}else{e.is_from_project=void 0;const a=(0,i.jG)(e),n=r.stringify(a);window.open(`https://data.goumee.com/api/shop_live/operating/export_douyin_item_report_by_room?${n}&Authorization=${t}`)}}else{e.is_from_project=void 0,e.room_id=void 0;const t=(0,i.jG)(e),a=r.stringify(t),n=(0,o.LP)();window.open(`https://data.goumee.com/api/shop_live/export_douyin_item_report?${a}&Authorization=${n}`)}},he=async()=>(0,n.dX)(c),ge=async e=>(0,n.dX)(l,{params:{...(0,i.jG)(e)}}),je=e=>(0,n.SO)("/api/shop_live/save_shift",{...(0,i.jG)(e)}),be=e=>(0,n.SO)("/api/shop_live/save_shop_live_change_tips",{...e}),Ge=e=>(0,n.dX)(s,{params:{...(0,i.jG)(e??{})}}),Xe=e=>(0,n.dX)(u,{params:{...(0,i.jG)(e)}}),Le=(e,t)=>(0,n.SO)(p,{...(0,i.jG)({id:e,live_screenshot:t})}),De=e=>(0,n.dX)(_,{params:{...(0,i.jG)(e)}}),Ye=async e=>(0,n.dX)("/api/shop_live/query_douyin_category_competitive_items_total",{params:{...(0,i.jG)(e)}}),we=async(e,t)=>(0,n.dX)("/api/shop_live/get_dp_shop_orders_presell_stat_day",{params:{...(0,i.jG)({...e,...t})}}),Ce=async e=>(0,n.dX)(d,{params:{...(0,i.jG)({...e})}}),Ae=async e=>(0,n.dX)(m,{params:{...(0,i.jG)({...e})}}),Te=async e=>(0,n.dX)(y,{params:{...(0,i.jG)({...e})}}),Me=async e=>(0,n.dX)(v,{params:{...(0,i.jG)({...e})}}),xe=async e=>(0,n.dX)(f,{params:{...(0,i.jG)({...e})}}),ke=async()=>(0,n.dX)(h)},44928:function(e,t,a){a.d(t,{t:function(){return i}});var n=a(86834);const i=()=>{const e=new Proxy({},{get(e,t){return Reflect.get(n.Z,t)}});return e}}}]);