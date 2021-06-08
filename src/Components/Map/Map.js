import React, { useState, useEffect } from "react";
import "./Map.css";
import {setMapResult, zoomedPoint, changeAdress} from "../actions/index";
import { GoogleMap, withScriptjs, withGoogleMap, Marker  } from "react-google-maps";
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';


import {connect} from "react-redux";

const Map = ({setAdress, setTown, setMapResult, mapReducer, addressesList, zoomedPoint, zoomedPointReducer, changeAdress}) => {
    
    const [url, setURL] = useState("")
   
    const choosedMarker = (index) => {
        changeAdress(addressesList[index].address)
    }

    const showMap = () => {
        return(
            <GoogleMap 
                    defaultZoom={setAdress !== "" ? 17 : 10} 
                    defaultCenter={zoomedPointReducer ? {lat: zoomedPointReducer.lat, lng: zoomedPointReducer.lng} : {lat: 54.269839, lng: 48.289852}}
            >
            {mapReducer.map((point) => 
                <Marker position={point.latLng !== [] ? {lat: point.latLng.lat, lng: point.latLng.lng} : {lat: 54.269839, lng: 48.289852}} onClick={() => choosedMarker(point.index)} />
            )}
            
            </ GoogleMap>
        );
    };

    

    useEffect( () => {
        setURL("https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyChGoJ-GUzB6Vey3CQ-cG-G5CrgMOLDf5I")
        addressesList.map((point, index) => {
            geocodeByAddress(`${setTown},${point.address}`)
            .then(results => getLatLng(results[0]))
            .then(latLng => setMapResult({latLng, index}))
            .catch(error => console.error('Error', error))
        })
            geocodeByAddress(`${setTown},${setAdress}`)
        .then(results => getLatLng(results[0]))
        .then(latLng => zoomedPoint(latLng))
        .catch(error => console.error('Error', error))
        
      }, [addressesList])

    const WrappedMap = withScriptjs(withGoogleMap(showMap))

    return (
        <div className ="map-container">
            <div className="map-form">
                <div className="map-text">
                    Выбрать на карте:
                </div>
                <div className="map">
                {url != "" ?
                    <WrappedMap 
                        googleMapURL={`${url}`}
                        loadingElement={<div style={{height: "100%"}} />}
                        containerElement={<div style={{height: "100%"}} />}
                        mapElement={<div style={{height: "100%"}} />}
                    /> : null
                }
                </div>
            </div>
        </div>
    );
};


 const mapStateToProps = ((state) => {
    return{
        setAdress: state.setAdress,
        setTown: state.setTown,
        mapReducer: state.mapReducer,
        addressesList: state.addressesList,
        zoomedPointReducer: state.zoomedPointReducer,
    }
})

export default connect(mapStateToProps, {
    setMapResult: setMapResult,
    zoomedPoint: zoomedPoint,
    changeAdress: changeAdress,
})(Map);