import{S as se,i as re,s as oe,l as ce,f as J,I as fe,d as m,J as Ne,e as w,t as B,c as T,a as C,g as L,b as N,H as _,K,h as Q,x as j,j as de,m as _e,o as he,p as Ke,q as Qe,u as X,v as pe,r as ge,w as me,L as ve,k as R,n as q,M as Xe,A as Se,B as ze,N as Ge,O as ye,P as Ze,Q as Ve,R as ie,T as Ae,U as Oe,V as Pe,W as Be,X as Le}from"../chunks/vendor-dec0b726.js";function xe(l){let t,e,s,a;return{c(){t=w("span"),e=B(l[0]),this.h()},l(n){t=T(n,"SPAN",{class:!0});var r=C(t);e=L(r,l[0]),r.forEach(m),this.h()},h(){N(t,"class","date other svelte-1uvtb1b")},m(n,r){J(n,t,r),_(t,e),s||(a=K(t,"click",l[4]),s=!0)},p(n,r){r&1&&Q(e,n[0])},d(n){n&&m(t),s=!1,a()}}}function $e(l){let t,e,s,a;return{c(){t=w("span"),e=B(l[0]),this.h()},l(n){t=T(n,"SPAN",{class:!0});var r=C(t);e=L(r,l[0]),r.forEach(m),this.h()},h(){N(t,"class","date svelte-1uvtb1b")},m(n,r){J(n,t,r),_(t,e),s||(a=K(t,"click",l[3]),s=!0)},p(n,r){r&1&&Q(e,n[0])},d(n){n&&m(t),s=!1,a()}}}function et(l){let t,e,s,a;return{c(){t=w("span"),e=B(l[0]),this.h()},l(n){t=T(n,"SPAN",{class:!0});var r=C(t);e=L(r,l[0]),r.forEach(m),this.h()},h(){N(t,"class","date today svelte-1uvtb1b")},m(n,r){J(n,t,r),_(t,e),s||(a=K(t,"click",l[3]),s=!0)},p(n,r){r&1&&Q(e,n[0])},d(n){n&&m(t),s=!1,a()}}}function tt(l){let t;function e(n,r){return n[2]?et:n[1]?$e:xe}let s=e(l),a=s(l);return{c(){a.c(),t=ce()},l(n){a.l(n),t=ce()},m(n,r){a.m(n,r),J(n,t,r)},p(n,[r]){s===(s=e(n))&&a?a.p(n,r):(a.d(1),a=s(n),a&&(a.c(),a.m(t.parentNode,t)))},i:fe,o:fe,d(n){a.d(n),n&&m(t)}}}function lt(l,t,e){let{id:s,content:a,enable:n,isToday:r,day:u}=t;const i=Ne();function b(){i("dateClicked",{date:s,isToday:r,content:a,day:u})}function k(){let d=-1;s>15&&(d=1),i("changeMonth",{change:d,date:s,isToday:r,content:a,day:u})}return l.$$set=d=>{"id"in d&&e(0,s=d.id),"content"in d&&e(5,a=d.content),"enable"in d&&e(1,n=d.enable),"isToday"in d&&e(2,r=d.isToday),"day"in d&&e(6,u=d.day)},[s,n,r,b,k,a,u]}class nt extends se{constructor(t){super();re(this,t,lt,tt,oe,{id:0,content:5,enable:1,isToday:2,day:6})}}const S=new Map;S.set(0,"January");S.set(1,"February");S.set(2,"March");S.set(3,"April");S.set(4,"May");S.set(5,"June");S.set(6,"July");S.set(7,"August");S.set(8,"September");S.set(9,"October");S.set(10,"November");S.set(11,"December");const z=new Map;z.set(0,"Sun");z.set(1,"Mon");z.set(2,"Tue");z.set(3,"Wed");z.set(4,"Thu");z.set(5,"Fri");z.set(6,"Sat");function Ue(l,t,e){const s=l.slice();return s[23]=t[e],s}function Fe(l,t,e){const s=l.slice();return s[4]=t[e],s}function He(l,t,e){const s=l.slice();return s[28]=t[e],s}function Je(l){let t,e=l[28]+"",s;return{c(){t=w("span"),s=B(e),this.h()},l(a){t=T(a,"SPAN",{class:!0});var n=C(t);s=L(n,e),n.forEach(m),this.h()},h(){N(t,"class","label svelte-1tsaw8u")},m(a,n){J(a,t,n),_(t,s)},p:fe,d(a){a&&m(t)}}}function je(l){let t,e;const s=[l[4]];let a={};for(let n=0;n<s.length;n+=1)a=ze(a,s[n]);return t=new nt({props:a}),t.$on("dateClicked",l[12]),t.$on("changeMonth",l[7]),{c(){de(t.$$.fragment)},l(n){_e(t.$$.fragment,n)},m(n,r){he(t,n,r),e=!0},p(n,r){const u=r&8?Ke(s,[Qe(n[4])]):{};t.$set(u)},i(n){e||(j(t.$$.fragment,n),e=!0)},o(n){X(t.$$.fragment,n),e=!1},d(n){pe(t,n)}}}function Re(l){let t,e,s=l[23],a=[];for(let r=0;r<s.length;r+=1)a[r]=je(Fe(l,s,r));const n=r=>X(a[r],1,1,()=>{a[r]=null});return{c(){for(let r=0;r<a.length;r+=1)a[r].c();t=ce()},l(r){for(let u=0;u<a.length;u+=1)a[u].l(r);t=ce()},m(r,u){for(let i=0;i<a.length;i+=1)a[i].m(r,u);J(r,t,u),e=!0},p(r,u){if(u&136){s=r[23];let i;for(i=0;i<s.length;i+=1){const b=Fe(r,s,i);a[i]?(a[i].p(b,u),j(a[i],1)):(a[i]=je(b),a[i].c(),j(a[i],1),a[i].m(t.parentNode,t))}for(ge(),i=s.length;i<a.length;i+=1)n(i);me()}},i(r){if(!e){for(let u=0;u<s.length;u+=1)j(a[u]);e=!0}},o(r){a=a.filter(Boolean);for(let u=0;u<a.length;u+=1)X(a[u]);e=!1},d(r){ve(a,r),r&&m(t)}}}function at(l){let t,e,s,a,n,r,u,i,b,k,d=l[5],h=[];for(let o=0;o<d.length;o+=1)h[o]=Je(He(l,d,o));let v=l[3],f=[];for(let o=0;o<v.length;o+=1)f[o]=Re(Ue(l,v,o));const V=o=>X(f[o],1,1,()=>{f[o]=null});return{c(){t=w("div"),e=w("header"),s=w("h4"),a=B(l[2]),n=R(),r=B(l[0]),u=R(),i=w("div");for(let o=0;o<h.length;o+=1)h[o].c();b=R();for(let o=0;o<f.length;o+=1)f[o].c();this.h()},l(o){t=T(o,"DIV",{class:!0});var p=C(t);e=T(p,"HEADER",{class:!0});var c=C(e);s=T(c,"H4",{class:!0});var D=C(s);a=L(D,l[2]),n=q(D),r=L(D,l[0]),D.forEach(m),c.forEach(m),u=q(p),i=T(p,"DIV",{class:!0});var A=C(i);for(let I=0;I<h.length;I+=1)h[I].l(A);b=q(A);for(let I=0;I<f.length;I+=1)f[I].l(A);A.forEach(m),p.forEach(m),this.h()},h(){N(s,"class","svelte-1tsaw8u"),N(e,"class","svelte-1tsaw8u"),N(i,"class","month svelte-1tsaw8u"),N(t,"class",""+(Xe(l[6])+" svelte-1tsaw8u"))},m(o,p){J(o,t,p),_(t,e),_(e,s),_(s,a),_(s,n),_(s,r),_(t,u),_(t,i);for(let c=0;c<h.length;c+=1)h[c].m(i,null);_(i,b);for(let c=0;c<f.length;c+=1)f[c].m(i,null);l[13](i),k=!0},p(o,[p]){if((!k||p&4)&&Q(a,o[2]),(!k||p&1)&&Q(r,o[0]),p&32){d=o[5];let c;for(c=0;c<d.length;c+=1){const D=He(o,d,c);h[c]?h[c].p(D,p):(h[c]=Je(D),h[c].c(),h[c].m(i,b))}for(;c<h.length;c+=1)h[c].d(1);h.length=d.length}if(p&136){v=o[3];let c;for(c=0;c<v.length;c+=1){const D=Ue(o,v,c);f[c]?(f[c].p(D,p),j(f[c],1)):(f[c]=Re(D),f[c].c(),j(f[c],1),f[c].m(i,null))}for(ge(),c=v.length;c<f.length;c+=1)V(c);me()}},i(o){if(!k){for(let p=0;p<v.length;p+=1)j(f[p]);k=!0}},o(o){f=f.filter(Boolean);for(let p=0;p<f.length;p+=1)X(f[p]);k=!1},d(o){o&&m(t),ve(h,o),ve(f,o),l[13](null)}}}function st(l,t){return new Date(t,l,1).getDay()}function rt(l,t){console.log(l+" "+t),l==11?l=0:l+=1,console.log(l+" "+t);let e=new Date(t,l,0);return console.log(e),e}function ot(l,t,e){let s=[...z.values()],a,n,r,u,i,b,k,d=0,h=0,{calendar_month:v=0,calendar_year:f=0}=t,V="",o,p=[];n=new Date,k=new Date,d=k.getDay(),k.getDate(),v=k.getMonth(),f=k.getFullYear();function c(E,O,$,ee){let F=[],P=[],W=!1,G=!1,H=0,U=!0,Z=1,Y=1,y=new Date(ee,$,0).getDate();console.log(y),E!=0?(Z=y-E+1,console.log(Z+" "+y+" "+E),U=!1):(y=O,H=1),i==$&&b==ee&&(G=!0),Y=Z;let te=0;for(;Y<=y+1;){if(Y>y){if(H===2){P[0]&&(F=[...F,P]);break}if(Y=1,H===0)y=O,console.log(y),H=1;else if(H===1){if(y=Math.ceil((E+O)/7)*7%(E+O),H=2,y===0){F=[...F,P];break}console.log(y),console.log(H)}U==!1?U=!0:U=!1}G==!0&&U==!0&&u==Y?(W=!0,console.log("hi")):W=!1,P=[...P,{id:Y,content:"note",enable:U,isToday:W,day:te}],Y+=1,te+=1,te>6&&(te=0,F=[...F,P],P=[])}return console.log(F),F}Se(()=>{e(3,p),e(10,d),e(11,h),e(8,v),e(0,f),a.scrollIntoView(!0);const E=setInterval(()=>{e(9,n=new Date)},1e3);return()=>{clearInterval(E)}});function D(){v!=0?e(8,v-=1):(e(8,v=11),e(0,f-=1))}function A(){v!=11?e(8,v+=1):(e(8,v=0),e(0,f+=1))}function I(E){console.log(E),E.detail.change>0?A():D()}function x(E){Ge.call(this,l,E)}function ae(E){ye[E?"unshift":"push"](()=>{a=E,e(1,a)})}return l.$$set=E=>{"calendar_month"in E&&e(8,v=E.calendar_month),"calendar_year"in E&&e(0,f=E.calendar_year)},l.$$.update=()=>{l.$$.dirty&512&&e(4,r=n.getDay()),l.$$.dirty&512&&(u=n.getDate()),l.$$.dirty&512&&(i=n.getMonth()),l.$$.dirty&512&&(b=n.getFullYear()),l.$$.dirty&256&&e(8,v),l.$$.dirty&257&&e(11,h=rt(v,f).getDate()),l.$$.dirty&257&&e(10,d=st(v,f)),l.$$.dirty&1024&&z.get(d),l.$$.dirty&256&&e(2,V=S.get(v)),l.$$.dirty&3329&&e(3,p=c(d,h,v,f))},[f,a,V,p,r,s,o,I,v,n,d,h,x,ae]}class ct extends se{constructor(t){super();re(this,t,ot,at,oe,{calendar_month:8,calendar_year:0})}}function it(l){const t=e=>{l.contains(e.target)||l.dispatchEvent(new CustomEvent("outclick"))};return document.addEventListener("click",t,!0),{destroy(){document.removeEventListener("click",t,!0)}}}function qe(l,{delay:t=0,duration:e=200,easing:s=n=>n,baseScale:a=0}){const n=+getComputedStyle(l).opacity,r=getComputedStyle(l).transform.match(/scale\(([0-9.]+)\)/),u=r?r[1]:1,i=1-a;return{delay:t,duration:e,css:b=>{const k=s(b);return console.log(k),`opacity: ${k*n};
                    transform: scale(${k*u*i+a})`}}}function ut(l){let t,e,s,a,n=l[0].date+"",r,u,i,b=l[0].content+"",k,d,h,v,f,V;return{c(){t=w("div"),e=w("div"),s=w("ul"),a=w("li"),r=B(n),u=R(),i=w("li"),k=B(b),this.h()},l(o){t=T(o,"DIV",{class:!0});var p=C(t);e=T(p,"DIV",{class:!0});var c=C(e);s=T(c,"UL",{});var D=C(s);a=T(D,"LI",{});var A=C(a);r=L(A,n),A.forEach(m),u=q(D),i=T(D,"LI",{});var I=C(i);k=L(I,b),I.forEach(m),D.forEach(m),c.forEach(m),p.forEach(m),this.h()},h(){N(e,"class","card svelte-mrpesk"),N(t,"class","container svelte-mrpesk")},m(o,p){J(o,t,p),_(t,e),_(e,s),_(s,a),_(a,r),_(s,u),_(s,i),_(i,k),v=!0,f||(V=[Ze(it.call(null,e)),K(e,"outclick",l[1])],f=!0)},p(o,[p]){l=o,(!v||p&1)&&n!==(n=l[0].date+"")&&Q(r,n),(!v||p&1)&&b!==(b=l[0].content+"")&&Q(k,b)},i(o){v||(Ve(()=>{d||(d=ie(e,qe,{delay:50,duration:250,easing:Oe,baseScale:.5},!0)),d.run(1)}),Ve(()=>{h||(h=ie(t,Pe,{},!0)),h.run(1)}),v=!0)},o(o){d||(d=ie(e,qe,{delay:50,duration:250,easing:Oe,baseScale:.5},!1)),d.run(0),h||(h=ie(t,Pe,{},!1)),h.run(0),v=!1},d(o){o&&m(t),o&&d&&d.end(),o&&h&&h.end(),f=!1,Ae(V)}}}function ft(l,t,e){let{card:s}=t;const a=Ne();function n(){a("returnToMain",{action:!0})}return l.$$set=r=>{"card"in r&&e(0,s=r.card)},[s,n]}class dt extends se{constructor(t){super();re(this,t,ft,ut,oe,{card:0})}}function We(l){let t,e;return t=new dt({props:{card:l[2]}}),t.$on("returnToMain",l[8]),{c(){de(t.$$.fragment)},l(s){_e(t.$$.fragment,s)},m(s,a){he(t,s,a),e=!0},p(s,a){const n={};a&4&&(n.card=s[2]),t.$set(n)},i(s){e||(j(t.$$.fragment,s),e=!0)},o(s){X(t.$$.fragment,s),e=!1},d(s){pe(t,s)}}}function _t(l){let t,e,s,a,n,r,u,i,b,k,d,h,v,f,V,o,p,c,D,A,I=S.get(l[0]==0?11:l[0]-1)+"",x,ae,E,O,$,ee,F,P,W,G=S.get(l[0]==11?0:l[0]+1)+"",H,U,Z,Y,y=l[2].date!=l[4].date&&We(l);function te(g){l[11](g)}function Ye(g){l[12](g)}let ue={class:"landing"};return l[0]!==void 0&&(ue.calendar_month=l[0]),l[1]!==void 0&&(ue.calendar_year=l[1]),O=new ct({props:ue}),ye.push(()=>Be(O,"calendar_month",te)),ye.push(()=>Be(O,"calendar_year",Ye)),O.$on("dateClicked",l[7]),{c(){y&&y.c(),t=R(),e=w("div"),s=w("p"),a=B(l[3]),n=R(),r=w("button"),u=B("previous month"),i=R(),b=w("button"),k=B("next month"),d=R(),h=w("button"),v=B("previous year"),f=R(),V=w("button"),o=B("next year"),p=R(),c=w("div"),D=w("div"),A=w("span"),x=B(I),ae=R(),E=w("div"),de(O.$$.fragment),F=R(),P=w("div"),W=w("span"),H=B(G),this.h()},l(g){y&&y.l(g),t=q(g),e=T(g,"DIV",{class:!0});var M=C(e);s=T(M,"P",{});var le=C(s);a=L(le,l[3]),le.forEach(m),n=q(M),r=T(M,"BUTTON",{});var be=C(r);u=L(be,"previous month"),be.forEach(m),i=q(M),b=T(M,"BUTTON",{});var ke=C(b);k=L(ke,"next month"),ke.forEach(m),d=q(M),h=T(M,"BUTTON",{});var Ee=C(h);v=L(Ee,"previous year"),Ee.forEach(m),f=q(M),V=T(M,"BUTTON",{});var De=C(V);o=L(De,"next year"),De.forEach(m),M.forEach(m),p=q(g),c=T(g,"DIV",{class:!0});var ne=C(c);D=T(ne,"DIV",{class:!0});var we=C(D);A=T(we,"SPAN",{class:!0});var Te=C(A);x=L(Te,I),Te.forEach(m),we.forEach(m),ae=q(ne),E=T(ne,"DIV",{class:!0});var Ce=C(E);_e(O.$$.fragment,Ce),Ce.forEach(m),F=q(ne),P=T(ne,"DIV",{class:!0});var Me=C(P);W=T(Me,"SPAN",{class:!0});var Ie=C(W);H=L(Ie,G),Ie.forEach(m),Me.forEach(m),ne.forEach(m),this.h()},h(){N(e,"class","header svelte-10x69u8"),N(A,"class","verticalText svelte-10x69u8"),N(D,"class","sideContainer svelte-10x69u8"),N(E,"class","container svelte-10x69u8"),N(W,"class","verticalText svelte-10x69u8"),N(P,"class","sideContainer svelte-10x69u8"),N(c,"class","swipeContainer svelte-10x69u8")},m(g,M){y&&y.m(g,M),J(g,t,M),J(g,e,M),_(e,s),_(s,a),_(e,n),_(e,r),_(r,u),_(e,i),_(e,b),_(b,k),_(e,d),_(e,h),_(h,v),_(e,f),_(e,V),_(V,o),J(g,p,M),J(g,c,M),_(c,D),_(D,A),_(A,x),_(c,ae),_(c,E),he(O,E,null),_(c,F),_(c,P),_(P,W),_(W,H),U=!0,Z||(Y=[K(r,"click",l[5]),K(b,"click",l[6]),K(h,"click",l[9]),K(V,"click",l[10]),K(D,"click",l[5]),K(P,"click",l[6])],Z=!0)},p(g,[M]){g[2].date!=g[4].date?y?(y.p(g,M),M&4&&j(y,1)):(y=We(g),y.c(),j(y,1),y.m(t.parentNode,t)):y&&(ge(),X(y,1,1,()=>{y=null}),me()),(!U||M&8)&&Q(a,g[3]),(!U||M&1)&&I!==(I=S.get(g[0]==0?11:g[0]-1)+"")&&Q(x,I);const le={};!$&&M&1&&($=!0,le.calendar_month=g[0],Le(()=>$=!1)),!ee&&M&2&&(ee=!0,le.calendar_year=g[1],Le(()=>ee=!1)),O.$set(le),(!U||M&1)&&G!==(G=S.get(g[0]==11?0:g[0]+1)+"")&&Q(H,G)},i(g){U||(j(y),j(O.$$.fragment,g),U=!0)},o(g){X(y),X(O.$$.fragment,g),U=!1},d(g){y&&y.d(g),g&&m(t),g&&m(e),g&&m(p),g&&m(c),pe(O),Z=!1,Ae(Y)}}}function ht(l,t,e){var s=new Date;let a,n;const r={date:-1};let u=r;Se(()=>{const o=setInterval(()=>{e(3,s=new Date)},1e3);return()=>{clearInterval(o)}});function i(){a!=0?e(0,a-=1):(e(0,a=11),e(1,n-=1))}function b(){a!=11?e(0,a+=1):(e(0,a=0),e(1,n+=1))}function k(o){e(2,u=o.detail),console.log(u)}function d(o){o.detail.action==!0&&e(2,u=r),console.log(o.detail)}const h=()=>{e(1,n-=1)},v=()=>{e(1,n+=1)};function f(o){a=o,e(0,a)}function V(o){n=o,e(1,n)}return l.$$.update=()=>{l.$$.dirty&1&&e(0,a),l.$$.dirty&2&&e(1,n),l.$$.dirty&4&&e(2,u)},[a,n,u,s,r,i,b,k,d,h,v,f,V]}class gt extends se{constructor(t){super();re(this,t,ht,_t,oe,{})}}export{gt as default};
