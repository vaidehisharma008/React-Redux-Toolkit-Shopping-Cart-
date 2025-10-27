import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>🛍️ Redux Toolkit Shopping Cart</h1>
      <div className="container">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
}

export default App;
