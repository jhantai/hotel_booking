import React from 'react';
import Footer from './modules/Footer/Footer';
import Routess from './Routess/Routess';
import Header from './modules/Header/Header';
import {BrowserRouter} from "react-router-dom";
import style from './style.module.css'
// import HomePage from "./Pages/HomePage/HomePage";

const App = () => {
    return (
        <div className={style.stylee}>
           
        <Header></Header>
        <Routess></Routess>
         <Footer className={style.footer_app}></Footer> 
        
        </div>
    );
};

export default App;