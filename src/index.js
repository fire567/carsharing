import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider }  from "react-redux";
import reducers from "./Components/reducers"
import { BrowserRouter } from "react-router-dom";
import App from './Components/App.js';


ReactDOM.render(
  <BrowserRouter>
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
