import Header from "./conponent/header/Header";
import Main from "./conponent/main/Main";
import LabelChangePopup from "./conponent/main/labelChangePopup/LabelChangePopup";
import {useDispatch, useSelector} from "react-redux";
import PopupBigCard from "./conponent/popupBigCard/PopupBigCard";
import { Route, Routes} from "react-router-dom";

import Error404 from "./conponent/authRegis/Error404";
import Login from "./conponent/authRegis/Login";
import Registration from "./conponent/authRegis/Registration";
import {useEffect, useLayoutEffect} from "react";
import {auth} from "./actions/user";
import Footer from "./conponent/footer/Footer";
import Profile from "./conponent/profile/Profile";

function App() {

    const dispatch=useDispatch()

    const isActiveLabelPopup = useSelector(state => state.labelPopupSlice.isActive)
    const isActiveCardBig = useSelector(state => state.isBigCard.isActive)
    const isAuth = useSelector(state => state.userSlice.isAuth)

    useEffect(() => {
        dispatch(auth())
    }, []);


    return (
        <div className="App">
            <Header/>
        <Routes>

                <Route path="/" element={
                    <>
                        {isActiveLabelPopup && <LabelChangePopup/>}
                        {isActiveCardBig && <PopupBigCard/>}
                        <Main/>
                    </>
                }/>
                <Route path="/profile" element={
                    <Profile/>
                }/>


            <Route path="/*" element={<Error404/>}/>
        </Routes>
            <Footer/>
        </div>
    );
}

export default App;


