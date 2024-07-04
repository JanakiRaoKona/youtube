import { createSlice } from "@reduxjs/toolkit";

const savedSlice = createSlice(
    {
        name: "save",
        initialState: {
            items: [],
        },
        reducers: {
            addedItems: (state, action) => {
                state.items.push(action.payload)

            },

        }
    }
)

export const { addedItems } = savedSlice.actions;

export default savedSlice.reducer