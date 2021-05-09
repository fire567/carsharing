import React, { useState } from "react";
import exitBtn from "../../../assets/exitBtn.svg";
import OrderInf from "../../../Components/OrderInf/OrderInf";
import Map from "../../../Components/Map/Map";
import {changeTown} from "../../../Components/actions/index";
import { connect } from "react-redux";
import "./Location.css";

const Location = ({ changeTown, setTown, citiesReducer }) => {
    const [ activeSelector, setActiveSelector ] = useState(true)

    const currentTown = (e) => {
        changeTown(e.target.value)
    }

    const changeTownName = (name) => {
        changeTown(name)
    }

    const deleteText = () => {
        changeTown("")
    }

    const inputClickHandler = (value) => {
        setActiveSelector(value)
    }

    const citySelector = () => {
        console.log(citiesReducer.data)
        return citiesReducer.data.map((city) => {
            if(city.name.includes(setTown)){
            return (
                <div className="town-name" onClick={() => changeTownName(city.name)}>
                    {city.name}
                </div>
            )
            }
        })
    
    }

    return(
        <div className="loc-content">
            <div className="loc-left-side">
                <div className="input-loc">
                    <form className="input-form">
                        <div className="town-name">Город:</div>
                        <input 
                            type="text" 
                            placeholder="Начните вводить город ..." 
                            className="loc-input" 
                            value={setTown} 
                            onChange={(e) => currentTown(e)}
                            onClick={() => inputClickHandler(true)}
                        >
                        </input>
                        {setTown.length > 0 ? 
                            <button type="reset" className="reset-btn" onClick={() => deleteText()}>
                                <img src={`${exitBtn}`}  />
                            </button> : null
                        }
                        
                        {setTown.length > 2 && activeSelector ? 
                            <div className="selector" onClick={() => inputClickHandler(false)}>
                                {citiesReducer.data === undefined ? "Loading..." : citySelector()}
                            </div> : null
                        }
                        
                    </form>
                    
                    <div className="input-form">
                        <div className="town-name">Пункт выдачи:</div>
                        <input type="text" placeholder="Начните вводить пункт ... " className="loc-input"></input>
                        <button type="reset" className="reset-btn">
                            <img src={`${exitBtn}`} />
                        </button>
                    </div>
                </div>
                <Map />
            </div>
            <OrderInf />
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        setTown: state.setTown,
        citiesReducer: state.citiesReducer,
    }
}

export default connect(mapStateToProps, {
    changeTown:changeTown
})(Location);