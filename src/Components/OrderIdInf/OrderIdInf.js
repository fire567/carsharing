import React from "react";
import {connect} from "react-redux";
import "./OrderIdInf.css";

const OrderIdInf = ({getOrderReducer}) => {
    return(
        <div className="total-id-order-form">
            <li className="total-id-value">
                Заказ номер RU{getOrderReducer.data ? getOrderReducer.data.id : null}
            </li>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        getOrderReducer: state.getOrderReducer
    };
};

export default connect(mapStateToProps)(OrderIdInf);