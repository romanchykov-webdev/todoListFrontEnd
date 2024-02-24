import React from 'react';
import s from "./burger.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {burgerAction} from "./burgerSliceReducer";
import {searchAction} from "../search/icons/searchSliceReducer";

const Burger = () => {
    const dispatch=useDispatch()
    const isActive=useSelector(store=>store.burgerSlice.isActive)
    const isActiveSearch=useSelector(store=>store.searchSlice.isActive)

    function toggleBurger() {
        dispatch(burgerAction())
        if(isActiveSearch){
            dispatch(searchAction())
        }
    }

    return (
        <button className={isActive  ? `${s.menuBurger} ${s.active}` : `${s.menuBurger}`}
        onClick={toggleBurger}
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
};

export default Burger;