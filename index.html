<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<meta name="theme-color" content="#f15a00">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="CC Diagnóstico">
<link rel="manifest" href="manifest.json">
<title>CC Diagnóstico · NL</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500;600;700;800&family=Barlow:wght@300;400;500&display=swap" rel="stylesheet">
<style>
:root{
  --bg:#1a1a2e;
  --surface:#22223a;
  --surface2:#2a2a45;
  --border:#35355a;
  --accent:#f15a00;
  --accent2:#ff7a20;
  --accent-glow:rgba(241,90,0,.25);
  --text:#e8e8f0;
  --text-muted:#9090b8;
  --text-dim:#55557a;
  --red:#ff4444;
  --yellow:#ffb020;
  --green:#4cca80;
  --blue:#5ab4ff;
  --radius:10px;
  --radius-sm:6px;
}
*{box-sizing:border-box;margin:0;padding:0;}
html,body{background:var(--bg);color:var(--text);font-family:'Barlow',sans-serif;font-size:14px;min-height:100vh;-webkit-font-smoothing:antialiased;}
.app-header{background:var(--accent);padding:0 16px;position:sticky;top:0;z-index:100;display:flex;align-items:center;justify-content:space-between;height:56px;box-shadow:0 2px 20px rgba(241,90,0,.5);}
.app-title{font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:22px;letter-spacing:.06em;text-transform:uppercase;color:#fff;}
.app-title span{color:rgba(255,255,255,.55);font-weight:300;}
.sync-badge{display:flex;align-items:center;gap:6px;font-family:'Barlow Condensed',sans-serif;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:rgba(255,255,255,.8);cursor:pointer;padding:6px 10px;border-radius:var(--radius-sm);border:1px solid rgba(255,255,255,.3);background:rgba(0,0,0,.2);transition:all .2s;}
.sync-badge:hover{background:rgba(0,0,0,.35);border-color:rgba(255,255,255,.6);color:#fff;}
.sync-badge .dot{width:7px;height:7px;border-radius:50%;background:rgba(255,255,255,.4);}
.sync-badge.online .dot{background:#4cca80;box-shadow:0 0 8px #4cca80;}
.sync-badge.pending .dot{background:#ffb020;box-shadow:0 0 8px #ffb020;}
.tabs{display:flex;background:var(--surface);border-bottom:2px solid var(--border);padding:0 16px;gap:4px;overflow-x:auto;scrollbar-width:none;}
.tabs::-webkit-scrollbar{display:none;}
.tab-btn{font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:11px 14px;border:none;background:none;color:var(--text-dim);cursor:pointer;white-space:nowrap;border-bottom:2px solid transparent;margin-bottom:-2px;transition:all .2s;}
.tab-btn.active{color:var(--accent);border-bottom-color:var(--accent);}
.tab-btn:hover:not(.active){color:var(--text-muted);}
.tab-badge{background:var(--accent);color:#fff;border-radius:10px;font-size:9px;padding:1px 5px;margin-left:4px;font-weight:800;}
.main{padding:16px;max-width:700px;margin:0 auto;padding-bottom:40px;}
.view{display:none;}.view.active{display:block;}
.section-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);margin-bottom:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.3);}
.section-header{display:flex;align-items:center;gap:10px;padding:12px 16px;border-bottom:1px solid var(--border);background:var(--surface2);}
.section-icon{font-size:18px;}
.section-title{font-family:'Barlow Condensed',sans-serif;font-size:14px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--accent2);}
.section-body{padding:14px 16px;display:grid;gap:12px;}
.field-group{display:grid;gap:5px;}
.field-label{font-family:'Barlow Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--text-muted);display:flex;align-items:center;gap:6px;}
.field-label .req{color:var(--accent2);}
.field-input,.field-select,.field-textarea{background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text);font-family:'Barlow',sans-serif;font-size:14px;padding:9px 12px;width:100%;transition:border-color .2s,box-shadow .2s;-webkit-appearance:none;}
.field-input:focus,.field-select:focus,.field-textarea:focus{outline:none;border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-glow);}
.search-wrap{position:relative;}
.search-wrap input{padding-left:32px;}
.search-wrap .si{position:absolute;left:10px;top:50%;transform:translateY(-50%);color:var(--text-dim);font-size:14px;pointer-events:none;}
.select-list{position:absolute;z-index:200;top:100%;left:0;right:0;background:var(--surface2);border:1px solid var(--accent);border-top:none;border-radius:0 0 var(--radius-sm) var(--radius-sm);max-height:240px;overflow-y:auto;display:none;box-shadow:0 8px 24px rgba(0,0,0,.5);}
.select-list.open{display:block;}
.select-item{padding:10px 12px;cursor:pointer;font-size:13px;border-bottom:1px solid var(--border);transition:background .15s;}
.select-item:hover,.select-item.focused{background:var(--border);}
.select-item .si-nombre{font-family:'Barlow Condensed',sans-serif;font-weight:700;font-size:14px;color:var(--text);}
.select-item .si-meta{font-size:11px;color:var(--text-dim);margin-top:2px;font-family:'Barlow Condensed',sans-serif;}
.select-item .si-region{display:inline-block;font-size:9px;font-weight:800;letter-spacing:.06em;padding:1px 5px;border-radius:3px;margin-left:6px;text-transform:uppercase;}
.region-METROPOLITANOS{background:rgba(90,180,255,.15);color:var(--blue);}
.region-PERIFERIA{background:rgba(255,176,32,.15);color:var(--yellow);}
.region-NORTE{background:rgba(76,202,128,.15);color:var(--green);}
.region-SUR{background:rgba(255,68,68,.15);color:var(--red);}
.region-ORIENTE{background:rgba(180,120,200,.12);color:#c88cff;}
.region-CITRICOLA{background:rgba(100,200,80,.12);color:#a0dc50;}

/* CC INFO CARD */
.cc-card{background:var(--surface2);border:1px solid var(--accent);border-radius:var(--radius-sm);padding:12px 14px;display:none;box-shadow:0 0 0 1px var(--accent-glow),inset 0 0 40px rgba(241,90,0,.04);}
.cc-card.visible{display:block;}
.cc-card-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;}
.cc-card-nombre{font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:800;color:var(--accent2);line-height:1.2;}
.cc-card-badges{display:flex;gap:5px;flex-wrap:wrap;margin-top:4px;}
.cc-badge{font-family:'Barlow Condensed',sans-serif;font-size:10px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:2px 7px;border-radius:3px;}
.cc-card-rows{display:grid;gap:4px;}
.cc-row{display:flex;gap:8px;align-items:flex-start;font-size:12px;color:var(--text-muted);font-family:'Barlow Condensed',sans-serif;}
.cc-row-label{color:var(--text-dim);min-width:60px;flex-shrink:0;}
.cc-row a{color:var(--accent2);text-decoration:none;}
.cc-row a:hover{text-decoration:underline;}

.field-select{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%239090b8' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 12px center;padding-right:36px;}
.field-select option{background:var(--surface2);}
.field-textarea{resize:vertical;min-height:72px;}
.cols-2{grid-template-columns:1fr 1fr;gap:10px;}
.cols-3{grid-template-columns:1fr 1fr 1fr;gap:8px;}
.semaphore{display:flex;gap:6px;}
.sem-btn{flex:1;padding:8px 4px;border:1px solid var(--border);border-radius:var(--radius-sm);background:var(--bg);color:var(--text-muted);font-family:'Barlow Condensed',sans-serif;font-size:12px;font-weight:700;letter-spacing:.05em;text-transform:uppercase;cursor:pointer;text-align:center;transition:all .18s;display:flex;flex-direction:column;align-items:center;gap:4px;}
.sem-btn .sem-dot{width:10px;height:10px;border-radius:50%;background:currentColor;opacity:.4;}
.sem-btn.active .sem-dot{opacity:1;}
.sem-btn.opt-b.active{border-color:var(--green);color:var(--green);background:rgba(76,202,128,.08);}
.sem-btn.opt-r.active{border-color:var(--yellow);color:var(--yellow);background:rgba(255,176,32,.08);}
.sem-btn.opt-m.active{border-color:var(--red);color:var(--red);background:rgba(255,68,68,.08);}
.sem-btn.opt-na.active{border-color:var(--text-dim);color:var(--text-muted);background:var(--surface2);}
.toggle-group{display:flex;gap:6px;}
.toggle-btn{flex:1;padding:9px;border:1px solid var(--border);border-radius:var(--radius-sm);background:var(--bg);color:var(--text-muted);font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;text-align:center;transition:all .18s;}
.toggle-btn.opt-si.active{border-color:var(--green);color:var(--green);background:rgba(76,202,128,.08);}
.toggle-btn.opt-no.active{border-color:var(--red);color:var(--red);background:rgba(255,68,68,.08);}
.toggle-btn.opt-par.active{border-color:var(--yellow);color:var(--yellow);background:rgba(255,176,32,.08);}
.gps-row{display:flex;gap:8px;align-items:flex-end;}
.gps-display{flex:1;background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);padding:9px 12px;font-size:12px;color:var(--text-muted);font-family:'Barlow Condensed',sans-serif;letter-spacing:.04em;min-height:38px;display:flex;align-items:center;gap:6px;}
.gps-display.got{color:var(--green);border-color:rgba(76,202,128,.3);}
.gps-display.error{color:var(--red);border-color:rgba(255,68,68,.3);}
.btn-gps{background:var(--surface2);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text);font-family:'Barlow Condensed',sans-serif;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:0 14px;height:38px;cursor:pointer;white-space:nowrap;transition:all .2s;display:flex;align-items:center;gap:6px;}
.btn-gps:hover{border-color:var(--accent);color:var(--accent);}
.stepper{display:flex;align-items:center;background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);overflow:hidden;}
.step-btn{width:36px;height:38px;background:var(--surface2);border:none;color:var(--accent);font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .15s;flex-shrink:0;}
.step-btn:hover{background:var(--border);}
.step-val{flex:1;text-align:center;font-family:'Barlow Condensed',sans-serif;font-size:18px;font-weight:700;color:var(--text);border:none;background:none;width:60px;padding:0;}
.risk-checks{display:grid;grid-template-columns:1fr 1fr;gap:6px;}
.risk-item{display:flex;align-items:center;gap:8px;padding:8px 10px;background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);cursor:pointer;transition:all .18s;font-size:12px;color:var(--text-muted);font-family:'Barlow Condensed',sans-serif;font-weight:600;letter-spacing:.04em;user-select:none;}
.risk-item input{display:none;}
.risk-item .risk-icon{font-size:14px;opacity:.5;}
.risk-item.checked{border-color:var(--red);color:var(--red);background:rgba(255,68,68,.07);}
.risk-item.checked .risk-icon{opacity:1;}
.priority-row{display:flex;gap:6px;}
.prio-btn{flex:1;padding:10px 6px;border:1px solid var(--border);border-radius:var(--radius-sm);background:var(--bg);color:var(--text-muted);font-family:'Barlow Condensed',sans-serif;font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;text-align:center;transition:all .18s;}
.prio-btn.opt-p1.active{border-color:var(--red);color:var(--red);background:rgba(255,68,68,.1);}
.prio-btn.opt-p2.active{border-color:var(--yellow);color:var(--yellow);background:rgba(255,176,32,.1);}
.prio-btn.opt-p3.active{border-color:var(--green);color:var(--green);background:rgba(76,202,128,.1);}
.actions-row{display:flex;gap:8px;margin-top:4px;}
.btn-secondary{flex:1;background:var(--surface2);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-muted);font-family:'Barlow Condensed',sans-serif;font-size:14px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:12px;cursor:pointer;transition:all .2s;}
.btn-secondary:hover{border-color:var(--accent);color:var(--accent);}
.btn-primary{flex:2;background:var(--accent);border:none;border-radius:var(--radius-sm);color:#fff;font-family:'Barlow Condensed',sans-serif;font-size:15px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;padding:12px;cursor:pointer;transition:all .2s;}
.btn-primary:hover{background:var(--accent2);}
.btn-primary:disabled{opacity:.4;cursor:not-allowed;}
.queue-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:14px 16px;margin-bottom:10px;position:relative;overflow:hidden;}
.queue-card::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;}
.queue-card.pending::before{background:var(--yellow);}
.queue-card.synced::before{background:var(--green);}
.queue-card.error::before{background:var(--red);}
.queue-meta{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;}
.queue-name{font-family:'Barlow Condensed',sans-serif;font-size:16px;font-weight:700;color:var(--text);}
.queue-time{font-size:11px;color:var(--text-dim);font-family:'Barlow Condensed',sans-serif;}
.queue-status{font-family:'Barlow Condensed',sans-serif;font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:3px 8px;border-radius:4px;}
.queue-card.pending .queue-status{color:var(--yellow);background:rgba(255,176,32,.1);}
.queue-card.synced .queue-status{color:var(--green);background:rgba(76,202,128,.1);}
.queue-card.error .queue-status{color:var(--red);background:rgba(255,68,68,.1);}
.queue-summary{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;}
.queue-chip{font-family:'Barlow Condensed',sans-serif;font-size:11px;letter-spacing:.04em;padding:3px 8px;background:var(--surface2);border:1px solid var(--border);border-radius:4px;color:var(--text-muted);}
.empty-queue{text-align:center;padding:60px 20px;color:var(--text-dim);font-family:'Barlow Condensed',sans-serif;}
.empty-queue .iq{font-size:40px;margin-bottom:12px;}
.empty-queue p{font-size:16px;font-weight:600;letter-spacing:.04em;}
.config-row{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid var(--border);}
.config-row:last-child{border-bottom:none;}
.config-label{font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:600;letter-spacing:.04em;}
.config-val{font-size:12px;color:var(--text-muted);font-family:'Barlow Condensed',sans-serif;}
.toast-container{position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:999;display:flex;flex-direction:column;gap:8px;align-items:center;}
.toast{background:var(--surface2);border:1px solid var(--border);border-radius:var(--radius);padding:10px 18px;font-family:'Barlow Condensed',sans-serif;font-size:13px;font-weight:600;letter-spacing:.04em;color:var(--text);display:flex;align-items:center;gap:8px;box-shadow:0 8px 24px rgba(0,0,0,.4);animation:slideUp .3s ease;white-space:nowrap;}
.toast.success{border-color:rgba(76,202,128,.5);}
.toast.error{border-color:rgba(255,68,68,.5);}
.toast.info{border-color:var(--accent);}
@keyframes slideUp{from{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}
.progress-bar{height:4px;background:var(--border);border-radius:2px;overflow:hidden;margin:4px 0 12px;}
.progress-fill{height:100%;background:linear-gradient(90deg,var(--accent),var(--accent2));border-radius:2px;transition:width .4s ease;box-shadow:0 0 8px var(--accent-glow);}
.acciones-grid{display:grid;gap:8px;}
.accion-item{display:flex;gap:10px;align-items:flex-start;padding:10px 12px;background:var(--bg);border:1px solid var(--border);border-radius:var(--radius-sm);}
.accion-prio{font-family:'Barlow Condensed',sans-serif;font-size:10px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;padding:2px 6px;border-radius:3px;flex-shrink:0;margin-top:1px;}
.accion-prio.p1{background:rgba(255,68,68,.15);color:var(--red);}
.accion-prio.p2{background:rgba(255,176,32,.15);color:var(--yellow);}
.accion-prio.p3{background:rgba(76,202,128,.15);color:var(--green);}
.accion-text{font-size:13px;color:var(--text-muted);}
.divider{height:1px;background:var(--border);margin:4px 0;}
/* ── PROVIDER MULTI-SELECT ── */
.provider-chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:2px;}
.prov-chip{font-family:'Barlow Condensed',sans-serif;font-size:12px;font-weight:700;letter-spacing:.04em;padding:6px 12px;border:1px solid var(--border);border-radius:20px;background:var(--bg);color:var(--text-muted);cursor:pointer;transition:all .18s;user-select:none;}
.prov-chip.active{border-color:var(--accent);color:var(--accent);background:rgba(241,90,0,.1);}
.prov-chip.active-noservice{border-color:var(--red);color:var(--red);background:rgba(255,68,68,.1);}
.provider-speed-row{background:var(--surface2);border:1px solid var(--border);border-radius:var(--radius-sm);padding:10px 12px;margin-top:6px;}
.provider-speed-label{font-family:'Barlow Condensed',sans-serif;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--accent2);margin-bottom:8px;display:flex;align-items:center;gap:6px;}
.provider-speed-label::before{content:'';display:inline-block;width:6px;height:6px;border-radius:50%;background:var(--accent);}
.note-box{background:rgba(241,90,0,.08);border:1px solid rgba(241,90,0,.3);border-radius:var(--radius-sm);padding:10px 12px;font-size:12px;color:var(--accent2);font-family:'Barlow Condensed',sans-serif;letter-spacing:.03em;display:flex;gap:8px;align-items:flex-start;}
.sheet-url-note{background:var(--surface2);border:1px dashed var(--border);border-radius:var(--radius-sm);padding:12px;font-size:12px;color:var(--text-muted);font-family:'Barlow Condensed',sans-serif;word-break:break-all;letter-spacing:.02em;}
.sheet-url-note strong{color:var(--accent);display:block;margin-bottom:4px;font-size:11px;letter-spacing:.08em;text-transform:uppercase;}
@media(max-width:480px){.cols-2,.cols-3{grid-template-columns:1fr;}.risk-checks{grid-template-columns:1fr;}}
</style>
</head>
<body>

<div class="app-header">
  <div class="app-title">CC <span>·</span> Diagnóstico <span style="font-size:12px;margin-left:4px;">NL</span></div>
  <button class="sync-badge" id="syncBadge" onclick="syncPending()">
    <div class="dot" id="syncDot"></div>
    <span id="syncLabel">OFFLINE</span>
  </button>
</div>

<div class="tabs">
  <button class="tab-btn active" onclick="switchTab('form',this)">📋 Captura</button>
  <button class="tab-btn" onclick="switchTab('queue',this)">🗂 Cola <span class="tab-badge" id="queueBadge" style="display:none">0</span></button>
  <button class="tab-btn" onclick="switchTab('config',this)">⚙️ Config</button>
  <button class="tab-btn" onclick="abrirTablero()">📊 Tablero</button>
</div>

<div class="main">

<!-- ══ TAB FORM ══ -->
<div class="view active" id="view-form">
  <div class="progress-bar"><div class="progress-fill" id="progressFill" style="width:0%"></div></div>

  <!-- IDENTIFICACIÓN -->
  <div class="section-card">
    <div class="section-header"><span class="section-icon">🏢</span><span class="section-title">Identificación del Centro</span></div>
    <div class="section-body">

      <!-- BUSCADOR DE CENTROS -->
      <div class="field-group" style="position:relative">
        <label class="field-label">Centro Comunitario <span class="req">*</span></label>
        <div class="search-wrap">
          <span class="si">🔍</span>
          <input type="text" class="field-input" id="centroSearch" placeholder="Buscar centro por nombre o municipio..."
            autocomplete="off" onInput="filterCentros()" onFocus="openList()" onBlur="closeListDelayed()">
        </div>
        <div class="select-list" id="centroList"></div>
        <input type="hidden" id="f_centro_id">
        <input type="hidden" id="f_centro_nombre">
      </div>

      <!-- CARD INFO DEL CC SELECCIONADO -->
      <div class="cc-card" id="ccCard">
        <div class="cc-card-top">
          <div>
            <div class="cc-card-nombre" id="cc_nombre_disp">—</div>
            <div class="cc-card-badges" id="cc_badges"></div>
          </div>
        </div>
        <div class="cc-card-rows" id="cc_rows"></div>
      </div>

      <div class="cols-2">
        <div class="field-group">
          <label class="field-label">Administrador/a <span class="req">*</span></label>
          <input type="text" class="field-input" id="f_admin_nombre" placeholder="Nombre completo" onchange="updateProgress()">
        </div>
        <div class="field-group">
          <label class="field-label">Quien Levanta</label>
          <input type="text" class="field-input" id="f_levanta" placeholder="Tu nombre">
        </div>
      </div>

      <div class="cols-2">
        <div class="field-group">
          <label class="field-label">Tel. Centro</label>
          <input type="tel" class="field-input" id="f_tel_cc" placeholder="8110000000">
        </div>
        <div class="field-group">
          <label class="field-label">Cel. Admin</label>
          <input type="tel" class="field-input" id="f_tel_admin" placeholder="8110000000">
        </div>
      </div>

      <div class="field-group">
        <label class="field-label">📍 Ubicación GPS</label>
        <div class="gps-row">
          <div class="gps-display" id="gpsDisplay">Sin captura</div>
          <button class="btn-gps" onclick="captureGPS()">📡 GPS Real</button>
        </div>
      </div>
      <input type="hidden" id="f_lat">
      <input type="hidden" id="f_lng">

      <div class="cols-2">
        <div class="field-group">
          <label class="field-label">Fecha de Visita</label>
          <input type="date" class="field-input" id="f_fecha">
        </div>
        <div class="field-group">
          <label class="field-label">Hora</label>
          <input type="time" class="field-input" id="f_hora">
        </div>
      </div>
    </div>
  </div>

  <!-- PRIORIDAD -->
  <div class="section-card">
    <div class="section-header"><span class="section-icon">🚦</span><span class="section-title">Prioridad General</span></div>
    <div class="section-body">
      <div class="field-group">
        <label class="field-label">Nivel de Atención Requerida <span class="req">*</span></label>
        <div class="priority-row">
          <button class="prio-btn opt-p1" onclick="selectGroup('prioridad',this,'P1')" data-val="P1">🔴 P1<br><small style="font-size:9px;font-weight:400">URGENTE</small></button>
          <button class="prio-btn opt-p2" onclick="selectGroup('prioridad',this,'P2')" data-val="P2">🟡 P2<br><small style="font-size:9px;font-weight:400">MODERADO</small></button>
          <button class="prio-btn opt-p3" onclick="selectGroup('prioridad',this,'P3')" data-val="P3">🟢 P3<br><small style="font-size:9px;font-weight:400">EN ORDEN</small></button>
        </div>
      </div>
      <input type="hidden" id="f_prioridad">
    </div>
  </div>

  <!-- INFORMÁTICA -->
  <div class="section-card">
    <div class="section-header"><span class="section-icon">💻</span><span class="section-title">Área de Tecnologías / Informática</span></div>
    <div class="section-body">
      <div class="cols-3">
        <div class="field-group">
          <label class="field-label">Aulas Cómputo</label>
          <div class="stepper"><button class="step-btn" onclick="stepVal('f_aulas',-1)">−</button><input type="number" class="step-val" id="f_aulas" value="0" min="0" max="20"><button class="step-btn" onclick="stepVal('f_aulas',1)">+</button></div>
        </div>
        <div class="field-group">
          <label class="field-label">Equip. en Aula</label>
          <div class="stepper"><button class="step-btn" onclick="stepVal('f_eq_aula',-1)">−</button><input type="number" class="step-val" id="f_eq_aula" value="0" min="0" max="100"><button class="step-btn" onclick="stepVal('f_eq_aula',1)">+</button></div>
        </div>
        <div class="field-group">
          <label class="field-label">Equip. Func.</label>
          <div class="stepper"><button class="step-btn" onclick="stepVal('f_eq_func',-1)">−</button><input type="number" class="step-val" id="f_eq_func" value="0" min="0" max="100"><button class="step-btn" onclick="stepVal('f_eq_func',1)">+</button></div>
        </div>
      </div>
      <div class="cols-2">
        <div class="field-group">
          <label class="field-label">Equipos Admin</label>
          <div class="stepper"><button class="step-btn" onclick="stepVal('f_eq_admin',-1)">−</button><input type="number" class="step-val" id="f_eq_admin" value="0" min="0"><button class="step-btn" onclick="stepVal('f_eq_admin',1)">+</button></div>
        </div>
        <div class="field-group">
          <label class="field-label">Equipos Extras</label>
          <div class="stepper"><button class="step-btn" onclick="stepVal('f_eq_extra',-1)">−</button><input type="number" class="step-val" id="f_eq_extra" value="0" min="0"><button class="step-btn" onclick="stepVal('f_eq_extra',1)">+</button></div>
        </div>
      </div>
      <div class="field-group">
        <label class="field-label">Estado General de Equipos</label>
        <div class="semaphore">
          <button class="sem-btn opt-b" onclick="selectSem('eq_estado',this,'Bueno')"><div class="sem-dot"></div>BUENO</button>
          <button class="sem-btn opt-r" onclick="selectSem('eq_estado',this,'Regular')"><div class="sem-dot"></div>REGULAR</button>
          <button class="sem-btn opt-m" onclick="selectSem('eq_estado',this,'Malo')"><div class="sem-dot"></div>MALO</button>
          <button class="sem-btn opt-na" onclick="selectSem('eq_estado',this,'N/A')"><div class="sem-dot"></div>N/A</button>
        </div>
        <input type="hidden" id="f_eq_estado">
      </div>
      <div class="divider"></div>

      <!-- MULTI-SELECT PROVEEDORES -->
      <div class="field-group">
        <label class="field-label">Proveedores de Internet <span style="font-size:10px;color:var(--text-dim)">(selección múltiple)</span></label>
        <div class="provider-chips" id="providerChips"></div>
      </div>

      <!-- VELOCIDADES DINÁMICAS POR PROVEEDOR -->
      <div id="providerSpeeds"></div>
      <div class="field-group">
        <label class="field-label">Calidad Real de la Señal</label>
        <div class="semaphore">
          <button class="sem-btn opt-b" onclick="selectSem('inet_calidad',this,'Buena')"><div class="sem-dot"></div>BUENA</button>
          <button class="sem-btn opt-r" onclick="selectSem('inet_calidad',this,'Regular')"><div class="sem-dot"></div>REGULAR</button>
          <button class="sem-btn opt-m" onclick="selectSem('inet_calidad',this,'Mala')"><div class="sem-dot"></div>MALA</button>
          <button class="sem-btn opt-na" onclick="selectSem('inet_calidad',this,'Sin internet')"><div class="sem-dot"></div>SIN</button>
        </div>
        <input type="hidden" id="f_inet_calidad">
      </div>
      <div class="field-group">
        <label class="field-label">Cobertura en Áreas Comunes</label>
        <div class="toggle-group">
          <button class="toggle-btn opt-si" onclick="selectToggle('inet_cobertura',this,'Sí')">✅ Sí</button>
          <button class="toggle-btn opt-par" onclick="selectToggle('inet_cobertura',this,'Parcial')">⚠️ Parcial</button>
          <button class="toggle-btn opt-no" onclick="selectToggle('inet_cobertura',this,'No')">❌ No</button>
        </div>
        <input type="hidden" id="f_inet_cobertura">
      </div>
      <div class="field-group">
        <label class="field-label">Energía Eléctrica en Aula</label>
        <div class="toggle-group">
          <button class="toggle-btn opt-si" onclick="selectToggle('energia',this,'Estable')">✅ Estable</button>
          <button class="toggle-btn opt-par" onclick="selectToggle('energia',this,'Fallas')">⚠️ Fallas</button>
          <button class="toggle-btn opt-no" onclick="selectToggle('energia',this,'No')">❌ No</button>
        </div>
        <input type="hidden" id="f_energia">
      </div>
      <div class="field-group">
        <label class="field-label">Observaciones TIC</label>
        <textarea class="field-textarea" id="f_obs_tic" placeholder="Equipos con fallas, necesidades de reemplazo, problemas de red..."></textarea>
      </div>
    </div>
  </div>

  <!-- CONDICIONES FÍSICAS -->
  <div class="section-card">
    <div class="section-header"><span class="section-icon">🏗️</span><span class="section-title">Condiciones Físicas del CC</span></div>
    <div class="section-body">
      <div class="cols-2">
        <div class="field-group">
          <label class="field-label">Agua Potable</label>
          <div class="toggle-group">
            <button class="toggle-btn opt-si" onclick="selectToggle('agua',this,'Sí')">✅ Sí</button>
            <button class="toggle-btn opt-no" onclick="selectToggle('agua',this,'No')">❌ No</button>
          </div>
          <input type="hidden" id="f_agua">
        </div>
        <div class="field-group">
          <label class="field-label">Gas</label>
          <div class="toggle-group">
            <button class="toggle-btn opt-si" onclick="selectToggle('gas',this,'Sí')">✅ Sí</button>
            <button class="toggle-btn opt-no" onclick="selectToggle('gas',this,'No')">❌ No</button>
          </div>
          <input type="hidden" id="f_gas">
        </div>
      </div>
      <div class="field-group">
        <label class="field-label">Estado de Baños</label>
        <div class="semaphore">
          <button class="sem-btn opt-b" onclick="selectSem('banos',this,'Bueno')"><div class="sem-dot"></div>BUENO</button>
          <button class="sem-btn opt-r" onclick="selectSem('banos',this,'Regular')"><div class="sem-dot"></div>REGULAR</button>
          <button class="sem-btn opt-m" onclick="selectSem('banos',this,'Malo')"><div class="sem-dot"></div>MALO</button>
        </div>
        <input type="hidden" id="f_banos">
      </div>
      <div class="field-group">
        <label class="field-label">Limpieza General</label>
        <div class="semaphore">
          <button class="sem-btn opt-b" onclick="selectSem('limpieza',this,'Buena')"><div class="sem-dot"></div>BUENA</button>
          <button class="sem-btn opt-r" onclick="selectSem('limpieza',this,'Regular')"><div class="sem-dot"></div>REGULAR</button>
          <button class="sem-btn opt-m" onclick="selectSem('limpieza',this,'Mala')"><div class="sem-dot"></div>MALA</button>
        </div>
        <input type="hidden" id="f_limpieza">
      </div>
      <div class="field-group">
        <label class="field-label">Pintura / Imagen Exterior</label>
        <div class="semaphore">
          <button class="sem-btn opt-b" onclick="selectSem('pintura',this,'Buena')"><div class="sem-dot"></div>BUENA</button>
          <button class="sem-btn opt-r" onclick="selectSem('pintura',this,'Regular')"><div class="sem-dot"></div>REGULAR</button>
          <button class="sem-btn opt-m" onclick="selectSem('pintura',this,'Mala')"><div class="sem-dot"></div>MALA</button>
        </div>
        <input type="hidden" id="f_pintura">
      </div>
      <div class="field-group">
        <label class="field-label">⚠️ Áreas / Situaciones de Riesgo</label>
        <div class="risk-checks" id="riskChecks">
          <label class="risk-item" onclick="toggleRisk(this)"><input type="checkbox" value="Techumbre dañada"><span class="risk-icon">🏚️</span>Techumbre dañada</label>
          <label class="risk-item" onclick="toggleRisk(this)"><input type="checkbox" value="Instalación eléctrica deficiente"><span class="risk-icon">⚡</span>Instalación eléctrica</label>
          <label class="risk-item" onclick="toggleRisk(this)"><input type="checkbox" value="Inundación o humedad severa"><span class="risk-icon">💧</span>Inundación / humedad</label>
          <label class="risk-item" onclick="toggleRisk(this)"><input type="checkbox" value="Accesos bloqueados"><span class="risk-icon">🚪</span>Accesos bloqueados</label>
          <label class="risk-item" onclick="toggleRisk(this)"><input type="checkbox" value="Sin extintores"><span class="risk-icon">🧯</span>Sin extintores</label>
          <label class="risk-item" onclick="toggleRisk(this)"><input type="checkbox" value="Robo o vandalismo reciente"><span class="risk-icon">🚨</span>Robo / vandalismo</label>
          <label class="risk-item" onclick="toggleRisk(this)"><input type="checkbox" value="Fauna o plagas"><span class="risk-icon">🐀</span>Fauna / plagas</label>
          <label class="risk-item" onclick="toggleRisk(this)"><input type="checkbox" value="Otro riesgo"><span class="risk-icon">⚠️</span>Otro riesgo</label>
        </div>
      </div>
      <div class="field-group">
        <label class="field-label">Observaciones Físicas</label>
        <textarea class="field-textarea" id="f_obs_fisico" placeholder="Detalles adicionales de la condición física del CC..."></textarea>
      </div>
    </div>
  </div>

  <!-- ACCIONES -->
  <div class="section-card">
    <div class="section-header"><span class="section-icon">🎯</span><span class="section-title">Acciones Recomendadas</span></div>
    <div class="section-body">
      <div class="note-box">⚡ Se generan automáticamente conforme llenas el formulario.</div>
      <div id="accionesGeneradas" class="acciones-grid" style="margin-top:4px"></div>
      <div class="field-group" style="margin-top:8px">
        <label class="field-label">Acción Adicional</label>
        <textarea class="field-textarea" id="f_acciones_extra" placeholder="Acciones no listadas automáticamente..."></textarea>
      </div>
    </div>
  </div>

  <div class="actions-row">
    <button class="btn-secondary" onclick="resetForm()">🗑 Limpiar</button>
    <button class="btn-primary" id="btnSubmit" onclick="submitForm()">💾 Guardar Registro</button>
  </div>
  <div class="note-box" style="margin-top:12px">ℹ️ Los registros se guardan localmente y se sincronizan cuando hay conexión al servidor.</div>
</div>

<!-- ══ TAB QUEUE ══ -->
<div class="view" id="view-queue">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
    <div style="font-family:'Barlow Condensed',sans-serif;font-size:18px;font-weight:700">Registros</div>
    <div style="display:flex;gap:8px">
      <button class="btn-gps" onclick="forzarResync()" style="font-size:11px">↩ Re-enviar todos</button>
      <button class="btn-gps" onclick="syncPending()" style="font-size:11px">🔄 Sincronizar</button>
    </div>
  </div>
  <div id="queueList"></div>
</div>

<!-- ══ TAB CONFIG ══ -->
<div class="view" id="view-config">
  <div class="section-card">
    <div class="section-header"><span class="section-icon">📊</span><span class="section-title">Estadísticas</span></div>
    <div class="config-row"><span class="config-label">Total centros cargados</span><span class="config-val">49</span></div>
    <div class="config-row"><span class="config-label">Total registros</span><span class="config-val" id="stat-total">0</span></div>
    <div class="config-row"><span class="config-label">Pendientes sync</span><span class="config-val" id="stat-pending">0</span></div>
    <div class="config-row"><span class="config-label">Sincronizados</span><span class="config-val" id="stat-synced">0</span></div>
    <div class="config-row"><span class="config-label">Versión</span><span class="config-val">1.1 · Etapa 1 · 49 CC NL</span></div>
  </div>
  <div style="margin-top:8px"><button class="btn-secondary" style="width:100%" onclick="exportCSV()">⬇️ Exportar CSV local</button></div>
  <div style="margin-top:8px"><button class="btn-secondary" style="width:100%;border-color:rgba(255,68,68,.3);color:var(--red)" onclick="clearAll()">🗑 Borrar todos los registros</button></div>
</div>

</div><!-- /main -->
<div class="toast-container" id="toastContainer"></div>

<script>
// ══ DATOS DE LOS 49 CENTROS ══
const CENTROS_DATA = [
  {"no":1,"nombre":"CC ALFONSO MARTÍNEZ DOMINGUEZ","municipio":"SABINAS HIDALGO","region":"NORTE","tamano":"Mediano","admin":"MAYRA ALEJANDRA GONZÁLEZ CATETE","tel":"01824-2425115","cel":"8241047583","correo":"ale-gonzalez300198@hotmail.com","domicilio":"CALLE MIER Y TERAN No. 1500, ENTRE PABLO LIVAS Y RAUL RANGEL, COL. ALFONSO MARTINEZ DOMINGUEZ","lat":26.510997609851870,"lng":-100.205693000131816,"ubicacion":"https://tinyurl.com/28xg5wgr"},
  {"no":2,"nombre":"CC ALIANZA REAL","municipio":"ESCOBEDO","region":"METROPOLITANOS","tamano":"Mediano","admin":"MELISSA OFELIA LÓPEZ HERNÁNDEZ","tel":"","cel":"8117100949","correo":"ccdsalianzareal@gmail.com","domicilio":"CALLE JUAREZ S/N ENTRE ART. 5 Y CAMINO A SAN MIGUEL COL. ALIANZA REAL C.P. 66084","lat":25.844857060205243,"lng":-100.384918299839626,"ubicacion":"https://tinyurl.com/2xz3scte"},
  {"no":3,"nombre":"CC ALIANZA SECTOR Q","municipio":"MONTERREY","region":"METROPOLITANOS","tamano":"Pequeño","admin":"MARÍA ANTONIA BANDA PÉREZ","tel":"8136712334, 8183919818","cel":"8132646800","correo":"ccsectorq@gmail.com","domicilio":"CALLE PRENSISTAS S/N ESQ. ESTIBADORES COL. LA ALIANZA SECTOR Q C.P. 64103","lat":25.776751630083709,"lng":-100.405971300335182,"ubicacion":"https://tinyurl.com/27dfyx6u"},
  {"no":4,"nombre":"CC ALLENDE","municipio":"ALLENDE","region":"CITRICOLA","tamano":"Mediano","admin":"EVA HERNÁNDEZ TAMEZ","tel":"18261090744","cel":"","correo":"ccallende2010@gmail.com","domicilio":"CALLE BERNARDINO CAVAZOS S/N ESQ. CALLE GARDENIA COL. LAS BUGAMBILIAS C.P. 67350","lat":25.295999009646607,"lng":-100.033390800245172,"ubicacion":"https://tinyurl.com/2caxrscf"},
  {"no":5,"nombre":"CC ARBOLEDAS DE LOS NARANJOS (INTERCULTURAL)","municipio":"JUÁREZ","region":"PERIFERIA","tamano":"Mediano","admin":"VELIA DINA GONZÁLEZ AGUILAR","tel":"8140897187","cel":"8281181283","correo":"ccnaranjos1@gmail.com","domicilio":"CALLE LOMAS DE FRANCIA S/N ESQ. CON LOMAS DE MÉXICO Y LOMAS DE ECUADOR COL. LOS NARANJOS C.P. 67280","lat":25.628695530274570,"lng":-100.167387699582662,"ubicacion":"https://tinyurl.com/2734pt22"},
  {"no":6,"nombre":"CC CADEREYTA","municipio":"CADEREYTA","region":"PERIFERIA","tamano":"Mediano","admin":"HILDA HERNÁNDEZ GARZA (ENCARGADA)","tel":"01828-269-6152","cel":"8281442627","correo":"hildahdzgarza07@gmail.com","domicilio":"CALLE JOSE S. VIVANCO S/N ENTRE GRAL. BONIFACIO SALINAS Y GRAL. ANACLETO GUERRERO COL. CARLOS SALINAS DE GORTARI C.P. 67484","lat":25.560916150260198,"lng":-99.980584400249825,"ubicacion":"https://tinyurl.com/2c6c5y9r"},
  {"no":7,"nombre":"CC CERRALVO","municipio":"CERRALVO","region":"ORIENTE","tamano":"Mediano","admin":"MARÍA LUISA GARZA MTZ.","tel":"01892-975-1569","cel":"8921002585","correo":"cerralvoccds@gmail.com","domicilio":"CALLE GARZA AYALA S/N COL. POPULAR 1ER SECTOR","lat":26.078196209587475,"lng":-99.618754480434916,"ubicacion":"https://tinyurl.com/23ghndam"},
  {"no":8,"nombre":"CC CHINA","municipio":"CHINA","region":"ORIENTE","tamano":"Mediano","admin":"JOSUÉ ZACUR CANTÚ RODRÍGUEZ","tel":"01823-232-1635","cel":"8681259104","correo":"centrocomunitariochina@gmail.com","domicilio":"ALFREDO V. BONFIL S/N ESQ. CALLE 5 DE MAYO COL. LA LAGUNA #400 C.P. 67050","lat":25.702908890432980,"lng":-99.232918110082664,"ubicacion":"https://tinyurl.com/2xwd2hjl"},
  {"no":9,"nombre":"CC EL CARMEN","municipio":"EL CARMEN","region":"PERIFERIA","tamano":"Mediano","admin":"ÁNGELES AZENETH HERNÁNDEZ GUTIÉRREZ (ENCARGADA)","tel":"8113396298","cel":"8119786900","correo":"centrocomunitarioelcarmen@gmail.com","domicilio":"CALLE LERDO DE TEJADA S/N ESQ. CALLE 5 DE MAYO CABECERA MUNICIPAL","lat":25.939170900316867,"lng":-100.362835400233507,"ubicacion":"https://tinyurl.com/299quczx"},
  {"no":10,"nombre":"CC EL MIRADOR","municipio":"MONTERREY","region":"METROPOLITANOS","tamano":"","admin":"ADRIANA DÁVILA BENAVIDES","tel":"","cel":"8110766839","correo":"","domicilio":"CALLE BRUSELAS 906, COL. EL MIRADOR, MTY., N.L. C.P. 64070","lat":25.668854279601362,"lng":-100.333368000033147,"ubicacion":"https://maps.app.goo.gl/eUmyRs8UZrV82qE59"},
  {"no":11,"nombre":"CC EULALIO VILLARREAL","municipio":"ESCOBEDO","region":"METROPOLITANOS","tamano":"Mediano","admin":"GRISELDA FRANCISCA SOTO ROMO","tel":"8184522978","cel":"8126571338","correo":"cc.eulalio.villarreal19@gmail.com","domicilio":"CALLE DR. ARROYO S/N ENTRE VILLA DE SANTIAGO Y DR. COSS COL. EULALIO VILLARREAL C.P. 66065","lat":25.805332469617838,"lng":-100.370419400135177,"ubicacion":"https://tinyurl.com/2amunlty"},
  {"no":12,"nombre":"CC FERNANDO AMILPA (INTERCULTURAL)","municipio":"ESCOBEDO","region":"METROPOLITANOS","tamano":"Mediano","admin":"MARIO ALBERTO MIRELES SALAS","tel":"818237-3509","cel":"8112780535","correo":"ccfernandoamilpa5@gmail.com","domicilio":"CALLE BLAS CHUMACERO S/N Y CALLE PESQUERIA COL. FERNANDO AMILPA C.P. 66052","lat":25.806001360174662,"lng":-100.270280400220258,"ubicacion":"https://tinyurl.com/2yedavjg"},
  {"no":13,"nombre":"CC GALEANA","municipio":"GALEANA","region":"SUR","tamano":"Mediano","admin":"CARLOS EDUARDO BARCENAS ZACARÍAS","tel":"","cel":"8180997086","correo":"ccgaleanalibertad@gmail.com","domicilio":"Carretera 18 de Marzo, Colonia Las Cordeladas, Galeana, N.L. C.P. 67850","lat":24.798108490114771,"lng":-100.059058400224956,"ubicacion":"https://tinyurl.com/23v6fgt4"},
  {"no":14,"nombre":"CC GRAL. TERÁN","municipio":"GRAL. TERAN","region":"CITRICOLA","tamano":"Mediano","admin":"FERNANDO ELÍAS CALLES","tel":"","cel":"8261274359","correo":"centrocomunitarioteran@gmail.com","domicilio":"AV. CITRICULTORES S/N ESQ. CALLE CAPILLA COL. CITRICULTORES","lat":25.248722920426474,"lng":-99.703365470240215,"ubicacion":"https://tinyurl.com/2ynwsohb"},
  {"no":15,"nombre":"CC GRAL. ZUAZUA","municipio":"GRAL. ZUAZUA","region":"PERIFERIA","tamano":"Mediano","admin":"SUSANA GUADALUPE GONZÁLEZ","tel":"","cel":"","correo":"cc.gralzuazua@gmail.com","domicilio":"AV. REFORMA S/N ENTRE AV. REAL DE PALMAS Y PASEO DE LAS PALMAS","lat":25.891138349954929,"lng":-100.176639699962152,"ubicacion":"https://tinyurl.com/2yv2oc6s"},
  {"no":16,"nombre":"CC HÉCTOR CABALLERO (INTERCULTURAL)","municipio":"JUÁREZ","region":"PERIFERIA","tamano":"Grande","admin":"JUAN ALBERTO TORRES MORENO","tel":"8188616983","cel":"8117519783","correo":"comunitario.hcaballero@gmail.com","domicilio":"CALLE JAZMIN S/N ENTRE CALLE COPA DE ORO Y CAMINO A ZIRÁNDARO COL. HECTOR CABALLERO C.P. 67275","lat":25.634891319578799,"lng":-100.129500000124892,"ubicacion":"https://tinyurl.com/22opfzlv"},
  {"no":17,"nombre":"CC HIGUERAS","municipio":"HIGUERAS","region":"PERIFERIA","tamano":"Mediano","admin":"TERESITA DE JESÚS VILLARREAL VELIZ","tel":"8252482078","cel":"8116285353","correo":"comunitario.higueras@gmail.com","domicilio":"CARRETERA ZUAZUA-HIGUERAS CRUZ CON CARRETERA MARIN-HIGUERAS S/N COL. RUPERTO MARTINEZ","lat":25.954168400351421,"lng":-100.014110199825836,"ubicacion":"https://tinyurl.com/2dgtg29j"},
  {"no":18,"nombre":"CC INDEPENDENCIA (BICENTENARIO)","municipio":"MONTERREY","region":"METROPOLITANOS","tamano":"Grande","admin":"FÁTIMA ANZURES ESPARZA","tel":"8120207876","cel":"8115334556","correo":"adm.ccindependencia@gmail.com","domicilio":"CALLE JALISCO S/N ENTRE LAGO DE PÁTZCUARO Y LAGUNA DE SAN MARCOS COL. TANQUES DE GUADALUPE C.P. 64720","lat":25.651497169858544,"lng":-100.314473099953545,"ubicacion":"https://tinyurl.com/236ftckj"},
  {"no":19,"nombre":"CC LA ALIANZA","municipio":"MONTERREY","region":"METROPOLITANOS","tamano":"Grande","admin":"EDUARDO GONZALEZ HERNÁNDEZ","tel":"811 088 64 29","cel":"8128730582","correo":"cclaalianza@gmail.com","domicilio":"AVENIDA SAN BERNABE S/N ESQ. CALLE MAR DE ARAL COL. LA ALIANZA C.P. 64103","lat":25.775831600248182,"lng":-100.415970800112291,"ubicacion":"https://tinyurl.com/28m7kb4x"},
  {"no":20,"nombre":"CC LA ERMITA (INTERCULTURAL)","municipio":"SANTA CATARINA","region":"METROPOLITANOS","tamano":"Mediano","admin":"MARÍA MARCELA SALAZAR MARTÍNEZ","tel":"8113375330","cel":"8120313252","correo":"cc.ermita@gmail.com","domicilio":"CALLE SAN PATRICIO S/N ENTRE SAN HERIBERTO Y SAN HUMBERTO COL. LA ERMITA C.P. 66129","lat":25.698834510104632,"lng":-100.432420699855356,"ubicacion":"https://tinyurl.com/2aszudar"},
  {"no":21,"nombre":"CC LA ESTANZUELA","municipio":"MONTERREY","region":"METROPOLITANOS","tamano":"","admin":"CELESTE ALEJANDRA LEAL CÁRDENAS","tel":"","cel":"8110362376","correo":"","domicilio":"CALLE ÁLAMOS 1601, COL. LA ESTANZUELA, MTY, N.L., C.P. 64988","lat":25.583818100225187,"lng":-100.237314700213233,"ubicacion":"https://maps.app.goo.gl/8X3zp1D8dh5dUu8v8"},
  {"no":22,"nombre":"CC LAS SABINAS","municipio":"GUADALUPE","region":"METROPOLITANOS","tamano":"Mediano","admin":"FLOR ESTHELA GUZMÁN PÉREZ","tel":"14400118","cel":"","correo":"cclassabinas2019@gmail.com","domicilio":"CALLE LA VENTA S/N ENTRE TULA Y MÉXICO COL. LAS SABINAS C.P. 67168","lat":25.689585300321426,"lng":-100.193562299560426,"ubicacion":"https://tinyurl.com/2ynjmqjq"},
  {"no":23,"nombre":"CC LINARES","municipio":"LINARES","region":"CITRICOLA","tamano":"Mediano","admin":"JORGE MORENO","tel":"01821-2141932","cel":"8211198550","correo":"ccdslinares03@gmail.com","domicilio":"AV. FRANCISCO VILLA S/N ENTRE LUCIO BLANCO Y SANTOS DEGOLLADO EJ. LA PETACA","lat":24.860198849697213,"lng":-99.534222790149613,"ubicacion":"https://tinyurl.com/29twtujk"},
  {"no":24,"nombre":"CC LINARES LIBERTAD","municipio":"LINARES","region":"CITRICOLA","tamano":"Mediano","admin":"MARTHA LUCINDA ELIZONDO DE LA VEGA","tel":"821-110-1049","cel":"8211177497","correo":"linareslibertad2022@gmail.com","domicilio":"CALLE TATA NACHO ENTRE EDUARDO ELIZONDO Y ARMANDO MANZANERO COL. RIVERAS DE SAN ANTONIO","lat":24.847473840245584,"lng":-99.555224139882114,"ubicacion":"https://tinyurl.com/2xmwuceq"},
  {"no":25,"nombre":"CC LOMA CHIQUITA","municipio":"MONTERREY","region":"METROPOLITANOS","tamano":"Mediano","admin":"JUANA MARIA PLATAFLORES","tel":"84530618","cel":"8184588517","correo":"ccrenealvarez@gmail.com","domicilio":"LOMA CHIQUITA 4701, LOMAS MODELO NTE., C.P. 64160, MONTERREY, N.L.","lat":25.730325650208613,"lng":-100.354407599730905,"ubicacion":"https://maps.app.goo.gl/sgammvW5SMdRPuWv5"},
  {"no":26,"nombre":"CC LOMAS DE LA FAMA (INTERCULTURAL)","municipio":"SANTA CATARINA","region":"METROPOLITANOS","tamano":"Mediano","admin":"OLGA LIDIA SÁNCHEZ CARMONA","tel":"818308-2544","cel":"8124662208","correo":"comunitariolomasdelafama@gmail.com","domicilio":"CALLE LOMA DE SANTA CATARINA S/N ENTRE LOMA GRANDE Y LOMA CHICA COL. LOMAS DE LA FAMA C.P. 66119","lat":25.691472050095115,"lng":-100.420564799725696,"ubicacion":"https://tinyurl.com/256wxxk9"},
  {"no":27,"nombre":"CC LOS ENCINOS","municipio":"JUÁREZ","region":"PERIFERIA","tamano":"Grande","admin":"MONICA GTZ","tel":"","cel":"","correo":"ccds.encinos@gmail.com","domicilio":"CALLE PIRUL No. 124 ENTRE AV. LOS ENCINOS Y CALLE MEZQUITE COL. LOS ENCINOS C.P. 67275","lat":25.643775380329600,"lng":-100.117525099903389,"ubicacion":"https://tinyurl.com/28hk33c9"},
  {"no":28,"nombre":"CC MONTE KRISTAL","municipio":"JUÁREZ","region":"PERIFERIA","tamano":"Grande","admin":"ANDRES NAHUN ALARCÓN ARCOS","tel":"8120338718","cel":"8113012118","correo":"ccmontekristal@gmail.com","domicilio":"AV. MONTE KRISTAL S/N ESQ. AV. MONTE ROCIO COL. CERRO DE LA SILLA C.P. 67280","lat":25.618884010388797,"lng":-100.146027800042930,"ubicacion":"https://tinyurl.com/277em25f"},
  {"no":29,"nombre":"CC MONTEMORELOS","municipio":"MONTEMORELOS","region":"CITRICOLA","tamano":"Mediano","admin":"FERNANDO IVÁN RODRÍGUEZ GONZÁLEZ (ENCARGADO)","tel":"8266884046","cel":"8261549748","correo":"ccds.mmorelos@gmail.com","domicilio":"ALFONSO MARTINEZ DOMINGUEZ S/N ESQ. PLUTARCO ELIAS CALLES COL. INFONAVIT ANTONIO I. VILLARREAL 1 SECTOR C.P. 67543","lat":25.189476409608687,"lng":-99.807866309782355,"ubicacion":"https://tinyurl.com/25cy3mtx"},
  {"no":30,"nombre":"CC PESQUERÍA","municipio":"PESQUERÍA","region":"PERIFERIA","tamano":"Mediano","admin":"JUDITH VANESSA CEDILLO OLVERA","tel":"5244-0917","cel":"8119932956","correo":"ccpesqueria@gmail.com","domicilio":"CALLE JOSÉ LOPEZ PORTILLO S/N, ENTRE BATALLON DE SAN BLAS Y GENERAL GOMEZ CABECERA MUNICIPAL C.P 66650","lat":25.790222199994560,"lng":-100.046473899950513,"ubicacion":"https://tinyurl.com/275dfha5"},
  {"no":31,"nombre":"CC PRADOS DE SANTA ROSA","municipio":"APODACA","region":"METROPOLITANOS","tamano":"Mediano","admin":"MAYRA LETICIA ALDAPE ACOSTA","tel":"818148-7576","cel":"8128850747","correo":"c.c.pradosdesantarosa@gmail.com","domicilio":"CALLE PIRUL S/N ENTRE LAUREL Y TRUENO COL. PRADOS DE SANTA ROSA C.P. 66610","lat":25.799917139864192,"lng":-100.225754599694994,"ubicacion":"https://tinyurl.com/22voj63j"},
  {"no":32,"nombre":"CC RENÉ ÁLVAREZ","municipio":"MONTERREY","region":"METROPOLITANOS","tamano":"Pequeño","admin":"JUANA MARIA PLATAFLORES","tel":"811087-0851","cel":"8184588517","correo":"ccrenealvarez@gmail.com","domicilio":"CALLE FRIJOL S/N ESQ. CALLE FEDERAL COL. RENE ALVAREZ C.P. 64215","lat":25.765387159989473,"lng":-100.358447199678494,"ubicacion":"https://tinyurl.com/28pnb6p6"},
  {"no":33,"nombre":"CC REVOLUCIÓN PROLETARIA","municipio":"MONTERREY","region":"METROPOLITANOS","tamano":"Mediano","admin":"LUIS ALBERTO MONTAÑEZ GUERRERO","tel":"8122323279","cel":"8111658418","correo":"revolucionproletariacc@gmail.com","domicilio":"CALLE PALMA S/N ESQ. CALLE INSURGENTES COL. REVOLUCION PROLETARIA","lat":25.633553440438959,"lng":-100.288808599936885,"ubicacion":"https://tinyurl.com/2awqd8js"},
  {"no":34,"nombre":"CC SABINAS HIDALGO","municipio":"SABINAS HIDALGO","region":"NORTE","tamano":"Mediano","admin":"LORENA GONZÁLEZ HINOJOSA","tel":"01824-2455010","cel":"8241040876","correo":"ccsabinashidalgo@gmail.com","domicilio":"AV. INSURGENTES S/N ESQ. GASPAR IBARRA COL. MIGUEL HIDALGO","lat":26.523114909625406,"lng":-100.166786699746353,"ubicacion":"https://tinyurl.com/24effms6"},
  {"no":35,"nombre":"CC SALINAS VICTORIA","municipio":"SALINAS VICTORIA","region":"PERIFERIA","tamano":"Mediano","admin":"SANDRA LETICIA REYNA LIMÓN","tel":"8111009578","cel":"8124667619","correo":"comunitario.salinasv@gmail.com","domicilio":"CALLE FRANCISCO VILLA S/N ENTRE SERAFIN ROBLES Y GRAL. AMADOR SALAZAR COL. EMILIANO ZAPATA","lat":25.909408429855205,"lng":-100.272581900234456,"ubicacion":"https://tinyurl.com/25cz4cab"},
  {"no":36,"nombre":"CC SAN BERNABÉ (MACRO CC CULTURAL Y DEPORTIVO)","municipio":"MONTERREY","region":"METROPOLITANOS","tamano":"Grande","admin":"ALONDRA MARIBEL GARCIA ROJAS","tel":"8126412504","cel":"","correo":"ccmtysanbernabe@gmail.com","domicilio":"APOLO S/N ESQ. CON PROLONGACIÓN AZTLAN COL SAN BERNABÉ","lat":25.765276760114432,"lng":-100.369836699703910,"ubicacion":"https://tinyurl.com/288k7hgs"},
  {"no":37,"nombre":"CC SAN GILBERTO","municipio":"SANTA CATARINA","region":"METROPOLITANOS","tamano":"Mediano","admin":"TANIA PATRICIA MORA FRAGA","tel":"811338-4009","cel":"8112275811","correo":"ccdssangilberto@gmail.com","domicilio":"CALLE SAN JUAN DE LOS LAGOS S/N ESQ. CON SAN MIGUEL DE ALLENDE COL. SAN GILBERTO C.P. 66369","lat":25.700861099959866,"lng":-100.459666699958177,"ubicacion":"https://tinyurl.com/23qbo9la"},
  {"no":38,"nombre":"CC SANTA FÉ","municipio":"APODACA","region":"METROPOLITANOS","tamano":"Grande","admin":"PERLA AHIDÉ RODRÍGUEZ TREVIÑO / MÓNICA IRAZEMA GARCÍA CAVAZOS","tel":"818240-5925","cel":"","correo":"cc.santafenl@gmail.com","domicilio":"AVE. DEL TELEFONO S/N ENTRE ALBUQUERQUE Y URUGUAYOS COL. SANTA FE","lat":25.726333860019679,"lng":-100.173616399577156,"ubicacion":"https://tinyurl.com/23x6pdyo"},
  {"no":39,"nombre":"CC SANTIAGO","municipio":"SANTIAGO","region":"CITRICOLA","tamano":"Mediano","admin":"ANA LUISA BARROS ALANÍS","tel":"24502440","cel":"8262655931","correo":"ccsantiago021@gmail.com","domicilio":"CALLE CENTRAL S/N ENTRE HIDALGO Y MEXICO CONGREGACION SAN PEDRO C.P. 67300","lat":25.377331840192312,"lng":-100.113810399830072,"ubicacion":"https://tinyurl.com/2c6cbduk"},
  {"no":40,"nombre":"CC SIERRA VENTANA","municipio":"MONTERREY","region":"METROPOLITANOS","tamano":"Mediano","admin":"FELIPE NACIANCENO LUNA","tel":"8110957131","cel":"8110174386","correo":"sdsccsv@gmail.com","domicilio":"CALLE 21 DE MARZO No. 2330 ENTRE 1 DE ENERO Y JOSEFA ORTIZ DE DOMINGUEZ COL. SIERRA VENTANA C.P. 64780","lat":25.628133970206591,"lng":-100.288197499814714,"ubicacion":"https://tinyurl.com/2cz5cqwv"},
  {"no":41,"nombre":"CC TIERRA PROPIA","municipio":"GUADALUPE","region":"METROPOLITANOS","tamano":"Mediano","admin":"VANESA HERNANDEZ","tel":"8183265271","cel":"8116318779","correo":"centrocomunitariotierrapropia@gmail.com","domicilio":"CALLE ACATIL S/N ESQ. CON TEQUILA COL. TIERRA PROPIA C.P. 67197","lat":25.641525899800513,"lng":-100.189807999639413,"ubicacion":"https://tinyurl.com/2aztgqy4"},
  {"no":42,"nombre":"CC TOPO CHICO","municipio":"MONTERREY","region":"METROPOLITANOS","tamano":"","admin":"YESSICA CORTEZ","tel":"","cel":"8115370432","correo":"","domicilio":"CALLE PALACIO DE JUSTICIA 5101-C, COL. TOPO CHICO, MTY., N.L. C.P. 64180","lat":25.725946700080215,"lng":-100.344326199594377,"ubicacion":"https://maps.app.goo.gl/SSyC6xNaBdY5XpsQ8"},
  {"no":43,"nombre":"CC UNIDAD PILOTO","municipio":"GUADALUPE","region":"METROPOLITANOS","tamano":"Mediano","admin":"MIGUEL DANIEL MANTECÓN","tel":"8189008654","cel":"8115831026","correo":"cc.unidadpiloto@gmail.com","domicilio":"CALLE MARIANO ESCOBEDO S/N ENTRE FRANCISCO SARABIA Y CALLE HUMBERTO CERVANTES VEGA COL. UNIDAD PILOTO C.P. 67186","lat":25.644229449829311,"lng":-100.215360200412874,"ubicacion":"https://tinyurl.com/269l2f7c"},
  {"no":44,"nombre":"CC VALLE DE LA ESPERANZA (INTERCULTURAL)","municipio":"MONTERREY","region":"METROPOLITANOS","tamano":"Mediano","admin":"MARGARITA ESPINOSA VILLANUEVA","tel":"8181020969","cel":"8128909978","correo":"ccvalledelaesperanza@gmail.com","domicilio":"CALLE PARQUE TARAHUMARA S/N ENTRE TRIGAL Y PRADERA COL. VALLE DE LA ESPERANZA C.P. 64103","lat":25.783168370224132,"lng":-100.401585400246006,"ubicacion":"https://tinyurl.com/25b2gzum"},
  {"no":45,"nombre":"CC VALLE SOLEADO","municipio":"GUADALUPE","region":"METROPOLITANOS","tamano":"Mediano","admin":"SIRIA YARESI HARO MONTEJANO","tel":"84530618","cel":"8127613003","correo":"ccvallesoleado1@gmail.com","domicilio":"CALLE VALLE DE COLIBRI S/N ESQ. CALLE VALLE VEGA COL. VALLE SOLEADO C.P. 67130","lat":25.704080879728849,"lng":-100.169583299929286,"ubicacion":"https://tinyurl.com/2djv22s9"},
  {"no":46,"nombre":"CC ZARAGOZA","municipio":"ZARAGOZA","region":"SUR","tamano":"","admin":"","tel":"","cel":"","correo":"","domicilio":"COMUNIDAD LA MESILLA, ZARAGOZA, N.L. C.P. 67960","lat":23.963608599557290,"lng":-99.761378540187422,"ubicacion":""},
  {"no":47,"nombre":"MACROCENTRO COMUNITARIO ALLENDE","municipio":"ALLENDE","region":"CITRICOLA","tamano":"","admin":"","tel":"","cel":"","correo":"","domicilio":"CALLE ESCOBEDO S/N ENTRE INDEPENDENCIA Y ALDAMA","lat":25.300962809586053,"lng":-100.031416300022215,"ubicacion":""},
  {"no":48,"nombre":"CC MIER Y NORIEGA","municipio":"MIER Y NORIEGA","region":"SUR","tamano":"","admin":"","tel":"","cel":"","correo":"","domicilio":"CALLE ÁLVARO OBREGÓN ESQUINA CON ZARAGOZA S/N","lat":23.427238679721370,"lng":-100.119520899669737,"ubicacion":""},
  {"no":49,"nombre":"CC BUSTAMANTE","municipio":"BUSTAMANTE","region":"NORTE","tamano":"","admin":"","tel":"","cel":"","correo":"","domicilio":"ESCOBEDO S/N ENTRE INDEPENDENCIA Y ALDAMA, CENTRO, BUSTAMANTE, N.L. C.P. 65150","lat":26.534357990129195,"lng":-100.500398599815469,"ubicacion":""}
];

const REGION_LABEL = {
  'METROPOLITANOS':'AMM', 'PERIFERIA':'Periferia', 'NORTE':'Norte',
  'SUR':'Sur', 'ORIENTE':'Oriente', 'CITRICOLA':'Citrícola'
};

// ══ PROVEEDORES MULTI-SELECT ══
const PROVEEDORES = [
  'Telmex / Infinitum','Megacable','Totalplay','Axtel',
  'IZZI','Starlink','CFE','Conéctate NL','Sin servicio','Otro'
];
let selectedProviders = [];

function initProviderChips() {
  const container = document.getElementById('providerChips');
  container.innerHTML = PROVEEDORES.map(p => `
    <button type="button" class="prov-chip${p==='Sin servicio'?' active-noservice-base':''}"
      data-proveedor="${p}" onclick="toggleProvider('${p}')">${p}</button>
  `).join('');
}

function toggleProvider(proveedor) {
  if (proveedor === 'Sin servicio') {
    if (selectedProviders.includes('Sin servicio')) {
      selectedProviders = [];
    } else {
      selectedProviders = ['Sin servicio'];
    }
  } else {
    selectedProviders = selectedProviders.filter(p => p !== 'Sin servicio');
    if (selectedProviders.includes(proveedor)) {
      selectedProviders = selectedProviders.filter(p => p !== proveedor);
    } else {
      selectedProviders.push(proveedor);
    }
  }
  updateProviderUI();
}

function updateProviderUI() {
  // Actualizar chips
  document.querySelectorAll('.prov-chip').forEach(chip => {
    const p = chip.dataset.proveedor;
    chip.classList.remove('active','active-noservice');
    if (p === 'Sin servicio' && selectedProviders.includes('Sin servicio')) {
      chip.classList.add('active-noservice');
    } else if (selectedProviders.includes(p)) {
      chip.classList.add('active');
    }
  });

  // Actualizar filas de velocidad
  const container = document.getElementById('providerSpeeds');
  const provWithSpeed = selectedProviders.filter(p => p !== 'Sin servicio');
  container.innerHTML = provWithSpeed.map(p => {
    const key = p.replace(/[^a-zA-Z0-9]/g,'_');
    return `
      <div class="provider-speed-row">
        <div class="provider-speed-label">${p}</div>
        <div class="cols-2">
          <div class="field-group">
            <label class="field-label">Bajada (Mbps)</label>
            <input type="number" class="field-input" id="vel_b_${key}" placeholder="ej. 25" min="0" step="0.1">
          </div>
          <div class="field-group">
            <label class="field-label">Subida (Mbps)</label>
            <input type="number" class="field-input" id="vel_s_${key}" placeholder="ej. 5" min="0" step="0.1">
          </div>
        </div>
      </div>`;
  }).join('');
}

function getProveedoresData() {
  return selectedProviders.map(p => {
    if (p === 'Sin servicio') return { proveedor: p, bajada: '', subida: '' };
    const key = p.replace(/[^a-zA-Z0-9]/g,'_');
    return {
      proveedor: p,
      bajada: document.getElementById(`vel_b_${key}`)?.value || '',
      subida: document.getElementById(`vel_s_${key}`)?.value || ''
    };
  });
}
let queue = JSON.parse(localStorage.getItem('cc_queue')||'[]');
let config = JSON.parse(localStorage.getItem('cc_config')||'{}');
let isOnline = navigator.onLine;
let selectedCC = null;
let listOpen = false;

// ══ URL FIJA DEL APPS SCRIPT ══
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzFQnMLAcjEOtjirNycddjBzvkUEWx_SGazT--pHshQAYNYmzAXX6T1T5th1XN4LNlF8w/exec';

// ══ INIT ══
document.addEventListener('DOMContentLoaded', ()=>{
  const now = new Date();
  document.getElementById('f_fecha').value = now.toISOString().split('T')[0];
  document.getElementById('f_hora').value = now.toTimeString().slice(0,5);
  // URL fija — no necesita configuración manual
  config.scriptUrl = APPS_SCRIPT_URL;
  saveConfig();
  updateSyncBadge(); updateQueueBadge(); updateStats();
  renderAllItems('');
  initProviderChips();
  // Intentar sincronizar pendientes al iniciar si hay conexión
  if(isOnline && queue.filter(r=>r.status==='pending').length > 0){
    setTimeout(syncPending, 1500);
  }
});
window.addEventListener('online',()=>{ isOnline=true; updateSyncBadge(); syncPending(); });
window.addEventListener('offline',()=>{ isOnline=false; updateSyncBadge(); });

// ══ TABS ══
function switchTab(view, btn){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('view-'+view).classList.add('active');
  btn.classList.add('active');
  if(view==='queue') renderQueue();
  if(view==='config') updateStats();
}

// Abre tablero sin romper la PWA
function abrirTablero(){
  window.location.href = 'tablero_cc.html';
}

// ══ BUSCADOR DE CENTROS ══
function renderAllItems(query){
  const list = document.getElementById('centroList');
  const q = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  const matches = CENTROS_DATA.filter(c=>{
    const hay = (c.nombre+' '+c.municipio+' '+c.region).toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    return hay.includes(q);
  });
  list.innerHTML = matches.map(c=>`
    <div class="select-item" data-no="${c.no}" onclick="selectCentro(${c.no})">
      <div class="si-nombre">${c.nombre}
        <span class="si-region region-${c.region}">${REGION_LABEL[c.region]||c.region}</span>
        ${c.tamano?`<span class="si-region" style="background:rgba(255,255,255,.06);color:var(--text-dim)">${c.tamano}</span>`:''}
      </div>
      <div class="si-meta">📍 ${c.municipio} &nbsp;·&nbsp; ${c.admin||'Sin admin registrado'}</div>
    </div>
  `).join('') || '<div class="select-item"><div class="si-meta">Sin resultados</div></div>';
}

function filterCentros(){
  renderAllItems(document.getElementById('centroSearch').value);
  document.getElementById('centroList').classList.add('open');
}

function openList(){
  document.getElementById('centroList').classList.add('open');
  listOpen = true;
}

function closeListDelayed(){
  setTimeout(()=>{
    document.getElementById('centroList').classList.remove('open');
    listOpen = false;
  }, 200);
}

function selectCentro(no){
  const cc = CENTROS_DATA.find(c=>c.no===no);
  if(!cc) return;
  selectedCC = cc;

  document.getElementById('centroSearch').value = cc.nombre;
  document.getElementById('f_centro_id').value = `CC-${String(cc.no).padStart(3,'0')}`;
  document.getElementById('f_centro_nombre').value = cc.nombre;
  document.getElementById('centroList').classList.remove('open');

  // Auto-fill
  document.getElementById('f_admin_nombre').value = cc.admin || '';
  document.getElementById('f_tel_cc').value = cc.tel || '';
  document.getElementById('f_tel_admin').value = cc.cel || '';

  // GPS desde GeoJSON
  document.getElementById('f_lat').value = cc.lat;
  document.getElementById('f_lng').value = cc.lng;
  const gd = document.getElementById('gpsDisplay');
  gd.textContent = `📍 ${cc.lat.toFixed(5)}, ${cc.lng.toFixed(5)} (GeoJSON)`;
  gd.className = 'gps-display got';

  // Card info
  renderCCCard(cc);
  updateProgress();
}

function renderCCCard(cc){
  const card = document.getElementById('ccCard');
  card.classList.add('visible');
  document.getElementById('cc_nombre_disp').textContent = cc.nombre;

  const regionColor = {'METROPOLITANOS':'var(--blue)','PERIFERIA':'var(--yellow)','NORTE':'var(--green)','SUR':'var(--red)','ORIENTE':'#c88cff','CITRICOLA':'#a0dc50'}[cc.region]||'var(--text-muted)';
  const badges = [
    `<span class="cc-badge region-${cc.region}">${REGION_LABEL[cc.region]||cc.region}</span>`,
    cc.tamano ? `<span class="cc-badge" style="background:rgba(255,255,255,.06);color:var(--text-dim)">${cc.tamano}</span>` : '',
    `<span class="cc-badge" style="background:rgba(255,255,255,.05);color:var(--text-dim)">No. ${cc.no}</span>`
  ].filter(Boolean).join('');
  document.getElementById('cc_badges').innerHTML = badges;

  const rows = [
    ['🗺️ Municipio', cc.municipio],
    ['🏠 Domicilio', cc.domicilio],
    cc.correo ? ['📧 Correo', `<a href="mailto:${cc.correo}">${cc.correo}</a>`] : null,
    cc.ubicacion ? ['🔗 Ubicación', `<a href="${cc.ubicacion}" target="_blank">Ver en mapa ↗</a>`] : null,
  ].filter(Boolean);

  document.getElementById('cc_rows').innerHTML = rows.map(([label, val])=>
    `<div class="cc-row"><span class="cc-row-label">${label}</span><span>${val}</span></div>`
  ).join('');
}

// ══ SEMAPHORE / TOGGLE ══
function selectSem(field, btn, val){
  btn.parentElement.querySelectorAll('.sem-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('f_'+field).value = val;
  generateActions();
}
function selectToggle(field, btn, val){
  btn.parentElement.querySelectorAll('.toggle-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('f_'+field).value = val;
  generateActions();
}
function selectGroup(group, btn, val){
  btn.parentElement.querySelectorAll('.prio-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('f_'+group).value = val;
  updateProgress();
}
function toggleRisk(label){
  setTimeout(()=>{ const cb=label.querySelector('input'); label.classList.toggle('checked',cb.checked); generateActions(); },10);
}
function stepVal(id, delta){
  const el=document.getElementById(id);
  el.value = Math.max(0,(parseInt(el.value)||0)+delta);
  generateActions();
}

// ══ GPS REAL ══
function captureGPS(){
  const d=document.getElementById('gpsDisplay');
  d.textContent='Obteniendo señal...'; d.className='gps-display';
  if(!navigator.geolocation){ d.textContent='GPS no disponible'; d.classList.add('error'); return; }
  navigator.geolocation.getCurrentPosition(pos=>{
    const lat=pos.coords.latitude.toFixed(6), lng=pos.coords.longitude.toFixed(6), acc=Math.round(pos.coords.accuracy);
    document.getElementById('f_lat').value=lat;
    document.getElementById('f_lng').value=lng;
    d.textContent=`📍 ${lat}, ${lng} (±${acc}m)`;
    d.classList.add('got');
    showToast('success','📍 Ubicación real capturada');
  }, err=>{
    d.textContent='Error: '+err.message; d.classList.add('error');
  },{enableHighAccuracy:true,timeout:12000});
}

// ══ ACCIONES AUTOMÁTICAS ══
function generateActions(){
  const actions=[];
  const eq_estado=document.getElementById('f_eq_estado').value;
  const inet=document.getElementById('f_inet_calidad').value;
  const agua=document.getElementById('f_agua').value;
  const energia=document.getElementById('f_energia').value;
  const banos=document.getElementById('f_banos').value;
  const limpieza=document.getElementById('f_limpieza').value;
  const pintura=document.getElementById('f_pintura').value;
  const eq_aula=parseInt(document.getElementById('f_eq_aula').value)||0;
  const eq_func=parseInt(document.getElementById('f_eq_func').value)||0;

  if(eq_estado==='Malo') actions.push({p:'p1',t:'Mantenimiento o reemplazo urgente de equipos de cómputo'});
  else if(eq_estado==='Regular') actions.push({p:'p2',t:'Revisión y mantenimiento preventivo de equipos'});
  if(eq_aula>0 && eq_func<eq_aula*0.5) actions.push({p:'p1',t:`Más del 50% de equipos fuera de servicio (${eq_func}/${eq_aula}) — revisión inmediata`});
  if(inet==='Mala'||inet==='Sin internet') actions.push({p:'p1',t:'Gestionar contrato o revisión urgente del servicio de internet'});
  else if(inet==='Regular') actions.push({p:'p2',t:'Mejorar plan o infraestructura de red'});
  if(energia==='Fallas') actions.push({p:'p2',t:'Revisión de instalación eléctrica y reguladores/UPS'});
  if(agua==='No') actions.push({p:'p1',t:'Gestionar suministro de agua potable — urgente'});
  if(banos==='Malo') actions.push({p:'p1',t:'Rehabilitación de sanitarios'});
  else if(banos==='Regular') actions.push({p:'p2',t:'Mantenimiento correctivo de sanitarios'});
  if(limpieza==='Mala') actions.push({p:'p2',t:'Asignar responsable de limpieza o ampliar jornada'});
  if(pintura==='Mala') actions.push({p:'p3',t:'Pintura y rehabilitación de imagen exterior'});
  document.querySelectorAll('#riskChecks .risk-item.checked input').forEach(cb=>{
    actions.push({p:'p1',t:'RIESGO: '+cb.value});
  });

  const c=document.getElementById('accionesGeneradas');
  if(!actions.length){ c.innerHTML='<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;color:var(--text-dim);padding:8px 0">Las acciones se generan automáticamente al llenar el formulario.</div>'; return; }
  c.innerHTML=actions.map(a=>`<div class="accion-item"><span class="accion-prio ${a.p}">${a.p.toUpperCase()}</span><span class="accion-text">${a.t}</span></div>`).join('');
}

// ══ PROGRESS ══
function updateProgress(){
  const reqs=['f_centro_nombre','f_admin_nombre','f_prioridad'];
  const filled=reqs.filter(id=>{ const el=document.getElementById(id); return el&&el.value.trim()!==''; }).length;
  const extras=['f_eq_estado','f_inet_calidad','f_agua','f_banos'];
  const ef=extras.filter(id=>document.getElementById(id).value!=='').length;
  document.getElementById('progressFill').style.width=Math.round((filled/reqs.length)*40+(ef/extras.length)*60)+'%';
}

// ══ COLLECT ══
function collectForm(){
  const riesgos=Array.from(document.querySelectorAll('#riskChecks .risk-item.checked input')).map(cb=>cb.value).join(' | ');
  const acciones=Array.from(document.querySelectorAll('#accionesGeneradas .accion-item')).map(el=>el.querySelector('.accion-prio').textContent+': '+el.querySelector('.accion-text').textContent).join(' | ');
  const extra=document.getElementById('f_acciones_extra').value;
  return {
    timestamp: new Date().toISOString(),
    fecha_visita: document.getElementById('f_fecha').value,
    hora_visita: document.getElementById('f_hora').value,
    centro_id: document.getElementById('f_centro_id').value,
    centro_nombre: document.getElementById('f_centro_nombre').value,
    municipio: selectedCC?.municipio||'',
    region: selectedCC?.region||'',
    tamano: selectedCC?.tamano||'',
    admin_nombre: document.getElementById('f_admin_nombre').value,
    levanta: document.getElementById('f_levanta').value,
    tel_cc: document.getElementById('f_tel_cc').value,
    tel_admin: document.getElementById('f_tel_admin').value,
    lat: document.getElementById('f_lat').value,
    lng: document.getElementById('f_lng').value,
    prioridad: document.getElementById('f_prioridad').value,
    num_aulas: document.getElementById('f_aulas').value,
    eq_en_aula: document.getElementById('f_eq_aula').value,
    eq_funcionales: document.getElementById('f_eq_func').value,
    eq_admin: document.getElementById('f_eq_admin').value,
    eq_extras: document.getElementById('f_eq_extra').value,
    eq_estado: document.getElementById('f_eq_estado').value,
    proveedor_internet: selectedProviders.join(' | '),
    vel_bajada_mbps: getProveedoresData().filter(p=>p.bajada).map(p=>`${p.proveedor}:${p.bajada}`).join(' | '),
    vel_subida_mbps: getProveedoresData().filter(p=>p.subida).map(p=>`${p.proveedor}:${p.subida}`).join(' | '),
    internet_calidad: document.getElementById('f_inet_calidad').value,
    internet_cobertura: document.getElementById('f_inet_cobertura').value,
    energia_electrica: document.getElementById('f_energia').value,
    obs_tic: document.getElementById('f_obs_tic').value,
    agua_potable: document.getElementById('f_agua').value,
    gas: document.getElementById('f_gas').value,
    banos: document.getElementById('f_banos').value,
    limpieza: document.getElementById('f_limpieza').value,
    pintura: document.getElementById('f_pintura').value,
    areas_riesgo: riesgos,
    obs_fisico: document.getElementById('f_obs_fisico').value,
    acciones_recomendadas: [acciones, extra].filter(Boolean).join(' | '),
  };
}

// ══ SUBMIT ══
function submitForm(){
  const data=collectForm();
  if(!data.centro_nombre) { showToast('error','⚠️ Selecciona un centro comunitario'); return; }
  if(!data.admin_nombre) { showToast('error','⚠️ Ingresa el nombre del administrador'); return; }
  if(!data.prioridad) { showToast('error','⚠️ Selecciona el nivel de prioridad'); return; }
  const record={id:Date.now(),data,status:'pending',created:new Date().toISOString()};
  queue.push(record); saveQueue(); updateQueueBadge(); updateStats();
  showToast('success','✅ Registro guardado');
  if(isOnline&&config.scriptUrl) syncRecord(record);
  resetForm();
}

// ══ RESET ══
function resetForm(){
  document.querySelectorAll('.field-input,.field-select,.field-textarea').forEach(el=>{ if(el.type!=='date'&&el.type!=='time') el.value=''; });
  document.querySelectorAll('.sem-btn,.toggle-btn,.prio-btn').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.step-val').forEach(el=>el.value=0);
  document.querySelectorAll('.risk-item').forEach(el=>{ el.classList.remove('checked'); el.querySelector('input').checked=false; });
  ['f_lat','f_lng','f_centro_id','f_centro_nombre','f_prioridad','f_eq_estado','f_inet_calidad',
   'f_inet_cobertura','f_energia','f_agua','f_gas','f_banos','f_limpieza','f_pintura'].forEach(id=>{ const el=document.getElementById(id); if(el) el.value=''; });
  document.getElementById('centroSearch').value='';
  document.getElementById('gpsDisplay').textContent='Sin captura';
  document.getElementById('gpsDisplay').className='gps-display';
  document.getElementById('ccCard').classList.remove('visible');
  document.getElementById('accionesGeneradas').innerHTML='';
  document.getElementById('progressFill').style.width='0%';
  const now=new Date();
  document.getElementById('f_fecha').value=now.toISOString().split('T')[0];
  document.getElementById('f_hora').value=now.toTimeString().slice(0,5);
  selectedProviders = [];
  updateProviderUI();
  document.querySelectorAll('.prov-chip').forEach(c=>c.classList.remove('active','active-noservice'));
  selectedCC=null;
  window.scrollTo(0,0);
}

// ══ SYNC — form POST con iframe oculto ══
function syncViaForm(payload) {
  return new Promise(resolve => {
    const id = 'sf' + Date.now();
    const iframe = document.createElement('iframe');
    iframe.name = id;
    iframe.style.cssText = 'position:fixed;top:-999px;left:-999px;width:1px;height:1px;opacity:0;pointer-events:none;border:0;';
    document.body.appendChild(iframe);

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = APPS_SCRIPT_URL;
    form.target = id;
    form.style.display = 'none';

    const input = document.createElement('input');
    input.type  = 'hidden';
    input.name  = 'payload';
    input.value = payload;
    form.appendChild(input);
    document.body.appendChild(form);

    form.submit();

    // Remover a los 2s: el request ya salió, Apps Script lo procesa
    // La respuesta no tiene dónde cargar → sin navegación
    setTimeout(() => {
      try { document.body.removeChild(form);   } catch(_) {}
      try { document.body.removeChild(iframe); } catch(_) {}
      resolve();
    }, 2000);
  });
}

async function syncRecord(record) {
  try {
    await syncViaForm(JSON.stringify({ registros: [record.data] }));
    record.status   = 'synced';
    record.syncedAt = new Date().toISOString();
  } catch(e) {
    record.status = 'error';
    record.error  = e.message;
  }
  saveQueue(); updateSyncBadge(); updateQueueBadge(); renderQueue();
}

async function syncPending() {
  if (!isOnline) { showToast('error','📵 Sin conexión a internet'); return; }
  queue.filter(r => r.status === 'error').forEach(r => r.status = 'pending');
  saveQueue();
  const pending = queue.filter(r => r.status === 'pending');
  if (!pending.length) { showToast('info','✅ Todo ya está sincronizado'); return; }
  // Toast de diagnóstico — muestra los últimos 20 chars de la URL activa
  showToast('info', `🔄 URL: ...${APPS_SCRIPT_URL.slice(-20)}`);
  await new Promise(r => setTimeout(r, 1000));
  showToast('info', `🔄 Enviando ${pending.length} registro${pending.length>1?'s':''}...`);
  for (const r of pending) await syncRecord(r);
  const ok   = queue.filter(r => r.status === 'synced').length;
  const fail = queue.filter(r => r.status === 'error').length;
  if (!fail) showToast('success', `✅ ${ok} registro${ok>1?'s':''} en el Sheet`);
  else       showToast('error',   `⚠️ ${ok} OK · ${fail} con error`);
  updateStats();
}

// ══ QUEUE RENDER ══
function renderQueue(){
  const c=document.getElementById('queueList');
  if(!queue.length){ c.innerHTML='<div class="empty-queue"><div class="iq">🗂</div><p>Sin registros aún</p></div>'; return; }
  c.innerHTML=[...queue].reverse().map(r=>{
    const d=r.data;
    const chips=[
      d.prioridad&&`🚦 ${d.prioridad}`,
      d.region&&`📍 ${REGION_LABEL[d.region]||d.region}`,
      d.eq_en_aula&&`💻 ${d.eq_funcionales}/${d.eq_en_aula}`,
      d.internet_calidad&&`📶 ${d.internet_calidad}`,
    ].filter(Boolean);
    const ts=new Date(r.created).toLocaleString('es-MX',{month:'short',day:'2-digit',hour:'2-digit',minute:'2-digit'});
    const sl={pending:'PENDIENTE',synced:'SINCRONIZADO',error:'ERROR'}[r.status];
    return `<div class="queue-card ${r.status}"><div class="queue-meta"><div><div class="queue-name">${d.centro_nombre||'—'}</div><div class="queue-time">${ts} · ${d.municipio||'—'}</div></div><span class="queue-status">${sl}</span></div><div class="queue-summary">${chips.map(c=>`<span class="queue-chip">${c}</span>`).join('')}</div></div>`;
  }).join('');
}

// ══ UTILS ══
function saveQueue(){ localStorage.setItem('cc_queue',JSON.stringify(queue)); }
function forzarResync() {
  queue.forEach(r => r.status = 'pending');
  saveQueue(); updateQueueBadge(); renderQueue(); updateStats();
  showToast('info', `↩ ${queue.length} registros marcados para re-envío`);
  setTimeout(syncPending, 500);
}
function saveConfig(){ localStorage.setItem('cc_config',JSON.stringify(config)); }
function updateSyncBadge(){
  const pending=queue.filter(r=>r.status==='pending').length;
  const badge=document.getElementById('syncBadge');
  const label=document.getElementById('syncLabel');
  if(!isOnline){ badge.className='sync-badge'; label.textContent='OFFLINE'; }
  else if(pending>0){ badge.className='sync-badge pending'; label.textContent=`${pending} PENDIENTE${pending>1?'S':''}`; }
  else{ badge.className='sync-badge online'; label.textContent='ONLINE'; }
}
function updateQueueBadge(){
  const n=queue.length;
  const el=document.getElementById('queueBadge');
  el.textContent=n; el.style.display=n>0?'inline':'none';
}
function updateStats(){
  document.getElementById('stat-total').textContent=queue.length;
  document.getElementById('stat-pending').textContent=queue.filter(r=>r.status==='pending').length;
  document.getElementById('stat-synced').textContent=queue.filter(r=>r.status==='synced').length;
}
function exportCSV(){
  if(!queue.length){ showToast('error','Sin registros'); return; }
  const keys=Object.keys(queue[0].data);
  const rows=[keys.join(','),...queue.map(r=>keys.map(k=>{ const v=String(r.data[k]||'').replace(/"/g,'""'); return v.includes(',')||v.includes('\n')?`"${v}"`:v; }).join(','))];
  const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([rows.join('\n')],{type:'text/csv;charset=utf-8;'}));
  a.download=`cc_diagnostico_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  showToast('success','⬇️ CSV exportado');
}
function clearAll(){
  if(!confirm('¿Borrar TODOS los registros locales?')) return;
  queue=[]; saveQueue(); updateQueueBadge(); updateStats(); renderQueue();
  showToast('info','🗑 Registros borrados');
}
function showToast(type, msg, duration=3500){
  const t=document.createElement('div'); t.className=`toast ${type}`; t.textContent=msg;
  document.getElementById('toastContainer').appendChild(t);
  setTimeout(()=>t.remove(), duration);
}
</script>

<script>
// ══ SERVICE WORKER — mantiene navegación dentro de la PWA ══
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
</script>
</body>
</html>
