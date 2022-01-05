//index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App.js';
import './components/app/App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MainReducer from './MainReducer';

console.log("index.js --------------")

let store = createStore(MainReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)