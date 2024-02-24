import React from 'react';
import s from './footer.module.scss'
import {Link} from "react-router-dom";
const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={'container'}>
                <h2>MongoDB Express React Node.js
                    <Link to={'https://github.com/romanchykov-webdev/TodoList.git'} target={"_blank"}>Github</Link>
                </h2>

            </div>
        </footer>
    );
};

export default Footer;