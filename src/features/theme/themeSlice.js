import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    themeMode: "dark",
}

// reducer 
export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        lightTheme: (state, action) => {
            // we will get the themeMode in the payload
            state.themeMode = "light"
        },
        darkTheme: (state, action) => {
            // we will get the themeMode in the payload
            state.themeMode = "dark"
        }
    }
})

export const { lightTheme, darkTheme } = themeSlice.actions
export default themeSlice.reducer;
