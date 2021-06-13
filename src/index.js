import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider }  from "react-redux";
import reducers from "./Components/reducers"
import { HashRouter } from "react-router-dom";
import { save, load } from "redux-localstorage-simple";
import App from './Components/App.js';

const createStoreWithMiddleware 
    = applyMiddleware(
        save({ ignoreStates: ["postedOrder"] }), thunk 
    )(createStore)

const store = createStoreWithMiddleware(
  reducers,    
  load() 
)

ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
  <Provider store={store}>
    <App />
  </Provider>
  </HashRouter>,
  document.getElementById('root')
);