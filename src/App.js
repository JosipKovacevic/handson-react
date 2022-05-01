import "./App.scss";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import React from "react";

import Courses from "./pages/Courses/Courses";
import Course from "./pages/Course/Course";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Course" element={<Course />} />
      </Routes>
    </>
  );
}

export default App;
