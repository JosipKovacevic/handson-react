import React from "react";

import Section from "../../components/Section/Section";
import CourseCard from "../../components/CourseCard/CourseCard";

import Header from "../../components/Header/Header";
import CourseText from "../../components/CourseText/CourseText";

import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import coursesMock from "../../lib/mock/courses";

const Course = () => {
  const { id } = useParams();
  const [courses, setCourses] = useState(null);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    setCourses(coursesMock);
  }, []);

  useEffect(() => {
    courses &&
      setCourse(...courses.filter((course) => course.id === parseInt(id)));
  }, [courses, id]);

  // const handleButtonClick = () => {};
  return (
    <>
      <Header isSecondary={true} />
      {course && (
        <Section
          title={course.title}
          actionText={course.subtitle}
          buttonText={"Back"}
          buttonPath={-1}
        >
          <CourseCard
            imgSrc={course.imgSrc}
            imgAlt={course.imgAlt}
            title={course.title}
            subtitle={course.subtitle}
          />
          <CourseText text={course.text} />
        </Section>
      )}
    </>
  );
};

export default Course;
