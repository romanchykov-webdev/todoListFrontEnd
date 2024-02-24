import {createSlice} from "@reduxjs/toolkit";


const SectionFavoriteSliceReducer = createSlice({
    name: "favoriteSliceReducer",
    initialState: {
        toggle: false,
    },
    reducers: {
        isToggleVisibleFavorite(state) {
            state.toggle = !state.toggle
        }
    }
})

export default SectionFavoriteSliceReducer.reducer
export const {
    isToggleVisibleFavorite
} = SectionFavoriteSliceReducer.actions