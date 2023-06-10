(function(y){typeof define=="function"&&define.amd?define(y):y()})(function(){"use strict";function y(){}const bt=t=>t;function xe(t){return t()}function ze(){return Object.create(null)}function L(t){t.forEach(xe)}function pe(t){return typeof t=="function"}function P(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let he;function me(t,e){return he||(he=document.createElement("a")),he.href=e,t===he.href}function vt(t){return Object.keys(t).length===0}function yt(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Le(t,e,n){t.$$.on_destroy.push(yt(e,n))}function $t(t,e,n){return t.set(n),e}const De=typeof window<"u";let wt=De?()=>window.performance.now():()=>Date.now(),Ce=De?t=>requestAnimationFrame(t):y;const B=new Set;function Te(t){B.forEach(e=>{e.c(t)||(B.delete(e),e.f())}),B.size!==0&&Ce(Te)}function kt(t){let e;return B.size===0&&Ce(Te),{promise:new Promise(n=>{B.add(e={c:t,f:n})}),abort(){B.delete(e)}}}"WeakMap"in(typeof window<"u"?window:typeof globalThis<"u"?globalThis:global);function u(t,e){t.appendChild(e)}function Ie(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function xt(t){const e=p("style");return Ct(Ie(t),e),e.sheet}function Ct(t,e){return u(t.head||t,e),e.sheet}function k(t,e,n){t.insertBefore(e,n||null)}function x(t){t.parentNode&&t.parentNode.removeChild(t)}function Ee(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function I(t){return document.createTextNode(t)}function $(){return I(" ")}function Et(){return I("")}function D(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ft(t){return Array.from(t.childNodes)}function _e(t,e){e=""+e,t.data!==e&&(t.data=e)}function We(t,e){t.value=e??""}function J(t,e,n){for(let r=0;r<t.options.length;r+=1){const i=t.options[r];if(i.__value===e){i.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Fe(t){const e=t.querySelector(":checked");return e&&e.__value}function St(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,r,e),i}function te(t){const e={};for(const n of t)e[n.name]=n.value;return e}const ge=new Map;let be=0;function Nt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Rt(t,e){const n={stylesheet:xt(e),rules:{}};return ge.set(t,n),n}function He(t,e,n,r,i,a,o,l=0){const c=16.666/r;let s=`{
`;for(let v=0;v<=1;v+=c){const w=e+(n-e)*a(v);s+=v*100+`%{${o(w,1-w)}}
`}const d=s+`100% {${o(n,1-n)}}
}`,f=`__svelte_${Nt(d)}_${l}`,h=Ie(t),{stylesheet:_,rules:g}=ge.get(h)||Rt(h,t);g[f]||(g[f]=!0,_.insertRule(`@keyframes ${f} ${d}`,_.cssRules.length));const b=t.style.animation||"";return t.style.animation=`${b?`${b}, `:""}${f} ${r}ms linear ${i}ms 1 both`,be+=1,f}function At(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),be-=i,be||Mt())}function Mt(){Ce(()=>{be||(ge.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&x(e)}),ge.clear())})}let ne;function re(t){ne=t}function Se(){if(!ne)throw new Error("Function called outside component initialization");return ne}function Pe(t){Se().$$.on_mount.push(t)}function Ot(t,e){return Se().$$.context.set(t,e),e}function jt(t){return Se().$$.context.get(t)}const K=[],Be=[];let U=[];const Je=[],qt=Promise.resolve();let Ne=!1;function zt(){Ne||(Ne=!0,qt.then(W))}function T(t){U.push(t)}const Re=new Set;let V=0;function W(){if(V!==0)return;const t=ne;do{try{for(;V<K.length;){const e=K[V];V++,re(e),Lt(e.$$)}}catch(e){throw K.length=0,V=0,e}for(re(null),K.length=0,V=0;Be.length;)Be.pop()();for(let e=0;e<U.length;e+=1){const n=U[e];Re.has(n)||(Re.add(n),n())}U.length=0}while(K.length);for(;Je.length;)Je.pop()();Ne=!1,Re.clear(),re(t)}function Lt(t){if(t.fragment!==null){t.update(),L(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}function Dt(t){const e=[],n=[];U.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),U=e}let le;function Tt(){return le||(le=Promise.resolve(),le.then(()=>{le=null})),le}function Ae(t,e,n){t.dispatchEvent(St(`${e?"intro":"outro"}${n}`))}const ve=new Set;let q;function ye(){q={r:0,c:[],p:q}}function $e(){q.r||L(q.c),q=q.p}function S(t,e){t&&t.i&&(ve.delete(t),t.i(e))}function O(t,e,n,r){if(t&&t.o){if(ve.has(t))return;ve.add(t),q.c.push(()=>{ve.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const It={duration:0};function Ke(t,e,n,r){const i={direction:"both"};let a=e(t,n,i),o=r?0:1,l=null,c=null,s=null;function d(){s&&At(t,s)}function f(_,g){const b=_.b-o;return g*=Math.abs(b),{a:o,b:_.b,d:b,duration:g,start:_.start,end:_.start+g,group:_.group}}function h(_){const{delay:g=0,duration:b=300,easing:v=bt,tick:w=y,css:j}=a||It,C={start:wt()+g,b:_};_||(C.group=q,q.r+=1),l||c?c=C:(j&&(d(),s=He(t,o,_,b,g,v,j)),_&&w(0,1),l=f(C,b),T(()=>Ae(t,_,"start")),kt(A=>{if(c&&A>c.start&&(l=f(c,b),c=null,Ae(t,l.b,"start"),j&&(d(),s=He(t,o,l.b,l.duration,0,v,a.css))),l){if(A>=l.end)w(o=l.b,1-o),Ae(t,l.b,"end"),c||(l.b?d():--l.group.r||L(l.group.c)),l=null;else if(A>=l.start){const E=A-l.start;o=l.a+l.d*v(E/l.duration),w(o,1-o)}}return!!(l||c)}))}return{run(_){pe(a)?Tt().then(()=>{a=a(i),h(_)}):h(_)},end(){d(),l=c=null}}}[...["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]];function we(t){t&&t.c()}function oe(t,e,n,r){const{fragment:i,after_update:a}=t.$$;i&&i.m(e,n),r||T(()=>{const o=t.$$.on_mount.map(xe).filter(pe);t.$$.on_destroy?t.$$.on_destroy.push(...o):L(o),t.$$.on_mount=[]}),a.forEach(T)}function ie(t,e){const n=t.$$;n.fragment!==null&&(Dt(n.after_update),L(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Wt(t,e){t.$$.dirty[0]===-1&&(K.push(t),zt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function se(t,e,n,r,i,a,o,l=[-1]){const c=ne;re(t);const s=t.$$={fragment:null,ctx:[],props:a,update:y,not_equal:i,bound:ze(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ze(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};o&&o(s.root);let d=!1;if(s.ctx=n?n(t,e.props||{},(f,h,..._)=>{const g=_.length?_[0]:h;return s.ctx&&i(s.ctx[f],s.ctx[f]=g)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](g),d&&Wt(t,f)),h}):[],s.update(),d=!0,L(s.before_update),s.fragment=r?r(s.ctx):!1,e.target){if(e.hydrate){const f=Ft(e.target);s.fragment&&s.fragment.l(f),f.forEach(x)}else s.fragment&&s.fragment.c();e.intro&&S(t.$$.fragment),oe(t,e.target,e.anchor,e.customElement),W()}re(c)}let G;typeof HTMLElement=="function"&&(G=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(xe).filter(pe);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){L(this.$$.on_disconnect)}$destroy(){ie(this,1),this.$destroy=y}$on(t,e){if(!pe(e))return y;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}$set(t){this.$$set&&!vt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});const Q=[];function Ue(t,e=y){let n;const r=new Set;function i(l){if(P(t,l)&&(t=l,n)){const c=!Q.length;for(const s of r)s[1](),Q.push(s,t);if(c){for(let s=0;s<Q.length;s+=2)Q[s][0](Q[s+1]);Q.length=0}}}function a(l){i(l(t))}function o(l,c=y){const s=[l,c];return r.add(s),r.size===1&&(n=e(i)||y),l(t),()=>{r.delete(s),r.size===0&&n&&(n(),n=null)}}return{set:i,update:a,subscribe:o}}const ce=Ue([]);function Ht(t){let e,n;return{c(){e=p("div"),n=I(t[0]),this.c=y,m(e,"class","alert alert-danger"),m(e,"role","alert")},m(r,i){k(r,e,i),u(e,n)},p(r,[i]){i&1&&_e(n,r[0])},i:y,o:y,d(r){r&&x(e)}}}function Pt(t,e,n){let{message:r=""}=e;return t.$$set=i=>{"message"in i&&n(0,r=i.message)},[r]}class Ve extends G{constructor(e){super(),se(this,{target:this.shadowRoot,props:te(this.attributes),customElement:!0},Pt,Ht,P,{message:0},null),e&&(e.target&&k(e.target,this,e.anchor),e.props&&(this.$set(e.props),W()))}static get observedAttributes(){return["message"]}get message(){return this.$$.ctx[0]}set message(e){this.$$set({message:e}),W()}}customElements.define("alert-component",Ve);function Ge(t,e,n){const r=t.slice();return r[18]=e[n],r}function Qe(t){let e,n;return e=new Ve({props:{message:"File/Folder with this name already exists."}}),{c(){we(e.$$.fragment)},m(r,i){oe(e,r,i),n=!0},i(r){n||(S(e.$$.fragment,r),n=!0)},o(r){O(e.$$.fragment,r),n=!1},d(r){ie(e,r)}}}function Xe(t){let e,n,r,i,a,o,l=t[6],c=[];for(let s=0;s<l.length;s+=1)c[s]=Ye(Ge(t,l,s));return{c(){e=p("div"),n=p("select");for(let s=0;s<c.length;s+=1)c[s].c();r=$(),i=p("label"),i.textContent="Folder",m(n,"class","form-select"),m(n,"id","folder"),n.disabled=t[5],t[4]===void 0&&T(()=>t[13].call(n)),m(i,"for","folder"),m(e,"class","form-floating mb-3")},m(s,d){k(s,e,d),u(e,n);for(let f=0;f<c.length;f+=1)c[f]&&c[f].m(n,null);J(n,t[4],!0),u(e,r),u(e,i),a||(o=D(n,"change",t[13]),a=!0)},p(s,d){if(d&64){l=s[6];let f;for(f=0;f<l.length;f+=1){const h=Ge(s,l,f);c[f]?c[f].p(h,d):(c[f]=Ye(h),c[f].c(),c[f].m(n,null))}for(;f<c.length;f+=1)c[f].d(1);c.length=l.length}d&32&&(n.disabled=s[5]),d&80&&J(n,s[4])},d(s){s&&x(e),Ee(c,s),a=!1,o()}}}function Ye(t){let e,n=t[18].name+"",r,i;return{c(){e=p("option"),r=I(n),e.__value=i=t[18].name,e.value=e.__value},m(a,o){k(a,e,o),u(e,r)},p(a,o){o&64&&n!==(n=a[18].name+"")&&_e(r,n),o&64&&i!==(i=a[18].name)&&(e.__value=i,e.value=e.__value)},d(a){a&&x(e)}}}function Bt(t){let e,n,r,i,a,o,l,c,s,d,f,h,_,g,b,v,w,j,C,A,E,M,ae,X,Y,Z,Me,ue,dt,fe,de,pt,H,ht,ke,mt,Oe,_t,je,ee,qe,gt,F=t[3]&&Qe(),R=t[2]==="child"&&Xe(t);return{c(){e=p("div"),n=p("div"),r=p("div"),r.innerHTML="<h3>Create Files or Folders</h3>",i=$(),F&&F.c(),a=$(),o=p("div"),l=p("input"),c=$(),s=p("label"),s.textContent="Name",d=$(),f=p("div"),h=p("select"),_=p("option"),_.textContent="File",g=p("option"),g.textContent="Folder",b=$(),v=p("label"),v.textContent="Type",w=$(),j=p("div"),C=p("select"),A=p("option"),A.textContent="Root",E=p("option"),E.textContent="Child",M=$(),ae=p("label"),ae.textContent="Select Level",X=$(),R&&R.c(),Y=$(),Z=p("div"),Me=p("div"),ue=p("button"),ue.textContent="Reset",dt=$(),fe=p("div"),de=p("button"),de.textContent="Cancel",pt=$(),H=p("button"),ht=I("Save"),mt=$(),Oe=p("div"),_t=$(),je=p("style"),je.textContent=`.left-tab {
      padding-right: 1.5rem !important;
    }
    .form-container {
      width: 80%;
    }

    .form-heading {
      margin-bottom: 40px;
    }

    .form-heading h3 {
      color: #47d7ac;
    }

    .action-btns {
      margin-top: 40px;
    }

    .action-btns .btn {
      border-radius: 20px;
      padding: 12px 24px;
      font-size: 14px;
      line-height: 16px;
      min-width: 100px;
    }

    .action-btns .btn-primary {
      background-color: #13294b;
      border-color: #13294b;
    }

    .action-btns .btn-outline-primary {
      border-color: #13294b;
      color: #13294b;
    }

    .action-btns .btn-primary.disabled,
    .action-btns .btn-primary:disabled {
      background-color: #13294b;
    }

    @media only screen and (max-width: 1050px) {
      .form-container {
        width: 100%;
      }
    }

    @media only screen and (max-width: 768px) {
      .form-container {
        margin-bottom: 20px;
      }

      .left-tab {
        padding-right: 0;
      }
    }`,this.c=y,m(r,"class","form-heading"),m(l,"type","text"),m(l,"class","form-control"),m(l,"id","name"),m(l,"placeholder","Enter file or Folder name"),m(s,"for","name"),m(o,"class","form-floating mb-3"),_.__value="file",_.value=_.__value,g.__value="folder",g.value=g.__value,m(h,"class","form-select"),m(h,"id","type"),t[1]===void 0&&T(()=>t[11].call(h)),m(v,"for","type"),m(f,"class","form-floating mb-3"),A.__value="root",A.value=A.__value,E.__value="child",E.value=E.__value,m(C,"class","form-select"),m(C,"id","level"),C.disabled=t[5],t[2]===void 0&&T(()=>t[12].call(C)),m(ae,"for","level"),m(j,"class","form-floating mb-3"),m(ue,"class","btn btn-outline-primary ms-1"),m(de,"class","btn btn-outline-primary me-1"),H.disabled=ke=!t[0],m(H,"class","btn btn-primary ms-1"),m(Z,"class","d-flex justify-content-between action-btns"),m(Oe,"class","d-flex justify-content-center mt-1"),m(n,"class","form-container"),m(e,"class","col-md-7 left-tab")},m(N,z){k(N,e,z),u(e,n),u(n,r),u(n,i),F&&F.m(n,null),u(n,a),u(n,o),u(o,l),We(l,t[0]),u(o,c),u(o,s),u(n,d),u(n,f),u(f,h),u(h,_),u(h,g),J(h,t[1],!0),u(f,b),u(f,v),u(n,w),u(n,j),u(j,C),u(C,A),u(C,E),J(C,t[2],!0),u(j,M),u(j,ae),u(n,X),R&&R.m(n,null),u(n,Y),u(n,Z),u(Z,Me),u(Me,ue),u(Z,dt),u(Z,fe),u(fe,de),u(fe,pt),u(fe,H),u(H,ht),u(n,mt),u(n,Oe),u(e,_t),u(e,je),ee=!0,qe||(gt=[D(l,"input",t[10]),D(h,"change",t[11]),D(C,"change",t[12]),D(ue,"click",t[9]),D(de,"click",t[8]),D(H,"click",t[7])],qe=!0)},p(N,[z]){N[3]?F?z&8&&S(F,1):(F=Qe(),F.c(),S(F,1),F.m(n,a)):F&&(ye(),O(F,1,1,()=>{F=null}),$e()),z&1&&l.value!==N[0]&&We(l,N[0]),z&2&&J(h,N[1]),(!ee||z&32)&&(C.disabled=N[5]),z&4&&J(C,N[2]),N[2]==="child"?R?R.p(N,z):(R=Xe(N),R.c(),R.m(n,Y)):R&&(R.d(1),R=null),(!ee||z&1&&ke!==(ke=!N[0]))&&(H.disabled=ke)},i(N){ee||(S(F),ee=!0)},o(N){O(F),ee=!1},d(N){N&&x(e),F&&F.d(),R&&R.d(),qe=!1,L(gt)}}}function Jt(t,e,n){let r="",i="file",a="root",o=!1,l="",c=[],s=!0,d=[];function f(){const E=c.filter(M=>M.type==="folder").length;n(5,s=E===0)}function h(E){return E.some(M=>M.name===r)}function _(){const E={name:r,type:i,children:[]},M=l?c.find(({name:X})=>X===l):null;if(h(M?M.children:c))return n(3,o=!0),!1;n(3,o=!1),M?M.children.push(E):c.push(E),ce.update(X=>{const Y=[...X];return localStorage.setItem("store",JSON.stringify(Y)),Y}),f(),b()}const g=()=>{n(3,o=!1),b()},b=()=>{n(0,r=""),n(1,i="file"),n(2,a="root"),n(4,l="")},v=()=>{localStorage.removeItem("store"),ce.set([])};Pe(()=>{ce.subscribe(E=>{c=E,n(6,d=c.filter(M=>M.type==="folder")),f()})});function w(){r=this.value,n(0,r)}function j(){i=Fe(this),n(1,i)}function C(){a=Fe(this),n(2,a)}function A(){l=Fe(this),n(4,l),n(6,d)}return[r,i,a,o,l,s,d,_,g,v,w,j,C,A]}class Ze extends G{constructor(e){super(),se(this,{target:this.shadowRoot,props:te(this.attributes),customElement:!0},Jt,Bt,P,{},null),e&&e.target&&k(e.target,this,e.anchor)}}customElements.define("form-component",Ze);function Kt(t){const e=t-1;return e*e*e+1}function et(t){return t/=.5,t<1?.5*t*t:(t--,-.5*(t*(t-2)-1))}function tt(t,{delay:e=0,duration:n=400,easing:r=Kt,axis:i="y"}={}){const a=getComputedStyle(t),o=+a.opacity,l=i==="y"?"height":"width",c=parseFloat(a[l]),s=i==="y"?["top","bottom"]:["left","right"],d=s.map(w=>`${w[0].toUpperCase()}${w.slice(1)}`),f=parseFloat(a[`padding${d[0]}`]),h=parseFloat(a[`padding${d[1]}`]),_=parseFloat(a[`margin${d[0]}`]),g=parseFloat(a[`margin${d[1]}`]),b=parseFloat(a[`border${d[0]}Width`]),v=parseFloat(a[`border${d[1]}Width`]);return{delay:e,duration:n,easing:r,css:w=>`overflow: hidden;opacity: ${Math.min(w*20,1)*o};${l}: ${w*c}px;padding-${s[0]}: ${w*f}px;padding-${s[1]}: ${w*h}px;margin-${s[0]}: ${w*_}px;margin-${s[1]}: ${w*g}px;border-${s[0]}-width: ${w*b}px;border-${s[1]}-width: ${w*v}px;`}}function nt(t,e,n){const r=t.slice();return r[7]=e[n],r}function rt(t){let e,n,r,i,a,o=t[1].name+"",l,c,s,d;function f(g,b){return g[1].type=="folder"?Vt:Ut}let h=f(t),_=h(t);return{c(){e=p("div"),n=p("div"),r=p("h3"),_.c(),i=$(),a=p("span"),l=I(o),m(n,"class",c="text "+(t[1].type=="folder"?t[2]:"")),m(e,"class","header")},m(g,b){k(g,e,b),u(e,n),u(n,r),_.m(r,null),u(r,i),u(r,a),u(a,l),s||(d=D(e,"click",t[4]),s=!0)},p(g,b){h!==(h=f(g))&&(_.d(1),_=h(g),_&&(_.c(),_.m(r,i))),b&2&&o!==(o=g[1].name+"")&&_e(l,o),b&6&&c!==(c="text "+(g[1].type=="folder"?g[2]:""))&&m(n,"class",c)},d(g){g&&x(e),_.d(),s=!1,d()}}}function Ut(t){let e,n;return{c(){e=p("img"),me(e.src,n="./assets/file.svg")||m(e,"src",n),m(e,"alt","file")},m(r,i){k(r,e,i)},d(r){r&&x(e)}}}function Vt(t){let e,n;return{c(){e=p("img"),me(e.src,n="./assets/folder.svg")||m(e,"src",n),m(e,"alt","folder")},m(r,i){k(r,e,i)},d(r){r&&x(e)}}}function lt(t){let e,n,r,i,a=t[1].children,o=[];for(let l=0;l<a.length;l+=1)o[l]=ot(nt(t,a,l));return{c(){e=p("div"),n=p("ul");for(let l=0;l<o.length;l+=1)o[l].c();m(e,"class","details")},m(l,c){k(l,e,c),u(e,n);for(let s=0;s<o.length;s+=1)o[s]&&o[s].m(n,null);i=!0},p(l,c){if(t=l,c&2){a=t[1].children;let s;for(s=0;s<a.length;s+=1){const d=nt(t,a,s);o[s]?o[s].p(d,c):(o[s]=ot(d),o[s].c(),o[s].m(n,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=a.length}},i(l){i||(T(()=>{i&&(r||(r=Ke(e,tt,{duration:150,easing:et},!0)),r.run(1))}),i=!0)},o(l){r||(r=Ke(e,tt,{duration:150,easing:et},!1)),r.run(0),i=!1},d(l){l&&x(e),Ee(o,l),l&&r&&r.end()}}}function Gt(t){let e,n;return{c(){e=p("img"),me(e.src,n="./assets/file.svg")||m(e,"src",n),m(e,"alt","file")},m(r,i){k(r,e,i)},d(r){r&&x(e)}}}function Qt(t){let e,n;return{c(){e=p("img"),me(e.src,n="./assets/folder.svg")||m(e,"src",n),m(e,"alt","folder")},m(r,i){k(r,e,i)},d(r){r&&x(e)}}}function ot(t){let e,n,r,i,a=t[7].name+"",o,l,c;function s(h,_){return h[7].type=="folder"?Qt:Gt}let d=s(t),f=d(t);return{c(){e=p("li"),n=p("div"),f.c(),r=$(),i=p("h3"),o=I(a),c=$(),m(n,"class",l="text "+(t[7].type=="folder"?"accordion-button collapsed":""))},m(h,_){k(h,e,_),u(e,n),f.m(n,null),u(n,r),u(n,i),u(i,o),u(e,c)},p(h,_){d!==(d=s(h))&&(f.d(1),f=d(h),f&&(f.c(),f.m(n,r))),_&2&&a!==(a=h[7].name+"")&&_e(o,a),_&2&&l!==(l="text "+(h[7].type=="folder"?"accordion-button collapsed":""))&&m(n,"class",l)},d(h){h&&x(e),f.d()}}}function Xt(t){let e,n,r,i,a,o=t[1]&&t[1].name&&rt(t),l=t[0]&&t[1].children&&t[1].children.length&&lt(t);return{c(){e=p("div"),o&&o.c(),n=$(),l&&l.c(),r=$(),i=p("style"),i.textContent=`div.header {\r
      display: flex;\r
      width: 100%;\r
      background-color: #47d7ac;\r
      border-radius: 4px;\r
      color: #fff;\r
      cursor: pointer;\r
    }\r
\r
    .result-container .accordion-button {\r
      background-color: #47d7ac;\r
      border-radius: 4px;\r
    }\r
\r
    .result-container .accordion-button:not(.collapsed) {\r
      background-color: #47d7ac;\r
      border-bottom-left-radius: 0;\r
      border-bottom-right-radius: 0;\r
    }\r
\r
    div.header .text {\r
      flex: 1;\r
      padding: 12px 20px;\r
      white-space: nowrap;\r
      overflow: hidden;\r
      text-overflow: ellipsis;\r
    }\r
\r
    div.header:hover h3 {\r
      color: #fff;\r
    }\r
\r
    div.details {\r
      background-color: #47d7ac;\r
      padding: 1rem;\r
    }\r
\r
    div.details ul {\r
      list-style-type: none;\r
    }\r
\r
    .accordion {\r
      margin-bottom: 5px;\r
    }\r
\r
    .accordion h3 {\r
      font-size: 16px;\r
      margin-bottom: 0;\r
      color: #13294b;\r
      display: flex;\r
      align-items: center;\r
      font-weight: 400;\r
    }\r
\r
    div.details .text.accordion-button {\r
      padding: 0;\r
    }\r
\r
    .accordion h3 img,\r
    div.details .text img {\r
      width: 24px;\r
      height: 24px;\r
      margin-right: 10px;\r
    }\r
\r
    div.details .text {\r
      text-align: left;\r
      cursor: pointer;\r
      display: flex;\r
      align-items: center;\r
    }\r
\r
    h4,\r
    h2 {\r
      cursor: pointer;\r
    }\r
\r
    .text span {\r
      white-space: nowrap;\r
      overflow: hidden;\r
      text-overflow: ellipsis;\r
    }`,this.c=y,m(e,"class","accordion")},m(c,s){k(c,e,s),o&&o.m(e,null),u(e,n),l&&l.m(e,null),u(e,r),u(e,i),a=!0},p(c,[s]){c[1]&&c[1].name?o?o.p(c,s):(o=rt(c),o.c(),o.m(e,n)):o&&(o.d(1),o=null),c[0]&&c[1].children&&c[1].children.length?l?(l.p(c,s),s&3&&S(l,1)):(l=lt(c),l.c(),S(l,1),l.m(e,r)):l&&(ye(),O(l,1,1,()=>{l=null}),$e())},i(c){a||(S(l),a=!0)},o(c){O(l),a=!1},d(c){c&&x(e),o&&o.d(),l&&l.d()}}}const it={},Yt=()=>jt(it),st=()=>{const e={current:Ue(null)};return Ot(it,e),e};function Zt(t,e,n){let r,i,{open:a=!1}=e,{folder:o}=e;const{current:l}=Yt();Le(t,l,d=>n(5,i=d));const c={};st();function s(){o.type!=="file"&&(n(0,a=!a),a&&$t(l,i=c,i))}return t.$$set=d=>{"open"in d&&n(0,a=d.open),"folder"in d&&n(1,o=d.folder)},t.$$.update=()=>{t.$$.dirty&32&&i!==c&&n(0,a=!1),t.$$.dirty&3&&n(2,r=a&&o.children&&o.children.length?"accordion-button":"accordion-button collapsed")},[a,o,r,l,s,i]}class ct extends G{constructor(e){super(),se(this,{target:this.shadowRoot,props:te(this.attributes),customElement:!0},Zt,Xt,P,{open:0,folder:1},null),e&&(e.target&&k(e.target,this,e.anchor),e.props&&(this.$set(e.props),W()))}static get observedAttributes(){return["open","folder"]}get open(){return this.$$.ctx[0]}set open(e){this.$$set({open:e}),W()}get folder(){return this.$$.ctx[1]}set folder(e){this.$$set({folder:e}),W()}}customElements.define("item-component",ct);function at(t,e,n){const r=t.slice();return r[1]=e[n],r}function en(t){let e;return{c(){e=p("div"),e.textContent="No files and folders are created!",m(e,"class","alert alert-light"),m(e,"role","alert")},m(n,r){k(n,e,r)},p:y,i:y,o:y,d(n){n&&x(e)}}}function tn(t){let e,n,r=t[0],i=[];for(let o=0;o<r.length;o+=1)i[o]=ut(at(t,r,o));const a=o=>O(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=Et()},m(o,l){for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(o,l);k(o,e,l),n=!0},p(o,l){if(l&1){r=o[0];let c;for(c=0;c<r.length;c+=1){const s=at(o,r,c);i[c]?(i[c].p(s,l),S(i[c],1)):(i[c]=ut(s),i[c].c(),S(i[c],1),i[c].m(e.parentNode,e))}for(ye(),c=r.length;c<i.length;c+=1)a(c);$e()}},i(o){if(!n){for(let l=0;l<r.length;l+=1)S(i[l]);n=!0}},o(o){i=i.filter(Boolean);for(let l=0;l<i.length;l+=1)O(i[l]);n=!1},d(o){Ee(i,o),o&&x(e)}}}function ut(t){let e,n;return e=new ct({props:{folder:t[1]}}),{c(){we(e.$$.fragment)},m(r,i){oe(e,r,i),n=!0},p(r,i){const a={};i&1&&(a.folder=r[1]),e.$set(a)},i(r){n||(S(e.$$.fragment,r),n=!0)},o(r){O(e.$$.fragment,r),n=!1},d(r){ie(e,r)}}}function nn(t){let e,n,r,i,a,o,l,c,s,d;const f=[tn,en],h=[];function _(g,b){var v;return(v=g[0])!=null&&v.length?0:1}return o=_(t),l=h[o]=f[o](t),{c(){e=p("div"),n=p("div"),r=p("h4"),r.textContent="File & Folder Structure",i=$(),a=p("div"),l.c(),c=$(),s=p("style"),s.textContent=`.right-tab {
      padding-left: 1.5rem;
    }
    .result-container {
      padding: 20px;
      background-color: #13294b;
      color: #fff;
      border-radius: 10px;
      max-height: 500px;
      display: flex;
      flex-direction: column;
    }
    .result-container h4 {
      font-weight: 300;
      margin-bottom: 20px;
    }
    .accordian-container {
      overflow: auto;
    }

    @media only screen and (max-width: 768px) {
      .ps-4 {
        padding-left: 0 !important;
      }
    }`,this.c=y,m(a,"class","accordian-container"),m(n,"class","result-container"),m(e,"class","col-md-5 right-tab")},m(g,b){k(g,e,b),u(e,n),u(n,r),u(n,i),u(n,a),h[o].m(a,null),u(e,c),u(e,s),d=!0},p(g,[b]){let v=o;o=_(g),o===v?h[o].p(g,b):(ye(),O(h[v],1,1,()=>{h[v]=null}),$e(),l=h[o],l?l.p(g,b):(l=h[o]=f[o](g),l.c()),S(l,1),l.m(a,null))},i(g){d||(S(l),d=!0)},o(g){O(l),d=!1},d(g){g&&x(e),h[o].d()}}}function rn(t,e,n){let r;return Le(t,ce,i=>n(0,r=i)),st(),[r]}class ft extends G{constructor(e){super(),se(this,{target:this.shadowRoot,props:te(this.attributes),customElement:!0},rn,nn,P,{},null),e&&e.target&&k(e.target,this,e.anchor)}}customElements.define("result-component",ft);function ln(t){let e,n,r,i,a,o,l,c;return r=new Ze({}),a=new ft({}),{c(){e=p("div"),n=p("div"),we(r.$$.fragment),i=$(),we(a.$$.fragment),o=$(),l=p("style"),l.textContent=`@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");

    body {
      background-color: #000;
    }

    .svelte-component-wrapper {
      font-family: "Roboto", sans-serif;
      background-color: #fff;
      border-radius: 10px;
      margin-top: 70px;
      padding: 30px 30px 30px 50px;
      box-shadow: 5px 5px 6px 2px rgba(0, 0, 0, 0.1);
      z-index: 10;
      min-width: 420px;
    }`,this.c=y,m(n,"class","row"),m(e,"class","container svelte-component-wrapper")},m(s,d){k(s,e,d),u(e,n),oe(r,n,null),u(n,i),oe(a,n,null),u(e,o),u(e,l),c=!0},p:y,i(s){c||(S(r.$$.fragment,s),S(a.$$.fragment,s),c=!0)},o(s){O(r.$$.fragment,s),O(a.$$.fragment,s),c=!1},d(s){s&&x(e),ie(r),ie(a)}}}function on(t){return Pe(()=>{const e=localStorage.getItem("store");if(e){const n=JSON.parse(e);ce.set(n)}}),[]}class sn extends G{constructor(e){super(),se(this,{target:this.shadowRoot,props:te(this.attributes),customElement:!0},on,ln,P,{},null),e&&e.target&&k(e.target,this,e.anchor)}}customElements.define("file-folder-component",sn)});
