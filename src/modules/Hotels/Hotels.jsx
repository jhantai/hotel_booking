import React from 'react';
import {HOTELS_DATA} from '../../constants/hotels'
import style from './style.module.css'
import {showError, showSuccess} from "../../utils/Alert";
import { useNavigate } from "react-router-dom";

const Hotels = (props) => {

    const {
        active
    } = props
    const navigate = useNavigate();

    return (
        <div id={'hotels'} className={style.hotels_main_page}>
            {HOTELS_DATA.map((item , idx)=>{
                return(
                    <div key={idx}>
                        <div className={style.hotels_container}>
                            <div className={style.hotels_image}>
                                <img src={item.image} alt=""/>
                            </div>
                            <div className={style.hotels_text_container}>
                                <p className={style.hotels_text_name}>{item.name}</p>
                                <p className={style.hotels_price}>{item.price}сом </p>
                            </div>
                            {/* <p className={style.hotels_text}>{item.text}</p> */}
                            
                            <button
                                onClick={() => {
                                    active()

                                    navigate(`/details/${idx}`);
                                }}
                            >Подробнее</button>
                        </div>
                    </div>
                )
            })}

        </div>
    );
};

export default Hotels;