import{_ as i,o as t,c as n,b as l,t as s,h as c,n as a,F as r}from"./index-edb93667.js";const o={name:"TitleComponent",props:{title:{type:String,required:!0},subtitle:{type:String},number:{type:Number,required:!0},centered:{type:Boolean,default:!1}}},_={key:0,class:"jumbotron"},d={class:"display-4"},u={key:0,class:"lead"},m={key:1,class:"block_colored block_h2"},b={key:2,class:"block_black block_h3"},h={key:3};function y(k,f,e,x,v,g){return t(),n(r,null,[e.number==1?(t(),n("div",_,[l("h1",d,s(e.title),1),e.subtitle?(t(),n("p",u,s(e.subtitle),1)):c("",!0)])):c("",!0),e.number==2?(t(),n("div",m,[l("h2",{class:a({"centered-text":e.centered})},s(e.title),3)])):c("",!0),e.number==3?(t(),n("div",b,[l("h3",{class:a({"centered-text":e.centered})},s(e.title),3)])):c("",!0),e.number==4?(t(),n("div",h,[l("h4",{class:a({"centered-text":e.centered})},s(e.title),3)])):c("",!0)],64)}const T=i(o,[["render",y]]);export{T};