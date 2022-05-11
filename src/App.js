import "./App.scss";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import React from "react";

import Courses from "./pages/Courses/Courses";
import Course from "./pages/Course/Course";
import Register from "./pages/Register/Register";
import SignIn from "./pages/SignIn/SignIn";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Course/:id" element={<Course />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
