import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/routes'; 
import './index.css';
import { CartProvider } from '../src/context/CartContext'

ReactDOM.render(
  <React.StrictMode>
    <CartProvider> 
      <AppRouter />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);