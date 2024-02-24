import React, {useRef, useState} from 'react';
import s from './Textarea.module.scss'
import {changeTextareaTempValueAction, newCardShowAction, textareaAction} from "../newCardSliceReducer";
import {useDispatch} from "react-redux";


const Textarea = ({mainTextarea={},setMainTextarea={} ,textareaHeight={},setTextareaHeight={}}) => {
    const dispatch = useDispatch()

    const textareaRef = useRef(null);
    // const [text, setText] = useState('');
    // const [textareaHeight, setTextareaHeight] = useState('auto');

// console.log(mainTextarea.length)
//     if(mainTextarea.length===0){
//         console.log("mainTextarea.length ==== 0")
//         // setTextareaHeight(0)
//     }

    const handlerTextareaChange = (e) => {
        setMainTextarea(e.target.value)
        dispatch(changeTextareaTempValueAction(e.target.value))
        // setText(event.target.value);

        adjustTextareaHeight();

    };

    const adjustTextareaHeight = () => {
        const textareaLineHeight = 24; // высотa строки textarea
        const minRows = 2;
        const maxRows = 1000; // Максимальное количество строк

        const currentRows = Math.floor(textareaRef.current.scrollHeight / textareaLineHeight);
        const rows = Math.min(maxRows, Math.max(minRows, currentRows));

        setTextareaHeight(`${rows * textareaLineHeight}px`);

    };



    const  textareaHandler=()=> {
        dispatch(newCardShowAction());
        dispatch(textareaAction())
    }

    return (
        <textarea className={s.textarea} name="" id="" rows="1"

                  placeholder={"Label ..."}
                  ref={textareaRef}
                  style={{ height: textareaHeight }}
                  // value={text}
                  value={mainTextarea}
                  onChange={handlerTextareaChange}
                  onClick={()=>textareaHandler()}
        ></textarea>
    );
};

export default Textarea;