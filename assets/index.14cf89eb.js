var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,d=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,n=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&d(e,t,a[t]);if(l)for(var t of l(a))o.call(a,t)&&d(e,t,a[t]);return e},r=(e,l)=>a(e,t(l));import{p as u,d as i,i as c,g as p,h as m,w as f,k as b,t as _,a0 as k,u as v,bl as j,bm as y,m as w,aF as I,aQ as V,e as T,f as g,b5 as x,R as h,x as L,bc as P,aR as M,r as S,v as C,D as U,c as O,F as N,j as E,K as z,L as D,M as F,aH as R,Y as $,ax as q,ay as A,az as B,ah as H,ai as K,a8 as Q,a9 as Y}from"./vendor.4e893dbb.js";/* empty css               *//* empty css                   */import{_ as G}from"./lodash.c4e9178b.js";import{r as J,_ as W}from"./index.956e7b2c.js";/* empty css                        *//* empty css                    *//* empty css                      *//* empty css                   */const X={class:"task-table"},Z={key:1},ee={key:1},ae={key:1},te=k("保存"),le=k(" 编辑"),se=k("删除"),oe={class:"task-table__add"},de=k("+ 新增任务");var ne=W(i({props:{data:null,status:null},emits:["updateTask","modifyTaskEdit","addProjectTask","deleteProjectTask"],setup(e,{emit:a}){function t(){a("addProjectTask")}return(l,s)=>{const o=I,d=V,u=T,i=g,S=x,C=h,U=L,O=P,N=M;return c(),p("div",X,[m(N,{data:e.data,style:{width:"100%"}},{default:f((()=>[m(d,{prop:"taskName",label:"任务名称"},{default:f((e=>[e.row.edit?(c(),b(o,{key:0,modelValue:e.row.taskName,"onUpdate:modelValue":a=>e.row.taskName=a},null,8,["modelValue","onUpdate:modelValue"])):(c(),p("span",Z,_(e.row.taskName),1))])),_:1}),m(d,{prop:"developTime",label:"开发工时"},{default:f((e=>[e.row.edit?(c(),b(o,{key:0,modelValue:e.row.developTime,"onUpdate:modelValue":a=>e.row.developTime=a},null,8,["modelValue","onUpdate:modelValue"])):(c(),p("span",ee,_(e.row.developTime),1))])),_:1}),m(d,{prop:"developMember",label:"开发人"},{default:f((e=>[e.row.edit?(c(),b(o,{key:0,modelValue:e.row.developMember,"onUpdate:modelValue":a=>e.row.developMember=a},null,8,["modelValue","onUpdate:modelValue"])):(c(),p("span",ae,_(e.row.developMember),1))])),_:1}),m(d,{prop:"taskStatus",label:"任务状态"},{default:f((a=>{var t;return[a.row.edit?(c(),b(i,{key:0,modelValue:a.row.taskStatus,"onUpdate:modelValue":e=>a.row.taskStatus=e,placeholder:"选择任务状态"},{default:f((()=>[m(u,{label:"准备阶段",value:"preparation"}),m(u,{label:"开发中",value:"development"}),m(u,{label:"开发完成",value:"completed"}),m(u,{label:"测试阶段",value:"test"}),m(u,{label:"待发布",value:"released"})])),_:2},1032,["modelValue","onUpdate:modelValue"])):(c(),b(S,{key:1,type:null==(t=e.status.get(`${a.row.taskStatus}`))?void 0:t.type},{default:f((()=>{var t;return[k(_(null==(t=e.status.get(`${a.row.taskStatus}`))?void 0:t.text),1)]})),_:2},1032,["type"]))]})),_:1}),m(d,{label:"操作",width:"200"},{default:f((e=>[e.row.edit?(c(),b(C,{key:0,size:"mini",type:"success",icon:"el-icon-check",onClick:t=>function(e){const{taskId:t}=e;a("updateTask",t,r(n({},e),{edit:!1}))}(e.row)},{default:f((()=>[te])),_:2},1032,["onClick"])):(c(),b(C,{key:1,size:"mini",onClick:t=>function(e){const{taskId:t}=e;a("modifyTaskEdit",t,!0)}(e.row)},{default:f((()=>[m(U,null,{default:f((()=>[m(v(j))])),_:1}),le])),_:2},1032,["onClick"])),m(O,{"confirm-button-text":"确定","cancel-button-text":"取消",icon:"el-icon-info","icon-color":"red",title:"确定删除该条记录吗？",onConfirm:t=>function(e){const{taskId:t}=e;a("deleteProjectTask",t)}(e.row)},{reference:f((()=>[m(C,{size:"mini",type:"danger"},{default:f((()=>[m(U,null,{default:f((()=>[m(v(y))])),_:1}),se])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"]),w("div",oe,[m(C,{onClick:t},{default:f((()=>[de])),_:1})])])}}}),[["__scopeId","data-v-ae4a6e64"]]);const re=e=>(D("data-v-10a2a584"),e=e(),F(),e),ue={class:"board"},ie={class:"board__info"},ce=k("项目看板"),pe=re((()=>w("span",null,"项目看板主要应用场景：项目的任务管理，任务进度管理等。",-1))),me={class:"board__project"},fe=re((()=>w("div",{class:"board__project-title"},"项目概览",-1))),be={class:"board__project-list"},_e=["onClick"],ke={class:"board__detail"},ve=re((()=>w("div",{class:"board__detail-title"},"项目详情",-1))),je={key:0,class:"board__detail-empty"},ye={key:1,class:"board__detail-content"},we={class:"board__detail-head"},Ie=re((()=>w("span",{class:"board__detail-name"},"项目名称",-1))),Ve=re((()=>w("span",{class:"board__detail-name"},"负责人",-1))),Te=re((()=>w("span",{class:"board__detail-name"},"开发工时",-1))),ge=re((()=>w("span",{class:"board__detail-name"},"项目状态",-1))),xe=re((()=>w("span",{class:"board__detail-name"},"任务总数",-1))),he=re((()=>w("span",{class:"board__detail-name"},"任务进度",-1))),Le=k("： "),Pe={class:"board__detail-search"},Me=k("查询"),Se={class:"board__detail-table"},Ce=k("列表");var Ue=W(i({setup(e){const a=u({taskStatus:null,developMember:""}),t=new Map([["preparation",{text:"准备阶段",type:"info"}],["development",{text:"开发中",type:""}],["completed",{text:"开发完成",type:"success"}],["test",{text:"测试阶段",type:"danger"}],["released",{text:"待发布",type:"warning"}]]),l=S([]),s=S("table"),{store:o,updatedProjectInfo:d,addProjectTask:i,deleteTask:j,modifyTaskEdit:y}=(()=>{const e=u({data:[],target:{}});return J({url:"/api/project/list",method:"get",json:!0}).then((a=>{0===a.status&&(e.data=a.data,e.target=a.data[0])})),{store:e,updatedProjectInfo:function(a,t,l){const s=G.findIndex(e.data,["projectId",a]),o=e.data[s].taskList,d=G.map(o,((e,a)=>e.taskId===t?l:e));e.data[s].taskList=d},addProjectTask:function(a,t){const l=G.findIndex(e.data,["projectId",a]),s=e.data[l].taskList;e.data[l].taskList=G.concat(s,t,[])},deleteTask:function(a,t){const l=G.findIndex(e.data,["projectId",a]),s=e.data[l].taskList,o=G.map(s,((e,a)=>{if(e.taskId!==t)return e})).filter((e=>e));e.data[l].taskList=o},getProjectDetail:function(a){return G.find(e.data,(e=>e.projectId===a))},modifyTaskEdit:function(a,t,l=!1){const s=G.findIndex(e.data,["projectId",a]),o=e.data[s].taskList,d=G.map(o,((e,a)=>e.taskId===t?r(n({},e),{edit:l}):e));e.data[s].taskList=d}}})(),{data:I,target:V}=C(o);U((()=>V.value),(e=>{l.value=e.taskList}),{deep:!0});const L=O((()=>{const e=G.countBy(V.value.taskList,(e=>e.taskStatus));return G.map(Object.entries(e),(([e,a])=>{const l=t.get(e);return r(n({},l),{count:a})}))})),P=O((()=>{const e=G.map(V.value.taskList,(e=>e.developMember)).filter((e=>e));return G.uniq(e)}));function M(){console.log("search!",a);const e=a.taskStatus,t=a.developMember;if(e&&t){const a=G.map(V.value.taskList,(a=>{if(a.developMember===t&&a.taskStatus===e)return a})).filter((e=>e));l.value=a}else if(e){const a=G.map(V.value.taskList,(a=>{if(a.taskStatus===e)return a})).filter((e=>e));l.value=a}else if(t){const e=G.map(V.value.taskList,(e=>{if(e.developMember===t)return e})).filter((e=>e));l.value=e}else l.value=V.value.taskList}function D(e,a){const t=V.value.projectId;y(t,e,a)}function F(e,a){const t=V.value.projectId;d(t,e,a)}function W(){const e=V.value.projectId,a={taskName:"",developTime:"",developMember:"",taskStatus:"preparation",edit:!0,taskId:Date.now()};i(e,a)}function X(e){const a=V.value.projectId;j(a,e)}function Z(e){switch(e.paneName){case"table":console.log("表格形式");break;case"列表形式":console.log("列表形式")}}return(e,o)=>{const d=R,n=$,r=q,u=A,i=B,j=x,y=T,S=g,C=H,U=h,O=K,G=Q,J=Y;return c(),p("div",ue,[w("div",ie,[m(d,{"content-position":"left"},{default:f((()=>[ce])),_:1}),pe]),w("div",me,[fe,w("div",be,[(c(!0),p(N,null,E(v(I),((e,a)=>(c(),p("div",{key:a,class:z(["board__project-item",{"board__project-item--active":v(V).projectId===e.projectId}]),onClick:a=>{return t=e,void(V.value=t);var t}},[m(i,null,{default:f((()=>[m(u,null,{default:f((()=>[m(r,{span:5},{default:f((()=>[m(n,{class:"board__project-avatar",size:90},{default:f((()=>[k(_(e.projectName.substr(0,1)),1)])),_:2},1024)])),_:2},1024),m(r,{span:18,style:{"margin-left":"6px",color:"#7a848d"}},{default:f((()=>[w("p",null,"项目名称："+_(e.projectName),1),w("p",null,"总负责人："+_(e.principal),1),w("p",null,"开发耗时："+_(e.timeConsuming),1),w("p",null,"项目状态: "+_(e.status),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)],10,_e)))),128))])]),w("div",ke,[ve,m(i,{class:"board__detail-wrap"},{default:f((()=>[v(V).projectId?(c(),p("div",ye,[w("div",we,[m(u,null,{default:f((()=>[m(r,{span:5},{default:f((()=>[Ie,k("："+_(v(V).projectName),1)])),_:1}),m(r,{span:5},{default:f((()=>[Ve,k("："+_(v(V).principal),1)])),_:1}),m(r,{span:5},{default:f((()=>[Te,k("："+_(v(V).timeConsuming),1)])),_:1}),m(r,{span:5},{default:f((()=>[ge,k("："+_(v(V).status),1)])),_:1})])),_:1}),m(u,{class:"board__detail-task"},{default:f((()=>[m(r,{span:5},{default:f((()=>[xe,k("："+_(v(V).taskList.length),1)])),_:1}),m(r,{span:18},{default:f((()=>[he,Le,(c(!0),p(N,null,E(v(L),((e,a)=>(c(),b(j,{key:a,class:"board__detail-tag",type:e.type},{default:f((()=>[k(_(e.text)+": "+_(e.count),1)])),_:2},1032,["type"])))),128))])),_:1})])),_:1})]),m(J,{modelValue:s.value,"onUpdate:modelValue":o[2]||(o[2]=e=>s.value=e),type:"card",onTabClick:Z},{default:f((()=>[m(G,{label:"表格模式",name:"table"},{default:f((()=>[w("div",Pe,[m(O,{inline:!0,model:v(a)},{default:f((()=>[m(C,{label:"开发人"},{default:f((()=>[m(S,{clearable:"",modelValue:v(a).developMember,"onUpdate:modelValue":o[0]||(o[0]=e=>v(a).developMember=e),placeholder:"选择任务开发者"},{default:f((()=>[(c(!0),p(N,null,E(v(P),((e,a)=>(c(),b(y,{key:a,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),m(C,{label:"任务状态"},{default:f((()=>[m(S,{clearable:"",modelValue:v(a).taskStatus,"onUpdate:modelValue":o[1]||(o[1]=e=>v(a).taskStatus=e),placeholder:"选择任务状态"},{default:f((()=>[m(y,{label:"准备阶段",value:"preparation"}),m(y,{label:"开发中",value:"development"}),m(y,{label:"开发完成",value:"completed"}),m(y,{label:"测试阶段",value:"test"}),m(y,{label:"待发布",value:"released"})])),_:1},8,["modelValue"])])),_:1}),m(C,null,{default:f((()=>[m(U,{type:"primary",onClick:M},{default:f((()=>[Me])),_:1})])),_:1})])),_:1},8,["model"])]),w("div",Se,[m(ne,{data:l.value,status:v(t),onUpdateTask:F,onModifyTaskEdit:D,onAddProjectTask:W,onDeleteProjectTask:X},null,8,["data","status"])])])),_:1}),m(G,{label:"列表模式",name:"column"},{default:f((()=>[Ce])),_:1})])),_:1},8,["modelValue"])])):(c(),p("div",je,"请选择项目，查看项目详情！！！"))])),_:1})])])}}}),[["__scopeId","data-v-10a2a584"]]);export{Ue as default};
