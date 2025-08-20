import React from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import products from "../data/products.json";
import categories from "../data/categories.json";

export default function Home({ onAddToCart }) {
  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 text-center">
        <motion.h1 className="text-4xl md:text-5xl font-bold mb-4" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
          Discover the Latest Trends
        </motion.h1>
        <p className="mb-6 text-lg">Shop the best products at unbeatable prices. Fast delivery. Secure checkout.</p>
        <a href="/products" className="bg-accent text-neutral px-8 py-3 rounded-full font-semibold hover:bg-primary transition">Shop Now</a>
      </section>

      {/* Categories */}
      <section className="container mx-auto py-10">
        <h2 className="text-2xl font-bold mb-6 text-primary">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map(cat => (
            <div key={cat} className="bg-white rounded-lg shadow p-4 text-center font-semibold hover:bg-primary hover:text-white transition">{cat}</div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto py-10">
        <h2 className="text-2xl font-bold mb-6 text-primary">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} onAdd={onAddToCart} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-neutral py-10">
        <div className="container mx-auto text-center">
          <h3 className="text-xl font-bold mb-2 text-accent">Subscribe to our Newsletter</h3>
          <form className="flex flex-col md:flex-row justify-center gap-3 mt-4">
            <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-md border-none outline-none" />
            <button className="bg-primary text-white px-6 py-2 rounded-r-md hover:bg-secondary transition">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}
