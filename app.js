const $=s=>document.querySelector(s), money=n=>'S/ '+n.toFixed(2);
const TX={polo:160,poleron:205,casaca:205,pantalon:90,short:112,gorra:155};
const SHP={
 polo:(c,a)=>`<path d="M95 40 L120 28 Q150 55 180 28 L205 40 L270 95 L242 135 L218 115 L218 305 L82 305 L82 115 L58 135 L30 95 Z" fill="${c}"/><path d="M120 28 Q150 55 180 28" fill="none" stroke="${a}" stroke-width="5"/>`,
 poleron:(c,a)=>`<path d="M95 60 Q150 20 205 60 L270 110 L245 160 L220 140 L220 310 L80 310 L80 140 L55 160 L30 110 Z" fill="${c}"/><path d="M115 50 Q150 100 185 50" fill="none" stroke="${a}" stroke-width="5"/><rect x="110" y="240" width="80" height="45" rx="8" fill="none" stroke="${a}" stroke-width="3" opacity=".5"/>`,
 casaca:(c,a)=>`<path d="M95 50 Q150 20 205 50 L270 105 L245 165 L220 145 L220 310 L80 310 L80 145 L55 165 L30 105 Z" fill="${c}"/><line x1="150" y1="40" x2="150" y2="310" stroke="${a}" stroke-width="4"/><path d="M115 45 L150 85 L185 45" fill="none" stroke="${a}" stroke-width="4"/>`,
 pantalon:(c,a)=>`<path d="M95 30 L205 30 L228 312 L162 312 L150 120 L138 312 L72 312 Z" fill="${c}"/><rect x="95" y="30" width="110" height="16" fill="${a}" opacity=".35"/>`,
 short:(c,a)=>`<path d="M85 60 L215 60 L238 230 L162 230 L150 150 L138 230 L62 230 Z" fill="${c}"/><rect x="85" y="60" width="130" height="14" fill="${a}" opacity=".35"/>`,
 gorra:(c,a)=>`<path d="M70 200 Q70 85 150 85 Q230 85 230 200 Z" fill="${c}"/><path d="M55 200 L255 200 Q245 232 150 232 Q65 232 55 200 Z" fill="${a}" opacity=".55"/>`};
const garment=(t,c,a)=>'data:image/svg+xml,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 340"><rect width="300" height="340" fill="#efece6"/>${SHP[t](c,a)}<text x="150" y="${TX[t]}" text-anchor="middle" font-family="Arial Black,Arial" font-weight="900" font-size="24" fill="${a}">URBAN</text><text x="150" y="${TX[t]+17}" text-anchor="middle" font-family="Arial" font-size="11" letter-spacing="4" fill="${a}">STYLE · LIMA</text></svg>`);
const PH=(n,i)=>'data:image/svg+xml,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${['#3a2a20','#2b3a33','#33303f','#40352a'][((i||1)-1)%4]}"/><stop offset="1" stop-color="#161616"/></linearGradient></defs><rect width="300" height="400" fill="url(#g)"/><text x="150" y="190" text-anchor="middle" font-size="40">📷</text><text x="150" y="230" text-anchor="middle" font-family="Arial" font-size="15" fill="#fff">Pon tu foto aquí</text><text x="150" y="254" text-anchor="middle" font-family="monospace" font-size="14" fill="#c8501e">img/${n}.jpg</text></svg>`);
/* ===== IMÁGENES =====
   Solo guarda tus fotos en la carpeta img/ con estos nombres (ver img/LEEME.txt).
   Acepta .jpg, .png, .webp o .jpeg. Si una foto no existe, se muestra un dibujo de respaldo. */
const EXT=['jpg','png','webp','jpeg'];
const cand=b=>b.split('|').flatMap(n=>EXT.map(e=>n+'.'+e));
const pic=(b,alt,fb)=>`<img src="img/${cand(b)[0]}" alt="${alt}" data-b="${b}" data-i="0" onerror="nx(this,'${fb}')">`;
function nx(el,fb){const c=cand(el.dataset.b),i=+el.dataset.i+1;
 if(i<c.length){el.dataset.i=i;el.src='img/'+c[i];return}
 el.onerror=null;const[k,v]=fb.split(':');
 if(k==='x')el.style.display='none';
 else if(k==='p')el.src=FB(+v);
 else if(k==='h')el.src=PH(el.dataset.b.split('|')[0],+v);
 else if(k==='c')el.src=FB(P.find(p=>p.t===v).id)}
const SZ={polo:['S','M','L','XL'],poleron:['S','M','L','XL'],casaca:['S','M','L','XL'],pantalon:['28','30','32','34'],short:['S','M','L','XL'],gorra:['Única']};
const mk=(id,n,t,p,c,a)=>({id,n,t,p,c,a,s:Object.fromEntries(SZ[t].map((z,i)=>[z,t==='gorra'?6+id%4:2+(id*(i+2))%6]))});
const P=[mk(1,'Polo Oversize Lima Noche','polo',59,'#1c1c1e','#e8e4da'),mk(2,'Polo Oversize Gamarra Arena','polo',59,'#d8c9a8','#2b2b2b'),mk(3,'Polo Oversize Costa Verde','polo',59,'#4f6b4a','#f2efe6'),
 mk(4,'Polo Gráfico Barranco','polo',65,'#e9e4d8','#c8501e'),mk(5,'Polo Boxy Miraflores','polo',65,'#2f4a6b','#f2efe6'),mk(6,'Polo Básico Hueso','polo',49,'#f1ede2','#161616'),mk(7,'Polo Rayas Callao','polo',55,'#8a3b2e','#f2efe6'),
 mk(8,'Polerón Urbano Grafito','poleron',139,'#3b3d42','#f2efe6'),mk(9,'Polerón Capucha Arena','poleron',139,'#cdbb97','#2b2b2b'),mk(10,'Polerón Vino Rímac','poleron',129,'#5c1f2b','#f2efe6'),
 mk(11,'Casaca Bomber Oliva','casaca',179,'#56604a','#e8e4da'),mk(12,'Casaca Cortaviento Negra','casaca',159,'#1c1c1e','#c8501e'),
 mk(13,'Pantalón Cargo Negro','pantalon',119,'#1c1c1e','#e8e4da'),mk(14,'Pantalón Cargo Arena','pantalon',119,'#c9b88f','#2b2b2b'),mk(15,'Pantalón Jogger Gris','pantalon',99,'#7b7e85','#f2efe6'),mk(16,'Pantalón Wide Leg Denim','pantalon',129,'#3d5878','#e8e4da'),
 mk(17,'Short Cargo Oliva','short',69,'#56604a','#f2efe6'),mk(18,'Short Deportivo Negro','short',59,'#1c1c1e','#e8e4da'),
 mk(19,'Gorra Dad Hat Negra','gorra',39,'#1c1c1e','#c8501e'),mk(20,'Gorra Trucker Arena','gorra',39,'#cdbb97','#2b2b2b')];
const CATS=[['all','Todo'],['polo','Polos'],['poleron','Polerones'],['casaca','Casacas'],['pantalon','Pantalones'],['short','Shorts'],['gorra','Gorras']];
const FB=id=>{const x=P.find(p=>p.id===id);return garment(x.t,x.c,x.a)};
const im=x=>pic('p'+String(x.id).padStart(2,'0'),x.n,'p:'+x.id);
const CUP={URBAN10:{pct:.10},BIENVENIDO:{pct:.15,login:1}};
let DB=JSON.parse(localStorage.getItem('us')||'null')||{users:[],user:null,cart:[],coupon:'',pts:false,orders:[]};
DB.stock=DB.stock||{};P.forEach(x=>{DB.stock[x.id]=DB.stock[x.id]||{...x.s}});
const save=()=>localStorage.setItem('us',JSON.stringify(DB));
let flt='all',sel={},chk={};
const me=()=>DB.users.find(u=>u.email===DB.user);
const toast=m=>{const t=$('#toast');t.textContent=m;t.style.display='block';clearTimeout(t.h);t.h=setTimeout(()=>t.style.display='none',2400)};

/* Catálogo */
function renderFlt(){$('#flt').innerHTML=CATS.map(([k,l])=>`<button class="chip ${flt===k?'on':''}" onclick="flt='${k}';renderFlt();renderGrid()">${l}</button>`).join('')}
const card=x=>{const st=DB.stock[x.id],s=sel[x.id],left=s?st[s]:null;
  return `<div class="card">${im(x)}<div class="b"><span class="tag">${CATS.find(c=>c[0]===x.t)[1].toUpperCase()} · EDICIÓN LIMITADA</span><b>${x.n}</b><span class="pr">${money(x.p)}</span>
  <div class="sz">${Object.keys(st).map(z=>`<button class="${s===z?'on':''}" ${st[z]<1?'disabled':''} onclick="sel[${x.id}]='${z}';renderGrid()">${z}</button>`).join('')}</div>
  <div class="st ${left&&left<=3?'low':''}">${s?(left<=3?`¡Solo quedan ${left} en talla ${s}!`:`${left} disponibles en talla ${s}`):'Elige tu talla'}</div>
  <button class="btn" style="margin-top:auto" onclick="add(${x.id})">Agregar al carrito</button></div></div>`};
function renderGrid(){$('#grid').innerHTML=P.filter(x=>flt==='all'||x.t===flt).map(card).join('');$('#feat').innerHTML=[1,8,11,13].map(i=>card(P.find(x=>x.id===i))).join('')}
const LEG=['2','3','4','Gemini_Generated_Image_d9d2mtd9d2mtd9d2']; /* nombres que ya usabas en tu portada */
function renderHome(){
 $('#hg').innerHTML=[1,2,3,4].map(i=>pic('portada'+i+'|'+LEG[i-1],'Modelo '+i,'h:'+i)).join('');
 $('#tiles').innerHTML=CATS.slice(1).map(([k,l])=>`<a class="tile" href="#coleccion/${k}">${pic('cat-'+k+'|p'+String(P.find(x=>x.t===k).id).padStart(2,'0'),l,'c:'+k)}<span>${l}</span></a>`).join('');
 [['bn-col','banner-coleccion'],['bn-tal','banner-tallas'],['si1','sostenible1'],['si2','sostenible2'],['si3','sostenible3']].forEach(([id,b])=>{$('#'+id).innerHTML=pic(b,b,'x')})}
const VIEWS=['inicio','coleccion','tallas','sostenible'];
function route(){const h=location.hash.slice(1).split('/'),v=VIEWS.includes(h[0])?h[0]:'inicio';
 if(v==='coleccion')flt=CATS.some(c=>c[0]===h[1])?h[1]:'all';
 document.querySelectorAll('.view').forEach(e=>e.classList.toggle('on',e.id==='v-'+v));
 document.querySelectorAll('.top nav a').forEach(a=>a.classList.toggle('act',a.hash==='#'+v));
 renderFlt();renderGrid();scrollTo(0,0)}
addEventListener('hashchange',route);
const renderAll=()=>{renderFlt();renderGrid();renderCart();renderUser()};

/* Carrito */
function add(id){const z=sel[id];if(!z)return toast('Elige una talla primero');
 const it=DB.cart.find(c=>c.id===id&&c.z===z),have=it?it.q:0;
 if(have>=DB.stock[id][z])return toast('No hay más unidades en esa talla');
 it?it.q++:DB.cart.push({id,z,q:1});save();renderCart();toast('Agregado al carrito ✓')}
function qty(i,d){const c=DB.cart[i];c.q+=d;if(c.q>DB.stock[c.id][c.z])c.q--;if(c.q<1)DB.cart.splice(i,1);save();renderCart()}
function totals(){
 const sub=DB.cart.reduce((a,c)=>a+P.find(x=>x.id===c.id).p*c.q,0),u=me(),cp=CUP[DB.coupon];
 const d1=cp&&(!cp.login||u)?sub*cp.pct:0;
 const pd=DB.pts&&u?Math.min(Math.floor(u.pts/20),Math.floor(sub-d1)):0;
 const ship=sub===0||sub>=150?0:8;
 return{sub,d1,pd,ship,total:sub-d1-pd+ship}}
function renderCart(){
 $('#cc').textContent=DB.cart.reduce((a,c)=>a+c.q,0);
 $('#ci').innerHTML=DB.cart.length?DB.cart.map((c,i)=>{const p=P.find(x=>x.id===c.id);
  return `<div class="it">${im(p)}<div><b>${p.n}</b><br>Talla ${c.z} · ${money(p.p)}<div class="q"><button onclick="qty(${i},-1)">−</button> ${c.q} <button onclick="qty(${i},1)">+</button></div></div><b>${money(p.p*c.q)}</b></div>`}).join(''):'<p style="padding:30px 0;text-align:center;color:#6b6b6b">Tu carrito está vacío</p>';
 const t=totals(),u=me();
 $('#cf').innerHTML=`<div class="cp"><input id="cin" placeholder="Código de descuento" value="${DB.coupon}"><button class="btn g" onclick="coupon()">Aplicar</button></div>
 ${u?`<label><input type="checkbox" style="width:auto;margin:0 6px 0 0" ${DB.pts?'checked':''} onchange="DB.pts=this.checked;save();renderCart()">Canjear puntos (tienes ${u.pts} = ${money(Math.floor(u.pts/20))})</label>`:'<small style="color:#6b6b6b">Ingresa para ganar y canjear puntos.</small>'}
 <div class="r" style="margin-top:8px"><span>Subtotal</span><span>${money(t.sub)}</span></div>
 ${t.d1?`<div class="r ok"><span>Descuento (${DB.coupon})</span><span>− ${money(t.d1)}</span></div>`:''}
 ${t.pd?`<div class="r ok"><span>Puntos canjeados</span><span>− ${money(t.pd)}</span></div>`:''}
 <div class="r"><span>Envío Lima (gratis desde S/ 150)</span><span>${money(t.ship)}</span></div>
 <div class="r" style="font-size:18px;font-weight:700;margin:6px 0 10px"><span>Total</span><span>${money(t.total)}</span></div>
 <button class="btn" style="width:100%" ${DB.cart.length?'':'disabled'} onclick="checkout()">Ir a pagar</button>`}
function coupon(){const c=$('#cin').value.trim().toUpperCase();
 if(!c){DB.coupon='';save();return renderCart()}
 if(!CUP[c])return toast('Código no válido');
 if(CUP[c].login&&!me())return toast('Ese código es solo para usuarios registrados');
 DB.coupon=c;save();renderCart();toast('Cupón aplicado ✓')}
const toggleCart=o=>$('#drawer').classList.toggle('open',!!o);

/* Modal */
const openM=h=>{$('#mc').innerHTML=h;$('#modal').classList.add('open')};
const closeM=()=>$('#modal').classList.remove('open');

/* Usuario */
function renderUser(){const u=me();$('#bu').textContent=u?'👤 '+u.name.split(' ')[0]+' · '+u.pts+' pts':'👤 Ingresar'}
function authM(tab='in'){const u=me();
 if(u)return openM(`<h3>Hola, ${u.name}</h3><p>${u.email}</p><p style="margin:10px 0">Puntos: <b>${u.pts}</b> (20 pts = S/ 1)<br>Pedidos realizados: <b>${DB.orders.filter(o=>o.email===u.email).length}</b></p><button class="btn" onclick="logout()">Cerrar sesión</button>`);
 openM(`<div class="tabs"><button class="${tab==='in'?'on':''}" onclick="authM('in')">Ingresar</button><button class="${tab==='up'?'on':''}" onclick="authM('up')">Registrarme</button></div>
 <form onsubmit="return ${tab==='in'?'login':'register'}(event)">
 ${tab==='up'?'<label>Nombre completo<input id="an" required></label>':''}
 <label>Correo<input id="ae" type="email" required></label><label>Contraseña<input id="ap" type="password" minlength="4" required></label>
 <button class="btn" style="width:100%">${tab==='in'?'Ingresar':'Crear cuenta y ganar 100 puntos'}</button></form>`)}
function register(e){e.preventDefault();const email=$('#ae').value.trim().toLowerCase();
 if(DB.users.some(u=>u.email===email))return toast('Ese correo ya está registrado'),false;
 DB.users.push({name:$('#an').value.trim(),email,pass:$('#ap').value,pts:100});DB.user=email;DB.coupon='BIENVENIDO';save();closeM();renderAll();toast('¡Cuenta creada! Cupón BIENVENIDO aplicado 🎉');return false}
function login(e){e.preventDefault();const u=DB.users.find(x=>x.email===$('#ae').value.trim().toLowerCase()&&x.pass===$('#ap').value);
 if(!u)return toast('Correo o contraseña incorrectos'),false;DB.user=u.email;save();closeM();renderAll();toast('Bienvenido de vuelta ✓');return false}
function logout(){DB.user=null;DB.pts=false;save();closeM();renderAll()}

/* Checkout en 3 pasos */
function checkout(){toggleCart(0);chk={step:1,t0:Date.now(),pay:'Yape'};stepM()}
function stepM(){const s=chk.step,bar=`<div class="steps">${[1,2,3].map(i=>`<i class="${i<=s?'on':''}"></i>`).join('')}</div>`,u=me();
 if(s===1)openM(`${bar}<h3>1. Datos de entrega</h3><form onsubmit="return go(event,2)">
  <label>Nombre<input id="dn" required value="${chk.n||u?.name||''}"></label><label>Celular<input id="dt" required pattern="[0-9]{9}" placeholder="9 dígitos" value="${chk.tel||''}"></label>
  <label>Dirección<input id="dd" required value="${chk.dir||''}"></label>
  <label>Distrito<select id="ds">${['Miraflores','San Isidro','Surco','San Borja','La Molina','Lima Cercado','Jesús María','Magdalena','San Miguel','Otro (Lima)'].map(d=>`<option ${chk.dis===d?'selected':''}>${d}</option>`).join('')}</select></label>
  <button class="btn" style="width:100%">Continuar</button></form>`);
 if(s===2)openM(`${bar}<h3>2. Método de pago</h3><form onsubmit="return go(event,3)">
  ${['Yape','Plin','Tarjeta'].map(m=>`<label class="pay ${chk.pay===m?'on':''}"><input type="radio" name="pm" ${chk.pay===m?'checked':''} onclick="chk.pay='${m}';stepM()"> <b>${m}</b> <small>${m==='Tarjeta'?'Débito o crédito':'Pago con QR / celular'}</small></label>`).join('')}
  ${chk.pay==='Tarjeta'?'<input placeholder="Número de tarjeta (simulado)" maxlength="19"><div style="display:flex;gap:8px"><input placeholder="MM/AA"><input placeholder="CVV" maxlength="3"></div>':`<p style="background:#f7f5f0;padding:12px;border-radius:8px;margin-bottom:10px;font-size:14px">📲 Simulación: escanearías el QR de ${chk.pay} y pagarías <b>${money(totals().total)}</b>.</p>`}
  <button class="btn" style="width:100%">Continuar</button></form>`);
 if(s===3){const t=totals();openM(`${bar}<h3>3. Confirma tu pedido</h3>
  ${DB.cart.map(c=>{const p=P.find(x=>x.id===c.id);return `<div style="display:flex;justify-content:space-between;font-size:14px"><span>${c.q}× ${p.n} (${c.z})</span><span>${money(p.p*c.q)}</span></div>`}).join('')}
  <hr style="margin:10px 0;border:0;border-top:1px solid #e4e0d6"><p style="font-size:14px">📍 ${chk.dir}, ${chk.dis}<br>💳 ${chk.pay} · Entrega estimada: 24 a 48 horas<br>🌱 Empaque compostable incluido</p>
  <p style="font-size:20px;font-weight:700;margin:10px 0">Total: ${money(t.total)}</p>
  <button class="btn" style="width:100%" onclick="confirmOrder()">Confirmar compra (simulada)</button>`)}}
function go(e,n){e.preventDefault();if(chk.step===1){chk.n=$('#dn').value;chk.tel=$('#dt').value;chk.dir=$('#dd').value;chk.dis=$('#ds').value}chk.step=n;stepM();return false}
function confirmOrder(){const t=totals(),u=me(),code='US-'+String(DB.orders.length+1).padStart(4,'0');
 DB.cart.forEach(c=>DB.stock[c.id][c.z]-=c.q);
 let earn=0;if(u){u.pts-=t.pd*20;earn=Math.floor(t.total);u.pts+=earn}
 DB.orders.push({code,email:u?.email||'invitado',total:t.total,items:DB.cart.length,pasos:3,segundos:Math.round((Date.now()-chk.t0)/1000),pago:chk.pay,fecha:new Date().toISOString()});
 DB.cart=[];DB.coupon='';DB.pts=false;sel={};save();renderAll();
 openM(`<h3 class="ok">✅ ¡Pedido confirmado!</h3><p style="margin:10px 0">Código: <b>${code}</b><br>Total pagado: <b>${money(t.total)}</b><br>Entrega en 24 a 48 horas.</p>${u?`<p>Ganaste <b>${earn} puntos</b> 🎉</p>`:'<p>Regístrate para ganar puntos en tu próxima compra.</p>'}<p style="margin:10px 0;font-size:13px;color:#6b6b6b">Completaste la compra en 3 pasos.</p><button class="btn" onclick="closeM()">Seguir comprando</button>`)}

renderHome();renderAll();route();
