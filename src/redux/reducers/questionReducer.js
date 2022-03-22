import {createReducer} from "@reduxjs/toolkit";

export const questionReducers = createReducer({},{
    RequireGetQuestions: (state) => {
        state.loading= true
        state.questions=""
        state.error=""
    },
    GetQuestionsSuccess: (state, action) => {
        state.loading= false
        state.questions=action.payload
        state.error=""
    },
    GetQuestionsFailure: (state, action) => {
        state.loading= false
        state.questions=""
        state.error=action.payload
    },
    
})

export const questionFunctionReducers = createReducer({},{
    RequireCreateQuestion: (state) => {
        state.loading= true
        state.questions=""
        state.error=""
    },
    CreateQuestionSuccess: (state, action) => {
        state.loading= false
        state.questions=action.payload
        state.error=""
    },
    CreateQuestionFailure: (state, action) => {
        state.loading= false
        state.questions=""
        state.error=action.payload
    },
    RequireDeleteQuestion: (state) => {
        state.loading= true
        state.questions=""
        state.error=""
    },
    DeleteQuestionSuccess: (state, action) => {
        state.loading= false
        state.questions=action.payload
        state.error=""
    },
    DeleteQuestionFailure: (state, action) => {
        state.loading= false
        state.questions=""
        state.error=action.payload
    },
    RequireEditQuestion: (state) => {
        state.loading= true
        state.questions=""
        state.error=""
    },
    EditQuestionSuccess: (state, action) => {
        state.loading= false
        state.questions=action.payload
        state.error=""
    },
    EditQuestionFailure: (state, action) => {
        state.loading= false
        state.questions=""
        state.error=action.payload
    },
})

