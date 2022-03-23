import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getQuestions } from "../../redux/actions/questionAction";
import Loader from "../Loading/Loader";
import AddQuestionForm from "./Questions/AddQuestion";
import Question from "./Questions/Question";
import EditIcon from "@mui/icons-material/Edit";
import "./teacherHome.css";
import Modal from "../Modal/Modal";
import EditProfileNameForm from "./Profile/EditProfileName";
import EditProfileEmailForm from "./Profile/EditProfileEmail";

const TeacherHome = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const [addQuestionModalToggle, setAddQuestionModalToggle] = useState(false);
  const [editName, seteditName] = useState(false);
  const [editEmail, seteditEmail] = useState(false);

  // const user = useSelector((state) => state.user);
  const questions = useSelector((state) => state.questions);

  // useEffect
  useEffect(() => {
    console.log(questions);
  }, [questions]);

  useEffect(async () => {
    await dispatch(getQuestions());
  }, []);

  return (
    <>
      <div className="flex justify-center items-start">
        {questions.loading ? (
          <Loader />
        ) : (
          <div className="slowLoad flex flex-col w-4/6">
            {!questions.loading &&
              questions?.questions?.questions?.map((item) => {
                return <Question question={item} key={item._id} />;
              })}
          </div>
        )}

        <div className={`w-2/6 sticky top-20 right-0 mx-2 flex flex-col`}>
          <div className="bg-white border-2 shadow-sm my-2 p-3 rounded-md">
            <h2 className="text-center text-2xl font-semibold">My Profile</h2>
            <div className="text-left my-2 text-md font-semibold italic">
              <div className="flex justify-between items-center">
                <div>Name: {user.user?.user?.name}</div>
                <div
                  className="cursor-pointer font-normal"
                  onClick={() => seteditName(!editName)}
                >
                  <EditIcon />
                </div>
              </div>
            </div>
            <div className="text-left my-2 text-md italic text-gray-500">
              <div className="flex justify-between items-center">
                <div>Email: {user.user?.user?.email}</div>
                <div
                  className="cursor-pointer font-normal"
                  onClick={() => seteditEmail(!editEmail)}
                >
                  <EditIcon />
                </div>
              </div>
            </div>
            <div className="text-left my-2 text-md italic text-gray-500">
              Role: {user.user?.user?.role}
            </div>
          </div>
          <div className="bg-white border-2 shadow-sm my-2 p-3 rounded-md">
            <h2 className="text-center text-2xl font-semibold">Exam Details</h2>
            <div className="text-left my-2 text-md font-semibold italic">
              No of Questions:{" "}
              <span className="italic font-normal">
                {!questions.loading && questions?.questions?.questions.length}
              </span>
            </div>
            <button
              onClick={() => setAddQuestionModalToggle(!addQuestionModalToggle)}
              className="bg-blue-300 hover:bg-blue-500 my-2 mx-2 px-4 py-2 rounded-md cursor-pointer"
            >
              Add Question
            </button>

            <button className="bg-blue-300 hover:bg-blue-500 my-2 mx-2 px-4 py-2 rounded-md">
              <Link to="editProfile">Start Exam</Link>
            </button>
          </div>
        </div>

        {/* Modals */}
        {addQuestionModalToggle && (
          <Modal
            Form={
              <AddQuestionForm
                // question={props.question}
                toggle={() =>
                  setAddQuestionModalToggle(!addQuestionModalToggle)
                }
              />
            }
            toggle={() => setAddQuestionModalToggle(!addQuestionModalToggle)}
          />
        )}

        {editName && (
          <Modal
            Form={<EditProfileNameForm toggle={() => seteditName(!editName)} />}
            toggle={() => seteditName(!editName)}
          />
        )}

        {editEmail && (
          <Modal
            Form={
              <EditProfileEmailForm toggle={() => seteditEmail(!editEmail)} />
            }
            toggle={() => seteditEmail(!editEmail)}
          />
        )}
      </div>
    </>
  );
};

export default TeacherHome;
