import React from 'react';
import s from './Header.module.scss'
import Burger from "./burger/burger";
import Search from "./search/Search";
import Tiles from "./tile/Tiles";
import {Link} from "react-router-dom";
import Nav from "./nav/Nav";
import {useSelector} from "react-redux";
// import {logOutAction} from "../authRegis/userSliceReducer";
import defaultAvatar from './img/avatar.svg'
// import iconLogUot from './img/exit.svg'
import {API_URLMongo} from "../../config";

const Header = () => {
    // const dispatch=useDispatch()

    // const isAuth = useSelector(state => state.userSlice.isAuth)
    const user = useSelector(state => state.userSlice.currentUser)

    const avatar = user.avatar ? `${API_URLMongo+user.avatar}` : defaultAvatar

    return (
        <header>
            <div className={"container"}>
                <div
                    // style={isAuth ? {visibility: "visible"} : {visibility: "hidden"}}
                    className={s.wrapper}>
                    <Burger/>
                    <Nav/>
                    <div className={s.wrapRight}>
                        <Search/>
                        <Tiles/>
                        <Link to="/profile" className={s.avatar}>
                            <div className={s.nikName}>
                                {user.email}
                            </div>
                            <div className={s.iconAvatar}>
                                {
                                    <img src={avatar} alt=""/>
                                }
                            </div>
                     
                        </Link>
                    </div>
                </div>
            
            </div>


        </header>
    );
};

export default Header;