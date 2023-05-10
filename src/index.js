//é a porta de entrada pro index.html
import React from 'react';
import ReactDOM from 'react-dom/client';
import Rotas from './rotas'
import "./style/global.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Rotas />
  </>
);
