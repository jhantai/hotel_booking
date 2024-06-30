import React, {useState} from 'react';
import Header from "../../modules/Header/Header";
import style from "./style.module.css";
import TitleComp from "../../modules/Title/Title";
import Reviews from "../../modules/Reviews/Reviews";
import Hotels from "../../modules/Hotels/Hotels";
import Footer from "../../modules/Footer/Footer";

const HomePage = () => {

    const [hotels, setHotels] = useState(false)

    return (
        <>
            <Header />
            <div className={style.container}>
                <TitleComp search={setHotels}/>
                <div>
                    {hotels && <Hotels/>}
                </div>
                <Reviews/>
            </div>
            <Footer/>
        </>
    );
};

export default HomePage;