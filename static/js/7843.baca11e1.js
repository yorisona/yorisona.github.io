"use strict";(self["webpackChunkgoumee_star_temp"]=self["webpackChunkgoumee_star_temp"]||[]).push([[7843],{19397:function(e,t,a){a.d(t,{Z:function(){return x}});var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tg-marketing-project-form-dialog tg-dialog-vcenter"},[a("el-drawer",{staticClass:"tg-dialog-classic",attrs:{title:e.title,"close-on-click-modal":!1,"close-on-press-escape":!1,visible:e.visible,wrapperClosable:!1},on:{close:e.onCloseBtnClick}},[a("div",{staticClass:"tg-drawer-form-content"},[e.isEditForm?e._e():a("el-alert",{staticStyle:{color:"#ff7a36",height:"40px"},attrs:{closable:!1,title:"注意：已确认合作的在此创建项目，意向客户请由客户经理在销售管理板块创建跟进任务",type:"warning","show-icon":""}}),a("el-form",{ref:"formRef",attrs:{model:e.ProjectForm,rules:e.formRules,"label-position":"top",size:"small","label-width":"106px"}},[a("head-lines",{staticStyle:{margin:"10px 0px"},attrs:{title:"项目信息"}}),a("el-form-item",{staticClass:"one-item mgb-18",attrs:{label:"项目名称",prop:"cooperation_name"}},[a("el-input",{ref:"autoFocuseRef",attrs:{maxlength:"20",placeholder:"请输入项目名称"},model:{value:e.ProjectForm.cooperation_name,callback:function(t){e.$set(e.ProjectForm,"cooperation_name","string"===typeof t?t.trim():t)},expression:"ProjectForm.cooperation_name"}})],1),e.isEditForm?a("el-form-item",{staticClass:"two-item-left",attrs:{label:"公司名称",prop:"company_id"}},[a("el-select",{attrs:{disabled:e.isEditForm,placeholder:e.ProjectForm.company_name?e.ProjectForm.company_name:"--",size:"small"}})],1):a("el-form-item",{staticClass:"two-item-left mgb-18",attrs:{label:"公司名称",prop:"company_id"}},[a("el-select",{attrs:{filterable:"",remote:"","reserve-keyword":"",clearable:"",placeholder:"请输入并选择公司名称","remote-method":e.getAllCompanyName},on:{change:e.onCompanyIdChange},model:{value:e.ProjectForm.company_id,callback:function(t){e.$set(e.ProjectForm,"company_id",t)},expression:"ProjectForm.company_id"}},e._l(e.allCompanyName,(function(t,o){return a("el-option",{key:o,attrs:{label:t.company_name,value:t.id}},[a("span",[e._v(e._s(t.company_name))])])})),1)],1),e.isEditForm?a("el-form-item",{staticClass:"two-item-right",attrs:{label:"店铺名称",prop:"company_shop_id"}},[a("el-select",{attrs:{disabled:e.isEditForm,placeholder:e.ProjectForm.shop_name?e.ProjectForm.shop_name:"--",size:"small"}})],1):a("el-form-item",{staticClass:"two-item-right mgb-18",attrs:{label:"店铺名称",prop:"company_shop_id"}},[a("el-select",{attrs:{placeholder:"请选择店铺",size:"small"},on:{change:e.onShopIdChange},model:{value:e.ProjectForm.company_shop_id,callback:function(t){e.$set(e.ProjectForm,"company_shop_id",t)},expression:"ProjectForm.company_shop_id"}},e._l(e.allStoreName,(function(t,o){return a("el-option",{key:o,attrs:{label:t.shop_name,value:t.shop_id}},[a("span",[e._v(e._s(t.shop_name))])])})),1)],1),e.isEditForm?a("el-form-item",{staticClass:"two-item-left",attrs:{label:"品牌"}},[a("el-input",{attrs:{disabled:"",size:"small"},model:{value:e.new_brand_name,callback:function(t){e.new_brand_name=t},expression:"new_brand_name"}})],1):a("el-form-item",{staticClass:"two-item-left mgb-18",attrs:{label:"品牌"}},[a("el-input",{attrs:{disabled:""},model:{value:e.brand_name,callback:function(t){e.brand_name=t},expression:"brand_name"}})],1),e.isEditForm?a("el-form-item",{staticClass:"two-item-right",attrs:{label:"店铺类目"}},[a("el-input",{attrs:{disabled:"",size:"small"},model:{value:e.new_shop_cateogry_name,callback:function(t){e.new_shop_cateogry_name=t},expression:"new_shop_cateogry_name"}})],1):a("el-form-item",{staticClass:"two-item-right mgb-18",attrs:{label:"店铺类目"}},[a("el-input",{attrs:{disabled:""},model:{value:e.shop_category_name,callback:function(t){e.shop_category_name=t},expression:"shop_category_name"}})],1),a("el-form-item",{staticClass:"two-item-left mgb-18",attrs:{prop:"manager_id",label:"客户经理"}},[a("el-select",{attrs:{filterable:"",placeholder:"请输入并选择客户经理"},model:{value:e.ProjectForm.manager_id,callback:function(t){e.$set(e.ProjectForm,"manager_id",t)},expression:"ProjectForm.manager_id"}},e._l(e.CustomerManagerList,(function(t,o){return a("el-option",{key:o,attrs:{disabled:t.id===e.disabledManagerId,label:t.username,value:t.id}},[a("span",[e._v(e._s(t.username))])])})),1)],1),a("el-form-item",{staticClass:"two-item-right mgb-18",attrs:{label:"项目所属部门",prop:"feishu_department_id"}},[a("el-popover",{attrs:{placement:"bottom-start",trigger:"click",width:"267","popper-class":"marketing-department-tree-popper-class"}},[a("div",{staticClass:"repain-select",staticStyle:{display:"block"},attrs:{slot:"reference"},slot:"reference"},[a("el-input",{staticStyle:{color:"#999"},attrs:{value:e.ProjectForm.feishu_department_name,placeholder:"请选择项目所属部门",readonly:""},scopedSlots:e._u([{key:"suffix",fn:function(){return[a("i",{staticClass:"select-icon select-icon-user-add el-icon-arrow-down"})]},proxy:!0}])})],1),a("div",{staticClass:"department-tree"},[a("el-tree",{ref:"maketing_department_tree",attrs:{props:e.treeProps,"check-strictly":!0,"node-key":"id",data:e.feishuDepartmentList,"show-checkbox":"","default-checked-keys":e.default_checked_department_ids,"default-expanded-keys":e.default_checked_department_ids},on:{check:e.handleCheckChange}})],1)])],1),a("el-form-item",{staticClass:"two-item-left mgb-18",attrs:{label:"销售金额",prop:"sale_amount"}},[a("el-input",{attrs:{placeholder:"请输入销售金额"},on:{input:function(t){return e.inputPositiveNumber(t,"sale_amount")}},model:{value:e.ProjectForm.sale_amount,callback:function(t){e.$set(e.ProjectForm,"sale_amount",t)},expression:"ProjectForm.sale_amount"}},[a("span",{attrs:{slot:"append"},slot:"append"},[e._v("元")])])],1),a("el-form-item",{staticClass:"two-item-right mgb-18",attrs:{label:"合作类型",prop:"cooperation_type"}},[a("el-checkbox-group",{staticClass:"CooperationType-checkbox-group",model:{value:e.ProjectForm.cooperation_type,callback:function(t){e.$set(e.ProjectForm,"cooperation_type",t)},expression:"ProjectForm.cooperation_type"}},[a("el-checkbox",{staticClass:"CooperationType-checkbox",attrs:{label:1}},[e._v("直播")]),a("el-checkbox",{staticClass:"CooperationType-checkbox",attrs:{label:2}},[e._v("视频")]),a("el-checkbox",{staticClass:"CooperationType-checkbox",attrs:{label:3}},[e._v("图文")])],1)],1),a("el-form-item",{staticClass:"two-item-right mgb-18",attrs:{label:"是否收款",prop:"is_gather"}},[a("div",{staticStyle:{width:"246px"}},[a("el-radio-group",{staticStyle:{display:"inline-flex",height:"32px"},model:{value:e.ProjectForm.is_gather,callback:function(t){e.$set(e.ProjectForm,"is_gather",t)},expression:"ProjectForm.is_gather"}},[a("el-radio",{attrs:{label:1}},[e._v("是")]),a("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1)]),e.ProjectForm.is_gather?e._e():a("div",{staticClass:"one-item",staticStyle:{"margin-bottom":"18px",height:"90px",background:"#f7f8f9","border-radius":"2px",padding:"18px"}},[a("el-form-item",{attrs:{label:"回款日期",prop:"gather_date"}},[a("el-date-picker",{staticStyle:{width:"249px"},attrs:{type:"date",editable:!1,placeholder:"回款日期",format:"yyyy.MM.dd","value-format":"yyyy-MM-dd"},model:{value:e.ProjectForm.gather_date,callback:function(t){e.$set(e.ProjectForm,"gather_date",t)},expression:"ProjectForm.gather_date"}})],1)],1)],1),a("div",{staticClass:"tg-drawer-footer"},[a("tg-button",{attrs:{size:"small"},on:{click:e.onCloseBtnClick}},[e._v("取消")]),a("tg-button",{attrs:{size:"small",type:"primary"},on:{click:e.onSaveBtnClick}},[e._v("保存")])],1)],1)]),a("tg-mask-loading",{attrs:{visible:e.saveLoading,content:"  正在保存，请稍候..."}})],1)},r=[],n=(a(21703),a(26699),a(53451)),i=a.n(n),l=a(97434),s=a(64236),c=a(58061),u=a(3346),p=a(86863),m=a(29625),d=a(80391),_=a(6933),v=a.n(_),f=a(61282),g=a(41572),h=a(3293),y=a(26895);const{debounce:b}=i(),C=e=>{const t=(0,l.ref)(null),a=(0,l.ref)([]),o=(0,l.ref)([]),r=(0,l.ref)([]),n=(0,l.ref)({cooperation_name:"",company_id:"",company_shop_id:"",company_name:"",shop_name:"",customer_id:"",manager_id:"",cooperation_type:[],sale_amount:"",uv:"",pv:"",gmv:"",budget:"",note:"",remark:"",is_gather:1,gather_date:"",plan:[],feishu_department_id:void 0,feishu_department_name:void 0}),i=(0,l.ref)({cooperation_name:[{required:!0,message:"请输入项目名称",trigger:"blur"}],company_id:[{required:!0,message:"请选择客户名称",trigger:"change"}],company_shop_id:[{required:!0,message:"请选择店铺",trigger:"change"}],sale_amount:[{required:!0,message:"请输入销售金额",trigger:"blur"},{validator:(e,t,a)=>{t<=0?a(new Error("请输入正数")):a()},trigger:"blur"}],cooperation_type:[{required:!0,message:"请选择合作类型",trigger:"change"}],is_gather:[{required:!0,message:"请选择是否回款",trigger:"blur"}],gather_date:[{required:!0,message:"请选择回款日期",trigger:"blur"}],manager_id:[{required:!0,message:"请输入客户经理",trigger:"change"}],customer_id:[{required:!0,message:"请输入客户名称",trigger:"change"}],feishu_department_id:[{required:!0,message:"请选择项目所属部门",trigger:"change"}]});(0,l.watch)((()=>e.visible),(e=>{e&&(c(),t.value?.resetFields())}));const s=(0,l.ref)([]),c=()=>{n.value.company_id="",n.value.cooperation_name="",n.value.customer_id="",n.value.company_shop_id="",n.value.manager_id="",n.value.plan=[],n.value.cooperation_type=[],n.value.sale_amount="",n.value.uv="",n.value.pv="",n.value.gmv="",n.value.budget="",n.value.note="",n.value.remark="",n.value.is_gather=1,n.value.gather_date="",s.value=[],a.value=[],o.value=[],r.value=[],n.value.feishu_department_id=void 0,n.value.feishu_department_name=void 0},p=async e=>{const{data:t}=await(0,u.Ln)({company_name:e,verify_status:1});o.value=t.success?t.data.data:[]},m=e=>{n.value.company_id=e,n.value.company_shop_id="";for(let t=0;t<o.value.length;t++)o.value[t].id===e&&(r.value=o.value[t].shops_info??[])},d=e=>{n.value.company_shop_id=e};return{CustomerManagerList:a,uploadedFileList:s,formRef:t,formRules:i,ProjectForm:n,resetProjectForm:c,getAllCompanyName:p,allCompanyName:o,onCompanyIdChange:m,allStoreName:r,onShopIdChange:d}};var j=(0,l.defineComponent)({name:"TgMarketingProjectDialog",props:{visible:{type:Boolean,default:!1},title:{type:String,default:"新增场次"},project:{type:Object,required:!1},isEditForm:{type:Boolean,default:!1,required:!1}},setup(e,t){const a=new Map([["image/jpeg","picture"],["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","excel"],["application/vnd.openxmlformats-officedocument.wordprocessingml.document","word"],["application/msword","word"],["application/pdf","pdf"],["xlsx","excel"],["docx","word"],["doc","word"],["pdf","pdf"],["jpeg","picture"]]),o=(0,l.ref)(""),r=(0,l.ref)(""),n=(0,l.ref)(void 0),i=(0,l.ref)(!1),u=(0,l.ref)([]),_=(0,l.ref)(void 0),j=(0,l.computed)((()=>S.value.feishu_department_id?[S.value.feishu_department_id]:[])),k={label:"name",children:"sons"},{CustomerManagerList:P,uploadedFileList:w,formRef:x,formRules:F,ProjectForm:S,resetProjectForm:q,getAllCompanyName:M,onCompanyIdChange:$,allCompanyName:Z,allStoreName:E,onShopIdChange:z}=C(e),D=()=>{q(),t.emit("dialog:close")},G=async()=>{if(i.value)return;const e=await new Promise((e=>x.value?.validate((t=>e(t)))));if(!e)return;if(S.value.uv&&parseInt(S.value.uv,10)<=0)return void t.root.$message.error("UV必需为正整数");if(S.value.pv&&parseInt(S.value.pv,10)<=0)return void t.root.$message.error("PV必需为正整数");const a={cooperation_name:S.value.cooperation_name,company_id:S.value.company_id,company_shop_id:S.value.company_shop_id,company_name:"",customer_id:S.value.customer_id,manager_id:S.value.manager_id,cooperation_type:S.value.cooperation_type,sale_amount:S.value.sale_amount,uv:S.value.uv,pv:S.value.pv,gmv:S.value.gmv,budget:S.value.budget,note:S.value.note,remark:S.value.remark,is_gather:S.value.is_gather,gather_date:S.value.gather_date,plan:S.value.plan,feishu_department_id:S.value.feishu_department_id,feishu_department_name:void 0};S.value.cooperation_id&&(a.cooperation_id=S.value.cooperation_id),i.value=!0;const[{data:o},r]=await Promise.all([await(0,c.QC)(a),await(0,s._v)(200)]);i.value=!1,o.success?(t.root.$message.success(o.message),t.emit("dialog:close",!0),t.root.$store.dispatch("marketing/setProjectInfo",-1)):t.root.$message.error(o.message??"项目保存失败")},I=b(G,200),L=(0,l.ref)([]),R=(0,l.computed)((()=>E.value.find((e=>{if(S.value.company_shop_id)return e.shop_id===S.value.company_shop_id})))),O=(0,l.computed)((()=>{const e=R.value?.brand_name;return e||"--"})),N=(0,l.computed)((()=>{const e=m.Bs.get(R.value?.category??-1);return e||"--"})),X=(0,l.ref)(-1),Y=async()=>{const{data:t}=await(0,p.pc)({roles:"1008",business_type:m.WD.marketing});P.value=t.success?t.data:[];const a=e.project?.manager_id;a&&(P.value.map((e=>e.id.toString())).includes(a.toString())||(X.value=a,P.value.push({id:a,username:e.project?.manager_name??"--"})))},A=async e=>{const o=new FormData,r=e.file.name;o.append("file",e.file,r),o.append("type","plan");const n=await(0,d.$)(o);if(n.data.success){const t=r.split(".")[r.split(".").length-1],o=""!==e.file.type?e.file.type:t;w.value.push({name:e.file.name,type:e.file.type,icon:a.get(o)??"picture",size:e.file.size,path:n.data.data.source});const i=w.value.map((e=>e.path));S.value.plan=i}else t.root.$message({type:"warning",message:n.data.message??"上传失败，稍后重试",showClose:!0,duration:3e3})},B=e=>{w.value.splice(e,1);const t=w.value.map((e=>e.path));S.value.plan=t};(0,l.watch)((()=>e.visible),(t=>{if(t)if(_.value?.setCheckedKeys([]),x.value?.resetFields(),Y(),void 0!==e.project){const t=(0,l.computed)((()=>{const t=m.Bs.get(e.project?.category??-1);return t||"--"}));if(r.value=t.value,o.value=e.project.brand_name?e.project.brand_name:"--",S.value.cooperation_id=e.project.cooperation_id,S.value.company_name=e.project.company_name,S.value.company_id=e.project.company_id,S.value.company_shop_id=e.project.customer_id,S.value.shop_name=e.project.shop_name,S.value.cooperation_name=e.project.cooperation_name,S.value.cooperation_type=e.project.cooperation_type,S.value.is_gather=e.project.is_gather,S.value.sale_amount=e.project.sale_amount?.toString(),S.value.feishu_department_id=e.project.feishu_department_id,S.value.feishu_department_name=e.project.feishu_department_name,"0"===S.value.sale_amount&&(S.value.sale_amount=""),S.value.budget=e.project.budget?.toString(),"0"===S.value.budget&&(S.value.budget=""),S.value.uv=e.project.uv?.toString(),"0"===S.value.uv&&(S.value.uv=""),S.value.pv=e.project.pv?.toString(),"0"===S.value.pv&&(S.value.pv=""),S.value.gmv=e.project.gmv?.toString(),"0"===S.value.gmv&&(S.value.gmv=""),S.value.note=e.project.note,S.value.remark=e.project.remark,S.value.manager_id=e.project.manager_id,S.value.plan=e.project.plan,S.value.plan?.map((e=>{const t=e.split("/")[e.split("/").length-1],o=t.split(".")[t.split(".").length-1],r=o;w.value.push({name:t,type:r,icon:a.get(r)??"picture",path:e})})),e.project.gather_date)S.value.gather_date=v()(1e3*e.project.gather_date).format("YYYY-MM-DD");else{const e=new Date,t=e.setDate(e.getDate()+45);S.value.gather_date=v()(t).format("YYYY-MM-DD")}}else{const e=new Date,t=e.setDate(e.getDate()+45);S.value.gather_date=v()(t).format("YYYY-MM-DD"),(0,l.nextTick)((()=>{n.value?.focus()}))}}));const T=(e,t)=>{const a=(0,f.nA)(e);"gmv"===t?S.value.gmv=a:"budget"===t?S.value.budget=a:"sale_amount"===t&&(S.value.sale_amount=a)},V=e=>e.replace(/\D/g,"").replace(g.Pj,""),W=(e,t)=>{const a=V(e);"uv"===t?S.value.uv=a:"pv"===t&&(S.value.pv=a)},H=async()=>{const e=await(0,h.o1)(),t=e.data.data.data;(0,y.$S)(t),u.value=e.data.data.data};H();const Q=e=>{_.value?.setCheckedKeys([]),e.id===S.value.feishu_department_id?(S.value.feishu_department_id=void 0,S.value.feishu_department_name=void 0):(S.value.feishu_department_id=e.id,S.value.feishu_department_name=e.name,_.value?.setCheckedKeys([e.id]))};return{autoFocuseRef:n,disabledManagerId:X,inputPositiveNumber:T,inputPositiveInteger:W,handleRemoveFileClick:B,uploadedFileList:w,uploadFileHandler:A,brand_name:O,shop_category_name:N,CustomerList:L,CustomerManagerList:P,saveLoading:i,formRef:x,formRules:F,ProjectForm:S,onCloseBtnClick:D,onSaveBtnClick:I,getAllCompanyName:M,onCompanyIdChange:$,allCompanyName:Z,allStoreName:E,onShopIdChange:z,new_brand_name:o,new_shop_cateogry_name:r,feishuDepartmentList:u,maketing_department_tree:_,handleCheckChange:Q,treeProps:k,default_checked_department_ids:j}}}),k=j,P=a(1001),w=(0,P.Z)(k,o,r,!1,null,null,null),x=w.exports},27843:function(e,t,a){a.r(t),a.d(t,{default:function(){return P}});var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tg-marketing-project-page"},[a("tg-card",{staticClass:"flex-none",attrs:{padding:[18,18,6,18]},on:{"rect:update":e.onTopCardRectUpdate}},[a("el-form",{attrs:{size:"small","show-message":!1,"label-width":"70px"}},[a("div",{staticClass:"filter-form-div"},[a("div",{staticClass:"filter-form-item",staticStyle:{"min-width":"314px"}},[a("el-form-item",{attrs:{label:"项目搜索："}},[a("el-input",{staticClass:"input-with-select",staticStyle:{"min-width":"244px"},attrs:{clearable:"",placeholder:"请输入"+e.search_value_type},nativeOn:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.reload.apply(null,arguments)}},model:{value:e.queryForm.search_value,callback:function(t){e.$set(e.queryForm,"search_value",t)},expression:"queryForm.search_value"}},[a("el-select",{staticStyle:{width:"100px"},attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:e.queryForm.search_type,callback:function(t){e.$set(e.queryForm,"search_type",t)},expression:"queryForm.search_type"}},[a("el-option",{attrs:{label:"项目名称",value:1}}),a("el-option",{attrs:{label:"客户名称",value:2}}),a("el-option",{attrs:{label:"项目编号",value:3}}),a("el-option",{attrs:{label:"客户经理",value:4}}),a("el-option",{attrs:{label:"执行AE",value:5}})],1)],1)],1)],1),a("div",{staticClass:"filter-form-item"},[a("el-form-item",{attrs:{label:"项目阶段："}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:""},model:{value:e.queryForm.cooperation_status,callback:function(t){e.$set(e.queryForm,"cooperation_status",t)},expression:"queryForm.cooperation_status"}},[a("el-option",{attrs:{label:"全部",value:""}}),a("el-option",{attrs:{label:"确定合作",value:2}}),a("el-option",{attrs:{label:"执行项目",value:3}}),a("el-option",{attrs:{label:"执行结束",value:4}})],1)],1)],1),a("div",{staticClass:"filter-form-item"},[a("el-form-item",{attrs:{label:"合作类型："}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:""},model:{value:e.queryForm.cooperation_type,callback:function(t){e.$set(e.queryForm,"cooperation_type",t)},expression:"queryForm.cooperation_type"}},[a("el-option",{attrs:{label:"全部",value:""}}),a("el-option",{attrs:{label:"直播",value:1}}),a("el-option",{attrs:{label:"视频",value:2}}),a("el-option",{attrs:{label:"图文",value:3}})],1)],1)],1),a("div",{staticClass:"filter-form-item"},[a("el-form-item",{attrs:{"label-width":"0"}},[a("div",{staticClass:"filter-form-item-btn"},[a("tg-button",{attrs:{type:"primary"},on:{click:e.onQuerySearchClick}},[e._v("查询")]),a("tg-button",{staticClass:"mgl-12",on:{click:e.onQueryResetClick}},[e._v("重置")])],1)])],1)])])],1),a("tg-card",e._b({directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"mgt-12",class:e.cardFlexClass,attrs:{padding:[12,18,0]},on:{"rect:update":e.onRectUpdate}},"tg-card",e.cardProps,!1),[e.Permission.canAdd?a("tg-button-line",[a("tg-button",{attrs:{type:"primary",icon:"ico-btn-add"},on:{click:function(t){return e.toggleProjectModalVisible(!0)}}},[e._v("新增项目")])],1):e._e(),e.Permission.canViewList?a("el-table",e._b({class:e.Permission.canAdd?"mgt-12":"mgt-6",attrs:{stripe:"",data:e.data},on:{"row-click":e.onRowClick},scopedSlots:e._u([{key:"empty",fn:function(){return[a("empty-common",{attrs:{"detial-text":"暂无记录"}})]},proxy:!0}],null,!1,2465064066)},"el-table",e.tableProps,!1),e._l(e.columns,(function(t,o){return a("el-table-column",e._b({key:o},"el-table-column",t,!1))})),1):e._e(),e.total>0&&e.Permission.canViewList?a("el-pagination",{staticStyle:{margin:"8px 0"},attrs:{"current-page":e.queryForm.page_num,"page-sizes":[10,20,50,100],"page-size":e.queryForm.num,layout:"total, prev, pager, next, sizes, jumper",total:e.total},on:{"update:currentPage":function(t){return e.$set(e.queryForm,"page_num",t)},"update:current-page":function(t){return e.$set(e.queryForm,"page_num",t)},"current-change":e.handleCurrentChange,"size-change":e.handlePageSizeChange}}):e._e()],1),a("MarketingProjectDialog",{attrs:{title:e.ProjectFormTitle,visible:e.ProjectFormVisible},on:{"dialog:close":e.onProjectFormModalClose}})],1)},r=[],n=a(97434),i=a(1763),l=a(58061),s=a(76455),c=a(64236),u=a(19397),p=a(21757),m=a(78902),d=a(43847),_=a(58302),v=a(52140),f=a(30845),g=a(67910),h=a(61282);const y=e=>{const t=(0,n.ref)(!1),a=(0,n.ref)("新增项目"),o=(e=!1)=>{t.value=e},r=(0,n.ref)([]),u=(0,n.ref)(0),p=(0,n.ref)(!1),m=async t=>{p.value=!0;const[{data:a}]=await Promise.all([await(0,l.LK)(t),await(0,c._v)(500)]);p.value=!1,a.success?(r.value=a.data.data,u.value=a.data.total):e.root.$message({type:"warning",message:a.message??"查询失败，稍后重试",duration:2e3,showClose:!0})},d=e=>e.cooperation_uid,_=(e,t)=>{const a=e.cooperation_name||"--",{is_folded:o,folded_text:r}=(0,h.zb)(a,12);return t||!o?r:(0,n.h)("el-popover",{props:{placement:"right",trigger:"hover",content:a}},[(0,n.h)("span",{slot:"reference"},[r])])},v=(e,t)=>{const a=e.shop_name||"--",{is_folded:o,folded_text:r}=(0,h.zb)(a,12);return t||!o?r:(0,n.h)("el-popover",{props:{placement:"right",trigger:"hover",content:a}},[(0,n.h)("span",{slot:"reference"},[r])])},f=(e,t)=>{const a=e.brand_name||"--",{is_folded:o,folded_text:r}=(0,h.zb)(a,12);return t||!o?r:(0,n.h)("el-popover",{props:{placement:"right",trigger:"hover",content:a}},[(0,n.h)("span",{slot:"reference"},[r])])},y=(0,g.zY)(r,"店铺名称",f),b=(e,t)=>{const a=e.company_name||"--",{is_folded:o,folded_text:r}=(0,h.zb)(a,12);return t||!o?r:(0,n.h)("el-popover",{props:{placement:"right",trigger:"hover",content:a}},[(0,n.h)("span",{slot:"reference"},[r])])},C=(e,t)=>{const a=e.feishu_department_name||"--",{is_folded:o,folded_text:r}=(0,h.zb)(a,12);return t||!o?r:(0,n.h)("el-popover",{props:{placement:"right",trigger:"hover",content:a}},[(0,n.h)("span",{slot:"reference"},[r])])},j=(e,t)=>{const a=e.ae.length?e.ae.map((e=>e.ae_name)).join("/"):"--",{is_folded:o,folded_text:r}=(0,h.zb)(a,12);return t||!o?r:(0,n.h)("el-popover",{props:{placement:"top",trigger:"hover"}},[(0,n.h)("div",{slot:"reference",class:"line-clamp-1"},[r]),(0,n.h)("div",{class:"ae-popever-list"},[e.ae.map((e=>(0,n.h)("div",{class:"item"},[e.ae_name])))])])},k=(0,g.zY)(r,"执行AE",j),P=(0,n.computed)((()=>[{label:"项目编号",property:"cooperation_uid",fixed:"left",minWidth:150,formatter:d},{label:"项目名称",property:"cooperation_name",fixed:"left",minWidth:180,formatter:e=>_(e,!1)},{label:"公司名称",property:"shop_name",minWidth:180,formatter:e=>b(e,!1)},{label:"所属部门",align:"center",property:"shop_name",minWidth:150,formatter:e=>C(e,!1)},{label:"店铺名称",property:"shop_name",minWidth:180,formatter:e=>v(e,!1)},{label:"店铺品牌",property:"shop_name",minWidth:y.value+10,formatter:e=>f(e,!1)},{label:"项目阶段",property:"cooperation_status",minWidth:110,align:"center",formatter:e=>s.tn.get(e.cooperation_status)??""},{label:"客户经理",property:"manager_name",minWidth:100,align:"center"},{label:"执行AE",property:"ae",minWidth:k.value,align:"center",formatter:e=>j(e,!1)}])),w=(t,a)=>{e.root.$router.push({name:i.Z8.project.detail,params:{id:`${t.cooperation_id}`}})};return{ProjectFormTitle:a,ProjectFormVisible:t,toggleProjectModalVisible:o,columns:P,data:r,total:u,loading:p,loadDataList:m,onRowClick:w}};var b=(0,n.defineComponent)({name:"TgMarketingProject",components:{MarketingProjectDialog:u.Z},setup(e,t){const a="console"===t.root.$router.currentRoute.query.source,o=(0,d.Pc)(),r=(0,n.ref)({search_type:a?5:1,search_value:a?o.value.username:"",cooperation_status:a?3:"",cooperation_type:"",page_num:1,num:20}),i=(0,n.computed)((()=>{const e=new Map([[1,"项目名称"],[2,"客户名称"],[3,"项目编号"],[4,"客户经理"],[5,"AE名称"]]);return""!==r.value.search_type?e.get(r.value.search_type??1):""})),l=y(t),s=async(e=!0)=>{e&&(r.value.page_num=1);const{search_type:t,search_value:a,cooperation_status:o,cooperation_type:n,...i}=r.value,s={search_type:(0,f.f)(t),search_value:""===t?void 0:a,cooperation_status:(0,f.f)(o),cooperation_type:(0,f.f)(n),...i};await l.loadDataList(s)},c=()=>{s()},u=()=>{r.value.search_type=1,r.value.search_value="",r.value.cooperation_status="",r.value.cooperation_type="",r.value.page_num=1,r.value.num=20},g=async e=>{l.toggleProjectModalVisible(!1),e&&await s()},h=e=>{r.value.page_num=e,s(!1)},b=e=>{r.value.num=e,s()},C=()=>{u(),s()},j=(0,n.computed)((()=>{const e=(0,p.kG)(m.HN.marketing_project_view),t=(0,p.kG)(m.HN.marketing_project_save);return{canAdd:t,canViewList:e}})),k=32,P=34,w=36,x=31,F=(0,n.ref)(0),S=e=>{F.value=e.height},q=(0,_.Z)({compensation:(0,n.computed)((()=>k+P+w+x)),fixedBlockHeightRefs:[F],tableMinHeight:100,pagename:"marketing_project"});return(0,n.onActivated)((()=>{(0,v.S)()})),{Permission:j,handleCurrentChange:h,handlePageSizeChange:b,onProjectFormModalClose:g,onQuerySearchClick:c,onQueryResetClick:C,queryForm:r,search_value_type:i,reload:s,onTopCardRectUpdate:S,...q,...l}},async mounted(){this.queryMarketingProjectList()},methods:{async queryMarketingProjectList(){await this.reload()}}}),C=b,j=a(1001),k=(0,j.Z)(C,o,r,!1,null,null,null),P=k.exports},86863:function(e,t,a){a.d(t,{B9:function(){return k},C7:function(){return h},E2:function(){return p},Fn:function(){return u},Jv:function(){return C},LK:function(){return d},Ou:function(){return g},TG:function(){return i},Uw:function(){return r},XZ:function(){return m},_6:function(){return b},aw:function(){return q},cQ:function(){return j},dh:function(){return S},em:function(){return n},g9:function(){return w},iI:function(){return c},it:function(){return y},jy:function(){return v},kT:function(){return P},pc:function(){return l},qJ:function(){return _},qq:function(){return f},ve:function(){return x},vf:function(){return F},w_:function(){return s}});var o=a(76012);a(42963);function r(e){return(0,o.ZP)({url:"/api/cust/del_customer",method:"get",params:e})}function n(e){return(0,o.ZP)({url:"/api/auth/query_user_names",method:"get",params:e})}function i(){return(0,o.ZP)({url:"/api/auth/query_user_names",method:"get"})}function l(e){return(0,o.ZP)({url:"/api/auth/get_user_by_role",method:"get",params:e})}function s(e){return(0,o.ZP)({url:"/api/cont/upload_attachment",method:"post",data:e})}function c(){return(0,o.ZP)({url:"/api/auth/get_department",method:"get"})}function u(){return(0,o.ZP)({url:"/api/cont/get_approver",method:"get"})}function p(e,t=1){const a=1===t?"/api/cont/query_contract":2===t?"/api/cont/query_law_contract":4===t?"/api/cont/query_cooperation_contract":5===t?"/api/cont/query_common_contract":"/api/cont/query_shop_live_contract";return(0,o.ZP)({url:a,method:"get",params:e})}function m(){return(0,o.ZP)({url:"/api/cont/get_contract_uid",method:"get"})}function d(e={}){return(0,o.ZP)({url:"/api/shop_live/get_shop_live_contract_uid",method:"get",params:e})}function _(e){return(0,o.ZP)({url:"/api/cont/del_contract",method:"post",data:e})}function v(e){return(0,o.ZP)({url:"/api/cont/approve_contract",method:"post",data:e})}function f(e){return(0,o.ZP)({url:"/api/cont/del_contract",method:"post",data:e})}function g(e){return(0,o.ZP)({url:`/api/cont/delete_contract_annex/${e}/`,method:"post"})}function h(e){return(0,o.ZP)({url:`/api/cont/delete_contract_statements/${e}/`,method:"post"})}function y(e){return(0,o.ZP)({url:"/api/cont/invalid_contract",method:"post",data:e})}function b(e){return(0,o.ZP)({url:"/api/cont/recycle_contract",method:"post",data:e})}function C(e){return(0,o.ZP)({url:"/api/auth/get_user_by_role",method:"get",params:e})}function j(e){return(0,o.ZP)({url:"/api/cont/get_partner_by_name",method:"get",params:e})}function k(e){return(0,o.ZP)({url:"/api/cont/save_contract_annex",method:"post",data:e})}function P(e){return(0,o.ZP)({url:"/api/cont/del_contract_annex",method:"post",data:e})}function w(e){return(0,o.ZP)({url:"/api/cont/query_contract_annex",method:"get",params:e})}function x(e){return(0,o.ZP)({url:"/api/cont/query_contract_statements",method:"get",params:e})}function F(e){return(0,o.ZP)({url:`/api/cont/get_contract_approval_flow/${e}/`,method:"get"})}function S(e){return(0,o.ZP)({url:`/api/cont/get_contract_annex_approval_flow/${e}/`,method:"get"})}function q(e){return(0,o.ZP)({url:`/api/cont/get_contract_statements_approval_flow/${e}/`,method:"get"})}},25702:function(e,t,a){a.d(t,{Bp:function(){return u},Hz:function(){return m},KR:function(){return c},MI:function(){return n},YB:function(){return r},YG:function(){return d},bg:function(){return s},cW:function(){return l},es:function(){return p},lX:function(){return i},s2:function(){return o}});const o="/api/approval/save_transfer_apply",r="/api/approval/query_approval_list",n="/api/approval/query_approval_info",i="/api/approval/update_approval_info",l="/api/approval/query_approval_id_list",s="/api/approval/save_invoice_apply",c="/api/approval/save_refund_apply",u="/api/approval/save_borrowing_apply",p="/api/approval/query_all_projects",m="/api/approval/delete",d="/api/approval/save_not_contract_use_seal"},3346:function(e,t,a){a.d(t,{Ln:function(){return c},Me:function(){return d},OV:function(){return l},Ou:function(){return u},Pp:function(){return f},Tf:function(){return v},_F:function(){return g},eA:function(){return h},fO:function(){return y},hk:function(){return m},kg:function(){return s},mb:function(){return p},qC:function(){return _},vt:function(){return i}});var o=a(76012),r=a(10762),n=a(64236);const i=async(e,t)=>(0,o.dX)(r.y9,{params:{...(0,n.jG)({company_name:e,company_id:t})}}),l=async e=>(0,o.dX)(r.CH,{params:{...(0,n.jG)({project_uid:e})}}),s=async e=>(0,o.dX)(r.hV,{params:{...(0,n.jG)(e)}}),c=async e=>(0,o.dX)(r.yp,{params:{...(0,n.jG)(e)}}),u=async e=>(0,o.SO)(r.IY,{...(0,n.jG)(e)}),p=async e=>(0,o.SO)(r.Gs,{...(0,n.jG)(e)}),m=async e=>(0,o.SO)(r.Gs,{...e}),d=async e=>(0,o.dX)(r.S$.replace(":id",e)),_=async e=>(0,o.dX)(r.ii,{params:{...(0,n.jG)(e)}}),v=async e=>(0,o.dX)(r.AP,{params:{...(0,n.jG)(e)}}),f=async e=>(0,o.dX)(r.L6,{params:{...(0,n.jG)(e)}}),g=async e=>(0,o.SO)("/api/shop_live/save_withdraw",{...e}),h=async e=>(0,o.dX)("/api/settlement/get_settlement_by_shop_id",{params:{...(0,n.jG)(e)}}),y=async e=>(0,o.dX)("/api/settlement/query_settlements_last_achievement",{params:{...(0,n.jG)(e)}})},80391:function(e,t,a){a.d(t,{$:function(){return n}});const o="/api/resources/upload_file";var r=a(76012);const n=async e=>(0,r.SO)(o,e)},58061:function(e,t,a){a.d(t,{Kh:function(){return N},LK:function(){return E},ow:function(){return D},pX:function(){return O},QC:function(){return z},oN:function(){return G},_3:function(){return I},lV:function(){return L},AU:function(){return R},G1:function(){return Z},ey:function(){return x},Sg:function(){return w},Fh:function(){return M},hU:function(){return q},G9:function(){return k},zQ:function(){return $},Cl:function(){return P},MI:function(){return F},Pg:function(){return S}});const o="/api/coop/query_cooperation_cost",r="/api/payable/query_marketing_payables",n="/api/coop/del_cost",i="/api/coop/query_achievement",l="/api/kol/get_kol_company",s="/api/coop/add_cost_list",c="/api/coop/update_cost",u="/api/coop/save_rebate_cost",p="/api/coop/v2/query_cooperation",m="/api/coop/get_cooperation/:id/",d="/api/coop/v2/save_cooperation",_="/api/coop/save_cooperation_ae",v="/api/coop/confirm_end_cooperation",f="/api/approval/save_transfer_apply",g="/api/approval/save_refund_apply",h="/api/approval/query_settlements_for_payment_approval",y="/api/coop/create_cost_payment";var b=a(76012),C=a(64236),j=a(25702);const k=async e=>(0,b.dX)(o,{params:{cooperation_id:e,num:1e3,page_num:1}}),P=async(e,t)=>(0,b.dX)(r,{params:{project_id:e,payable_type:t}}),w=async e=>(0,b.SO)(n,{cost_id:e}),x=async e=>(0,b.SO)(s,e),F=async e=>(0,b.SO)(u,e),S=async e=>(0,b.SO)(c,e),q=async e=>(0,b.dX)(i,{params:{cooperation_id:e,num:1e3,page_num:1,is_reverse:!0}}),M=async(e,t,a)=>(0,b.dX)(j.cW,{params:{approval_type:e,customer_id:t,level_three_types:a}}),$=async e=>(0,b.dX)(l,{params:{kol_id:e}}),Z=async e=>(0,b.SO)("/api/resources/upload_file",e),E=async e=>(0,b.dX)(p,{params:{...(0,C.jG)(e)}}),z=async e=>(0,b.SO)(d,{...(0,C.jG)(e)}),D=async e=>(0,b.dX)(m.replace(":id",e)),G=async e=>(0,b.SO)(_,{...(0,C.jG)(e)}),I=async e=>(0,b.SO)(v,{...(0,C.jG)(e)}),L=async e=>(0,b.SO)(f,{...(0,C.jG)(e)}),R=async e=>(0,b.SO)(g,{...(0,C.jG)(e)}),O=async()=>(0,b.dX)(h),N=async e=>(0,b.SO)(y,{...(0,C.jG)(e)})},76455:function(e,t,a){var o;a.d(t,{Ny:function(){return o},lk:function(){return i},tn:function(){return r}}),function(e){e[e["InterestedCustomer"]=1]="InterestedCustomer",e[e["DetermineCooperation"]=2]="DetermineCooperation",e[e["ExecuteProject"]=3]="ExecuteProject",e[e["ExecuteEnd"]=4]="ExecuteEnd",e[e["ImportData"]=5]="ImportData"}(o||(o={}));const r=new Map([[o.InterestedCustomer,"意向客户"],[o.DetermineCooperation,"确定合作"],[o.ExecuteProject,"执行项目"],[o.ExecuteEnd,"执行结束"],[o.ImportData,"数据入库"]]);var n;(function(e){e[e["live"]=1]="live",e[e["video"]=2]="video",e[e["graphic"]=3]="graphic"})(n||(n={}));const i=new Map([[n.live,"直播"],[n.video,"视频"],[n.graphic,"图文"]])},58302:function(e,t,a){var o=a(97434),r=a(77944),n=a(52140);const i=e=>{const t=(0,o.computed)((()=>r.Z.getters["global/scrollbarSetting"])),a=(0,o.computed)((()=>void 0!==e.pagename?!0!==t.value.find((t=>t.key===e.pagename))?.value:e.disable??!1)),i=(0,o.computed)((()=>{const t=(e.fixedBlockHeightRefs??[]).map((e=>(0,o.unref)(e))).reduce(((e,t)=>(0,o.unref)(e)+(0,o.unref)(t)),0);return a.value?"max-content":`calc(100vh - ${(0,o.unref)(t)+56+36}px)`})),l=(0,o.computed)((()=>(a.value,"flex-auto"))),s=(0,o.computed)((()=>({height:i.value,overflowInBody:!a.value}))),c=(0,o.ref)(0),u=(0,o.computed)((()=>a.value?{}:{height:Math.max(c.value-(0,o.unref)((0,o.unref)(e.compensation)),e.tableMinHeight??0)})),p=a.value?()=>{}:e=>{c.value!==e&&(c.value=e,(0,n.S)())},m=a.value?()=>{}:t=>{0===c.value?setTimeout((()=>{p(t.height)}),e.delay??1200):p(t.height)};return{cardHeight:i,tableProps:u,onRectUpdate:m,rectHeight:c,cardFlexClass:l,cardProps:s}};t["Z"]=i},43847:function(e,t,a){a.d(t,{Pc:function(){return i},oR:function(){return n}});var o=a(77944),r=a(97434);const n=()=>o.Z,i=()=>{const e=n(),t=(0,r.computed)((()=>e.getters["user/getUserInfo"]));return t}},52140:function(e,t,a){a.d(t,{S:function(){return o},n:function(){return r}});const o=()=>{const e=document.createEvent("Event");e.initEvent("resize",!0,!0),window.dispatchEvent(e)},r=()=>{const{width:e,height:t}=document.body.getBoundingClientRect();return{width:e,height:t}}},30845:function(e,t,a){a.d(t,{f:function(){return o}});const o=e=>""===e?void 0:e},67910:function(e,t,a){a.d(t,{P6:function(){return s},zY:function(){return l}});var o=a(97434),r=a(61282),n=a(85937),i=a.n(n);const l=(e,t,a,n=20)=>(0,o.computed)((()=>Math.ceil(Math.max(...e.value.map((e=>(0,r.QN)(a(e,!0)))),(0,r.QN)(t)))+n+6)),s=(e,t=!0)=>{let a;return a=""===e||void 0===e?"--":(0,r.SJ)(new(i())(e??0)),t?(0,o.h)("span",[`￥${a}`]):(0,o.h)("span",[`${a}`])}}}]);