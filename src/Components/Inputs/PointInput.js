import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {changeTown, changeAdress, setAddressesList, removeAddressesList} from "../actions/index";
import InputSelector from "./InputSelector";
import exitBtn from "../../assets/exitBtn.svg";

const CityInput = ({ 
    setLoc, 
    setLocInfo,  
    locations, 
    changeTown, 
    changeAdress, 
    currentInput, 
    inputName, 
    InputClass, 
    setTown, 
    setAdress, 
    points,
    setAddressesList,
    removeAddressesList
    }) => {
    const [ activeSelector, setActiveSelector ] = useState(false);
    const [foundCity, setFoundCity ] = useState([])

    
    useEffect(() => {
        
        if(locations.data){
            setFoundCity(locations.data.filter((loc) => loc.name.toLowerCase().includes(setLoc.toLowerCase())))
        }
        if(points.data){
            setAddressesList([])
            setAddressesList(points.data.filter((address) => address.cityId.name === setTown))
        }
        
        
        window.addEventListener('click', (event) => {
            if(event.target.className !== InputClass){
                setActiveSelector(false)
            }
            else{
                setActiveSelector(true)
            }
          });
          return function cleanup() {
            window.removeEventListener('click', (event) => {
                if(event.target.className !== InputClass){
                    setActiveSelector(false)
                }
                else{
                    setActiveSelector(true)
                }
              })
          }
      }, [setLoc])

   

    const currentLoc = (e) => {
        if(currentInput === "city"){
            changeTown(e.target.value)
        }else if(currentInput === "address"){
            changeAdress(e.target.value)
        }
    }

    const changeLocName = (name) => {
        if(currentInput === "city"){
            changeTown(name)
        }else if(currentInput === "address"){
            changeAdress(name)
        }
    }

    const deleteTextCity = () => {
        if(currentInput === "city"){
            changeTown("")
            changeAdress("")
        }else if(currentInput === "address"){
            changeAdress("")
        }
    }

    const handleInputClick = (value) => {
        setActiveSelector(value)
    }

    const citySelector = () => {
        if(currentInput === "address"){
            return locations.data.map((loc) => {
                if(loc.name.toLowerCase().includes(setLoc.toLowerCase())){
                return (
                    <option key={loc.id} className="loc-name" onClick={() => changeLocName(loc.name)}>
                        {loc.address}
                    </option>
                )
                }
            })
        }else if(currentInput === "city"){
            return locations.data.map((loc) => {
                if(loc.name.toLowerCase().includes(setLoc.toLowerCase())){
                return (
                    <option key={loc.id} className="loc-name" onClick={() => changeLocName(loc.name)}>
                        {loc.name}
                    </option>
                )
                }
            })
        }
        
    }

    const adressAutoSelector = () => {
        return locations.data.map((address) => {
            if(address.cityId !== null){
                if(address.cityId.name === setTown){
                return (
                    <InputSelector address={address}/>
                )
                }
        }
        })
    }

    const cityAutoSelector = () => {
        return points.data.map((address) => {
            if(address !== null){
                if(address.name === setAdress){
                return (
                    <InputSelector address={address.name}/>
                )
                }
        }
        })
    }

    const showCitySelector = () => {
        if(foundCity.length === 0 && setLoc !== null && setLoc.length >= 2){
            return null;
        }else if(setLocInfo.length < 1 && currentInput === "address" && setTown.length > 2 && activeSelector){
            return(
                <div className="selector" onClick={() => handleInputClick(false)}>
                    {locations.data === undefined ? "Loading..." : adressAutoSelector()}
                </div>
            )
        }else if(setLocInfo.length < 1 && setTown.length > 2 && currentInput === "city" && setAdress.length > 2 && activeSelector){
            return(
                <div className="selector" onClick={() => handleInputClick(true)}>
                    {locations.data === undefined ? "Loading..." : cityAutoSelector()}
                </div>
            )
        }
        else if(setLoc.length >= 2 && activeSelector){
            return(
                    <div className="selector" onClick={() => handleInputClick(false)}>
                        {locations.data === undefined ? "Loading..." : citySelector()}
                    </div>
            )
        }else if(activeSelector){
            return(
            <div className="selector" onClick={() => handleInputClick(false)}>
                {locations.data === undefined ? "Loading..." : citySelector()}
            </div>
            )
        }
    }

    return(
        <form className="input-form">
                        <div className="town-name">{inputName}</div>
                        <input 
                            type="text" 
                            placeholder="Начните вводить город ..." 
                            className={InputClass} 
                            value={setLoc} 
                            onChange={currentLoc}
                            onClick={() => handleInputClick(true)}
                        >
                        </input>
                        {setLoc.length > 0 && 
                            <button type="reset" className="reset-btn" onClick={() => deleteTextCity()}>
                                <img src={`${exitBtn}`}  />
                            </button>
                        }
                        
                        {showCitySelector()}
                        
        </form>
    )
}

const mapStateToProps = (state) => {
    return{
        setTown: state.setTown,
        points: state.points,
        setAdress: state.setAdress,
        setLocInfo: state.setLocInfo,
    }
}

export default connect(mapStateToProps, {
    changeTown:changeTown,
    changeAdress: changeAdress,
    setAddressesList: setAddressesList,
    removeAddressesList: removeAddressesList,
})(CityInput);