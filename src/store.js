// const {createStore} = require("react-redux")
// import {createStore} from "redux";

import {configureStore} from "@reduxjs/toolkit";
import { createUserReducer, OTPReducer, userReducer, verificationLinkReducer } from "./redux/reducers/userReducer";

const store = configureStore({
    reducer: {
        user: userReducer,
        signInDetails: createUserReducer,
        otp: OTPReducer,
        linkStatus: verificationLinkReducer
    }
});

// const store = configureStore()

export default store;