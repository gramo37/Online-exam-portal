import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import image from "./logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, clearState } from "../../redux/actions/userAction";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

const Navbar = (props) => {
  const [showOptions, setshowOptions] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogoutClicked, setIsLogoutClicked] = useState(false)
  const alert = useAlert();
  const user = useSelector((state) => state.user);

 // UseEffect for displaying logout message
  useEffect(async () => {
    console.log(user)
    if (user.error !== "" && user.error !== undefined && isLogoutClicked)  {
        alert.error("Sorry, Something went wrong")
        console.log("Error while logging out.", user.error);
    } else if(user.user !== "" && user.user !== undefined && isLogoutClicked) {
        alert.success(user.user.message);
        await dispatch(clearState())
    } 
  }, [user])

  useEffect(async ()=>{
    console.log(user)
    if(!isLogoutClicked && user.error !== "" && user.error !== undefined) {
      alert.error(user.error.message);
      // await dispatch(clearState());
      navigate("/")
    }
  }, [user])

  const logout = async () => {
    setIsLogoutClicked(true);
    await dispatch(logoutUser());
    await dispatch(clearState());
    navigate("/");
  };

  return (
    <>
      <nav className="sticky top-0 right-0 flex justify-around items-center bg-white shadow-md">
        <Link to="/">
          <div className="w-20 cursor-pointer">
            <img src={image} alt="" />
          </div>
        </Link>
        <div>
          <ul className="flex">
            <li
              className={`mx-1 cursor-pointer hover:bg-gray-300 px-4 py-2 rounded-md ${
                props.active === "home" ? "border-b-2 border-blue-400" : false
              }`}
            >
              <Link to="/home">Home</Link>
            </li>
            <li
              className={`mx-1 cursor-pointer hover:bg-gray-300 px-4 py-2 rounded-md ${
                props.active === "about" ? "border-b-2 border-blue-400" : false
              }`}
            >
              <Link to="/about">About</Link>
            </li>
            <li
              className={`mx-1 cursor-pointer hover:bg-gray-300 px-4 py-2 rounded-md ${
                props.active === "contact" ? "border-b-2 border-blue-400" : false
              }`}
            >
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="cursor-pointer flex justify-center items-center">
          <Avatar sx={{ bgcolor: deepOrange[500] }}>{user.user?.user?.name.substring(0, 1)}</Avatar>
          <div
            className=""
            onClick={() => {
              setshowOptions(!showOptions);
            }}
          >
            <ArrowDropDownIcon />
          </div>
        <div
          className={`${
            showOptions ? "z-10 translate-y-16" : "-z-10 -translate-y-40"
          } transition-all -translate-x-2 absolute top-0 bg-white px-2 py-4 shadow-lg border-2 rounded-md`}
        >
          <ul>
            <li className="hover:bg-gray-300 px-2 py-3 cursor-pointer rounded-md">
              Change Password
            </li>
            <li
              onClick={() => logout()}
              className="hover:bg-gray-300 px-2 py-3 cursor-pointer rounded-md"
            >
              Log Out
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
