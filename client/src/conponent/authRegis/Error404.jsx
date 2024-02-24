import React from 'react';
import img from './img/404.jpg'
import s from './authRegis.module.scss'
import {Link} from "react-router-dom";

const Error404 = () => {
    return (
        <div className="container">
            <div className={s.page404}>
                <button> <Link to={'/'}>Home</Link>
                </button>
                <img src={img} alt="error 404 page not found"/>
            </div>
        </div>
    );
};

export default Error404;