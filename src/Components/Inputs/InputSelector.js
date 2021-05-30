import React from "react";
import {changeAdress} from "../actions/index";
import {connect} from "react-redux"

const AddressSelector = ({ address, changeAdress }) => {

    const changeAdressName = (adress) => {
        changeAdress(adress)
    }

    return (
        <option key = {address.id} className="loc-name" onClick={() => changeAdressName(address.address)}>
            {address.address}
        </option>
    )
}

export default connect(null, {
    changeAdress: changeAdress,
})(AddressSelector);