import{_ as i,o as s,c as o,b as a,h as g}from"./index-5efc714f.js";import{i as p}from"./Unit.vue_vue_type_style_index_0_scoped_4109b838_lang-42e731a9.js";/* empty css                                              */const d={props:{width:{type:String},height:{type:String},centered:{type:Boolean}},computed:{elementStyles(){const t={};return this.width&&(t.width=this.width),this.height&&(t.height=this.height),this.centered&&(t.textAlign="center"),t}}},h={name:"Text",mixins:[d],props:{text:{type:String,required:!0}},methods:{formatText(t){return t.replace(/\*(.*?)\*/g,"<strong>$1</strong>").replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>')}}},l=["innerHTML"];function _(t,e,n,c,m,r){return s(),o("div",null,[a("p",{style:g(t.elementStyles),innerHTML:r.formatText(n.text)},null,12,l)])}const w=i(h,[["render",_]]),f={props:{img_name:{type:String},imgProp:{type:String}},methods:{getImageLink(t){const e=p[t];debugger;return e}}},u={class:"div_img"},x=["src"];function y(t,e,n,c,m,r){return s(),o("div",u,[a("img",{src:n.imgProp,alt:"Imagen"},null,8,x)])}const B=i(f,[["render",y]]);export{B as I,w as T,d as m};