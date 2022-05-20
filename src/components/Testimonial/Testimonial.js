import React from "react";

import TestimonialImg from "../../assets/images/testimonial.jpg";
import {
  Testimonial as TestimonialWrapper,
  TestimonialContent,
  TestimonialFigure,
  TestimonialImag,
  TestimonialQuotation,
  TestimonialText,
} from "./TestimonialsStyle";

const Testimonial = () => {
  return (
    <TestimonialWrapper>
      <TestimonialFigure>
        <TestimonialImag
          src={TestimonialImg}
          alt="Testimonialka"
          className="Testimonial-Img"
        />
      </TestimonialFigure>
      <TestimonialContent>
        <TestimonialText>
          <TestimonialQuotation>"</TestimonialQuotation>
          At the academy, I learned how to apply technology in practice.
          Frontend education was demanding, it required a lot of time. Upon
          completion, I got my first job as a developer.
          <TestimonialQuotation>"</TestimonialQuotation>
        </TestimonialText>
      </TestimonialContent>
    </TestimonialWrapper>
  );
};

export default Testimonial;
