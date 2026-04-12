import React from 'react';
import style from './style.module.css'
import logo from '../../assets/images/LOGO_DIPLOm.png'

import {ABOUT_DATA, PARTNER_DATA, SUPPORT_DATA, APP_DATA} from "../../constants/FOOTER_DATA";

const Footer = () => {
    return (
        <footer>
            <div className={style.logo}>
                <img src={logo} alt=""/>
            </div>
            <div>
                <ul>
                    <li><b>{ABOUT_DATA.title}</b></li>
                    {ABOUT_DATA.links.map((item, idx) => {
                        return (
                            <li key={idx}><a href="/">{item}</a></li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <ul>
                    <li><b>{PARTNER_DATA.title}</b></li>
                    {PARTNER_DATA.links.map((item, idx) => {
                        return (
                            <li key={idx}><a href="/">{item}</a></li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <ul>
                    <li><b>{SUPPORT_DATA.title}</b></li>
                    {SUPPORT_DATA.links.map((item, idx) => {
                        return (
                            <li key={idx}><a href="/">{item}</a></li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <ul>
                    <li><b>{APP_DATA.title}</b></li>
                    {APP_DATA.links.map((item, idx) => {
                        return (
                            <li key={idx}><a href="/">{item}</a></li>
                        )
                    })}
                </ul>
            </div>
        </footer>
    );
};

export default Footer;