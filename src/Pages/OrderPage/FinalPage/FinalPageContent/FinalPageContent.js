import React from "react";
import OrderInf from "../../../../Components/OrderInf/OrderInf";
import { connect } from "react-redux";
import ButtonCart from "../../../../Components/ButtonCart/ButtonCart";
import Button from "../../../../Components/Button/Button";
import OrderFinalInf from "../../../../Components/OrderFinalInf/OrderFinalInf";
import {switchFinishMenu} from "../../../../Components/actions"
import "./FinalPageContent.css"

const FinalPageContent = ({ setCar, setOption, setSinceDate, setEndDate, switchFinishMenu, switchFinish }) => {

    const switchMenu = () => {
        switchFinishMenu(!switchFinish)
    }
    
    return(
        <div className="final-content">
            <OrderFinalInf 
                setCar={setCar}
                setOption={setOption}
                setSinceDate={setSinceDate}
                setEndDate={setEndDate}
            />
            <div className="sized-loc-btn-form">
                    <ButtonCart/>
                        <div className="inf-btn-form" onClick={() => switchMenu()}>
                            <Button 
                                text={"Заказать"} 
                                width={"100%"} 
                                activeBTN={"order-btn"} 
                                disabled={""}
                                background={"linear-gradient(90deg, #0EC261 2.61%, #039F67 112.6%)"}
                            />
                        </div>
                </div>
            <OrderInf buttonName={"Заказать"} link={"/order-page/final-page"}/>
        </div>
    )
};

const mapStateToProps = (state) => {
    return{
        setCar: state.setCar,
        setOption: state.setOption,
        setSinceDate: state.setSinceDate,
        setEndDate: state.setEndDate,
        switchFinish: state.switchFinish,
    }
}

export default connect(mapStateToProps, {
    switchFinishMenu: switchFinishMenu
})(FinalPageContent);