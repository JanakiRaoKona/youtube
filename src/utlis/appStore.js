
import { configureStore } from "@reduxjs/toolkit";
import savedSlice from "./savedSlice";



const appStore = configureStore({

    reducer: {
        save: savedSlice,
    }
}
)

export default appStore