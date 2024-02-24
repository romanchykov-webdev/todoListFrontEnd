import React, {useEffect, useRef, useState} from 'react';
import './Nav.scss'
import {useDispatch, useSelector} from "react-redux";
import { CSSTransition } from 'react-transition-group';
import {addLabelSearch} from "./NavSliceReducer";
import {burgerAction} from "../burger/burgerSliceReducer";



const Nav = () => {
    // const dispatch=useDispatch()
    // const allLabelsTodos=useSelector(state => state.getSlice.getTodos)
    const menuActive=useSelector(state => state.burgerSlice.isActive)
    const alLabels=useSelector(state => state.labelPopupSlice.labelsAllCards)

    useEffect(() => {
        setShowNav(menuActive)
    }, [menuActive]);

    const [showNav, setShowNav] = useState(menuActive);
    const nodeRef = useRef(null);
    // console.log(showNav)
    const dispatch=useDispatch()

    function handlerSearch(item) {
        // console.log(item)
        dispatch(addLabelSearch(item))
    }

    return (
        <CSSTransition
            in={showNav}
            nodeRef={nodeRef}
            timeout={300}
            classNames="nav"
            unmountOnExit
        >
        <nav
            ref={nodeRef}
            className={"nav"}
            // style={menuActive && {left:0}}
        >
            <ul>
                <li onClick={()=>handlerSearch('all')}>All</li>
                {
                    alLabels.map((item,index)=>(
                        <li key={item+index}
                            onClick={()=>handlerSearch(item)}
                        > {item}</li>
                    ))
                }
                <button onClick={()=>dispatch(burgerAction())}>close</button>

            </ul>
        </nav>
        </CSSTransition>
    )



};

export default Nav;