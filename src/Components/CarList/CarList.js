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
    setActiveGas,
    setActiveChair,
    setRightHandActive,
    setRightHandPrice,
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
    setActiveGas,
    setActiveChair,
    setRightHandActive,
    setRightHandPrice,
    }) => {
    const [ filteredCars, setFilteresCars ] = useState([])

    
    const prepareImgLink = (imgLink) => {
        
        return `https://api-factory.simbirsoft1.com${imgLink}`
      };

      

    useEffect(() => {
        if(cars.data !== undefined){
            console.log(category)
            if(category === null ){
                setFilteresCars(cars.data)
            }else{
                setFilteresCars(cars.data.filter((car) => car.categoryId && car.categoryId.name === category))
            }
        }
    }, [category, cars.data])

    const showActiveCar = (car) => {
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
        setActiveGas(false)
        setActiveChair(false)
        setRightHandActive(true)
        setRightHandPrice(0)
    }

    const showCars = () => {
        if(cars.data != undefined ){
        return filteredCars.map((car) => {
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
        setCar: state.setCar,
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
    setActiveGas: setActiveGas,
    setActiveChair: setActiveChair,
    setRightHandActive: setRightHandActive,
    setRightHandPrice: setRightHandPrice,
})(CarList);