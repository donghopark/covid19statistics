import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Country from './routes/Country'
import reportWebVitals from './reportWebVitals';
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import {  } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/country/:country" element={<Country />} />        
      </Routes>      
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
