import React from "react";
import "./Map.css";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = () => {
    const showMap = () => {
        return(
            <GoogleMap 
                    defaultZoom={10} 
                    defaultCenter={{lat: 54.269839, lng:48.289852}}
            />
        );
    };

    const WrappedMap = withScriptjs(withGoogleMap(showMap))

    return (
        <div className ="map-container">
            <div className="map-form">
                <div className="map-text">
                    Выбрать на карте:
                </div>
                <div className="map">
                    <WrappedMap 
                        googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyChGoJ-GUzB6Vey3CQ-cG-G5CrgMOLDf5I"}
                        loadingElement={<div style={{height: "100%"}} />}
                        containerElement={<div style={{height: "100%"}} />}
                        mapElement={<div style={{height: "100%"}} />}
                    />
                </div>
            </div>
        </div>
    );
};

export default Map;