(function(){const c=`
    #sabia-btn {
      position:fixed; bottom:24px; right:24px; width:56px; height:56px;
      border-radius:50%; background:linear-gradient(135deg,#1a5f7a,#0d9488);
      border:none; cursor:pointer; display:flex; align-items:center; justify-content:center;
      box-shadow:0 4px 20px rgba(13,148,136,.45); z-index:99999;
      transition:transform .2s,box-shadow .2s;
      isolation: isolate;
    }
    #sabia-btn:hover { transform:scale(1.1); box-shadow:0 6px 28px rgba(13,148,136,.65); }
    #sabia-btn svg { width:30px; height:30px; fill:white; }

    #sabia-panel {
      position:fixed; bottom:92px; right:24px; width:340px; max-height:88vh;
      overflow-y:auto; background:#fff; border-radius:18px;
      box-shadow:0 24px 64px rgba(0,0,0,.18); z-index:99998;
      font-family:'Segoe UI',system-ui,sans-serif; display:none; scrollbar-width:thin;
      isolation: isolate;
    }
    #sabia-panel.open { display:block; animation:sabiaIn .22s ease; }
    @keyframes sabiaIn {
      from { opacity:0; transform:translateY(14px) scale(.97); }
      to   { opacity:1; transform:translateY(0) scale(1); }
    }

    .s-head { display:flex; align-items:center; justify-content:space-between; padding:20px 18px 16px; }
    .s-head h2 { font-size:18px; font-weight:700; color:#111; margin:0; line-height:1.25; }
    .s-head-r { display:flex; gap:10px; align-items:center; }
    .s-reset { background:none; border:none; cursor:pointer; color:#555; padding:4px;
      border-radius:6px; display:flex; align-items:center; transition:color .2s; }
    .s-reset:hover { color:#0d9488; }
    .s-close { width:34px; height:34px; border-radius:50%; background:#1a5f7a;
      border:none; cursor:pointer; color:#fff; font-size:17px; font-weight:700;
      display:flex; align-items:center; justify-content:center; transition:background .2s; }
    .s-close:hover { background:#0d9488; }

    .s-opts { display:flex; flex-direction:column; gap:0; padding:0 14px 4px; }
    .s-opt {
      display:flex; align-items:center; gap:14px; padding:15px 16px;
      border:1.5px solid #e8e8e8; border-radius:10px; background:#f8f9fa;
      cursor:pointer; font-size:15px; font-weight:500; color:#222;
      margin-bottom:8px; transition:all .16s; text-align:left; width:100%;
    }
    .s-opt:hover { border-color:#0d9488; background:#f0fdfc; color:#0d9488; }
    .s-opt.active { background:#1a5f7a; border-color:#1a5f7a; color:#fff; }
    .s-opt svg { width:22px; height:22px; flex-shrink:0; }

    .s-sliders { padding:4px 14px 20px; display:flex; flex-direction:column; gap:0; }
    .s-srow {
      display:flex; align-items:center; justify-content:space-between;
      padding:13px 14px; border:1.5px solid #e8e8e8; border-radius:10px;
      background:#f8f9fa; margin-bottom:8px; gap:10px;
    }
    .s-slabel { font-size:13px; color:#333; font-weight:500; min-width:110px; }
    .s-track { flex:1; height:4px; background:#ddd; border-radius:4px; }
    .s-fill { height:4px; background:#3b82f6; border-radius:4px; width:50%; transition:width .15s; }
    .s-val { font-size:13px; color:#444; min-width:34px; text-align:right; }
    .s-ctrls { display:flex; gap:4px; }
    .s-cb {
      width:28px; height:28px; border:1.5px solid #ccc; border-radius:6px; background:#fff;
      cursor:pointer; font-size:17px; display:flex; align-items:center; justify-content:center;
      color:#555; transition:all .15s; line-height:1;
    }
    .s-cb:hover { border-color:#1a5f7a; color:#1a5f7a; }

    /* \u2500\u2500 Filtros solo al contenido, NO al widget \u2500\u2500 */
    body.sabia-invert  > *:not(#sabia-widget-root) { filter:invert(1) hue-rotate(180deg); }
    body.sabia-mono    > *:not(#sabia-widget-root) { filter:grayscale(1); }
    body.sabia-dark    > *:not(#sabia-widget-root) { filter:brightness(0.15) contrast(1.6); }
    body.sabia-light   > *:not(#sabia-widget-root) { filter:brightness(1.25) contrast(1.1); }
    body.sabia-lowsat  > *:not(#sabia-widget-root) { filter:saturate(0.25); }
    body.sabia-highsat > *:not(#sabia-widget-root) { filter:saturate(3); }

    body.sabia-links a,
    body.sabia-links button:not(.s-opt):not(.s-cb):not(.s-reset):not(.s-close):not(#sabia-btn),
    body.sabia-links [role="button"],
    body.sabia-links nav a {
      outline:3px solid #f59e0b !important; outline-offset:3px !important; border-radius:2px !important;
    }
    body.sabia-titles h1, body.sabia-titles h2,
    body.sabia-titles h3, body.sabia-titles h4, body.sabia-titles h5 {
      outline:2px solid #3b82f6 !important; outline-offset:3px !important; border-radius:2px !important;
    }
    body.sabia-readmode p, body.sabia-readmode li, body.sabia-readmode article {
      background:#fefce8 !important; color:#1c1917 !important;
      line-height:2 !important; font-family:Georgia,serif !important;
    }
  `,l=document.createElement("style");l.textContent=c,document.head.appendChild(l);const p=`
  <div id="sabia-widget-root">
    <button id="sabia-btn" aria-label="Herramientas de accesibilidad">
      <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8A8.5 8.5 0 0 1 12 20a8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5 8.5 8.5 0 0 1 12 3h.5A8.48 8.48 0 0 1 21 11v.5z"/></svg>
    </button>

    <div id="sabia-panel">
      <div class="s-head">
        <h2>Herramientas de<br>Accesibilidad</h2>
        <div class="s-head-r">
          <button class="s-reset" id="s-reset" title="Restablecer">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>
            </svg>
          </button>
          <button class="s-close" id="s-close">\u2715</button>
        </div>
      </div>

      <div class="s-opts">
        <button class="s-opt" data-a="invert">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h10"/><path d="M12 2a10 10 0 0 1 0 20" fill="currentColor"/></svg>
          Colores invertidos
        </button>
        <button class="s-opt" data-a="mono">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20" fill="currentColor"/><line x1="12" y1="2" x2="12" y2="22"/></svg>
          Monocromo
        </button>
        <button class="s-opt" data-a="dark">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor"/></svg>
          Contraste oscuro
        </button>
        <button class="s-opt" data-a="light">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          Contraste claro
        </button>
        <button class="s-opt" data-a="lowsat">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2v20" stroke-dasharray="3 3"/></svg>
          Baja saturaci\xF3n
        </button>
        <button class="s-opt" data-a="highsat">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor"/><circle cx="12" cy="12" r="5" fill="white"/></svg>
          Alta saturaci\xF3n
        </button>
        <button class="s-opt" data-a="links">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
          Enlaces destacados
        </button>
        <button class="s-opt" data-a="titles">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 7h6M12 7v10"/></svg>
          T\xEDtulos destacados
        </button>
        <button class="s-opt" data-a="reader">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          Lector de pantalla
        </button>
        <button class="s-opt" data-a="readmode">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="7" y1="8" x2="17" y2="8"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="7" y1="16" x2="13" y2="16"/></svg>
          Modo de lectura
        </button>
      </div>

      <div class="s-sliders">
        <div class="s-srow">
          <span class="s-slabel">Escalamiento de contenido</span>
          <div class="s-track"><div class="s-fill" id="f-zoom"></div></div>
          <span class="s-val" id="v-zoom">100%</span>
          <div class="s-ctrls">
            <button class="s-cb" data-s="zoom" data-d="-1">\u2212</button>
            <button class="s-cb" data-s="zoom" data-d="1">+</button>
          </div>
        </div>
        <div class="s-srow">
          <span class="s-slabel">Tama\xF1o de fuente</span>
          <div class="s-track"><div class="s-fill" id="f-font"></div></div>
          <span class="s-val" id="v-font">100%</span>
          <div class="s-ctrls">
            <button class="s-cb" data-s="font" data-d="-1">\u2212</button>
            <button class="s-cb" data-s="font" data-d="1">+</button>
          </div>
        </div>
        <div class="s-srow">
          <span class="s-slabel">Altura de la l\xEDnea</span>
          <div class="s-track"><div class="s-fill" id="f-line"></div></div>
          <span class="s-val" id="v-line">100%</span>
          <div class="s-ctrls">
            <button class="s-cb" data-s="line" data-d="-1">\u2212</button>
            <button class="s-cb" data-s="line" data-d="1">+</button>
          </div>
        </div>
        <div class="s-srow">
          <span class="s-slabel">Espaciado de letras</span>
          <div class="s-track"><div class="s-fill" id="f-spacing"></div></div>
          <span class="s-val" id="v-spacing">100%</span>
          <div class="s-ctrls">
            <button class="s-cb" data-s="spacing" data-d="-1">\u2212</button>
            <button class="s-cb" data-s="spacing" data-d="1">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>`,d=document.createElement("div");d.innerHTML=p,document.body.appendChild(d);const r=document.getElementById("sabia-panel");document.getElementById("sabia-btn").addEventListener("click",()=>r.classList.toggle("open")),document.getElementById("s-close").addEventListener("click",()=>r.classList.remove("open"));const i=["invert","mono","dark","light","lowsat","highsat"],b=["links","titles","reader","readmode"];document.querySelectorAll(".s-opt").forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.a;if(i.includes(e)){const a=t.classList.contains("active");i.forEach(o=>{document.querySelector(`[data-a="${o}"]`).classList.remove("active"),document.body.classList.remove(`sabia-${o}`)}),a||(t.classList.add("active"),document.body.classList.add(`sabia-${e}`))}else{const a=t.classList.toggle("active");if(document.body.classList.toggle(`sabia-${e}`,a),e==="reader")if(a){const o=new SpeechSynthesisUtterance(document.body.innerText.substring(0,500));o.lang="es-MX",window.speechSynthesis.speak(o)}else window.speechSynthesis.cancel()}})});const s={zoom:100,font:100,line:100,spacing:100};function n(){document.documentElement.style.zoom=s.zoom/100,document.documentElement.style.fontSize=s.font+"%",document.documentElement.style.lineHeight=(s.line/100*1.6).toFixed(2),document.documentElement.style.letterSpacing=(s.spacing-100)*.025+"px",["zoom","font","line","spacing"].forEach(t=>{document.getElementById(`v-${t}`).textContent=s[t]+"%",document.getElementById(`f-${t}`).style.width=Math.max(4,(s[t]-50)/100*100)+"%"})}document.querySelectorAll(".s-cb").forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.s,a=parseInt(t.dataset.d);s[e]=Math.min(200,Math.max(50,s[e]+a*10)),n()})}),document.getElementById("s-reset").addEventListener("click",()=>{document.querySelectorAll(".s-opt").forEach(t=>t.classList.remove("active")),[...i,...b].forEach(t=>document.body.classList.remove(`sabia-${t}`)),window.speechSynthesis.cancel(),s.zoom=s.font=s.line=s.spacing=100,["zoom","fontSize","lineHeight","letterSpacing"].forEach(t=>document.documentElement.style[t]=""),n()}),n()})();
