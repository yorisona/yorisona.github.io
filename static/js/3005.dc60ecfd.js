"use strict";(self["webpackChunkgoumee_star_temp"]=self["webpackChunkgoumee_star_temp"]||[]).push([[3005],{83005:function(t,a,n){n.d(a,{CP:function(){return et},dJ:function(){return yt},Bg:function(){return ut},Ue:function(){return Q},G_:function(){return W},tZ:function(){return pt},eu:function(){return mt},Hz:function(){return L},q0:function(){return R},jS:function(){return rt},ot:function(){return dt},z0:function(){return E},yh:function(){return ht},It:function(){return qt},CU:function(){return T},m7:function(){return ft},Xv:function(){return jt},cV:function(){return xt},DJ:function(){return gt},Yp:function(){return St},uV:function(){return Ot},_t:function(){return Gt},Mi:function(){return wt},f6:function(){return bt},Lm:function(){return kt},bR:function(){return tt},AE:function(){return nt},fY:function(){return ct},XL:function(){return at},ZS:function(){return K},ab:function(){return lt},U9:function(){return F},Te:function(){return ot},BJ:function(){return it},Zx:function(){return _t},_C:function(){return st},TG:function(){return N},f8:function(){return vt},w_:function(){return Xt}});n(21703);var c=n(76012);const e="/api/cont/query_contract_uid",r="/api/cont/query_contract",o="/api/cont/query_shop_live_contract",s="/api/cont/query_cooperation_contract",i="/api/cont/query_law_contract",_="/api/cont/contract_statistic",u="/api/cont/query_statistic_contract_detail",p="/api/cont/query_anchor_contract",d="/api/cont/get_contract_upload_template_list/",m="/api/cont/get_mcn_contract_upload_template_list/",l="/api/cont/get_shop_live_contract_upload_template_list/",y="/api/cont/get_marketing_contract_upload_template_list/",f="/api/cont/save_contract_upload_template/",j="/api/cont/save_template_contract/",G="/api/cont/contract_template_agreement_pdf/",v="/api/anchor/contract",X="/api/anchor/contract_template_agreement_pdf",w="/api/cont/update_contract_upload_template_info/",S="/api/cont/query_common_contract",O="/api/cont/save_contract/shop_live",g="/api/cont/save_contract/common",h="/api/cont/save_contract/coop",q="/api/cont/query_contract_annex",b="/api/cont/save_contract_annex",k="/api/cont/delete_contract_annex/:id/",x="/api/cont/query_contract_statements",P="/api/cont/save_contract_statements",C="/api/cont/delete_contract_statements/:id/",$="/api/cont/get_contract_annex_approval_flow/:id/",Z="/api/cont/get_contract_statements_approval_flow/:id/",J="/api/cont/get_contract_approval_flow/:id/",U="/api/cont/save_contract_scan",z="/api/cont/delete_contract_scan";var B=n(64236);const E=async t=>(0,c.dX)(e,{params:{...(0,B.jG)(t)}}),L=async t=>(0,c.dX)(i,{params:{...(0,B.jG)(t)}}),T=async t=>(0,c.dX)(_,{params:{...(0,B.jG)(t)}}),V=async t=>(0,c.dX)(r,{params:{...(0,B.jG)(t)}}),Y=async t=>(0,c.dX)(i,{params:{...(0,B.jG)(t)}}),A=async t=>(0,c.dX)(u,{params:{...(0,B.jG)(t)}}),D=async t=>(0,c.dX)(p,{params:{...(0,B.jG)(t)}}),H=async t=>(0,c.dX)(o,{params:{...(0,B.jG)(t)}}),I=async t=>(0,c.dX)(S,{params:{...(0,B.jG)(t)}}),M=async t=>(0,c.dX)(s,{params:{...(0,B.jG)(t)}}),R=async(t,a)=>{let n;return n="1"===a?await(0,c.dX)(s,{params:{...(0,B.jG)(t)}}):"2"===a?await(0,c.dX)(o,{params:{...(0,B.jG)(t)}}):await(0,c.dX)(S,{params:{...(0,B.jG)(t)}}),Promise.resolve(n)},F=async t=>(0,c.SO)(O,{...(0,B.jG)(t)}),K=async t=>(0,c.SO)(g,{...(0,B.jG)(t)}),N=async t=>(0,c.SO)(h,{...(0,B.jG)(t)}),Q=async(t,a=1)=>{let n;switch(a){case 1:n=await V(t);break;case 2:n=await Y(t);break;case 3:n=await H(t);break;case 4:n=await M(t);break;case 5:n=await I(t);break;case 6:n=await A(t);break;case 7:n=await D(t);break;default:throw new Error("未知类型")}if(n.data.success){const{data:{data:{data:t,total:a},message:c,success:e,error_code:r}}=n;return e&&a>0?Promise.resolve({data:t[0],message:c,success:e,error_code:r}):Promise.resolve({data:void 0,message:c,success:!1,error_code:r})}{const{data:{message:t,error_code:a}}=n;return Promise.resolve({data:void 0,message:t,success:!1,error_code:a})}},W=async t=>(0,c.dX)(q,{params:{...(0,B.jG)(t)}}),tt=async t=>(0,c.SO)(b,{...(0,B.jG)(t)}),at=async t=>(0,c.SO)("/api/cont/save_contract_annex/shop_live",{...(0,B.jG)(t)}),nt=async t=>(0,c.SO)("/api/cont/save_contract_annex/common",{...(0,B.jG)(t)}),ct=async t=>(0,c.SO)("/api/cont/save_contract_annex/coop",{...(0,B.jG)(t)}),et=async t=>(0,c.SO)(k.replace(":id",`${t}`)),rt=async t=>(0,c.dX)(x,{params:{...(0,B.jG)(t)}}),ot=async t=>(0,c.SO)(P,{...(0,B.jG)(t)}),st=async t=>(0,c.SO)("/api/cont/save_contract_statements/shop_live",{...(0,B.jG)(t)}),it=async t=>(0,c.SO)("/api/cont/save_contract_statements/common",{...(0,B.jG)(t)}),_t=async t=>(0,c.SO)("/api/cont/save_contract_statements/coop",{...(0,B.jG)(t)}),ut=async t=>(0,c.SO)(C.replace(":id",`${t}`)),pt=async t=>(0,c.dX)($.replace(":id",`${t}`)),dt=async t=>(0,c.dX)(Z.replace(":id",`${t}`)),mt=async t=>(0,c.dX)(J.replace(":id",`${t}`)),lt=async t=>(0,c.SO)(U,{...(0,B.jG)(t)}),yt=async t=>(0,c.SO)(z,{...(0,B.jG)(t)}),ft=async t=>(0,c.dX)(d,{params:{...(0,B.jG)(t)}}),jt=async(t,a)=>(0,c.dX)("mcn"===a?m:"live"===a?l:y,{params:{...(0,B.jG)(t)}}),Gt=async t=>(0,c.SO)(f,{...(0,B.jG)(t)}),vt=async t=>(0,c.qb)(w,{...(0,B.jG)(t)});function Xt(t){return(0,c.ZP)({url:"/api/cont/upload_contract_template_file/",method:"post",data:t})}const wt=async(t,a)=>(0,c.SO)(j+a,{...(0,B.jG)(t)}),St=async t=>(0,c.SO)(G,{...(0,B.jG)(t)}),Ot=async t=>(0,c.SO)(v,{...(0,B.jG)(t)}),gt=async t=>(0,c.SO)(X,{...(0,B.jG)(t)}),ht=async t=>(0,c.dX)("/api/cont/query_law_contract_overview",{params:{...(0,B.jG)(t)}}),qt=async t=>(0,c.dX)("/api/cont/query_law_contract_simple",{params:{...(0,B.jG)(t)}}),bt=async t=>(0,c.SO)("/api/cont/verify_contract_scan",{...(0,B.jG)(t)}),kt=async t=>(0,c.SO)("/api/approval/verify_use_seal_scan",{...(0,B.jG)(t)}),xt=async t=>(0,c.dX)("/api/cont/project_without_contract",{params:{...(0,B.jG)(t)}})}}]);