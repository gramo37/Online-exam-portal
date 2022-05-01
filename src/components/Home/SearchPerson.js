import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import SearchIcon from "@mui/icons-material/Search";
import { addRemoveStudent, searchStudent } from "../../redux/actions/schoolAction";
import { loadUser } from "../../redux/actions/userAction";
import { Link } from "react-router-dom";

const SearchPerson = (props) => {

  const [keyword, setKeyword] = useState("")
  const dispatch = useDispatch()
  const school = useSelector((state) => state.school)
  const user = useSelector((state) => state.user);
  const message = useSelector((state)=>state.addStudent);

  useEffect(async () => {
    console.log(school, keyword)
    console.log(user)
    console.log(message)
    await dispatch(searchStudent(keyword))
  }, [keyword, message])

  return (
    <>
      <div className="flex justify-center items-center mx-2 mt-2 p-3 rounded-md bg-white border-2 shadow-sm">
        <div className="w-[10%] flex justify-center">
          <SearchIcon />
        </div>
        <div className="w-[90%]">
          <input
            type="text"
            className="px-4 py-2 rounded-md w-full bg-gray-200"
            placeholder={`Search ${props.searchFor}`}
            value={keyword}
            onChange={(e) => { setKeyword(e.target.value) }}
          />
        </div>
      </div>
      {/* Suggestions box */}
      <div
        className={`${((keyword.length >= 6) ? "relative" : "hidden")
          } mx-2 p-3 rounded-md bg-white border-2 shadow-sm`}
      >
        <ul className="">
          {school?.student?.students?.map((item) => {
            return (
              <li className="flex justify-between items-center p-2 font-bold cursor-pointer rounded-md transition-all hover:bg-gray-200">
                <Link to={`/student/${item._id}`}>
                <div>
                  <div>
                    {item?.name}
                  </div>
                  <div className="italic font-thin">
                    {item?.email}
                  </div>
                </div>
                </Link>
              </li>
            )
          })}


        </ul>
      </div>
    </>
  );
};

export default SearchPerson;
