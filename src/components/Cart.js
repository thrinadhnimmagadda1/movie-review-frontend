import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axiosInstance.get('/api/cart');
        setCartItems(response.data.cartItems || []);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };
    fetchCart();
  }, []);

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.cartItemId}>
              {item.ticket.eventName} - {item.ticket.price} USD (Quantity: {item.quantity})
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
