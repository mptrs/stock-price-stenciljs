let e,t,n=!1;const l="undefined"!=typeof window?window:{},o=l.document||{head:{}},s={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},c=e=>Promise.resolve(e),i=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),r=(e,t,n)=>{n&&n.map((([n,l,o])=>{const c=u(e,n),i=a(t,o),r=f(n);s.ael(c,l,i,r),(t.o=t.o||[]).push((()=>s.rel(c,l,i,r)))}))},a=(e,t)=>n=>{try{256&e.t?e.i[t](n):(e.u=e.u||[]).push([t,n])}catch(e){Q(e)}},u=(e,t)=>16&t?o.body:e,f=e=>0!=(2&e),d=new WeakMap,p=e=>"sc-"+e.p,$={},y=e=>"object"==(e=typeof e)||"function"===e,m=(e,t,...n)=>{let l=null,o=!1,s=!1,c=[];const i=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof e&&!y(l))&&(l+=""),o&&s?c[c.length-1].$+=l:c.push(o?h(null,l):l),s=o)};if(i(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}const r=h(e,null);return r.m=t,c.length>0&&(r.h=c),r},h=(e,t)=>({t:0,S:e,$:t,g:null,h:null,m:null}),b={},w=(e,t,n,o,c,i)=>{if(n!==o){let r=K(e,t),a=t.toLowerCase();if("class"===t){const t=e.classList,l=g(n),s=g(o);t.remove(...l.filter((e=>e&&!s.includes(e)))),t.add(...s.filter((e=>e&&!l.includes(e))))}else if("ref"===t)o&&o(e);else if(r||"o"!==t[0]||"n"!==t[1]){const l=y(o);if((r||l&&null!==o)&&!c)try{if(e.tagName.includes("-"))e[t]=o;else{let l=null==o?"":o;"list"===t?r=!1:null!=n&&e[t]==l||(e[t]=l)}}catch(e){}null==o||!1===o?!1===o&&""!==e.getAttribute(t)||e.removeAttribute(t):(!r||4&i||c)&&!l&&e.setAttribute(t,o=!0===o?"":o)}else t="-"===t[2]?t.slice(3):K(l,a)?a.slice(2):a[2]+t.slice(3),n&&s.rel(e,t,n,!1),o&&s.ael(e,t,o,!1)}},S=/\s/,g=e=>e?e.split(S):[],j=(e,t,n,l)=>{const o=11===t.g.nodeType&&t.g.host?t.g.host:t.g,s=e&&e.m||$,c=t.m||$;for(l in s)l in c||w(o,l,s[l],void 0,n,t.t);for(l in c)w(o,l,s[l],c[l],n,t.t)},k=(t,n,l)=>{let s,c,i=n.h[l],r=0;if(null!==i.$)s=i.g=o.createTextNode(i.$);else if(s=i.g=o.createElement(i.S),j(null,i,!1),null!=e&&s["s-si"]!==e&&s.classList.add(s["s-si"]=e),i.h)for(r=0;r<i.h.length;++r)c=k(t,i,r),c&&s.appendChild(c);return s},v=(e,n,l,o,s,c)=>{let i,r=e;for(r.shadowRoot&&r.tagName===t&&(r=r.shadowRoot);s<=c;++s)o[s]&&(i=k(null,l,s),i&&(o[s].g=i,r.insertBefore(i,n)))},C=(e,t,n,l,o)=>{for(;t<=n;++t)(l=e[t])&&(o=l.g,L(l),o.remove())},M=(e,t)=>e.S===t.S,O=(e,t)=>{const n=t.g=e.g,l=e.h,o=t.h,s=t.$;null===s?(j(e,t,!1),null!==l&&null!==o?((e,t,n,l)=>{let o,s=0,c=0,i=t.length-1,r=t[0],a=t[i],u=l.length-1,f=l[0],d=l[u];for(;s<=i&&c<=u;)null==r?r=t[++s]:null==a?a=t[--i]:null==f?f=l[++c]:null==d?d=l[--u]:M(r,f)?(O(r,f),r=t[++s],f=l[++c]):M(a,d)?(O(a,d),a=t[--i],d=l[--u]):M(r,d)?(O(r,d),e.insertBefore(r.g,a.g.nextSibling),r=t[++s],d=l[--u]):M(a,f)?(O(a,f),e.insertBefore(a.g,r.g),a=t[--i],f=l[++c]):(o=k(t&&t[c],n,c),f=l[++c],o&&r.g.parentNode.insertBefore(o,r.g));s>i?v(e,null==l[u+1]?null:l[u+1].g,n,l,c,u):c>u&&C(t,s,i)})(n,l,t,o):null!==o?(null!==e.$&&(n.textContent=""),v(n,null,t,o,0,o.length-1)):null!==l&&C(l,0,l.length-1)):e.$!==s&&(n.data=s)},L=e=>{e.m&&e.m.ref&&e.m.ref(null),e.h&&e.h.map(L)},P=e=>G(e).j,U=(e,t,n)=>{const l=P(e);return{emit:e=>W(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},W=(e,t,n)=>{const l=s.ce(t,n);return e.dispatchEvent(l),l},x=(e,t)=>{t&&!e.k&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.k=t)))},E=(e,t)=>{if(e.t|=16,!(4&e.t))return x(e,e.v),ce((()=>T(e,t)));e.t|=512},T=(e,t)=>{const n=e.i;let l;return t?(e.t|=256,e.u&&(e.u.map((([e,t])=>q(n,e,t))),e.u=null),l=q(n,"componentWillLoad")):l=q(n,"componentWillUpdate"),F(l,(()=>A(e,n,t)))},A=async(e,t,n)=>{const l=e.j,s=l["s-rc"];n&&(e=>{const t=e.C,n=e.j,l=t.t,s=((e,t)=>{let n=p(t),l=Z.get(n);if(e=11===e.nodeType?e:o,l)if("string"==typeof l){let t,s=d.get(e=e.head||e);s||d.set(e,s=new Set),s.has(n)||(t=o.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(e);D(e,t),s&&(s.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>H(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},D=(n,l)=>{try{l=l.render(),n.t&=-17,n.t|=2,((n,l)=>{const o=n.j,s=n.C,c=n.M||h(null,null),i=(e=>e&&e.S===b)(l)?l:m(null,null,l);t=o.tagName,s.O&&(i.m=i.m||{},s.O.map((([e,t])=>i.m[t]=o[e]))),i.S=null,i.t|=4,n.M=i,i.g=c.g=o.shadowRoot||o,e=o["s-sc"],O(c,i)})(n,l)}catch(e){Q(e,n.j)}return null},H=e=>{const t=e.j,n=e.i,l=e.v;64&e.t?q(n,"componentDidUpdate"):(e.t|=64,N(t),q(n,"componentDidLoad"),e.L(t),l||R()),e.k&&(e.k(),e.k=void 0),512&e.t&&se((()=>E(e,!1))),e.t&=-517},R=()=>{N(o.documentElement),se((()=>W(l,"appload",{detail:{namespace:"stock-price"}})))},q=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){Q(e)}},F=(e,t)=>e&&e.then?e.then(t):t(),N=e=>e.classList.add("hydrated"),V=(e,t,n)=>{if(t.P){e.watchers&&(t.U=e.watchers);const l=Object.entries(t.P),o=e.prototype;if(l.map((([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,e,{get(){return((e,t)=>G(this).W.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=G(e),s=o.j,c=o.W.get(t),i=o.t,r=o.i;if(n=((e,t)=>null==e||y(e)?e:1&t?e+"":e)(n,l.P[t][0]),!(8&i&&void 0!==c||n===c)&&(o.W.set(t,n),r)){if(l.U&&128&i){const e=l.U[t];e&&e.map((e=>{try{r[e](n,c,t)}catch(e){Q(e,s)}}))}2==(18&i)&&E(o,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,l){s.jmp((()=>{const t=n.get(e);this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const o=l[1]||e;return n.set(o,e),512&l[0]&&t.O.push([e,o]),o}))}}return e},_=e=>{q(e,"connectedCallback")},z=(e,t={})=>{const n=[],c=t.exclude||[],a=l.customElements,u=o.head,f=u.querySelector("meta[charset]"),d=o.createElement("style"),$=[];let y,m=!0;Object.assign(s,t),s.l=new URL(t.resourcesUrl||"./",o.baseURI).href,e.map((e=>e[1].map((t=>{const l={t:t[0],p:t[1],P:t[2],T:t[3]};l.P=t[2],l.T=t[3],l.O=[],l.U={};const o=l.p,u=class extends HTMLElement{constructor(e){super(e),J(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){y&&(clearTimeout(y),y=null),m?$.push(this):s.jmp((()=>(e=>{if(0==(1&s.t)){const t=G(e),n=t.C,l=()=>{};if(1&t.t)r(e,t,n.T),_(t.i);else{t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){x(t,t.v=n);break}}n.P&&Object.entries(n.P).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,o)=>{if(0==(32&t.t)){{if(t.t|=32,(o=Y(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.U=o.watchers,V(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(e){Q(e)}t.t&=-9,t.t|=128,e(),_(t.i)}if(o.style){let e=o.style;const t=p(n);if(!Z.has(t)){const l=()=>{};((e,t,n)=>{let l=Z.get(e);i&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,Z.set(e,l)})(t,e,!!(1&n.t)),l()}}}const s=t.v,c=()=>E(t,!0);s&&s["s-rc"]?s["s-rc"].push(c):c()})(0,t,n)}l()}})(this)))}disconnectedCallback(){s.jmp((()=>(()=>{if(0==(1&s.t)){const e=G(this),t=e.i;e.o&&(e.o.map((e=>e())),e.o=void 0),q(t,"disconnectedCallback")}})()))}componentOnReady(){return G(this).A}};l.D=e[0],c.includes(o)||a.get(o)||(n.push(o),a.define(o,V(u,l,1)))})))),d.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",d.setAttribute("data-styles",""),u.insertBefore(d,f?f.nextSibling:u.firstChild),m=!1,$.length?$.map((e=>e.connectedCallback())):s.jmp((()=>y=setTimeout(R,30)))},B=new WeakMap,G=e=>B.get(e),I=(e,t)=>B.set(t.i=e,t),J=(e,t)=>{const n={t:0,j:e,C:t,W:new Map};return n.A=new Promise((e=>n.L=e)),e["s-p"]=[],e["s-rc"]=[],r(e,n,t.T),B.set(e,n)},K=(e,t)=>t in e,Q=(e,t)=>(0,console.error)(e,t),X=new Map,Y=e=>{const t=e.p.replace(/-/g,"_"),n=e.D,l=X.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(X.set(n,e),e[t])),Q)},Z=new Map,ee=[],te=[],ne=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&s.t?se(oe):s.raf(oe))},le=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){Q(e)}e.length=0},oe=()=>{le(ee),le(te),(n=ee.length>0)&&s.raf(oe)},se=e=>c().then(e),ce=ne(te,!0);export{b as H,z as b,U as c,P as g,m as h,c as p,I as r}