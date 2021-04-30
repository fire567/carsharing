import React from "react";
import "./Slides.css";
import Car1 from "../../../../assets/car1.svg";
import Car2 from "../../../../assets/car2.svg";
import Car3 from "../../../../assets/car3.svg";
import Car4 from "../../../../assets/car4.svg";



const Slides = ({position}) => {
  const slideArr = [
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

    return slideArr.map((item) => {
    return (
      <div 
      className="carousel-inner" 
      key={item.id} 
      style={{backgroundImage: `url(${item.url})`, transform: `translateX(${position}%)`}}>
        <div className="dark-slide"></div>
        <div className="heading">
          {item.heading}
        </div>
        <div className="text">
          {item.text}
        </div>
        <div className="button" style={{background: `linear-gradient(${item.style})`, cursor: "pointer"}}>
          Подробнее
        </div>
        
    </div>
    );
    })
};


export default Slides;