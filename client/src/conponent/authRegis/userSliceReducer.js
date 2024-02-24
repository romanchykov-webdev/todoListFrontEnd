import {createSlice} from "@reduxjs/toolkit";


const userSliceReducer=createSlice({
    name:"userSliceReducer",
    initialState:{
        currentUser:{},
        isAuth:false,
        isVisiblePassword:false

    },
    reducers:{
        toggleIsVisiblePasswordAction(state){
            state.isVisiblePassword=!state.isVisiblePassword
        },
        isAuthUserAction(state,action){
            const user=action.payload
            state.currentUser=user
            state.isAuth=true
        },
        logOutAction(state){
            localStorage.removeItem('token')
            state.isAuth=false
            state.currentUser={}
            state.isAuth=false
        }
    }
})

export default userSliceReducer.reducer
export const {
    toggleIsVisiblePasswordAction,
    isAuthUserAction,
    logOutAction
}=userSliceReducer.actions