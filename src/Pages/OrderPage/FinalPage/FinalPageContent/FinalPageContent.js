import React from "react";
import OrderInf from "../../../../Components/OrderInf/OrderInf";
import { connect } from "react-redux";
import ButtonCart from "../../../../Components/ButtonCart/ButtonCart";
import Button from "../../../../Components/Button/Button";
import Moment from 'react-moment';
import {switchFinishMenu} from "../../../../Components/actions"
import "./FinalPageContent.css"

const FinalPageContent = ({ setCar, setOption, setSinceDate, setEndDate, switchFinishMenu, switchFinish }) => {
    var number = setCar.number.substr(0,1) + " " + setCar.number.substr(1,3) + " " + setCar.number.substr(-4,2) + " " + setCar.number.substr(-2,2);


    const prepareImgLink = (imgLink) => {
        if (imgLink.match('base64')) {
          return imgLink
        }
        return `https://api-factory.simbirsoft1.com${imgLink}`
      };

    const switchMenu = () => {
        switchFinishMenu(!switchFinish)
    }
    
    return(
        <div className="final-content">
            <div className="final-left-side">
                <div className="car-inf">
                    <li className="car-inf-name">{setCar.name}</li>
                    <div className="car-number-form">
                        {number !== null ? <li className="car-number">{number}</li> : null}
                    </div>
                    <div className="extra-options">
                        {setOption === "Полный бак" ? 
                            <div className="current-option">
                                <div className="gasoline-avlbl">Топливо </div>
                                <li className="option">100%</li>
                            </div>
                        : <div className="current-option">
                                <div className="gasoline-avlbl">Топливо </div>
                                <li className="option">Минимум</li>
                            </div>}
                        <div className="since-date-form-inf">
                            <div className="since-avlbl" >Доступна с </div>
                            <Moment format={"DD.MM.Y HH:mm"} className="option">
                                {setSinceDate}
                            </Moment>
                        </div>
                        <div className="end-date-form-inf">
                            <div className="end-avlbl">Доступна по </div>
                            <Moment format={"DD.MM.Y HH:mm"} className="option">
                                {setEndDate}
                            </Moment>
                        </div>
                    </div>
                </div>
                <div className="car-inf-pic-form">
                    <div 
                        className="car-inf-pic" 
                        style={{background: `url(${prepareImgLink(setCar.thumbnail.path)}) no-repeat 42% 97%`, backgroundSize: "91%"}}
                    ></div>
                </div>
            </div>
            <div className="sized-loc-btn-form">
                    <ButtonCart />
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