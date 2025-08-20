import React from "react";

export default function Navbar({ cartCount }) {
  return (
    <header className="sticky top-0 bg-neutral shadow z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="text-2xl font-bold text-primary">ShopEase</div>
        <nav className="flex items-center gap-6">
          <a href="/" className="hover:text-primary">Home</a>
          <a href="/products" className="hover:text-primary">Products</a>
          <a href="/cart" className="relative hover:text-primary">
            Cart
            <span className="ml-1 bg-secondary text-white rounded-full px-2 text-xs">{cartCount}</span>
          </a>
          <a href="/login" className="ml-4 px-4 py-2 rounded bg-primary text-white hover:bg-secondary">Login</a>
        </nav>
      </div>
    </header>
  );
}
