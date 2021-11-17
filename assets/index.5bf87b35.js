var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,d=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,n=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&d(e,a,t[a]);if(l)for(var a of l(t))o.call(t,a)&&d(e,a,t[a]);return e},r=(e,l)=>t(e,a(l));import{_ as u}from"./lodash.0c8485ed.js";import{r as i}from"./index.934c745c.js";import{y as c,d as p,k as m,e as k,c as v,s as f,q as _,m as b,v as y,I as j,g,i as I,r as w,b as T,aQ as V,F as L,t as M,bm as S,p as h,f as x,A as P,w as C,n as U}from"./vendor.67cd59db.js";import{S as N}from"./sortable.esm.d55fbdd0.js";const O={class:"task-table"},E={key:1},D={key:1},z={key:1},B=j("保存"),A=j("编辑"),$=j("删除"),q={class:"task-table__add"},F=j("+ 新增任务");var Q=p({props:{data:null,status:null},emits:["updateTask","modifyTaskEdit","addProjectTask","deleteProjectTask"],setup(e,{emit:t}){function a(){t("addProjectTask")}return(l,s)=>{const o=m("el-input"),d=m("el-table-column"),u=m("el-option"),i=m("el-select"),c=m("el-tag"),p=m("el-button"),I=m("el-popconfirm"),w=m("el-table");return k(),v("div",O,[f(w,{data:e.data,style:{width:"100%"}},{default:_((()=>[f(d,{prop:"taskName",label:"任务名称"},{default:_((e=>[e.row.edit?(k(),b(o,{key:0,modelValue:e.row.taskName,"onUpdate:modelValue":t=>e.row.taskName=t},null,8,["modelValue","onUpdate:modelValue"])):(k(),v("span",E,y(e.row.taskName),1))])),_:1}),f(d,{prop:"developTime",label:"开发工时"},{default:_((e=>[e.row.edit?(k(),b(o,{key:0,modelValue:e.row.developTime,"onUpdate:modelValue":t=>e.row.developTime=t},null,8,["modelValue","onUpdate:modelValue"])):(k(),v("span",D,y(e.row.developTime),1))])),_:1}),f(d,{prop:"developMember",label:"开发人"},{default:_((e=>[e.row.edit?(k(),b(o,{key:0,modelValue:e.row.developMember,"onUpdate:modelValue":t=>e.row.developMember=t},null,8,["modelValue","onUpdate:modelValue"])):(k(),v("span",z,y(e.row.developMember),1))])),_:1}),f(d,{prop:"taskStatus",label:"任务状态"},{default:_((t=>{var a;return[t.row.edit?(k(),b(i,{key:0,modelValue:t.row.taskStatus,"onUpdate:modelValue":e=>t.row.taskStatus=e,placeholder:"选择任务状态"},{default:_((()=>[f(u,{label:"准备阶段",value:"preparation"}),f(u,{label:"开发中",value:"development"}),f(u,{label:"开发完成",value:"completed"}),f(u,{label:"测试阶段",value:"test"}),f(u,{label:"待发布",value:"released"})])),_:2},1032,["modelValue","onUpdate:modelValue"])):(k(),b(c,{key:1,type:null==(a=e.status.get(`${t.row.taskStatus}`))?void 0:a.type},{default:_((()=>{var a;return[j(y(null==(a=e.status.get(`${t.row.taskStatus}`))?void 0:a.text),1)]})),_:2},1032,["type"]))]})),_:1}),f(d,{label:"操作",width:"200"},{default:_((e=>[e.row.edit?(k(),b(p,{key:0,size:"mini",type:"success",icon:"el-icon-check",onClick:a=>function(e){console.log(e);const a=e.taskId;t("updateTask",a,r(n({},e),{edit:!1}))}(e.row)},{default:_((()=>[B])),_:2},1032,["onClick"])):(k(),b(p,{key:1,size:"mini",icon:"el-icon-edit",onClick:a=>function(e){console.log(e);const a=e.taskId;t("modifyTaskEdit",a,!0)}(e.row)},{default:_((()=>[A])),_:2},1032,["onClick"])),f(I,{"confirm-button-text":"确定","cancel-button-text":"取消",icon:"el-icon-info","icon-color":"red",title:"确定删除该条记录吗？",onConfirm:a=>function(e){const a=e.taskId;t("deleteProjectTask",a)}(e.row)},{reference:_((()=>[f(p,{size:"mini",icon:"el-icon-delete",type:"danger"},{default:_((()=>[$])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"]),g("div",q,[f(p,{onClick:a},{default:_((()=>[F])),_:1})])])}}});Q.__scopeId="data-v-48a10ce8";const G=e=>(h("data-v-46786f32"),e=e(),x(),e),H={class:"task-column"},J={class:"task-column__head"},K=G((()=>g("div",{class:"task-column__num"},[g("div",{class:"task-column__num-count"})],-1))),R={class:"task-column__type"},W=G((()=>g("div",{class:"task-column__add"}," + ",-1))),X=["data-taskStatus","data-taskId","id"],Y={class:"task-column__content"},Z={class:"task-column__content-detail"},ee={class:"task-column__content-time"};var te=p({props:{target:null,statusMap:null},emits:["moveTask"],setup(e,{emit:t}){const a=e,l=u.groupBy(u.cloneDeep(a.target.taskList),(e=>e.taskStatus));I((()=>u.groupBy(a.target.taskList,(e=>e.taskStatus))));const s=w([]);return T((()=>{const e=a.target.taskList;for(let a=0;a<e.length;a++){const l=document.getElementById(`${e[a].taskId}`),o=new N(l,{group:"task",animation:150,onAdd:e=>{const a=e.from.dataset.taskstatus,l=e.to.dataset.taskstatus,s=Number(e.from.dataset.taskid);t("moveTask",a,l,s)}});s.value.push(o)}})),V((()=>{u.forEach(s.value,(e=>{e.destroy()}))})),(t,a)=>{const s=m("el-card");return k(),v("div",H,[(k(!0),v(L,null,M(e.statusMap,(e=>(k(),b(s,{class:"task-column__item"},{default:_((()=>{var t;return[g("div",J,[K,g("div",R,y((null==(t=e[1])?void 0:t.text)||"未定义"),1),W]),(k(!0),v(L,null,M(S(l)[e[0]],(t=>(k(),v("div",null,[g("div",{"data-taskStatus":e[0],"data-taskId":t.taskId,id:t.taskId},[g("div",Y,[g("p",null,y(t.taskName),1),g("div",Z,[g("span",null,"负责人："+y(t.developMember||"-"),1),g("span",ee,"工时："+y(t.developTime||"-"),1)])])],8,X)])))),256))]})),_:2},1024)))),256))])}}});te.__scopeId="data-v-46786f32";const ae=e=>(h("data-v-002a6822"),e=e(),x(),e),le={class:"board"},se={class:"board__info"},oe=j("项目看板"),de=ae((()=>g("span",null,"项目看板主要应用场景：项目的任务管理，任务进度管理等。",-1))),ne={class:"board__project"},re=ae((()=>g("div",{class:"board__project-title"},"项目概览",-1))),ue={class:"board__project-list"},ie=["onClick"],ce={class:"board__detail"},pe=ae((()=>g("div",{class:"board__detail-title"},"项目详情",-1))),me={key:0,class:"board__detail-empty"},ke={key:1,class:"board__detail-content"},ve={class:"board__detail-head"},fe=ae((()=>g("span",{class:"board__detail-name"},"项目名称",-1))),_e=ae((()=>g("span",{class:"board__detail-name"},"负责人",-1))),be=ae((()=>g("span",{class:"board__detail-name"},"开发工时",-1))),ye=ae((()=>g("span",{class:"board__detail-name"},"项目状态",-1))),je=ae((()=>g("span",{class:"board__detail-name"},"任务总数",-1))),ge=ae((()=>g("span",{class:"board__detail-name"},"任务进度",-1))),Ie=j("： "),we={class:"board__detail-search"},Te=j("查询"),Ve={class:"board__detail-table"};var Le=p({setup(e){const t=c({taskStatus:null,developMember:""}),a=new Map([["preparation",{text:"准备阶段",type:"info"}],["development",{text:"开发中",type:""}],["completed",{text:"开发完成",type:"success"}],["test",{text:"测试阶段",type:"danger"}],["released",{text:"待发布",type:"warning"}]]),l=w([]),s=w("column"),{store:o,updatedProjectInfo:d,addProjectTask:p,deleteTask:T,modifyTaskEdit:V,moveTask:h}=(()=>{const e=c({data:[],target:{}});return i({url:"/api/project/list",method:"get",json:!0}).then((t=>{0===t.status&&(e.data=t.data,e.target=t.data[0])})),{store:e,updatedProjectInfo:function(t,a,l){const s=u.findIndex(e.data,["projectId",t]),o=e.data[s].taskList,d=u.map(o,((e,t)=>e.taskId===a?l:e));e.data[s].taskList=d},addProjectTask:function(t,a){const l=u.findIndex(e.data,["projectId",t]),s=e.data[l].taskList;e.data[l].taskList=u.concat(s,a,[])},deleteTask:function(t,a){const l=u.findIndex(e.data,["projectId",t]),s=e.data[l].taskList,o=u.map(s,((e,t)=>{if(e.taskId!==a)return e})).filter((e=>e));e.data[l].taskList=o},getProjectDetail:function(t){return u.find(e.data,(e=>e.projectId===t))},modifyTaskEdit:function(t,a,l=!1){const s=u.findIndex(e.data,["projectId",t]),o=e.data[s].taskList,d=u.map(o,((e,t)=>e.taskId===a?r(n({},e),{edit:l}):e));e.data[s].taskList=d},moveTask:function(t,a,l){const s=u.map(e.target.taskList,(e=>(e.taskId===l&&(e.taskStatus=a),e))),o=r(n({},e.target),{taskList:s});e.target=o,console.log(e.target.taskList,"move")}}})(),{data:x,target:N}=P(o);C((()=>N.value),(e=>{l.value=e.taskList}),{deep:!0});const O=I((()=>{const e=u.countBy(N.value.taskList,(e=>e.taskStatus));return u.map(Object.entries(e),(([e,t])=>{const l=a.get(e);return r(n({},l),{count:t})}))})),E=I((()=>{const e=u.map(N.value.taskList,(e=>e.developMember)).filter((e=>e));return u.uniq(e)}));function D(){console.log("search!",t);const e=t.taskStatus,a=t.developMember;if(e&&a){const t=u.map(N.value.taskList,(t=>{if(t.developMember===a&&t.taskStatus===e)return t})).filter((e=>e));l.value=t}else if(e){const t=u.map(N.value.taskList,(t=>{if(t.taskStatus===e)return t})).filter((e=>e));l.value=t}else if(a){const e=u.map(N.value.taskList,(e=>{if(e.developMember===a)return e})).filter((e=>e));l.value=e}else l.value=N.value.taskList}function z(e,t){const a=N.value.projectId;V(a,e,t)}function B(e,t){const a=N.value.projectId;d(a,e,t)}function A(){const e=N.value.projectId,t={taskName:"",developTime:"",developMember:"",taskStatus:"preparation",edit:!0,taskId:Date.now()};p(e,t)}function $(e){const t=N.value.projectId;T(t,e)}function q(e){switch(e.paneName){case"table":console.log("表格形式");break;case"column":console.log("列表形式")}}function F(e,t,a){h(e,t,a)}return(e,o)=>{const d=m("el-divider"),n=m("el-avatar"),r=m("el-col"),u=m("el-row"),i=m("el-card"),c=m("el-tag"),p=m("el-option"),I=m("el-select"),w=m("el-form-item"),T=m("el-button"),V=m("el-form"),h=m("el-tab-pane"),P=m("el-tabs");return k(),v("div",le,[g("div",se,[f(d,{"content-position":"left"},{default:_((()=>[oe])),_:1}),de]),g("div",ne,[re,g("div",ue,[(k(!0),v(L,null,M(S(x),((e,t)=>(k(),v("div",{key:t,class:U(["board__project-item",{"board__project-item--active":S(N).projectId===e.projectId}]),onClick:t=>{return a=e,void(N.value=a);var a}},[f(i,null,{default:_((()=>[f(u,null,{default:_((()=>[f(r,{span:5},{default:_((()=>[f(n,{class:"board__project-avatar",size:90},{default:_((()=>[j(y(e.projectName.substr(0,1)),1)])),_:2},1024)])),_:2},1024),f(r,{span:18,style:{"margin-left":"6px",color:"#7a848d"}},{default:_((()=>[g("p",null,"项目名称："+y(e.projectName),1),g("p",null,"总负责人："+y(e.principal),1),g("p",null,"开发耗时："+y(e.timeConsuming),1),g("p",null,"项目状态: "+y(e.status),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)],10,ie)))),128))])]),g("div",ce,[pe,f(i,{class:"board__detail-wrap"},{default:_((()=>[S(N).projectId?(k(),v("div",ke,[g("div",ve,[f(u,null,{default:_((()=>[f(r,{span:5},{default:_((()=>[fe,j("："+y(S(N).projectName),1)])),_:1}),f(r,{span:5},{default:_((()=>[_e,j("："+y(S(N).principal),1)])),_:1}),f(r,{span:5},{default:_((()=>[be,j("："+y(S(N).timeConsuming),1)])),_:1}),f(r,{span:5},{default:_((()=>[ye,j("："+y(S(N).status),1)])),_:1})])),_:1}),f(u,{class:"board__detail-task"},{default:_((()=>[f(r,{span:5},{default:_((()=>[je,j("："+y(S(N).taskList.length),1)])),_:1}),f(r,{span:18},{default:_((()=>[ge,Ie,(k(!0),v(L,null,M(S(O),((e,t)=>(k(),b(c,{key:t,class:"board__detail-tag",type:e.type},{default:_((()=>[j(y(e.text)+": "+y(e.count),1)])),_:2},1032,["type"])))),128))])),_:1})])),_:1})]),f(P,{modelValue:s.value,"onUpdate:modelValue":o[2]||(o[2]=e=>s.value=e),type:"card",onTabClick:q},{default:_((()=>[f(h,{label:"表格模式",name:"table"},{default:_((()=>[g("div",we,[f(V,{inline:!0,model:S(t)},{default:_((()=>[f(w,{label:"开发人"},{default:_((()=>[f(I,{clearable:"",modelValue:S(t).developMember,"onUpdate:modelValue":o[0]||(o[0]=e=>S(t).developMember=e),placeholder:"选择任务开发者"},{default:_((()=>[(k(!0),v(L,null,M(S(E),((e,t)=>(k(),b(p,{key:t,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),f(w,{label:"任务状态"},{default:_((()=>[f(I,{clearable:"",modelValue:S(t).taskStatus,"onUpdate:modelValue":o[1]||(o[1]=e=>S(t).taskStatus=e),placeholder:"选择任务状态"},{default:_((()=>[f(p,{label:"准备阶段",value:"preparation"}),f(p,{label:"开发中",value:"development"}),f(p,{label:"开发完成",value:"completed"}),f(p,{label:"测试阶段",value:"test"}),f(p,{label:"待发布",value:"released"})])),_:1},8,["modelValue"])])),_:1}),f(w,null,{default:_((()=>[f(T,{type:"primary",onClick:D},{default:_((()=>[Te])),_:1})])),_:1})])),_:1},8,["model"])]),g("div",Ve,[f(Q,{data:l.value,status:S(a),onUpdateTask:B,onModifyTaskEdit:z,onAddProjectTask:A,onDeleteProjectTask:$},null,8,["data","status"])])])),_:1}),f(h,{label:"列表模式",name:"column"},{default:_((()=>[f(te,{statusMap:S(a),target:S(N),onMoveTask:F},null,8,["statusMap","target"])])),_:1})])),_:1},8,["modelValue"])])):(k(),v("div",me,"请选择项目，查看项目详情！！！"))])),_:1})])])}}});Le.__scopeId="data-v-002a6822";export{Le as default};
