import { createSlice } from "@reduxjs/toolkit";


const getSliceReducer = createSlice({
    name: 'get',
    initialState: {
        colorsPalette: [
            "#fff",
            "#faafa8",
            "#f39f76",
            "#fff8b8",
            "#e2f6d3",
            "#b4ddd3",
            "#efeff1",
            "#aeccdc",
            "#d3bfdb",
            "#f6e2dd",
            "#e9e3d4",
            "#e9e3d5"],
        getTodos: []
    },
    reducers: {
        addTodo(state, action) {
            state.getTodos = [...state.getTodos, action.payload];
        },
        removeTodo(state, action) {
            // debugger
            state.getTodos = state.getTodos.filter(item => item.id !== action.payload)
        },
        getTodosAction(state, action) {
            const todos = action.payload
            // debugger
            state.getTodos = todos
        },
        getColorsPaletteAction(state, action) {
            const colors = action.payload
            // debugger
            state.colorsPalette = colors
        },
        changeColorBackgroundAction(state, action) {
            const { id, color } = action.payload
            state.getTodos = state.getTodos.map(item => {
                if (item.id === id) {
                    item.color = color
                }
                return item
            })
        },
        favoriteToggleAction(state, action) {
            const id = action.payload

            state.getTodos = state.getTodos.map(item => {
                if (item.id === id) {
                    item.isFavorite = !item.isFavorite
                }

                return item
            })

        },
        bookmarkAddAction(state, action) {
            const { id, label } = action.payload
            // debugger
            state.getTodos = state.getTodos.map(item => {
                if (item.id === id) {
                    if (!item.label.includes(label)) {
                        // Add the label if it doesn't exist
                        item.label = [...item.label, label];

                    }
                }
                return item
            })
        },
        bookmarkRemoveAction(state, action) {
            const { id, label } = action.payload;
            // debugger
            state.getTodos = state.getTodos.map(item => {
                if (item.id === id) {
                    item.label = item.label.filter(itemLabel => itemLabel !== label);
                }
                return item; // Return the updated item
            });
        },
        expandCardToBigAction(state, action) {
            const id = action.payload
            // debugger
            state.getTodos = state.getTodos.map(item => {
                if (item.id === id) {
                    return { ...item, expandSizeCard: true }
                }
                return item
            })
        },
        expandCardToSmallAction(state, action) {
            const id = action.payload
            // debugger
            state.getTodos = state.getTodos.map(item => {
                if (item.id === id) {
                    return { ...item, expandSizeCard: false }
                }
                return item
            })
        },
        changeTextarea(state, action) {
            const { id, text } = action.payload
            // debugger
            state.getTodos = state.getTodos.map(item => {
                if (item.id === id) {
                    return { ...item, textareaCheckBox: text }
                }
                return item
            }
            )
        },
        dragAndDrop(state, action) {
            const item = action.payload
            // debugger
            state.getTodos = state.getTodos.map(i => {
                if (i.id === item.id) {
                    return { ...item, labelCheckBox: item.labelCheckBox }
                }
                return i
            })
        },
        removeCheckBox(state, action) {
            const { idCart, idItem } = action.payload
            // debugger
            state.getTodos = state.getTodos.map(item => {
                if (item.id === idCart) {
                    return {
                        ...item,
                        labelCheckBox: item.labelCheckBox.filter(i => i.id !== idItem)
                    }
                }
                return item
            }
            )
        },
        addCheckBox(state, action) {
            const { idCart, item } = action.payload
            // debugger
            state.getTodos = state.getTodos.map(i => {
                if (i.id === idCart) {
                    return {
                        ...i,
                        labelCheckBox: [ ...i.labelCheckBox, item ]
                    }
                }
                return i
            })

        }
    }
})

export default getSliceReducer.reducer
export const {
    addTodo,
    removeTodo,
    changeTextarea,
    dragAndDrop,
    removeCheckBox,
    addCheckBox,
    getTodosAction,
    getColorsPaletteAction,
    changeColorBackgroundAction,
    favoriteToggleAction,
    bookmarkAddAction,
    bookmarkRemoveAction,
    expandCardToBigAction,
    expandCardToSmallAction

} = getSliceReducer.actions