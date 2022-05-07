import React from "react";
import { useState, useEffect } from "react";

import coursesMock from "../../lib/mock/courses";
import Header from "../../components/Header/Header";
import Landing from "../../components/Landing/Landing";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import CourseCard from "../../components/CourseCard/CourseCard";
// import Grid from "../../components/Grid/Grid";
import Testimonial from "../../components/Testimonial/Testimonial";

import { Grid } from "../../lib/style/generalStyle";

// import LectureImg1 from "../../assets/images/lecture-1.jpg";
// import LectureImg2 from "../../assets/images/lecture-2.jpg";
// import LectureImg3 from "../../assets/images/lecture-3.jpg";
// import LectureImg4 from "../../assets/images/lecture-4.jpg";

const Home = () => {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesMock);
    }, 1000);
  }, []);
  return (
    <>
      <Header />
      <Main>
        <section>
          <Landing />
        </section>
        <Section
          actionText={"Learn something new"}
          title={"Open new posibilities"}
          buttonText={"More courses"}
          buttonPath={"/Courses"}
        >
          {courses && (
            <Grid>
              {courses.map(
                (course, index) =>
                  index <= 3 && (
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

          {/* <Grid modifiers={["Grid"]}>
            <CourseCard
              imgSrc={LectureImg1}
              imgAlt={"Introduction"}
              title={"1. Introduction"}
              subtitle={"60 Minutes"}
            />
            <CourseCard
              imgSrc={LectureImg2}
              imgAlt={"HTML & CSS"}
              title={"2. HTML & CSS"}
              subtitle={"120+ Minutes"}
            />
            <CourseCard
              imgSrc={LectureImg3}
              imgAlt={"Version Control System"}
              title={"3. Version Control System"}
              subtitle={"120+ Minutes"}
            />
            <CourseCard
              imgSrc={LectureImg4}
              imgAlt={"Advanced CSS"}
              title={"4. Advanced CSS"}
              subtitle={"120+ Minutes"}
            />
          </Grid> */}
        </Section>
        <Section isHeadingVisible={"false"} modifiers={["testimonials"]}>
          <Testimonial />
        </Section>
      </Main>
    </>
  );
};

export default Home;
