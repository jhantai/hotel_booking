import React from 'react';
import style from './style.module.css'

const InputMaterial = (props) => {

    const {
        icon,
        placeholder,
        type,
        height
    } = props

    return (
        <div style={{height: height}} className={style.inputContainer}>
            <input type={type} placeholder={placeholder}  />
            <div className={style.inputIcon}>
                <img src={icon} alt=""/>
            </div>
        </div>
    );
};

export default InputMaterial;