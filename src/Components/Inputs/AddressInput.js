import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {changeAdress} from "../actions/index";
import InputSelector from "./InputSelector";
import exitBtn from "../../assets/exitBtn.svg";

const AddressInput = ({ setAdress, changeAdress, points, setTown }) => {
    const [foundAddresses, setFoundAddresses ] = useState([])
    const [ addressActiveSelector, setAddressActiveSelector ] = useState(false);
    
    useEffect(() => {
        if(points.data){
            console.log(points)
            setFoundAddresses(points.data.filter((point) => point.address.toLowerCase().includes(setAdress.toLowerCase())))
        }
      }, [setAdress])

    window.addEventListener('click', (event) => {
        if(event.target.className !== "address-loc-input"){
            setAddressActiveSelector(false)
        }
        else{
            setAddressActiveSelector(true)
        }
      });

    const currentAdress = (event) => {
        changeAdress(event.target.value)
    }

    const deleteText = () => {
        changeAdress("")
    }

    const activeInputClickHandler = (value) => {
        setAddressActiveSelector(value)
    }

    const adressSelector = () => {
        return points.data.map((address) => {
            if(address.address.toLowerCase().includes(setAdress.toLowerCase())){
            return (
                <InputSelector address={address}/>
            )
            }
        })
    }

    const adressAutoSelectorAll = () => {
        return points.data.map((address) => {
            if(address.cityId !== null){
                if(setAdress.length === 0){
                    return(
                        <InputSelector address={address}/>
                    )
                }
        }
        })
    }

    const adressAutoSelector = () => {
        return points.data.map((address) => {
            if(address.cityId !== null){
                if(address.cityId.name === setTown){
                return (
                    <InputSelector address={address}/>
                )
                }
        }
        })
    }

    const showSelector = () => {
        if(foundAddresses.length === 0 && setAdress.length >= 2){
            return null
        }else if(setTown.length === 0 && setAdress.length >= 2 && addressActiveSelector){
            return(
                <div className="selector" onClick={() => activeInputClickHandler(true)}>
                    {points.data[0].address === undefined ? "Loading..." : adressSelector()}
                </div>
            )
        }else if(setTown.length === 0 && addressActiveSelector){
            return(
            <div className="selector" onClick={() => activeInputClickHandler(true)}>
                {points.data === undefined ? "Loading..." : adressAutoSelectorAll()}
            </div>
            )
        }else if(setTown.length >= 2 && addressActiveSelector){
            return(
                <div className="selector" onClick={() => activeInputClickHandler(true)}>
                    {points.data === undefined ? "Loading..." : adressAutoSelector()}
                </div>
            )
        }
    }


    return(
        <form className="input-form">
                        <div className="town-name">Пункт выдачи:</div>
                        <input 
                            type="text" 
                            placeholder="Начните вводить пункт ..." 
                            className="address-loc-input" 
                            value={setAdress} 
                            onChange={currentAdress}
                            onClick={() => activeInputClickHandler(true)}
                        >
                        </input>
                        {setAdress.length > 0 && 
                            <button type="reset" className="reset-btn" onClick={() => deleteText()}>
                                <img src={`${exitBtn}`}  />
                            </button>
                        }
                        
                        {showSelector()}
        </form>
    )
}

const mapStateToProps = (state) => {
    return{
        setTown: state.setTown,
        setAdress: state.setAdress,
        points: state.points
    }
}

export default connect(mapStateToProps, {
    changeAdress: changeAdress,
})(AddressInput);