import React from 'react';
import LOGO from '../../assets/images/LOGO_DIPLOm.png'
import SignIn from '../../Routess/Routess'
import {} from 'react-router-dom';
import style from './style.module.css'

const Header = ({}) => {
   
    return (
        <header>
            <div>
                <a href="/" >
                    <img src={LOGO} alt="" className={style.logo} />
                </a>
            </div>
            <ul className={style.navigation}>
                <li><a className={style.aaa} to="../Hotels/Hotels.jsx">Отели</a></li>
                <li><a className={style.aaa} href="https://www.aviasales.kg">Авиабилеты</a></li>
                <li><a className={style.aaa} href="https://experience.tripster.ru/destinations/kyrgyzstan/">Экскурсии</a></li>
               
            </ul>
        </header>
    );
};

export default Header;