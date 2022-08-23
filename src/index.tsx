import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// npm i react-router-dom
import { BrowserRouter } from 'react-router-dom';
// npm i bootstrap-icons
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>
);

