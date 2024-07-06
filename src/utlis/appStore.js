
import { configureStore } from "@reduxjs/toolkit";
import savedSlice from "./savedSlice";
import darkModeSlice from "./darkModeSlice";



const appStore = configureStore({

    reducer: {
        save: savedSlice,
        darkmode: darkModeSlice,
    }
}
)

export default appStore