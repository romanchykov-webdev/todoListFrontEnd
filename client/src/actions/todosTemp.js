import {API_URL, API_URLMongo} from "../config";
import axios from "axios";
import {getColorsPaletteAction, getTodosAction} from "../reducers/getSliceReducer";


let oldTodos = []

export function getTodos() {

    // return async dispatch => {
    //     try {
    //         // debugger
    //         // const response = await axios.get(API_URL,{params:{_page:0,_limit: 1000}})
    //         const response = await axios.get(`${API_URL}boards`, {params: {_page: 0, _limit: 1000}})
    //         // , { headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
    //
    //         dispatch(getTodosAction(response.data))
    //         oldTodos = [...response.data]
    //         // console.log('getTodos')
    //     } catch (e) {
    //         alert(e.response.data.message)
    //     }
    //
    // }
    return async dispatch => {
        try {
            // debugger
            const response =await axios.get(`${API_URLMongo}auth/todos`, {
                headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(getTodosAction(response.data))
            oldTodos = [...response.data]
            // console.log('getTodos')
        } catch (e) {
            alert(e.response.data.message)
        }

    }
}

// get colors palette
export function getColorsPalette() {
    return async dispatch => {
        try {
            const response = await axios.get(`${API_URL}colorsPalette`);
            dispatch(getColorsPaletteAction(response.data))
            // console.log(response.data);
            console.log('rerender getColorsPalette')
        } catch (error) {
            console.error('Error fetching colors palette:', error);

        }
    };
}


// get colors palette


// export function postTodos(newItem) {
//
//     return async dispatch => {
//         try {
//             // debugger
//             // const response = await axios.get(API_URL,{params:{_page:0,_limit: 1000}})
//             // const response = await axios.post(`${API_URL}boards`,
//             await axios.post(`${API_URL}boards`,
//                 {...newItem}
//             )
//             // , { headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
//             dispatch(getTodos())
//             // debugger
//             console.log('rerender postTodos')
//         } catch (e) {
//             alert(e.response.data.message)
//         }
//
//     }
//
// }
export function postTodos(newItem) {
    return async (dispatch) => {
        try {
            debugger
           await axios.post(
                `${API_URLMongo}auth/todos`,
                newItem,  // Send newItem as the request body for a POST request
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );

            dispatch(getTodos());
            console.log('rerender postTodos');
        } catch (e) {
            alert(e.response.data.message);
        }
    };
}





// putTodos
export function putTodos({idItem, newCard}) {
// debugger
    return async dispatch => {
        try {
            // dispatch(putTodos({ id: idItem, newItem: newCard }));
            // await axios.put(`http://localhost:5000/boards/${idItem}`, newCard);
            await axios.put(`${API_URL}boards/${idItem}`, newCard);

            console.log('rerender put todos')
            dispatch(getTodos())
        } catch (e) {
            alert(e.response.data.message)
        }

    }

}

export function removeCard(id) {
// debugger
    return async dispatch => {
        try {

            // await axios.delete(`http://localhost:5000/boards/${id}`);
            await axios.delete(`${API_URL}boards/${id}`);

            console.log('rerender removeCard')
            dispatch(getTodos())
        } catch (e) {
            alert(e.response.data.message)
        }

    }

}



