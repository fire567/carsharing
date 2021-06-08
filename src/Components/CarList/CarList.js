import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { 
    fetchCars, 
    chooseCar, 
    chooseExtra, 
    chooseTariff, 
    chooseColor, 
    chooseSinceDate, 
    chooseEndDate, 
    setTariffPrice, 
    setGasolinePrice, 
    setChildChairPrice,
    setExtraOptPrice,
    setActiveExtraBTN,
} from "../actions/index";
import "./CarList.css";

const CarList = ({
    cars, 
    fetchCars, 
    category, 
    chooseCar, 
    setCar, 
    chooseExtra, 
    chooseTariff, 
    chooseColor, 
    chooseSinceDate, 
    chooseEndDate,
    setTariffPrice,
    setGasolinePrice,
    setChildChairPrice,
    setExtraOptPrice,
    setActiveExtraBTN,
    }) => {
    const [ filteredCars, setFilteresCars ] = useState([])

    const prepareImgLink = (imgLink) => {
        if (imgLink.match('base64')) {
          return imgLink
        }
        return `https://api-factory.simbirsoft1.com${imgLink}`
      };
    

    useEffect(() => {
        fetchCars()
        if(cars.data !== undefined){
            setFilteresCars(cars.data.filter((car) => car.categoryId && car.categoryId.name === category))
        }
    }, [category])

    const showActiveCar = (car) => {
        console.log(car)
        chooseCar(car)
        chooseExtra(null)
        chooseTariff("")
        chooseColor(null)
        chooseSinceDate(null)
        chooseEndDate(null)
        setTariffPrice(0)
        setGasolinePrice(0)
        setChildChairPrice(0)
        setExtraOptPrice(0)
        setActiveExtraBTN(0)
    }

    const showCars = () => {
        if(cars.data != undefined ){
            if(category === null ){
            return cars.data.map((car)=>{
                return(
                    <div 
                        className={setCar !== null && setCar.id === car.id ? "car-description-form-active" : "car-description-form"} 
                        key={car.id} 
                        onClick={() => showActiveCar(car)}
                        style={{background: `url(${prepareImgLink(car.thumbnail.path)}) no-repeat 85% 97%`, backgroundSize: "70%"}}
                    >
                    <li className="car-name">
                        {car.name}
                    </li>
                    <li className="car-price">
                        {car.priceMin} - {car.priceMax} ₽
                    </li>
                    
                    </div>
                    
                )
            })
        } return filteredCars.map((car) => {
            return(
                <div 
                    className={setCar.id === car.id ? "car-description-form-active" : "car-description-form"} 
                    key={car.id} 
                    onClick={() => showActiveCar(car)}
                    style={{background: `url(${prepareImgLink(car.thumbnail.path)}) no-repeat 85% 97%`, backgroundSize: "70%"}}
                >
                <li className="car-name">
                    {car.name}
                </li>
                <li className="car-price">
                    {car.priceMin} - {car.priceMax} ₽
                </li>
                
                </div>
                
            )
        })
    }
        return "loading..."
    }

    return(
        <div className="car-list-form">
            {showCars()}
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        cars: state.cars,
        category: state.category,
        setCar: state.setCar
    }
}

export default connect(mapStateToProps, {
    fetchCars: fetchCars,
    chooseCar: chooseCar,
    chooseExtra: chooseExtra,
    chooseTariff: chooseTariff,
    chooseColor: chooseColor,
    chooseSinceDate: chooseSinceDate,
    chooseEndDate: chooseEndDate,
    setTariffPrice:setTariffPrice,
    setGasolinePrice:setGasolinePrice,
    setChildChairPrice: setChildChairPrice,
    setExtraOptPrice: setExtraOptPrice,
    setActiveExtraBTN: setActiveExtraBTN,
})(CarList);