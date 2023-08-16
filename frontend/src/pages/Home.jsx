import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import Service from "../services/Service";
import FeaturedTourList from "../components/featured_tour/FeaturedTourList";
import MainGallery from "../components/image_gallery/mainGallery";
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
                  <img src="/images/world.png" alt="welcome_image" />
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
                <img src="/images/hero-img01.jpg" alt="_img" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src="/images/hero-video.mp4" alt="video" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src="/images/hero-img02.jpg" alt="_img" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* this is the second section */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="service__subtitle">what we serve</h5>
              <h2 className="service__title">we offer our best services</h2>
            </Col>
            <Service />
          </Row>
        </Container>
      </section>
      {/* this is the third section */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour_title">Our featured tours </h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* end of the other section and the starting of the new one */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience_content">
                <Subtitle subtitle={"Experience"}/>
                <h2>with all experience <br/> we will serve you</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  <br/>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                 <div className="counter_box">
                  <span>12k+</span>
                  <h6>successfull trip</h6>
                 </div>
                 <div className="counter_box">
                  <span>2k+</span>
                  <h6>regular clients</h6>
                 </div>
                 <div className="counter_box">
                  <span>15</span>
                  <h6>years experience</h6>
                 </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src="images/experience.png" alt="experience_image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* section end and the starting of the other section */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"}/>
              <h2 className="gallery_title">Visit our customers tour gallery</h2>
            </Col>
            <Col lg="12">
              <MainGallery/>
            </Col>
          </Row>
        </Container>
      </section>
      {/* the end of the section and the starting of the other section */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fan love"}/>
              <h2 className="testimonial_title">what our fans says about us</h2>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
