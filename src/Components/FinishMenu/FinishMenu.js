import React from "react";
import { connect } from "react-redux";
import {switchFinishMenu} from "../actions";
import Button from "../Button/Button";
import "./FinishMenu.css"

const FinishMenu = ({ switchFinishMenu, switchFinish }) => {
    const closeMenu = () => {
        switchFinishMenu(!switchFinish)
    }

    return(
        <div className={switchFinish === true ? "finish-menu-active" : "finish-menu"}>
            <div className="ordr-menu-form">
                <div>
                <div className="confirm-text">
                    Подтвердите заказ
                </div>
                <div className="option-btns">
                    <div className="confirm">
                        <Button 
                            text={"Подтвердить"} 
                            width={"100%"} 
                            activeBTN={"order-btn"} 
                            disabled={""}
                            background={"linear-gradient(90deg, #0EC261 2.61%, #039F67 112.6%)"}
                        />
                    </div>
                    <div className="back-btn-form" onClick={() => closeMenu()}>
                        <Button 
                            text={"Вернуться"} 
                            width={"100%"} 
                            activeBTN={"order-btn"} 
                            disabled={""} 
                            background={"linear-gradient(90deg, #493013 0%, #7B0C3B 100%)"}
                        />
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        switchFinish: state.switchFinish
    }
}

export default connect(mapStateToProps, {
    switchFinishMenu: switchFinishMenu
})(FinishMenu);

