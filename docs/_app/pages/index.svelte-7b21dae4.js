import{S as pe,i as de,s as ye,e as v,t as N,c as k,a as E,g as T,d as c,b as L,f as h,H as b,I as le,l as ee,J as se,k as P,n as B,K as te,h as G,L as be,A as me}from"../chunks/vendor-cd831ead.js";function ie(a,s,n){const l=a.slice();return l[22]=s[n],l}function ce(a,s,n){const l=a.slice();return l[4]=s[n],l}function fe(a,s,n){const l=a.slice();return l[27]=s[n],l}function _e(a){let s,n=a[27]+"",l;return{c(){s=v("span"),l=N(n),this.h()},l(t){s=k(t,"SPAN",{class:!0});var o=E(s);l=T(o,n),o.forEach(c),this.h()},h(){L(s,"class","label svelte-xpirqo")},m(t,o){h(t,s,o),b(s,l)},p:le,d(t){t&&c(s)}}}function ve(a){let s,n=a[4].id+"",l;return{c(){s=v("span"),l=N(n),this.h()},l(t){s=k(t,"SPAN",{class:!0});var o=E(s);l=T(o,n),o.forEach(c),this.h()},h(){L(s,"class","date.other")},m(t,o){h(t,s,o),b(s,l)},p(t,o){o&8&&n!==(n=t[4].id+"")&&G(l,n)},d(t){t&&c(s)}}}function ke(a){let s,n=a[4].id+"",l;return{c(){s=v("span"),l=N(n),this.h()},l(t){s=k(t,"SPAN",{class:!0});var o=E(s);l=T(o,n),o.forEach(c),this.h()},h(){L(s,"class","date.today")},m(t,o){h(t,s,o),b(s,l)},p(t,o){o&8&&n!==(n=t[4].id+"")&&G(l,n)},d(t){t&&c(s)}}}function ge(a){let s,n=a[4].id+"",l;return{c(){s=v("span"),l=N(n),this.h()},l(t){s=k(t,"SPAN",{class:!0});var o=E(s);l=T(o,n),o.forEach(c),this.h()},h(){L(s,"class","date svelte-xpirqo")},m(t,o){h(t,s,o),b(s,l)},p(t,o){o&8&&n!==(n=t[4].id+"")&&G(l,n)},d(t){t&&c(s)}}}function ue(a){let s;function n(o,i){return o[4].enable?ge:o[4].isToday?ke:ve}let l=n(a),t=l(a);return{c(){t.c(),s=ee()},l(o){t.l(o),s=ee()},m(o,i){t.m(o,i),h(o,s,i)},p(o,i){l===(l=n(o))&&t?t.p(o,i):(t.d(1),t=l(o),t&&(t.c(),t.m(s.parentNode,s)))},d(o){t.d(o),o&&c(s)}}}function he(a){let s,n=a[22],l=[];for(let t=0;t<n.length;t+=1)l[t]=ue(ce(a,n,t));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();s=ee()},l(t){for(let o=0;o<l.length;o+=1)l[o].l(t);s=ee()},m(t,o){for(let i=0;i<l.length;i+=1)l[i].m(t,o);h(t,s,o)},p(t,o){if(o&8){n=t[22];let i;for(i=0;i<n.length;i+=1){const O=ce(t,n,i);l[i]?l[i].p(O,o):(l[i]=ue(O),l[i].c(),l[i].m(s.parentNode,s))}for(;i<l.length;i+=1)l[i].d(1);l.length=n.length}},d(t){se(l,t),t&&c(s)}}}function Ee(a){let s,n,l,t,o,i,O,R,M,V,S,g,d,J,y,W,C,F,Q,x,I,A,D,U,Y,j,p,w,z,X,m=a[5],u=[];for(let e=0;e<m.length;e+=1)u[e]=_e(fe(a,m,e));let q=a[3],_=[];for(let e=0;e<q.length;e+=1)_[e]=he(ie(a,q,e));return{c(){s=v("p"),n=N("trying to build calendar"),l=P(),t=v("p"),o=N(a[0]),i=P(),O=v("br"),R=P(),M=v("button"),V=N("previous month"),S=P(),g=v("button"),d=N("next month"),J=P(),y=v("button"),W=N("previous year"),C=P(),F=v("button"),Q=N("next year"),x=P(),I=v("header"),A=v("h4"),D=N(a[2]),U=P(),Y=N(a[1]),j=P(),p=v("div");for(let e=0;e<u.length;e+=1)u[e].c();w=P();for(let e=0;e<_.length;e+=1)_[e].c();this.h()},l(e){s=k(e,"P",{});var f=E(s);n=T(f,"trying to build calendar"),f.forEach(c),l=B(e),t=k(e,"P",{});var r=E(t);o=T(r,a[0]),i=B(r),O=k(r,"BR",{}),r.forEach(c),R=B(e),M=k(e,"BUTTON",{});var H=E(M);V=T(H,"previous month"),H.forEach(c),S=B(e),g=k(e,"BUTTON",{});var ne=E(g);d=T(ne,"next month"),ne.forEach(c),J=B(e),y=k(e,"BUTTON",{});var oe=E(y);W=T(oe,"previous year"),oe.forEach(c),C=B(e),F=k(e,"BUTTON",{});var ae=E(F);Q=T(ae,"next year"),ae.forEach(c),x=B(e),I=k(e,"HEADER",{class:!0});var re=E(I);A=k(re,"H4",{class:!0});var Z=E(A);D=T(Z,a[2]),U=B(Z),Y=T(Z,a[1]),Z.forEach(c),re.forEach(c),j=B(e),p=k(e,"DIV",{class:!0});var $=E(p);for(let K=0;K<u.length;K+=1)u[K].l($);w=B($);for(let K=0;K<_.length;K+=1)_[K].l($);$.forEach(c),this.h()},h(){L(A,"class","svelte-xpirqo"),L(I,"class","svelte-xpirqo"),L(p,"class","month svelte-xpirqo")},m(e,f){h(e,s,f),b(s,n),h(e,l,f),h(e,t,f),b(t,o),b(t,i),b(t,O),h(e,R,f),h(e,M,f),b(M,V),h(e,S,f),h(e,g,f),b(g,d),h(e,J,f),h(e,y,f),b(y,W),h(e,C,f),h(e,F,f),b(F,Q),h(e,x,f),h(e,I,f),b(I,A),b(A,D),b(A,U),b(A,Y),h(e,j,f),h(e,p,f);for(let r=0;r<u.length;r+=1)u[r].m(p,null);b(p,w);for(let r=0;r<_.length;r+=1)_[r].m(p,null);z||(X=[te(M,"click",a[6]),te(g,"click",a[7]),te(y,"click",a[11]),te(F,"click",a[12])],z=!0)},p(e,[f]){if(f&1&&G(o,e[0]),f&4&&G(D,e[2]),f&2&&G(Y,e[1]),f&32){m=e[5];let r;for(r=0;r<m.length;r+=1){const H=fe(e,m,r);u[r]?u[r].p(H,f):(u[r]=_e(H),u[r].c(),u[r].m(p,w))}for(;r<u.length;r+=1)u[r].d(1);u.length=m.length}if(f&8){q=e[3];let r;for(r=0;r<q.length;r+=1){const H=ie(e,q,r);_[r]?_[r].p(H,f):(_[r]=he(H),_[r].c(),_[r].m(p,null))}for(;r<_.length;r+=1)_[r].d(1);_.length=q.length}},i:le,o:le,d(e){e&&c(s),e&&c(l),e&&c(t),e&&c(R),e&&c(M),e&&c(S),e&&c(g),e&&c(J),e&&c(y),e&&c(C),e&&c(F),e&&c(x),e&&c(I),e&&c(j),e&&c(p),se(u,e),se(_,e),z=!1,be(X)}}}function De(a,s){return new Date(s,a,1).getDay()}function we(a,s){console.log(a+" "+s),a==11?a=0:a+=1,console.log(a+" "+s);let n=new Date(s,a,0);return console.log(n),n}function Ne(a,s,n){const l=new Map;l.set(0,"January"),l.set(1,"February"),l.set(2,"March"),l.set(3,"April"),l.set(4,"May"),l.set(5,"June"),l.set(6,"July"),l.set(7,"August"),l.set(8,"September"),l.set(9,"October"),l.set(10,"November"),l.set(11,"December");const t=new Map;t.set(0,"Sunday"),t.set(1,"Monday"),t.set(2,"Tuesday"),t.set(3,"Wednesday"),t.set(4,"Thursday"),t.set(5,"Friday"),t.set(6,"Saturday");let o=[...t.values()],i,O,R,M,V,S,g=0,d=0,J=0,y=0,W="",C=[];i=new Date,S=new Date,g=S.getDay(),S.getDate(),d=S.getMonth(),y=S.getFullYear();function F(D,U,Y,j){let p=[],w=[],z=!1,X=!1,m=0,u=!0,q=1,_=1,e=new Date(j,Y,0).getDate();console.log(e),D!=0?(q=e-D+1,console.log(q+" "+e+" "+D),u=!1):(e=U,m=1),M==Y&&V==j&&(X=!0),_=q;let f=0;for(;_<=e+1;){if(_>e){if(m===2){w[0]&&(p=[...p,w]);break}if(_=1,m===0)e=U,console.log(e),m=1;else if(m===1){if(e=Math.ceil((D+U)/7)*7%(D+U),m=2,e===0){p=[...p,w];break}console.log(e),console.log(m)}u==!1?u=!0:u=!1}X==!1&&u==!0&&R==_&&(z=!0,console.log("hi")),w=[...w,{id:_,content:"note",enable:u,isToday:z,day:f}],_+=1,f+=1,f>6&&(f=0,p=[...p,w],w=[])}return console.log(p),p}me(()=>{const D=setInterval(()=>{n(0,i=new Date)},1e3);return()=>{clearInterval(D)}});function Q(){d!=0?n(9,d-=1):(n(9,d=11),n(1,y-=1))}function x(){d!=11?n(9,d+=1):(n(9,d=0),n(1,y+=1))}const I=()=>{n(1,y-=1)},A=()=>{n(1,y+=1)};return a.$$.update=()=>{a.$$.dirty&1&&n(4,O=i.getDay()),a.$$.dirty&1&&(R=i.getDate()),a.$$.dirty&1&&(M=i.getMonth()),a.$$.dirty&1&&(V=i.getFullYear()),a.$$.dirty&512&&n(9,d),a.$$.dirty&514&&n(10,J=we(d,y).getDate()),a.$$.dirty&514&&n(8,g=De(d,y)),a.$$.dirty&256&&t.get(g),a.$$.dirty&512&&n(2,W=l.get(d)),a.$$.dirty&1794&&n(3,C=F(g,J,d,y))},[i,y,W,C,O,o,Q,x,g,d,J,I,A]}class Me extends pe{constructor(s){super();de(this,s,Ne,Ee,ye,{})}}export{Me as default};