import React from 'react';
import Header from "../../modules/Header/Header";
import style from "./style.module.css";
import TitleComp from "../../modules/Title/Title";
import Reviews from "../../modules/Reviews/Reviews";
import Hotels from "../../modules/Hotels/Hotels";
import Footer from "../../modules/Footer/Footer";

const HomePage = () => {
    return (
        <>
            <Header />
            <div className={style.container}>
                <TitleComp />
                <Hotels/>
                <Reviews/>

            </div>
            <Footer/>
        </>
    );
};

export default HomePage;