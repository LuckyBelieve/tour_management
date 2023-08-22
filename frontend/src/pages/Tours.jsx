import React, { useEffect, useState } from "react";
import CommonSection from "../shared/CommonSection";
import "../styles/tour.css";
import TourCard from "../shared/TourCard";
import SearchBar from "../shared/SearchBar";
import NewsLatter from "../shared/NewsLatter";
import { Col, Container, Row } from "reactstrap";
import useFetch from "../hooks/useFetch";
import { baseUrl } from "../utils/config";
const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const {
    data: tours,
    isLoading,
    error,
  } = useFetch(`${baseUrl}/tours/allTour?page=${page}`);
  const { data: tourCount } = useFetch(`${baseUrl}/tours/tourcount`);
  useEffect(() => {
    const pages = Math.ceil(tourCount / 8);
    setPageCount(pages);
    window.scrollTo(0,0)
  }, [page, tourCount,tours]);
  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          {isLoading && <h4 className="text-center pt-5"> Loading ...</h4>}
          {error && <h4 className="text-center pt-5"> {error}</h4>}
          {!isLoading && !error && (
            <Row>
              {tours.map((tour) => (
                <Col lg="3" key={tour._id} className="mb-4">
                  <TourCard tour={tour} />
                </Col>
              ))}
              <Col lg="12">
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? "active__page" : ""}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <NewsLatter />
    </>
  );
};

export default Tours;
