import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import MainPAge from "./MainPage/MainPage";
import "./App.css"


const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <MainPAge />
    </div>
  );
}

export default App;
