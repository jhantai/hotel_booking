import React from 'react';
import Header from "../../modules/Header/Header";
import style from "./style.module.css";
import TitleComp from "../../modules/Title/Title";

const HomePage = () => {
    return (
        <>
            <Header />
            <div className={style.container}>
                <TitleComp />
            </div>
        </>
    );
};

export default HomePage;