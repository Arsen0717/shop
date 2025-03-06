import React, { useState } from 'react';
import ProductItem from "./ProductItem/ProductItem";
import "./MainItem.css";

const MainItem = ({ data }) => {
  const [items, setItems] = useState(data.map(elem => ({ ...elem, count: 1 })));

  const handlePlus = (index) => {
    setItems(prevItems =>
      prevItems.map((elem, i) =>
        i === index ? { ...elem, count: elem.count + 1 } : elem
      )
    );
  };

  const handleMinus = (index) => {
    setItems(prevItems =>
      prevItems.map((elem, i) =>
        i === index && elem.count > 1 ? { ...elem, count: elem.count - 1 } : elem
      )
    );
  };

  return items.map((elem, index) => (
    <ProductItem
      key={index}
      image={elem.image}
      title={elem.title}
      price={elem.price}
      count={elem.count}
      rate={elem.rating.rate}
      category={elem.category}
      ratingCount={elem.rating.count}
      onPlus={() => handlePlus(index)}
      onMinus={() => handleMinus(index)}
    />
  ));
};

export default MainItem;