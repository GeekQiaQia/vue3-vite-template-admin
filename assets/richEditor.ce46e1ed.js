import{d as a,r as e,y as t,i as l,g as s,m as d,h as o,w as n,a0 as r,L as i,M as u,aH as p,az as c,ax as f,ay as m}from"./vendor.4e893dbb.js";/* empty css               *//* empty css                   */import{R as v}from"./richEditor.984791ad.js";import{_}from"./index.956e7b2c.js";const g=a({components:{RichEditor:v},setup(){const a=e("默认数据"),t=e();setTimeout((()=>{a.value="3秒后的数据"}),3e3);return{handleUpdateValue:a=>{console.log(a),t.value=a},editorValue:a}}}),h=a=>(i("data-v-489a425e"),a=a(),u(),a),x={class:"editorWrapper"},V={class:"info"},b=r("富文本编辑器"),j=h((()=>d("span",{style:{"text-align":"left"}},"富文本编辑器编辑场景。",-1))),y={class:"grid-content bg-purple-dark"},U={style:{"text-align":"left"}},E=h((()=>d("span",null,"富文本编辑器",-1)));var R=_(g,[["render",function(a,e,r,i,u,v){const _=p,g=t("RichEditor",!0),h=c,R=f,k=m;return l(),s("div",x,[d("div",V,[o(_,{"content-position":"left"},{default:n((()=>[b])),_:1}),j]),d("div",null,[o(k,null,{default:n((()=>[o(R,{offset:1,span:22},{default:n((()=>[d("div",y,[o(h,{class:"box-card"},{default:n((()=>[d("div",U,[E,o(_)]),o(g,{"model-value":a.editorValue,"onUpdate:modelValue":a.handleUpdateValue},null,8,["model-value","onUpdate:modelValue"])])),_:1})])])),_:1})])),_:1})])])}],["__scopeId","data-v-489a425e"]]);export{R as default};
