import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { loginUser, loadUser } from "../../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import LoadingBar from "react-top-loading-bar";

const Login = () => {

  const dispatch = useDispatch();
  const user = useSelector(state=>state.user);
  const alert = useAlert();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [isLoginClicked, setisLoginClicked] = useState(false)

  useEffect(() => {
    if(user.loading !==undefined && !user.loading && isLoginClicked) {
      if(!user.error !== undefined && user.error !== "") {
        alert.show(user.error.message)
      } else if (user.user !== undefined && user.user !== "" && user.user.success) {
        alert.success("Login Successful")
        navigate("/home")
      }
    }
    console.log(user, user.loading)
  }, [user])
  

  const [userCredentials, setuserCredentials] = useState({
    email: "",
    password: ""
  })

  // const demo = useSelector(state=>stae/)

  const [showPassword, setShowPassword] = useState(false);

  // const [loginIsClicked, setLoginIsClicked] = useState(false);

  const loginChangeHandler = (e) => {
    setuserCredentials({...userCredentials, [e.target.name]: e.target.value})
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    setProgress(40)
    setisLoginClicked(true)
    // Dispatch Login 
    await dispatch(loginUser(userCredentials.email, userCredentials.password));
    setProgress(100)
    console.log(userCredentials)
    // setLoginIsClicked(true)
  };

  return (
    <>
    <LoadingBar
        color="#2b7a2b"
        height={4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="flex justify-center items-center h-[100vh] w-full border-2">
          <div className="flex flex-col justify-center items-center border-2 h-full w-1/4 bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="flex flex-col justify-center items-center">
              <div className="text-2xl font-bold text-white">New User ?</div>
              <div className="text-center my-2 text-gray-300 italic">
                Register Yourself Now !
              </div>
              <div className="button">
                <Link to="/signup">
                  <button className="rounded-full border-2 px-4 py-2 text-white font-bold hover:bg-white hover:text-gray-400 my-4">
                    SIGN UP
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-stretch border-2 h-full w-3/4 bg-white">
            <div className="flex items-center justify-center flex-col my-12">
              <div className="text-4xl text-green-600 my-2">Welcome Back!</div>
              <div className="sub-heading my-2 text-lg text-gray-400 italic">
                Login with your Personal Information
              </div>
            </div>
            <form
              className="flex flex-col justify-center items-center"
              onChange={(e) => loginChangeHandler(e)}
              onSubmit={(e) => loginSubmit(e)}
            >
              <div className="flex items-center">
                <div className="absolute ml-2">
                  <EmailOutlinedIcon />
                </div>
                <input
                  style={{ width: "28rem" }}
                  className="bg-green-100 pl-12 py-3 my-2 rounded-md"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={userCredentials.email}
                />
              </div>

              <div className="flex items-center">
                <div className="absolute ml-2">
                  <LockOutlinedIcon />
                </div>
                <input
                  style={{ width: "28rem" }}
                  className="bg-green-100 pl-12 py-3 my-2 rounded-md"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={userCredentials.password}
                />
                <div
                  className="absolute translate-x-96 cursor-pointer"
                  onClick={() => {
                    setShowPassword(!showPassword)
                  }}
                >
                  {showPassword ? (
                    <VisibilityOutlinedIcon />
                  ) : (
                    <VisibilityOffOutlinedIcon />
                  )}
                </div>
              </div>
              <div className="flex">
                <Link to="/password/forgot" className="text-blue-400">
                  Forgot Password ?
                </Link>
              </div>
              <div>
                <button
                  type="submit"
                  className="rounded-full bg-green-500 py-3 px-16 mt-4 shadow-md text-white font-bold hover:bg-green-300"
                >
                  LOG IN
                </button>
              </div>
            </form>
          </div>
        </div>
    </>
  )
}

export default Login