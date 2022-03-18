import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate
} from "react-router-dom"
import Home from './components/Home/Home';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import VerifyOTP from './components/Auth/VerifyOTP';
import SendLink from './components/Auth/SendLink';
import VerifyLink from './components/Auth/VerifyLink';
import About from './components/About/About';
import {useDispatch } from "react-redux";
import { loadUser } from './redux/actions/userAction';
import Contact from './components/Contact/Contact';

function App() {

  const dispatch = useDispatch();

  // Loads user on refresh
  React.useEffect(async ()=>{
    await dispatch(loadUser());
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/verifyOTP" element={<VerifyOTP />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/password/forgot" element={<SendLink />} />
          <Route exact path="/api/v1/reset/password/:resetToken" element={<VerifyLink />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
