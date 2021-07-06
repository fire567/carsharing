import React, {useEffect} from "react";
import MainPage from "../Pages/MainPage/MainPage";
import OrderPage from "../Pages/OrderPage/OrderPage";
import Models from "../Pages/OrderPage/Models/Models";
import ExtraOpt from "../Pages/OrderPage/ExtraOpt/ExtraOpt";
import FinalPage from "../Pages/OrderPage/FinalPage/FinalPage";
import TotalPage from "../Pages/TotalPage/TotalPage";
import { Route, Redirect} from "react-router-dom";
import {getOrder} from "../Components/actions/index";
import {connect} from "react-redux";
import "./App.css"

const App = ({getOrderReducer}) => {
  const id = window.location.hash.split('order-page/')[1];
  if(id !== "loc" && id !== "model" && id !== "extraopt" && id !== "final-page"){
    var finalId = id;
  }

    useEffect(() => {
        getOrder(id)
    }, [])
    
  return (
    <div className="App">
      <Route path="/" component={MainPage} exact/>
      <Route path="/order-page/loc" component={OrderPage} exact />
      <Route path="/order-page/model" component={Models} exact />
      <Route path="/order-page/extraopt" component={ExtraOpt} exact />
      <Route path="/order-page/final-page" component={FinalPage} exact />
      <Route path={`/order-page/${finalId}`} component={TotalPage} exact />
      {window.location.hash !== `#/carsharing/order-page/${finalId}` ? <Redirect to="/" /> : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    idLink: state.idLink,
    getOrderReducer: state.getOrderReducer
  }
}

export default connect(mapStateToProps, {
  getOrder: getOrder
})(App);