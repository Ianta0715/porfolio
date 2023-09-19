import React from 'react';
import ReactDOM from 'react-dom/client';
import {  HashRouter } from 'react-router-dom';
import { PortfolioApp } from './PortfolioApp';
import './style.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <PortfolioApp />
    </HashRouter>
  </React.StrictMode>,
)
