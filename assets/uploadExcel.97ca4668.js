var e=Object.defineProperty,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,s=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{d as o,r,p as i,v as d,i as n,g as c,m as p,h as u,w as f,_ as m,k as v,F as b,j as h,N as x,a0 as y,L as _,M as g,aH as j,b7 as w,aQ as R,aR as k,R as D,az as O,ax as P,ay as S,b8 as F}from"./vendor.4e893dbb.js";/* empty css                   *//* empty css               *//* empty css                        *//* empty css                    *//* empty css                  *//* empty css                    *//* empty css                   */import{X as L}from"./xlsx.d689409f.js";import{_ as z}from"./index.956e7b2c.js";const A=e=>new Promise((a=>{const l=new FileReader;l.onload=e=>{var l;const t=null==(l=null==e?void 0:e.target)?void 0:l.result,s=L.read(t,{type:"array"}),o=s.SheetNames[0],r=s.Sheets[o],i=L.utils.sheet_to_json(r),d=(e=>{const a=[],l=L.utils.decode_range(e["!ref"]),t=l.s.r;for(let s=l.s.c;s<=l.e.c;++s){const l=e[L.utils.encode_cell({c:s,r:t})];let o=`void${s}`;l&&l.t&&(o=L.utils.format_cell(l)),a.push(o)}return a})(r);a({header:d,excelData:i})},l.readAsArrayBuffer(e)}));const C=o({components:{},setup(){const e=r(!1),o=r(),n=r(".xls,.xlsx"),c=i({excelData:[],header:[],fileList:[],loading:!1}),p=async e=>{const{excelData:a,header:l}=await A(e);c.excelData=a,c.header=l,c.loading=!1};return((e,o)=>{for(var r in o||(o={}))l.call(o,r)&&s(e,r,o[r]);if(a)for(var r of a(o))t.call(o,r)&&s(e,r,o[r]);return e})({uploadRef:o,accept:n,disabled:e,handlePreview:e=>{c.loading=!0,p(e.raw)},handleRemove:(e,a)=>{console.log(e,a)},handleFileData:e=>{p(e)},handleSubmitUpload:()=>{o.value.submit(),x({type:"success",message:"上传成功"})}},d(c))}}),I=e=>(_("data-v-1f876ad0"),e=e(),g(),e),N={class:"upload-container"},U={class:"info"},B=y("上传excel"),E=I((()=>p("span",{style:{"text-align":"left"}},"excel上传预览场景。",-1))),H={class:"grid-content bg-purple-dark"},M={style:{"text-align":"left"}},Q=I((()=>p("span",null,"上传excel文件并预览场景",-1))),X={class:"section"},$=I((()=>p("i",{class:"el-icon-upload"},null,-1))),q=I((()=>p("div",{class:"el-upload__text"},[y("将文件拖到此处，或"),p("em",null,"点击上传")],-1))),G=I((()=>p("div",{class:"el-upload__tip"},"点击文件进行预览",-1))),J={class:"preview-table"},K=y("确认上传");var T=z(C,[["render",function(e,a,l,t,s,o){const r=j,i=w,d=R,x=k,y=D,_=O,g=P,L=S,z=F;return n(),c("div",N,[p("div",U,[u(r,{"content-position":"left"},{default:f((()=>[B])),_:1}),E]),p("div",null,[u(L,null,{default:f((()=>[u(g,{offset:1,span:22},{default:f((()=>[p("div",H,[u(_,{class:"box-card"},{default:f((()=>[p("div",M,[Q,u(r)]),p("div",X,[u(i,{ref:"uploadRef",style:{width:"100%"},accept:e.accept,drag:"",action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"file-list":e.fileList,"auto-upload":!1},{tip:f((()=>[G])),default:f((()=>[$,q])),_:1},8,["accept","on-preview","on-remove","file-list"]),p("div",J,[m((n(),v(x,{data:e.excelData,border:"",style:{width:"100%"}},{default:f((()=>[(n(!0),c(b,null,h(e.header,(e=>(n(),v(d,{key:e,prop:e,label:e,width:"180"},null,8,["prop","label"])))),128))])),_:1},8,["data"])),[[z,e.loading]])]),u(y,{style:{"margin-left":"10px"},size:"small",type:"success",onClick:e.handleSubmitUpload},{default:f((()=>[K])),_:1},8,["onClick"])])])),_:1})])])),_:1})])),_:1})])])}],["__scopeId","data-v-1f876ad0"]]);export{T as default};
