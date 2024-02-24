import React, { useState} from 'react';
import s from './NewCard.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {
    createNewCardAction,
    isFavoriteToggleAction,
    listAction,
    newCardHiddenAction, newChangeColorBackgroundAction
} from "./newCardSliceReducer";
import Textarea from "./textarea/Textarea";
import List from "./list/List";
import {v4} from "uuid";

// import {postTodos} from "../../../actions/todos";
import {labelTogglePopupAction} from "../labelChangePopup/labelChangePopupSliceReducer";
import Palette from "../../palitra/Palette";

import {addTodo} from "../../../actions/user";



const NewCard = () => {
    const dispatch = useDispatch()
    const isActive = useSelector(state => state.newCardSlice.isActive)
    const isTextarea = useSelector(state => state.newCardSlice.isTextarea)
    const isList = useSelector(state => state.newCardSlice.isList)
    const isFavorite = useSelector(state => state.newCardSlice.isFavorite)
    const id = useSelector(state => state.newCardSlice.id)
    const labels = useSelector(state => state.newCardSlice.labels)
    const colorBackground = useSelector(state => state.newCardSlice.color)



    // const listTemp = useSelector(state => state.newCardSlice.listTemp)
    const listTemp = useSelector(state => state.newCardSlice.labelCheckBox)
    const textareaTemp = useSelector(state => state.newCardSlice.textareaTemp)

    const [headerInput, setHeaderInput] = useState('')

    const [mainTextarea, setMainTextarea] = useState('')

    //

    const [textareaHeight, setTextareaHeight] = useState('auto');
    function closeHandler() {
        dispatch(newCardHiddenAction())
        dispatch(newChangeColorBackgroundAction('#fff'))
        setHeaderInput('')
        setMainTextarea('')
        setTextareaHeight('auto')
    }

    // function createHandles() {
    const userId=useSelector(state => state.userSlice.currentUser.id)
    const createHandles = async (e) => {

        const newCard = {
            "id": v4(),
            "label": labels.length===0 ? 'all' : labels,
            "title": headerInput.length === 0 ? 'new card' : headerInput,
            "color": colorBackground,
            "panelChangeBGColor": false,
            "isFavorite": isFavorite,
            "labelCheckBox": listTemp,
            "textareaCheckBox": textareaTemp,
            "dateCreate": new Date(),
            "expandSizeCard":false
        }
        // console.log(newCard)


        dispatch(addTodo({...newCard}))



        dispatch(createNewCardAction())
        dispatch(newCardHiddenAction())
        setHeaderInput('')
        setMainTextarea('')
        setTextareaHeight('auto')
        dispatch(newChangeColorBackgroundAction('#fff'))

    }


    function listHandler() {

        dispatch(listAction())
    }
console.log()
    return (
        <div className={s.wrapperNewCard}>
            <div className={s.wrapper}
                style={{backgroundColor:`${colorBackground}`}}
            >
                {
                    isActive && <div className={s.wrapperHeader}>
                        <input type="text"
                               placeholder={"Enter title"}
                               value={headerInput}
                               onChange={(e) => setHeaderInput(e.target.value)}/>

                        <div className={s.wrapperIcons}>
                            <div className={s.bookmark}
                                 onClick={() => dispatch(labelTogglePopupAction({id: 'new',labels:labels}))}
                            >

                                <svg x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                                    <path fill="#f4efef"
                                          d="M37,43l-13-6l-13,6V9c0-2.2,1.8-4,4-4h18c2.2,0,4,1.8,4,4V43z"></path>
                                </svg>
                            </div>
                            <div className={s.favorites}
                                 onClick={() => dispatch(isFavoriteToggleAction())}
                            >
                                <svg width="48" height="48" viewBox="0 0 24 24">
                                    <path fill="none" d="M0 0h24v24H0z"/>
                                    <path
                                        fill={isFavorite ? "gold" : "black"}
                                        d="M17 4v7l2 3v2h-6v5l-1 1-1-1v-5H5v-2l2-3V4c0-1.1.9-2 2-2h6c1.11 0 2 .89 2 2zM9 4v7.75L7.5 14h9L15 11.75V4H9z"/>
                                </svg>
                            </div>

                            <div className={s.palette}>
                                <Palette id={id} color={colorBackground} />
                            </div>
                        </div>

                    </div>
                }


                <div className={s.wrapperMain}>
                    {
                        isTextarea && <Textarea
                            setMainTextarea={setMainTextarea} mainTextarea={mainTextarea}
                            setTextareaHeight={setTextareaHeight} textareaHeight={textareaHeight}
                        />

                    }

                    {
                        isList ? <span className={s.icon}
                                       onClick={() => listHandler()}>
                        <svg height="48" viewBox="0 0 48 48" width="48"><linearGradient id="a"
                            gradientUnits="userSpaceOnUse"
                            x1="2" x2="41.929472" y1="24"
                            y2="42.483432"><stop offset="0" stopColor="#4568dc"/><stop
                            offset=".98695652174" stopColor="#b06ab3"/></linearGradient><path
                            d="m42 24.14c0-1.104.896-2 2-2 1.104 0 2 .896 2 2v14.86c0 3.863-3.137 7-7 7h-30c-3.863 0-7-3.137-7-7v-30c0-3.863 3.137-7 7-7h30c3.863 0 7 3.137 7 7v1.54c0 1.104-.68 2.583-1.519 3.301l-19.132 16.398c-.839.718-2.123.639-2.868-.176l-7.961-8.713c-.745-.817-.687-2.085.13-2.83.817-.745 2.085-.687 2.83.13l6.016 6.591c.372.408 1.014.447 1.433.088l16.312-13.978c.419-.359.759-1.099.759-1.651v-.7c0-1.656-1.344-3-3-3h-28c-2.76 0-5 2.24-5 5v26c0 2.76 2.24 5 5 5h26c2.76 0 5-2.24 5-5z"
                            fill="url(#a)"/>
                        </svg>
                </span>
                            : !isTextarea ? <List/> : null

                    }


                </div>
                {
                    isActive && <div className={s.wrapperBottom}>
                        <button
                            onClick={() => createHandles()}
                        ><span>Create new card</span></button>
                        {/*<Palette id={'new'} color={"#fff"}/>*/}
                        <button
                            onClick={() => closeHandler()}
                        ><span>close</span></button>
                    </div>
                }


            </div>

        </div>
    );
};

export default NewCard;