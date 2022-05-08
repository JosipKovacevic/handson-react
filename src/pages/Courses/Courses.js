import React from "react";

import { useState, useEffect } from "react";
import coursesMock from "../../lib/mock/courses";
import Header from "../../components/Header/Header";
import Landing from "../../components/Landing/Landing";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import CourseCard from "../../components/CourseCard/CourseCard";
import Testimonial from "../../components/Testimonial/Testimonial";

import { Grid } from "../../lib/style/generalStyle";
import { SearchBar } from "../../components/SearchBar/SearchBarStyle";

//SearchBar preuzet kod PedroTech
const Courses = () => {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesMock);
    }, 1000);
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Header isSecondary={true} isActive={true} />
      <Main>
        <Section
          isSearchbar={true}
          actionText={"Learn something new"}
          title={"Open new posibilities"}
        >
          <SearchBar
            type="text"
            placeholder="Search..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          ></SearchBar>

          {courses && (
            <Grid>
              {courses
                .filter((courses) => {
                  if (searchTerm == "") {
                    return courses;
                  } else if (
                    courses.title
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return courses;
                  }
                })
                .map(
                  (course, index) =>
                    index <= 7 && (
                      <CourseCard
                        key={course.id}
                        courseId={course.id}
                        imgSrc={course.imgSrc}
                        imgAlt={course.imgAlt}
                        title={course.title}
                        subtitle={course.subtitle}
                      />
                    )
                )}
            </Grid>
          )}
        </Section>
      </Main>
    </>
  );
};

export default Courses;
