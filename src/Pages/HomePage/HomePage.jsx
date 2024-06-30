import React from 'react';
import Header from "../../modules/Header/Header";
import style from "./style.module.css";
import TitleComp from "../../modules/Title/Title";
import Reviews from "../../modules/Reviews/Reviews";

const HomePage = () => {
    return (
        <>
            <Header />
            <div className={style.container}>
                <TitleComp />
                <Reviews/>
            </div>
        </>
    );
};

export default HomePage;