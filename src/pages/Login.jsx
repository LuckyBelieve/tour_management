import React, { useState, useContext } from "react";
import "../styles/login.css";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Button,
  Input,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { baseUrl } from "../utils/config";
const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const handlChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleCLick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const result = await res.json();
      if (!res.ok) alert(result.message);
      dispatch({ type: "LOGIN_SUCCESS", payload: result.data });
      console.log(result.data);
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILED", payload: error.message });
      alert(error.message);
    }
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login_container d-flex justify-content-between">
              <div className="login_img">
                <img src="/images/login.png" alt="login_image" />
              </div>
              <div className="login_form">
                <div className="user">
                  <img src="/images/user.png" alt="user_image" />
                </div>
                <h2>Login</h2>
                <Form onSubmit={handleCLick}>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="email"
                      required
                      id="email"
                      onChange={handlChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="password"
                      required
                      id="password"
                      onChange={handlChange}
                    />
                  </FormGroup>
                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                  >
                    Login
                  </Button>
                </Form>
                <p>
                  Don't have an account!? <Link to={"/register"}>Create</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
