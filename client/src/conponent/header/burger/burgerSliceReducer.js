import {createSlice} from "@reduxjs/toolkit";


const burgerSliceReducer = createSlice({
    name: "burger",
    initialState: {
        isActive: false,
    },
    reducers: {
        burgerAction(store) {
            store.isActive = !store.isActive
        }
    }

})

export default burgerSliceReducer.reducer
export const {
    burgerAction,
} = burgerSliceReducer.actions