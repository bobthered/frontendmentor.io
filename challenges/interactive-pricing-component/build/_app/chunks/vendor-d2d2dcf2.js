function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n,e,o){if(t){const r=i(t,n,e,o);return t[0](r)}}function i(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function f(t,n,e,o,r,c,s){const u=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,c);if(u){const r=i(n,e,o,s);t.p(r,u)}}function a(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function l(t,n){t.appendChild(n)}function d(t,n,e){t.insertBefore(n,e||null)}function p(t){t.parentNode.removeChild(t)}function h(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function $(t){return document.createElement(t)}function g(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function m(t){return document.createTextNode(t)}function y(){return m(" ")}function b(){return m("")}function x(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function _(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function v(t){return""===t?null:+t}function w(t){return Array.from(t.childNodes)}function E(t,n,e,o){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===n){let n=0;const c=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||c.push(t.name)}for(let t=0;t<c.length;t++)o.removeAttribute(c[t]);return t.splice(r,1)[0]}}return o?g(n):$(n)}function k(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return m(n)}function A(t){return k(t," ")}function j(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function N(t,n){t.value=null==n?"":n}function O(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function S(t,n=document.body){return Array.from(n.querySelectorAll(t))}let T;function q(t){T=t}function C(){if(!T)throw new Error("Function called outside component initialization");return T}function L(t){C().$$.on_mount.push(t)}function M(t){C().$$.after_update.push(t)}function P(t,n){C().$$.context.set(t,n)}function z(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t(n)))}const B=[],F=[],D=[],G=[],H=Promise.resolve();let I=!1;function J(t){D.push(t)}function K(t){G.push(t)}let Q=!1;const R=new Set;function U(){if(!Q){Q=!0;do{for(let t=0;t<B.length;t+=1){const n=B[t];q(n),V(n.$$)}for(q(null),B.length=0;F.length;)F.pop()();for(let t=0;t<D.length;t+=1){const n=D[t];R.has(n)||(R.add(n),n())}D.length=0}while(B.length);for(;G.length;)G.pop()();I=!1,Q=!1,R.clear()}}function V(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(J)}}const W=new Set;let X;function Y(){X={r:0,c:[],p:X}}function Z(){X.r||r(X.c),X=X.p}function tt(t,n){t&&t.i&&(W.delete(t),t.i(n))}function nt(t,n,e,o){if(t&&t.o){if(W.has(t))return;W.add(t),X.c.push((()=>{W.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function et(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],u=n[c];if(u){for(const t in s)t in u||(o[t]=1);for(const t in u)r[t]||(e[t]=u[t],r[t]=1);t[c]=u}else for(const t in s)r[t]=1}for(const s in o)s in e||(e[s]=void 0);return e}function ot(t){return"object"==typeof t&&null!==t?t:{}}function rt(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}function ct(t){t&&t.c()}function st(t,n){t&&t.l(n)}function ut(t,n,o,s){const{fragment:u,on_mount:i,on_destroy:f,after_update:a}=t.$$;u&&u.m(n,o),s||J((()=>{const n=i.map(e).filter(c);f?f.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(J)}function it(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ft(t,n){-1===t.$$.dirty[0]&&(B.push(t),I||(I=!0,H.then(U)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function at(n,e,c,s,u,i,f=[-1]){const a=T;q(n);const l=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:u,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:e.context||[]),callbacks:o(),dirty:f,skip_bound:!1};let d=!1;if(l.ctx=c?c(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return l.ctx&&u(l.ctx[t],l.ctx[t]=r)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](r),d&&ft(n,t)),e})):[],l.update(),d=!0,r(l.before_update),l.fragment=!!s&&s(l.ctx),e.target){if(e.hydrate){const t=w(e.target);l.fragment&&l.fragment.l(t),t.forEach(p)}else l.fragment&&l.fragment.c();e.intro&&tt(n.$$.fragment),ut(n,e.target,e.anchor,e.customElement),U()}q(a)}class lt{$destroy(){it(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const dt=[];function pt(n,e=t){let o;const r=[];function c(t){if(s(n,t)&&(n=t,o)){const t=!dt.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),dt.push(t,n)}if(t){for(let t=0;t<dt.length;t+=2)dt[t][0](dt[t+1]);dt.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(s,u=t){const i=[s,u];return r.push(i),1===r.length&&(o=e(c)||t),s(n),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}export{n as A,Y as B,pt as C,u as D,f as E,l as F,t as G,x as H,F as I,rt as J,K,a as L,z as M,g as N,h as O,O as P,N as Q,r as R,lt as S,v as T,S as U,w as a,_ as b,E as c,p as d,$ as e,d as f,k as g,j as h,at as i,ct as j,y as k,b as l,st as m,A as n,ut as o,et as p,ot as q,nt as r,s,m as t,Z as u,tt as v,it as w,P as x,M as y,L as z};