import React, { useState, useEffect } from "react";
import MainPage from "../Pages/MainPage/MainPage";
import OrderPage from "../Pages/OrderPage/OrderPage";
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