import axios from "axios"

export const searchStudent = (keyword) => async (dispatch) => {
    try {
        dispatch({
            type: "RequireGetStudents"
        })

        const link = `/api/v1/searchStudent?keyword=${keyword}`
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        }
        const { data } = await axios.post(link)
        dispatch({
            type: "GetStudentSuccess",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "GetStudentFail",
            payload: error.response.data
        })
    }
}

export const getStudentProfile = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "RequireGetStudents"
        })

        const link = `/api/v1/getStudentProfile/${id}`
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        }

        const { data } = await axios.get(link)

        dispatch({
            type: "GetStudentSuccess",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "GetStudentFail",
            payload: error.response.data
        })
    }
}

export const getMyStudents = () => async (dispatch) => {
    try {
        dispatch({
            type: "RequireGetStudents"
        })

        const link = `/api/v1/showStudents`

        const { data } = await axios.get(link)

        dispatch({
            type: "GetStudentSuccess",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "GetStudentFail",
            payload: error.response.data
        })
    }
}

export const addRemoveStudent = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "RequireAddStudents"
        })

        const link = `/api/v1/addStudent/${id}`
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        }
        const { data } = await axios.post(link)
        dispatch({
            type: "AddStudentSuccess",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "AddStudentFail",
            payload: error.response.data
        })
    }
}

export const getExam = () => async (dispatch) => {
    try {
        dispatch({
            type: "RequireGetExam"
        })

        const link = `/api/v1/getExams`
        const { data } = await axios.get(link)

        dispatch({
            type: "GetExamSuccess",
            payload: data
        })

    } catch (error) {
        dispatch({
            type: "GetExamFail",
            payload: error.response.data
        })
    }
}

export const getMyExam = () => async (dispatch) => {
    try {
        dispatch({
            type: "RequireMyExam"
        })
        const { data } = await axios.get('/api/v1/getMyExams')
        dispatch({
            type: "GetMyExamSuccess",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "GetMyExamFailure",
            payload: error.response.data
        })
    }
}

export const createExam = (startTimeHours, startTimeMin, endTimeHours, endTimeMin) => async (dispatch) => {
    try {
        dispatch({
            type: "RequireCreateExam"
        })
        const link = `/api/v1/createExam`
        const { data } = await axios.post(link, {
            endTimeHours,
            endTimeMin,
            startTimeHours,
            startTimeMin
        }, {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        })
        dispatch({
            type: "CreateExamSuccess",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "CreateExamFailure",
            payload: error.response.data
        })
    }
}

export const clearCreateExam = () => async (dispatch) => {
    dispatch({
        type: "clearCreateExam"
    })
}

export const takeExam = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "RequireTakeExam",
        })
        const link = `/api/v1/takeExam/${id}`
        const { data } = await axios.post(link, {

        }, {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        })

        dispatch({
            type: "TakeExamSuccess",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "TakeExamFailure",
            payload: error.response.data
        })
    }
}

export const sendAnswers = (answers, examId) => async (dispatch) => {
    try {
        dispatch({
            type: "RequireSendAnswers"
        })
        const link = `/api/v1/getAnswers/${examId}`
        const { data } = await axios.post(link, { answers }, {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        })
        dispatch({
            type: "SendAnswerSuccess",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "SendAnswerFailure",
            payload: error.response.data
        })
    }
}

export const calculateScore = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "RequireCalScore"
        })
        const link = `/api/v1/calculateScore/${id}`
        const { data } = await axios.post(link, {}, {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        })
        dispatch({
            type: "CalScoreSuccess",
            payload: data
        })
    } catch (error) {
        dispatch({
            type: "CalScoreFailure",
            payload: error.response.data
        })
    }
}