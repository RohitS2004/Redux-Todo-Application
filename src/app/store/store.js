import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../../features/index";

// configure a store
export const store = configureStore({
    reducer: rootReducer
})