import{S as te,i as le,s as re,e as h,c as m,b as i,K as L,g as V,n as Y,d as u,a as E,L as ce,k as I,l as Z,m as M,r as B,t as z,h as H,J as c,M as X,j as fe,N as Ne,O as he,o as ue,p as P,q as ge,P as ee,Q as Te,R as Ve,x as ne,y as se,z as ie,C as oe,T as Ae}from"../chunks/index-16af4eac.js";import{b as A}from"../chunks/paths-396f020f.js";function me(s,e,l){const a=s.slice();return a[1]=e[l].alt,a[2]=e[l].classes,a}function _e(s){let e,l,a,t;return{c(){e=h("img"),this.h()},l(n){e=m(n,"IMG",{alt:!0,class:!0,src:!0}),this.h()},h(){i(e,"alt",l=s[1]),i(e,"class",a=s[2]+" lg:w-auto"),L(e.src,t=A+"/client-"+s[1]+".svg")||i(e,"src",t)},m(n,r){V(n,e,r)},p:Y,d(n){n&&u(e)}}}function Ge(s){let e,l=s[0],a=[];for(let t=0;t<l.length;t+=1)a[t]=_e(me(s,l,t));return{c(){e=h("div");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){e=m(t,"DIV",{class:!0});var n=E(e);for(let r=0;r<a.length;r+=1)a[r].l(n);n.forEach(u),this.h()},h(){i(e,"class","flex items-center justify-between w-full py-[1.5rem] lg:py-0 lg:justify-start lg:space-x-[40px]")},m(t,n){V(t,e,n);for(let r=0;r<a.length;r+=1)a[r].m(e,null)},p(t,[n]){if(n&1){l=t[0];let r;for(r=0;r<l.length;r+=1){const f=me(t,l,r);a[r]?a[r].p(f,n):(a[r]=_e(f),a[r].c(),a[r].m(e,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=l.length}},i:Y,o:Y,d(t){t&&u(e),ce(a,t)}}}function Be(s){return[[{alt:"databiz",classes:"w-[82px]"},{alt:"audiophile",classes:"w-[52px]"},{alt:"meet",classes:"w-[66px]"},{alt:"maker",classes:"w-[59px]"}]]}class Fe extends te{constructor(e){super(),le(this,e,Be,Ge,re,{})}}function Ce(s){const e=s-1;return e*e*e+1}function xe(s,{delay:e=0,duration:l=400,easing:a=Ce}={}){const t=getComputedStyle(s),n=+t.opacity,r=parseFloat(t.height),f=parseFloat(t.paddingTop),d=parseFloat(t.paddingBottom),o=parseFloat(t.marginTop),x=parseFloat(t.marginBottom),y=parseFloat(t.borderTopWidth),_=parseFloat(t.borderBottomWidth);return{delay:e,duration:l,easing:a,css:k=>`overflow: hidden;opacity: ${Math.min(k*20,1)*n};height: ${k*r}px;padding-top: ${k*f}px;padding-bottom: ${k*d}px;margin-top: ${k*o}px;margin-bottom: ${k*x}px;border-top-width: ${k*y}px;border-bottom-width: ${k*_}px;`}}function ve(s,e,l){const a=s.slice();return a[5]=e[l].text,a[6]=e[l].open!==void 0?e[l].open:!1,a[7]=e[l].subnav!==void 0?e[l].subnav:void 0,a[8]=e,a[9]=l,a}function ye(s,e,l){const a=s.slice();return a[10]=e[l],a}function be(s){let e,l,a,t=s[5]+"",n,r,f,d,o,x,y,_=s[7]!==void 0&&we(s);function k(){return s[4](s[6],s[8],s[9])}let p=s[6]&&ke(s);return{c(){e=h("div"),l=h("a"),a=h("div"),n=z(t),r=I(),_&&_.c(),d=I(),p&&p.c(),this.h()},l(D){e=m(D,"DIV",{class:!0});var $=E(e);l=m($,"A",{href:!0,class:!0});var T=E(l);a=m(T,"DIV",{});var C=E(a);n=H(C,t),C.forEach(u),r=M(T),_&&_.l(T),T.forEach(u),d=M($),p&&p.l($),$.forEach(u),this.h()},h(){i(l,"href",f=A+"/"),i(l,"class","flex space-x-[1rem] py-[9px] items-center outline-none text-gray-500 transition duration-200 ring ring-transparent hover:text-gray-900 focus:text-gray-900 focus:ring-gray-900/[.3]"),i(e,"class","flex flex-col space-y-[1rem] lg:relative")},m(D,$){V(D,e,$),c(e,l),c(l,a),c(a,n),c(l,r),_&&_.m(l,null),c(e,d),p&&p.m(e,null),o=!0,x||(y=X(l,"click",ee(k)),x=!0)},p(D,$){s=D,(!o||$&1)&&t!==(t=s[5]+"")&&fe(n,t),s[7]!==void 0?_?_.p(s,$):(_=we(s),_.c(),_.m(l,null)):_&&(_.d(1),_=null),s[6]?p?(p.p(s,$),$&1&&B(p,1)):(p=ke(s),p.c(),B(p,1),p.m(e,null)):p&&(ue(),P(p,1,1,()=>{p=null}),ge())},i(D){o||(B(p),o=!0)},o(D){P(p),o=!1},d(D){D&&u(e),_&&_.d(),p&&p.d(),x=!1,y()}}}function we(s){let e,l,a;return{c(){e=h("img"),this.h()},l(t){e=m(t,"IMG",{alt:!0,class:!0,src:!0}),this.h()},h(){i(e,"alt","Arrow"),i(e,"class",l="transition duration-200 transform "+(s[6]?"rotate-180":"rotate-0")),L(e.src,a=A+"/icon-arrow-down.svg")||i(e,"src",a)},m(t,n){V(t,e,n)},p(t,n){n&1&&l!==(l="transition duration-200 transform "+(t[6]?"rotate-180":"rotate-0"))&&i(e,"class",l)},d(t){t&&u(e)}}}function ke(s){let e,l,a,t=s[7]!==void 0&&$e(s);return{c(){e=h("div"),t&&t.c(),this.h()},l(n){e=m(n,"DIV",{class:!0});var r=E(e);t&&t.l(r),r.forEach(u),this.h()},h(){i(e,"class","flex flex-col py-[2px] lg:absolute lg:left-0 lg:bottom-[-10px] lg:transform lg:translate-y-full lg:bg-gray-50 lg:rounded-[1rem] lg:shadow-xl lg:shadow-gray-900/[.1] lg:p-[8px]")},m(n,r){V(n,e,r),t&&t.m(e,null),a=!0},p(n,r){n[7]!==void 0?t?t.p(n,r):(t=$e(n),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},i(n){a||(Ne(()=>{l||(l=he(e,xe,{},!0)),l.run(1)}),a=!0)},o(n){l||(l=he(e,xe,{},!1)),l.run(0),a=!1},d(n){n&&u(e),t&&t.d(),n&&l&&l.end()}}}function $e(s){let e,l=s[7],a=[];for(let t=0;t<l.length;t+=1)a[t]=Ie(ye(s,l,t));return{c(){for(let t=0;t<a.length;t+=1)a[t].c();e=Z()},l(t){for(let n=0;n<a.length;n+=1)a[n].l(t);e=Z()},m(t,n){for(let r=0;r<a.length;r+=1)a[r].m(t,n);V(t,e,n)},p(t,n){if(n&1){l=t[7];let r;for(r=0;r<l.length;r+=1){const f=ye(t,l,r);a[r]?a[r].p(f,n):(a[r]=Ie(f),a[r].c(),a[r].m(e.parentNode,e))}for(;r<a.length;r+=1)a[r].d(1);a.length=l.length}},d(t){ce(a,t),t&&u(e)}}}function Ee(s){let e,l,a;return{c(){e=h("img"),this.h()},l(t){e=m(t,"IMG",{alt:!0,class:!0,src:!0}),this.h()},h(){i(e,"alt",l=s[10].text),i(e,"class","w-[18px]"),L(e.src,a=A+"/"+s[10].icon+".svg")||i(e,"src",a)},m(t,n){V(t,e,n)},p(t,n){n&1&&l!==(l=t[10].text)&&i(e,"alt",l),n&1&&!L(e.src,a=A+"/"+t[10].icon+".svg")&&i(e,"src",a)},d(t){t&&u(e)}}}function Ie(s){let e,l=s[10].hasOwnProperty("icon"),a,t,n=s[10].text+"",r,f,d,o=l&&Ee(s);return{c(){e=h("a"),o&&o.c(),a=I(),t=h("div"),r=z(n),f=I(),this.h()},l(x){e=m(x,"A",{href:!0,class:!0});var y=E(e);o&&o.l(y),a=M(y),t=m(y,"DIV",{class:!0});var _=E(t);r=H(_,n),_.forEach(u),f=M(y),y.forEach(u),this.h()},h(){i(t,"class","text-[16.5px] whitespace-nowrap lg:text-[14px]"),i(e,"href",d=A+"/"),i(e,"class","flex items-center space-x-[1rem] px-[1.5rem] py-[8.5px] transition duration-200 text-gray-500 outline-none ring ring-transparent hover:text-gray-900 focus:text-gray-900 focus:ring-gray-900/[.3]")},m(x,y){V(x,e,y),o&&o.m(e,null),c(e,a),c(e,t),c(t,r),c(e,f)},p(x,y){y&1&&(l=x[10].hasOwnProperty("icon")),l?o?o.p(x,y):(o=Ee(x),o.c(),o.m(e,a)):o&&(o.d(1),o=null),y&1&&n!==(n=x[10].text+"")&&fe(r,n)},d(x){x&&u(e),o&&o.d()}}}function Me(s){let e,l=s[5]+"",a,t,n,r,f;return{c(){e=h("a"),a=z(l),t=I(),this.h()},l(d){e=m(d,"A",{href:!0,class:!0});var o=E(e);a=H(o,l),t=M(o),o.forEach(u),this.h()},h(){i(e,"href",n=A+"/"),i(e,"class","flex flex-col py-[9px] space-y-[1rem] outline-none text-gray-500 transition duration-200 ring ring-transparent hover:text-gray-900 focus:text-gray-900 focus:ring-gray-900/[.3]")},m(d,o){V(d,e,o),c(e,a),c(e,t),r||(f=X(e,"click",ee(s[3])),r=!0)},p(d,o){o&1&&l!==(l=d[5]+"")&&fe(a,l)},d(d){d&&u(e),r=!1,f()}}}function De(s){let e,l,a,t=s[7]!==void 0&&be(s),n=s[7]===void 0&&Me(s);return{c(){t&&t.c(),e=I(),n&&n.c(),l=Z()},l(r){t&&t.l(r),e=M(r),n&&n.l(r),l=Z()},m(r,f){t&&t.m(r,f),V(r,e,f),n&&n.m(r,f),V(r,l,f),a=!0},p(r,f){r[7]!==void 0?t?(t.p(r,f),f&1&&B(t,1)):(t=be(r),t.c(),B(t,1),t.m(e.parentNode,e)):t&&(ue(),P(t,1,1,()=>{t=null}),ge()),r[7]===void 0?n?n.p(r,f):(n=Me(r),n.c(),n.m(l.parentNode,l)):n&&(n.d(1),n=null)},i(r){a||(B(t),a=!0)},o(r){P(t),a=!1},d(r){t&&t.d(r),r&&u(e),n&&n.d(r),r&&u(l)}}}function Oe(s){let e,l,a,t,n,r,f,d,o,x,y,_,k,p,D,$,T,C,O,R,q,F,S,U,j,G=s[0],g=[];for(let v=0;v<G.length;v+=1)g[v]=De(ve(s,G,v));const K=v=>P(g[v],1,1,()=>{g[v]=null});return{c(){e=h("nav"),l=h("a"),a=h("img"),n=I(),r=h("div"),d=I(),o=h("aside"),x=h("a"),y=h("img"),k=I(),p=h("div");for(let v=0;v<g.length;v+=1)g[v].c();D=I(),$=h("div"),T=h("button"),C=z("Login"),O=I(),R=h("button"),q=z("Register"),this.h()},l(v){e=m(v,"NAV",{class:!0});var b=E(e);l=m(b,"A",{class:!0,href:!0});var w=E(l);a=m(w,"IMG",{alt:!0,class:!0,src:!0}),w.forEach(u),n=M(b),r=m(b,"DIV",{class:!0}),E(r).forEach(u),d=M(b),o=m(b,"ASIDE",{class:!0});var N=E(o);x=m(N,"A",{class:!0,href:!0});var W=E(x);y=m(W,"IMG",{alt:!0,class:!0,src:!0}),W.forEach(u),k=M(N),p=m(N,"DIV",{class:!0});var Q=E(p);for(let ae=0;ae<g.length;ae+=1)g[ae].l(Q);Q.forEach(u),D=M(N),$=m(N,"DIV",{class:!0});var J=E($);T=m(J,"BUTTON",{class:!0});var pe=E(T);C=H(pe,"Login"),pe.forEach(u),O=M(J),R=m(J,"BUTTON",{class:!0});var de=E(R);q=H(de,"Register"),de.forEach(u),J.forEach(u),N.forEach(u),b.forEach(u),this.h()},h(){i(a,"alt","Menu"),i(a,"class",""),L(a.src,t=A+"/icon-menu.svg")||i(a,"src",t),i(l,"class","py-[.4375rem] outline-none ring ring-transparent focus:ring-gray-900/[.3] lg:hidden"),i(l,"href",A+"/"),i(r,"class",f="fixed top-0 left-0 w-screen h-screen transition duration-200 bg-black/[.7] z-[1] lg:hidden lg:opacity-0 lg:pointer-events-none "+(s[1]?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none")),i(y,"alt","Close Menu"),i(y,"class",""),L(y.src,_=A+"/icon-close-menu.svg")||i(y,"src",_),i(x,"class","self-end outline-none ring ring-transparent focus:ring-gray-900/[.3] lg:hidden"),i(x,"href",A+"/"),i(p,"class","flex flex-col pt-[9px] pb-[6px] lg:p-0 lg:flex-row lg:text-[14px] lg:space-x-[34px]"),i(T,"class","px-[22px] text-[14px] rounded-[10px] ring ring-transparent outline-none transition duration-200 py-[9px] text-gray-500 hover:text-gray-900 focus:text-gray-900 focus:ring-gray-900/[.3]"),i(R,"class","px-[22px] text-[14px] rounded-[10px] ring ring-transparent outline-none ring-offset-1 transition duration-200 ring-offset-gray-500 py-[9px] text-gray-500 hover:text-gray-900 focus:text-gray-900 focus:ring-offset-gray-900 focus:ring-gray-900/[.3]"),i($,"class","flex flex-col space-y-[6px] lg:flex-row lg:items-center lg:space-y-0 lg:space-x-[20px]"),i(o,"class",F="fixed top-0 right-0 bg-gray-50 flex flex-col transition duration-200 transform min-h-screen px-[1.5rem] py-[19px] min-w-[240px] space-y-[1rem] z-[1] lg:relative lg:right-auto lg:translate-x-0 lg:min-w-0 lg:flex-grow lg:bg-transparent lg:py-0 lg:px-0 lg:space-y-0 lg:flex-row lg:justify-between lg:min-h-0 "+(s[1]?"translate-x-0":"translate-x-full")),i(e,"class","flex items-center justify-end flex-grow")},m(v,b){V(v,e,b),c(e,l),c(l,a),c(e,n),c(e,r),c(e,d),c(e,o),c(o,x),c(x,y),c(o,k),c(o,p);for(let w=0;w<g.length;w+=1)g[w].m(p,null);c(o,D),c(o,$),c($,T),c(T,C),c($,O),c($,R),c(R,q),S=!0,U||(j=[X(l,"click",ee(s[2])),X(r,"click",s[2]),X(x,"click",ee(s[2]))],U=!0)},p(v,[b]){if((!S||b&2&&f!==(f="fixed top-0 left-0 w-screen h-screen transition duration-200 bg-black/[.7] z-[1] lg:hidden lg:opacity-0 lg:pointer-events-none "+(v[1]?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none")))&&i(r,"class",f),b&1){G=v[0];let w;for(w=0;w<G.length;w+=1){const N=ve(v,G,w);g[w]?(g[w].p(N,b),B(g[w],1)):(g[w]=De(N),g[w].c(),B(g[w],1),g[w].m(p,null))}for(ue(),w=G.length;w<g.length;w+=1)K(w);ge()}(!S||b&2&&F!==(F="fixed top-0 right-0 bg-gray-50 flex flex-col transition duration-200 transform min-h-screen px-[1.5rem] py-[19px] min-w-[240px] space-y-[1rem] z-[1] lg:relative lg:right-auto lg:translate-x-0 lg:min-w-0 lg:flex-grow lg:bg-transparent lg:py-0 lg:px-0 lg:space-y-0 lg:flex-row lg:justify-between lg:min-h-0 "+(v[1]?"translate-x-0":"translate-x-full")))&&i(o,"class",F)},i(v){if(!S){for(let b=0;b<G.length;b+=1)B(g[b]);S=!0}},o(v){g=g.filter(Boolean);for(let b=0;b<g.length;b+=1)P(g[b]);S=!1},d(v){v&&u(e),ce(g,v),U=!1,Te(j)}}}function Re(s,e,l){const a=()=>l(1,n=!n),t=[{open:!1,text:"Features",subnav:[{icon:"icon-todo",text:"Todo List"},{icon:"icon-calendar",text:"Calendar"},{icon:"icon-reminders",text:"Reminders"},{icon:"icon-planning",text:"Planning"}]},{open:!1,text:"Company",subnav:[{text:"History"},{text:"Our Team"},{text:"Blog"}]},{text:"Careers"},{text:"About"}];let n=!1;function r(d){Ve.call(this,s,d)}return[t,n,a,r,(d,o,x)=>l(0,o[x].open=!d,t)]}class Se extends te{constructor(e){super(),le(this,e,Re,Oe,re,{})}}function je(s){let e,l,a,t,n,r;return n=new Se({}),{c(){e=h("header"),l=h("img"),t=I(),ne(n.$$.fragment),this.h()},l(f){e=m(f,"HEADER",{class:!0});var d=E(e);l=m(d,"IMG",{alt:!0,class:!0,src:!0}),t=M(d),se(n.$$.fragment,d),d.forEach(u),this.h()},h(){i(l,"alt","snap"),i(l,"class","lg:mt-[8px] lg:mr-[63px]"),L(l.src,a=A+"/logo.svg")||i(l,"src",a),i(e,"class","flex items-center px-[1rem] py-[19px] lg:px-[2.5rem] lg:py-[22px] lg:sticky lg:top-0 bg-gray-50")},m(f,d){V(f,e,d),c(e,l),c(e,t),ie(n,e,null),r=!0},p:Y,i(f){r||(B(n.$$.fragment,f),r=!0)},o(f){P(n.$$.fragment,f),r=!1},d(f){f&&u(e),oe(n)}}}class ze extends te{constructor(e){super(),le(this,e,null,je,re,{})}}function He(s){let e,l,a,t,n,r,f,d,o,x,y,_,k,p,D,$,T,C,O,R,q,F,S,U,j,G;return a=new ze({}),j=new Fe({}),{c(){e=I(),l=h("main"),ne(a.$$.fragment),t=I(),n=h("div"),r=h("img"),d=I(),o=h("img"),y=I(),_=h("div"),k=h("div"),p=h("h1"),D=z("Make "),$=h("br"),T=z(" remote work"),C=I(),O=h("p"),R=z(`Get your team in sync, no matter your location. Streamline processes, create team rituals,
          and watch productivity soar.`),q=I(),F=h("button"),S=z("Learn more"),U=I(),ne(j.$$.fragment),this.h()},l(g){Ae('[data-svelte="svelte-1f141l"]',document.head).forEach(u),e=M(g),l=m(g,"MAIN",{class:!0});var v=E(l);se(a.$$.fragment,v),t=M(v),n=m(v,"DIV",{class:!0});var b=E(n);r=m(b,"IMG",{alt:!0,class:!0,src:!0}),d=M(b),o=m(b,"IMG",{alt:!0,class:!0,src:!0}),y=M(b),_=m(b,"DIV",{class:!0});var w=E(_);k=m(w,"DIV",{class:!0});var N=E(k);p=m(N,"H1",{class:!0});var W=E(p);D=H(W,"Make "),$=m(W,"BR",{class:!0}),T=H(W," remote work"),W.forEach(u),C=M(N),O=m(N,"P",{class:!0});var Q=E(O);R=H(Q,`Get your team in sync, no matter your location. Streamline processes, create team rituals,
          and watch productivity soar.`),Q.forEach(u),q=M(N),F=m(N,"BUTTON",{class:!0});var J=E(F);S=H(J,"Learn more"),J.forEach(u),N.forEach(u),U=M(w),se(j.$$.fragment,w),w.forEach(u),b.forEach(u),v.forEach(u),this.h()},h(){document.title="Intro Section with Dropdown Navigation - Frontendmentor.io",i(r,"alt","Hero"),i(r,"class","py-[5px] lg:hidden lg:order-1"),L(r.src,f=A+"/image-hero-mobile.png")||i(r,"src",f),i(o,"alt","Hero"),i(o,"class","w-[480px] hidden lg:block lg:order-3"),L(o.src,x=A+"/image-hero-desktop.png")||i(o,"src",x),i($,"class","hidden lg:block"),i(p,"class","font-bold text-[2.20rem] leading-[1.5rem] lg:text-[78px] lg:leading-[80px]"),i(O,"class","text-gray-500 text-center text-[1rem] leading-[1.625rem] lg:pr-[200px] lg:text-left lg:text-[18px]"),i(F,"class","rounded-[1rem] py-[.75rem] px-[1.375rem] lg:px-[28px] transition duration-200 font-bold bg-gray-900 text-gray-50 outline-none ring-offset-1 ring-offset-gray-900 ring ring-transparent hover:bg-transparent focus:bg-transparent hover:text-gray-900 focus:text-gray-900 focus:ring-gray-900/[.3] lg:text-[18px] "),i(k,"class","flex flex-col space-y-[1.5rem] items-center lg:items-start lg:space-y-[3.4375rem]"),i(_,"class","flex flex-col items-center space-y-[1.5rem] px-[1rem] py-[52px] lg:order-2 lg:px-0 lg:items-start lg:pl-[35px] lg:space-y-[6.4375rem] lg:py-0"),i(n,"class","flex flex-col lg:flex-row lg:mx-auto lg:max-w-[1180px] lg:py-[48px] lg:items-end"),i(l,"class","flex flex-col relative")},m(g,K){V(g,e,K),V(g,l,K),ie(a,l,null),c(l,t),c(l,n),c(n,r),c(n,d),c(n,o),c(n,y),c(n,_),c(_,k),c(k,p),c(p,D),c(p,$),c(p,T),c(k,C),c(k,O),c(O,R),c(k,q),c(k,F),c(F,S),c(_,U),ie(j,_,null),G=!0},p:Y,i(g){G||(B(a.$$.fragment,g),B(j.$$.fragment,g),G=!0)},o(g){P(a.$$.fragment,g),P(j.$$.fragment,g),G=!1},d(g){g&&u(e),g&&u(l),oe(a),oe(j)}}}class qe extends te{constructor(e){super(),le(this,e,null,He,re,{})}}export{qe as default};
