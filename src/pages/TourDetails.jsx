import React, { useEffect, useRef, useState, useContext } from "react";
import "../styles/tourDetails.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";
import Booking from "../components/Booking/Booking";
import Newsletter from "../shared/NewsLatter";
import useFetch from "../hooks/useFetch";
import { baseUrl } from "../utils/config";
import { AuthContext } from "../context/authContext";
const TourDetails = () => {
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const {
    data: tour,
    isLoading,
    error,
  } = useFetch(`${baseUrl}/tours/tour/${id}`);
  console.log(tour);
  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    distance,
    maxGroupSize,
    address,
  } = tour;
  const finalReviews = reviews ? reviews : [];
  const { totalRating, avgRating } = calculateAvgRating(finalReviews);
  const options = { day: "numeric", month: "long", year: "numeric" };

  // submitting the review
  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
    try {
      if (!user || user === undefined || user === null) {
        alert("please sign in first");
      }
      const reviewObj = {
        username: user.username,
        reviewText,
        rating: tourRating,
      };
      const res = await fetch(`${baseUrl}/review/create/${id}`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });
      const result = await res.json();
      if (!res.ok) alert(result.message);
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section>
        <Container>
          {isLoading && <h4 className="text-center pt-5">Loading...</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!isLoading && !error && tour && (
            <Row>
              <Col lg="8">
                <div className="tour_content">
                  <img src={photo} alt="tour_image" />
                  <div className="tour_info">
                    <h2>{title}</h2>
                    <div className="d-flex align-items-center gap-3">
                      <span className="tour_rating d-flex align-items-center gap-1">
                        <i
                          class="ri-star-fill"
                          style={{ color: "var(--secondary-color)" }}
                        ></i>
                        {avgRating === 0 ? null : avgRating}
                        {totalRating === 0 ? (
                          "Not rated"
                        ) : (
                          <span>({reviews?.length})</span>
                        )}
                      </span>
                      <span>
                        <i class="ri-map-pin-user-fill"></i>
                        {address}
                      </span>
                    </div>
                    <div className="tour_extra-details">
                      <span>
                        <i class="ri-map-pin-2-line"></i>
                        {city}
                      </span>
                      <span>
                        <i class="ri-map-pin-time-line"></i>
                        {distance} k/m
                      </span>
                      <span>
                        <i class="ri-money-dollar-circle-line"></i>$ {price} per
                        person
                      </span>
                      <span>
                        <i class="ri-group-line"></i>
                        {maxGroupSize} people
                      </span>
                    </div>
                    <h5>Description</h5>
                    <p>{desc}</p>
                  </div>
                  {/* tour review section */}
                  <div className="tour_review mt-4">
                    <h4>Reviews({reviews?.length} reviews)</h4>
                    <Form onSubmit={submitHandler}>
                      <div className="d-flex align-items-center gap-3 mb-4 rating_group">
                        <span onClick={() => setTourRating(1)}>
                          1<i class="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(2)}>
                          2<i className="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(3)}>
                          3<i className="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(4)}>
                          4<i className="ri-star-s-fill"></i>
                        </span>
                        <span onClick={() => setTourRating(5)}>
                          5<i className="ri-star-s-fill"></i>
                        </span>
                      </div>
                      <div className="reviews_input">
                        <input
                          type="text"
                          ref={reviewMsgRef}
                          placeholder="share your thoughts"
                          required
                        />
                        <button
                          className="btn primary__btn text-white"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </Form>
                    <ListGroup className="user_reviews">
                      {reviews?.map((review, index) => (
                        <div className="review_item" key={index}>
                          <img src="/images/avatar.jpg" alt="reviewer_image" />
                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>{review.username}</h5>
                                <p>
                                  {new Date("05-18-2023").toLocaleDateString(
                                    "en-US",
                                    options
                                  )}
                                </p>
                              </div>
                              <span className="d-flex align-items-center">
                                {review.rating}
                                <i class="ri-star-s-fill"></i>
                              </span>
                            </div>
                            <h6>{review.reviewText}</h6>
                          </div>
                        </div>
                      ))}
                    </ListGroup>
                  </div>
                </div>
              </Col>
              <Col lg="4">
                <Booking tour={tour} avgRating={avgRating} />
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default TourDetails;
