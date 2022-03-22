// const {createStore} = require("react-redux")
// import {createStore} from "redux";

import {configureStore} from "@reduxjs/toolkit";
import { createUserReducer, OTPReducer, userReducer, verificationLinkReducer } from "./redux/reducers/userReducer";
import {questionReducers, questionFunctionReducers} from "./redux/reducers/questionReducer"

const store = configureStore({
    reducer: {
        user: userReducer,
        signInDetails: createUserReducer,
        otp: OTPReducer,
        linkStatus: verificationLinkReducer,

        questions: questionReducers,
        questionsFunction: questionFunctionReducers
    }
});

// const store = configureStore()

export default store;