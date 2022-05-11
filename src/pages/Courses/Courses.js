import React from "react";

import { useState, useEffect } from "react";
import coursesMock from "../../lib/mock/courses";
import Header from "../../components/Header/Header";

import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import CourseCard from "../../components/CourseCard/CourseCard";

import { Grid } from "../../lib/style/generalStyle";
import { SearchBar } from "../../components/SearchBar/SearchBarStyle";
import Loading from "../../components/Loading/Loading";

//SearchBar preuzet kod PedroTech
const Courses = () => {
  const [isLoading, setSsLoading] = useState(true);
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setSsLoading(false);
      setCourses(coursesMock);
    }, 1000);
  }, []);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Header isSecondary={true} isActive={true} />
      <Main>
        <Section title={"All courses"}>
          {isLoading == true ? (
            <>
              <SearchBar
                type="text"
                placeholder="Search..."
                disabled
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              ></SearchBar>
              <Loading />
            </>
          ) : (
            <>
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
            </>
          )}
        </Section>
      </Main>
    </>
  );
};

export default Courses;
