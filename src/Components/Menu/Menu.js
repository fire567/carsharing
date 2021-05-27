import React from "react";
import exit from "../../assets/exit.svg";
import Links from "./Links/Links"
import {connect} from "react-redux";
import { setLanguage } from "../actions/index";
import "./Menu.css";


const Menu = ({menuChange, switchMenu, changeLanguage, setLanguage}) => {
    const languages = [
        {value:false, text:"Рус"},
        {value:true, text:"Eng"}, 
      ];
    
      const currentLanguage = () => {
        return languages.map((item) => {
          if(item.value === changeLanguage){
          return (
            item.text
          )
          }
        })
      }

    const showMenu = () => {
        menuChange(false);
    }

    return(
        <div className={switchMenu === true ? "menu-active" : "menu"}>
            <div className="left-side-menu">
                <img src={exit} alt="exit-pic" className="exit-pic" onClick={() => showMenu()}></img>
                <Links />
                <div className="language-in-menu" onClick={() => setLanguage(changeLanguage)}>
                    {currentLanguage()}
                </div>
            </div>
            <div className="right-side-menu">
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
      changeLanguage: state.changeLanguage
    }
  } 
  
  export default connect(mapStateToProps, {
    setLanguage: setLanguage
  })(Menu);