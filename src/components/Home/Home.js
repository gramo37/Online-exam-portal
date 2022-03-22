import React from 'react'
import Navbar from '../Navbar/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import TeacherHome from './TeacherHome';
import StudentHome from './StudentHome';

const Home = (props) => {

  const user = useSelector((state) => state.user);

  return (
    <>
      <Navbar active="home"/>
      {user.user?.user?.role === "teacher" && <TeacherHome />}
      {user.user?.user?.role === "student" && <StudentHome />}
    </>
  )
}

export default Home;

// Navbar options Frontend
// Media query
// Delete Option 
// Reduce no of options