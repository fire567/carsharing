import React, { useState, useEffect } from "react";
import "./Map.css";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import {connect} from "react-redux";

const Map = () => {
    const [url, setURL] = useState("")

    const showMap = () => {
        return(
            <GoogleMap 
                    defaultZoom={10} 
                    defaultCenter={{lat: 54.269839, lng:48.289852}}
            />
        );
    };

    useEffect(() => {
        setURL("https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyChGoJ-GUzB6Vey3CQ-cG-G5CrgMOLDf5I")
      }, [])

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



export default connect(null)(Map);