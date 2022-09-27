"use strict";(self["webpackChunkgoumee_star_temp"]=self["webpackChunkgoumee_star_temp"]||[]).push([[8492],{37144:function(e,a,n){n.d(a,{Z:function(){return c}});var l=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{attrs:{id:"review-dialog"}},[n("el-dialog",{attrs:{visible:e.dialogVisible,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"560px"},on:{close:e.handleCancel},scopedSlots:e._u([{key:"title",fn:function(){return[n("div",{staticClass:"title"},[e._v("合同审核")])]},proxy:!0},{key:"footer",fn:function(){return[n("div",{staticClass:"footer"},[n("el-button",{attrs:{size:"medium"},on:{click:e.handleCancel}},[e._v("取消")]),n("el-button",{staticClass:"save-btn",attrs:{size:"medium",loading:e.loading},on:{click:e.handleSubmitSave}},[e._v("确定")])],1)]},proxy:!0}])},[n("div",{staticClass:"review-main"},[e.contract_info?n("div",{staticClass:"contract-info"},[n("p",[e._v(" 合同编号："),n("span",{staticClass:"contract-number"},[e._v(e._s(e.contract_info.contract_uid))])]),n("p",[e._v(" 合同状态："),n("span",{class:"status-dot status-dot-"+e.contract_info.contract_status},[n("em"),e._v(e._s(e.contract_info.contract_status_str))])])]):e._e(),n("div",{staticClass:"review-radio"},[n("el-radio-group",{model:{value:e.approve_status,callback:function(a){e.approve_status=a},expression:"approve_status"}},[n("el-radio",{attrs:{label:2}},[e._v("通过")]),n("el-radio",{attrs:{label:3}},[e._v("拒绝")])],1)],1),n("el-input",{directives:[{name:"show",rawName:"v-show",value:3===e.approve_status,expression:"approve_status === 3"}],staticClass:"approve-comment",attrs:{type:"textarea",placeholder:"请输入拒绝原因，不超出100个字",maxlength:"100","show-word-limit":"",rows:3},model:{value:e.comment,callback:function(a){e.comment=a},expression:"comment"}})],1)])],1)},t=[],u=n(86863),o={name:"ReviewDialog",data(){return{dialogVisible:!1,approve_status:void 0,id:null,contract_info:null,comment:"",loading:!1}},methods:{show(e){this.approve_status=e.contract_status,this.contract_info=e,this.id=e.id,this.dialogVisible=!0},handleSubmitSave(){if(!this.approve_status||1===this.approve_status)return this.$message({type:"warning",message:"请选择审核的状态",duration:2e3,showClose:!0}),!1;this.loading=!0,(0,u.jy)({approve_status:this.approve_status,comment:3===this.approve_status?this.comment:"",id:this.id}).then((e=>{e.data.success&&(this.$emit("approved",this.contract_info),this.dialogVisible=!1,this.comment=""),this.$message({type:e.data.success?"success":"warning",message:e.data.message,duration:2e3,showClose:!0}),this.loading=!1})).catch((e=>{this.$message({type:"error",message:"合同审核失败，稍后重试",duration:2e3,showClose:!0}),console.log(e.message),this.loading=!1}))},handleCancel(){this.dialogVisible=!1,this.approve_status=void 0,this.id=null,this.contract_info=null,this.comment=""}}},i=o,r=n(1001),s=(0,r.Z)(i,l,t,!1,null,"4dd1348c",null),c=s.exports},70753:function(e,a,n){n.d(a,{EA:function(){return l},Fp:function(){return d},KH:function(){return p},Kn:function(){return f},L:function(){return t},OW:function(){return c},a0:function(){return o},a9:function(){return s},gV:function(){return i},j0:function(){return u},qe:function(){return r},rL:function(){return b},v6:function(){return m},xR:function(){return v}});const l="/api/shop_live/query_shop_live_project",t="/api/shop_live/get_shop_live_project/:id/",u="/api/shop_live/save_shop_live_project",o="/api/shop_live/query_shop_live_achievement",i="/api/common_business/query_achievement",r="/api/common_business/query_merchant_achievement",s="/api/common_business/del_achievement/{achievement_id}/",c="/api/shop_live/del_shop_live_achievement/{achievement_id}/",v="/api/shop_live/save_shop_live_achievement",f="/api/common_business/save_achievement",p="/api/shop_live/save_shop_live_merchant_achievement",b="/api/shop_live/change_shop_live_project_status",m="/api/shop_live/change_common_project_status",d="/api/shop_live/change_cooperation_status"},89935:function(e,a,n){n.d(a,{$X:function(){return w},CE:function(){return c},E1:function(){return M},E9:function(){return s},Fj:function(){return F},G7:function(){return S},H2:function(){return u},KL:function(){return k},KS:function(){return o},L8:function(){return R},OI:function(){return t},Q:function(){return m},Rd:function(){return _},Sx:function(){return T},Vd:function(){return v},XQ:function(){return b},YE:function(){return r},YK:function(){return y},aX:function(){return i},bM:function(){return V},dQ:function(){return h},gZ:function(){return B},hi:function(){return x},iN:function(){return f},qw:function(){return A},sk:function(){return p},tv:function(){return C},u_:function(){return d},w1:function(){return g}});var l=n(93889);const t=[{value:1,label:"美妆"},{value:2,label:"个护"},{value:3,label:"服饰"},{value:4,label:"美食"},{value:5,label:"母婴"},{value:6,label:"数码"},{value:7,label:"家居"},{value:8,label:"保健"},{value:9,label:"萌宠"},{value:10,label:"箱包"},{value:11,label:"配饰"}],u=[{value:0,label:"混播"},{value:1,label:"专场"}],o=[{value:0,label:"0 ~ 100"},{value:1,label:"100 ~ 200"},{value:2,label:"200以上"}],i=[{value:"每小时观看人数",color:"#7484b7"},{value:"每小时观看数",color:"#4dcdb1"},{value:"场均观看人数",color:"#f895e7"},{value:"场均观看数",color:"#ffbf40"},{value:"粉丝精准度",color:"#5273d3"},{value:"日均开播场次",color:"#d87a80"},{value:"日均开播时长",color:"#b6a2de"},{value:"人均点击数",color:"#FFB980"},{value:"每小时互动数",color:"#d075c4"},{value:"人均互动数",color:"#fd936e"}],r=[{value:"最近15天",label:15},{value:"最近1个月",label:30},{value:"最近3个月",label:90}],s=[{value:"每小时观看人数",color:"#4dcdb1"},{value:"每小时观看数",color:"#7484b7"},{value:"观看数",color:"#b4c4f5"},{value:"观看人数",color:"#f895e7"},{value:"时长",color:"#5ab1ef"}],c=[{value:"最近7场",num:7},{value:"最近15场",num:15},{value:"最近30场",num:30},{value:"最近90场",num:90}],v=["最近15天","最近1个月","最近3个月"],f=[{value:0,label:"白天"},{value:1,label:"晚上"}],p=[{value:3,label:"0 ~ 5分钟"},{value:0,label:"5 ~ 10分钟"},{value:1,label:"10 ~ 15分钟"},{value:2,label:"15 ~ 20分钟"},{value:4,label:"20分钟以上"}],b=[{value:1,label:"预售场"},{value:2,label:"预热场"},{value:0,label:"非预售场"},{value:-1,label:"未录入"}],m=[{value:1,label:"预售场"},{value:2,label:"预热场"},{value:0,label:"非预售场"}],d=[{value:1,label:"未出单"},{value:2,label:"已出单"}],h=[{value:7,label:"最近一周"},{value:15,label:"最近15天"},{value:30,label:"最近一个月"}],_=[{value:l.RJ.Sales,label:"销售合同"},{value:l.RJ.Framework,label:"框架合同"}],g=[{value:1,label:"客户合同"},{value:2,label:"供应商合同"}],y=[{value:3,label:"采买合同"},{value:4,label:"框架合同"}],w=[{value:1,label:"营销业务"},{value:3,label:"抖音店播"},{value:2,label:"淘宝店播"}],C=[{value:1,label:"营销业务"},{value:3,label:"抖音店播"},{value:2,label:"淘宝店播"},{value:4,label:"区域业务"},{value:5,label:"S2B2C"}],k=[{value:1,label:"小红书"},{value:2,label:"微信公众号"},{value:3,label:"新浪微博"},{value:4,label:"抖音"},{value:5,label:"快手"},{value:6,label:"哔哩哔哩"},{value:7,label:"淘宝直播"},{value:8,label:"一直播"},{value:9,label:"淘宝图文"},{value:10,label:"淘宝短视频"},{value:11,label:"线下场地搭建"},{value:12,label:"线下视觉设计"},{value:13,label:"活动策划执行"}],S=[{value:1,label:"长视频"},{value:2,label:"短视频"},{value:3,label:"直播"}];var x,T;(function(e){e[e["ServiceCharge"]=1]="ServiceCharge",e[e["Commission"]=2]="Commission",e[e["Other"]=3]="Other",e[e["Refund"]=5]="Refund"})(x||(x={})),function(e){e[e["writeoff_no"]=0]="writeoff_no",e[e["writeoff_partial"]=1]="writeoff_partial",e[e["writeoff_yes"]=2]="writeoff_yes"}(T||(T={}));const R=[{label:"未核销",value:T.writeoff_no},{label:"部分核销",value:T.writeoff_partial},{label:"已核销",value:T.writeoff_yes}],V=new Map([[x.ServiceCharge,"服务费"],[x.Commission,"佣金"],[x.Other,"其他"],[x.Refund,"退款"]]),A=[{label:"服务费",value:x.ServiceCharge},{label:"佣金",value:x.Commission},{label:"其他",value:x.Other},{label:"退款",value:x.Refund}],F=[{label:"V任务",value:1},{label:"支付宝",value:2},{label:"对公银行",value:3}],M=[...F,{label:"阿里妈妈",value:4},{label:"巨量百应",value:5}],B=[{label:"网络营销师",value:1},{label:"练习生",value:2}]},29625:function(e,a,n){var l,t;n.d(a,{Bs:function(){return p},C_:function(){return i},RB:function(){return b},UN:function(){return c},WD:function(){return l},Wj:function(){return r},Y$:function(){return t},Yh:function(){return o},Zb:function(){return u},i8:function(){return f},kA:function(){return m},x3:function(){return s}}),function(e){e[e["marketing"]=1]="marketing",e[e["taobao"]=2]="taobao",e[e["douyin"]=3]="douyin",e[e["base"]=4]="base",e[e["mcn"]=5]="mcn",e[e["douyinsh"]=7]="douyinsh"}(l||(l={})),function(e){e[e["common"]=1]="common",e[e["system"]=2]="system"}(t||(t={}));const u=new Map([[l.marketing,"营销业务"],[l.douyin,"抖音店播"],[l.taobao,"淘宝店播"],[l.base,"基地业务"],[l.mcn,"S2B2C"],[l.douyinsh,"抖音店播(上海)"]]),o=[{value:l.marketing,label:"整合营销"},{value:l.douyin,label:"抖音店播"},{value:l.taobao,label:"淘宝店播"},{value:l.mcn,label:"S2B2C"},{value:l.douyinsh,label:"抖音店播(上海)"}];var i;(function(e){e[e["creation"]=1]="creation",e[e["tryLive"]=2]="tryLive",e[e["execution"]=3]="execution",e[e["regionExecution"]=4]="regionExecution",e[e["finish"]=5]="finish",e[e["executionEnd"]=6]="executionEnd"})(i||(i={}));const r=new Map([[i.creation,"项目创建"],[i.tryLive,"试播中"],[i.execution,"项目执行中"],[i.regionExecution,"区域执行中"],[i.executionEnd,"执行结束"],[i.finish,"已完结"]]);var s;(function(e){e[e["region"]=2]="region",e[e["selfSupport"]=1]="selfSupport"})(s||(s={}));const c=new Map([[s.region,"区域"],[s.selfSupport,"自营"]]);var v;(function(e){e[e["month"]=1]="month",e[e["quarter"]=2]="quarter",e[e["halfAyear"]=3]="halfAyear"})(v||(v={}));const f=new Map([[v.month,"月结"],[v.quarter,"季结"],[v.halfAyear,"半年"]]),p=new Map([[1,"美妆"],[2,"生活"],[3,"服饰"],[4,"美食"],[5,"母婴"],[6,"数码"],[7,"家装"],[8,"健康"],[9,"宠物"],[10,"时尚"],[11,"配饰"],[12,"家电"],[13,"测评"],[14,"旅行"],[15,"运动"],[16,"摄影"],[17,"情感"],[18,"汽车"],[19,"搞笑"],[20,"教育"],[21,"财经"],[22,"萌娃"],[23,"文化"],[24,"影视"],[25,"娱乐"],[26,"游戏"],[27,"海外"],[28,"才艺"],[29,"三农"],[30,"二次元"],[31,"高颜值"]]);function b(e){return 0===e?"无":p.get(e)??"无"}var m;(function(e){e[e["live"]=1]="live",e[e["marketing"]=2]="marketing",e[e["common_business"]=3]="common_business"})(m||(m={}))},93889:function(e,a,n){n.d(a,{GD:function(){return c},MT:function(){return o.Kb},N5:function(){return u},RJ:function(){return l},TZ:function(){return i},Vx:function(){return r},cC:function(){return t},kD:function(){return f},kV:function(){return p},nd:function(){return s},wk:function(){return v}});var l,t,u,o=n(17890);(function(e){e[e["Sales"]=1]="Sales",e[e["Framework"]=2]="Framework",e[e["Purchase"]=3]="Purchase",e[e["SupplierFramework"]=4]="SupplierFramework",e[e["ServiceContract"]=5]="ServiceContract",e[e["SupplierContract"]=6]="SupplierContract",e[e["AnchorContract"]=7]="AnchorContract"})(l||(l={})),function(e){e[e["initial"]=0]="initial",e[e["waiting"]=1]="waiting",e[e["passed"]=2]="passed",e[e["refused"]=3]="refused"}(t||(t={})),function(e){e[e["Type1"]=1]="Type1",e[e["Type2"]=2]="Type2",e[e["Type3"]=3]="Type3"}(u||(u={}));const i=new Map([[u.Type1,"不用印章"],[u.Type2,"公章"],[u.Type3,"合同章"]]),r=[{label:"公章",value:u.Type2},{label:"合同章",value:u.Type3},{label:"不用印章",value:u.Type1}],s=new Map([[o.Kb.Pending,"待审批"],[o.Kb.Normal,"审批成功"],[o.Kb.Failure,"审批失败"],[o.Kb.Processing,"审批中"],[o.Kb.Invalid,"作废"]]);var c;(function(e){e[e["Bank"]=1]="Bank",e[e["Alipay"]=2]="Alipay",e[e["VTask"]=3]="VTask",e[e["Alimama"]=4]="Alimama",e[e["Buyin"]=5]="Buyin"})(c||(c={}));const v=new Map([[c.Bank,"对公银行"],[c.Alipay,"支付宝"],[c.VTask,"V任务"],[c.Alimama,"淘宝联盟"],[c.Buyin,"巨量百应"]]),f=[{value:c.Bank,label:"对公银行"},{value:c.Alipay,label:"支付宝"},{value:c.VTask,label:"V任务"},{value:c.Alimama,label:"淘宝联盟"},{value:c.Buyin,label:"巨量百应"}],p=new Map([[1,"单次合作"],[2,"框架合同"],[3,"长期合作"],[4,"合作协议"],[-1,"补充协议"],[-2,"从合同"],[-3,"解除协议"],[-4,"结算协议"],[11,"销售合同"],[12,"采买合同"]]);new Map([[0,"其它"],[1,"固定服务费"],[2,"固定服务费+佣金"],[3,"纯佣金"]])},17890:function(e,a,n){var l,t;n.d(a,{Kb:function(){return l},OX:function(){return r},l7:function(){return i},yR:function(){return u}}),function(e){e[e["Pending"]=1]="Pending",e[e["Normal"]=2]="Normal",e[e["Failure"]=3]="Failure",e[e["Processing"]=4]="Processing",e[e["Invalid"]=5]="Invalid"}(l||(l={})),function(e){e[e["Yes"]=0]="Yes",e[e["No"]=1]="No",e[e["Reject"]=2]="Reject"}(t||(t={}));const u=new Map([[l.Pending,"待审批"],[l.Normal,"审批成功"],[l.Failure,"审批失败"],[l.Processing,"审批中"],[l.Invalid,"已作废"]]),o=new Map([[t.Yes,"未上传"],[t.No,"已上传"],[t.Reject,"已驳回"]]),i=[l.Normal,l.Failure,l.Processing,l.Invalid].map((e=>({value:e,label:u.get(e)??""}))),r=[t.Yes,t.No,t.Reject].map((e=>({value:e,label:o.get(e)??""})))},72253:function(e,a,n){var l=n(36568),t=n.n(l),u=n(97434);a["Z"]=(0,u.defineComponent)({name:"",setup(e,a){const n=(0,u.ref)(),l=(0,u.ref)(),t=e=>{l.value=e},o=()=>{const e={contract_id:l.value,message:n.value};a.emit("close"),a.emit("submit",e)};return{reason:n,show:t,dialogSubmit:o}},render(){const e=arguments[0];return e("div",[e("el-form",t()([{class:" pd-18"},{props:{model:this.reason}},{ref:"elFormRef",attrs:{size:"small","label-width":"0"}}]),[e("el-form-item",{attrs:{label:"",prop:"reason"}},[e("el-input",{attrs:{type:"textarea",rows:5,maxlength:50,placeholder:"请填写意见，限50字"},style:"height: 100px;",model:{value:this.reason,callback:e=>{this.reason=e}}})])])])}})}}]);