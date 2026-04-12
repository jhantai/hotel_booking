import React from 'react';
import style from './style.module.css'
// import InputMaterial from "../../components/InputMaterial/InputMaterial";
// import {INPUTS_DATA} from "../../constants/INPUTS_DATA";

const TitleComp = () => {

 

    return (
        <div className={style.titleComponent}>
            <h1 className={style.title1}>Найдите жилье для новой поездки  </h1>
            <h3 className={style.title} >Ищите спецпредложения на отели, дома и другие варианты.!</h3>
            <div className={style.Inputs}>
                {/*{INPUTS_DATA.map((item, idx) => {*/}
                {/*    return(*/}
                {/*        <InputMaterial*/}
                {/*            onChange={(e) => {*/}
                {/*                search(false)*/}
                {/*            }}*/}
                {/*            key={idx}*/}
                {/*            icon={item.icon}*/}
                {/*            placeholder={item.placeholder}*/}
                {/*            type={item.type}*/}
                {/*            height={'50px'}*/}
                {/*        />*/}
                {/*    )*/}
                {/*})}*/}
                {/*<input onClick={() => {search(true)}} className={style.Button} type="button" value={'Поиск'}/>*/}
            </div>

        </div>
    );
};

export default TitleComp;