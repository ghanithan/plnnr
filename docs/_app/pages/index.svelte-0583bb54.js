import{S as ce,i as ie,s as ue,l as fe,f as Q,I as de,d as g,J as De,e as E,t as S,c as T,a as w,g as O,b as Y,H as f,K as G,h as X,k as H,n as J,L as Ue,M as Ve,N as Me,O as Ne,P as Ce,j as _e,m as he,o as pe,x as R,u as W,v as ge,p as Fe,q as He,r as me,w as ye,Q as be,R as Je,A as Re,B as je,T as qe}from"../chunks/vendor-671d2724.js";function Ye(n){let e,t,l,a;return{c(){e=E("span"),t=S(n[0]),this.h()},l(r){e=T(r,"SPAN",{class:!0});var o=w(e);t=O(o,n[0]),o.forEach(g),this.h()},h(){Y(e,"class","date other svelte-1uvtb1b")},m(r,o){Q(r,e,o),f(e,t),l||(a=G(e,"click",n[4]),l=!0)},p(r,o){o&1&&X(t,r[0])},d(r){r&&g(e),l=!1,a()}}}function Ke(n){let e,t,l,a;return{c(){e=E("span"),t=S(n[0]),this.h()},l(r){e=T(r,"SPAN",{class:!0});var o=w(e);t=O(o,n[0]),o.forEach(g),this.h()},h(){Y(e,"class","date svelte-1uvtb1b")},m(r,o){Q(r,e,o),f(e,t),l||(a=G(e,"click",n[3]),l=!0)},p(r,o){o&1&&X(t,r[0])},d(r){r&&g(e),l=!1,a()}}}function Qe(n){let e,t,l,a;return{c(){e=E("span"),t=S(n[0]),this.h()},l(r){e=T(r,"SPAN",{class:!0});var o=w(e);t=O(o,n[0]),o.forEach(g),this.h()},h(){Y(e,"class","date today svelte-1uvtb1b")},m(r,o){Q(r,e,o),f(e,t),l||(a=G(e,"click",n[3]),l=!0)},p(r,o){o&1&&X(t,r[0])},d(r){r&&g(e),l=!1,a()}}}function We(n){let e;function t(r,o){return r[2]?Qe:r[1]?Ke:Ye}let l=t(n),a=l(n);return{c(){a.c(),e=fe()},l(r){a.l(r),e=fe()},m(r,o){a.m(r,o),Q(r,e,o)},p(r,[o]){l===(l=t(r))&&a?a.p(r,o):(a.d(1),a=l(r),a&&(a.c(),a.m(e.parentNode,e)))},i:de,o:de,d(r){a.d(r),r&&g(e)}}}function ze(n,e,t){let{id:l,content:a,enable:r,isToday:o,day:u}=e;const d=De();function D(){d("dateClicked",{date:l,isToday:o,content:a,day:u})}function A(){let _=-1;l>15&&(_=1),d("changeMonth",{change:_,date:l,isToday:o,content:a,day:u})}return n.$$set=_=>{"id"in _&&t(0,l=_.id),"content"in _&&t(5,a=_.content),"enable"in _&&t(1,r=_.enable),"isToday"in _&&t(2,o=_.isToday),"day"in _&&t(6,u=_.day)},[l,r,o,D,A,a,u]}class Ge extends ce{constructor(e){super();ie(this,e,ze,We,ue,{id:0,content:5,enable:1,isToday:2,day:6})}}function Xe(n){const e=t=>{n.contains(t.target)||n.dispatchEvent(new CustomEvent("outclick"))};return document.addEventListener("click",e,!0),{destroy(){document.removeEventListener("click",e,!0)}}}function Ze(n){let e,t,l,a,r=n[0].date+"",o,u,d,D=n[0].content+"",A,_,M,C,m;return{c(){e=E("div"),t=E("div"),l=E("ul"),a=E("li"),o=S(r),u=H(),d=E("li"),A=S(D),this.h()},l(v){e=T(v,"DIV",{class:!0});var b=w(e);t=T(b,"DIV",{class:!0});var L=w(t);l=T(L,"UL",{});var U=w(l);a=T(U,"LI",{});var V=w(a);o=O(V,r),V.forEach(g),u=J(U),d=T(U,"LI",{});var B=w(d);A=O(B,D),B.forEach(g),U.forEach(g),L.forEach(g),b.forEach(g),this.h()},h(){Y(t,"class","card svelte-36o05w"),Y(e,"class","container svelte-36o05w")},m(v,b){Q(v,e,b),f(e,t),f(t,l),f(l,a),f(a,o),f(l,u),f(l,d),f(d,A),M=!0,C||(m=[Ue(Xe.call(null,t)),G(t,"outclick",n[1])],C=!0)},p(v,[b]){(!M||b&1)&&r!==(r=v[0].date+"")&&X(o,r),(!M||b&1)&&D!==(D=v[0].content+"")&&X(A,D)},i(v){M||(Ve(()=>{_||(_=Me(e,Ce,{},!0)),_.run(1)}),M=!0)},o(v){_||(_=Me(e,Ce,{},!1)),_.run(0),M=!1},d(v){v&&g(e),v&&_&&_.end(),C=!1,Ne(m)}}}function xe(n,e,t){let{card:l}=e;const a=De();function r(){a("returnToMain",{action:!0})}return n.$$set=o=>{"card"in o&&t(0,l=o.card)},[l,r]}class $e extends ce{constructor(e){super();ie(this,e,xe,Ze,ue,{card:0})}}function Ie(n,e,t){const l=n.slice();return l[29]=e[t],l}function Se(n,e,t){const l=n.slice();return l[6]=e[t],l}function Oe(n,e,t){const l=n.slice();return l[34]=e[t],l}function Ae(n){let e,t;return e=new $e({props:{card:n[2]}}),e.$on("returnToMain",n[12]),{c(){_e(e.$$.fragment)},l(l){he(e.$$.fragment,l)},m(l,a){pe(e,l,a),t=!0},p(l,a){const r={};a[0]&4&&(r.card=l[2]),e.$set(r)},i(l){t||(R(e.$$.fragment,l),t=!0)},o(l){W(e.$$.fragment,l),t=!1},d(l){ge(e,l)}}}function Be(n){let e,t=n[34]+"",l;return{c(){e=E("span"),l=S(t),this.h()},l(a){e=T(a,"SPAN",{class:!0});var r=w(e);l=O(r,t),r.forEach(g),this.h()},h(){Y(e,"class","label svelte-fy5pnn")},m(a,r){Q(a,e,r),f(e,l)},p:de,d(a){a&&g(e)}}}function Pe(n){let e,t;const l=[n[6]];let a={};for(let r=0;r<l.length;r+=1)a=je(a,l[r]);return e=new Ge({props:a}),e.$on("dateClicked",n[11]),e.$on("changeMonth",n[13]),{c(){_e(e.$$.fragment)},l(r){he(e.$$.fragment,r)},m(r,o){pe(e,r,o),t=!0},p(r,o){const u=o[0]&32?Fe(l,[He(r[6])]):{};e.$set(u)},i(r){t||(R(e.$$.fragment,r),t=!0)},o(r){W(e.$$.fragment,r),t=!1},d(r){ge(e,r)}}}function Le(n){let e,t,l=n[29],a=[];for(let o=0;o<l.length;o+=1)a[o]=Pe(Se(n,l,o));const r=o=>W(a[o],1,1,()=>{a[o]=null});return{c(){for(let o=0;o<a.length;o+=1)a[o].c();e=fe()},l(o){for(let u=0;u<a.length;u+=1)a[u].l(o);e=fe()},m(o,u){for(let d=0;d<a.length;d+=1)a[d].m(o,u);Q(o,e,u),t=!0},p(o,u){if(u[0]&10272){l=o[29];let d;for(d=0;d<l.length;d+=1){const D=Se(o,l,d);a[d]?(a[d].p(D,u),R(a[d],1)):(a[d]=Pe(D),a[d].c(),R(a[d],1),a[d].m(e.parentNode,e))}for(me(),d=l.length;d<a.length;d+=1)r(d);ye()}},i(o){if(!t){for(let u=0;u<l.length;u+=1)R(a[u]);t=!0}},o(o){a=a.filter(Boolean);for(let u=0;u<a.length;u+=1)W(a[u]);t=!1},d(o){be(a,o),o&&g(e)}}}function et(n){let e,t,l,a,r,o,u,d,D,A,_,M,C,m,v,b,L,U,V,B,le,x,K,j,$,ne,ee,ae,P,y,F,te,re,p=n[2].date!=n[8].date&&Ae(n),I=n[7],k=[];for(let s=0;s<I.length;s+=1)k[s]=Be(Oe(n,I,s));let q=n[5],h=[];for(let s=0;s<q.length;s+=1)h[s]=Le(Ie(n,q,s));const z=s=>W(h[s],1,1,()=>{h[s]=null});return{c(){p&&p.c(),e=H(),t=E("div"),l=E("p"),a=S("trying to build calendar"),r=H(),o=E("p"),u=S(n[0]),d=H(),D=E("br"),A=H(),_=E("button"),M=S("previous month"),C=H(),m=E("button"),v=S("next month"),b=H(),L=E("button"),U=S("previous year"),V=H(),B=E("button"),le=S("next year"),x=H(),K=E("header"),j=E("h4"),$=S(n[4]),ne=H(),ee=S(n[1]),ae=H(),P=E("div");for(let s=0;s<k.length;s+=1)k[s].c();y=H();for(let s=0;s<h.length;s+=1)h[s].c();this.h()},l(s){p&&p.l(s),e=J(s),t=T(s,"DIV",{class:!0});var i=w(t);l=T(i,"P",{});var c=w(l);a=O(c,"trying to build calendar"),c.forEach(g),r=J(i),o=T(i,"P",{});var N=w(o);u=O(N,n[0]),d=J(N),D=T(N,"BR",{}),N.forEach(g),A=J(i),_=T(i,"BUTTON",{});var ve=w(_);M=O(ve,"previous month"),ve.forEach(g),C=J(i),m=T(i,"BUTTON",{});var ke=w(m);v=O(ke,"next month"),ke.forEach(g),b=J(i),L=T(i,"BUTTON",{});var Ee=w(L);U=O(Ee,"previous year"),Ee.forEach(g),V=J(i),B=T(i,"BUTTON",{});var Te=w(B);le=O(Te,"next year"),Te.forEach(g),x=J(i),K=T(i,"HEADER",{class:!0});var we=w(K);j=T(we,"H4",{class:!0});var oe=w(j);$=O(oe,n[4]),ne=J(oe),ee=O(oe,n[1]),oe.forEach(g),we.forEach(g),ae=J(i),P=T(i,"DIV",{class:!0});var se=w(P);for(let Z=0;Z<k.length;Z+=1)k[Z].l(se);y=J(se);for(let Z=0;Z<h.length;Z+=1)h[Z].l(se);se.forEach(g),i.forEach(g),this.h()},h(){Y(j,"class","svelte-fy5pnn"),Y(K,"class","svelte-fy5pnn"),Y(P,"class","month svelte-fy5pnn"),Y(t,"class",""+(Je(tt)+" svelte-fy5pnn"))},m(s,i){p&&p.m(s,i),Q(s,e,i),Q(s,t,i),f(t,l),f(l,a),f(t,r),f(t,o),f(o,u),f(o,d),f(o,D),f(t,A),f(t,_),f(_,M),f(t,C),f(t,m),f(m,v),f(t,b),f(t,L),f(L,U),f(t,V),f(t,B),f(B,le),f(t,x),f(t,K),f(K,j),f(j,$),f(j,ne),f(j,ee),f(t,ae),f(t,P);for(let c=0;c<k.length;c+=1)k[c].m(P,null);f(P,y);for(let c=0;c<h.length;c+=1)h[c].m(P,null);n[19](P),F=!0,te||(re=[G(_,"click",n[9]),G(m,"click",n[10]),G(L,"click",n[17]),G(B,"click",n[18])],te=!0)},p(s,i){if(s[2].date!=s[8].date?p?(p.p(s,i),i[0]&4&&R(p,1)):(p=Ae(s),p.c(),R(p,1),p.m(e.parentNode,e)):p&&(me(),W(p,1,1,()=>{p=null}),ye()),(!F||i[0]&1)&&X(u,s[0]),(!F||i[0]&16)&&X($,s[4]),(!F||i[0]&2)&&X(ee,s[1]),i[0]&128){I=s[7];let c;for(c=0;c<I.length;c+=1){const N=Oe(s,I,c);k[c]?k[c].p(N,i):(k[c]=Be(N),k[c].c(),k[c].m(P,y))}for(;c<k.length;c+=1)k[c].d(1);k.length=I.length}if(i[0]&10272){q=s[5];let c;for(c=0;c<q.length;c+=1){const N=Ie(s,q,c);h[c]?(h[c].p(N,i),R(h[c],1)):(h[c]=Le(N),h[c].c(),R(h[c],1),h[c].m(P,null))}for(me(),c=q.length;c<h.length;c+=1)z(c);ye()}},i(s){if(!F){R(p);for(let i=0;i<q.length;i+=1)R(h[i]);F=!0}},o(s){W(p),h=h.filter(Boolean);for(let i=0;i<h.length;i+=1)W(h[i]);F=!1},d(s){p&&p.d(s),s&&g(e),s&&g(t),be(k,s),be(h,s),n[19](null),te=!1,Ne(re)}}}let tt="landing";function lt(n,e){return new Date(e,n,1).getDay()}function nt(n,e){console.log(n+" "+e),n==11?n=0:n+=1,console.log(n+" "+e);let t=new Date(e,n,0);return console.log(t),t}function at(n,e,t){const l=new Map;l.set(0,"January"),l.set(1,"February"),l.set(2,"March"),l.set(3,"April"),l.set(4,"May"),l.set(5,"June"),l.set(6,"July"),l.set(7,"August"),l.set(8,"September"),l.set(9,"October"),l.set(10,"November"),l.set(11,"December");const a=new Map;a.set(0,"Sun"),a.set(1,"Mon"),a.set(2,"Tue"),a.set(3,"Wed"),a.set(4,"Thu"),a.set(5,"Fri"),a.set(6,"Sat");let r=[...a.values()],o,u,d,D,A,_,M,C=0,m=0,v=0,b=0,L="";const U={date:-1};let V=U,B=[];u=new Date,M=new Date,C=M.getDay(),M.getDate(),m=M.getMonth(),b=M.getFullYear();function le(y,F,te,re){let p=[],I=[],k=!1,q=!1,h=0,z=!0,s=1,i=1,c=new Date(re,te,0).getDate();console.log(c),y!=0?(s=c-y+1,console.log(s+" "+c+" "+y),z=!1):(c=F,h=1),A==te&&_==re&&(q=!0),i=s;let N=0;for(;i<=c+1;){if(i>c){if(h===2){I[0]&&(p=[...p,I]);break}if(i=1,h===0)c=F,console.log(c),h=1;else if(h===1){if(c=Math.ceil((y+F)/7)*7%(y+F),h=2,c===0){p=[...p,I];break}console.log(c),console.log(h)}z==!1?z=!0:z=!1}q==!0&&z==!0&&D==i?(k=!0,console.log("hi")):k=!1,I=[...I,{id:i,content:"note",enable:z,isToday:k,day:N}],i+=1,N+=1,N>6&&(N=0,p=[...p,I],I=[])}return console.log(p),p}Re(()=>{t(5,B),t(14,C),t(16,v),t(15,m),t(1,b),o.scrollIntoView(!0);const y=setInterval(()=>{t(0,u=new Date)},1e3);return()=>{clearInterval(y)}});function x(){m!=0?t(15,m-=1):(t(15,m=11),t(1,b-=1))}function K(){m!=11?t(15,m+=1):(t(15,m=0),t(1,b+=1))}function j(y){t(2,V=y.detail),console.log(V)}function $(y){y.detail.action==!0&&t(2,V=U),console.log(y.detail)}function ne(y){console.log(y),y.detail.change>0?K():x()}const ee=()=>{t(1,b-=1)},ae=()=>{t(1,b+=1)};function P(y){qe[y?"unshift":"push"](()=>{o=y,t(3,o)})}return n.$$.update=()=>{n.$$.dirty[0]&1&&t(6,d=u.getDay()),n.$$.dirty[0]&1&&(D=u.getDate()),n.$$.dirty[0]&1&&(A=u.getMonth()),n.$$.dirty[0]&1&&(_=u.getFullYear()),n.$$.dirty[0]&32768&&t(15,m),n.$$.dirty[0]&32770&&t(16,v=nt(m,b).getDate()),n.$$.dirty[0]&32770&&t(14,C=lt(m,b)),n.$$.dirty[0]&16384&&a.get(C),n.$$.dirty[0]&32768&&t(4,L=l.get(m)),n.$$.dirty[0]&114690&&t(5,B=le(C,v,m,b)),n.$$.dirty[0]&4&&t(2,V)},[u,b,V,o,L,B,d,r,U,x,K,j,$,ne,C,m,v,ee,ae,P]}class rt extends ce{constructor(e){super();ie(this,e,at,et,ue,{},null,[-1,-1])}}function ot(n){let e,t;return e=new rt({}),{c(){_e(e.$$.fragment)},l(l){he(e.$$.fragment,l)},m(l,a){pe(e,l,a),t=!0},p:de,i(l){t||(R(e.$$.fragment,l),t=!0)},o(l){W(e.$$.fragment,l),t=!1},d(l){ge(e,l)}}}class ct extends ce{constructor(e){super();ie(this,e,null,ot,ue,{})}}export{ct as default};