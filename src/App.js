import React from 'react';
import './App.css';
import Main from './Components/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Main/>
    </BrowserRouter>
  );
}

export default App;
