import React, { useState, useEffect } from "react";
import "./Map.css";
import {setMapResult, removeAddressesList, zoomedPoint} from "../actions/index";
import { GoogleMap, withScriptjs, withGoogleMap, Marker  } from "react-google-maps";
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';


import {connect} from "react-redux";

const Map = ({setAdress, setTown, setMapResult, mapReducer, addressesList, removeAddressesList, zoomedPoint, zoomedPointReducer}) => {
    
    const [url, setURL] = useState("")
    
    //var address = addressesList.filter((address) => address.address === setAdress);
    console.log(zoomedPointReducer)

    const showMap = () => {
        return(
            <GoogleMap 
                    defaultZoom={setAdress !== "" ? 17 : 10} 
                    defaultCenter={zoomedPointReducer && setAdress !== "" ? {lat: zoomedPointReducer.lat, lng: zoomedPointReducer.lng} : {lat: 54.269839, lng: 48.289852}}
            >
            {mapReducer.map((point) => 
                <Marker position={point !== [] ? {lat: point.lat, lng: point.lng} : {lat: 54.269839, lng: 48.289852}}/>
            )}
            
            </ GoogleMap>
        );
    };

    

    useEffect( () => {
        removeAddressesList()
        setURL("https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyChGoJ-GUzB6Vey3CQ-cG-G5CrgMOLDf5I")
        addressesList.map((point) => {
            geocodeByAddress(`${setTown},${point.address}`)
            .then(results => getLatLng(results[0]))
            .then(latLng => setMapResult(latLng))
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
    removeAddressesList: removeAddressesList,
    zoomedPoint: zoomedPoint
})(Map);