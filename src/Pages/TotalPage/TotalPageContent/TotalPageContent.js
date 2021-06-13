import React from "react";
import OrderInf from "../../../Components/OrderInf/OrderInf";
import OrderFinalInf from "../../../Components/OrderFinalInf/OrderFinalInf";
import {connect} from "react-redux";
import "./TotalPageContent.css";

const TotalPageContent = ({getOrderReducer}) => {
    return(
        <div className="total-content">
            {getOrderReducer.data ? 
                <OrderFinalInf 
                setCar={getOrderReducer.data.carId}
                setOption={getOrderReducer.data.isFullTank}
                setSinceDate={getOrderReducer.data.dateFrom}
                setEndDate={getOrderReducer.data.dateTo}
            /> : null
            }
                <OrderInf buttonName={"Отменить"} activeBTN={1} link={"/order-page/model"} background={"linear-gradient(90deg, #0EC261 2.61%, #039F67 112.6%)"}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        getOrderReducer: state.getOrderReducer
    }
}

export default connect(mapStateToProps)(TotalPageContent);