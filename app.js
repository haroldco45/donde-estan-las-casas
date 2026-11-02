/* ¿Dónde están las casas? — Caso Caquetá al Día · Vibras Positivas HM */
const TZ = 'America/Bogota';
const FECHA_DENUNCIA = '2026-09-26T12:00:00-05:00';
const CONSULTAS = [
  'Caquetá 36 viviendas Ministerio de Vivienda',
  '"Caquetá" viviendas "misma casa"',
  'Jaime Andrés Beltrán auditoría Minvivienda hallazgos',
  'Minvivienda Caquetá viviendas investigación'
];
const RELEVANTE = /caquet|gemel|misma casa|36 vivienda|beltr[aá]n|minvivienda|ministerio de vivienda/i;
const PROXIES = [
  u => 'https://api.allorigins.win/raw?url=' + encodeURIComponent(u),
  u => 'https://corsproxy.io/?url=' + encodeURIComponent(u)
];

const T = {
  es: {
    brandSub:'Caso Caquetá al Día', refresh:'Actualizar', tickerLoading:'Buscando noticias en vivo…',
    navHoy:'Hoy', navCaso:'El caso', navCifras:'Cifras', navLinea:'Línea de tiempo', navNoticias:'Noticias', navVideos:'Videos', navAccion:'Actúa',
    heroKicker:'Seguimiento ciudadano · Ministerio de Vivienda', heroMillones:'millones', heroPara:'para', heroViviendas:'viviendas',
    heroLead:'Según la auditoría del Ministerio, presuntamente una misma casa habría sido usada para justificar varias.',
    heroQuote:'"¿Dónde están las casas? ¿Quién lo revisó? ¿Quién lo aprobó?" — Ministro Jaime Andrés Beltrán',
    hoyTitle:'Hoy', enVivo:'En vivo', hoyUltima:'Lo último', hoyDias:'Días desde la denuncia', hoyDiasSub:'Auditoría revelada el 26 sep 2026',
    hoy24:'Noticias últimas 24 h', hoy24Sub:'De la búsqueda en vivo y el robot', hoyEstado:'Estado del caso', hoyEstadoSub:'Hallazgo preliminar en manos de las autoridades',
    hoyRobot:'Robot de noticias', estadoTxt:'En investigación', robotNunca:'Esperando primera ronda', visita:'Tu visita: ',
    casoTitle:'El caso, en simple',
    c1t:'La plata', c1p:'Se comprometieron más de $3.200 millones de recursos públicos para un proyecto de 36 soluciones de vivienda en Caquetá.',
    c2t:'La auditoría', c2p:'El ministro Jaime Andrés Beltrán ordenó revisar "proyecto por proyecto y peso por peso" lo que recibió del gobierno anterior.',
    c3t:'El "gemeleo"', c3p:'Al revisar las evidencias, el Ministerio encontró indicios de que una sola casa habría sido presentada para justificar varias viviendas distintas.',
    c4t:'Las 123 casas', c4p:'En el debate de control político el ministro habló de un proyecto de 123 viviendas en Caquetá en el que 36 no aparecen.',
    c5t:'La denuncia', c5p:'Los hallazgos fueron enviados a las autoridades competentes. Ellas deben decidir si hubo irregularidades y quiénes responden.',
    c6t:'Ojo: es preliminar', c6p:'Todavía no hay fallo ni responsables señalados por un juez. Esta app sigue el caso y se actualiza sola; nadie es culpable hasta que se demuestre.',
    gemTitle:'36 registros, 1 sola casa', gemP:'Toca el tablero: así se vería un "gemeleo", donde muchas viviendas reportadas terminan siendo la misma.', gemBtn:'Ver el gemeleo', gemBtn2:'Volver a las 36', gemCopia:'copia', gemUna:'1 casa',
    cifrasTitle:'Las cifras que hay que explicar', cf1:'comprometidos para el proyecto de Caquetá', cf2:'por cada una de las 36 viviendas (cálculo simple)', cf3:'viviendas que no aparecen, de un proyecto de 123', cf4:'bajo revisión en 42 proyectos de la auditoría nacional',
    otrosTitle:'Otros hallazgos de la misma auditoría',
    o1:'para 327 viviendas en Cauca y Nariño que en 4 años no se han entregado; sí se pagaron unos $143 M de interventoría.',
    o2:'en una planta de agua en La Guajira cuestionada por su planeación.',
    o3:'viviendas en Providencia y Santa Catalina: convenio recibido vencido y en liquidación, sin casas construidas.',
    o4:'en hallazgos fiscales presentados en debates de control político.',
    lineaTitle:'Línea de tiempo',
    t1d:'7 jul 2026', t1p:'El presidente electo Abelardo de la Espriella designa a Jaime Andrés Beltrán, exalcalde de Bucaramanga, como ministro de Vivienda.',
    t2d:'Ago 2026', t2p:'Beltrán llega al Ministerio y ordena una auditoría integral a proyectos y recursos.',
    t3d:'26 sep 2026', t3p:'El Ministerio presenta los primeros hallazgos: $1,14 billones bajo revisión y el caso de las 36 viviendas de Caquetá por más de $3.200 millones.',
    t4d:'Oct 2026', t4p:'En control político, el ministro habla de un proyecto de 123 viviendas en Caquetá donde 36 no aparecen, y de más de $10.000 millones en hallazgos fiscales.',
    t5d:'Ahora', t5p:'El caso está en manos de las autoridades. Esta app vigila cada novedad: imputaciones, respuestas del gobierno anterior, visitas de control y decisiones.',
    notTitle:'Noticias', buscarPh:'Filtrar noticias…', nuevo:'NUEVO', sinNoticias:'No hay noticias con ese filtro.', buscando:'Buscando en vivo…', vivoOk:'noticias · búsqueda en vivo lista', vivoFail:'Mostrando lo que trajo el robot',
    vidTitle:'Videos del caso', vidSub:'El robot busca videos nuevos cada 30 minutos.', verVideo:'Ver video', sinVideos:'El robot todavía no ha traído videos. Vuelve en un rato.',
    accTitle:'Actúa como ciudadano', accP:'Tienes derecho a pedir información pública. Copia este derecho de petición, complétalo y envíalo al Ministerio de Vivienda.',
    accCopiar:'Copiar petición', accWa:'Compartir por WhatsApp', copiado:'Petición copiada',
    accP:'Tienes derecho a pedir información pública. Llena tus datos y envía el derecho de petición al Ministerio de Vivienda desde aquí mismo.',
    fNombre:'Nombre completo', fCedula:'Cédula', fCiudad:'Ciudad', fCorreo:'Tu correo (para la respuesta)', fDir:'Dirección (opcional)',
    accEnviar:'Enviar al Ministerio', accGmail:'Enviar con Gmail web', accNota:'Se abre tu correo con la petición lista para correspondencia@minvivienda.gov.co. Solo toca Enviar. Te llega copia a ti.',
    faltan:'Completa los campos marcados', abriendo:'Abriendo tu correo… solo toca Enviar',
    e1:'Enviar la petición (PQRSD)', e2:'Control fiscal de la plata pública', e3:'Conducta de los funcionarios', e4:'Posibles delitos',
    fuentesTitle:'Fuentes', footP:'App ciudadana independiente. Información pública con fuentes; los hallazgos son preliminares.',
    actualizado:'Actualizado', waTxt:'¿Dónde están las casas? $3.200 millones para 36 viviendas en Caquetá y presuntamente una misma casa para justificar varias. Sigue el caso aquí: ',
    peticion:`Señores
MINISTERIO DE VIVIENDA, CIUDAD Y TERRITORIO – FONVIVIENDA
Bogotá D.C.

Asunto: Derecho de petición (art. 23 de la Constitución y Ley 1755 de 2015) – Proyecto de 36 viviendas en Caquetá

Yo, [NOMBRE COMPLETO], identificado(a) con C.C. [NÚMERO], de [CIUDAD], de manera respetuosa solicito:

1. Nombre del proyecto, municipio y vereda o barrio donde se ubican las 36 viviendas de Caquetá señaladas en la auditoría presentada el 26 de septiembre de 2026.
2. Número y fecha de los contratos o convenios, nombre del contratista y de la interventoría.
3. Valor comprometido, valor girado y fechas de los pagos.
4. Explicación de cómo se verificó cada vivienda y qué evidencias se presentaron.
5. Autoridades a las que se enviaron los hallazgos y número de radicado de cada denuncia.
6. Acciones que tomará el Ministerio para que las familias beneficiarias reciban sus casas.

Recibo respuesta en el correo [CORREO] o en la dirección [DIRECCIÓN].

Atentamente,
[FIRMA]
[NOMBRE] – C.C. [NÚMERO]`
  },
  en: {
    brandSub:'Caquetá Case Daily', refresh:'Refresh', tickerLoading:'Searching live news…',
    navHoy:'Today', navCaso:'The case', navCifras:'Numbers', navLinea:'Timeline', navNoticias:'News', navVideos:'Videos', navAccion:'Act',
    heroKicker:'Citizen tracker · Ministry of Housing', heroMillones:'million pesos', heroPara:'for', heroViviendas:'homes',
    heroLead:'According to the Ministry\'s audit, the same house may have been used to justify several homes.',
    heroQuote:'"Where are the houses? Who reviewed it? Who approved it?" — Housing Minister Jaime Andrés Beltrán',
    hoyTitle:'Today', enVivo:'Live', hoyUltima:'Latest', hoyDias:'Days since the report', hoyDiasSub:'Audit revealed on Sep 26, 2026',
    hoy24:'News in the last 24 h', hoy24Sub:'From live search and the robot', hoyEstado:'Case status', hoyEstadoSub:'Preliminary finding, now with the authorities',
    hoyRobot:'News robot', estadoTxt:'Under investigation', robotNunca:'Waiting for first run', visita:'Your visit: ',
    casoTitle:'The case, made simple',
    c1t:'The money', c1p:'Over 3.2 billion Colombian pesos of public money were committed to a project of 36 homes in Caquetá.',
    c2t:'The audit', c2p:'Minister Jaime Andrés Beltrán ordered a review "project by project, peso by peso" of what the previous government left.',
    c3t:'"Twinning"', c3p:'Reviewing the evidence, the Ministry found signs that a single house may have been presented to justify several different homes.',
    c4t:'The 123 homes', c4p:'In a congressional oversight debate, the minister spoke of a 123-home project in Caquetá where 36 cannot be found.',
    c5t:'The complaint', c5p:'The findings were sent to the competent authorities. They must decide whether there were irregularities and who is responsible.',
    c6t:'Note: preliminary', c6p:'No court ruling or named culprits yet. This app follows the case and updates itself; everyone is innocent until proven otherwise.',
    gemTitle:'36 records, 1 single house', gemP:'Tap the board: this is what "twinning" looks like, where many reported homes turn out to be the same one.', gemBtn:'Show the twinning', gemBtn2:'Back to 36', gemCopia:'copy', gemUna:'1 house',
    cifrasTitle:'The numbers that need explaining', cf1:'committed to the Caquetá project (COP)', cf2:'per home across 36 homes (simple math)', cf3:'homes missing, out of a 123-home project', cf4:'under review in 42 projects nationwide',
    otrosTitle:'Other findings of the same audit',
    o1:'for 327 homes in Cauca and Nariño not delivered in 4 years; about 143 million was still paid for oversight.',
    o2:'in a water plant in La Guajira questioned for its planning.',
    o3:'homes in Providencia and Santa Catalina: agreement received expired and in liquidation, no houses built.',
    o4:'in fiscal findings presented in congressional oversight debates.',
    lineaTitle:'Timeline',
    t1d:'Jul 7, 2026', t1p:'President-elect Abelardo de la Espriella names Jaime Andrés Beltrán, former mayor of Bucaramanga, as Housing Minister.',
    t2d:'Aug 2026', t2p:'Beltrán takes office and orders a full audit of projects and funds.',
    t3d:'Sep 26, 2026', t3p:'The Ministry presents first findings: 1.14 trillion pesos under review and the case of 36 homes in Caquetá worth over 3.2 billion pesos.',
    t4d:'Oct 2026', t4p:'In oversight debates, the minister mentions a 123-home project in Caquetá where 36 are missing, and over 10 billion pesos in fiscal findings.',
    t5d:'Now', t5p:'The case is with the authorities. This app watches every update: charges, responses from the previous government, inspections and decisions.',
    notTitle:'News', buscarPh:'Filter news…', nuevo:'NEW', sinNoticias:'No news matches that filter.', buscando:'Searching live…', vivoOk:'stories · live search ready', vivoFail:'Showing what the robot brought',
    vidTitle:'Videos about the case', vidSub:'The robot looks for new videos every 30 minutes.', verVideo:'Watch video', sinVideos:'The robot has not brought videos yet. Check back soon.',
    accTitle:'Act as a citizen', accP:'You have the right to request public information. Copy this petition (in Spanish, as the Ministry requires), fill it in and send it.',
    accCopiar:'Copy petition', accWa:'Share on WhatsApp', copiado:'Petition copied',
    fNombre:'Full name', fCedula:'ID number (cédula)', fCiudad:'City', fCorreo:'Your email (for the reply)', fDir:'Address (optional)',
    accEnviar:'Send to the Ministry', accGmail:'Send with Gmail web', accNota:'Your email app opens with the petition (in Spanish) ready for correspondencia@minvivienda.gov.co. Just tap Send. You get a copy.',
    faltan:'Fill in the highlighted fields', abriendo:'Opening your email… just tap Send',
    e1:'Send the petition', e2:'Fiscal control of public money', e3:'Conduct of public officials', e4:'Possible crimes',
    fuentesTitle:'Sources', footP:'Independent citizen app. Public information with sources; findings are preliminary.',
    actualizado:'Updated', waTxt:'Where are the houses? 3.2 billion pesos for 36 homes in Caquetá, and allegedly the same house used to justify several. Follow the case: '
  }
};
let LANG = localStorage.getItem('lang') || 'es';
const t = k => (T[LANG][k] ?? T.es[k] ?? k);
const $ = s => document.querySelector(s);
let NOTICIAS = [], VIDEOS = [], META = {};

function aplicarIdioma(){
  document.documentElement.lang = LANG;
  document.querySelectorAll('[data-i18n]').forEach(el => el.textContent = t(el.dataset.i18n));
  document.querySelectorAll('[data-i18n-ph]').forEach(el => el.placeholder = t(el.dataset.i18nPh));
  $('#btnLang').textContent = LANG === 'es' ? 'EN' : 'ES';
  armarPeticion();
  $('#btnWa').href = 'https://wa.me/?text=' + encodeURIComponent(t('waTxt') + location.href.split('#')[0]);
  $('#btnGemelas').textContent = $('#tablero').classList.contains('gemeleo') ? t('gemBtn2') : t('gemBtn');
  pintarHoy(); pintarNoticias(); pintarVideos();
}

const fmtFecha = (d, opts) => new Intl.DateTimeFormat(LANG === 'es' ? 'es-CO' : 'en-US', {timeZone: TZ, ...opts}).format(d);

function pintarHoy(){
  const ahora = new Date();
  $('#hoyFecha').textContent = fmtFecha(ahora, {weekday:'long', day:'numeric', month:'long', year:'numeric'}) + ' · ' + fmtFecha(ahora, {hour:'numeric', minute:'2-digit'}) + ' (Colombia)';
  $('#hoyDias').textContent = Math.max(0, Math.floor((ahora - new Date(FECHA_DENUNCIA)) / 864e5));
  const recientes = NOTICIAS.filter(n => n.fecha && ahora - new Date(n.fecha) < 864e5);
  $('#hoy24').textContent = recientes.length;
  $('#hoyEstado').textContent = META.estado?.[LANG] || t('estadoTxt');
  const top = NOTICIAS[0];
  if (top){
    $('#hoyTitular').textContent = top.titulo; $('#hoyTitular').href = top.url;
    $('#hoyFuente').textContent = [top.fuente, top.fecha ? fmtFecha(new Date(top.fecha), {day:'numeric', month:'short', hour:'numeric', minute:'2-digit'}) : ''].filter(Boolean).join(' · ');
  }
  $('#hoyRobot').textContent = META.actualizado ? fmtFecha(new Date(META.actualizado), {day:'numeric', month:'short', hour:'numeric', minute:'2-digit'}) : t('robotNunca');
  $('#hoyVisita').textContent = t('visita') + fmtFecha(ahora, {hour:'numeric', minute:'2-digit'});
  const tick = NOTICIAS.slice(0, 8).map(n => `<a href="${n.url}" target="_blank" rel="noopener">${esc(n.titulo)}</a>`).join('');
  if (tick) $('#ticker').innerHTML = tick + tick;
}

const esc = s => String(s || '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

function pintarNoticias(){
  const q = ($('#buscar').value || '').toLowerCase().trim();
  const lista = NOTICIAS.filter(n => !q || (n.titulo + ' ' + n.fuente).toLowerCase().includes(q));
  const ahora = Date.now();
  $('#listaNoticias').innerHTML = lista.length ? lista.map((n, i) => `
    <a class="nota" href="${n.url}" target="_blank" rel="noopener" style="animation-delay:${Math.min(i, 12) * 40}ms">
      ${n.imagen ? `<img src="${n.imagen}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.outerHTML='<div class=ph>${esc(n.fuente || 'Caquetá')}</div>'">` : `<div class="ph">${esc(n.fuente || 'Caquetá')}</div>`}
      <div class="tx">
        ${n.fecha && ahora - new Date(n.fecha) < 864e5 ? `<span class="nuevo">${t('nuevo')}</span>` : ''}
        <h4>${esc(n.titulo)}</h4>
        <span class="meta">${esc(n.fuente || '')}${n.fecha ? ' · ' + fmtFecha(new Date(n.fecha), {day:'numeric', month:'short', year:'numeric'}) : ''}</span>
      </div>
    </a>`).join('') : `<p class="muted">${t('sinNoticias')}</p>`;
}

function pintarVideos(){
  $('#listaVideos').innerHTML = VIDEOS.length ? VIDEOS.slice(0, 6).map(v => `
    <div class="video">
      <div class="frame" data-id="${v.id}"><img src="https://i.ytimg.com/vi/${v.id}/hqdefault.jpg" alt="" loading="lazy"><span>${t('verVideo')}</span></div>
      <p>${esc(v.titulo)}</p>
    </div>`).join('') : `<p class="muted">${t('sinVideos')}</p>`;
  document.querySelectorAll('.frame').forEach(f => f.onclick = () => {
    f.outerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${f.dataset.id}?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  });
}

function mezclar(nuevas){
  const vistos = new Map(NOTICIAS.map(n => [clave(n), n]));
  nuevas.forEach(n => { const k = clave(n); if (!vistos.has(k)) vistos.set(k, n); else if (!vistos.get(k).imagen && n.imagen) vistos.get(k).imagen = n.imagen; });
  NOTICIAS = [...vistos.values()].sort((a, b) => (b.fecha ? +new Date(b.fecha) : 0) - (a.fecha ? +new Date(a.fecha) : 0));
}
const clave = n => n.titulo.toLowerCase().replace(/[^a-z0-9áéíóúñ]/g, '').slice(0, 70);

async function traerXML(url){
  for (const p of PROXIES){
    try {
      const r = await fetch(p(url), {cache:'no-store'});
      if (r.ok){ const txt = await r.text(); if (txt.includes('<item')) return new DOMParser().parseFromString(txt, 'text/xml'); }
    } catch(e){}
  }
  return null;
}

async function busquedaEnVivo(){
  $('#notEstado').textContent = t('buscando');
  const btn = $('#btnRefresh'); btn.classList.add('spin');
  const resultados = await Promise.all(CONSULTAS.map(async q => {
    const xml = await traerXML(`https://news.google.com/rss/search?q=${encodeURIComponent(q)}&hl=es-419&gl=CO&ceid=CO:es-419`);
    if (!xml) return [];
    return [...xml.querySelectorAll('item')].map(it => {
      const fuente = it.querySelector('source')?.textContent || '';
      let titulo = it.querySelector('title')?.textContent || '';
      if (fuente && titulo.endsWith(' - ' + fuente)) titulo = titulo.slice(0, -(fuente.length + 3));
      return {titulo, url: it.querySelector('link')?.textContent, fuente, fecha: new Date(it.querySelector('pubDate')?.textContent).toISOString()};
    }).filter(n => RELEVANTE.test(n.titulo));
  }));
  const planas = resultados.flat();
  if (planas.length){ mezclar(planas); $('#notEstado').textContent = NOTICIAS.length + ' ' + t('vivoOk'); }
  else $('#notEstado').textContent = t('vivoFail');
  btn.classList.remove('spin');
  pintarHoy(); pintarNoticias();
}

async function cargarRobot(){
  try {
    const r = await fetch('data/noticias.json?v=' + Date.now(), {cache:'no-store'});
    const d = await r.json();
    META = d.meta || {}; VIDEOS = d.videos || [];
    mezclar(d.noticias || []);
  } catch(e){}
  pintarHoy(); pintarNoticias(); pintarVideos();
}

async function actualizar(){
  await cargarRobot();
  busquedaEnVivo();
  toast(t('actualizado') + ' · ' + fmtFecha(new Date(), {hour:'numeric', minute:'2-digit'}));
}


const MINVIVIENDA = 'correspondencia@minvivienda.gov.co';
const ASUNTO = 'Derecho de petición – Proyecto de 36 viviendas en Caquetá';
const CAMPOS = ['fNombre','fCedula','fCiudad','fCorreo','fDir'];
function datosForm(){ const d = {}; CAMPOS.forEach(id => { const el = document.getElementById(id); d[id] = el ? el.value.trim() : ''; }); return d; }
function armarPeticion(){
  const d = datosForm();
  const recibo = d.fDir ? `en el correo ${d.fCorreo || '[CORREO]'} o en la dirección ${d.fDir}` : `en el correo ${d.fCorreo || '[CORREO]'}`;
  const txt = T.es.peticion
    .replace('[NOMBRE COMPLETO]', d.fNombre || '[NOMBRE COMPLETO]')
    .replace(/\[NÚMERO\]/g, d.fCedula || '[NÚMERO]')
    .replace('[CIUDAD]', d.fCiudad || '[CIUDAD]')
    .replace('en el correo [CORREO] o en la dirección [DIRECCIÓN]', recibo)
    .replace('[FIRMA]\n[NOMBRE]', d.fNombre || '[NOMBRE]')
    .replace('Bogotá D.C.\n\nAsunto', 'Bogotá D.C.\n\n' + (d.fCiudad || '[CIUDAD]') + ', ' + fechaLarga() + '\n\nAsunto');
  const ta = document.getElementById('peticion'); if (ta) ta.value = txt;
  const g = document.getElementById('btnGmail');
  if (g) g.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + MINVIVIENDA + (d.fCorreo ? '&cc=' + encodeURIComponent(d.fCorreo) : '') + '&su=' + encodeURIComponent(ASUNTO) + '&body=' + encodeURIComponent(txt);
  return txt;
}
const fechaLarga = () => new Intl.DateTimeFormat('es-CO', {timeZone: TZ, day:'numeric', month:'long', year:'numeric'}).format(new Date());
function validar(){
  let ok = true;
  ['fNombre','fCedula','fCiudad','fCorreo'].forEach(id => {
    const el = document.getElementById(id);
    const bien = el.value.trim() && el.checkValidity();
    el.classList.toggle('err', !bien); if (!bien) ok = false;
  });
  if (!ok) toast(t('faltan'));
  return ok;
}
function enviarPeticion(e){
  e.preventDefault();
  if (!validar()) return;
  const txt = armarPeticion(), d = datosForm();
  try { localStorage.setItem('petDatos', JSON.stringify({fNombre:d.fNombre, fCiudad:d.fCiudad, fCorreo:d.fCorreo, fDir:d.fDir})); } catch(_){}
  toast(t('abriendo'));
  location.href = 'mailto:' + MINVIVIENDA + '?cc=' + encodeURIComponent(d.fCorreo) + '&subject=' + encodeURIComponent(ASUNTO) + '&body=' + encodeURIComponent(txt);
}

function toast(msg){ const el = $('#toast'); el.textContent = msg; el.classList.add('on'); clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove('on'), 2200); }

function contadores(el){
  const fin = parseFloat(el.dataset.to), dec = +(el.dataset.dec || 0), t0 = performance.now(), dur = 1600;
  const paso = now => {
    const p = Math.min(1, (now - t0) / dur), v = fin * (1 - Math.pow(1 - p, 3));
    el.textContent = v.toLocaleString('es-CO', {minimumFractionDigits: dec, maximumFractionDigits: dec});
    if (p < 1) requestAnimationFrame(paso);
  };
  requestAnimationFrame(paso);
}

function tablero(){
  const tb = $('#tablero');
  tb.innerHTML = Array.from({length:36}, (_, i) => `<div class="casa${i === 14 ? ' una' : ''}">${String(i + 1).padStart(2, '0')}</div>`).join('');
  const toggle = () => {
    tb.classList.toggle('gemeleo');
    const on = tb.classList.contains('gemeleo');
    tb.querySelectorAll('.casa').forEach((c, i) => c.textContent = on ? (i === 14 ? t('gemUna') : t('gemCopia')) : String(i + 1).padStart(2, '0'));
    $('#btnGemelas').textContent = on ? t('gemBtn2') : t('gemBtn');
  };
  tb.onclick = toggle; $('#btnGemelas').onclick = toggle;
}

function observar(){
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    e.target.querySelectorAll?.('.count').forEach(c => { if (!c._ok){ c._ok = 1; contadores(c); } });
    if (e.target.classList.contains('count') && !e.target._ok){ e.target._ok = 1; contadores(e.target); }
    io.unobserve(e.target);
  }), {threshold:.2});
  document.querySelectorAll('.reveal, .hero .count').forEach(el => io.observe(el));
  const secs = [...document.querySelectorAll('section[id]')], links = [...document.querySelectorAll('.tabs a')];
  const io2 = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id));
  }), {rootMargin:'-45% 0px -50% 0px'});
  secs.forEach(s => io2.observe(s));
}

document.addEventListener('DOMContentLoaded', () => {
  const fijarAlto = () => document.documentElement.style.setProperty('--hh', document.querySelector('.top').offsetHeight + 'px');
  fijarAlto(); addEventListener('resize', fijarAlto);
  tablero(); aplicarIdioma(); observar();
  $('#btnLang').onclick = () => { LANG = LANG === 'es' ? 'en' : 'es'; localStorage.setItem('lang', LANG); aplicarIdioma(); };
  $('#btnRefresh').onclick = actualizar;
  $('#buscar').oninput = pintarNoticias;
  $('#btnCopiar').onclick = async () => { try { await navigator.clipboard.writeText($('#peticion').value); } catch(e){ $('#peticion').select(); document.execCommand('copy'); } toast(t('copiado')); };
  try { const g = JSON.parse(localStorage.getItem('petDatos') || '{}'); Object.entries(g).forEach(([k, v]) => { const el = document.getElementById(k); if (el && v) el.value = v; }); } catch(_){}
  CAMPOS.forEach(id => document.getElementById(id).addEventListener('input', e => { e.target.classList.remove('err'); armarPeticion(); }));
  $('#formPet').addEventListener('submit', enviarPeticion);
  $('#btnGmail').addEventListener('click', e => { if (!validar()) e.preventDefault(); });
  armarPeticion();
  cargarRobot().then(busquedaEnVivo);
  setInterval(pintarHoy, 60000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) actualizar(); });
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');
});
