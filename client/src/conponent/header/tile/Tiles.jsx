import React from 'react';
import s from './Tiles.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {tilesToggleAction} from "./tilesSliceReducer";


const Tiles = () => {
    const dispatch = useDispatch()

    const toggle = useSelector(state => state.tilesSlice.toggleTiles)

    return (
        <div className={s.wrapperToggle}>
            {
                toggle==='list'
                    ? <div className={s.wrapperTiles}
                           onClick={() => dispatch(tilesToggleAction({toggle: 'tiles'}))}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    : <div className={s.wrapperList}
                           onClick={() => dispatch(tilesToggleAction({toggle: 'list'}))}
                    >
                        <span></span>
                        <span></span>

                    </div>
            }


        </div>

    );
};

export default Tiles;