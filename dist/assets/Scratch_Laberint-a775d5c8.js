import{T as l}from"./Title-08ec7fda.js";import{C as n}from"./Content-ffe4f6d5.js";import{m as q,T as a,I as r}from"./Image-ad933c85.js";import{R as i,C as s}from"./Column-6bad53df.js";import"./Unit.vue_vue_type_style_index_0_scoped_4109b838_lang-42e731a9.js";import{_,o,c as u,h as v,r as f,a as e,w as t,b as p,F as A}from"./index-5efc714f.js";/* empty css                                              */const y={mixins:[q],props:{link:{type:String,required:!0},elementStyles:{type:Array}},data(){return{componentStyle:{}}}},P=["src"];function S(m,d,c,h,g,x){return o(),u("iframe",{src:c.link,style:v([g.componentStyle,c.elementStyles])},`

  `,12,P)}const $=_(y,[["render",S]]),k={name:"List",props:{ordered:{type:Boolean,default:!1}}},E={key:0},F={key:1};function j(m,d,c,h,g,x){return o(),u("div",null,[c.ordered?(o(),u("ol",E,[f(m.$slots,"default")])):(o(),u("ul",F,[f(m.$slots,"default")]))])}const b=_(k,[["render",j]]),N={__name:"Scratch_Laberint",setup(m){return(d,c)=>(o(),u(A,null,[e(l,{title:"Laberint",number:1}),e(l,{title:"Introducció",number:2}),e(n,null,{default:t(()=>[e(i,null,{default:t(()=>[e(s,null,{default:t(()=>[e(a,{text:"Anem a crear un videojoc d'un laberint on un personatge haurà d'arribar al final d'ell. El personatge es mourà evitant els obstacles i tornarà al principi si els toca."}),e(a,{text:"En primer lloc, abans de començar hauràs d'obrir [Scratch](https://scratch.mit.edu/) i crear un projecte nou. En fer-ho, carrega la plantilla que trobaràs en el següent [enllaç](https://drive.google.com/file/d/1PaEuF9tjuYbmXW3BkmtPkp60BfFyAAIN/view)"})]),_:1}),e(s,null,{default:t(()=>[e(r,{img_name:"scratch_laberint"})]),_:1})]),_:1})]),_:1}),e(l,{title:"Moviment del personatge",number:2}),e(n,null,{default:t(()=>[e(a,{text:"El primer que haurem de fer és fer que el personatge es quede a la posició inicial X i Y de l'escenari. Per fer-ho hem d'utilitzar un bloc *Al presionar bandera verda* (en esdeveniments) que seran les accions que s'executaran quan comencem el joc."}),e(a,{text:"A continuació afegirem el bloc d' *anar a x: __ y: __* i ahí serà on posarem la posició x i y del personatge. Per fer-ho, posa el personatge en la posició inicial i comprova la posició."}),e(r,{src:"/src/img/unitats/programacio/scratch/scr-01-laberint-01.png"}),e(a,{text:"Ara farem que es moga quan polsem les *fletxes cap amunt, avall, dreta i esquerra*. Per fer-ho has de buscar l'esdeveniment de *Al presionar una tecla* i de moment, anem a seleccionar cap a *l'esquerra*"}),e(a,{text:"Just després anem a posar 2 instruccions: la primera serà *Apuntar en direcció -90º* i després *Moure 10 passos*"}),e(a,{text:"Prova que al pressionar la tecla de la fletxa esquerra es mou cap a l'esquerra i després fes el mateix però per a les altres 3 fletxes que falten, pensant en els graus que has d'aplicar."}),e(i,null,{default:t(()=>[e(s,null,{default:t(()=>[e(r,{src:"/src/img/unitats/programacio/scratch/scr-01-laberint-02.png"})]),_:1}),e(s,null,{default:t(()=>[e(r,{src:"/src/img/unitats/programacio/scratch/scr-01-laberint-03.png"})]),_:1})]),_:1})]),_:1}),e(l,{title:"Sensors",number:2}),e(n,null,{default:t(()=>[e(i,null,{default:t(()=>[e(s,null,{default:t(()=>[e(a,{text:"Anem a utilitzar els sensors per detectar les parets i que el personatge no les puga atravessar."}),e(a,{text:"Per fer-ho necessitem posar un bucle *Per sempre* que estiga tota l'estona comprovant si es toca una paret o no."}),e(a,{text:"Per tant, dins del bucle *Per sempre* afegeix un control *si __ llavors* on afegiràs la comprovació *si tocant color negre* que podràs trobar a la secció *sensors*"}),e(a,{text:"En el moment en què estiga tocant el color negre, hauràs de fer que es *moga fins la posició inicial lliscant durant 2s*. Aquesta instrucció la trobaràs en la secció *moviment*"})]),_:1}),e(s,null,{default:t(()=>[e(r,{src:"/src/img/unitats/programacio/scratch/scr-01-laberint-04.png"})]),_:1}),e(s,null,{default:t(()=>[e(r,{src:"/src/img/unitats/programacio/scratch/scr-01-laberint-05.gif"})]),_:1})]),_:1})]),_:1}),e(l,{title:"Obstacles",number:2}),e(n,null,{default:t(()=>[e(a,{text:"Els obstacles han d'acabar movent-se per l'escenari però abans anem a canviar-li la disfressa al 2 i al 3."}),e(a,{text:"Per fer-ho has de seleccionar l'Obstacle 2, després la pestanya *Vestits* i per últim el botó de *Tria un vestit*"}),e(r,{src:"/src/img/unitats/programacio/scratch/scr-01-laberint-06.png"}),e(a,{text:"Després buscarem *ball* i seleccionarem la blava. Veuràs que s'ha afegit una nova disfressa, així que canvia el tamany i centra-ho al mig."}),e(i,null,{default:t(()=>[e(s,null,{default:t(()=>[e(r,{src:"/src/img/unitats/programacio/scratch/scr-01-laberint-07.png"})]),_:1}),e(s,null,{default:t(()=>[e(r,{src:"/src/img/unitats/programacio/scratch/scr-01-laberint-08.gif"})]),_:1})]),_:1}),e(a,{text:"Fes el mateix amb *l'obstacle 3*"}),e(a,{text:"Per últim anem a fer que es moguen. Selecciona l'obstacle número 1 i afegim l'esdeveniment *Quan la bandera verda es cliqui*. La primera acció serà moure-ho a la posició inicial."}),e(a,{text:"A continuació haurem de tindre un *per sempre* perquè repetisca tota la estona dos accions: lliscar cap a la posició final i lliscar cap a la posició inicial."}),e(a,{text:"Ací tens el resultat amb el codi de l'obstacle 1. Fes el mateix amb el 2 i el 3."}),e(r,{src:"/src/img/unitats/programacio/scratch/scr-01-laberint-09.png"}),e(a,{text:"El resultat de que els 3 obstacles es moguen."}),e(r,{src:"/src/img/unitats/programacio/scratch/scr-01-laberint-10.gif"})]),_:1}),e(l,{title:"Xocar i acabar joc",number:2}),e(n,null,{default:t(()=>[e(i,null,{default:t(()=>[e(s,null,{default:t(()=>[e(a,{text:"Ara necessitem que al tocar els obstacles, el personatge torne a la posició inicial lliscant."}),e(a,{text:"Per tant, dins del personatge, en el bucle *per sempre* has d'afegir una condició de *si __ llavors* on hauràs d'incloure 3 condicions amb o: tocant obstacle 1 *o* tocant obstacle 2 *o* tocant obstacle 3. I en cas que ocòrrega, ha de lliscar a la posició inicial (com quan tocava una paret)."}),e(a,{text:"Recorda que el o es troba a la secció *operadors*"})]),_:1}),e(s,null,{default:t(()=>[e(r,{src:"/src/img/unitats/programacio/scratch/scr-01-laberint-11.png"})]),_:1})]),_:1}),e(a,{text:"Ara fes que quan toque el color roig de la meta el personatge *diga durant 2 segons que HA GUANYAT!!*"}),e(r,{src:"/src/img/unitats/programacio/scratch/scr-01-laberint-12.gif"})]),_:1}),e(l,{title:"Millores a realitzar",number:2}),e(n,null,{default:t(()=>[e(a,{text:"Per tal d'acabar el joc has de fer les següents millores:"}),e(b,null,{default:t(()=>[p("li",null,[e(a,{text:"Que no torne a la posició inicial al tocar una paret"})]),p("li",null,[e(a,{text:"Que al tocar una paret torne enrere en lloc d'anar a la posició inicial"})]),e(b,null,{default:t(()=>[p("li",null,[e(a,{text:"Pista: ha de ser al pressionar les fletxes"})])]),_:1}),p("li",null,[e(a,{text:"Afegeix un temporitzador que comence en 0 i que es pare quan toque la meta"})])]),_:1}),e(i,null,{default:t(()=>[e(s,null,{default:t(()=>[e(r,{src:"/src/img/unitats/programacio/scratch/scr-01-laberint-13.gif"})]),_:1}),e(s,null,{default:t(()=>[e(r,{src:"/src/img/unitats/programacio/scratch/scr-01-laberint-14.gif"})]),_:1})]),_:1}),e($,{link:"https://learningapps.org/watch?app=30998038",elementStyles:{width:"100%",height:"80vh"}})]),_:1})],64))}};export{N as default};