"use strict";(self["webpackChunkgoumee_star_temp"]=self["webpackChunkgoumee_star_temp"]||[]).push([[5312],{10972:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"data-center-collect flex-auto tg-card"},[a("div",{staticClass:"collect-select"},[a("select-date",{on:{selectDate:e.selectDate}}),a("data-switch",{attrs:{index:e.activeIndex},on:{checkATab:e.handleCheckTab}})],1),0===e.activeIndex?[a("data-center-list",{staticClass:"center-list-min-height",attrs:{list:e.dataList,loading:e.tableLoading,"current-date-type":e.selectedDateType}}),a("div",{staticClass:"related-project",staticStyle:{"margin-top":"16px"}},[a("div",{staticClass:"related-project-title"},[a("head-lines",{attrs:{title:"相关项目"}}),a("el-input",{staticStyle:{width:"182px"},attrs:{size:"mini",placeholder:"项目名称/编码","suffix-icon":"el-icon-search"},nativeOn:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onEnterPressSearch.apply(null,arguments)},click:function(t){return e.onEnterPressSearch.apply(null,arguments)}},model:{value:e.project_id,callback:function(t){e.project_id=t},expression:"project_id"}})],1),a("related-project",{attrs:{list:e.project_list_filter},on:{viewDetail:e.viewDetail}})],1)]:e._e(),1===e.activeIndex?a("data-center-chart",{attrs:{currentDate:e.currentDate}}):e._e()],2)},n=[],c=a(97434),s=a(86919),l=a(99824),i=a(60226),o=a(24536),u=a(41947),d=a(1763),p=a(44928),v=a(99575),_=a(87939);const f=e=>{const t=(0,c.ref)(!0),a=(0,c.ref)([]),r=async r=>{t.value=!0;const{data:n}=await(0,v.BP)(r);n.success?a.value=n.data.data:e.root.$message.error(n.message),t.value=!1};return{getData:r,tableLoading:t,dataList:a}};var m=(0,c.defineComponent)({components:{DataSwitch:s.Z,DataCenterList:i.Z,DataCenterChart:o.Z,SelectDate:l.Z,RelatedProject:u.Z},setup(e,t){const a=f(t),r=(0,c.ref)(0),n=(0,c.ref)([]),s=(0,c.ref)(""),l=(0,c.ref)(0),i=(0,c.ref)(""),o=(0,c.ref)(""),u=(0,c.ref)(null),m=(0,c.computed)((()=>n.value.filter((e=>!o.value||(!(!e.project_name||-1===e.project_name.indexOf(o.value))||!(!e.project_uid||-1===e.project_uid.indexOf(o.value))))))),h=e=>{r.value=e},j=(e,r)=>{l.value=e,i.value=r,a.getData({business_type:_._.Taobao,the_date:r}),u.value=r,(0,v.tF)({page_num:1,num:1e6,search_type:1,cooperation_type:1,business_type:_._.Taobao,end_date:r}).then((e=>{e.data.success?n.value=e.data.data.data.map((e=>(e.title=null===e.project_name||""===e.project_name?e.project_uid:e.project_name,e))):t.root.$message.error(e.data.message)}))},y=e=>{const a=(0,p.t)(),{meta:r}=a.currentRoute;t.root.$router.push({name:"/datacenter/overview"===r?.activePath?d.xx.dataGeneralizationProject:d.xx.dataTaobaoProject,params:{id:e.id,businessType:""+_._.Taobao},query:{dateType:""+l.value,dateValue:i.value,projectName:e.title}})},x=()=>{o.value=s.value};return{activeIndex:r,handleCheckTab:h,currentDate:u,selectDate:j,selectedDateType:l,viewDetail:y,project_id:s,onEnterPressSearch:x,project_list_filter:m,...a}}}),h=m,j=a(1001),y=(0,j.Z)(h,r,n,!1,null,"737e7bc4",null),x=y.exports}}]);