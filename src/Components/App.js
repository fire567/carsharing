import React from "react";
import MainPage from "../Pages/MainPage/MainPage";
import OrderPage from "../Pages/OrderPage/OrderPage";
import Models from "../Pages/OrderPage/Models/Models";
import ExtraOpt from "../Pages/OrderPage/ExtraOpt/ExtraOpt";
import { Route } from "react-router-dom";
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <Route path="/carsharing" component={MainPage} exact/>
      <Route path="/carsharing/order-page/loc" component={OrderPage} exact />
      <Route path="/carsharing/order-page/model" component={Models} exact />
      <Route path="/carsharing/order-page/extraopt" component={ExtraOpt} exact />
    </div>
  );
}

export default App;