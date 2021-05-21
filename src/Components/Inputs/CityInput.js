import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import {changeTown} from "../actions/index";
import exitBtn from "../../assets/exitBtn.svg";

const CityInput = ({ setTown, citiesReducer, changeTown, setAdress, points }) => {
    const [ activeSelector, setActiveSelector ] = useState(false);
    const [arr, setArr ] = useState([])
    localStorage.setItem('city', `${setTown}`)

    useEffect(() => {
        if(citiesReducer.data != undefined){
        setArr(citiesReducer.data.filter((city) => city.name.toLowerCase().includes(setTown.toLowerCase())))
        }
      }, [setTown])

    window.addEventListener('click', (event) => {
        if(event.target.className !== "loc-input"){
            setActiveSelector(false)
        }
        else{
            setActiveSelector(true)
        }
      });

    const currentTown = (e) => {
        changeTown(e.target.value)
    }

    const changeTownName = (name) => {
        changeTown(name)
    }

    const deleteTextCity = () => {
        changeTown("")
    }

    const inputClickHandler = (value) => {
        setActiveSelector(value)
    }
    
    

    
    const citySelector = () => {
        return citiesReducer.data.map((city) => {
            if(city.name.toLowerCase().includes(setTown.toLowerCase())){
            return (
                <option key={city.id} className="loc-name" onClick={() => changeTownName(city.name)}>
                    {city.name}
                </option>
            )
            }
        })
    }

    const cityAutoFill = () => {
        if(points.data != undefined){
        return points.data.map((address) => {
            if(address.address === setAdress){
                changeTownName(address.cityId.name)
            }
        })
    }
    }

    const showCitySelector = () => {
        if(arr.length === 0 && setTown.length >= 2){
            return null
        }else if(setAdress.length === 0 && setTown.length >= 2 && activeSelector){
            return(
                    <div className="selector" onClick={() => inputClickHandler(false)}>
                        {citiesReducer.data === undefined ? "Loading..." : citySelector()}
                    </div>
            )
        }else if(setAdress.length === 0 && activeSelector){
            return(
            <div className="selector" onClick={() => inputClickHandler(false)}>
                {citiesReducer.data === undefined ? "Loading..." : citySelector()}
            </div>
            )
        }else if(setAdress.length >= 2 && setTown.length === 0){
            return(
                <div className="selector" onClick={() => inputClickHandler(false)}>
                    {citiesReducer.data === undefined && points.data === undefined ? "Loading..." : cityAutoFill()}
                </div>
            )
        }
    }
   


    return(
        <form className="input-form">
                        <div className="town-name">Город:</div>
                        <input 
                            type="text" 
                            placeholder="Начните вводить город ..." 
                            className="loc-input" 
                            value={localStorage.getItem('city')} 
                            onChange={(e) => currentTown(e)}
                            onClick={() => inputClickHandler(true)}
                        >
                        </input>
                        {setTown.length > 0 ? 
                            <button type="reset" className="reset-btn" onClick={() => deleteTextCity()}>
                                <img src={`${exitBtn}`}  />
                            </button> : null
                        }
                        
                        {showCitySelector()}
                        
        </form>
    )
}

const mapStateToProps = (state) => {
    return{
        setTown: state.setTown,
        citiesReducer: state.citiesReducer,
        setAdress: state.setAdress,
        points: state.points,
    }
}

export default connect(mapStateToProps, {
    changeTown:changeTown,
})(CityInput);


