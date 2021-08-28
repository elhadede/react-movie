import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Head from './head';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Head />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();