import{T as m}from"./Title-de59b762.js";import{C as _}from"./Content-09b990f8.js";import{_ as p,o as s,c as l,b as u,f as d,a as t,w as a,F as f}from"./index-edb93667.js";import{R as h,C as n}from"./Column-d7f4be72.js";import{U as o}from"./Unit-0e9cec1a.js";const g={props:{width:{type:String},height:{type:String},centered:{type:Boolean}},computed:{elementStyles(){const e={};return this.width&&(e.width=this.width),this.height&&(e.height=this.height),this.centered&&(e.textAlign="center"),e}}},x={name:"Text",mixins:[g],props:{text:{type:String,required:!0}},methods:{formatText(e){return e.replace(/\*(.*?)\*/g,"<strong>$1</strong>").replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>')}}},C=["innerHTML"];function T(e,i,r,y,S,c){return s(),l("div",null,[u("p",{style:d(e.elementStyles),innerHTML:c.formatText(r.text)},null,12,C)])}const w=p(x,[["render",T]]),v={__name:"Scratch",setup(e){return(i,r)=>(s(),l(f,null,[t(m,{title:"Scratch",number:1}),t(_,null,{default:a(()=>[t(w,{text:"Contingut extret de [Programa Ergo Sum](https://www.programoergosum.es/)."}),t(h,null,{default:a(()=>[t(n,{additionalClass:"four_cols text-center"},{default:a(()=>[t(o,{img_name:"pensament_computacional",link_page_name:"scratch_laberint",title:"Pensament Computacional"})]),_:1}),t(n,{additionalClass:"four_cols text-center"},{default:a(()=>[t(o,{img_name:"pensament_computacional",link_page_name:"scratch_flappy_bird",title:"Pensament Computacional"})]),_:1}),t(n,{additionalClass:"four_cols text-center"},{default:a(()=>[t(o,{img_name:"pensament_computacional",link_page_name:"scratch_space_invaders",title:"Pensament Computacional"})]),_:1}),t(n,{additionalClass:"four_cols text-center"},{default:a(()=>[t(o,{img_name:"pensament_computacional",link_page_name:"scratch_pong",title:"Pensament Computacional"})]),_:1})]),_:1})]),_:1})],64))}};export{v as default};