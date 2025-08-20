// Demo product data
const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    desc: "High-quality sound, noise cancellation, 20h battery.",
    price: 59.99,
    img: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
  },
  {
    id: 2,
    title: "Smart Watch",
    desc: "Track fitness, notifications, and more.",
    price: 89.99,
    img: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png"
  },
  {
    id: 3,
    title: "Bluetooth Speaker",
    desc: "Portable, waterproof, deep bass.",
    price: 39.99,
    img: "https://cdn-icons-png.flaticon.com/512/1048/1048927.png"
  },
  {
    id: 4,
    title: "VR Headset",
    desc: "Immersive 3D experience for games and movies.",
    price: 129.99,
    img: "https://cdn-icons-png.flaticon.com/512/1048/1048937.png"
  },
  {
    id: 5,
    title: "Fitness Tracker",
    desc: "Heart rate, sleep monitor, step counter.",
    price: 29.99,
    img: "https://cdn-icons-png.flaticon.com/512/1048/1048942.png"
  },
  {
    id: 6,
    title: "Smartphone Stand",
    desc: "Adjustable, sturdy, universal fit.",
    price: 14.99,
    img: "https://cdn-icons-png.flaticon.com/512/1048/1048950.png"
  }
];

// Cart state
let cart = [];

// Render products
function renderProducts() {
  const list = document.getElementById('products-list');
  list.innerHTML = '';
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.img}" alt="${product.title}" class="product-img">
      <div class="product-title">${product.title}</div>
      <div class="product-desc">${product.desc}</div>
      <div class="product-price">$${product.price.toFixed(2)}</div>
      <button class="add-cart-btn" data-id="${product.id}">Add to Cart</button>
    `;
    list.appendChild(card);
  });
}

// Update cart count in nav
function updateCartCount() {
  document.getElementById('cart-count').textContent = cart.reduce((sum, item) => sum + item.qty, 0);
}

// Add to cart
function addToCart(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...prod, qty: 1 });
  }
  updateCartCount();
}

// Render cart modal
function renderCart() {
  const cartItems = document.getElementById('cart-items');
  if (cart.length === 0) {
    cartItems.innerHTML = '<p>Your cart is empty.</p>';
    document.getElementById('cart-total').textContent = '0.00';
    return;
  }
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <span class="cart-item-title">${item.title}</span>
      <span class="cart-item-qty">x${item.qty}</span>
      <button class="cart-item-remove" data-id="${item.id}" title="Remove">&times;</button>
    `;
    cartItems.appendChild(div);
  });
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  document.getElementById('cart-total').textContent = total.toFixed(2);
}

// Remove from cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartCount();
  renderCart();
}

// Show/hide cart modal
function showCartModal() {
  document.getElementById('cart-modal').style.display = 'flex';
  renderCart();
}
function hideCartModal() {
  document.getElementById('cart-modal').style.display = 'none';
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartCount();

  // Add to cart buttons
  document.getElementById('products-list').addEventListener('click', e => {
    if (e.target.classList.contains('add-cart-btn')) {
      const id = parseInt(e.target.getAttribute('data-id'));
      addToCart(id);
    }
  });

  // Cart nav link
  document.querySelector('nav a[href="#"]').addEventListener('click', e => {
    if (e.target.textContent.includes('Cart')) {
      e.preventDefault();
      showCartModal();
    }
  });

  // Close cart modal
  document.getElementById('close-cart').onclick = hideCartModal;

  // Remove item from cart
  document.getElementById('cart-items').addEventListener('click', e => {
    if (e.target.classList.contains('cart-item-remove')) {
      const id = parseInt(e.target.getAttribute('data-id'));
      removeFromCart(id);
    }
  });

  // Checkout button
  document.querySelector('.checkout-btn').onclick = () => {
    alert('Thank you for your purchase!');
    cart = [];
    updateCartCount();
    renderCart();
    hideCartModal();
  };

  // Close modal on outside click
  document.getElementById('cart-modal').addEventListener('click', e => {
    if (e.target === document.getElementById('cart-modal')) hideCartModal();
  });
});
