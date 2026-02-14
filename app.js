// app.js — lógica completa para The Boss (con imágenes locales)

// ---------- Config ----------
const BUSINESS_PHONE = '573236122968'; // <- reemplaza por el número real (sin '+')
const DELIVERY_FEE = 0; // tarifa por defecto de domicilio

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
function renderProducts(cat) { 
  const q = (searchInput.value || '').trim().toLowerCase();
  const items = products.filter(p => 
    p.category === cat && 
    (p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))
  );

  catalogEl.innerHTML = '';

  if (items.length === 0) {
    catalogEl.innerHTML = `<div class="no-results">No hay productos</div>`;
    return;
  }

  items.forEach(p => {
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
    el.querySelector('.add').addEventListener('click', () => openProductModal(p.id));
    catalogEl.appendChild(el);
  });
}


// ---------- MINI MODAL CLEAN ----------
// ---------- FUNCION CORREGIDA: openProductModal ----------
function openProductModal(id, cartIndex = null) {

  const p = products.find(x => x.id === id);
  if (!p) return;

  // ===== TAMAÑO SELECCIONADO =====
  let selectedSize = p.sizes
    ? p.sizes[0]
    : { id: p.id, price: p.price, image: p.image, label: "" };

  // ===== OVERLAY =====
  const overlay = document.createElement("div");
  overlay.className = "product-overlay";

  overlay.innerHTML = `
    <div class="product-sheet">
      <div class="modal-header">
        <span class="close">&times;</span>
      </div>

      <div class="modal-body">
        <div class="image-wrap">
          <img id="product-img" src="${selectedSize.image}" alt="${p.title}">
        </div>

        <div class="info">
          <h2>${p.title}</h2>
          <p>${p.desc}</p>

          ${p.sizes ? `
            <h3>Variedad</h3>
            <div class="size-selector">
              ${p.sizes.map(s => `
                <label class="size-option">
                  <input type="radio" name="size" value="${s.id}" ${s.id === selectedSize.id ? "checked" : ""}>
                  ${s.label} — $${numberWithCommas(s.price)}
                </label>
              `).join("")}
            </div>
          ` : ""}

          ${p.extras?.length ? `
            <h3>Adiciones</h3>
            <div class="extras-list">
              ${p.extras.map(e => `
                <label>
                  <input type="checkbox"
                         data-key="${e.name}"
                         data-price="${e.price}">
                  <span>${e.name}</span>
                  <span class="extra-controls">
                    <button class="minus-extra">−</button>
                    <span class="extra-qty">0</span>
                    <button class="plus-extra">+</button>
                  </span>
                  <small>+$${numberWithCommas(e.price)}</small>
                </label>
              `).join("")}
            </div>
          ` : ""}

          <div class="quantity">
            <button class="minus">−</button>
            <span class="qty">1</span>
            <button class="plus">+</button>
          </div>

          <button class="add-btn">
            ${cartIndex !== null ? "Actualizar" : "Agregar"}
            <span class="price">$${numberWithCommas(selectedSize.price)}</span>
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  // ===== CERRAR =====
  overlay.querySelector(".close").onclick = () => overlay.remove();
  overlay.onclick = e => { if (e.target === overlay) overlay.remove(); };

  // ===== VARIABLES =====
  let qty = 1;
  const qtyEl = overlay.querySelector(".qty");
  const priceEl = overlay.querySelector(".price");
  const extrasInputs = overlay.querySelectorAll(".extras-list input");

  // 🔐 ESTADO ROBUSTO DE EXTRAS
  const extrasState = {};
  // { "Tocineta": { qty: 3, price: 3000 } }

  // ===== EDICIÓN =====
  if (cartIndex !== null) {
    const item = cart[cartIndex];

    if (p.sizes) {
      selectedSize = p.sizes.find(s => s.id === item.sizeId) || p.sizes[0];
      overlay.querySelector("#product-img").src = selectedSize.image;
      overlay.querySelector(`input[value="${selectedSize.id}"]`).checked = true;
    }

    qty = item.qty;
    qtyEl.textContent = qty;

    if (item.extras?.length) {
      item.extras.forEach(e => {
        extrasState[e.name] = { qty: e.qty, price: e.price };
      });

      extrasInputs.forEach(input => {
        const key = input.dataset.key;
        if (extrasState[key]) {
          input.checked = true;
          input.closest("label").querySelector(".extra-qty").textContent =
            extrasState[key].qty;
        }
      });
    }
  }

  // ===== PRECIO FINAL (CORREGIDO) =====
  function updatePrice() {
    let extrasTotal = 0;

    Object.values(extrasState).forEach(e => {
      extrasTotal += e.price * e.qty;
    });

    // 🔑 CLAVE: el producto se multiplica, los extras NO
    const total = (selectedSize.price * qty) + extrasTotal;

    priceEl.textContent = `$${numberWithCommas(total)}`;
  }

  updatePrice();

  // ===== CAMBIO DE TAMAÑO =====
  overlay.querySelectorAll("input[name='size']").forEach(radio => {
    radio.onchange = e => {
      selectedSize = p.sizes.find(s => s.id === e.target.value);
      overlay.querySelector("#product-img").src = selectedSize.image;
      updatePrice();
    };
  });

  // ===== CANTIDAD =====
  overlay.querySelector(".plus").onclick = () => {
    qty++;
    qtyEl.textContent = qty;
    updatePrice();
  };

  overlay.querySelector(".minus").onclick = () => {
    if (qty > 1) {
      qty--;
      qtyEl.textContent = qty;
      updatePrice();
    }
  };

  // ===== CHECKBOX EXTRAS =====
  extrasInputs.forEach(input => {
    const key = input.dataset.key;
    const price = Number(input.dataset.price);
    const qtyEl = input.closest("label").querySelector(".extra-qty");

    input.onchange = () => {
      if (input.checked) {
        extrasState[key] = { qty: 1, price };
        qtyEl.textContent = 1;
      } else {
        delete extrasState[key];
        qtyEl.textContent = 0;
      }
      updatePrice();
    };
  });

  // ===== + EXTRA =====
  overlay.querySelectorAll(".plus-extra").forEach(btn => {
    btn.onclick = () => {
      const label = btn.closest("label");
      const input = label.querySelector("input");
      const key = input.dataset.key;
      const price = Number(input.dataset.price);
      const qtyEl = label.querySelector(".extra-qty");

      if (!extrasState[key]) {
        extrasState[key] = { qty: 0, price };
        input.checked = true;
      }

      extrasState[key].qty++;
      qtyEl.textContent = extrasState[key].qty;
      updatePrice();
    };
  });

  // ===== − EXTRA =====
  overlay.querySelectorAll(".minus-extra").forEach(btn => {
    btn.onclick = () => {
      const label = btn.closest("label");
      const input = label.querySelector("input");
      const key = input.dataset.key;
      const qtyEl = label.querySelector(".extra-qty");

      if (!extrasState[key]) return;

      extrasState[key].qty--;

      if (extrasState[key].qty <= 0) {
        delete extrasState[key];
        input.checked = false;
        qtyEl.textContent = 0;
      } else {
        qtyEl.textContent = extrasState[key].qty;
      }

      updatePrice();
    };
  });

  // ===== AGREGAR / ACTUALIZAR =====
  overlay.querySelector(".add-btn").onclick = () => {

    const extras = Object.entries(extrasState).map(([name, e]) => ({
      name,
      price: e.price,
      qty: e.qty
    }));

    const item = {
      productId: p.id,
      sizeId: selectedSize.id,
      title: selectedSize.label ? `${p.title} (${selectedSize.label})` : p.title,
      price: selectedSize.price,
      qty,
      image: selectedSize.image,
      extras
    };

    if (cartIndex !== null) {
      cart[cartIndex] = item;
    } else {
      addToCart(item);
    }

    persistCart();
    refreshCartUI();
    updateCartBadge();
    overlay.remove();
    cartDrawer.classList.remove("hidden");
  };
}







// ---------- Carrito ----------

// Agregar producto al carrito
function addToCart(item) {
  // Si ya existe el mismo producto con las mismas adiciones, solo aumentar cantidad
  const existing = cart.find(c => 
    c.productId === item.productId && 
    JSON.stringify(c.extras) === JSON.stringify(item.extras)
  );

  if (existing) {
    existing.qty += item.qty;
  } else {
    cart.push(item);
  }
  persistCart();
  refreshCartUI();
  updateCartBadge();
}

// Guardar en localStorage
function persistCart() {
  localStorage.setItem('tb_cart', JSON.stringify(cart));
}

// Actualizar contador del ícono del carrito
function updateCartBadge() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  cartCountEl.textContent = count;
}

// Renderizar los ítems del carrito
// ---------- Carrito ----------
// ---------- refreshCartUI CORREGIDA PARA REFLEJAR CAMBIOS ----------
function refreshCartUI() {
  cartItemsEl.innerHTML = '';

  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<div class="empty">Tu carrito está vacío 🍔</div>';
    cartSubtotalEl.textContent = '$0';
    cartDeliveryEl.textContent = '$0';
    cartTotalEl.textContent = '$0';
    updateCartBadge();
    return;
  }

  let subtotal = 0;

  cart.forEach((item, idx) => {

    // ===== TOTAL DE EXTRAS (NO SE MULTIPLICA POR qty) =====
    const extrasTotal =
      item.extras?.reduce((sum, e) => sum + (e.price * e.qty), 0) || 0;

    // 🔑 CLAVE: producto * cantidad + extras
    const itemTotal = (item.price * item.qty) + extrasTotal;

    subtotal += itemTotal;

    const extrasText = item.extras?.length
      ? item.extras
          .map(e =>
            `+ ${e.name} x${e.qty} ($${numberWithCommas(e.price * e.qty)})`
          )
          .join('<br>')
      : '';

    const div = document.createElement('div');
    div.className = 'cart-item';

    div.innerHTML = `
      <img class="cart-item-img" src="${item.image}" alt="${item.title}">
      <div class="info">
        <h4>${item.title}</h4>
        ${extrasText ? `<small>${extrasText}</small>` : ''}
        <div class="qty-controls">
          <button class="minus">−</button>
          <span>${item.qty}</span>
          <button class="plus">+</button>
        </div>
      </div>
      <div class="price">
        <span>$${numberWithCommas(itemTotal)}</span>
        <button class="remove-btn" title="Eliminar producto">🗑️</button>
      </div>
    `;

    // ===== CONTROL DE CANTIDAD =====
    div.querySelector('.plus').addEventListener('click', () => {
      item.qty++;
      persistCart();
      refreshCartUI();
    });

    div.querySelector('.minus').addEventListener('click', () => {
      if (item.qty > 1) {
        item.qty--;
      } else {
        cart.splice(idx, 1);
      }
      persistCart();
      refreshCartUI();
    });

    // ===== ELIMINAR =====
    div.querySelector('.remove-btn').addEventListener('click', () => {
      if (confirm(`¿Eliminar "${item.title}" del carrito?`)) {
        cart.splice(idx, 1);
        persistCart();
        refreshCartUI();
      }
    });

    // ===== EDITAR =====
    div.addEventListener('click', (e) => {
      if (
        !e.target.classList.contains('minus') &&
        !e.target.classList.contains('plus') &&
        !e.target.classList.contains('remove-btn')
      ) {
        cartDrawer.classList.add('hidden');
        openProductModal(item.productId, idx);
      }
    });

    cartItemsEl.appendChild(div);
  });

  cartSubtotalEl.textContent = `$${numberWithCommas(subtotal)}`;
  cartDeliveryEl.textContent = `$${numberWithCommas(DELIVERY_FEE)}`;
  cartTotalEl.textContent = `$${numberWithCommas(subtotal + DELIVERY_FEE)}`;
  updateCartBadge();
}















// ---------- Interacciones UI ----------
openCartBtn.addEventListener('click', ()=>{ cartDrawer.classList.remove('hidden'); cartDrawer.setAttribute('aria-hidden','false'); });
closeCartBtn.addEventListener('click', ()=>{ cartDrawer.classList.add('hidden'); cartDrawer.setAttribute('aria-hidden','true'); });
checkoutBtn.addEventListener('click', ()=>{ cartDrawer.classList.add('hidden'); openCheckout(); });
clearCartBtn.addEventListener('click', ()=>{ if(confirm('Vaciar carrito?')){ cart = []; persistCart(); refreshCartUI(); } });

// ---------- Checkout ----------

// ---------- Checkout ----------
function openCheckout() {
  if (cart.length === 0) { 
    alert('El carrito está vacío.'); 
    return; 
  }

  // 🔹 Recalcular subtotal actual (incluyendo extras)
// 🔥 Recalcular subtotal REAL (incluye extras)
let subtotal = 0;

cart.forEach(item => {
  const extrasTotal =
    item.extras?.reduce((sum, e) => sum + e.price * e.qty, 0) || 0;

  const itemTotal = (item.price * item.qty) + extrasTotal;
  subtotal += itemTotal;
});



  const delivery = 0; // por defecto
  const total = subtotal + delivery;

  // 🔹 Actualizar DOM inicial
  document.getElementById('cart-subtotal').textContent = `$${numberWithCommas(subtotal)}`;
  document.getElementById('cart-delivery').textContent = `$${numberWithCommas(delivery)}`;
  document.getElementById('cart-total').textContent = `$${numberWithCommas(total)}`;
  document.getElementById('cart-total-checkout').textContent = `$${numberWithCommas(total)}`;

  // 🔹 Reset formulario
  checkoutForm.reset();
  document.getElementById('address-label').classList.add('hidden');
  document.getElementById('envio-row').classList.add('hidden');

  // 🔹 Mostrar modal
  checkoutModal.classList.remove('hidden');
  checkoutModal.setAttribute('aria-hidden', 'false');

  // 🔹 Recalcular al cambiar método (recoger/domicilio)
  const radios = checkoutForm.querySelectorAll('input[name="method"]');
  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      const method = checkoutForm.querySelector('input[name="method"]:checked')?.value || 'recoger';
      const addressLabel = document.getElementById('address-label');
      const envioRow = document.getElementById('envio-row');
      const deliveryEl = document.getElementById('cart-delivery');
      const totalCheckoutEl = document.getElementById('cart-total-checkout');

      const DELIVERY_FEE = 0;
      const delivery = (method === 'domicilio' && subtotal > 0) ? DELIVERY_FEE : 0;
      const totalUpdated = subtotal + delivery;

      // Mostrar/ocultar campos
      addressLabel.classList.toggle('hidden', method !== 'domicilio');
      envioRow.classList.toggle('hidden', method !== 'domicilio');

      // Actualizar montos
      deliveryEl.textContent = `$${numberWithCommas(delivery)}`;
      totalCheckoutEl.textContent = `$${numberWithCommas(totalUpdated)}`;
    });
  });
}


checkoutClose.addEventListener('click', () => {
  checkoutModal.classList.add('hidden');
  checkoutModal.setAttribute('aria-hidden', 'true');
});

backToCartBtn.addEventListener('click', () => {
  checkoutModal.classList.add('hidden');
  cartDrawer.classList.remove('hidden');
});

// === Calcular totales del checkout ===
function updateCheckoutTotals() {
  const method = checkoutForm.querySelector('input[name="method"]:checked')?.value || 'recoger';
  const envioRow = document.getElementById('envio-row');
  const subtotalEl = document.getElementById('cart-subtotal-checkout');
  const deliveryEl = document.getElementById('cart-delivery-checkout');
  const totalEl = document.getElementById('cart-total-checkout');

  const DELIVERY_FEE = 0;

  // Mostrar u ocultar campo de dirección
  addressLabel.classList.toggle('hidden', method !== 'domicilio');

  // 🔥 CALCULAR SUBTOTAL EXACTO (CON EXTRAS)
let subtotal = 0;

cart.forEach(item => {
  const extrasTotal =
    item.extras?.reduce((sum, e) => sum + e.price * e.qty, 0) || 0;

  const itemTotal = (item.price * item.qty) + extrasTotal;
  subtotal += itemTotal;
});

  // Envío
  const delivery = method === 'domicilio' && subtotal > 0 ? DELIVERY_FEE : 0;
  const total = subtotal + delivery;

  // Mostrar/ocultar fila de envío
  envioRow.classList.toggle('hidden', method !== 'domicilio');

  // Actualizar valores visibles
  subtotalEl.textContent = `$${numberWithCommas(subtotal)}`;
  deliveryEl.textContent = `$${numberWithCommas(delivery)}`;
  totalEl.textContent = `$${numberWithCommas(total)}`;
}



checkoutForm.addEventListener('change', updateCheckoutTotals);






// URL del endpoint de Google Apps Script (base de datos de pedidos)
// const GOOGLE_SHEET_API = "https://script.google.com/macros/s/AKfycbwm_1k9_4u68gAgUuSbvOXA5jfq1aIMJIaaFNDiB9PKa0yFBrZhhhMVQQQ-Qc22jeEb/exec";


// Envío por WhatsApp
// ✅ Escucha del formulario de checkout
// Envío por WhatsApp
checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const fd = new FormData(checkoutForm);
  const clientName = fd.get('name')?.trim() || '';
  const clientPhone = fd.get('phone')?.trim() || '';
  const method = fd.get('method') || 'recoger';
  const payment = fd.get('payment') || '';
  const address = fd.get('address')?.trim() || '';
  const notes = fd.get('notes')?.trim() || '';

  let textParts = [];

  // Cabecera
  textParts.push('🧾 *Nuevo Pedido - The Boss Food Truck🍔✅*');
  textParts.push(`👤 Cliente: ${clientName}`);
  textParts.push(`📞 Teléfono: ${clientPhone}`);
  textParts.push(`🚚 Tipo: ${method}`);
  if (method === 'domicilio') textParts.push(`🏠 Dirección: ${address}`);
  textParts.push(`💳 Pago: ${payment}`);
  textParts.push('');
  textParts.push('🍔 *Detalle del pedido:*');

  let subtotal = 0;

cart.forEach(item => {
  // Calcular precio de extras individualmente
  const extras = item.extras || [];
  const extrasLines = extras
    .map(e => `   ➕ ${e.qty}x ${e.name} ($${numberWithCommas(e.price * e.qty)})`)
    .join('\n');

  const extrasSum = extras.reduce((sum, e) => sum + e.price * e.qty, 0);

  // 🔑 FIX: NO multiplicar extras por la cantidad del producto
  const itemTotal = (item.price * item.qty) + extrasSum;
  subtotal += itemTotal;

  // Mostrar producto base
  textParts.push(
    `${item.qty}x ${item.title} — *$${numberWithCommas(item.price * item.qty)}*`
  );

  if (extrasLines) textParts.push(extrasLines);

  // Toppings removidos
  if (item.removed && item.removed.length) {
    textParts.push(`   ⚠️ Toppings removidos: ${item.removed.join(', ')}`);
  }
});

  const delivery = method === 'domicilio' ? DELIVERY_FEE : 0;
  const total = subtotal + delivery;

  // Resumen de totales
  textParts.push('');
  textParts.push(`🧮 Subtotal: $${numberWithCommas(subtotal)}`);
  textParts.push(method === 'domicilio'
    ? `🚗 Envío: $${numberWithCommas(delivery)}`
    : '🏪 Envío: Sin costo (recoge en el local)');
  textParts.push(`💰 *Total: $${numberWithCommas(total)}*`);

  if (notes) textParts.push(`📝 Notas: ${notes}`);

  // Construir URL para WhatsApp
  const bp = String(BUSINESS_PHONE || '').replace(/\D/g, '');
  if (!bp || bp.length < 8) {
    alert('Configura BUSINESS_PHONE en app.js con el número del negocio.');
    return;
  }

  const msg = encodeURIComponent(textParts.join('\n'));
  const waUrl = `https://wa.me/${bp}?text=${msg}`;

   // 🟢 1. REDIRECCIONAR INMEDIATAMENTE (NO BLOQUEABLE)
  window.location.href = waUrl;
 

  // 🟡 2. ENVIAR A SHEETS EN SEGUNDO PLANO
  // const orderData = {
  //   fecha: new Date().toLocaleString(),
  //   nombre: clientName,
  //   telefono: clientPhone,
  //   metodo: method,
  //   pago: payment,
  //   direccion: address,
  //   notas: notes,
  //   total: total,
  //   carrito: cart.map(i => ({
  //     producto: i.title,
  //     cantidad: i.qty,
  //     precio: i.price,
  //     extras: i.extras?.map(e => `${e.qty}x ${e.name}`).join(', ') || ''
  //   }))
  // };

  // fetch(GOOGLE_SHEET_API, {
  //   method: "POST",
  //   mode: "no-cors",
  //   body: JSON.stringify(orderData),
  //   headers: { "Content-Type": "application/json" },
  //   keepalive: true // 🔑 importante para que no se cancele al redireccionar
  // });

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
  // Primero activamos el menú
  sideMenu.classList.add('show');
  sideMenu.style.opacity = 0;
  sideMenu.style.transform = 'translateX(-20px)'; // empieza desplazado
  sideMenu.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

  // Forzamos el repaint antes de animar
  requestAnimationFrame(() => {
    sideMenu.style.opacity = 1;
    sideMenu.style.transform = 'translateX(0)';
  });
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




// ====== FORMULARIO DE PAGO ======

document.addEventListener("DOMContentLoaded", () => {
  const paymentSelect = document.getElementById("payment-method");
  const transferInfo = document.getElementById("transfer-info");
  const methodRadios = document.querySelectorAll('input[name="method"]');
  const addressLabel = document.getElementById("address-label");
  const envioRow = document.getElementById("envio-row");
  const cartDelivery = document.getElementById("cart-delivery");
  const DELIVERY_FEE = 0; // 💰 valor del domicilio
  const accountNumber = document.getElementById("account-number");
  const copyBtn = document.getElementById("copy-account");

  // 🔸 Mostrar u ocultar dirección según método de entrega
  methodRadios.forEach(radio => {
    radio.addEventListener("change", () => {
      if (radio.value === "domicilio" && radio.checked) {
        addressLabel.classList.remove("hidden");
        envioRow.classList.remove("hidden");
        cartDelivery.textContent = `$${DELIVERY_FEE.toLocaleString()}`;
      } else if (radio.value === "recoger" && radio.checked) {
        addressLabel.classList.add("hidden");
        envioRow.classList.add("hidden");
        cartDelivery.textContent = "$0";
      }
    });
  });

  // 🔸 Mostrar info bancaria solo si selecciona transferencia
  paymentSelect.addEventListener("change", () => {
    if (paymentSelect.value === "transferencia") {
      transferInfo.classList.remove("hidden");
    } else {
      transferInfo.classList.add("hidden");
    }
  });

  // 🔸 Copiar número de cuenta
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(accountNumber.textContent.trim())
      .then(() => {
        copyBtn.textContent = "¡Copiado!";
        copyBtn.classList.add("copied");
        setTimeout(() => {
          copyBtn.textContent = "Copiar";
          copyBtn.classList.remove("copied");
        }, 1800);
      })
      .catch(() => alert("No se pudo copiar"));
  });
});


// --- FORM MULTIPASO (compatible con checkout actual) ---
const form = document.getElementById("checkout-form");
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const nextStep1 = document.getElementById("next-step1");
const backStep2 = document.getElementById("back-step2");
const clientSummary = document.getElementById("client-summary");

if (nextStep1) {
  nextStep1.addEventListener("click", () => {
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();

    if (!name || !phone) {
      alert("Por favor completa tu nombre y teléfono.");
      return;
    }

    // Mostrar resumen
    clientSummary.innerHTML = `<strong>${name} </strong><span>${phone}</span>`;

    // Animación de transición
    step1.classList.remove("active");
    step2.classList.add("active");
  });
}

if (backStep2) {
  backStep2.addEventListener("click", () => {
    step2.classList.remove("active");
    step1.classList.add("active");
  });
}



const checkoutOverlay = document.getElementById("checkout-modal");
const btnConfirmOrder = document.getElementById("confirm-order"); // botón en el carrito
const btnBackToCart = document.getElementById("back-to-cart");

btnConfirmOrder?.addEventListener("click", () => {
  checkoutOverlay.classList.remove("hidden");
});

btnBackToCart?.addEventListener("click", () => {
  checkoutOverlay.classList.add("hidden");
});


// También cerrar si se toca fuera del panel
checkoutOverlay.addEventListener("click", (e) => {
  if (e.target === checkoutOverlay) {
    checkoutOverlay.classList.remove("show");
  }
});


// ============Descargar QR=================
document.addEventListener("click", (e) => {
  // Usa closest para soportar clicks sobre el SVG interno de FontAwesome
  const btn = e.target.closest && e.target.closest(".qr-download");
  if (!btn) return;

  const imgPath = btn.dataset.img;
  if (!imgPath) {
    console.warn("qr-download sin data-img");
    return;
  }

  // helper para descargar
  const downloadImage = (url) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = url.split("/").pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Si SweetAlert2 no está disponible, fallback a confirm nativo
  if (typeof Swal === "undefined") {
    console.warn("SweetAlert2 (Swal) no disponible. Usando confirm nativo.");
    const ok = confirm(
      "Puedes pagar escaneando nuestros códigos QR de Nequi o Bancolombia.\n\nTambién puedes descargar los QR. ¿Descargar ahora?"
    );
    if (ok) downloadImage(imgPath);
    return;
  }

  // SweetAlert2 disponible -> mostrar alerta antes de descargar
  Swal.fire({
    icon: "info",
    title: "Pago con QR",
    html: `
      Puedes pagar escaneando nuestros códigos QR de <strong>Nequi</strong> o <strong>Bancolombia</strong>.<br><br>
      También puedes <strong>descargar los QR</strong> dando clic en el icono de descarga.
    `,
    showCancelButton: true,
    confirmButtonText: "Descargar",
    cancelButtonText: "Cancelar",
    background: "#0a0a0a",             // fondo negro
    color: "#ffffff",                   // texto blanco
    confirmButtonColor: "rgb(230, 213, 12)", // botón amarillo neón
    cancelButtonColor: "#555555",       // cancel gris oscuro
    iconColor: "rgb(230, 213, 12)"      // icono amarillo neón
  }).then(result => {
    if (result.isConfirmed) downloadImage(imgPath);
  });
});



// ============Fin de codigo de Descarga QR=================









