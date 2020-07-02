import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './App.css';

import Calculator from './components/Calculator';
import History from './components/History';
import store from './store';

function App() {
  return (
    <div className="App">
    

        <Calculator />
        

    </div>
  );
}

export default App;
