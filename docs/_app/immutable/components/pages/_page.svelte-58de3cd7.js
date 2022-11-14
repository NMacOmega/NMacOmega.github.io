import{L as z,M as tt,S as X,i as Y,s as Z,k as v,C as j,a as I,q as P,l as g,m as _,D as A,h as f,c as $,r as U,n,p as F,b as q,F as r,N as W,u as J,B as H,O as et,G as st,w as rt,P as at,x as nt,E as ot,y as lt,f as ct,t as it,z as ut}from"../../chunks/index-386d91d3.js";import{w as dt}from"../../chunks/index-c8a8fd81.js";function Q(t){return Object.prototype.toString.call(t)==="[object Date]"}function V(t,s,e,a){if(typeof e=="number"||Q(e)){const o=a-e,l=(e-s)/(t.dt||1/60),i=t.opts.stiffness*o,c=t.opts.damping*l,m=(i-c)*t.inv_mass,d=(l+m)*t.dt;return Math.abs(d)<t.opts.precision&&Math.abs(o)<t.opts.precision?a:(t.settled=!1,Q(e)?new Date(e.getTime()+d):e+d)}else{if(Array.isArray(e))return e.map((o,l)=>V(t,s[l],e[l],a[l]));if(typeof e=="object"){const o={};for(const l in e)o[l]=V(t,s[l],e[l],a[l]);return o}else throw new Error(`Cannot spring ${typeof e} values`)}}function ft(t,s={}){const e=dt(t),{stiffness:a=.15,damping:o=.8,precision:l=.01}=s;let i,c,m,d=t,k=t,S=1,x=0,E=!1;function O(h,p={}){k=h;const T=m={};return t==null||p.hard||b.stiffness>=1&&b.damping>=1?(E=!0,i=z(),d=h,e.set(t=k),Promise.resolve()):(p.soft&&(x=1/((p.soft===!0?.5:+p.soft)*60),S=0),c||(i=z(),E=!1,c=tt(M=>{if(E)return E=!1,c=null,!1;S=Math.min(S+x,1);const w={inv_mass:S,opts:b,settled:!0,dt:(M-i)*60/1e3},y=V(w,d,t,k);return i=M,d=t,e.set(t=y),w.settled&&(c=null),!w.settled})),new Promise(M=>{c.promise.then(()=>{T===m&&M()})}))}const b={set:O,update:(h,p)=>O(h(k,t),p),subscribe:e.subscribe,stiffness:a,damping:o,precision:l};return b}function pt(t){let s,e,a,o,l,i,c,m,d=Math.floor(t[1]+1)+"",k,S,x,E=Math.floor(t[1])+"",O,b,h,p,T,M,w;return{c(){s=v("div"),e=v("button"),a=j("svg"),o=j("path"),l=I(),i=v("div"),c=v("div"),m=v("strong"),k=P(d),S=I(),x=v("strong"),O=P(E),b=I(),h=v("button"),p=j("svg"),T=j("path"),this.h()},l(y){s=g(y,"DIV",{class:!0});var u=_(s);e=g(u,"BUTTON",{"aria-label":!0,class:!0});var C=_(e);a=A(C,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var B=_(a);o=A(B,"path",{d:!0,class:!0}),_(o).forEach(f),B.forEach(f),C.forEach(f),l=$(u),i=g(u,"DIV",{class:!0});var N=_(i);c=g(N,"DIV",{class:!0,style:!0});var R=_(c);m=g(R,"STRONG",{class:!0,"aria-hidden":!0});var D=_(m);k=U(D,d),D.forEach(f),S=$(R),x=g(R,"STRONG",{class:!0});var L=_(x);O=U(L,E),L.forEach(f),R.forEach(f),N.forEach(f),b=$(u),h=g(u,"BUTTON",{"aria-label":!0,class:!0});var G=_(h);p=A(G,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var K=_(p);T=A(K,"path",{d:!0,class:!0}),_(T).forEach(f),K.forEach(f),G.forEach(f),u.forEach(f),this.h()},h(){n(o,"d","M0,0.5 L1,0.5"),n(o,"class","svelte-y96mxt"),n(a,"aria-hidden","true"),n(a,"viewBox","0 0 1 1"),n(a,"class","svelte-y96mxt"),n(e,"aria-label","Decrease the counter by one"),n(e,"class","svelte-y96mxt"),n(m,"class","hidden svelte-y96mxt"),n(m,"aria-hidden","true"),n(x,"class","svelte-y96mxt"),n(c,"class","counter-digits svelte-y96mxt"),F(c,"transform","translate(0, "+100*t[2]+"%)"),n(i,"class","counter-viewport svelte-y96mxt"),n(T,"d","M0,0.5 L1,0.5 M0.5,0 L0.5,1"),n(T,"class","svelte-y96mxt"),n(p,"aria-hidden","true"),n(p,"viewBox","0 0 1 1"),n(p,"class","svelte-y96mxt"),n(h,"aria-label","Increase the counter by one"),n(h,"class","svelte-y96mxt"),n(s,"class","counter svelte-y96mxt")},m(y,u){q(y,s,u),r(s,e),r(e,a),r(a,o),r(s,l),r(s,i),r(i,c),r(c,m),r(m,k),r(c,S),r(c,x),r(x,O),r(s,b),r(s,h),r(h,p),r(p,T),M||(w=[W(e,"click",t[4]),W(h,"click",t[5])],M=!0)},p(y,[u]){u&2&&d!==(d=Math.floor(y[1]+1)+"")&&J(k,d),u&2&&E!==(E=Math.floor(y[1])+"")&&J(O,E),u&4&&F(c,"transform","translate(0, "+100*y[2]+"%)")},i:H,o:H,d(y){y&&f(s),M=!1,et(w)}}}function mt(t,s){return(t%s+s)%s}function ht(t,s,e){let a,o,l=0;const i=ft();st(t,i,d=>e(1,o=d));const c=()=>e(0,l-=1),m=()=>e(0,l+=1);return t.$$.update=()=>{t.$$.dirty&1&&i.set(l),t.$$.dirty&2&&e(2,a=mt(o,1))},[l,o,a,i,c,m]}class _t extends X{constructor(s){super(),Y(this,s,ht,pt,Z,{})}}const vt=""+new URL("../../assets/svelte-welcome-c18bcf5a.webp",import.meta.url).href,gt=""+new URL("../../assets/svelte-welcome-6c300099.png",import.meta.url).href;function yt(t){let s,e,a,o,l,i,c,m,d,k,S,x,E,O,b,h,p,T,M,w,y;return w=new _t({}),{c(){s=v("meta"),e=I(),a=v("section"),o=v("h1"),l=v("span"),i=v("picture"),c=v("source"),m=I(),d=v("img"),S=P(`

		to your new`),x=v("br"),E=P("SvelteKit app"),O=I(),b=v("h2"),h=P("try editing "),p=v("strong"),T=P("src/routes/+page.svelte"),M=I(),rt(w.$$.fragment),this.h()},l(u){const C=at("svelte-t32ptj",document.head);s=g(C,"META",{name:!0,content:!0}),C.forEach(f),e=$(u),a=g(u,"SECTION",{class:!0});var B=_(a);o=g(B,"H1",{class:!0});var N=_(o);l=g(N,"SPAN",{class:!0});var R=_(l);i=g(R,"PICTURE",{});var D=_(i);c=g(D,"SOURCE",{srcset:!0,type:!0}),m=$(D),d=g(D,"IMG",{src:!0,alt:!0,class:!0}),D.forEach(f),R.forEach(f),S=U(N,`

		to your new`),x=g(N,"BR",{}),E=U(N,"SvelteKit app"),N.forEach(f),O=$(B),b=g(B,"H2",{});var L=_(b);h=U(L,"try editing "),p=g(L,"STRONG",{});var G=_(p);T=U(G,"src/routes/+page.svelte"),G.forEach(f),L.forEach(f),M=$(B),nt(w.$$.fragment,B),B.forEach(f),this.h()},h(){document.title="Home",n(s,"name","description"),n(s,"content","Svelte demo app"),n(c,"srcset",vt),n(c,"type","image/webp"),ot(d.src,k=gt)||n(d,"src",k),n(d,"alt","Welcome"),n(d,"class","svelte-19xx0bt"),n(l,"class","welcome svelte-19xx0bt"),n(o,"class","svelte-19xx0bt"),n(a,"class","svelte-19xx0bt")},m(u,C){r(document.head,s),q(u,e,C),q(u,a,C),r(a,o),r(o,l),r(l,i),r(i,c),r(i,m),r(i,d),r(o,S),r(o,x),r(o,E),r(a,O),r(a,b),r(b,h),r(b,p),r(p,T),r(a,M),lt(w,a,null),y=!0},p:H,i(u){y||(ct(w.$$.fragment,u),y=!0)},o(u){it(w.$$.fragment,u),y=!1},d(u){f(s),u&&f(e),u&&f(a),ut(w)}}}class wt extends X{constructor(s){super(),Y(this,s,null,yt,Z,{})}}export{wt as default};