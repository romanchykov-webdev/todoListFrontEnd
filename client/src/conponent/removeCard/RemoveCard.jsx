import React from 'react';
import s from './RemoveCard.module.scss'
import {useDispatch} from "react-redux";
// import {removeCard} from "../../actions/todos";
import {deleteTodo, updateTodo} from "../../actions/user";
import {removeTodo} from "../../reducers/getSliceReducer"

const RemoveCard = ({id}) => {

    const dispatch=useDispatch()

    const handlerRemoveCard= (id)=> {
        console.log(id)
        // dispatch(removeCard(id))
        // dispatch(deleteTodo(id))
        dispatch(removeTodo(id))
    }

    return (
        <div className={s.removeCard}
        onClick={()=>handlerRemoveCard(id)}
        >
            <svg width="24px" height="24px" viewBox="0 0 16 16" >
                <path fill="#000000" fillRule="evenodd" d="M5,2 C5,0.895431 5.89543,0 7,0 L9,0 C10.1046,0 11,0.895431 11,2 L11,3 L14,3 C14.5523,3 15,3.44772 15,4 C15,4.55228 14.5523,5 14,5 L13.8462,5 L13.142,14.1534 C13.0619,15.1954 12.193,16 11.1479,16 L4.85206,16 C3.80699,16 2.93811,15.1954 2.85795,14.1534 L2.15385,5 L2,5 C1.44772,5 1,4.55228 1,4 C1,3.44772 1.44772,3 2,3 L5,3 L5,2 Z M7,3 L9,3 L9,2 L7,2 L7,3 Z M4.15975,5 L4.85206,14 L11.1479,14 L11.8402,5 L4.15975,5 Z"/>
            </svg>
        </div>

    );
};

export default RemoveCard;