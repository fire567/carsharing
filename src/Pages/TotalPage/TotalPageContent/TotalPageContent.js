import React from "react";
import OrderInf from "../../../Components/OrderInf/OrderInf";
import OrderFinalInf from "../../../Components/OrderFinalInf/OrderFinalInf";
import ButtonCart from "../../../Components/ButtonCart/ButtonCart";
import { Link } from "react-router-dom";
import Button from "../../../Components/Button/Button";
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
            <div className="sized-loc-btn-form">
                    <ButtonCart />
                    
                    <Link to="/order-page/loc">
                        <Button 
                            text={"Отменить"} 
                            width={"100%"} 
                            disabled={""}
                            background={"linear-gradient(90deg, rgb(73, 48, 19) 0%, rgb(123, 12, 59) 100%)"}
                        />
                    </Link>
                </div>
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