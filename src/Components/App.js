import React, {useState, useEffect} from "react";
import MainPage from "../Pages/MainPage/MainPage";
import OrderPage from "../Pages/OrderPage/OrderPage";
import Models from "../Pages/OrderPage/Models/Models";
import ExtraOpt from "../Pages/OrderPage/ExtraOpt/ExtraOpt";
import FinalPage from "../Pages/OrderPage/FinalPage/FinalPage";
import TotalPage from "../Pages/TotalPage/TotalPage";
import { Route, Redirect, useHistory } from "react-router-dom";
import {getOrder} from "../Components/actions/index";
import {connect} from "react-redux";
import "./App.css"

const App = () => {
  const [redirect, setRedirect] = useState(false)
  const id = window.location.hash.split('order-page/')[1];
  let history = useHistory();
  
  const onUnload = (e) => {
    setRedirect(true)
    //e.preventDefault();
    //e.returnValue = '';
  }

    useEffect(() => {
        getOrder(id)
        window.addEventListener("beforeunload", onUnload);
    }, [])
    
  return (
    <div className="App">
      
      
      <Route path="/" component={MainPage} exact/>
      <Route path="/order-page/loc" component={OrderPage} exact />
      <Route path="/order-page/model" component={Models} exact />
      <Route path="/order-page/extraopt" component={ExtraOpt} exact />
      <Route path="/order-page/final-page" component={FinalPage} exact />
      <Route path={`/order-page/${id}`} component={TotalPage} exact />
      {redirect === true ? <Redirect to="/order-page/loc" /> : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    idLink: state.idLink,
    
  }
}

export default connect(mapStateToProps, {
  getOrder: getOrder
})(App);