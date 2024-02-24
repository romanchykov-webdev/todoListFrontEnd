import React, {useEffect, useState} from 'react';
import './sectionAllCard.scss'

import AllCard from "./card/AllCard";
import {useDispatch, useSelector} from "react-redux";
import {dragAndDropAction} from "../../../reducers/getSliceReducer";


const SectionAllCard = ({todos}) => {

    const dispatch = useDispatch()
    // ?get all card
    const toggleTiles = useSelector(state => state.tilesSlice.toggleTiles)

    const searchFilterLabel = useSelector(state => state.navSlice.labelSearch)
    const searchFilterInput = useSelector(state => state.navSlice.searchInput)
    // console.log(searchFilterLabel)
    const isActiveNaw=useSelector(store=>store.burgerSlice.isActive)
    const isActiveSearch=useSelector(store=>store.searchSlice.isActive)


      let  searchTodo = todos.filter(item => {
            return item.label.some(i => i === searchFilterLabel);
        });
    if(isActiveSearch && searchFilterInput!==''){
        // console.log(searchFilterInput)
       searchTodo = todos.filter(item => {
            // Check if item.title includes the search value
            return item.title.toLowerCase().includes(searchFilterInput.toLowerCase());
        });
    }
        // console.log(searchTodo)


    return (
        <section className={"allCard"} key={'sectionAllCard'}>
            <div className={toggleTiles === "tiles" ? "wrapperTiles" : "wrapperList"} key={toggleTiles}>

                {
                    searchTodo.map(item => (
                        <AllCard key={item.id} item={item}

                        />
                    ))
                }

            </div>

        </section>
    );
};


export default SectionAllCard;