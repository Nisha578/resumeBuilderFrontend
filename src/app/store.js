import {configureStore} from "@reduxjs/toolkit"
import authReducer from './features/authSlice.js'

export const store = configureStore({
    reducer : {
        auth: authReducer
    }
})

//  we have created the state that will manage our authentication using redux state management