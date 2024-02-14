import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/thankyou.css";
const ThankYou = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mt-5 text-center">
            <div className="thank_you">
              <span>
                <i class="ri-checkbox-circle-line"></i>
              </span>
              <h1 className="mb-3 fw-semibold">Thank you!</h1>
              <h3 className="mb-4">your tour is booked</h3>
              <Button className="btn primary__btn w-25">
                <Link to={"/home"}>Back to Home</Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ThankYou;
