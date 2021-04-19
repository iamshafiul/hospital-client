import React from "react";

const TestimonialInfo = ({ testimonial }) => {
  return (
    <div className="col-md-4 col-sm-12 mb-4">
      <div class="card p-5">
        <p>{testimonial.quote}</p>
        <div className="d-flex mt-3">
          <img src={testimonial.img} alt="testimonial" className="img-fluid me-2" />
          <div className="testimonial-content">
            <h4>{testimonial.name}</h4>
            <h6>{testimonial.from}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialInfo;
