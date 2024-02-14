import React, { useState } from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
const Booking = ({ tour, avgRating }) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    userId: "01",
    userEmail: "example@gmail.com",
    fullname: "",
    phone: "",
    guestSize: "",
    bookAt: "",
  });
  const { price, reviews } = tour;
  const handlChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleCLick = (e) => {
    e.preventDefault();
    navigate("/thank-you");
  };
  const serviceFee = 10;
  const TotalAmount =
    Number(price) * Number(credentials?.guestSize) + Number(serviceFee);
  return (
    <div className="booking">
      <div className="booking_top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>per person</span>
        </h3>
        <span className="tour_rating d-flex align-items-center gap-1">
          <i class="ri-star-fill"></i>
          {avgRating === 0 ? null : avgRating}({reviews?.length})
        </span>
      </div>
      {/* booking form */}
      <div className="booking_form">
        <h5>Information</h5>
        <Form className="booking_info-form" onSubmit={handleCLick}>
          <FormGroup>
            <input
              type="text"
              placeholder="full name"
              required
              id="fullname"
              onChange={handlChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="phone"
              required
              id="phone"
              onChange={handlChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input type="date" required id="bookAt" onChange={handlChange} />
            <input
              type="number"
              placeholder="Guests"
              required
              id="guestSize"
              onChange={handlChange}
            />
          </FormGroup>
        </Form>
      </div>
      <div className="booking_bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5>
              ${price} <i className="ri-close-line"></i> per person
            </h5>
            <span>{price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>service charge</h5>
            <span>${serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>$ {TotalAmount}</span>
          </ListGroupItem>
        </ListGroup>
        <Button className="btn primary__btn w-100 mt-4" onClick={handleCLick}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default Booking;
