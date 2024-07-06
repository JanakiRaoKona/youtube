
import { configureStore } from "@reduxjs/toolkit";
import savedSlice from "./savedSlice";
import darkModeSlice from "./darkModeSlice";
import likeUnlike from "./likeUnlike";



const appStore = configureStore({

    reducer: {
        save: savedSlice,
        darkmode: darkModeSlice,
        likeunlike: likeUnlike
    }
}
)

export default appStore