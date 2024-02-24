import React, {useState} from 'react';
import s from './labelChangePopup.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {
    addLabelAction,
    removeLabelAction,
    labelTogglePopupAction
} from "./labelChangePopupSliceReducer";
import {labelsAddAction, labelsRemoveAction} from "../newCard/newCardSliceReducer";
import {bookmarkAddAction, bookmarkRemoveAction} from "../../../reducers/getSliceReducer";
import {updateTodo} from "../../../actions/user";



const LabelChangePopup = () => {

    const dispatch = useDispatch()


    // uniqueLabels
    const idItem = useSelector(state => state.labelPopupSlice.id)

    // console.log(idItem)


    const uniqueLabelsArray = useSelector(state => state.labelPopupSlice.labelsAllCards)
    // uniqueLabels
    const labelItem = useSelector(state => state.labelPopupSlice.labels)

    const cLabel = useSelector(state => state.newCardSlice.labels)
    let createLabel = []
    if (idItem === 'new') {
        createLabel = cLabel.filter(item => item !== 'all')
    } else {
        createLabel = labelItem.filter(item => item !== 'all')

    }
    // console.log(uniqueLabels)
    const todos = useSelector(state => state.getSlice.getTodos)
    // console.log(createLabel)


    const [newLabel, setNewLabel] = useState('')


    function handlerAddLAbel() {
        // console.log(idItem)
        if (idItem === 'new') {
            dispatch(labelsAddAction(newLabel))
        } else {
            dispatch(bookmarkAddAction({id: idItem, label: newLabel}))
            dispatch(addLabelAction(newLabel))
        }
        setNewLabel('')
    }

    function handlerRemoveLabel(item) {
        // console.log("handlerRemoveLabel")
        if (idItem === 'new') {

            dispatch(labelsRemoveAction(item))
        } else {
            dispatch(bookmarkRemoveAction({id: idItem, label: item}))
            dispatch(removeLabelAction(item))
        }
    }

    function handlerAddLabel(item) {
        if (idItem === 'new') {

            dispatch(labelsAddAction(item))
        } else {
            dispatch(bookmarkAddAction({id: idItem, label: item}))
            dispatch(addLabelAction(item))
        }

    }

    async function handlerClose(idItem) {
        let newTodo = {};
        const foundItem = todos.find(item => item.id === idItem);

        if (foundItem) {
            newTodo = {...foundItem}; // copy  item
            // console.log(newCard.id);


            // dispatch(putTodos({idItem, newCard}))
            dispatch(updateTodo(newTodo))
        }
        dispatch(labelTogglePopupAction(idItem))

    }


    return (


        <div className={s.wrapperPopupLabel}
             key={idItem}
        >
            <div className={s.wrapper}>
                <div className={s.headerTitle}>
                    Labels
                    <button onClick={() => handlerClose(idItem)}>
                        <svg viewBox="0 0 50 50" width="40px" height="40px">
                            <path
                                d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/>
                        </svg>
                    </button>
                </div>
                <div className={s.header}>
                    <input type="text"
                           value={newLabel}
                           onChange={(e) => setNewLabel(e.target.value)}
                           placeholder={"new label"}
                    />
                    <button
                        onClick={handlerAddLAbel}
                    >add
                    </button>
                </div>
                {
                    // uniqueLabels.map(item => (
                    uniqueLabelsArray.map(item => (

                        <div className={s.wrapperLabels} key={item.id}>

                            {
                                createLabel.includes(item)
                                    ? <label htmlFor={item}
                                             onClick={() => handlerRemoveLabel(item)}
                                    >
                                            <span className={s.iconActive}>
                                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none"><g
                                                    id="Interface / Checkbox_Check"><path id="Vector"
                                                                                          d="M8 12L11 15L16 9M4 16.8002V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H7.19691C6.07899 20 5.5192 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2842 4.21799 18.9079C4 18.4801 4 17.9203 4 16.8002Z"
                                                                                          stroke="#000000"
                                                                                          strokeWidth="2"
                                                                                          strokeLinecap="round"
                                                                                          strokeLinejoin="round"></path></g></svg>
                                            </span>

                                        {item}
                                    </label>

                                    : <label htmlFor={item}
                                             onClick={() => handlerAddLabel(item)}
                                    >

                                            <span className={s.iconNoActiv}>
                                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none"><path
                                                    fillRule="evenodd" clipRule="evenodd"
                                                    d="M6 5C5.44772 5 5 5.44772 5 6V13V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V13V6C19 5.44772 18.5523 5 18 5H6ZM3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V13V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V13V6Z"
                                                    fill="#000000"></path></svg>
                                            </span>

                                        {item}
                                    </label>

                            }


                        </div>

                    ))
                }


                {/*<span>add label</span>*/}
                {
                    createLabel.map(item => (
                        <>
                            {
                                !uniqueLabelsArray.includes(item )
                                    ?
                                    <div className={s.wrapperLabels} key={item.id}>
                                        <label htmlFor={item}
                                               onClick={() => dispatch(labelsRemoveAction(item))}
                                        >
                                        <span className={s.iconActive}>
                                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none"><g
                                                    id="Interface / Checkbox_Check"><path id="Vector"
                                                                                          d="M8 12L11 15L16 9M4 16.8002V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V16.8036C20 17.9215 20 18.4805 19.7822 18.9079C19.5905 19.2842 19.2837 19.5905 18.9074 19.7822C18.48 20 17.921 20 16.8031 20H7.19691C6.07899 20 5.5192 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2842 4.21799 18.9079C4 18.4801 4 17.9203 4 16.8002Z"
                                                                                          stroke="#000000"
                                                                                          strokeWidth="2"
                                                                                          strokeLinecap="round"
                                                                                          strokeLinejoin="round"></path></g></svg>
                                            </span>
                                            {item}
                                        </label>


                                    </div>
                                    : null
                            }
                        </>
                    ))
                }


            </div>
        </div>
    );


};

export default LabelChangePopup;