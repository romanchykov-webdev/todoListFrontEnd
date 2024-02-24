import React, {useEffect, useRef, useState} from 'react';
// import s from './sectionFavorite.scss'
import './sectionFavorite.scss'
import AllCard from "../sectionAllCard/card/AllCard";
import {useDispatch, useSelector} from "react-redux";
import {isToggleVisibleFavorite} from "./sectionFavoriteSliceReducer";
import { CSSTransition } from 'react-transition-group';
const SectionFavorite = ({isFavorite}) => {
    const dispatch=useDispatch()

    const toggleTiles=useSelector(state => state.tilesSlice.toggleTiles)
    const favoriteToggle=useSelector(state => state.favoriteSlice.toggle)
const isSectionFavorite='isFavorite'

    const handlerToggle=()=> {
        dispatch(isToggleVisibleFavorite())
    }

    const [showFavorite, setShowFavorite] = useState(favoriteToggle);
    useEffect(() => {
        setShowFavorite(favoriteToggle)
    }, [favoriteToggle]);
    const nodeRef = useRef(null);
    // console.log(toggleTiles)
    return (

        <section

            className={'favorite' }
                 style={favoriteToggle ? {paddingBottom:'20px'} : {}}
        >
            <div className={"toggleIsVisibleFavorite"}>
                <h6>Favorite</h6>
                <button
                onClick={handlerToggle}
                className={favoriteToggle ?'isActive' : ''}

                >

                    <svg
                        width="800px" height="800px" viewBox="0 0 1024 1024" className="icon" version="1.1"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000" /></svg>
                </button>
            </div>

            <CSSTransition
                in={showFavorite}
                nodeRef={nodeRef}
                timeout={3000}
                classNames="showFavorite"
                unmountOnExit
            >

            <div
                ref={nodeRef}
                className={toggleTiles==="tiles" ? "showFavorite wrapperTiles" : "showFavorite wrapperList"}
                // style={favoriteToggle ? {height:'auto'} : {height:0}}
            >
                {isFavorite.map(item=>(
                    <AllCard
                        key={item.id+"isFavorite"}
                             item={item}
                        isSectionFavorite={isSectionFavorite}
                    />
                ))}
            </div>
            </CSSTransition>


        </section>

    );
};

export default SectionFavorite;