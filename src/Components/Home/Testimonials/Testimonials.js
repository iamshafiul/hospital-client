import React from "react";
import "./Testimonials.css";
import testimonial1 from "../../../images/testimonial1.png";
import testimonial2 from "../../../images/testimonial2.png";
import testimonial3 from "../../../images/testimonial1.png";
import TestimonialInfo from "../TestimonialsInfo/TestimonialInfo";

const Testimonials = () => {
  const testimonialData = [
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In ab nulla temporibus similique asperiores quibusdam quasi sunt maxime modi quae?",
      name: "Wilson John",
      from: "California",
      img: testimonial1,
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In ab nulla temporibus similique asperiores quibusdam quasi sunt maxime modi quae?",
      name: "Ema Gomez",
      from: "California",
      img: testimonial2,
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In ab nulla temporibus similique asperiores quibusdam quasi sunt maxime modi quae?",
      name: "Aliza Farari",
      from: "California",
      img: testimonial3,
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center">
          <h2>What's Our Patients Says</h2>
        </div>
        <div className="row mt-5">
          {testimonialData.map((testimonial) => (
            <TestimonialInfo testimonial={testimonial}></TestimonialInfo>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
