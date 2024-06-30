import React from 'react';
import './style.css'


const Alert = (props) => {

    const {
        title,
        text,
    } = props

    return (
        <div>
            <b>{title}</b>
            <div>{text}</div>
        </div>
    );
};

export default Alert;