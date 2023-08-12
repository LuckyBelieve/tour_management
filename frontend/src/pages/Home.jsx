import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../shared/Subtitle";

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
                  <span className="hightlight"> memories </span>
                </h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ducimus totam, quaerat dolor obcaecati omnis, alias
                  consectetur, magnam blanditiis officia unde hic aliquam qui
                  placeat et debitis quia sequi. Ipsa fugiat maxime dolor
                  accusantium asperiores, fuga reiciendis nam ullam officia
                  laudantium.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
