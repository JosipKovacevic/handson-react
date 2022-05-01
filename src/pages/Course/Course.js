import React from "react";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import CourseCard from "../../components/CourseCard/CourseCard";
import Grid from "../../components/Grid/Grid";
import "./Course.scss";
import Header from "../../components/Header/Header";
import CourseText from "../../components/CourseText/CourseText";
import LectureImg1 from "../../assets/images/lecture-1.jpg";

const Course = () => {
  return (
    <>
      <Header modifiers={["headerCourses"]} />
      <Main>
        <Section
          actionText={"Learn something new"}
          title={"Open new posibilities"}
          buttonText={"Back"}
          buttonPath={-1}
        >
          <Grid modifiers={["gridOne"]}>
            <CourseCard
              imgSrc={LectureImg1}
              imgAlt={"Introduction"}
              title={"1. Introduction"}
              subtitle={"60 Minutes"}
            />
            <CourseText
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum bibendum velit, nec ultricies ante aliquam nec.Pellentesque elit massa, rutrum ac dapibus non, pharetra eget dolor. Aliquam erat volutpat. Fusce interdum nibh mi, vel accumsan lectus commodo quis. Etiam sagittis vel metus a vehicula. Nunc tincidunt sodales dui non pulvinar. In hac habitasse platea  dictumst. Pellentesque imperdiet nisl quis consequat gravida. Morbi facilisis eleifend consectetur. Praesent at enim sed velit commodo euismod fermentum pulvinar felis. Nullam sit amet  fringilla dolor, non fringilla lacus. Mauris rhoncus a eros non iaculis. Phasellus interdum ultrices nisi id efficitur. Nullam malesuada commodo dolor. Suspendisse et vulputate libero. Phasellus tincidunt metus id nunc condimentum, et elementum enim accumsan. Praesent condimentum urna sapien, ultrices sagittis neque efficitur non. Quisque sagittis convallis lectus, id lobortis massa. Morbi ac posuere velit. Mauris rhoncus, sem nec  interdum vehicula, arcu nibh ultrices risus, sed pellentesque enim libero eget nisi."
              }
            />
          </Grid>
        </Section>
      </Main>
    </>
  );
};

export default Course;
