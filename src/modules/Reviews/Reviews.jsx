import React from 'react';
import {REVIEWS_DATA} from '../../constants/reviews'
import Rating from '@mui/material/Rating';
import style from './style.module.css'
import { useLang } from '../../context/LangContext';
const Reviews = () => {
      const { t, lang, toggleLang } = useLang();
    return (
        <div className={style.reviews_main}>
             <h1 className={style.tittle_tripma}>
             {t('reviews')}
                 <span className={style.tripma_span}>StayGuest</span>
             </h1>
            <div className={style.reviews_container}>
                {REVIEWS_DATA.map((item, idx) => {
                    return (
                        <div  key={idx}>
                            <div className={style.reviews_info}>
                                <img className={style.reviews_img} src={item.img} alt="d"/>
                                <h4 className={style.reviews_item}> {item.name}</h4>
                                <div><Rating defaultValue={item.stars} precision={0.5} readOnly/></div>
                                <p className={style.reviews_item}>{item.text}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Reviews;