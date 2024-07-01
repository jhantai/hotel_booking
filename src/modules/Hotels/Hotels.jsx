import React from 'react';
import {HOTELS_DATA} from '../../constants/hotels'
import style from './style.module.css'
import {showError, showSuccess} from "../../utils/Alert";

const Hotels = (props) => {

    const {
        active
    } = props

    return (
        <div id={'hotels'} className={style.hotels_main_page}>
            {HOTELS_DATA.map((item , idx)=>{
                return(
                    <div key={idx}>
                        <div className={style.hotels_container}>
                            <div className={style.hotels_image}>
                                <img src={item.images} alt=""/>
                            </div>
                            <div className={style.hotels_text_container}>
                                <p className={style.hotels_text_name}>{item.name}</p>
                                <p className={style.hotels_price}>{item.price}сом </p>
                            </div>
                            <p className={style.hotels_text}>{item.text}</p>
                            <button
                                // onClick={() => {
                                //     item.free ?
                                //         showSuccess('Готово', 'Отель успешно забронирован!')
                                //         :
                                //         showError('Ошибка', 'В данный момент в отеле нет мест!')
                                // }}
                                onClick={() => {
                                    active()
                                    sessionStorage.setItem('free', String(item.free))
                                }}
                            >Забронировать</button>
                        </div>
                    </div>
                )
            })}

        </div>
    );
};

export default Hotels;