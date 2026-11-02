// Robot de noticias — corre en GitHub Actions cada 30 minutos.
// Trae noticias reales (Google News + Bing News con foto) y videos de YouTube sobre el caso.
import { readFile, writeFile } from 'node:fs/promises';

const ARCHIVO = 'data/noticias.json';
const CONSULTAS = [
  'Caquetá 36 viviendas Ministerio de Vivienda',
  'Caquetá viviendas "misma casa"',
  'Jaime Andrés Beltrán auditoría Minvivienda hallazgos',
  'Minvivienda Caquetá viviendas investigación',
  'Caquetá viviendas gemeleadas'
];
const RELEVANTE = /caquet|gemel|misma casa|36 vivienda|beltr[aá]n|minvivienda|ministerio de vivienda/i;
const UA = { 'User-Agent': 'Mozilla/5.0 (VibrasPositivasHM robot; +https://github.com/haroldco45)', 'Accept-Language': 'es-CO,es;q=0.9' };

const tag = (xml, n) => {
  const m = xml.match(new RegExp(`<${n}[^>]*>([\\s\\S]*?)</${n}>`, 'i'));
  return m ? m[1].replace(/<!\[CDATA\[|\]\]>/g, '').trim() : '';
};
const limpiar = s => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/<[^>]+>/g, '').trim();
const clave = t => t.toLowerCase().replace(/[^a-z0-9áéíóúñ]/g, '').slice(0, 70);

async function texto(url){
  try { const r = await fetch(url, { headers: UA }); return r.ok ? await r.text() : ''; } catch { return ''; }
}

async function google(q){
  const xml = await texto(`https://news.google.com/rss/search?q=${encodeURIComponent(q)}&hl=es-419&gl=CO&ceid=CO:es-419`);
  return (xml.match(/<item>[\s\S]*?<\/item>/g) || []).map(it => {
    const fuente = limpiar(tag(it, 'source'));
    let titulo = limpiar(tag(it, 'title'));
    if (fuente && titulo.endsWith(' - ' + fuente)) titulo = titulo.slice(0, -(fuente.length + 3));
    return { titulo, url: limpiar(tag(it, 'link')), fuente, fecha: new Date(tag(it, 'pubDate')).toISOString() };
  });
}

async function bing(q){
  const xml = await texto(`https://www.bing.com/news/search?q=${encodeURIComponent(q)}&format=rss&setlang=es&cc=CO`);
  return (xml.match(/<item>[\s\S]*?<\/item>/g) || []).map(it => {
    let imagen = limpiar(tag(it, 'News:Image'));
    if (imagen && !/[?&]w=/.test(imagen)) imagen += (imagen.includes('?') ? '&' : '?') + 'w=640&h=360&c=7';
    return { titulo: limpiar(tag(it, 'title')), url: limpiar(tag(it, 'link')), fuente: limpiar(tag(it, 'News:Source')), fecha: new Date(tag(it, 'pubDate')).toISOString(), imagen: imagen || null };
  });
}

async function youtube(q){
  const html = await texto(`https://www.youtube.com/results?search_query=${encodeURIComponent(q)}&sp=CAI%253D`);
  const out = [], vistos = new Set();
  const re = /"videoRenderer":\{"videoId":"([\w-]{11})"[\s\S]*?"title":\{"runs":\[\{"text":"((?:[^"\\]|\\.)*)"/g;
  let m;
  while ((m = re.exec(html)) && out.length < 10){
    if (vistos.has(m[1])) continue;
    vistos.add(m[1]);
    const titulo = JSON.parse('"' + m[2] + '"');
    if (RELEVANTE.test(titulo)) out.push({ id: m[1], titulo });
  }
  return out;
}

const previo = JSON.parse(await readFile(ARCHIVO, 'utf8'));
const mapa = new Map((previo.noticias || []).map(n => [clave(n.titulo), n]));

for (const q of CONSULTAS){
  const lote = [...await google(q), ...await bing(q)];
  for (const n of lote){
    if (!n.titulo || !n.url || !RELEVANTE.test(n.titulo)) continue;
    if (isNaN(new Date(n.fecha))) n.fecha = null;
    const k = clave(n.titulo);
    if (!mapa.has(k)) mapa.set(k, n);
    else if (!mapa.get(k).imagen && n.imagen) mapa.get(k).imagen = n.imagen;
  }
}

const videos = new Map((previo.videos || []).map(v => [v.id, v]));
for (const q of ['Caquetá 36 viviendas ministro de Vivienda', 'Jaime Andrés Beltrán hallazgos Minvivienda']){
  for (const v of await youtube(q)) if (!videos.has(v.id)) videos.set(v.id, v);
}

const noticias = [...mapa.values()]
  .sort((a, b) => (b.fecha ? +new Date(b.fecha) : 0) - (a.fecha ? +new Date(a.fecha) : 0))
  .slice(0, 80);

const salida = {
  meta: { ...previo.meta, actualizado: new Date().toISOString() },
  noticias,
  videos: [...videos.values()].slice(-24).reverse()
};
await writeFile(ARCHIVO, JSON.stringify(salida, null, 2) + '\n');
console.log(`Robot listo: ${noticias.length} noticias, ${salida.videos.length} videos`);
