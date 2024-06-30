import React from 'react';
import {HOTELS_DATA} from '../../constants/hotels'
const Hotels = () => {
    return (
        <div>
            {HOTELS_DATA.map((item , idx)=>{
                return(
                    <div key={idx}>
                        <img className={style.hotels_image} src={item.images[0]} alt=""/>
                        {item.name}
                        {item.text}
                    </div>
                )
            })}

        </div>
    );
};

export default Hotels;