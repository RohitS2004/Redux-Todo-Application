import { createSlice, nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState = {
    todos: []
}

// create a slice
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false,
            }
            state.todos.push(todo);
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id != action.payload);
        },
        toggleCompleted: (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo);
        },
        setLocalStore: (state, action) => {
            // in the action we will recieve a array object that we will set to the initialState of the todos
            console.log(action.payload);
            state.todos = action.payload
        }
    }
})

export const { addTodo, updateTodo, deleteTodo, toggleCompleted, setLocalStore } = todoSlice.actions

// export the reducer
export default todoSlice.reducer

