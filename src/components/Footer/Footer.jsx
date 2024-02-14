import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
const quick_Links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];
const quick_Links2 = [
  {
    path: "/gallery",
    display: "Gallery",
  },
  {
    path: "/login",
    display: "Login",
  },
  {
    path: "/register",
    display: "Register",
  },
];
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src="/images/logo.png" alt="logo_image" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
                molestiae.
              </p>
              <div className="social_Links d-flex align-items-center gap-3">
                <span>
                  <Link to={"#"}>
                    <i className="ri-youtube-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to={"#"}>
                    <i className="ri-github-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to={"#"}>
                    <i className="ri-facebook-fill"></i>
                  </Link>
                </span>
                <span>
                  <Link to={"#"}>
                    <i className="ri-instagram-line"></i>
                  </Link>
                </span>
                <span>
                  <Link to={"#"}>
                    <i className="ri-threads-fill"></i>
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer_links_title">Discover</h5>
            <ListGroup className="footer_quick_links">
              {quick_Links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer_links_title">quick Links</h5>
            <ListGroup className="footer_quick_links">
              {quick_Links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer_links_title">Contact us</h5>
            <ListGroup className="footer_quick_links">
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  Address:
                </h6>
                <p className="mb-0">Sylhet, Bangladesh</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  Email:
                </h6>
                <p className="mb-0">luckybelieve10@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  Phone:
                </h6>
                <p className="mb-0">0782307064</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="12" className="text-center pt-5">
            <p className="copyright">
              Copyright {year},developed by Lucky Believe. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
