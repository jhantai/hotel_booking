import React, {useState} from 'react';
import Header from "../../modules/Header/Header";
import style from "./style.module.css";
import TitleComp from "../../modules/Title/Title";
import Reviews from "../../modules/Reviews/Reviews";
import Hotels from "../../modules/Hotels/Hotels";
import Footer from "../../modules/Footer/Footer";
import ModalWindow from "../../modules/ModalWindow/ModalWindow";

const HomePage = () => {

    const [active, setActive] = useState(true)

    return (
        <>
            <Header
                // search={setHotels}
                // hotels={hotels}
            />
            <div>
                {active &&
                    <ModalWindow
                        active={() => {setActive(false)}}
                    />
                }
            </div>
            <div className={style.container}>

                <TitleComp/>
                {/*<div>*/}
                {/*    {hotels && <Hotels/>}*/}
                {/*</div>*/}
                <Hotels
                    active={() => {setActive(true)}}
                />
                <Reviews/>
            </div>
            <Footer/>
        </>
    );
};

export default HomePage;