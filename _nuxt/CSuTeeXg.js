import{s as i}from"./CXyIFZg8.js";import{a3 as p,t as n,v as o,P as l,aa as s,ab as c,O as t,Y as u,x as d,y as v}from"./tSce7yxB.js";var g={root:function(r){var a=r.props;return["p-tag p-component",{"p-tag-info":a.severity==="info","p-tag-success":a.severity==="success","p-tag-warning":a.severity==="warning","p-tag-danger":a.severity==="danger","p-tag-secondary":a.severity==="secondary","p-tag-contrast":a.severity==="contrast","p-tag-rounded":a.rounded}]},icon:"p-tag-icon",value:"p-tag-value"},m=p.extend({name:"tag",classes:g}),y={name:"BaseTag",extends:i,props:{value:null,severity:null,rounded:Boolean,icon:String},style:m,provide:function(){return{$parentInstance:this}}},f={name:"Tag",extends:y,inheritAttrs:!1};function $(e,r,a,B,k,S){return n(),o("span",s({class:e.cx("root")},e.ptmi("root")),[e.$slots.icon?(n(),l(c(e.$slots.icon),s({key:0,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(n(),o("span",s({key:1,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):t("",!0),e.value||e.$slots.default?u(e.$slots,"default",{key:2},function(){return[d("span",s({class:e.cx("value")},e.ptm("value")),v(e.value),17)]}):t("",!0)],16)}f.render=$;export{f as default};
