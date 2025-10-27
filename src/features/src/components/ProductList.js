import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice';

const products = [
  { id: 1, name: 'Laptop', price: 75000 },
  { id: 2, name: 'Headphones', price: 2500 },
  { id: 3, name: 'Smartphone', price: 35000 },
  { id: 4, name: 'Keyboard', price: 1500 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="product-list">
      <h2>🛒 Product List</h2>
      <div className="products">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => dispatch(addItem(product))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
