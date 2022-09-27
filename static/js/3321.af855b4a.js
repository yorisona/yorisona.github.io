"use strict";(self["webpackChunkgoumee_star_temp"]=self["webpackChunkgoumee_star_temp"]||[]).push([[3321],{39591:function(e,t,a){a.d(t,{Z:function(){return d}});var s,i,o=a(97434),n=(0,o.defineComponent)({props:{item:{type:Object,default:()=>{}},cover:{type:String,default:""},isEdit:{type:Boolean,default:!1},isShow:{type:Boolean,default:!0},showPreview:{type:Boolean,default:!1},isReview:{type:Boolean,default:!1},isDelete:{type:Boolean,default:!1}},render(){const e=arguments[0];return e("div",{class:"model-picture"},[e("div",{class:"cover"},[e("tg-image",{attrs:{src:this.cover,alt:this.item.flower_name}})]),e("div",{class:"name"},["verify_status"in this.item&&e("span",{class:"point point-"+this.item.verify_status}),e("span",{class:"nickname"},[this.item.flower_name]),e("span",{class:"realname"},["(",this.item.real_name,")"])]),e("div",{class:"action"},[this.showPreview&&e("tg-icon",{attrs:{name:"ico-icon_zhaopian",title:"预览"},on:{click:()=>{this.$emit("preview",this.item)}}}),this.isShow&&e("tg-icon",{attrs:{name:"ico-icon_chakan",title:"查看"},on:{click:()=>{this.$emit("show",this.item)}}}),this.isEdit&&e("tg-icon",{attrs:{name:"ico-icon_bianji",title:"编辑"},on:{click:()=>{this.$emit("edit",this.item)}}}),this.isReview&&e("tg-icon",{attrs:{name:"ico-icon_shenhe",title:"审核"},on:{click:()=>{this.$emit("review",this.item)}}}),this.isDelete&&e("tg-icon",{attrs:{name:"ico-btn-delete",title:"删除"},on:{click:()=>{this.$emit("delete",this.item)}}})])])}}),r=n,l=a(1001),c=(0,l.Z)(r,s,i,!1,null,"aeb070dc",null),d=c.exports},53321:function(e,t,a){a.r(t),a.d(t,{default:function(){return $}});var s,i,o=a(36568),n=a.n(o),r=a(97434),l=a(39591),c=a(11676),d=a(318),m=(0,r.defineComponent)({setup(e,t){const a=(0,r.ref)(null),s=(0,r.ref)(""),i=(0,r.ref)(!1),o=(0,r.ref)(!1),n=(0,r.ref)({real_name:"",flower_name:"",flag:0,images:[],wechat:"",mobile:"",id:void 0}),l=()=>{n.value={real_name:"",flower_name:"",flag:0,images:[],wechat:"",mobile:"",id:void 0}},c=()=>{t.emit("close"),t.root.$nextTick(l),i.value=!1},m=(e,t)=>{s.value=e,t&&(n.value=t),i.value=!0},p=()=>{a.value?.validate((async e=>{if(!e)return!1;{const{flower_name:e,images:a,mobile:s,real_name:i,wechat:r,id:l}=n.value;o.value=!0,await(0,d.yz)({flower_name:e,images:a,mobile:s,real_name:i,wechat:r,id:l}),t.root.$message.success("保存成功"),o.value=!1,t.emit("success"),c()}}))};return{show:m,title:s,visible:i,formData:n,onCloseBtnClick:c,loading:o,onSaveBtnClick:p,formRef:a}},render(){const e=arguments[0];return e("el-dialog",{class:"tg-dialog-classic add-model-dialog",attrs:{width:"592px",visible:this.visible,"append-to-body":!0,"close-on-click-modal":!1,"close-on-press-escape":!1,wrapperClosable:!1},on:{close:this.onCloseBtnClick}},[e("template",{slot:"title"},[this.title]),e("div",{class:"model-body"},[e("el-form",n()([{ref:"formRef",attrs:{inline:!0,size:"small",labelWidth:"50px"}},{attrs:{model:this.formData}}]),[e("el-form-item",{class:"add-model-item",attrs:{label:"花名：",prop:"flower_name",rules:{required:!0,message:"请输入花名",trigger:"blur"}}},[e("el-input",{attrs:{placeholder:"请输入模特名称",maxlength:20,"show-word-limit":!0},model:{value:this.formData.flower_name,callback:e=>{this.$set(this.formData,"flower_name",e)}}})]),e("el-form-item",{class:"add-model-item",attrs:{label:"真名：",prop:"real_name",rules:{required:!0,message:"请输入真名",trigger:"blur"}}},[e("el-input",{attrs:{placeholder:"请输入真名",maxlength:20,"show-word-limit":!0},model:{value:this.formData.real_name,callback:e=>{this.$set(this.formData,"real_name",e)}}})]),e("el-form-item",{class:"add-model-item",attrs:{label:"手机：",prop:"mobile",rules:{message:"请输入手机",trigger:"blur"}}},[e("el-input",{attrs:{placeholder:"请输入手机",maxlength:11,"show-word-limit":!0},on:{input:e=>this.formData.mobile=e.replace(/[^\d]/g,"")},model:{value:this.formData.mobile,callback:e=>{this.$set(this.formData,"mobile",e)}}})]),e("el-form-item",{class:"add-model-item",attrs:{label:"微信：",prop:"wechat",rules:{message:"请输入微信",trigger:"blur"}}},[e("el-input",{attrs:{placeholder:"请输入微信",maxlength:20,"show-word-limit":!0},model:{value:this.formData.wechat,callback:e=>{this.$set(this.formData,"wechat",e)}}})]),e("span",{class:"upload-tip"},["(1-8张照片，单张大小不超过 5MB)"]),e("el-form-item",{class:"add-model-item",attrs:{label:"照片：",prop:"images",rules:{required:!0,message:"请上传照片",trigger:"blur"}}},[e("div",{class:"picture-list"},[this.formData.images.map(((t,a)=>e("div",{class:"file-wrapper"},[e("div",{class:"file",key:a},[e("tg-image",{attrs:{src:t}})]),e("tg-icon",{attrs:{name:"ico-a-quseguanbiicon2x"},on:{click:()=>{this.formData.images.splice(a,1)}}})]))),this.formData.images.length<8&&e("tg-upload",{attrs:{action:"/api/medium/upload_file","show-file-list":!1,beforeUpload:(0,c.K)({fileSize:5,image:!0}),success:e=>{this.formData.images.push(e.data.source)}}},[e("div",{class:"upload-btn mgt-30"},[e("i",{class:"el-icon-plus avatar-uploader-icon"}),e("span",["上传照片"])])])])])])]),e("template",{slot:"footer"},[e("tg-button",{on:{click:this.onCloseBtnClick}},["取消"]),e("tg-button",{directives:[{name:"loading",value:this.loading}],attrs:{type:"primary"},on:{click:this.onSaveBtnClick}},["保存"])])])}}),p=m,h=a(1001),u=(0,h.Z)(p,s,i,!1,null,null,null),f=u.exports,g=a(21757);const v=()=>{const e=(0,r.ref)(!1),t=t=>e.value=t;return{visible:e,updateVisiable:t}},y=()=>{const e=(0,r.ref)({real_name:"",flower_name:"",flag:0,images:[],wechat:"",mobile:"",id:void 0}),t=t=>e.value=t;return{currentModel:e,updateCurrentModel:t}};var _,w,b=(0,r.defineComponent)({setup(){const e=(0,r.ref)(0),{visible:t,updateVisiable:a}=v(),{currentModel:s,updateCurrentModel:i}=y(),o=(0,r.ref)(),n=(0,g.gI)(),l=()=>{a(!1)},c=e=>{a(!0),i(e)};return{current_index:e,onCloseBtnClick:l,visible:t,currentModel:s,modelCarousel:o,show:c,permission:n}},render(){const e=arguments[0];return e("el-dialog",{class:"tg-dialog-classic show-model-dialog",attrs:{width:"700px",visible:this.visible,"append-to-body":!0,"close-on-click-modal":!1,"close-on-press-escape":!1,wrapperClosable:!1},on:{close:this.onCloseBtnClick}},[e("template",{slot:"title"},["查看模特"]),e("div",{class:"show-main"},[e("div",{class:"info"},[e("span",["花名：",this.currentModel.flower_name]),e("span",["真名：",this.currentModel.real_name]),this.permission.supplier_model_show_all&&e("span",["手机：",this.currentModel.mobile]),this.permission.supplier_model_show_all&&e("span",["微信：",this.currentModel.wechat])]),e("div",{class:"picture"},[e("span",{class:"pagation-arrow left",on:{click:()=>{0!==this.current_index&&this.modelCarousel?.prev()}}},[e("tg-icon",{attrs:{disabled:0===this.current_index,name:"ico-arrow-left"}})]),e("el-carousel",{ref:"modelCarousel",style:"width: 562px",attrs:{height:"500px",width:"562px",autoplay:!1,"indicator-position":"none"},on:{change:e=>{this.current_index=e}}},[this.currentModel.images.map((t=>e("el-carousel-item",[e("tg-image",{class:"cover",attrs:{src:t,alt:this.currentModel.flower_name}})])))]),e("span",{class:"pagation-arrow right",on:{click:()=>{this.current_index>=this.currentModel.images.length-1||this.modelCarousel?.next()}}},[e("tg-icon",{attrs:{disabled:this.current_index>=this.currentModel.images.length-1,name:"ico-arrow-right"}})])]),e("div",{style:"display: flex; justify-content: center; margin-top: 20px;"},[e("span",[`${this.current_index+1} / ${this.currentModel.images.length}`])])])])}}),x=b,k=(0,h.Z)(x,_,w,!1,null,null,null),C=k.exports,G=a(82741);const j=e=>{const t=(0,r.ref)([]),a=(0,r.ref)(!1),s=(0,r.ref)(0),i=(0,r.ref)({num:50,page_num:1,search:""}),o=async()=>{a.value=!0;const{data:e,total:o}=await(0,d.j5)({...i.value});a.value=!1,t.value=e,s.value=o};return{modelList:t,getList:o,queryParams:i,modelTotal:s,loading:a}};var M,S,A=(0,r.defineComponent)({components:{liverModel:l.Z,addModelDialog:f,showModel:C},setup(e,t){const a=j(t),s=(0,r.ref)(),i=(0,r.ref)(),o=(0,g.gI)(),n=()=>{a.queryParams.value.page_num=1,a.getList()},l=()=>{a.queryParams.value.page_num=1,a.queryParams.value.search="",a.getList()},c=()=>{s.value?.show("新增模特")},m=e=>{13===e.which&&n()},p=async e=>{const s=await(0,G.I)(t,"是否确定删除此模特？");if(s){const s=await(0,d.Qv)(e.id);s.data.success?(t.root.$message.success(s.data.message),a.getList()):t.root.$message.error(s.data.message)}};return(0,r.onMounted)((()=>{a.getList()})),{onDeleteModel:p,search:n,reset:l,onKeyPress:m,permission:o,addModelInvoke:c,dialogModelRef:s,showModelRef:i,...a}},render(){const e=arguments[0];return e("div",{class:"supplier-model-manage"},[e("tg-card",{class:"search-box",attrs:{padding:[18,18,6,18]}},[e("el-form",n()([{attrs:{size:"small","show-message":!1,"label-width":"70px"}},{nativeOn:{submit:function(e){e.preventDefault()}}}]),[e("div",{class:"filter-form-div"},[e("div",{class:"filter-form-item",style:"min-width: 314px"},[e("el-form-item",{attrs:{label:"名称搜索："},nativeOn:{keypress:this.onKeyPress}},[e("el-input",{attrs:{placeholder:"请输入模特花名/真名"},style:"min-width: 244px",model:{value:this.queryParams.search,callback:e=>{this.$set(this.queryParams,"search",e)}}})])]),e("div",{class:"filter-form-item"},[e("el-form-item",{attrs:{"label-width":"0"}},[e("div",{class:"filter-form-item-btn"},[e("tg-button",{attrs:{type:"primary"},on:{click:this.search}},["查询"]),e("tg-button",{class:"mgl-12",on:{click:this.reset}},["重置"])])])])])])]),e("div",{class:"table-box mgt-12 table-model",directives:[{name:"loading",value:this.loading}]},[this.permission.supplier_model_add&&e("tg-button-line",{class:"model-addbtn"},[e("tg-button",{attrs:{type:"primary",icon:"ico-btn-add"},on:{click:this.addModelInvoke}},["新增模特"])]),e("div",{class:"table-box mgt-18 display-picture"},[this.modelList.map((t=>e("liver-model",{attrs:{item:t,isEdit:this.permission.supplier_model_add,isDelete:this.permission.supplier_model_delete,cover:t.images[0]+"?thumbnail=1"},on:{show:e=>{this.showModelRef?.show(e)},edit:e=>{this.dialogModelRef?.show("编辑模特",e)},delete:e=>{this.onDeleteModel(e)}}}))),!this.modelList.length&&e("div",{class:"empty-model",style:"marginTop:150px"},[e("empty-common",{attrs:{"detial-text":"暂无数据"}})])]),this.modelTotal>20&&e("div",{class:"block flex-none",style:"padding: 9px 18px;background:#fff;margin-top: 18px"},[e("el-pagination",{attrs:{"current-page":this.queryParams.page_num,"page-sizes":[10,20,50,100,200],pageSize:this.queryParams.num,total:this.modelTotal,layout:"total, prev, pager, next, sizes, jumper"},on:{"current-change":e=>{this.queryParams.page_num=e,this.getList()},"size-change":e=>{this.queryParams.num=e,this.getList()}}})])]),e("add-model-dialog",{ref:"dialogModelRef",on:{success:this.getList}}),e(C,{ref:"showModelRef"})])}}),P=A,D=(0,h.Z)(P,M,S,!1,null,"6b97e94e",null),$=D.exports},11676:function(e,t,a){a.d(t,{K:function(){return m}});a(26699);var s=a(48606);const i=[".pdf",".doc",".docx",".ppt",".pptx"],o=[".mp4"],n=[".png",".jpg",".jpeg"],r=[".xls",".xlsx",".csv"],l=[".doc",".docx"],c=[".pdf"],d=[".csv"],m=e=>t=>{const a=/(\.[^.]+)$/.exec(t.name);let m="";a&&(m=a[1]);const p=[];if(e.image&&p.push(...n),e.file&&p.push(...i),e.video&&p.push(...o),e.excel&&p.push(...r),e.pdf&&p.push(...c),e.doc&&p.push(...l),e.csv&&p.push(...d),e.extensions&&p.push(...e.extensions),p.length>0&&!p.includes(m))return s.Message.warning(`文件格式不正确，请使用 ${p.join(";")}`),!1;if(void 0!==e.fileSize){const a=t.size/1024/1024<e.fileSize;if(!a)return s.Message.warning(`文件不能超过${e.fileSize}MB!`),!1}return!0};t["Z"]={ValidationFileUpload:m}},318:function(e,t,a){a.d(t,{Zn:function(){return K},Qv:function(){return T},F9:function(){return V},aw:function(){return F},aI:function(){return q},kg:function(){return I},K:function(){return L},j5:function(){return R},wu:function(){return w},yz:function(){return Z},Mj:function(){return U},id:function(){return E},UK:function(){return _},ZP:function(){return H}});a(21703);var s=a(76012),i=a(64236);const o="/api/medium/get_company_name_and_id",n="/api/model/del_model",r="/api/anchor/del_anchor",l="/api/auth/query_anchor_maintainer",c="/api/anchor/save_anchor_maintainer",d="/api/anchor/get_anchor_key_info",m="/api/anchor/get_anchor_key_info_log",p="/api/medium/add_tmp_company",h="/api/anchor/contract/associate_project",u=e=>{if(!0!==e.data.success)throw new Error(e.data.message);return e.data.data},f=async()=>(0,s.dX)("/api/anchor/good_at_categories"),g=async()=>(0,s.dX)("/api/anchor/anchor_tags"),v=async e=>(0,s.dX)(`/api/anchor/delete_anchor/${e}`),y=async e=>(0,s.SO)("/api/anchor/verify_anchor",(0,i.jG)(e)),_=async e=>(0,s.SO)(p,(0,i.jG)(e)),w=async e=>(0,s.SO)("/api/medium/add_company",(0,i.jG)(e)),b=async e=>(0,s.SO)("/api/anchor/save_anchor_basic",e).then(u),x=async e=>(0,s.SO)("/api/anchor/save_anchor_other",(0,i.jG)(e)).then(u),k=async e=>(0,s.dX)("/api/anchor/list_anchors",{params:(0,i.jG)(e)}).then(u),C=async e=>(0,s.dX)(`/api/anchor/get_anchor_detail/${e}/`).then(u),G=async e=>(0,s.dX)("/api/anchor/apply/list",{params:(0,i.jG)(e)}).then(u),j=async e=>(0,s.dX)(`/api/anchor/apply/list/${e.anchor_id}`,{params:(0,i.jG)(e)}).then(u),M=async e=>(0,s.dX)("/api/shop_live/query_uncompleted_projects",{params:(0,i.jG)(e)}).then(u),S=async e=>(0,s.dX)("/api/shop_live/query_shop_live_project",{params:(0,i.jG)(e)}).then(u),A=async e=>(0,s.SO)("/api/anchor/apply/schedule",{apply_id:e}).then(u),P=async e=>(0,s.SO)("/api/anchor/apply/cancel",{apply_id:e}).then(u),D=async e=>(0,s.SO)("/api/anchor/apply/feedback",(0,i.jG)(e)).then(u),$=async e=>(0,s.SO)("/api/anchor/save_anchor_cooperation",(0,i.jG)(e)).then(u),O=async e=>(0,s.SO)("/api/anchor/apply/pilot",(0,i.jG)(e)).then(u),X=async e=>(0,s.SO)("/api/anchor/apply/audition",(0,i.jG)(e)).then(u),q=async e=>(0,s.dX)("/api/auth/query_user_v2",{params:(0,i.jG)(e)}).then(u),L=async(e,t)=>(0,s.dX)("/api/anchor/list_settlement_companies",{params:{company_name:e,verify_status:t}}).then(u),B=async e=>(0,s.dX)(`/api/anchor/delete_anchor_cooperation/${e}/`).then(u),z=async e=>(0,s.dX)(`/api/anchor/list_anchor_cooperations/${e}/`).then(u),R=async e=>(0,s.dX)("/api/model/model_list",{params:(0,i.jG)(e)}).then(u),Z=async e=>(0,s.SO)("/api/model/save_model",(0,i.jG)(e)).then(u),I=async e=>(0,s.dX)(o,{params:{...(0,i.jG)(e)}}),T=async e=>(0,s.SO)(n,{id:e}),K=async e=>(0,s.SO)(r,{id:e}),U=async e=>(0,s.dX)(l,{params:{...(0,i.jG)({search_value:e})}}),E=async e=>(0,s.SO)(c,{...(0,i.jG)(e)}),V=async e=>(0,s.dX)(d,{params:{...(0,i.jG)(e)}}),F=async e=>(0,s.dX)(m,{params:{...(0,i.jG)(e)}}),Q=async(e,t)=>(0,s.dX)("/api/anchor/check_anchor_wechat",{params:{wechat:e,anchor_id:t}}),W=async e=>(0,s.SO)(h,{...(0,i.jG)(e)});var H={GetCheckAnchorWechat:Q,GetAnchorGoodAtCategories:f,GetAnchorApplyCancel:P,PostSaveModel:Z,GetAnchorApplyList:G,GetModelList:R,GetAnchorApplyDetail:j,PostAnchorOther:x,GetAnchorTags:g,PostAnchorBasic:b,GetAnchorList:k,GetAnchorDetail:C,GetAnchorDelete:v,PostAnchorVerify:y,GetListSettlementCompanies:L,GetAnchorApplySchedule:A,PostAnchorApplyFedback:D,GetListAnchorCooperations:z,GetUnCompletedProjects:M,PostAnchorCooperation:$,GetAuthQueryUser:q,PostAnchorApplyPilot:O,PostAnchorApplyAudition:X,GetShopLiveProject:S,GetDeleteAnchorCooperation:B,PostModifyCompany:w,SaveAnchorProjectContract:W}},82741:function(e,t,a){a.d(t,{I:function(){return i},u:function(){return o}});var s=a(71340);const i=(e,t)=>{const a="string"===typeof t?{title:t}:t;return new Promise((t=>{e.root.$TDialog({...a,onConfirm:()=>t(!0),onCancel:()=>t(!1)})}))},o=e=>{const t="string"===typeof e?{title:e}:e;return new Promise(((e,a)=>{(0,s.t)({...t,onConfirm:()=>e(!0),onCancel:()=>a()})}))}}}]);