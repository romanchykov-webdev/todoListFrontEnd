import {createSlice} from "@reduxjs/toolkit";


const HeaderIconsSliceReducer = createSlice({
    name: "HeaderIconsSlice",
    initialState: {
        isBigCard: [],
        isBigCardId:'',
        isActive: false,
    },
    reducers: {
        isBigCardAction(state, action) {

            const cardActive = action.payload
            state.isActive = !state.isActive
            state.isBigCard = cardActive
            state.isBigCardId = cardActive.id
        }
    }
})

export default HeaderIconsSliceReducer.reducer
export const {
    isBigCardAction
} = HeaderIconsSliceReducer.actions