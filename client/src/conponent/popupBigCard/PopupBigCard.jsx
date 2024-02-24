import React from 'react';
// import s from './PopupBigCard.module.scss'
import   './PopupBigCard.scss'
import AllCard from "../main/sectionAllCard/card/AllCard";
import {useSelector} from "react-redux";
const PopupBigCard = () => {

    // const item=useSelector(state=>state.isBigCard.isBigCard)
    const itemId=useSelector(state=>state.isBigCard.isBigCard.id)
    const allItems=useSelector(state=>state.getSlice.getTodos)
    const item=allItems.find(i=>i.id===itemId)



    return (
        <div className={"wrapperBigCard"}

        >
            <AllCard item={item}/>
        </div>



);
};



export default PopupBigCard;