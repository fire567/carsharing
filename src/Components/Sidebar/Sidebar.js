import React from "react";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import {connect} from "react-redux";
import { setLanguage } from "../actions/index";
import "./Sidebar.css"

const Sidebar = ({ menu, changeLanguage, setLanguage }) => {
  const languages = [
    {value:false, text:"Рус"},
    {value:true, text:"Eng"}, 
  ];

  const newMenu = (item) => {
    menu(item)
  }

  console.log(changeLanguage);

  const currentLanguage = () => {
    return languages.map((item) => {
      if(item.value === changeLanguage){
      return (
        item.text
      )
      }
    })
  }

    return(
        <div className="Sidebar">
          <BurgerBtn newMenu={newMenu}/>
        <div className="ellipse" >
          <div className="language" onClick={() => setLanguage(changeLanguage)}>
            {currentLanguage()}
          </div>
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
})(Sidebar);