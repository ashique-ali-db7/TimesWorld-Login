import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Google from "../../assets/icons/google";
import Facebook from "../../assets/icons/facebook";
import Github from "../../assets/icons/github";
import Linkedin from "../../assets/icons/linkidin";
import loginImage from '../assets/images/login.png';
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (!email) {
      return "Email is required";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return "Invalid email format";
    }

    if (!password) {
      return "Password is required";
    }

    const passwordPattern =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
      return "Password must be 8+ chars, with 1 uppercase, 1 number & 1 special character.";
    }

    return null;
  };

  const signInHandler = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setErrors(validationError);
      return;
    }
    setErrors("");
    navigate("/home");
  };

  return (
    <Container fluid className="custom-container">
      <Row className="vh-100">
        <Col
          md={6}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className={styles.child}>
            <div className="text-center text-md-start ">
              <h3 className="mb-3 fw-bold text-xl">Sign In</h3>
              <p className="text-base fw-bold">
                New user?
                <a
                  href="#"
                  className={`text-decoration-none ms-1 fw-semibold ${styles.link}`}
                >
                  Create an account
                </a>
              </p>
            </div>

            {errors && <Alert className="p-2" variant="danger">{errors}</Alert>}

            <Form onSubmit={signInHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Username or email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3 d-flex align-items-center">
                <Form.Check type="checkbox" label="Keep me signed in" />
              </Form.Group>

              <Button
                variant="dark"
                type="submit"
                className={`w-100 ${styles["h-48"]}`}
              >
                Sign In
              </Button>
            </Form>

            <div className="d-flex align-items-center my-3">
              <div className={`flex-grow-1 m-0 ${styles.bt}`} />
              <span className="px-3 fw-bold text-xs">Or Sign In With</span>
              <div className={`flex-grow-1 m-0 ${styles.bt}`} />
            </div>

            <div className="d-flex justify-content-between gap-3 mt-4 px-3">
              <Google />
              <Facebook />
              <Linkedin />
              <Github />
            </div>
          </div>
        </Col>

        <Col className="desktop-only d-md-flex justify-content-center align-items-center">
          <img src={loginImage} alt="img" />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
