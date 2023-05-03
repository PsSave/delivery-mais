//é a porta de entrada pro index.html
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style/global.css"
import Home from './pages/home/index.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Home />
  </>
);
