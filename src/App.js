import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Lower from './Components/Header/Lower';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Header />
    </BrowserRouter>
  );
}

export default App;
