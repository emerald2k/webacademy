import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.jsx'
import App from './components/App.jsx';
import Cart from './components/Cart.jsx';
import Coin from './components/Coin.jsx';
import Key from './components/Key.jsx';
import Popup from './components/Popup.jsx';
import ProdusFavorit from './components/ProdusFavorit.jsx';
import Timer from './components/Timer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ProdusFavorit />
    <Cart />
    <Timer />
    <Key />
    <Popup />
    <Coin />
  </StrictMode>,
);
