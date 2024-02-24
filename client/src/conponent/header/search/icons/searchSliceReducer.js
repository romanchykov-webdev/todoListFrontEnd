import {createSlice} from "@reduxjs/toolkit";


const searchSliceReducer = createSlice({
    name: "search",
    initialState: {
        isActive: false,
    },
    reducers: {
        searchAction(state) {
            state.isActive = !state.isActive
        }
    }
})

export default searchSliceReducer.reducer
export const {
    searchAction,
} = searchSliceReducer.actions