import {createSlice} from "@reduxjs/toolkit";


const NavSliceReducer=createSlice({
    name:'navSlice',
    initialState:{
        labelSearch:'all',
        searchInput:''
    },reducers:{
        addLabelSearch(state,action){
            const search=action.payload
            state.labelSearch=search
        },
        addSearchInput(state,action){
            const search=action.payload
            state.searchInput= search
        },

    }
})
export default NavSliceReducer.reducer
export const {
    addLabelSearch,
    addSearchInput
}=NavSliceReducer.actions