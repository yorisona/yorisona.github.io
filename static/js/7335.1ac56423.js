"use strict";(self["webpackChunkgoumee_star_temp"]=self["webpackChunkgoumee_star_temp"]||[]).push([[7335],{70891:function(t,a,s){s.d(a,{Z:function(){return r}});var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"approve-progress"},[s("div",{staticClass:"progress-header"},[t._v("审批进度")]),s("div",{staticClass:"progress-main"},[t._l(t.workInfos,(function(a,e){return s("div",{key:e,staticClass:"progress-item",style:{"border-left":e===t.workInfos.length-1&&4!==t.checkStatus?"none !important":a.oa_review_result?"2px solid #EC4141 !important":"2px solid #6e6efa"}},[s("div",{staticClass:"items-line"},[s("div",{staticClass:"items"},[s("div",{staticClass:"item-bac"},[e===t.workInfos.length-1&&3===t.checkStatus?s("tg-icon",{staticClass:"step-active",staticStyle:{position:"relative",left:"1px"},attrs:{name:"ico-cross-red"}}):s("tg-icon",{staticClass:"step-active",class:e===t.workInfos.length-1&&4!==t.checkStatus?"final-line":"",attrs:{name:"ico-tick"}}),s("span",{staticClass:"step-name"},[t._v(t._s(a.nodeName))])],1)]),s("p",{staticClass:"step-con"},[t._v(t._s(a.operatorName))]),s("p",{staticClass:"item-time"},[t._v(" "+t._s(a.operateDate)+" "+t._s(a.operateTime.split(":")[0])+":"+t._s(a.operateTime.split(":")[1])+" ")]),e===t.workInfos.length-1&&(a.oa_review_result||a.remark)?s("p",{staticClass:"step-con-fail"},[t._v(" 理由："+t._s(a.oa_review_result||a.remark)+" ")]):t._e()])])})),4===t.checkStatus?s("div",{staticClass:"progress-item",staticStyle:{border:"none !important",height:"10px"}},[s("div",{staticClass:"items-line"},[s("div",{staticClass:"items"},[s("div",{staticClass:"item-bac"},[s("tg-icon",{staticClass:"step-active",staticStyle:{"margin-left":"3px",color:"gray !important","font-size":"14.5px"},attrs:{name:"ico-waiting"}}),t.workInfos&&t.workInfos.length>0?s("span",{staticClass:"step-name",staticStyle:{width:"130px","font-size":"13px"}},[t._v("等待"+t._s(t.workInfos[t.workInfos.length-1].receivedPersons)+"审批")]):t._e()],1)])])]):t._e()],2),s("div",{staticStyle:{height:"20px"}})])},i=[],n=s(76612),o={name:"ApproveProgress",components:{TgIcon:n.Z},props:{workInfos:{type:Array,default:()=>[]},checkStatus:{type:Number,default:()=>0}}},l=o,c=s(1001),p=(0,c.Z)(l,e,i,!1,null,"6309727b",null),r=p.exports},50947:function(t,a,s){s.r(a),s.d(a,{default:function(){return k}});var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"tg-page-container supplier-company-detail",staticStyle:{"flex-grow":"1"}},[s("TgBreadcrumbs",{attrs:{routes:t.routes}}),s("tg-card",[s("div",{staticClass:"supplier-company-info",staticStyle:{padding:"10px 0px","margin-top":"6px"}},[s("div",{staticClass:"supplier-company-info-detail"},[s("div",{staticClass:"supplier-company-info-header"},[s("span",{staticClass:"name line-clamp-1",staticStyle:{"margin-right":"12px"}},[t._v(t._s(t.company.name||"--"))]),s("div",{staticClass:"supplier-company-status"},[t.company.approval_flow_detail.length>0?s("el-popover",{attrs:{placement:"bottom",width:"246",trigger:"hover","popper-class":"company-detail-approve-progress-popper"},scopedSlots:t._u([{key:"reference",fn:function(){return[s("span",{staticClass:"mgr-10",class:[t.status_tag_class]},[t._v(t._s(t.contract_status_str))])]},proxy:!0}],null,!1,216125623)},[s("NewApproveProgress",{attrs:{"work-infos":t.company.approval_flow_detail,checkStatus:t.verify_status}})],1):t._e(),1===t.company.verify_status?s("tg-icon",{staticClass:"case-edit",attrs:{name:"ico-edit"},on:{click:t.handleEditClick}}):t._e()],1),s("span",{staticClass:"add-by"},[t._v("录入人："+t._s(t.company.add_by||"--"))])])])])]),s("tg-card",{staticClass:"mgt-18 company-detail-info",staticStyle:{"flex-grow":"1"}},[s("div",{staticClass:"platform-info bottom-style"},[s("div",{staticClass:"info-content",staticStyle:{"row-gap":"15px"}},[s("div",{staticStyle:{display:"flex"}},[s("span",{staticClass:"label",staticStyle:{width:"70px"}},[t._v("擅长平台：")]),t.platforms&&t.platforms.length>0?s("div",{staticClass:"platforms-or-areas"},t._l(t.platforms,(function(a){return s("span",{key:a,staticClass:"item"},[t._v(t._s(a))])})),0):s("div",{staticClass:"platforms-or-areas"},[t._v("--")])]),s("div",{staticStyle:{display:"flex"}},[s("span",{staticClass:"label",staticStyle:{width:"70px"}},[t._v("擅长领域：")]),t.areas&&t.areas.length>0?s("div",{staticClass:"platforms-or-areas"},t._l(t.areas,(function(a){return s("span",{key:a,staticClass:"item"},[t._v(t._s(a))])})),0):s("div",{staticClass:"platforms-or-areas"},[t._v("--")])])])]),s("div",{staticClass:"finance-info bottom-style",staticStyle:{"padding-bottom":"12px"}},[s("head-lines",{staticStyle:{margin:"24px 0px 16px 0px"},attrs:{"title-font":16,title:"财务信息"}}),s("div",{staticClass:"info-content",staticStyle:{padding:"0px 16px 0px 16px","margin-top":"6px"}},[s("div",{staticClass:"info-item"},[s("span",{staticClass:"label"},[t._v("是否专票：")]),s("span",{staticClass:"value"},[t._v(t._s(t.company.special_ticket?"是":0===t.company.special_ticket?"否":"--"))])]),s("div",{staticClass:"info-item"},[s("span",{staticClass:"label"},[t._v("财务电话：")]),s("span",{staticClass:"value line-clamp-1"},[t._v(t._s(t.company.contact_no2||"--"))])])]),t._l(t.company.gather_account_list,(function(a,e){return s("div",{key:e,staticClass:"info-content",staticStyle:{"/*border-top":"dashed 1px #dcdfe6","*/\n          border-radius":"4px","margin-bottom":"12px",padding:"16px 0px 8px 0px",margin:"0px 16px 0px 16px","background-image":"linear-gradient(to right, #e0e4ea 0%, #e0e4ea 50%, transparent 30%)","background-size":"13px 1px","background-repeat":"repeat-x"}},[s("div",{staticClass:"info-item",staticStyle:{"margin-bottom":"8px"}},[s("span",{staticClass:"label"},[t._v("收款账号类型：")]),s("span",{staticClass:"value line-clamp-1"},[t._v(t._s(1===a.account_type?"银行账户":"支付宝账户"))])]),1===a.account_type?[s("div",{staticClass:"info-item",staticStyle:{"margin-bottom":"8px"}},[s("span",{staticClass:"label"},[t._v("银行账号：")]),s("span",{staticClass:"value line-clamp-1"},[t._v(t._s(a.bank_card_number))])]),s("div",{staticClass:"info-item",staticStyle:{"margin-bottom":"8px"}},[s("span",{staticClass:"label"},[t._v("开户地区：")]),s("span",{staticClass:"value line-clamp-1"},[t._v(t._s(a.bank_region[0])+" "+t._s(a.bank_region[1]))])]),s("div",{staticClass:"info-item",staticStyle:{"margin-bottom":"8px"}},[s("span",{staticClass:"label"},[t._v("开户支行：")]),s("span",{staticClass:"value line-clamp-1"},[t._v(t._s(a.bank_sub_name))])]),s("div",{staticClass:"info-item",staticStyle:{"margin-bottom":"8px"}},[s("span",{staticClass:"label"},[t._v("开户银行：")]),s("span",{staticClass:"value line-clamp-1"},[t._v(t._s(a.bank_name))])]),s("div",{staticClass:"info-item",staticStyle:{"margin-bottom":"8px"}},[s("span",{staticClass:"label"},[t._v("银联号：")]),s("span",{staticClass:"value line-clamp-1"},[t._v(t._s(a.bank_code))])])]:s("div",{staticClass:"info-item",staticStyle:{"margin-bottom":"8px"}},[s("span",{staticClass:"label"},[t._v("支付宝账号：")]),s("span",{staticClass:"value line-clamp-1"},[t._v(t._s(a.alipay_account))])])],2)}))],2),s("div",{staticClass:"qualification-info bottom-style"},[s("head-lines",{staticStyle:{margin:"24px 0px 16px 0px"},attrs:{"title-font":16,title:"资质信息"}}),s("div",{staticClass:"info-content",staticStyle:{padding:"0px 16px 0px 16px","margin-top":"6px"}},[s("div",{staticClass:"info-item"},[s("span",{staticClass:"label"},[t._v("营业执照：")]),s("div",{staticClass:"value"},[t._l(t.company.business_license,(function(t,a){return s("div",{key:a,staticClass:"line-clamp-1 uploaded-file",staticStyle:{"flex-shrink":"0"}},[s("FileItem",{key:1001,attrs:{filepath:t,readonly:!0,showPreview:!1}})],1)})),0===(t.company.business_license?t.company.business_license.length:0)?s("div",[t._v(" -- ")]):t._e()],2)]),s("div",{staticClass:"info-item"},[s("span",{staticClass:"label",staticStyle:{width:"98px"}},[t._v("银行信息证明：")]),s("div",{staticClass:"value"},[t._l(t.company.account_permit,(function(t,a){return s("div",{key:a,staticClass:"line-clamp-1 uploaded-file",staticStyle:{"flex-shrink":"0"}},[s("FileItem",{key:1002,attrs:{filepath:t,readonly:!0,showPreview:!1}})],1)})),0===(t.company.account_permit?t.company.account_permit.length:0)?s("div",[t._v(" -- ")]):t._e()],2)])])],1),s("div",{staticClass:"contract-info bottom-style",staticStyle:{"padding-bottom":"12px"}},[s("head-lines",{staticStyle:{margin:"24px 0px 16px 0px"},attrs:{"title-font":16,title:"联系人及地址"}}),s("div",{staticClass:"info-content",staticStyle:{padding:"0px 16px 0px 16px","margin-top":"6px","margin-bottom":"0px"}},[s("div",{staticClass:"info-item",staticStyle:{"margin-bottom":"15px"}},[s("span",{staticClass:"label"},[t._v("联系人：")]),s("span",{staticClass:"value line-clamp-1"},[t._v(t._s(t.company.contact_person?t.company.contact_person:"--"))])]),s("div",{staticClass:"info-item",staticStyle:{"margin-bottom":"15px"}},[s("span",{staticClass:"label"},[t._v("手机号：")]),s("span",{staticClass:"value line-clamp-1"},[t._v(t._s(t.company.contact_no?t.company.contact_no:"--"))])]),s("div",{staticClass:"info-item",staticStyle:{"margin-bottom":"15px"}},[s("span",{staticClass:"label"},[t._v("微信号：")]),s("span",{staticClass:"value line-clamp-1"},[t._v(t._s(t.company.wechat?t.company.wechat:"--"))])]),s("div",{staticClass:"info-item",staticStyle:{"margin-bottom":"15px"}},[s("span",{staticClass:"label"},[t._v("邮箱：")]),s("span",{staticClass:"value line-clamp-1"},[t._v(t._s(t.company.contact_email?t.company.contact_email:"--"))])])])],1),s("div",{staticClass:"company-info bottom-style"},[s("head-lines",{staticStyle:{margin:"24px 0px 16px 0px"},attrs:{"title-font":16,title:"公司介绍"}}),s("div",{staticClass:"info-content",staticStyle:{"margin-top":"6px"}},[s("div",{staticClass:"supplier-company-info-description",staticStyle:{"margin-left":"4px"}},[t.company.description||t.company.description_file?[s("div",{staticClass:"summary-description"},[s("span",{staticClass:"line-clamp-1",staticStyle:{"line-height":"22px"}},[t._v(t._s(t.company.description?t.company.description:"--"))])]),s("div",{staticClass:"detail-description mgt-6 mgl-16"},[t.company.description_file.length>0?[s("div",{key:"desc"+t.index,staticClass:"label"},[t._v("详细介绍：")]),t._l(t.company.description_file,(function(t,a){return[s("FileItem",{key:a,staticStyle:{width:"300px"},attrs:{filepath:t,readonly:!0,showPreview:!1}})]}))]:t._e()],2)]:s("div",{staticStyle:{color:"#a4b2c2"}},[t._v("暂无公司介绍哦~")])],2)])],1)]),s("CompanyAdd",{attrs:{id:t.id,editCompany:t.companyFormEdit,visible:t.companyVisible},on:{"update:visible":function(a){t.companyVisible=a},save:t.saveCompany}})],1)},i=[],n=(s(26699),s(97434)),o=s(5648),l=s(8136),c=s(57325),p=s(1763),r=s(78902),m=s(21757),d=s(64519),v=s(24905),u=s(64236),_=s(74750),y=s(70891),f=s(93573);const g=[{name:p.bv.manage,title:"公司管理"},{path:"",title:"公司详情"}],C=new Map([["image/jpeg","picture"],["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","excel"],["application/vnd.openxmlformats-officedocument.wordprocessingml.document","word"],["application/msword","word"],["application/pdf","pdf"],["xlsx","excel"],["docx","word"],["doc","word"],["pdf","pdf"],["jpeg","picture"]]);var x=(0,n.defineComponent)({name:"mediumDetail",props:{id:Number},components:{CompanyAdd:v.Z,NewApproveProgress:y.Z},setup(t,a){const s=(0,n.ref)(!1),e=(0,n.ref)(void 0),i=(0,n.ref)(!1),v=(0,n.ref)({id:void 0,add_by:"",add_by_id:void 0,address:"",areas:[],city:"",county:"",description:"",description_file:"",logo:"",name:"",platforms:[],province:"",quotation:"",special_ticket:1,contact_email:"",contact_no:"",contact_person:"",wechat:"",contact_email2:"",contact_no2:"",contact_person2:"",wechat2:"",bank_of_deposit:"",bank_card_number:"",alipay_account:"",business_license:[],account_permit:[],quotation_size:0,verify_status:void 0,approval_flow_detail:[],bank_province:"",bank_city:"",bank_name:"",bank_sub_name:"",bank_code:""}),y=(0,n.computed)((()=>{const t=(0,m.kG)(r.HN.supplier_company_edit),a=(0,m.kG)(r.HN.supplier_company_delete);return{canEdit:t,canDelete:a}})),x=(0,n.computed)((()=>v.value.platforms.length>0?v.value.platforms.map((t=>{const a=l.BG.find((a=>a.type===Number(t)));return a?.value})).filter((t=>void 0!==t)):[])),b=(0,n.computed)((()=>v.value.areas.length>0?v.value.areas.map((t=>l.D$[Number(t)-1])).filter((t=>void 0!==t)):[])),h=async()=>{const a={companyId:t.id};s.value=!0;const e=await(0,o.dD)(a);s.value=!1,e.data.success&&(v.value=e.data.data)},w=(0,n.computed)((()=>f.ZN.find(((t,a)=>t.value===v.value.verify_status))?.label)),k=()=>{e.value=JSON.parse(JSON.stringify(v.value)),i.value=!0},S=()=>{a.root.$confirm("此操作将删除该公司数据, 是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",iconClass:"warning-icon"}).then((()=>{const s={ids:t.id};(0,o.oR)(s).then((t=>{t.data.success?a.root.$router.push({name:p.bv.list}):a.root.$message(t.data.message)}))}))},I=()=>{i.value=!1,h()},N=t=>{const a=[".png",".jpg",".jpeg"],s=t.toLowerCase();return!!(s.toLowerCase().includes(a[0])||s.includes(a[1])||s.includes(a[2]))&&(d.Z.showDetail((0,c.W)(t,!1)),!0)},P=(t,s=0)=>{if(t){const e=N(t);if(e)return;const i=t,n=[".doc",".ppt",".xls"],o="https://view.officeapps.live.com/op/view.aspx?src="+encodeURIComponent((0,c.W)(i,!1));i.includes(n[0])||i.includes(n[1])||i.includes(n[2])?s<5?window.open(o):a.root.$message({message:"该文件过大（超过5M），请下载后查看！",type:"warning"}):window.open((0,c.W)(i,!1))}},A=()=>{v.value.quotation&&window.open((0,c.W)(v.value.quotation,!1))};(0,n.onBeforeMount)((async()=>{a.root.$route.params.id&&h()}));const $=t=>{if(t&&t.length){const a=t.split("/");return decodeURIComponent(a[a.length-1])??"--"}return"--"},E=(0,n.computed)((()=>{let t=v.value.province;return v.value.city&&(t+=v.value.city),v.value.county&&(t+=v.value.county),v.value.address&&(t+=v.value.address),t||"--"})),D=t=>{const a="picture";let s;if(t){const e=t.split("/")[t.split("/").length-1],i=e.split(".")[e.split(".").length-1];s=C.get(i)??a}return"ico-"+s},T=t=>{const s={headers:{Authorization:(0,_.LP)()??""}};fetch(t,s).then((async s=>{const e=s.clone();try{const t=await e.json();a.root.$message.error(t.message)}catch{if(200===s.status){const a=await s.blob(),e=decodeURIComponent(t.split("/")[t.split("/").length-1]);(0,u.uA)(a,e)}else a.root.$message.error("下载失败")}}))},F=(0,n.computed)((()=>v.value?.verify_status===f.A9.PENDING?"approval-status-label-circle pending".toLowerCase():v.value?.verify_status===f.A9.APPROVED?"approval-status-label-circle normal".toLowerCase():v.value?.verify_status===f.A9.NOT_APPROVED?"approval-status-label-circle failure".toLowerCase():"approval-status-label-circle invalid".toLowerCase())),Z=(0,n.computed)((()=>v.value?.verify_status===f.A9.PENDING?4:v.value?.verify_status===f.A9.APPROVED?2:v.value?.verify_status===f.A9.NOT_APPROVED?3:1)),L=()=>{a.root.$router.push({name:p.bv.companyEdit,params:{id:a.root.$route.params.id}})};return{company:v,companyFormEdit:e,companyVisible:i,getCompanyDetail:h,routes:g,detailLoading:s,Permission:y,editCompany:k,delCompany:S,close:close,saveCompany:I,previewFile:P,downloadQuotation:A,fixFileToken:c.W,getFileName:$,platforms:x,areas:b,address:E,fileTypeIconMap:C,fileIcon:D,downloadFile:T,contract_status_str:w,status_tag_class:F,verify_status:Z,handleEditClick:L}}}),b=x,h=s(1001),w=(0,h.Z)(b,e,i,!1,null,null,null),k=w.exports},64519:function(t,a,s){s.d(a,{Z:function(){return o}});var e=s(64923),i=s(97434),n=(0,i.defineComponent)({setup(){const t=(0,i.ref)(null);return{img:t}},render(t){return t("div",{class:"invoice-view-container"},[t("div",{class:"content"},[t("div",{class:"img-wraper"},[t("img",{attrs:{src:this.img}})]),t("div",{class:"close",on:{click:()=>{this.$emit("close")}}})])])}}),o={showDetail(t){return new Promise((a=>{const s=document.createElement("div");document.body.appendChild(s);const i=new e["default"](n);i.img=t,i.$on("close",(()=>{document.body.removeChild(i.$el),i.$destroy(),a()})),i.$mount(s)}))}}}}]);