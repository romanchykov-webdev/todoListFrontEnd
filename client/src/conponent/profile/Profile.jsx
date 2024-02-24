import React, {useRef, useState} from 'react';
import  s from './Profile.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {API_URLMongo} from "../../config";
import defaultAvatar from "../header/img/avatar.svg";
import {addAvatar, deleteAvatar} from "../../actions/user";
import {Link} from "react-router-dom";


const Profile = () => {

    const user = useSelector(state => state.userSlice.currentUser)

    const avatar = user.avatar ? `${API_URLMongo+user.avatar}` : defaultAvatar
const dispatch=useDispatch()

    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

// Измененная функция handleFileChange
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // console.log('Selected file:', file);
            dispatch(addAvatar(file));
        }
    };

    const removeAvatar = () => {
        dispatch(deleteAvatar())
    };

    return (
        <div className={"container"}>
            <button className={s.home}>
                <Link to={'/'}>Home</Link>
            </button>
            <div className={s.wrapperProfile}>

                <div className={s.blockAvatar}>
                    <div className={s.nikName}>
                       nikName: <span>{user.email}</span>
                    </div>
                    <div  className={s.avatar}>
                        <img src={avatar} alt="avatar"/>
                    </div>
                    <div className={s.blockButtons}>

                            <input
                                type="file"
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                            />
                            <button className="button" onClick={handleButtonClick}>
                                Add Avatar
                            </button>


                        <button
                        onClick={removeAvatar}
                        >Remove Avatar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;