import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice(
    {
        name: "darkmode",
        initialState: {
            mode: false,
            like: false,
        },
        reducers: {
            activeDarkMode: (state, action) => {
                return action.payload;
            },
            likeAction: (state, action) => {
                return action.payload;
            },


        }
    }
)

export const { activeDarkMode, toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer