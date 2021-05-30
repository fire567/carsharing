import React, { useState, useEffect } from "react";
import "./Map.css";
import { GoogleMap, withScriptjs, withGoogleMap, Marker  } from "react-google-maps";
import { useLoadScript } from "@react-google-maps/api";
import GooglePlacesAutocomplete ,{ geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';

/*import usePlacesAutocomplete, {
    geocodeByAddress,
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";*/
import {connect} from "react-redux";

const Map = ({setAdress}) => {
    
    const [url, setURL] = useState("")
    const [result, setResult ] = useState({lat: 54.269839, lng: 48.289852})

    const showMap = () => {
        return(
            <GoogleMap 
                    defaultZoom={setAdress !== "" ? 17 : 10} 
                    defaultCenter={setAdress !== "" ? {lat: result.lat, lng: result.lng} : {lat: 54.269839, lng: 48.289852}}
            >
            <Marker position={setAdress !== "" ? {lat: result.lat, lng: result.lng} : {lat: 54.269839, lng: 48.289852}}/>
            </ GoogleMap>
        );
    };

    

    useEffect( () => {
        setURL("https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyChGoJ-GUzB6Vey3CQ-cG-G5CrgMOLDf5I")
        geocodeByAddress(setAdress)
        .then(results => getLatLng(results[0]))
        .then(latLng => setResult(latLng))
        .catch(error => console.error('Error', error))
      }, [setAdress])

      //if(isLoaded) return "cool"

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
    
   return(
       <div>
       </div>
   )
};


 const mapStateToProps = ((state) => {
    return{
        setAdress: state.setAdress
    }
})

export default connect(mapStateToProps)(Map);