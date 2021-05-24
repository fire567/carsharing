import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchCars } from "../actions/index";
import { chooseCar } from "../actions/index";
import "./CarList.css";

const CarList = ({cars, fetchCars, category, chooseCar, setCar }) => {
    const [ activeCar, setActiveCar ] = useState(null);
    const [ filteredCars, setFilteresCars ] = useState([])

    useEffect(() => {
        fetchCars()
        if(cars.data != undefined){
            setFilteresCars(cars.data.filter((car) => car.categoryId.name === category))
        }
    }, [category])

    const showActiveCar = (car) => {
        setActiveCar(car.id)
        chooseCar(car)
    }

    const showCars = () => {
        if(cars.data != undefined ){
            if(category === null ){
            return cars.data.map((car)=>{
                return(
                    <div 
                        className={setCar.id === car.id ? "car-description-form-active" : "car-description-form"} 
                        key={car.id} 
                        onClick={() => showActiveCar(car)}
                        style={{background: `url(${car.thumbnail.path}) no-repeat 100% 50%`, backgroundSize: "80%"}}
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
                    style={{background: `url(${car.thumbnail.path}) no-repeat 100% 50%`, backgroundSize: "80%"}}
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
})(CarList);