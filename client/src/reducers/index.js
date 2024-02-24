import {combineReducers, configureStore} from "@reduxjs/toolkit";
import burgerSliceReducer from "../conponent/header/burger/burgerSliceReducer";
import searchSliceReducer from "../conponent/header/search/icons/searchSliceReducer";
import tilesSliceReducer from "../conponent/header/tile/tilesSliceReducer";
import newCardSliceReducer from "../conponent/main/newCard/newCardSliceReducer";
import listSliceReducer from "../conponent/main/newCard/list/listSliceReducer";
import labelChangePopupSliceReducer from "../conponent/main/labelChangePopup/labelChangePopupSliceReducer";
import getSliceReducer from "./getSliceReducer";
import HeaderIconsSliceReducer from "../conponent/headerIcons/HeaderIconsSliceReducer";
import DragAndDrop from "../conponent/main/sectionAllCard/card/dragAndDrop";
import NavSliceReducer from "../conponent/header/nav/NavSliceReducer";
import SectionFavoriteSliceReducer from "../conponent/main/sectionFavorite/sectionFavoriteSliceReducer";
import userSliceReducer from "../conponent/authRegis/userSliceReducer";
import todoSliceReducer from "../conponent/authRegis/todoSliceReducer";


const rootReducer=combineReducers({
    getSlice:getSliceReducer,
    burgerSlice:burgerSliceReducer,
    searchSlice: searchSliceReducer,
    tilesSlice:tilesSliceReducer,
    newCardSlice: newCardSliceReducer,
    listSlice:listSliceReducer,
    labelPopupSlice: labelChangePopupSliceReducer,
    isBigCard:HeaderIconsSliceReducer,
    navSlice:NavSliceReducer,
    favoriteSlice:SectionFavoriteSliceReducer,
    userSlice:userSliceReducer,
    todoSlice:todoSliceReducer
})

export const store=configureStore({
    reducer: rootReducer
})