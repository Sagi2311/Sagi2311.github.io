var k=`
  :host {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 40;
    width: 84px;
    height: 84px;
    pointer-events: none;
  }
  :host([hidden]) { display: none; }
  button {
    font: inherit;
    color: var(--text, #eff5f7);
    -webkit-tap-highlight-color: transparent;
    pointer-events: auto;
  }
  button:focus-visible {
    outline: 2px solid var(--accent, #38bdf8);
    outline-offset: 3px;
  }
  .companion {
    border: 0;
    border-radius: 23px;
    background: transparent;
    padding: 0;
    width: 100%;
    height: 100%;
    cursor: grab;
    touch-action: none;
    user-select: none;
  }
  :host([data-dragging]) .companion { cursor: grabbing; }
  .float, .visual, img, canvas { display: block; width: 100%; height: 100%; }
  :host([data-rendering="webgl"]) .float { animation: float 5.8s ease-in-out infinite; }
  .visual {
    filter: drop-shadow(0 3px 5px #07101965);
    transform: rotate(var(--tilt, 0deg)) scale(var(--scale, 1));
    transition: transform 180ms cubic-bezier(.23,1,.32,1);
  }
  img, canvas { object-fit: contain; pointer-events: none; }
  [hidden] { display: none !important; }
  .hide, .show {
    border: 1px solid var(--card-border, #536879);
    background: var(--exhibition-paper, #17222d);
    border-radius: 10px;
    cursor: pointer;
  }
  .hide {
    position: absolute;
    top: 0;
    right: 0;
    width: 26px;
    height: 26px;
    padding: 0;
    font-size: 17px;
    opacity: 0;
    pointer-events: none;
  }
  :host(:hover) .hide, :host(:focus-within) .hide {
    opacity: 1;
    pointer-events: auto;
  }
  .show { width: 100%; min-height: 36px; padding: 2px 5px; font-size: 11px; }
  :host([data-disabled]) { height: 36px; }
  :host([data-paused]) .float, :host([data-dragging]) .float { animation-play-state: paused; }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
  @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
  @media (max-width: 650px) {
    :host { width: 72px; height: 72px; }
  }
  @media (pointer: coarse) {
    .hide { opacity: 1; pointer-events: auto; }
  }
  @media (prefers-reduced-motion: reduce) {
    :host([data-rendering="webgl"]) .float { animation: none; }
    .visual { transition: none; transform: none; }
  }
`;var q="developer-os-ping-position",S="developer-os-ping-disabled",r=10,C='main a[href], main button, main input, main select, main textarea, main summary, main [role="button"]';function B(n){try{return localStorage.getItem(n)}catch{return null}}function D(n,t){try{localStorage.setItem(n,t)}catch{}}function V(){try{let n=JSON.parse(B(q)??"null");if(n&&Number.isFinite(n.x)&&Number.isFinite(n.y))return n}catch{}}var P=class extends HTMLElement{reduced=matchMedia("(prefers-reduced-motion: reduce)");shadow=this.attachShadow({mode:"open"});life=new AbortController;companion;hideButton;showButton;description;still;visual;position={x:0,y:0};desired=V();disabled=B(S)==="true";drag;view;load;failed=!1;layoutTimer;idleTimer;winkTimer;reactTimer;language;content;constructor(){super(),this.shadow.innerHTML=`
      <style>${k}</style>
      <button type="button" class="companion" aria-describedby="ping-help">
        <span class="float"><span class="visual">
          <img alt="" width="192" height="192" draggable="false">
        </span></span>
      </button>
      <button type="button" class="hide">\xD7</button>
      <button type="button" class="show" hidden></button>
      <span class="sr-only" id="ping-help"></span>`,this.companion=this.shadow.querySelector(".companion"),this.hideButton=this.shadow.querySelector(".hide"),this.showButton=this.shadow.querySelector(".show"),this.description=this.shadow.querySelector(".sr-only"),this.still=this.shadow.querySelector("img"),this.visual=this.shadow.querySelector(".visual")}connectedCallback(){let t=this.life.signal;this.companion.addEventListener("pointerdown",this.beginDrag,{signal:t}),this.companion.addEventListener("pointermove",this.moveDrag,{signal:t}),this.companion.addEventListener("pointerup",this.endDrag,{signal:t}),this.companion.addEventListener("pointercancel",this.cancelDrag,{signal:t}),this.companion.addEventListener("lostpointercapture",this.cancelDrag,{signal:t}),this.companion.addEventListener("keydown",this.onKey,{signal:t}),this.companion.addEventListener("click",i=>{i.stopPropagation(),i.detail===0&&this.react()},{signal:t}),this.hideButton.addEventListener("click",()=>this.setDisabled(!0,!0),{signal:t}),this.showButton.addEventListener("click",()=>this.setDisabled(!1,!0),{signal:t}),this.reduced.addEventListener("change",this.syncMotion,{signal:t}),document.addEventListener("visibilitychange",this.syncMotion,{signal:t}),window.addEventListener("resize",this.resize,{signal:t}),window.addEventListener("scroll",this.scheduleLayout,{signal:t,passive:!0}),window.visualViewport?.addEventListener("resize",this.resize,{signal:t}),window.visualViewport?.addEventListener("scroll",this.scheduleLayout,{signal:t}),this.language=new MutationObserver(this.updateLabels),this.language.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"]});let e=document.querySelector("main");e&&(this.content=new MutationObserver(this.scheduleLayout),this.content.observe(e,{childList:!0,subtree:!0})),this.updateLabels(),this.setDisabled(this.disabled)}disconnectedCallback(){this.life.abort(),this.language?.disconnect(),this.content?.disconnect(),clearTimeout(this.layoutTimer),this.pause(),this.dropView()}updateLabels=()=>{let t=document.documentElement.lang==="ka";this.companion.setAttribute("aria-label",t?"PING-\u10D8\u10E1 \u10D9\u10DD\u10DB\u10DE\u10D0\u10DC\u10D8\u10DD\u10DC\u10D8":"PING companion"),this.hideButton.setAttribute("aria-label",t?"PING-\u10D8\u10E1 \u10D3\u10D0\u10DB\u10D0\u10DA\u10D5\u10D0":"Hide PING"),this.showButton.textContent=t?"PING-\u10D8\u10E1 \u10E9\u10D5\u10D4\u10DC\u10D4\u10D1\u10D0":"Show PING",this.description.textContent=t?"\u10D2\u10D0\u10D3\u10D0\u10E1\u10D0\u10D0\u10D3\u10D2\u10D8\u10DA\u10D4\u10D1\u10DA\u10D0\u10D3 \u10D2\u10D0\u10DB\u10DD\u10D8\u10E7\u10D4\u10DC\u10D4\u10D7 \u10D8\u10E1\u10E0\u10D8\u10E1 \u10E6\u10D8\u10DA\u10D0\u10D9\u10D4\u10D1\u10D8. \u10D3\u10D0\u10E1\u10D0\u10DB\u10D0\u10DA\u10D0\u10D3 \u10D3\u10D0\u10D0\u10ED\u10D8\u10E0\u10D4\u10D7 Escape-\u10E1.":"Use arrow keys to move PING. Press Escape to hide."};setDisabled(t,e=!1){this.disabled=t,this.toggleAttribute("data-disabled",t),this.companion.hidden=this.hideButton.hidden=t,this.showButton.hidden=!t,!t&&!this.still.hasAttribute("src")&&(this.still.src="/ping/ping-still.v1.webp"),e&&(D(S,String(t)),(t?this.showButton:this.companion).focus({preventScroll:!0})),t&&this.dropView(),this.place(this.desired),this.syncMotion()}scheduleLayout=()=>{this.layoutTimer===void 0&&(this.layoutTimer=window.setTimeout(()=>{this.layoutTimer=void 0,this.drag||this.place(this.desired)},80))};resize=()=>{this.place(this.drag?this.position:this.desired,!this.drag)};place(t,e=!0){let i=window.visualViewport,d=i?.offsetLeft??0,y=i?.offsetTop??0,I=i?.width??window.innerWidth,T=i?.height??window.innerHeight,w=this.offsetWidth,b=this.offsetHeight,A=document.querySelector("app-navbar")?.getBoundingClientRect(),m=document.querySelector(".floating-dock")?.getBoundingClientRect(),g=d+r,v=Math.max(g,d+I-w-r),l=Math.max(y+r,(A?.bottom??0)+r),M=m?.height&&m.top>l&&m.top<y+T?m.top:y+T,f=Math.max(l,M-b-r),L=c=>({x:Math.round(Math.min(v,Math.max(g,c.x))),y:Math.round(Math.min(f,Math.max(l,c.y)))}),a=L(t??{x:v,y:f}),u=a;if(e){let c=Array.from(document.querySelectorAll(C),o=>o.getBoundingClientRect()).filter(o=>o.width&&o.height&&o.top<M&&o.bottom>l),E=(o,h)=>o.x+w+4>h.left&&o.x-4<h.right&&o.y+b+4>h.top&&o.y-4<h.bottom;if(c.some(o=>E(a,o))){let o=[{x:g,y:l},{x:v,y:l},{x:g,y:f},{x:v,y:f},...c.flatMap(s=>[{x:a.x,y:s.top-b-r},{x:a.x,y:s.bottom+r},{x:s.left-w-r,y:a.y},{x:s.right+r,y:a.y}])].map(L),h=s=>(s.x-a.x)**2+(s.y-a.y)**2;u=o.filter(s=>c.every(x=>!E(s,x))).sort((s,x)=>h(s)-h(x))[0]??a}}this.position.x=u.x,this.position.y=u.y,this.style.transform=`translate(${u.x}px, ${u.y}px)`}beginDrag=t=>{!t.isPrimary||t.button!==0||this.drag||(t.stopPropagation(),this.companion.setPointerCapture(t.pointerId),this.drag={id:t.pointerId,from:{x:t.clientX,y:t.clientY},position:{...this.position},moved:!1})};moveDrag=t=>{let e=this.drag;if(e?.id!==t.pointerId)return;t.stopPropagation();let i=t.clientX-e.from.x,d=t.clientY-e.from.y;!e.moved&&Math.hypot(i,d)<7||(e.moved||(e.moved=!0,this.setAttribute("data-dragging",""),this.pause()),this.place({x:e.position.x+i,y:e.position.y+d},!1),this.style.setProperty("--tilt",`${Math.max(-7,Math.min(7,i*.07))}deg`))};endDrag=t=>{if(this.drag?.id!==t.pointerId)return;t.stopPropagation(),this.finishDrag()?this.rememberPosition(this.position):this.react()};cancelDrag=t=>{this.drag?.id===t.pointerId&&(this.finishDrag(),this.place(this.desired))};finishDrag(){let t=this.drag;return this.drag=void 0,this.removeAttribute("data-dragging"),this.style.removeProperty("--tilt"),this.companion.hasPointerCapture(t.id)&&this.companion.releasePointerCapture(t.id),this.syncMotion(),t.moved}rememberPosition(t){this.place(t),this.desired={...this.position},D(q,JSON.stringify(this.desired))}onKey=t=>{if(t.key==="Escape"){t.preventDefault(),t.stopPropagation(),this.setDisabled(!0,!0);return}let e={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[t.key];if(!e)return;t.preventDefault(),t.stopPropagation();let i=t.shiftKey?36:16;this.rememberPosition({x:this.position.x+e[0]*i,y:this.position.y+e[1]*i})};syncMotion=()=>{let t=this.disabled||document.hidden||this.reduced.matches;this.toggleAttribute("data-paused",t),this.pause(),document.hidden&&(this.load?.abort(),this.load=void 0),!this.disabled&&!document.hidden&&!this.view&&!this.failed&&!this.load&&this.startView(),!(t||this.drag?.moved||!this.view)&&(this.idleTimer=window.setTimeout(this.wink,11e3+Math.random()*6500))};pause(){clearTimeout(this.idleTimer),clearTimeout(this.winkTimer),clearTimeout(this.reactTimer),this.style.removeProperty("--scale"),this.setFace(!1)}async startView(){let t=new AbortController;this.load=t;try{if(await new Promise(d=>{"requestIdleCallback"in window?window.requestIdleCallback(()=>d(),{timeout:1800}):setTimeout(d,150)}),t.signal.aborted||document.hidden)return;let{createPingView:e}=await import("./ping-view-F3S7L5MA.js");if(t.signal.aborted||document.hidden)return;let i=await e(t.signal,this.onViewLost);if(t.signal.aborted)return i.dispose();this.view=i,this.visual.append(i.canvas),this.still.hidden=!0,this.dataset.rendering="webgl",this.syncMotion()}catch{t.signal.aborted||this.onViewLost()}finally{this.load===t&&(this.load=void 0,!this.view&&!this.failed&&!this.disabled&&!document.hidden&&this.syncMotion())}}onViewLost=()=>{this.failed=!0,this.dropView()};dropView(){this.load?.abort(),this.load=void 0,this.view?.dispose(),this.view=void 0,this.still.hidden=!1,this.dataset.rendering="static",this.dataset.face="neutral"}react(){this.reduced.matches||document.hidden||this.disabled||(this.style.setProperty("--scale","1.07"),clearTimeout(this.reactTimer),this.reactTimer=window.setTimeout(()=>this.style.removeProperty("--scale"),140),this.wink())}wink=()=>{clearTimeout(this.idleTimer),clearTimeout(this.winkTimer),!(!this.view||this.disabled||document.hidden||this.reduced.matches||this.drag?.moved)&&(this.setFace(!0),this.winkTimer=window.setTimeout(()=>this.setFace(!1),240),this.idleTimer=window.setTimeout(this.wink,13e3+Math.random()*8e3))};setFace(t){if(t&&!this.view)return;let e=t?"wink":"neutral";this.dataset.face!==e&&(this.dataset.face=e,this.view?.wink(t))}};customElements.define("app-ping",P);var p=document.querySelector("app-root");if(p){let n,t=()=>p.querySelector("main > router-outlet + *")&&!p.querySelector("app-boot-terminal"),e=()=>{!t()||n!==void 0||(n=window.setTimeout(()=>{n=void 0,t()&&(i.disconnect(),p.querySelector("app-ping")||p.append(document.createElement("app-ping")))},150))},i=new MutationObserver(e);i.observe(p,{childList:!0,subtree:!0}),e()}
