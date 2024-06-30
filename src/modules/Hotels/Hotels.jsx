import React from 'react';
import {HOTELS_DATA} from '../../constants/hotels'
import style from './style.module.css'
const Hotels = () => {
    return (
        <div className={style.hotels_main_page}>
            {HOTELS_DATA.map((item , idx)=>{
                return(
                    <div key={idx}>
                        <div className={style.hotels_container}>
                            <img className={style.hotels_image} src={item.images[0]} alt=""/>
                            <div className={style.hotels_text_container}>
                                <p className={style.hotels_text_name}>  {item.name}</p>
                                <p className={style.hotels_price}>{item.price}сом </p>
                            </div>

                            <p className={style.hotels_text}>  {item.text}</p>
                        </div>


                    </div>
                )
            })}

        </div>
    );
};

export default Hotels;