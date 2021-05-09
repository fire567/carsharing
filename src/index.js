import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider }  from "react-redux";
import reducers from "./Components/reducers"
import { BrowserRouter } from "react-router-dom";
import App from './Components/App.js';

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);