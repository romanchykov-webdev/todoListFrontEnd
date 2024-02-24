import React, {useEffect, useState} from 'react';
import s from './AllCard.module.scss'

import {useDispatch, useSelector} from "react-redux";

import {putTodos, removeCard} from "../../../../actions/todos";
import HeaderIcons from "../../../headerIcons/HeaderIcons";
import Palette from "../../../palitra/Palette";
import RemoveCard from "../../../removeCard/RemoveCard";
import List from "../../newCard/list/List";
import {bookmarkAddAction, bookmarkRemoveAction, dragAndDropAction} from "../../../../reducers/getSliceReducer";
import {removeLabelAction} from "../../labelChangePopup/labelChangePopupSliceReducer";
import {updateTodo} from "../../../../actions/user";


const AllCard = ({item,isSectionFavorite=[]}) => {


    const isBigWindow = useSelector(state => state.isBigCard.isActive)


    const dispatch = useDispatch()

    const [itemTextarea, setItemTextarea] = useState(item.textareaCheckBox)

    const isActiveBig = item.expandSizeCard
    const [is, stIs] = useState()
    useEffect(() => {
        stIs(isActiveBig)
    }, [isActiveBig]);

    const quantityLabels = item.label.length - 1

    const [writeTimeout, setWriteTimeout] = useState(false)

    function handlerChangeTextTextarea(e) {
        setItemTextarea(e.target.value)
        const newTodo = {
            ...item,
            textareaCheckBox: e.target.value
        }
        // console.log(newCard)

        if (writeTimeout !== false) {
            clearTimeout(writeTimeout)
        }
        setWriteTimeout(
            setTimeout((value) => {
                // dispatch(putTodos({idItem: item.id, newCard: newCard}))
                dispatch(updateTodo(newTodo))
                console.log("putTodos textarea")
            }, 1000, e.target.value)
        )
    }


    // change name card
    const [nameCard, setNameCard] = useState(item.title)

    function handlerChangeName(e) {
        setNameCard(e.target.value)
        const newTodo = {
            ...item,
            title: e.target.value
        }

        if (writeTimeout !== false) {
            clearTimeout(writeTimeout)
        }

        setWriteTimeout(
            setTimeout((value) => {

                // dispatch(putTodos({idItem: item.id, newCard: newCard}))
                dispatch(updateTodo(newTodo))
                // console.log("setWriteTimeout changeName card")
                // console.log(newCard)
            }, 1000, e.target.value)
        )

    }

    // change name card


    function handlerRemoveLabel(itemLabel) {
        const newTodo = { ...item,label: item.label.filter(i => i !== itemLabel) };


        // dispatch(putTodos({idItem:item.id, newCard: newCard}))
        dispatch(updateTodo(newTodo))
    }

    return (
        <div
            className={s.wrapperCard + " " + "wrapperCardBig"}

            key={item.id + 23}
            style={{backgroundColor: item.color, ...(is && {opacity: 0})}}


        >

            <div className={s.header}>

                <div className={s.headerTitle}>
                    <input type="text"
                           value={nameCard}
                           onChange={(e) => handlerChangeName(e)}
                    />

                </div>
                <HeaderIcons
                    item={item}
                    isFavorite={item.isFavorite}
                    isSectionFavorite={isSectionFavorite}
                    quantityLabels={quantityLabels}
                />
            </div>
            <div className={s.blockHidden}>
                <div>color: {item.color}</div>
                <div>id: {item.id}</div>
                <div>isFavorite: {item.isFavorite ? 'true' : 'false'}</div>
                <div>dateCreate: {item.dateCreate}</div>
                <div>panelChangeBGColor: {item.panelChangeBGColor ? 'true' : 'false'}</div>
            </div>
            <article className={s.blockArticle}>

                    {/*{isSectionFavorite.length>0 ? 'true' : 'false'}*/}

                {
                    item.textareaCheckBox.length > 0

                        ? <textarea rows={5}
                                    style={isSectionFavorite.length>0 ? {fontSize:'1em'} : {}}
                                    value={itemTextarea}
                                    onChange={(e) => handlerChangeTextTextarea(e)}
                        >

                    </textarea>
                        : <List itemTodo={item}
                                isSectionFavorite={isSectionFavorite}
                        />
                    // (item.labelCheckBox.map(i => (<p>{i.title}</p>)))
                }


            </article>
            <div className={s.footerCard}>

                <div className={s.blockLabel}>
                    <div className={s.blockIcons}>
                        <Palette id={item.id} color={item.color} item={item}/>
                        <RemoveCard id={item.id}/>
                    </div>
                    {
                        item.label.map((itemLabel, index) => (
                            itemLabel !== 'all'
                                ? <span
                                    className={s.labelCard}
                                    key={itemLabel + index}

                                    >
                                        {itemLabel}
                                <button
                                    className={s.removeLabel}
                                    title={"remove label"}
                                    onClick={()=>handlerRemoveLabel(itemLabel)}
                                >
                                    <span></span>
                                    <span></span>
                                </button>
                                    </span>
                                : null
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default AllCard;