import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cartItems, updateQuantity, removeFromCart }) {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Your Cart</h1>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>

      {cartItems.length === 0 && <p>Your cart is empty.</p>}

      {cartItems.map(item => (
        <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <img src={item.img} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
          <div style={{ marginLeft: '10px', flex: 1 }}>
            <h3>{item.name}</h3>
            <p>Unit Price: ${item.price}</p>
            <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
            <div>
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              <span style={{ margin: '0 10px' }}>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: '10px' }}>Delete</button>
            </div>
          </div>
        </div>
      ))}

      <Link to="/products">
        <button style={{ marginRight: '10px' }}>Continue Shopping</button>
      </Link>
      <button disabled={cartItems.length === 0}>Checkout</button>
    </div>
  );
}

export default Cart;
