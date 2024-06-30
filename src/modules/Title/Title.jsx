import React from 'react';
import style from './style.module.css'

const TitleComp = () => {
    return (
        <div className={style.titleComponent}>
            <h1 className={style.title}>Это больше, чем просто поездка!</h1>
        </div>
    );
};

export default TitleComp;