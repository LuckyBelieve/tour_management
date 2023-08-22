import React from "react";
import TourCard from "../../shared/TourCard";
import { Col } from "reactstrap";
import useFetch from "../../hooks/useFetch";
import { baseUrl } from "../../utils/config";
const FeaturedTourList = () => {
  const { data: featuredTours,isLoading,error } = useFetch(`${baseUrl}/tours/featured`);
  return (
    <>
    {
      isLoading && <h4>Loading...</h4>
    }
     {
      error && <h4>{error}</h4>
    }
      {!isLoading && !error && featuredTours.map((featuredTour) => (
        <Col lg="3" className="mb-4" key={featuredTour.id}>
          <TourCard tour={featuredTour} />
        </Col>
      ))}
    </>
  );
};

export default FeaturedTourList;
