import React from "react";
import OrderInf from "../../../Components/OrderInf/OrderInf";
import Map from "../../../Components/Map/Map";
import { changeAdress} from "../../../Components/actions/index";
import { connect } from "react-redux";
import CityInput from "../../../Components/Inputs/CityInput";
import AddressInput from "../../../Components/Inputs/AddressInput";
import "./Location.css";

const Location = () => {

    return(
        <div className="loc-content">
            <div className="loc-left-side">
                <div className="input-loc">
                    <CityInput />
                    <AddressInput />
                </div>
                <Map />
            </div>
            <OrderInf />
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        setAdress: state.setAdress,
        points: state.points
    }
}

export default connect(mapStateToProps, {
    changeAdress: changeAdress,
})(Location);