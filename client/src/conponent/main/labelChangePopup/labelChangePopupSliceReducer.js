import {createSlice} from "@reduxjs/toolkit";


const labelChangePopupSliceReducer = createSlice({
    name: "labelChangePopup",
    initialState: {
        item:[],
        id:0,
        labels:[],
        labelsAllCards:[],
        isActive: false
    }, reducers: {
        labelsAllCardsAction(state,action){
            // debugger
            // console.log('debugger labelsAllCardsAction')
            const labelsAll=action.payload
          state.labelsAllCards=labelsAll
        },
        labelTogglePopupAction(state,action) {
            const item =action.payload

            // debugger
                if(item.id==='new'){
                    state.isActive = !state.isActive
                    state.id=item.id
                }else{
                    state.isActive = !state.isActive
                    state.id=item.id
                    state.labels=item.label
                    state.item=item
                }
        },addLabelAction(state,action){
            const label=action.payload
            state.labels.push(label)
        },
        removeLabelAction(state,action){
            const label=action.payload
            state.labels=state.labels.filter(item=>item!==label)
        }
    }
})

export default labelChangePopupSliceReducer.reducer
export const {
    labelsAllCardsAction,
    labelTogglePopupAction,
    addLabelAction,
    removeLabelAction
} = labelChangePopupSliceReducer.actions