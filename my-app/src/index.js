import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { CookiesProvider } from 'react-cookie';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const hist = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter history={hist}>
    <CookiesProvider>
      <App/>
    </CookiesProvider>
  // </BrowserRouter>
);

