import React, {useEffect, useState} from 'react';
import s from './Main.module.scss'
import NewCard from "./newCard/NewCard";
import SectionAllCard from "./sectionAllCard/SectionAllCard";
import SectionFavorite from "./sectionFavorite/sectionFavorite";
import {getColorsPalette, getTodos} from "../../actions/todos";
import {useDispatch, useSelector} from "react-redux";
import {labelsAllCardsAction} from "./labelChangePopup/labelChangePopupSliceReducer";
import {auth} from "../../actions/user";

const Main = () => {
    const dispatch=useDispatch()
    // get color palette
    // useEffect(()=>{
    //     dispatch(getColorsPalette())
    // },[dispatch])
    // get color palette
    // get all todos

    useEffect(()=>{
        // dispatch(getTodos())
        dispatch(auth())
    },[dispatch])

    // get all todos
    const [todos,setTodos]=useState([])

    const gTodos=useSelector(state => state.getSlice.getTodos)

    useEffect(() => {
        setTodos(gTodos)

    }, [dispatch,gTodos]);



    const isFavorite =todos.filter(item=>item.isFavorite===true)
    // console.log(isFavorite)

// ?labels get
//     const todos=useSelector(state => state.getSlice.getTodos)
    const uniqueLabels = new Set();
    todos.forEach(item => {
        // Check if item.label is an array before iterating
        if (Array.isArray(item.label)) {
            item.label.forEach(label => {
                if (label !== 'all') {
                    uniqueLabels.add(label);
                }
            });
        }
    });
    const uniqueLabelsArray = Array.from(uniqueLabels);

    if(Object.keys(todos).length>0){
        dispatch(labelsAllCardsAction(uniqueLabelsArray))
    }
    // console.log(uniqueLabelsArray);

// ?labels get


    return (
        <main className={s.main}>
            <div className={"container"}>

                <NewCard/>
                <SectionFavorite isFavorite={isFavorite}/>
                <SectionAllCard todos={todos}/>

            </div>
        </main>
    );
};

export default Main;