import { combineReducers } from "redux";
import SwitchSlide from "./SwitchSlideReducer"
import Car1 from "../../accets/car1.svg";
import Car2 from "../../accets/car2.svg";
import Car3 from "../../accets/car3.svg";
import Car4 from "../../accets/car4.svg";

const SlideArr = () => {
    return[
        { 
            id:0, 
            url:Car1, 
            heading:"Бесплатная парковка", 
            text:"Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
            style:"90deg, #13493F 0%, #0C7B1B 100%"
        },
        { 
            id:1, 
            url:Car2,
            heading:"Страховка", 
            text:"Полная страховка страховка автомобиля",
            style:"90deg, #132949 0%, #0C7B67 100%"
        },
        { 
            id:2, 
            url:Car3,
            heading:"Бензин", 
            text:"Полный бак на любой заправке города за наш счёт",
            style:"90deg, #493013 0%, #7B0C3B 100%"
        },
        { 
            id:3, 
            url:Car4,
            heading:"Обслуживание", 
            text:"Автомобиль проходит еженедельное ТО",
            style:"90deg, #281349 0%, #720C7B 100%"
         }
      ]
};

const radioArr = () => {
    return[
    { id:0, X:0 },
    { id:1, X:-100 },
    { id:2, X:-200 },
    { id:3, X:-300 }
    ];
};



export default combineReducers({
    Sliders: SlideArr,
    radio: radioArr,
    SwitchSlide: SwitchSlide
})