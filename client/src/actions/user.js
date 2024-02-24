import axios from "axios";
import {API_URLMongo} from "../config";
import { isAuthUserAction} from "../conponent/authRegis/userSliceReducer";
import {getColorsPaletteAction, getTodosAction} from "../reducers/getSliceReducer";


// registration
export const registration = async (email, password) => {
    try {
        const response = await axios.post(`${API_URLMongo}api/auth/registration`, {
            email,
            password
        })
        alert(response.data.message)

    } catch (e) {
        alert(e.response.data.message)
    }
}

//LogIn
export const login = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${API_URLMongo}api/auth/login`, {
                email,
                password
            })
            dispatch(isAuthUserAction(response.data.user))
            localStorage.setItem('token',response.data.token)
            // console.log(response.data)

        } catch (e) {
            alert(e.response.data.message)
        }
    }

}

//isAuth

export const auth = () => {
    return async dispatch => {
        try {

            const response =await axios.get(`${API_URLMongo}api/auth/auth`, {
                headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
            })
            dispatch(isAuthUserAction(response.data.user))
            dispatch(getTodosAction(response.data.user.todos))
            dispatch(getColorsPaletteAction(response.data.user.colorsPalette))
            localStorage.setItem('token',response.data.token)

            // console.log(response.data)

        } catch (e) {
            // alert(e?.response?.data.message)
            console.log(e?.response?.data.message)
            // localStorage.removeItem('token')
        }
    }

}



// Добавление todo
export const addTodo = (newTodo) => {
    // debugger
    return async (dispatch) => {
        try {

            const response = await axios.post(
                `${API_URLMongo}api/auth/add-todo`,
                { newTodo },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );

            dispatch(auth());


            console.log(response.data.message);
        } catch (e) {
            alert(e.response.data.message);
        }
    };
};


// Добавление PATCH

export const updateTodo = (newTodo) => {
    return async (dispatch) => {
        try {
            // console.log(newTodo);

            await axios.post(
                `${API_URLMongo}api/auth/update-todo`,
                { newTodo },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            dispatch(auth());
            // alert(response.data.message);
        } catch (error) {
                alert(`error: ${error.response.data.message}`);
        }
    };
};


export const deleteTodo = (todoId) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(
                `${API_URLMongo}api/auth/delete-todo/${todoId}`, // Переместите todoId в URL
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );

            dispatch(auth());

            if (response?.data) {
                console.error(response.data.message);
            } else {
                console.error('Ответ от сервера не содержит ожидаемых данных');
            }
        } catch (error) {
            alert(`Ошибка: ${error.response?.data?.message || 'Не удалось выполнить запрос'}`);
        }
    };
};

// avatar
export const addAvatar = (file) => {
    return async (dispatch) => {
        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await axios.post(
                `${API_URLMongo}api/auth/avatar`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );

            dispatch(auth());

            console.log(response?.data?.message);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    };
};


export const deleteAvatar = () => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(
                `${API_URLMongo}api/auth/avatar`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );

            dispatch(auth());

            console.log(response?.data?.message);
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    };
};