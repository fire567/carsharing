import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider }  from "react-redux";
import reducers from "./Components/reducers"
import App from './Components/App.js';


ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
