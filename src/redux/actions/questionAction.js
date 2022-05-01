import axios from "axios";

export const getQuestions = () => async (dispatch) => {
  try {
    dispatch({
      type: "RequireGetQuestions",
    });

    const link = `/api/v1/getAllQuestions`;
    const { data } = await axios.get(link);

    dispatch({
      type: "GetQuestionsSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "GetQuestionsFailure",
      payload: error.response.data,
    });
  }
};

export const createQuestion =
  (question, options, answer) => async (dispatch) => {
    try {
      dispatch({
        type: "RequireCreateQuestion",
      });
      const link = `/api/v1/createQuestion`;
      const { data } = await axios.post(
        link,
        {
          question,
          options,
          answer,
        },
        {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        }
      );

      dispatch({
        type: "CreateQuestionSuccess",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "CreateQuestionFailure",
        payload: error.response.data,
      });
    }
  };

export const editQuestion =
  (id, question, options, answer) => async (dispatch) => {
    try {
      dispatch({
        type: "RequireEditQuestion",
      });
      const link = `/api/v1/updateQuestion/${id}`;
      const { data } = await axios.post(
        link,
        {
          question,
          options,
          answer,
        },
        {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        }
      );

      dispatch({
        type: "EditQuestionSuccess",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "EditQuestionFailure",
        payload: error.response.data,
      });
    }
  };

export const deleteQuestion = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "RequireDeleteQuestion",
    });
    const link = `/api/v1/deleteQuestion/${id}`;
    const { data } = await axios.delete(link, {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    });

    dispatch({
      type: "DeleteQuestionSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "DeleteQuestionFailure",
      payload: error.response.data,
    });
  }
};

export const deleteOption = (index, id) => async (dispatch) => {
  try {
    dispatch({
      type: "RequireDeleteOption",
    });

    const { data } = await axios.post(
      `api/v1/deleteOption/${id}`,
      { index: index }
    );
    console.log(data);

    dispatch({
      type: "DeleteOptionSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "DeleteOptionFailure",
      payload: error.response.data,
    });
  }
};

export const clearOption = () => async (dispatch) => {
  dispatch({
    type: "ClearDeleteOption",
  });
}
