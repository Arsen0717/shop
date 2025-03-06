import React from 'react';
import "./ProductItem.css";

const ProductItem = ({ image, title, count, price, onPlus, onMinus, rate, ratingCount, category }) => {
  return (
    <section className="box-item">
      <img src={image} alt="Product" />

      <header className="box-item-header">
        <h2>{Math.round(price * count)}$</h2>
        <button onClick={onPlus}>+</button>
        <span>{count}</span>
        <button onClick={onMinus}>-</button>
      </header>

      <div className="box-item-info">
        <h3>{title}</h3>
        <p>/{category}</p>
      </div>

      <footer className="box-item-footer">
  
        <span>./{ratingCount}</span>
      </footer>

    </section>
  );
};

export default ProductItem;