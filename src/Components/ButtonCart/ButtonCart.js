import React from "react";
import "./ButtonCart.css";
import cart from "../../assets/cart-pic.svg";
import { connect } from "react-redux";
import { showCart } from "../actions/index";

const ButtonCart = ({ showCart, cartReducer }) => {

    const activeCart = () => {
        showCart(!cartReducer)
    }

    return(
        <button className="cart-form" onClick={() => activeCart()}>
            <img src={cart} className="cart-pic"/>
        </button>
        )
    }

    const mapStateToProps = (state) => {
        return{
            cartReducer: state.cartReducer
        }
    }

export default connect(mapStateToProps, {
    showCart: showCart,
})(ButtonCart);