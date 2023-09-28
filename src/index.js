import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header.js";
import Home from "./components/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
      <Home/>
  </React.StrictMode>
);

