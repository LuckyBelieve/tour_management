import React from "react";
import "../styles/tourDetails.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import TourData from "../assets/data/tours";
import calculateAvgRating from "../utils/avgRating";

const TourDetails = () => {
  const { id } = useParams();
  const tour = TourData.find((tour) => tour.id === id);
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
  const { totalRating, avgRating } = calculateAvgRating(reviews);
  const options = { day: "numeric", month: "long", year: "numeric" };
  return (
    <>
      <section>
        <Container>
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
                  <Form>
                    <div className="d-flex align-items-center gap-3 mb-4 rating_group">
                      <span>
                        <i class="ri-star-s-fill"></i>
                      </span>
                      <span>
                        <i class="ri-star-s-fill"></i>
                      </span>
                      <span>
                        <i class="ri-star-s-fill"></i>
                      </span>
                      <span>
                        <i class="ri-star-s-fill"></i>
                      </span>
                      <span>
                        <i class="ri-star-s-fill"></i>
                      </span>
                    </div>
                    <div className="reviews_input">
                      <input type="text" placeholder="share your thoughts" />
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
                      <div className="review_item">
                        <img src="/images/avatar.jpg" alt="reviewer_image" />
                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>Lucky</h5>
                              <p>
                                {new Date("05-18-2023").toLocaleDateString(
                                  "en-US",
                                  options
                                )}
                              </p>
                            </div>
                            <span className="d-flex align-items-center">
                              5<i class="ri-star-s-fill"></i>
                            </span>
                          </div>
                          <h6>amazing tour</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TourDetails;
