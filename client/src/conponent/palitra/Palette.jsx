import React, {useEffect, useState} from 'react';
import s from './Palette.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {changeColorBackgroundAction} from "../../reducers/getSliceReducer";
// import {putTodos} from "../../actions/todos";
import {newChangeColorBackgroundAction} from "../main/newCard/newCardSliceReducer";
import {updateTodo} from "../../actions/user";


const Palette = ({id, color,item}) => {



    const dispatch = useDispatch()

    const [palette, setPalette] = useState([])
    const [isActive, setIsActive] = useState(false)


    const colorsPalette = useSelector(state => state.getSlice.colorsPalette)
    // console.log(colorsPalette)
    useEffect(() => {
        setPalette(colorsPalette)
        // console.log(palette)
    }, [colorsPalette]);


    const handlerColor = (id) => {
        // console.log(palette)
        // console.log(id)
        // console.log(color)

    }


    const handlerChangeColor=(id,color)=> {
        // console.log(id,color)
        if(id!=='new'){

            dispatch(changeColorBackgroundAction({id,color}))
        }else{
            dispatch(newChangeColorBackgroundAction(color))
            console.log("id!=='new'")
        }
    }

    function handlerClose() {
        setIsActive(false)
        if(id!=='new'){
            // console.log(item)
            const newTodo={...item}
            // dispatch(putTodos({idItem:item.id,newCard:item}))
            dispatch(updateTodo(newTodo))
        }
    }

    return (
        <div className={s.wrapperPalette}>
           <span className={s.iconColorPalette}
                 onClick={() => {
                     setIsActive(true)
                     handlerColor(id)
                 }}
           >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#000">
                <path
                    d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67A2.5 2.5 0 0 1 12 22zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5a.54.54 0 0 0-.14-.35c-.41-.46-.63-1.05-.63-1.65a2.5 2.5 0 0 1 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z"/><circle
                    cx="6.5" cy="11.5" r="1.5"/>
                <circle cx="9.5" cy="7.5" r="1.5"/><circle cx="14.5" cy="7.5" r="1.5"/><circle cx="17.5" cy="11.5"
                                                                                               r="1.5"/>
            </svg>
           </span>

            {
                isActive
                && <>
                    <div className={s.backgroundPopup}/>
                    <div className={s.palettePopup}>
                        <div className={s.closetButton}>
                            <button className={s.btnColorPalette}
                                    onClick={() => handlerClose()}>close
                            </button>
                        </div>
                        <div className={s.blockColors}>
                            {
                                palette.map((item,index) => (
                                    <div
                                        onClick={()=>handlerChangeColor(id,item)}
                                        className={`${s.colorItem} ${color === item ? s.active : ''}`}
                                        key={item+index}
                                        style={{backgroundColor: item}}
                                    ></div>
                                ))
                            }

                        </div>


                    </div>
                </>

            }
        </div>
    );
};

export default Palette;