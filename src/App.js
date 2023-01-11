import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from './components/Login'
import Signup from './components/Signup'

const App = () => {
  return (
    <>
      <NoteState>
        <Router>
          <NavBar />
          <Alert message="This is amazing react course."/>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
};

export default App;

// 69 video 4:40