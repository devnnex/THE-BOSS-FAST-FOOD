// app.js — lógica completa para The Boss (con imágenes locales)

// ---------- Config ----------
const BUSINESS_PHONE = '573001234567'; // <- reemplaza por el número real (sin '+')
const DELIVERY_FEE = 4000; // tarifa por defecto de domicilio

// ---------- Datos de ejemplo ----------
const products = [
  { 
    id: 'b1',
    category: 'hamburguesas',
    title: 'Boss Burger',
    price: 18000,
    desc: 'Carne 200g, queso cheddar, lechuga y tomate',
    image: 'images/hamburgesa1.png',
    ingredients: ['Queso','Lechuga','Tomate','Cebolla'],
    extras: [{name:'Extra Queso', price:1500},{name:'Bacón', price:2500}]
  },
  { 
    id: 'b2',
    category: 'hamburguesas',
    title: 'Doble Boss',
    price: 26000,
    desc: 'Doble carne, doble queso',
    image: 'images/hamburgesa2.png',
    ingredients: ['Queso','Carne','Lechuga'],
    extras:[{name:'Huevo',price:1200}]
  },
  { 
    id: 'b3',
    category: 'hamburguesas',
    title: 'Doble Boss',
    price: 26000,
    desc: 'Doble carne, doble queso',
    image: 'images/hamburgesa3.png',
    ingredients: ['Queso','Carne','Lechuga'],
    extras:[{name:'Huevo',price:1200}]
  },
  { 
    id: 'b4',
    category: 'hamburguesas',
    title: 'Doble Boss',
    price: 26000,
    desc: 'Doble carne, doble queso',
    image: 'images/hamburgesa4.png',
    ingredients: ['Queso','Carne','Lechuga'],
    extras:[{name:'Huevo',price:1200}]
  },
  { 
    id: 'b5',
    category: 'hamburguesas',
    title: 'Doble Boss',
    price: 26000,
    desc: 'Doble carne, doble queso',
    image: 'images/hamburgesa5.png',
    ingredients: ['Queso','Carne','Lechuga'],
    extras:[{name:'Huevo',price:1200}]
  },
  { 
    id: 'b6',
    category: 'hamburguesas',
    title: 'Doble Boss',
    price: 26000,
    desc: 'Doble carne, doble queso',
    image: 'images/hamburgesa6.png',
    ingredients: ['Queso','Carne','Lechuga'],
    extras:[{name:'Huevo',price:1200}]
  },
  { 
    id: 'p1',
    category: 'perros',
    title: 'Perro Boss',
    price: 9000,
    desc:'Salchicha artesanal con papas',
    image: 'images/p1.png',
    ingredients:['Ketchup','Mostaza','Cebolla'],
    extras:[{name:'Queso',price:1000}]
  },
  { 
    id: 'p2',
    category: 'perros',
    title: 'Papas Locas',
    price: 12000,
    desc:'Papas con toppings',
    image: 'images/p2.png',
    ingredients:['Salsa','Queso'],
    extras:[{name:'Pollo',price:2000}]
  },
  { 
    id: 'p3',
    category: 'perros',
    title: 'Papas Locas',
    price: 12000,
    desc:'Papas con toppings',
    image: 'images/p3.png',
    ingredients:['Salsa','Queso'],
    extras:[{name:'Pollo',price:2000}]
  },
  { 
    id: 'p4',
    category: 'perros',
    title: 'Papas Locas',
    price: 12000,
    desc:'Papas con toppings',
    image: 'images/p4.png',
    ingredients:['Salsa','Queso'],
    extras:[{name:'Pollo',price:2000}]
  },
  { 
    id: 'p5',
    category: 'perros',
    title: 'Papas Locas',
    price: 12000,
    desc:'Papas con toppings',
    image: 'images/p5.png',
    ingredients:['Salsa','Queso'],
    extras:[{name:'Pollo',price:2000}]
  },
  { 
    id: 'p6',
    category: 'perros',
    title: 'Perro Cool',
    price: 12000,
    desc:'Papas con toppings',
    image: 'images/p6.png',
    ingredients:['Salsa','Queso'],
    extras:[{name:'Pollo',price:2000}]
  },
  { 
    id: 'pap1',
    category: 'papas',
    title: 'Papas Locas',
    price: 12000,
    desc:'Papas con toppings',
    image: 'images/pap1.png',
    ingredients:['Salsa','Queso'],
    extras:[{name:'Pollo',price:2000}]
  },
  { 
    id: 'pap2',
    category: 'papas',
    title: 'Papas Loki Aventura',
    price: 12000,
    desc:'Papas con toppings',
    image: 'images/pap2.png',
    ingredients:['Salsa','Queso'],
    extras:[{name:'Pollo',price:2000}]
  },
  { 
    id: 'pap3',
    category: 'papas',
    title: 'Loki Papas XL',
    price: 12000,
    desc:'Papas con toppings',
    image: 'images/pap3.png',
    ingredients:['Salsa','Queso'],
    extras:[{name:'Pollo',price:2000}]
  },
  { 
    id: 'pap4',
    category: 'papas',
    title: 'Crazy papas premium',
    price: 12000,
    desc:'Papas con toppings',
    image: 'images/pap4.png',
    ingredients:['Salsa','Queso'],
    extras:[{name:'Pollo',price:2000}]
  },
  { 
    id: 'pap5',
    category: 'papas',
    title: 'Papas Loks ',
    price: 12000,
    desc:'Papas con toppings',
    image: 'images/pap5.png',
    ingredients:['Salsa','Queso'],
    extras:[{name:'Pollo',price:2000}]
  },
  { 
    id: 'pap6',
    category: 'papas',
    title: 'Papas Lokis',
    price: 12000,
    desc:'Papas con toppings',
    image: 'images/pap6.png',
    ingredients:['Salsa','Queso'],
    extras:[{name:'Pollo',price:2000}]
  },
  { 
    id: 'bebi1',
    category: 'bebidas',
    title: 'Fanta Naranja 330ml',
    price: 4500,
    desc:'Refresco',
    image: 'images/beb1.png',
    ingredients:[],
    extras:[]
  },
  { 
    id: 'bebi2',
    category: 'bebidas',
    title: 'Coca Cola 1.5L',
    price: 7500,
    desc:'Refresco',
    image: 'images/beb2.png',
    ingredients:[],
    extras:[]
  },
  { 
    id: 'bebi3',
    category: 'bebidas',
    title: 'Fanta Lata',
    price: 3500,
    desc:'Refresco',
    image: 'images/beb3.png',
    ingredients:[],
    extras:[]
  },
  { 
    id: 'bebi4',
    category: 'bebidas',
    title: 'Pepsi Lata',
    price: 5500,
    desc:'Refresco',
    image: 'images/beb4.png',
    ingredients:[],
    extras:[]
  },
  { 
    id: 'bebi5',
    category: 'bebidas',
    title: 'Monster Lata',
    price: 7500,
    desc:'Refresco',
    image: 'images/beb5.png',
    ingredients:[],
    extras:[]
  },
  { 
    id: 'bebi6',
    category: 'bebidas',
    title: 'Schweppes Lata',
    price: 5500,
    desc:'Refresco',
    image: 'images/beb6.png',
    ingredients:[],
    extras:[]
  },
  { 
    id: 'o1',
    category: 'otros',
    title: 'Nuggets + Papas',
    price: 25000,
    desc:'Con salsa especial',
    image: 'images/otros1.png',
    ingredients:['Salsa'],
    extras:[{name:'Queso',price:1500}]
  }
];

const categories = [...new Set(products.map(p=>p.category))];

// ---------- Estado ----------
let cart = JSON.parse(localStorage.getItem('tb_cart') || '[]');
let activeCategory = 'hamburguesas';

// ---------- DOM refs ----------
const catalogEl = document.getElementById('catalog');
const categoriesEl = document.querySelector('.categories');
const navBtns = document.querySelectorAll('.nav-btn');
const cartCountEl = document.getElementById('cart-count');
const cartDrawer = document.getElementById('cart-drawer');
const cartItemsEl = document.getElementById('cart-items');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartDeliveryEl = document.getElementById('cart-delivery');
const cartTotalEl = document.getElementById('cart-total');
const openCartBtn = document.getElementById('open-cart');
const closeCartBtn = document.getElementById('close-cart');
const checkoutBtn = document.getElementById('checkout-btn');
const productModal = document.getElementById('product-modal');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');
const checkoutModal = document.getElementById('checkout-modal');
const checkoutForm = document.getElementById('checkout-form');
const addressLabel = document.getElementById('address-label');
const checkoutClose = document.getElementById('checkout-close');
const backToCartBtn = document.getElementById('back-to-cart');
const clearCartBtn = document.getElementById('clear-cart');
const searchInput = document.getElementById('search');

// ---------- Init ----------
function init(){
  renderCategories();
  setActiveCategory(activeCategory);
  bindEvents();
  refreshCartUI();
}
init();

// ---------- Render categorías ----------
function renderCategories(){
  categoriesEl.innerHTML = '';
  categories.forEach(cat=>{
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = cat === activeCategory ? 'active' : '';
    btn.dataset.cat = cat;
    btn.textContent = capitalize(cat);
    btn.addEventListener('click', ()=> switchCategory(cat));
    categoriesEl.appendChild(btn);
  });
}

// ---------- Cambiar categoría ----------
function setActiveCategory(cat){
  activeCategory = cat;
  Array.from(document.querySelectorAll('.categories button')).forEach(b=> b.classList.toggle('active', b.dataset.cat === cat));
  Array.from(navBtns).forEach(b=> b.classList.toggle('active', b.dataset.cat === cat));
  renderProducts(cat);
}

function switchCategory(cat){
  const ct = catalogEl;
  ct.classList.remove('fade-in');
  ct.classList.add('fade-out');
  setTimeout(()=>{
    setActiveCategory(cat);
    ct.classList.remove('fade-out');
    ct.classList.add('fade-in');
  }, 180);
}

// ---------- Render productos ----------
function renderProducts(cat){
  const q = (searchInput.value || '').trim().toLowerCase();
  const items = products.filter(p => p.category === cat && (p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)));
  catalogEl.innerHTML = '';

  if(items.length === 0){
    catalogEl.innerHTML = `<div class="no-results">No hay productos</div>`;
    return;
  }

  items.forEach(p=>{
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
      <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}">
      <div class="title">${escapeHtml(p.title)}</div>
      <div class="desc">${escapeHtml(p.desc)}</div>
      <div class="meta">
        <div class="price">$${numberWithCommas(p.price)}</div>
        <button class="add" data-id="${p.id}">Agregar</button>
      </div>
    `;
    el.querySelector('.add').addEventListener('click', ()=> openProductModal(p.id));
    catalogEl.appendChild(el);
  });
}

// ---------- Modal producto ----------
function openProductModal(productId){
  const p = products.find(x=>x.id === productId);
  if(!p) return;
  productModal.classList.remove('hidden');
  productModal.setAttribute('aria-hidden', 'false');

  modalContent.innerHTML = '';
  const wrapper = document.createElement('div');
  wrapper.className = 'options';
  wrapper.innerHTML = `
    <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}" style="width:100%;border-radius:10px;margin-bottom:10px;">
    <h3>${escapeHtml(p.title)} — $${numberWithCommas(p.price)}</h3>
    <p class="desc">${escapeHtml(p.desc)}</p>
  `;

  // Ingredientes para quitar
  if(p.ingredients && p.ingredients.length){
    const ingList = document.createElement('div');
    ingList.className = 'option-list';
    ingList.innerHTML = '<strong>Quitar ingredientes</strong>';
    p.ingredients.forEach((ing, idx)=>{
      const id = `ing-${p.id}-${idx}`;
      const label = document.createElement('label');
      label.className = 'checkbox';
      label.innerHTML = `<input type="checkbox" data-ing="${escapeHtml(ing)}" id="${id}"> Quitar ${escapeHtml(ing)}`;
      ingList.appendChild(label);
    });
    wrapper.appendChild(ingList);
  }

  // Extras
  if(p.extras && p.extras.length){
    const extrasDiv = document.createElement('div');
    extrasDiv.className = 'option-list';
    extrasDiv.innerHTML = '<strong>Agregar adicionales</strong>';
    p.extras.forEach((ex, idx)=>{
      const id = `ex-${p.id}-${idx}`;
      const label = document.createElement('label');
      label.className = 'additional';
      label.innerHTML = `<input type="checkbox" data-extra="${escapeHtml(ex.name)}" data-price="${ex.price}" id="${id}"> ${escapeHtml(ex.name)} (+$${numberWithCommas(ex.price)})`;
      extrasDiv.appendChild(label);
    });
    wrapper.appendChild(extrasDiv);
  }

  // Cantidad
  const qtyRow = document.createElement('div');
  qtyRow.className = 'qty-controls';
  qtyRow.innerHTML = `<button id="qty-decr" type="button">-</button><span id="qty-val">1</span><button id="qty-incr" type="button">+</button>`;
  wrapper.appendChild(qtyRow);

  // Precio dinámico + añadir
  const priceRow = document.createElement('div');
  priceRow.style.display = 'flex';
  priceRow.style.justifyContent = 'space-between';
  priceRow.style.marginTop = '12px';
  priceRow.innerHTML = `<div><strong>Total:</strong> <span id="modal-price">$${numberWithCommas(p.price)}</span></div><button id="modal-add" class="btn-primary" type="button">Añadir al carrito</button>`;
  wrapper.appendChild(priceRow);

  modalContent.appendChild(wrapper);

  // Estado modal
  let qty = 1;
  function getExtrasSum(){
    return Array.from(modalContent.querySelectorAll('input[data-price]:checked')).reduce((s, el)=> s + Number(el.dataset.price || 0), 0);
  }
  function updateModalPrice(){
    const extras = getExtrasSum();
    const total = (p.price + extras) * qty;
    const el = document.getElementById('modal-price');
    if(el) el.textContent = '$' + numberWithCommas(total);
  }

  // Listeners
  modalContent.querySelector('#qty-decr').addEventListener('click', ()=>{
    if(qty > 1) qty--;
    document.getElementById('qty-val').textContent = qty;
    updateModalPrice();
  });
  modalContent.querySelector('#qty-incr').addEventListener('click', ()=>{
    qty++;
    document.getElementById('qty-val').textContent = qty;
    updateModalPrice();
  });
  modalContent.querySelectorAll('input[type=checkbox]').forEach(inp => inp.addEventListener('change', updateModalPrice));

  modalContent.querySelector('#modal-add').addEventListener('click', ()=>{
    const removed = Array.from(modalContent.querySelectorAll('input[data-ing]:checked')).map(i => i.dataset.ing);
    const extras = Array.from(modalContent.querySelectorAll('input[data-extra]:checked')).map(i => ({ name: i.dataset.extra, price: Number(i.dataset.price) }));
    addToCart({ productId: p.id, title: p.title, price: p.price, qty, removed, extras });
    closeProductModal();
  });
}

function closeProductModal(){
  productModal.classList.add('hidden');
  productModal.setAttribute('aria-hidden','true');
  modalContent.innerHTML = '';
}
modalClose.addEventListener('click', closeProductModal);
productModal.addEventListener('click', (e)=>{ if(e.target === productModal) closeProductModal(); });

// ---------- Carrito ----------
function addToCart(item){
  const key = generateCartKey(item);
  const existing = cart.find(c => c.key === key);
  if(existing){ existing.qty += item.qty; }
  else{ cart.push({...item, key}); }
  persistCart();
  refreshCartUI();
}

function generateCartKey(it){
  const extrasPart = (it.extras || []).map(e => e.name).sort().join('|') || '';
  const removedPart = (it.removed || []).slice().sort().join('|') || '';
  return `${it.productId}::${extrasPart}::${removedPart}`;
}

function persistCart(){
  localStorage.setItem('tb_cart', JSON.stringify(cart));
}

function refreshCartUI(){
  cartCountEl.textContent = String(cart.reduce((s,i) => s + i.qty, 0));
  cartItemsEl.innerHTML = '';
  let subtotal = 0;

  if(cart.length === 0){
    cartItemsEl.innerHTML = '<div class="muted">Tu carrito está vacío</div>';
  } else {
    cart.forEach((c, idx)=>{
      const extrasText = (c.extras && c.extras.length) ? ('+' + c.extras.map(e=>e.name).join(', ')) : '';
      const removedText = (c.removed && c.removed.length) ? ('(sin ' + c.removed.join(', ') + ')') : '';
      const extrasSum = (c.extras || []).reduce((s,e)=> s + (e.price || 0), 0);
      const itemTotal = (c.price + extrasSum) * c.qty;
      subtotal += itemTotal;

      const row = document.createElement('div');
      row.className = 'cart-item';
      row.innerHTML = `
        <div class="info">
          <div><strong>${escapeHtml(c.title)}</strong> ${escapeHtml(removedText)}</div>
          <div class="muted">${escapeHtml(extrasText)}</div>
        </div>
        <div style="text-align:right">
          <div>$${numberWithCommas(itemTotal)}</div>
          <div class="qty-controls">
            <button data-action="decr" data-idx="${idx}" type="button">-</button>
            <span>${c.qty}</span>
            <button data-action="incr" data-idx="${idx}" type="button">+</button>
            <button data-action="del" data-idx="${idx}" type="button">🗑</button>
          </div>
        </div>
      `;
      cartItemsEl.appendChild(row);
    });
  }

  cartSubtotalEl.textContent = '$' + numberWithCommas(subtotal);
  const delivery = subtotal > 0 ? DELIVERY_FEE : 0;
  cartDeliveryEl.textContent = '$' + numberWithCommas(delivery);
  cartTotalEl.textContent = '$' + numberWithCommas(subtotal + delivery);

  // bind buttons
  cartItemsEl.querySelectorAll('button').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const action = btn.dataset.action;
      const i = Number(btn.dataset.idx);
      if(Number.isNaN(i)) return;
      if(action === 'incr') cart[i].qty++;
      else if(action === 'decr') cart[i].qty = Math.max(1, cart[i].qty - 1);
      else if(action === 'del') cart.splice(i, 1);
      persistCart();
      refreshCartUI();
    });
  });
}

// ---------- Interacciones UI ----------
openCartBtn.addEventListener('click', ()=>{ cartDrawer.classList.remove('hidden'); cartDrawer.setAttribute('aria-hidden','false'); });
closeCartBtn.addEventListener('click', ()=>{ cartDrawer.classList.add('hidden'); cartDrawer.setAttribute('aria-hidden','true'); });
checkoutBtn.addEventListener('click', ()=>{ cartDrawer.classList.add('hidden'); openCheckout(); });
clearCartBtn.addEventListener('click', ()=>{ if(confirm('Vaciar carrito?')){ cart = []; persistCart(); refreshCartUI(); } });

// ---------- Checkout ----------
function openCheckout(){
  if(cart.length === 0){ alert('El carrito está vacío.'); return; }
  checkoutForm.reset();
  addressLabel.classList.add('hidden');
  checkoutModal.classList.remove('hidden');
  checkoutModal.setAttribute('aria-hidden','false');
}

checkoutClose.addEventListener('click', ()=>{ checkoutModal.classList.add('hidden'); checkoutModal.setAttribute('aria-hidden','true'); });
backToCartBtn.addEventListener('click', ()=>{ checkoutModal.classList.add('hidden'); cartDrawer.classList.remove('hidden'); });

// Mostrar campo dirección sólo si es domicilio
checkoutForm.addEventListener('change', ()=>{
  const methodEls = checkoutForm.elements['method'];
  let method = 'recoger';
  if(methodEls){
    if(methodEls.length !== undefined){
      for(const r of methodEls){ if(r.checked){ method = r.value; break; } }
    } else method = methodEls.value;
  }
  addressLabel.classList.toggle('hidden', method !== 'domicilio');
});

// Envío por WhatsApp
checkoutForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const fd = new FormData(checkoutForm);
  const clientName = fd.get('name') || '';
  const clientPhone = fd.get('phone') || '';
  const method = fd.get('method') || 'recoger';
  const address = fd.get('address') || '';
  const notes = fd.get('notes') || '';

  let textParts = [];
  textParts.push('*Pedido - The Boss*');
  textParts.push(`Cliente: ${clientName}`);
  textParts.push(`Teléfono: ${clientPhone}`);
  textParts.push(`Tipo: ${method}`);
  if(method === 'domicilio') textParts.push(`Dirección: ${address}`);
  textParts.push('');
  textParts.push('*Detalle:*');

  let subtotal = 0;
  cart.forEach(c=>{
    const extrasText = (c.extras && c.extras.length) ? (' + ' + c.extras.map(x=>x.name).join(', ')) : '';
    const removedText = (c.removed && c.removed.length) ? (' sin ' + c.removed.join(', ')) : '';
    const extrasSum = (c.extras || []).reduce((s,e)=> s + (e.price || 0), 0);
    const itemTotal = (c.price + extrasSum) * c.qty;
    subtotal += itemTotal;
    textParts.push(`${c.qty} x ${c.title}${extrasText}${removedText} — $${numberWithCommas(itemTotal)}`);
  });

  const delivery = subtotal > 0 ? DELIVERY_FEE : 0;
  textParts.push('');
  textParts.push(`Subtotal: $${numberWithCommas(subtotal)}`);
  textParts.push(`Envío: $${numberWithCommas(delivery)}`);
  textParts.push(`*Total: $${numberWithCommas(subtotal + delivery)}*`);
  if(notes) textParts.push(`Notas: ${notes}`);

  const msg = encodeURIComponent(textParts.join('\n'));
  const bp = String(BUSINESS_PHONE || '').replace(/[^0-9]/g,'');

  if(!bp || bp.length < 8){
    alert('Configura BUSINESS_PHONE en app.js con el número del negocio.');
    return;
  }

  const waUrl = `https://wa.me/${bp}?text=${msg}`;
  window.open(waUrl, '_blank');
});

// ---------- Utilidades ----------
function bindEvents(){
  navBtns.forEach(b=> b.addEventListener('click', ()=> setActiveCategory(b.dataset.cat)));
  cartCountEl.addEventListener('dblclick', ()=> { if(confirm('Vaciar carrito?')){ cart = []; persistCart(); refreshCartUI(); } });
  checkoutModal.addEventListener('click', (e)=> { if(e.target === checkoutModal) checkoutModal.classList.add('hidden'); });
  searchInput.addEventListener('input', ()=> renderProducts(activeCategory));
}

function capitalize(s){ return String(s || '').charAt(0).toUpperCase() + String(s || '').slice(1); }
function numberWithCommas(x){ return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
function escapeHtml(s){ return String(s || '').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }



// ====== MENÚ LATERAL ======
const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');

menuBtn.addEventListener('click', () => {
  sideMenu.classList.add('show');
  sideMenu.classList.remove('hidden');
});

closeMenu.addEventListener('click', () => {
  sideMenu.classList.remove('show');
  setTimeout(() => sideMenu.classList.add('hidden'), 350);
});

// Cerrar tocando fuera del panel
sideMenu.addEventListener('click', (e) => {
  if (e.target === sideMenu) {
    sideMenu.classList.remove('show');
    setTimeout(() => sideMenu.classList.add('hidden'), 350);
  }
});
