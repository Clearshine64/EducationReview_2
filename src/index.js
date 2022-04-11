import './index.css';

import 'react-lazy-load-image-component/src/effects/blur.css';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { AuthProvider } from './contexts/JWTContext';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>
);