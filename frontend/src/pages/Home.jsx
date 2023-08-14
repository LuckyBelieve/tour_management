import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src="/images/world.png" alt="welcome image" />
                </div>
                <h1>
                  Traveling opens the door to creating{" "}
                  <span className="highlight"> memories </span>
                </h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ducimus totam, quaerat dolor obcaecati omnis, alias
                  consectetur, magnam blanditiis officia unde hic aliquam qui
                  placeat et debitis quia sequi.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src="/images/hero-img01.jpg" alt="image" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src="/images/hero-video.mp4" alt="video" controls/>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src="/images/hero-img02.jpg" alt="image" />
              </div>
            </Col>
            <SearchBar/>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
