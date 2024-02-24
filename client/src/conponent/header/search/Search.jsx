import React, {useEffect, useState} from 'react';
import s from './Search.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {searchAction} from "./icons/searchSliceReducer";
import { addSearchInput} from "../nav/NavSliceReducer";
import {burgerAction} from "../burger/burgerSliceReducer";


const Search = () => {

    const dispatch = useDispatch()
    const isActiveNav=useSelector(state => state.burgerSlice.isActive)

    const isActive = useSelector(state => state.searchSlice.isActive)
    const todos = useSelector(state => state.getSlice.getTodos)



    const [input, setInput] = useState('')


    function handlerSearch(e) {
        setInput(e.target.value)
        dispatch(addSearchInput(e.target.value))

        const searchTodo = todos.filter(item => {
            // Check if item.title includes the search value
            return item.title.toLowerCase().includes(e.target.value.toLowerCase());
        });
        // console.log(searchTodo)

        // dispatch(addLabelSearch(e.target.value))
    }

    const toggleActiveSearch=()=> {
        dispatch(searchAction())
        if(isActiveNav){
            // console.log('burger true')
            dispatch(burgerAction())
        }
        setInput('')
        dispatch(addSearchInput(''))
    }

    return (
        <div className={s.search}>

            <div className={isActive ? `${s.inputSearch} ${s.active}` : `${s.inputSearch}` }>
                <input type="text"
                       value={input}
                       onChange={(e) => handlerSearch(e)}
                />
            </div>
            <div className={s.iconSearch}
                 onClick={toggleActiveSearch}
            >
                {
                    isActive
                        ?  <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M21 21L15.8033 15.8033M7.5 10.5H13.5M15.8033 15.8033C17.1605 14.4461 18 12.5711 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C12.5711 18 14.4461 17.1605 15.8033 15.8033Z"
                                stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        : <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M15.8053 15.8013L21 21M10.5 7.5V13.5M7.5 10.5H13.5M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                                stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                }


            </div>
        </div>
    );
};

export default Search;