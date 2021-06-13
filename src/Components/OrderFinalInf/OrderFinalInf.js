import React from "react";
import Moment from 'react-moment';

const OrderFinalInf = ({setCar, setOption, setSinceDate, setEndDate}) => {
    var number = setCar.number.substr(0,1) + " " + setCar.number.substr(1,3) + " " + setCar.number.substr(-4,2) + " " + setCar.number.substr(-2,2);


    const prepareImgLink = (imgLink) => {
        if (imgLink.match('base64')) {
          return imgLink
        }
        return `https://api-factory.simbirsoft1.com${imgLink}`
      };
return(
<div className="final-left-side">
                <div className="car-inf">
                    <li className="car-inf-name">{setCar.name}</li>
                    <div className="car-number-form">
                        {number !== null ? <li className="car-number">{number}</li> : null}
                    </div>
                    <div className="extra-options">
                        {setOption === "Полный бак" || true ? 
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
)
}

export default OrderFinalInf;