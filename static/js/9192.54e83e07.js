(self["webpackChunkgoumee_star_temp"]=self["webpackChunkgoumee_star_temp"]||[]).push([[9192],{79192:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return k}});a(21703);var n,r,s=a(36568),o=a.n(s),i=a(97434),c=a(1763),l=a(44928),u=a(11676),p=a(318),m=a(8136),d=a(79433),h=a(5648),_=a(64236),f=a(82741),g=(0,i.defineComponent)({components:{},setup(e,t){const a=(0,l.t)(),n=void 0!==a.currentRoute.params.id,r=(0,i.ref)(null),s=(0,i.ref)(!1),o=(0,i.ref)({company_name:"",platforms:[],areas:[],business_license:[],account_permit:[],special_ticket:"",gather_account_list:[{account_type:"",bank_card_number:"",bank_region:[],bank_sub_name:"",bank_name:"",bank_code:"",bank_id:0,alipay_account:"",gather_account_id:0,flag:0}],contact_no2:"",email:"",wechat:"",phone:"",contact_person:"",company_profile:"",profile:[]}),u=(0,i.ref)(void 0),g=(0,i.ref)(m.BG),v=(0,i.ref)(m.D$),b=(0,i.ref)([]),y=async()=>{const e=await(0,d.y5)();e.data.success?b.value=e.data.data:t.root.$message.error(e.data.message)},k=(0,i.ref)([]),D=async e=>{const a={province:e[0],city:e[1]};F.value=!0;const n=await(0,d.i$)(a);F.value=!1,n.data.success?k.value=n.data.data:t.root.$message.error(n.data.message)},F=(0,i.ref)(!1),x=e=>{e.bank_region&&e.bank_region[0]&&e.bank_region[1]&&D([e.bank_region[0],e.bank_region[1]])},w=(e,t)=>{o.value.gather_account_list[t].bank_name="",o.value.gather_account_list[t].bank_code="",k.value.map((a=>{e===a.bank_sub_name&&(o.value.gather_account_list[t].bank_name=a.bank_name,o.value.gather_account_list[t].bank_code=a.bank_code,o.value.gather_account_list[t].bank_id=a.id)}))},A=(e,t)=>{o.value.gather_account_list[t].bank_sub_name="",o.value.gather_account_list[t].bank_name="",o.value.gather_account_list[t].bank_code=""},C=async()=>{const e={companyId:a.currentRoute.params.id};s.value=!0;const n=await(0,h.dD)(e);if(s.value=!1,n.data.success){const e=n.data.data;o.value.company_name=e.name,o.value.platforms=e.platforms,o.value.areas=e.areas,o.value.special_ticket=e.special_ticket,o.value.gather_account_list=e.gather_account_list,o.value.business_license=e.business_license,o.value.account_permit=e.account_permit,o.value.contact_person=e.contact_person,o.value.wechat=e.wechat,o.value.email=e.contact_email,o.value.phone=e.contact_no,o.value.contact_no2=e.contact_no2,o.value.company_profile=e.description,o.value.profile=e.description_file,r.value=e.verify_status}else t.root.$message.error(n.data.message)};(0,i.onBeforeMount)((()=>{y(),n&&C()}));const $=(0,i.ref)([]),j=async()=>{const e=[...o.value.gather_account_list,...$.value],n={id:a.currentRoute.params.id,name:o.value.company_name,areas:o.value.areas.join(","),platforms:o.value.platforms.join(","),special_ticket:o.value.special_ticket,gather_account_list:e,contact_no2:o.value.contact_no2,contact_person:o.value.contact_person,contact_no:o.value.phone,wechat:o.value.wechat,contact_email:o.value.email,business_license:o.value.business_license,account_permit:o.value.account_permit,description:o.value.company_profile,description_file:o.value.profile};s.value=!0;const[{data:r}]=await Promise.all([await(0,p.UK)(n),await(0,_._v)(500)]);if(s.value=!1,r.success)t.root.$message.success(r.message??"保存成功"),a.push({name:c.bv.manage});else{const e=r.message??"保存失败";t.root.$message.error(e)}},G=()=>{u.value?.validate((async e=>{if(!e)return;if(""===o.value.email&&""===o.value.wechat)return t.root.$message.warning("微信号、邮箱2选1必填"),!1;const i=[...o.value.gather_account_list,...$.value],l={id:a.currentRoute.params.id,name:o.value.company_name,areas:o.value.areas.join(","),platforms:o.value.platforms.join(","),special_ticket:o.value.special_ticket,gather_account_list:i,contact_no2:o.value.contact_no2,contact_person:o.value.contact_person,contact_no:o.value.phone,wechat:o.value.wechat,contact_email:o.value.email,business_license:o.value.business_license,account_permit:o.value.account_permit,description:o.value.company_profile,description_file:o.value.profile};if(n&&1===r.value){const e=await(0,f.I)(t,"该信息已审核通过，是否确认提交重新进行审核?");if(!e)return!1}s.value=!0;const[{data:u}]=await Promise.all([await(0,p.wu)(l),await(0,_._v)(500)]);if(s.value=!1,u.success)t.root.$message.success("提交成功"),a.push({name:c.bv.manage});else{const e=u.message??"提交失败";t.root.$message.error(e)}}))},P=()=>{o.value.gather_account_list.push({account_type:"",bank_card_number:"",bank_region:[],bank_sub_name:"",bank_name:"",bank_code:"",bank_id:0,alipay_account:"",gather_account_id:0,flag:0})},B=(e,t)=>{e.gather_account_id&&(e.flag=1,$.value.push(e)),o.value.gather_account_list.splice(t,1)};return{hasEdit:n,loading:s,formData:o,formRef:u,platformList:g,categoryArea:v,onSubmit:G,onSaveInfo:j,bankRegionList:b,bankList:k,addAccount:P,removeAccount:B,onItemAreaChanged:A,getItemBankName:w,getItemBanks:x,bankLoading:F,verify_status:r}},render(){const e=arguments[0];return e("div",{class:"company-modify-wrapper"},[e("tg-breadcrumbs",{attrs:{routes:[{title:"公司管理",name:c.bv.manage},{title:this.hasEdit?"修改公司":"新增公司"}]}}),e("div",{class:"page-content-container"},[e("el-form",o()([{ref:"formRef",attrs:{size:"small",labelPosition:"top"}},{attrs:{model:this.formData}}]),[e("div",{class:"form-container"},[e("div",{class:"block-title star",style:"margin-top: 0"},["公司基础信息"]),e("div",{class:"flex-line-box"},[e("div",{class:"double"},[e("el-form-item",{attrs:{prop:"company_name",rules:[{required:!0,message:"请输入公司名称",trigger:"blur"}]}},[e("el-input",{attrs:{placeholder:"请输入公司名称",maxlength:30,"show-word-limit":!0},model:{value:this.formData.company_name,callback:e=>{this.$set(this.formData,"company_name",e)}}})])])]),e("div",{class:"block-title star"},["擅长平台"]),e("div",{class:"flex-line-box"},[e("el-form-item",{attrs:{prop:"platforms",rules:[{required:!0,message:"至少选一个擅长类目",trigger:["blur","change"]}]}},[e("el-checkbox-group",{style:"margin-top: 10px;margin-left: 7px",model:{value:this.formData.platforms,callback:e=>{this.$set(this.formData,"platforms",e)}}},[this.platformList.map((t=>e("el-checkbox",{attrs:{label:t.type},key:t.type},[e("p",{class:"checkbox-p"},[t.value])])))])])]),e("div",{class:"block-title star"},["擅长领域"]),e("div",{class:"flex-line-box"},[e("el-form-item",{attrs:{prop:"areas",rules:[{required:!0,message:"至少选一个擅长领域",trigger:["blur","change"]}]}},[e("el-checkbox-group",{style:"margin-top: 10px;margin-left: 7px",model:{value:this.formData.areas,callback:e=>{this.$set(this.formData,"areas",e)}}},[this.categoryArea.map(((t,a)=>e("el-checkbox",{attrs:{label:a+1},key:a},[e("p",{class:"checkbox-p"},[t])])))])])]),e("div",{class:"block-title star"},["财务信息"]),e("div",{class:"flex-line-box"},[e("div",{class:"single"},[e("el-form-item",{attrs:{label:"是否专票",prop:"special_ticket",rules:[{required:!0,message:"请选择",trigger:["blur","change"]}]}},[e("el-select",{attrs:{placeholder:"请选择"},style:{width:"100%"},model:{value:this.formData.special_ticket,callback:e=>{this.$set(this.formData,"special_ticket",e)}}},[e("el-option",{attrs:{label:"是",value:1}}),e("el-option",{attrs:{label:"否",value:0}})])])]),e("div",{class:"single"},[e("el-form-item",{attrs:{label:"财务电话",prop:"contact_no2",rules:[{required:!0,message:"请输入财务电话",trigger:["blur","change"]}]}},[e("el-input",{attrs:{placeholder:"请输入财务电话"},model:{value:this.formData.contact_no2,callback:e=>{this.$set(this.formData,"contact_no2",e)}}})])])]),this.formData.gather_account_list.map(((t,a)=>e("div",{class:"account-box",key:t.index},[e("div",{class:"flex-line-box"},[e("div",{class:"single"},[e("el-form-item",{attrs:{label:"新增收款账户类型",prop:`gather_account_list.${a}.account_type`,rules:[{required:!0,message:"请选择",trigger:["blur","change"]}]}},[e("el-select",{attrs:{placeholder:"请选择"},style:{width:"100%"},model:{value:t.account_type,callback:e=>{this.$set(t,"account_type",e)}}},[e("el-option",{attrs:{label:"银行账户",value:1}}),e("el-option",{attrs:{label:"支付宝账户",value:2}})])])]),1===t.account_type&&e("div",{class:"single"},[e("el-form-item",{attrs:{label:"银行账号",prop:`gather_account_list.${a}.bank_card_number`,rules:[{required:!0,message:"请输入银行账号",trigger:"blur"}]},key:`gather_account_list.${a}.bank_card_number`},[e("el-input",{attrs:{placeholder:"请输入银行账号",maxlength:30},model:{value:t.bank_card_number,callback:e=>{this.$set(t,"bank_card_number",e)}}})])]),1===t.account_type&&e("div",{class:"single"},[e("el-form-item",{attrs:{label:"开户地区",prop:`gather_account_list.${a}.bank_region`,rules:[{required:!0,message:"请选择",trigger:["blur","change"]}]},key:`gather_account_list.${a}.bank_region`},[e("el-cascader",{attrs:{clearable:"","popper-class":"company-cascader",placeholder:"请选择",options:this.bankRegionList},style:"width: 100%",on:{change:()=>this.onItemAreaChanged(t.bank_region,a)},model:{value:t.bank_region,callback:e=>{this.$set(t,"bank_region",e)}}})])]),2===t.account_type&&e("div",{class:"single"},[e("el-form-item",{key:`gather_account_list.${a}.alipay_account`,attrs:{prop:`gather_account_list.${a}.alipay_account`,rules:[{required:!0,message:"请输入",trigger:["blur","change"]}],label:"支付宝账号"}},[e("el-input",{attrs:{placeholder:"请输入支付宝账号"},model:{value:t.alipay_account,callback:e=>{this.$set(t,"alipay_account",e)}}})])])]),1===t.account_type&&e("div",{class:"flex-line-box"},[e("div",{class:"single"},[e("el-form-item",{attrs:{label:"开户支行",prop:`gather_account_list.${a}.bank_sub_name`,rules:[{required:!0,message:"请输入开户支行",trigger:["blur","change"]}]},key:`gather_account_list.${a}.bank_sub_name`},[e("el-select",{attrs:{placeholder:"请选择",filterable:!0,loading:this.bankLoading},style:"width: 100%",on:{focus:()=>this.getItemBanks(t),change:()=>this.getItemBankName(t.bank_sub_name,a)},model:{value:t.bank_sub_name,callback:e=>{this.$set(t,"bank_sub_name",e)}}},[this.bankList.map(((t,a)=>e("el-option",{key:a,attrs:{label:t.bank_sub_name,value:t.bank_sub_name}})))])])]),e("div",{class:"single"},[e("el-form-item",{attrs:{label:"开户银行",prop:`gather_account_list.${a}.bank_name`,rules:[{required:!0,message:"请输入开户银行",trigger:["blur","change"]}]},key:`gather_account_list.${a}.bank_name`},[e("el-input",{attrs:{placeholder:"请输入开户银行",maxlength:30,"show-word-limit":!0},model:{value:t.bank_name,callback:e=>{this.$set(t,"bank_name",e)}}})])]),e("div",{class:"single"},[e("el-form-item",{attrs:{label:"联行号"},key:`gather_account_list.${a}.bank_code`},[e("el-input",{attrs:{disabled:!0,placeholder:"请输入联行号"},model:{value:t.bank_code,callback:e=>{this.$set(t,"bank_code",e)}}})])])]),this.formData.gather_account_list.length>1&&e("el-button",{class:"delete-btn",attrs:{type:"danger",icon:"el-icon-close"},on:{click:()=>this.removeAccount(t,a)}})]))),e("tg-button",{attrs:{icon:"ico-btn-add",size:"small"},on:{click:this.addAccount},class:"add-account-btn"},["新增收款账户"]),e("div",{class:"block-title star"},["资质信息",e("span",{class:"tips"},["（支持扩展名：.pdf .jpg .png .jpeg，单个文件不超过30M）"])]),e("div",{class:"form-block-container"},[e("el-form-item",{attrs:{prop:"business_license",rules:[{required:!0,message:"请上传营业执照",trigger:["blur","change"]}]}},[e("div",{style:"padding-left: 10px"},[e("tg-upload",{attrs:{action:"/api/medium/upload_file",disabled:this.formData.business_license?.length>=1,"show-file-list":!1,beforeUpload:u.Z.ValidationFileUpload({image:!0,pdf:!0,fileSize:30}),success:e=>{null===this.formData.business_license&&(this.formData.business_license=[]),this.formData.business_license.push(e.data.source)}}},[e("tg-button",{attrs:{disabled:this.formData.business_license?.length>=1,icon:"ico-upload-lite"}},["营业执照"])])])]),e("el-form-item",{attrs:{prop:"id_card_back"}},[e("div",[e("tg-upload",{attrs:{action:"/api/medium/upload_file","show-file-list":!1,disabled:this.formData.account_permit?.length>=1,beforeUpload:u.Z.ValidationFileUpload({image:!0,pdf:!0,fileSize:30}),success:e=>{null===this.formData.account_permit&&(this.formData.account_permit=[]),this.formData.account_permit.push(e.data.source)}}},[e("tg-button",{attrs:{disabled:this.formData.account_permit?.length>=1,icon:"ico-upload-lite"}},["银行信息证明"])])])])]),e("div",{class:"business-license-box"},[this.formData.business_license?.length>0&&e("p",{class:"license-item"},[e("span",{class:"title"},["营业执照："]),e("upload-file-list",{model:{value:this.formData.business_license,callback:e=>{this.$set(this.formData,"business_license",e)}}})]),this.formData.account_permit?.length>0&&e("p",{class:"license-item"},[e("span",{class:"title"},["开户许可证："]),e("upload-file-list",{model:{value:this.formData.account_permit,callback:e=>{this.$set(this.formData,"account_permit",e)}}})])]),e("div",{class:"block-title star"},["联系人及地址",e("span",{class:"tips"},["（填写说明：微信号、邮箱2选1必填；邮箱用于接收电子发票）"])]),e("div",{class:"flex-line-box"},[e("div",{class:"flex-line-item"},[e("el-form-item",{attrs:{label:"联系人",prop:"contact_person",rules:[{required:!0,message:"请输入联系人",trigger:"blur"}]}},[e("el-input",{attrs:{placeholder:"请输入联系人"},model:{value:this.formData.contact_person,callback:e=>{this.$set(this.formData,"contact_person",e)}}})])]),e("div",{class:"flex-line-item"},[e("el-form-item",{attrs:{label:"手机号",prop:"phone",rules:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:(e,t,a)=>{const n=/^1\d{10}$/;""===t||n.test(t)?a():a(new Error("手机号码格式不正确"))},trigger:"blur"}]}},[e("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:this.formData.phone,callback:e=>{this.$set(this.formData,"phone",e)}}})])]),e("div",{class:"flex-line-item"},[e("el-form-item",{attrs:{label:"微信号",prop:"wechat"}},[e("el-input",{attrs:{maxlength:20,"show-word-limit":!0,placeholder:"请输入微信号"},model:{value:this.formData.wechat,callback:e=>{this.$set(this.formData,"wechat",e)}}})])]),e("div",{class:"flex-line-item"},[e("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[e("el-input",{attrs:{placeholder:"请输入邮箱"},model:{value:this.formData.email,callback:e=>{this.$set(this.formData,"email",e)}}})])])]),e("div",{class:"block-title star"},["公司介绍"]),e("div",{class:"flex-line-box"},[e("div",{class:"double"},[e("el-form-item",{attrs:{prop:"company_profile",rules:[{required:!0,message:"请输入公司介绍",trigger:["blur","change"]},{min:20,message:"公司介绍不少于20字",trigger:"blur"}]}},[e("el-input",{attrs:{type:"textarea",rows:4,maxlength:"500","show-word-limit":!0,placeholder:"请输入公司介绍或公司相关链接（不少于20字）"},model:{value:this.formData.company_profile,callback:e=>{this.$set(this.formData,"company_profile",e)}}})])])]),e("div",{class:"flex-line-box"},[e("div",{style:"min-width: 450px"},[e("el-form-item",[e("div",{class:"resume"},[this.formData.profile?.length<5&&e("tg-upload",{attrs:{action:"/api/medium/upload_file","show-file-list":!1,beforeUpload:u.Z.ValidationFileUpload({fileSize:30,image:!0,file:!0}),success:e=>{null===this.formData.profile&&(this.formData.profile=[]),this.formData.profile.push(e.data.source)}}},[e("tg-button",{attrs:{icon:"ico-upload-lite"}},["介绍资料"])]),e("div",{class:"tips"},["(支持扩展名：.pdf .ppt .doc .jpg .png .jpeg，限传5份文件，单份不超过30M)"])]),e("upload-file-list",{model:{value:this.formData.profile,callback:e=>{this.$set(this.formData,"profile",e)}}})])])])])])]),e("div",{class:"options"},[1!==this.verify_status&&e("tg-button",{style:"margin-right: 18px",attrs:{size:"small"},on:{click:this.onSaveInfo}},["保存信息"]),e("tg-button",{attrs:{type:"primary"},on:{click:this.onSubmit}},["提交审核"])]),e("tg-mask-loading",{attrs:{visible:this.loading,content:"正在保存数据，请稍候..."}})])}}),v=g,b=a(1001),y=(0,b.Z)(v,n,r,!1,null,"1b576d72",null),k=y.exports},5648:function(e,t,a){"use strict";a.d(t,{DC:function(){return m},JM:function(){return h},MK:function(){return _},OH:function(){return p},WC:function(){return b},WW:function(){return f},cT:function(){return s},dD:function(){return u},fd:function(){return v},h9:function(){return g},j1:function(){return i},lQ:function(){return o},oR:function(){return l},vx:function(){return d},xH:function(){return c}});var n=a(76012),r=a(74750);function s(e){return(0,n.ZP)({url:"/api/medium/upload_file",method:"post",data:e,timeout:36e5})}function o(e){return(0,n.ZP)({url:"/api/medium/add_company",method:"post",data:e})}function i(e){return(0,n.ZP)({url:"/api/medium/update_company",method:"post",data:e})}function c(e){return(0,n.ZP)({url:"/api/medium/query_company_list",method:"get",params:e})}function l(e){return(0,n.ZP)({url:"/api/medium/delete_company",method:"post",data:e})}function u(e){return(0,n.ZP)({url:"/api/medium/company_detail",method:"get",params:e})}function p(e){const t=(0,r.LP)();window.open(`https://data.goumee.com/api/medium/export_company?ids=${e.ids}&Authorization=${t}`)}function m(e){return(0,n.ZP)({url:"/api/kol/save_kol",method:"post",data:e})}function d(e){return(0,n.ZP)({url:"/api/kol/query_kol",method:"get",params:e})}function h(e){return(0,n.ZP)({url:"/api/kol/delete_kol",method:"post",data:e})}function _(e){const t=(0,r.LP)();let a="";for(const n in e)e[n]&&(a+=`&${n}=${e[n]}`);a=a.substr(1,a.length),window.open(`https://data.goumee.com/api/kol/export_kols?${a}&Authorization=${t}`)}function f(e){return(0,n.ZP)({url:"/api/kol/upload_case",method:"post",data:e})}function g(e){return(0,n.ZP)({url:"/api/kol/upload_photo",method:"post",data:e})}function v(e){return(0,n.ZP)({url:"/api/medium/get_company_name_and_id",method:"get",params:e})}function b(e){return(0,n.ZP)({url:"/api/kol/approval_kol",method:"post",data:e})}},11676:function(e,t,a){"use strict";a.d(t,{K:function(){return p}});a(26699);var n=a(48606);const r=[".pdf",".doc",".docx",".ppt",".pptx"],s=[".mp4"],o=[".png",".jpg",".jpeg"],i=[".xls",".xlsx",".csv"],c=[".doc",".docx"],l=[".pdf"],u=[".csv"],p=e=>t=>{const a=/(\.[^.]+)$/.exec(t.name);let p="";a&&(p=a[1]);const m=[];if(e.image&&m.push(...o),e.file&&m.push(...r),e.video&&m.push(...s),e.excel&&m.push(...i),e.pdf&&m.push(...l),e.doc&&m.push(...c),e.csv&&m.push(...u),e.extensions&&m.push(...e.extensions),m.length>0&&!m.includes(p))return n.Message.warning(`文件格式不正确，请使用 ${m.join(";")}`),!1;if(void 0!==e.fileSize){const a=t.size/1024/1024<e.fileSize;if(!a)return n.Message.warning(`文件不能超过${e.fileSize}MB!`),!1}return!0};t["Z"]={ValidationFileUpload:p}},318:function(e,t,a){"use strict";a.d(t,{Zn:function(){return Y},Qv:function(){return z},F9:function(){return K},aw:function(){return T},aI:function(){return q},kg:function(){return L},K:function(){return Z},j5:function(){return X},wu:function(){return y},yz:function(){return O},Mj:function(){return R},id:function(){return U},UK:function(){return b},ZP:function(){return H}});a(21703);var n=a(76012),r=a(64236);const s="/api/medium/get_company_name_and_id",o="/api/model/del_model",i="/api/anchor/del_anchor",c="/api/auth/query_anchor_maintainer",l="/api/anchor/save_anchor_maintainer",u="/api/anchor/get_anchor_key_info",p="/api/anchor/get_anchor_key_info_log",m="/api/medium/add_tmp_company",d="/api/anchor/contract/associate_project",h=e=>{if(!0!==e.data.success)throw new Error(e.data.message);return e.data.data},_=async()=>(0,n.dX)("/api/anchor/good_at_categories"),f=async()=>(0,n.dX)("/api/anchor/anchor_tags"),g=async e=>(0,n.dX)(`/api/anchor/delete_anchor/${e}`),v=async e=>(0,n.SO)("/api/anchor/verify_anchor",(0,r.jG)(e)),b=async e=>(0,n.SO)(m,(0,r.jG)(e)),y=async e=>(0,n.SO)("/api/medium/add_company",(0,r.jG)(e)),k=async e=>(0,n.SO)("/api/anchor/save_anchor_basic",e).then(h),D=async e=>(0,n.SO)("/api/anchor/save_anchor_other",(0,r.jG)(e)).then(h),F=async e=>(0,n.dX)("/api/anchor/list_anchors",{params:(0,r.jG)(e)}).then(h),x=async e=>(0,n.dX)(`/api/anchor/get_anchor_detail/${e}/`).then(h),w=async e=>(0,n.dX)("/api/anchor/apply/list",{params:(0,r.jG)(e)}).then(h),A=async e=>(0,n.dX)(`/api/anchor/apply/list/${e.anchor_id}`,{params:(0,r.jG)(e)}).then(h),C=async e=>(0,n.dX)("/api/shop_live/query_uncompleted_projects",{params:(0,r.jG)(e)}).then(h),$=async e=>(0,n.dX)("/api/shop_live/query_shop_live_project",{params:(0,r.jG)(e)}).then(h),j=async e=>(0,n.SO)("/api/anchor/apply/schedule",{apply_id:e}).then(h),G=async e=>(0,n.SO)("/api/anchor/apply/cancel",{apply_id:e}).then(h),P=async e=>(0,n.SO)("/api/anchor/apply/feedback",(0,r.jG)(e)).then(h),B=async e=>(0,n.SO)("/api/anchor/save_anchor_cooperation",(0,r.jG)(e)).then(h),S=async e=>(0,n.SO)("/api/anchor/apply/pilot",(0,r.jG)(e)).then(h),I=async e=>(0,n.SO)("/api/anchor/apply/audition",(0,r.jG)(e)).then(h),q=async e=>(0,n.dX)("/api/auth/query_user_v2",{params:(0,r.jG)(e)}).then(h),Z=async(e,t)=>(0,n.dX)("/api/anchor/list_settlement_companies",{params:{company_name:e,verify_status:t}}).then(h),E=async e=>(0,n.dX)(`/api/anchor/delete_anchor_cooperation/${e}/`).then(h),M=async e=>(0,n.dX)(`/api/anchor/list_anchor_cooperations/${e}/`).then(h),X=async e=>(0,n.dX)("/api/model/model_list",{params:(0,r.jG)(e)}).then(h),O=async e=>(0,n.SO)("/api/model/save_model",(0,r.jG)(e)).then(h),L=async e=>(0,n.dX)(s,{params:{...(0,r.jG)(e)}}),z=async e=>(0,n.SO)(o,{id:e}),Y=async e=>(0,n.SO)(i,{id:e}),R=async e=>(0,n.dX)(c,{params:{...(0,r.jG)({search_value:e})}}),U=async e=>(0,n.SO)(l,{...(0,r.jG)(e)}),K=async e=>(0,n.dX)(u,{params:{...(0,r.jG)(e)}}),T=async e=>(0,n.dX)(p,{params:{...(0,r.jG)(e)}}),V=async(e,t)=>(0,n.dX)("/api/anchor/check_anchor_wechat",{params:{wechat:e,anchor_id:t}}),W=async e=>(0,n.SO)(d,{...(0,r.jG)(e)});var H={GetCheckAnchorWechat:V,GetAnchorGoodAtCategories:_,GetAnchorApplyCancel:G,PostSaveModel:O,GetAnchorApplyList:w,GetModelList:X,GetAnchorApplyDetail:A,PostAnchorOther:D,GetAnchorTags:f,PostAnchorBasic:k,GetAnchorList:F,GetAnchorDetail:x,GetAnchorDelete:g,PostAnchorVerify:v,GetListSettlementCompanies:Z,GetAnchorApplySchedule:j,PostAnchorApplyFedback:P,GetListAnchorCooperations:M,GetUnCompletedProjects:C,PostAnchorCooperation:B,GetAuthQueryUser:q,PostAnchorApplyPilot:S,PostAnchorApplyAudition:I,GetShopLiveProject:$,GetDeleteAnchorCooperation:E,PostModifyCompany:y,SaveAnchorProjectContract:W}},82741:function(e,t,a){"use strict";a.d(t,{I:function(){return r},u:function(){return s}});var n=a(71340);const r=(e,t)=>{const a="string"===typeof t?{title:t}:t;return new Promise((t=>{e.root.$TDialog({...a,onConfirm:()=>t(!0),onCancel:()=>t(!1)})}))},s=e=>{const t="string"===typeof e?{title:e}:e;return new Promise(((e,a)=>{(0,n.t)({...t,onConfirm:()=>e(!0),onCancel:()=>a()})}))}},44928:function(e,t,a){"use strict";a.d(t,{t:function(){return r}});var n=a(86834);const r=()=>{const e=new Proxy({},{get(e,t){return Reflect.get(n.Z,t)}});return e}},8136:function(e,t,a){"use strict";a.d(t,{AR:function(){return A},BG:function(){return F},Cl:function(){return k},D$:function(){return i},EI:function(){return p},Hx:function(){return s},LY:function(){return l},Nv:function(){return c},Ps:function(){return G},Rd:function(){return w},ZC:function(){return d},_t:function(){return g},bI:function(){return y},g9:function(){return f},hy:function(){return m},jh:function(){return $},mB:function(){return v},mx:function(){return j},nA:function(){return C},q0:function(){return x},sc:function(){return D},ug:function(){return b},us:function(){return _},vJ:function(){return h},wA:function(){return o},xF:function(){return u}});var n=a(20713),r=a.n(n);function s(e,t){const a=e.display_type;switch(a){case 0:return"混播";case 1:return"专场"}}const o=["综合","美妆","生活","服饰","美食","母婴","数码","家装","健康","宠物","时尚","配饰","家电","测评","旅行","运动","摄影","情感","汽车","搞笑","教育","财经","萌娃","文化","影视","娱乐","游戏","海外","才艺","二次元","高颜值"],i=["美妆","生活","服饰","美食","母婴","数码","家装","健康","宠物","时尚","配饰","家电","测评","旅行","运动","摄影","情感","汽车","搞笑","教育","财经","萌娃","文化","影视","娱乐","游戏","海外","才艺","二次元","高颜值","行政采购"];function c({category:e}){return 0===e?"无":o[e]}function l(e,t){const a=e.sales_price_period;switch(a){case 0:return"0 ~ 100";case 1:return"100 ~ 200";case 2:return"200以上"}}function u(e,t="YYYY-MM-DD"){return r()(e).format(t)}function p(e,t="YYYY-MM-DD hh:mm:ss"){return r()(e+"+0800").format(t)}function m(e,t){return r()(e+"+0800").format(t||"YYYY-MM-DD")}function d(e){let t=parseInt(e,10),a=0,n=0;t>=60&&(a=parseInt(t/60,10),t=parseInt(t%60,10),a>=60&&(n=parseInt(a/60,10),a=parseInt(a%60,10)));let r=""+(parseInt(t,10)<10?"0"+parseInt(t,10):parseInt(t,10));return r=(parseInt(a,10)<10?"0"+parseInt(a,10):parseInt(a,10))+":"+r,r=(parseInt(n,10)<10?"0"+parseInt(n,10):parseInt(n,10))+":"+r,r}function h(e){const t=e.is_presell;switch(t){case-1:return"未录入";case 1:return"预售";case 0:return"非预售";case 2:return"预热"}}function _(e){const t=e.is_display;switch(t){case-1:return"未录入";case 2:return"已出单";case 1:return"未出单"}}function f(e){const t=e.duration;switch(t){case-1:return"未录入";case 0:return"5 ~ 10分钟";case 1:return"10 ~ 15分钟";case 2:return"15 ~ 20分钟";case 3:return"0 ~ 5分钟";case 4:return"20分钟以上"}}function g(e){const t=e.display_period;switch(t){case-1:return"未录入";case 0:return"白天";case 1:return"晚上"}}function v(e){const t=e.shop_type;switch(t){case 0:return"无";case 1:return"淘宝店";case 2:return"天猫店";case 3:return"抖音店";default:return"--"}}function b(e){const t=e.company_type;switch(t){case 0:return"无";case 1:return"同行机构";case 2:return"广告公司";case 3:return"品牌TP";case 4:return"直客"}}function y(e,t){const a=/[^\x00-\xff]/g;let n;if(e.replace(a,"**").length>t){n=Math.floor(t/2);for(let r=n,s=e.length;r<s;r++)if(e.substr(0,r).replace(a,"**").length>=t)return e.substr(0,r)}return e}const k=[{type:0,value:"全部"},{type:1,value:"普通客户"},{type:2,value:"重点客户"},{type:3,value:"战略客户"},{type:4,value:"KA客户"}],D=[{value:"全部",type:0},{value:"淘宝图文",type:9},{value:"小红书",type:1},{value:"微信公众号",type:2},{value:"新浪微博",type:3},{value:"淘宝短视频",type:10},{value:"抖音",type:4},{value:"快手",type:5},{value:"哔哩哔哩",type:6},{value:"淘宝直播",type:7},{value:"一直播",type:8},{value:"线下场地搭建",type:11},{value:"线下视觉设计",type:12},{value:"活动策划执行",type:13}],F=[{value:"淘宝图文",type:9},{value:"小红书",type:1},{value:"微信公众号",type:2},{value:"新浪微博",type:3},{value:"淘宝短视频",type:10},{value:"抖音",type:4},{value:"快手",type:5},{value:"哔哩哔哩",type:6},{value:"淘宝直播",type:7},{value:"一直播",type:8},{value:"线下场地搭建",type:11},{value:"线下视觉设计",type:12},{value:"活动策划执行",type:13},{value:"行政采购",type:14}],x=[{value:3,text:"抖音店"},{value:1,text:"淘宝店"},{value:2,text:"天猫店"}],w=[{value:1,text:"同行机构"},{value:2,text:"广告公司"},{value:3,text:"品牌TP"},{value:4,text:"直客"}],A=[{type:0,value:"--"},{type:1,value:"同行机构"},{type:2,value:"广告公司"},{type:3,value:"品牌TP"},{type:4,value:"直客"}],C=["#D15CB4","#6090F0","#FF9C69","#59B6DF","#C673F0","#52CCC2","#F0737F","#6FCC66","#DBD26A","#9D73F0","#FAB36E","#A2D160","#D15CB4","#58B89F","#E06C9C","#8873F0","#FA9384","#C251A6","#486DB5","#C77A52","#4185A3","#9557B5","#3C968F","#B55760","#4F9149","#A19A4D","#7657B5","#BF8954","#759645","#964282","#3C7D6C","#A65073","#6556B3","#BF7065","#873874"],$=["#6090F0","#FF9C69","#52CCC2","#59B6DF","#C673F0","#D15CB4","#F0737F","#DBD26A","#FAB36E","#A2D160","#6FCC66","#58B89F","#8873F0","#FA9384","#9D73F0","#E06C9C","#C251A6"],j=["#1E8DFF","#FFBF00","#10C0D3","#9273F8","#FE9C25","#00B942","#FFCD39","#FF829D","#00A3FF","#3AD08E","#F1DC2F","#845EF7","#FF7F00","#B3DC12","#009999","#2877FF","#D977F2","#FFC073","#768FF3","#81E5B1","#BAC8FF","#E599F8","#E7E275","#FF7E7E","#F7A0B8","#49C6F1","#B197FC","#53D66F","#FF97AD","#FDD866"];function G(e){for(const t of e)if("一"<=t&&t<="龥")return t;return e[0]}},20713:function(e,t,a){e.exports=a(70680)(52703)}}]);