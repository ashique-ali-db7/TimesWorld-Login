// // import { useState } from 'react'
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap'
// // import { useDispatch } from 'react-redux'
// // import { loginSuccess } from '../slices/authSlice'
import './login.css'

const PASS_RX = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/


const Login = () => {
  return (
    <Container fluid >
      <Row className="vh-100">
        <Col
          md={6}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="child" >
            <div className='text-center text-md-start'>
              <h3 className="mb-3 fw-bold text-xl">Sign In</h3>
              <p className='text-base'>
                New user? <a href="#" className='text-decoration-none ms-1'>Create an account</a>
              </p></div>


            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Username or email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3 d-flex align-items-center">
                <Form.Check type="checkbox" label="Keep me signed in" />
              </Form.Group>

              <Button variant="dark" type="submit" className="w-100 h-48" >
                Sign In
              </Button>
            </Form>

            <div className="d-flex align-items-center my-3">
              <div className='flex-grow-1  m-0 ' style={{ borderTop: "2px solid #CFCFCF" }}></div>
              <span className="px-3 fw-bold text-xs">Or Sign In With</span>
              <div className="flex-grow-1 m-0" style={{ borderTop: "2px solid #CFCFCF" }} />
            </div>
            <div className="d-flex justify-content-center gap-3 mt-2">
              <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
              </svg></i>
              <i className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg></i>
              <i className="bi bi-linkedin"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg></i>
              <i className="bi bi-linkedin"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-gitlab" viewBox="0 0 16 16">
                <path d="m15.734 6.1-.022-.058L13.534.358a.57.57 0 0 0-.563-.356.6.6 0 0 0-.328.122.6.6 0 0 0-.193.294l-1.47 4.499H5.025l-1.47-4.5A.572.572 0 0 0 2.47.358L.289 6.04l-.022.057A4.044 4.044 0 0 0 1.61 10.77l.007.006.02.014 3.318 2.485 1.64 1.242 1 .755a.67.67 0 0 0 .814 0l1-.755 1.64-1.242 3.338-2.5.009-.007a4.05 4.05 0 0 0 1.34-4.668Z" />
              </svg></i>
            </div>
          </div>
        </Col>

        {/* RIGHT SIDE - IMAGE */}

        <Col
          md={6}
          className="desktop-only d-md-flex justify-content-center align-items-center"
        >
        <img src="src/assets/images/login.png" alt="img" />
        </Col>

      </Row>
    </Container>
  )
}

export default Login