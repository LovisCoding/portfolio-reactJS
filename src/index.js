import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css';
import Header from "./components/Header.js";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";



const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
      <Header/>
      <Home/>
      <About/>
      <Work/>
      <Contact/>
  </React.StrictMode>
);

