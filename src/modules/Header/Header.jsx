import React from 'react';
import logo from '../../assets/images/logo.svg'
import style from './style.module.css'

const Header = () => {
    return (
        <header>
            <div>
                <img src={logo} alt=""/>
            </div>
            <ul className={style.navigation}>
                <li><a href="/">Отели</a></li>
                <li><a href="https://www.aviasales.kg">Авиабилеты</a></li>
                <li><a href="https://experience.tripster.ru/destinations/kyrgyzstan/">Экскурсии</a></li>
            </ul>
        </header>
    );
};

export default Header;