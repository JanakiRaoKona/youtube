import { createSlice } from "@reduxjs/toolkit";

const likeUnlike = createSlice(
    {
        name: "likeunlike",
        initialState: {
            like: false,
            unlike: false,
            saveLike: false,
        },
        reducers: {
            activelike: (state, action) => {
                state.like = action.payload;
            },
            activeUnlike: (state, action) => {
                state.unlike = action.payload;
            },
            savedButton: (state, action) => {
                state.saveLike = action.payload;
            },


        }
    }
)

export const { activelike, activeUnlike, savedButton } = likeUnlike.actions;

export default likeUnlike.reducer