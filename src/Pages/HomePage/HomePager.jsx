import React, {useState} from 'react';
import Header from "../../modules/Header/Header";

import TitleComp from "../../modules/Title/Title";
import Reviews from "../../modules/Reviews/Reviews";
import Hotels from "../../modules/Hotels/Hotels";
import Footer from "../../modules/Footer/Footer";
import ModalWindow from "../../modules/ModalWindow/ModalWindow";


const HomePager = () => {

    const [active, setActive] = useState(false)

    return (
        <>
         
            <div>
                {active &&
                    <ModalWindow
                        active={() => {setActive(false)}}
                    />
                }
            </div>
            <div >

                <TitleComp/>
              
                <Hotels
                    active={() => {setActive(true)}}
                />
                <Reviews/>
            </div>
           
        </>
    );
};

export default HomePager;