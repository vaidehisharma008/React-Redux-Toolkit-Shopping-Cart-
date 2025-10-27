import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, clearCart } from '../features/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>🛍️ Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) =>
                  dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
                }
              />
              <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default Cart;
