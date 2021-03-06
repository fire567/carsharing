import React from "react";
import MainPage from "./MainPage/MainPage";
import OrderPage from "./OrderPage/OrderPage";
import { Route } from "react-router-dom";
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <Route path="/carsharing" component={MainPage} exact/>
      <Route path="/carsharing/order-page" component={OrderPage} exact />
    </div>
  );
}

export default App;