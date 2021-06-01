import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider }  from "react-redux";
import reducers from "./Components/reducers"
import { HashRouter } from "react-router-dom";
import App from './Components/App.js';

const loadState = () => {
  try {
      const serialisedState = window.localStorage.getItem('app_state');

      if (!serialisedState) return undefined;
      return JSON.parse(serialisedState);
  } catch (err) {
      return undefined;
  }
};

const oldState = loadState();
const store = createStore(reducers, oldState,  applyMiddleware(thunk))

const saveState = (state) => {
  try {
      const serialisedState = JSON.stringify(state);
      window.localStorage.setItem('app_state', serialisedState);
  } catch (err) {
  }
};

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
  <Provider store={store}>
    <App />
  </Provider>
  </HashRouter>,
  document.getElementById('root')
);