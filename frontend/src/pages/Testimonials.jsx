import React from "react";
import Slider from "react-slick";
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="testimonials py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          maxime sunt culpa autem commodi officiis incidunt accusantium eaque.
          Fuga recusandae officia vel totam fugiat perferendis, doloremque
          voluptatum itaque eum adipisci.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img
            src="/images/ava-1.jpg"
            className="w-25 h-25 rounded-2"
            alt="testimonialImage"
          />
          <div>
            <h5 className="mb-0 mt-3">John Doe</h5>
            <p>customer</p>
          </div>
        </div>
      </div>
      <div className="testimonials py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          maxime sunt culpa autem commodi officiis incidunt accusantium eaque.
          Fuga recusandae officia vel totam fugiat perferendis, doloremque
          voluptatum itaque eum adipisci.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img
            src="/images/ava-3.jpg"
            className="w-25 h-25 rounded-2"
            alt="testimonialImage"
          />
          <div>
            <h5 className="mb-0 mt-3">philipe Halper</h5>
            <p>customer</p>
          </div>
        </div>
      </div>
      <div className="testimonials py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          maxime sunt culpa autem commodi officiis incidunt accusantium eaque.
          Fuga recusandae officia vel totam fugiat perferendis, doloremque
          voluptatum itaque eum adipisci.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img
            src="/images/ava-2.jpg"
            className="w-25 h-25 rounded-2"
            alt="testimonialImage"
          />
          <div>
            <h5 className="mb-0 mt-3">lia mendoza</h5>
            <p>customer</p>
          </div>
        </div>
      </div>
      <div className="testimonials py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          maxime sunt culpa autem commodi officiis incidunt accusantium eaque.
          Fuga recusandae officia vel totam fugiat perferendis, doloremque
          voluptatum itaque eum adipisci.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img
            src="/images/ava-3.jpg"
            className="w-25 h-25 rounded-2"
            alt="testimonialImage"
          />
          <div>
            <h5 className="mb-0 mt-3">philipe Halper</h5>
            <p>customer</p>
          </div>
        </div>
      </div>
      <div className="testimonials py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          maxime sunt culpa autem commodi officiis incidunt accusantium eaque.
          Fuga recusandae officia vel totam fugiat perferendis, doloremque
          voluptatum itaque eum adipisci.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img
            src="/images/ava-1.jpg"
            className="w-25 h-25 rounded-2"
            alt="testimonialImage"
          />
          <div>
            <h5 className="mb-0 mt-3">John Doe</h5>
            <p>customer</p>
          </div>
        </div>
      </div>
      <div className="testimonials py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          maxime sunt culpa autem commodi officiis incidunt accusantium eaque.
          Fuga recusandae officia vel totam fugiat perferendis, doloremque
          voluptatum itaque eum adipisci.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img
            src="/images/ava-3.jpg"
            className="w-25 h-25 rounded-2"
            alt="testimonialImage"
          />
          <div>
            <h5 className="mb-0 mt-3">philipe Halper</h5>
            <p>customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
