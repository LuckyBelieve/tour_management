import React from "react";

const TestimonialComponent = ({ image, name, functions }) => {
  return (
    <div className="testimonials py-4 px-3">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam ipsam
        nam vitae facere, ea illo nisi assumenda minus expedita velit, porro
        iusto consequatur cumque nihil molestias quia perspiciatis vel pariatur.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, cumque.
      </p>
      <div className="d-flex align-items-center gap-4 mt-3">
        <img
          src={image}
          className="w-25 h-25 rounded-2"
          alt="testimonialImage"
        />
        <div>
          <h5 className="mb-0 mt-3">{name}</h5>
          <p>{functions}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
