import React from "react";
import "./newsLatter.css";
import { Col, Container, Row } from "reactstrap";
const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newslater_content">
              <h2>Subscribe now to get useful Traveling information.</h2>
              <div className="newsletter_input">
                <input type="email" placeholder="Enter your email" />
                <button className="btn newsletter_btn">Subscribe</button>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                velit temporibus vel quo aperiam libero expedita, nulla id
                suscipit
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter_img">
                <img src="/images/male-tourist.png" alt="male tourist" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
