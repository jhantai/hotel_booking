import React from 'react';
import style from './style.module.css'
import InputMaterial from "../../components/InputMaterial/InputMaterial";
import {INPUTS_DATA} from "../../constants/INPUTS_DATA";
import {Button} from "@mui/material";

const TitleComp = () => {
    return (
        <div className={style.titleComponent}>
            <h1 className={style.title}>Это больше, чем просто поездка!</h1>
            <div className={style.Inputs}>
                {INPUTS_DATA.map((item, idx) => {
                    return(
                        <InputMaterial
                            key={idx}
                            icon={item.icon}
                            placeholder={item.placeholder}
                            type={item.type}
                            height={'30px'}
                        />
                    )
                })}
                <input className={style.Button} type="button" value={'Забронировать'}/>
            </div>

        </div>
    );
};

export default TitleComp;