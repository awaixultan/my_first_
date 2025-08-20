import React from "react";
import { motion } from "framer-motion";

export default function ProductCard({ product, onAdd }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow p-4 flex flex-col items-center"
      whileHover={{ scale: 1.04 }}
    >
      <img src={product.image} alt={product.name} className="w-32 h-32 object-contain mb-3" />
      <div className="font-semibold text-lg mb-1">{product.name}</div>
      <div className="text-primary font-bold mb-1">${product.price.toFixed(2)}</div>
      <div className="mb-2 text-yellow-400">
        {"★".repeat(Math.round(product.rating))}{"☆".repeat(5 - Math.round(product.rating))}
      </div>
      <button
        className="mt-auto bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition"
        onClick={() => onAdd(product)}
      >
        Add to Cart
      </button>
    </motion.div>
  );
}
