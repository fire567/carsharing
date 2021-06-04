import React from "react";
import MainPage from "../Pages/MainPage/MainPage";
import OrderPage from "../Pages/OrderPage/OrderPage";
import Models from "../Pages/OrderPage/Models/Models";
import ExtraOpt from "../Pages/OrderPage/ExtraOpt/ExtraOpt";
import FinalPage from "../Pages/OrderPage/FinalPage/FinalPage";
import { Route } from "react-router-dom";
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <Route path="/" component={MainPage} exact/>
      <Route path="/order-page/loc" component={OrderPage} exact />
      <Route path="/order-page/model" component={Models} exact />
      <Route path="/order-page/extraopt" component={ExtraOpt} exact />
      <Route path="/order-page/final-page" component={FinalPage} exact />
    </div>
  );
}

export default App;