import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"
import themeReducer from "../features/theme/themeSlice"

const rootReducer = combineReducers({
    todoReducer,
    themeReducer
})

export default rootReducer;