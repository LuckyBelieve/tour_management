import React, { useRef } from "react";
import "./searchbar.css";
import { Col, Form, FormGroup } from "reactstrap";
import { baseUrl } from "../utils/config";
import {useNavigate } from "react-router-dom";
const SearchBar = () => {
  const navigate = useNavigate();
  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);

  const searchHandler = async () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === "" || distance === 0 || maxGroupSize === 0) {
      return alert("all fields are required");
    }
    const res = await fetch(
      `${baseUrl}/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
    );
    if (!res.ok) alert("something is wrong");
    const result = await res.json();
    navigate(`/tour/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,{state:result.data})
  };
  return (
    <Col lg="12">
      <div className="search__bar">
        <Form className="d-flex align-items-center">
          <FormGroup className="d-flex gap-3 form-group form-group-fast">
            <span>
              <i class="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>location</h6>
              <input
                type="text"
                placeholder="where are you going"
                ref={locationRef}
              />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form-group form-group-fast">
            <span>
              <i class="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Distance</h6>
              <input type="text" placeholder="Distance k/m" ref={distanceRef} />
            </div>
          </FormGroup>
          <FormGroup className="d-flex gap-3 form-group form-group-fast">
            <span>
              <i class="ri-group-line"></i>
            </span>
            <div>
              <h6>max people</h6>
              <input type="number" placeholder="0" ref={maxGroupSizeRef} />
            </div>
          </FormGroup>
          <span className="search__icon" type="submit" onClick={searchHandler}>
            <i class="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
