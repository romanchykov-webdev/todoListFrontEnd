import {createSlice} from "@reduxjs/toolkit";


const tilesSliceReducer = createSlice({
    name: "tiles",
    initialState: {
        toggleTiles: 'tiles'
    },
    reducers: {
        tilesToggleAction(state, action) {
            const {toggle} = action.payload
            // debugger
            state.toggleTiles = toggle
        }
    }
})

export default tilesSliceReducer.reducer;
export const {
    tilesToggleAction,
} = tilesSliceReducer.actions