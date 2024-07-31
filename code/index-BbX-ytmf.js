(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,I=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,j=Symbol(),q=new WeakMap;let et=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==j)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(I&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&q.set(e,t))}return t}toString(){return this.cssText}};const dt=n=>new et(typeof n=="string"?n:n+"",void 0,j),st=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((s,i,o)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[o+1],n[0]);return new et(e,n,j)},ut=(n,t)=>{if(I)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=N.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,n.appendChild(s)}},V=I?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return dt(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:pt,defineProperty:ft,getOwnPropertyDescriptor:$t,getOwnPropertyNames:mt,getOwnPropertySymbols:_t,getPrototypeOf:gt}=Object,O=globalThis,W=O.trustedTypes,vt=W?W.emptyScript:"",yt=O.reactiveElementPolyfillSupport,P=(n,t)=>n,H={toAttribute(n,t){switch(t){case Boolean:n=n?vt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},it=(n,t)=>!pt(n,t),F={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:it};Symbol.metadata??=Symbol("metadata"),O.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=F){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&ft(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=$t(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get(){return i?.call(this)},set(r){const p=i?.call(this);o.call(this,r),this.requestUpdate(t,p,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??F}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;const t=gt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){const e=this.properties,s=[...mt(e),..._t(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(V(i))}else t!==void 0&&e.push(V(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ut(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const o=(s.converter?.toAttribute!==void 0?s.converter:H).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),r=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:H;this._$Em=i,this[i]=r.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??it)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,o]of s)o.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[P("elementProperties")]=new Map,A[P("finalized")]=new Map,yt?.({ReactiveElement:A}),(O.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=globalThis,T=z.trustedTypes,K=T?T.createPolicy("lit-html",{createHTML:n=>n}):void 0,nt="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,ot="?"+_,At=`<${ot}>`,y=document,x=()=>y.createComment(""),U=n=>n===null||typeof n!="object"&&typeof n!="function",rt=Array.isArray,wt=n=>rt(n)||typeof n?.[Symbol.iterator]=="function",k=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Z=/-->/g,J=/>/g,g=RegExp(`>|${k}(?:([^\\s"'>=/]+)(${k}*=${k}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Y=/'/g,G=/"/g,at=/^(?:script|style|textarea|title)$/i,bt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),ht=bt(1),b=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Q=new WeakMap,v=y.createTreeWalker(y,129);function ct(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return K!==void 0?K.createHTML(t):t}const Et=(n,t)=>{const e=n.length-1,s=[];let i,o=t===2?"<svg>":"",r=S;for(let p=0;p<e;p++){const a=n[p];let c,l,h=-1,d=0;for(;d<a.length&&(r.lastIndex=d,l=r.exec(a),l!==null);)d=r.lastIndex,r===S?l[1]==="!--"?r=Z:l[1]!==void 0?r=J:l[2]!==void 0?(at.test(l[2])&&(i=RegExp("</"+l[2],"g")),r=g):l[3]!==void 0&&(r=g):r===g?l[0]===">"?(r=i??S,h=-1):l[1]===void 0?h=-2:(h=r.lastIndex-l[2].length,c=l[1],r=l[3]===void 0?g:l[3]==='"'?G:Y):r===G||r===Y?r=g:r===Z||r===J?r=S:(r=g,i=void 0);const f=r===g&&n[p+1].startsWith("/>")?" ":"";o+=r===S?a+At:h>=0?(s.push(c),a.slice(0,h)+nt+a.slice(h)+_+f):a+_+(h===-2?p:f)}return[ct(n,o+(n[e]||"<?>")+(t===2?"</svg>":"")),s]};class C{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,r=0;const p=t.length-1,a=this.parts,[c,l]=Et(t,e);if(this.el=C.createElement(c,s),v.currentNode=this.el.content,e===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=v.nextNode())!==null&&a.length<p;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(nt)){const d=l[r++],f=i.getAttribute(h).split(_),$=/([.?@])?(.*)/.exec(d);a.push({type:1,index:o,name:$[2],strings:f,ctor:$[1]==="."?Pt:$[1]==="?"?xt:$[1]==="@"?Ut:L}),i.removeAttribute(h)}else h.startsWith(_)&&(a.push({type:6,index:o}),i.removeAttribute(h));if(at.test(i.tagName)){const h=i.textContent.split(_),d=h.length-1;if(d>0){i.textContent=T?T.emptyScript:"";for(let f=0;f<d;f++)i.append(h[f],x()),v.nextNode(),a.push({type:2,index:++o});i.append(h[d],x())}}}else if(i.nodeType===8)if(i.data===ot)a.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(_,h+1))!==-1;)a.push({type:7,index:o}),h+=_.length-1}o++}}static createElement(t,e){const s=y.createElement("template");return s.innerHTML=t,s}}function E(n,t,e=n,s){if(t===b)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl;const o=U(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(n),i._$AT(n,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=E(n,i._$AS(n,t.values),i,s)),t}class St{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??y).importNode(e,!0);v.currentNode=i;let o=v.nextNode(),r=0,p=0,a=s[0];for(;a!==void 0;){if(r===a.index){let c;a.type===2?c=new R(o,o.nextSibling,this,t):a.type===1?c=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(c=new Ct(o,this,t)),this._$AV.push(c),a=s[++p]}r!==a?.index&&(o=v.nextNode(),r++)}return v.currentNode=y,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),U(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==b&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):wt(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==u&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(y.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=C.createElement(ct(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const o=new St(i,this),r=o.u(this.options);o.p(e),this.T(r),this._$AH=o}}_$AC(t){let e=Q.get(t.strings);return e===void 0&&Q.set(t.strings,e=new C(t)),e}k(t){rt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new R(this.S(x()),this.S(x()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class L{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}_$AI(t,e=this,s,i){const o=this.strings;let r=!1;if(o===void 0)t=E(this,t,e,0),r=!U(t)||t!==this._$AH&&t!==b,r&&(this._$AH=t);else{const p=t;let a,c;for(t=o[0],a=0;a<o.length-1;a++)c=E(this,p[s+a],e,a),c===b&&(c=this._$AH[a]),r||=!U(c)||c!==this._$AH[a],c===u?t=u:t!==u&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}r&&!i&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Pt extends L{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}class xt extends L{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}}class Ut extends L{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??u)===b)return;const s=this._$AH,i=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==u&&(s===u||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Ct{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const Rt=z.litHtmlPolyfillSupport;Rt?.(C,R),(z.litHtmlVersions??=[]).push("3.1.2");const Nt=(n,t,e)=>{const s=e?.renderBefore??t;let i=s._$litPart$;if(i===void 0){const o=e?.renderBefore??null;s._$litPart$=i=new R(t.insertBefore(x(),o),o,void 0,e??{})}return i._$AI(n),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class w extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Nt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return b}}w._$litElement$=!0,w.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:w});const Tt=globalThis.litElementPolyfillSupport;Tt?.({LitElement:w});(globalThis.litElementVersions??=[]).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};class Ot{constructor(t,e=1e3){this.value=new Date,(this.host=t).addController(this),this.timeout=e}hostConnected(){this._timerID=setInterval(()=>{this.value=new Date,this.host.requestUpdate()},this.timeout)}hostDisconnected(){clearInterval(this._timerID),this._timerID=void 0}}var Lt=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,Ht=(n,t,e,s)=>{for(var i=s>1?void 0:s?kt(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(i=(s?r(t,e,i):r(i))||i);return s&&i&&Lt(t,e,i),i};const Mt=new Intl.DateTimeFormat(void 0,{hour:"2-digit"}),Dt=new Intl.DateTimeFormat(void 0,{minute:"2-digit"}),It=new Intl.DateTimeFormat(void 0,{weekday:"long",day:"numeric",month:"long",year:"numeric"});let M=class extends w{constructor(){super(...arguments),this.clock=new Ot(this,100)}render(){const n=Mt.format(this.clock.value),t=this.clock.value.getSeconds()%2==0?":":" ",e=Dt.format(this.clock.value),s=It.format(this.clock.value);return ht`
      <main>
        <div class="container">
          <div id="time-container" class="container">
            <p>${n}${t}${e}</p>
          </div>
          <div id="date-container" class="container">
            <p id="date">${s}</p>
          </div>
        </div>
      </main>
    `}};M.styles=[st`
      main,
      div {
        height: 100%;
      }

      .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      p {
        text-align: center;
        margin: 0;
        vertical-align: middle;
      }

      #time-container {
        flex: 7;
        font-size: 275px;
        font-weight: black;
        font-family: ChivoMono;
      }

      #date-container {
        flex: 3;
        font-size: 60px;
      }
    `];M=Ht([lt("app-clock")],M);const jt="modulepreload",zt=function(n){return"/"+n},X={},Bt=function(t,e,s){let i=Promise.resolve();if(e&&e.length>0){const o=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),p=r?.nonce||r?.getAttribute("nonce");i=Promise.all(e.map(a=>{if(a=zt(a),a in X)return;X[a]=!0;const c=a.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(!!s)for(let f=o.length-1;f>=0;f--){const $=o[f];if($.href===a&&(!c||$.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${l}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":jt,c||(d.as="script",d.crossOrigin=""),d.href=a,p&&d.setAttribute("nonce",p),document.head.appendChild(d),c)return new Promise((f,$)=>{d.addEventListener("load",f),d.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${a}`)))})}))}return i.then(()=>t()).catch(o=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o})},B=Symbol.for("app-tools::log::1.x");globalThis[B]={setDebug:qt,debug:"window"in globalThis?new URL(window.location.href).searchParams.has("app-tools-debug"):!1};function qt(n){globalThis[B].debug=!!n}function Vt(n,t){globalThis[B].debug&&(console.groupCollapsed(`[app-tools] ${n}`),t&&console.log(t),console.groupEnd())}function Wt(n){return(t,e)=>{Vt(`${n}: ${t}`,e)}}const m=Wt("router");class Ft extends Event{constructor(t){super("route-changed"),this.context=t}}class Kt extends EventTarget{context={params:{},query:{},title:"",url:new URL(window.location.href)};constructor(t){super(),this.config=t,this.routes=t.routes.map(e=>({...e,urlPattern:new URLPattern({pathname:e.path,baseURL:window.location.href,search:"*",hash:"*"})})),m("Initialized routes",this.routes),queueMicrotask(()=>{this.navigate(new URL(window.location.href),{replace:!0})}),window.addEventListener("popstate",this._onPopState),window.addEventListener("click",this._onAnchorClick)}uninstall(){window.removeEventListener("popstate",this._onPopState),window.removeEventListener("click",this._onAnchorClick)}get url(){return new URL(window.location.href)}get fallback(){return new URL(this.config?.fallback||this.baseUrl.href.substring(window.location.origin.length),this.baseUrl)}get baseUrl(){return new URL("./",document.baseURI)}render(){return m(`Rendering route ${this.context.url.pathname}${this.context.url.search}${this.context.url.hash}`,{context:this.context,route:this.route}),this.route?.render?.(this.context)}_matchRoute(t){for(const e of this.routes){const s=e.urlPattern.exec(t);if(s){const{title:i}=e,o=Object.fromEntries(new URLSearchParams(t.search)),r=s?.pathname?.groups??{};return this.context={url:t,title:typeof i=="function"?i({params:r,query:o,url:t}):i,params:r,query:o},e}}return m(`No route matched for ${t.pathname}${t.search}${t.hash}`,t),null}_notifyUrlChanged(){this.dispatchEvent(new Ft(this.context))}_onPopState=()=>{this.navigate(new URL(window.location.href),{backNav:!0})};_onAnchorClick=t=>{if(t.defaultPrevented||t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey)return;const e=t.composedPath().find(o=>o.tagName==="A");if(!e||!e.href)return;const s=new URL(e.href);if(this.url.href===s.href||s.host!==window.location.host||e.hasAttribute("download")||e.href.includes("mailto:"))return;const i=e.getAttribute("target");i&&i!==""&&i!=="_self"||(t.preventDefault(),this.navigate(s))};_collectPlugins(t){return[...this.config?.plugins??[],...t?.plugins??[]]}async navigate(t,e={}){typeof t=="string"&&(t=new URL(t,this.baseUrl));let s=this._matchRoute(t)||this._matchRoute(this.fallback);m(`Navigating to ${t.pathname}${t.search}${t.hash}`,{context:this.context,route:this.route});let i=this._collectPlugins(s);for(const o of i)try{const r=await o?.shouldNavigate?.(this.context);r&&(await r.condition()||(t=new URL(r.redirect,this.baseUrl),s=this._matchRoute(t)||this._matchRoute(this.fallback),i=this._collectPlugins(s),m("Redirecting",{context:this.context,route:this.route})))}catch(r){throw m(`Plugin "${o.name}" error on shouldNavigate hook`,r),r}if(this.route=s,!this.route)throw new Error(`[ROUTER] No route or fallback matched for url ${t}`);for(const o of i)try{await o?.beforeNavigation?.(this.context)}catch(r){throw m(`Plugin "${o.name}" error on beforeNavigation hook`,r),r}e?.replace?window.history.replaceState(null,"",`${t.pathname}${t.search}${t.hash}`):e.backNav||window.history.pushState(null,"",`${t.pathname}${t.search}${t.hash}`),document.title=this.context.title,this._notifyUrlChanged();for(const o of i)try{await o?.afterNavigation?.(this.context)}catch(r){throw m(`Plugin "${o.name}" error on afterNavigation hook`,r),r}}}globalThis.URLPattern||await Bt(()=>import("./index-CqHS4zRL.js"),[]);const Zt="/",tt=new Kt({routes:[{path:Jt(),title:"Clock",render:()=>ht`<app-clock></app-clock>`}]});function Jt(n){var t=Zt;return n&&(t=t+n),t}var Yt=Object.defineProperty,Gt=Object.getOwnPropertyDescriptor,Qt=(n,t,e,s)=>{for(var i=s>1?void 0:s?Gt(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(i=(s?r(t,e,i):r(i))||i);return s&&i&&Yt(t,e,i),i};let D=class extends w{firstUpdated(){tt.addEventListener("route-changed",()=>{"startViewTransition"in document?document.startViewTransition(()=>this.requestUpdate()):this.requestUpdate()})}render(){return tt.render()}};D.styles=st`
    main {
      padding-left: 16px;
      padding-right: 16px;
      padding-bottom: 16px;
    }
  `;D=Qt([lt("app-index")],D);
//# sourceMappingURL=index-BbX-ytmf.js.map