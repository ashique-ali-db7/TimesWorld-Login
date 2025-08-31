import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './home.css';
import Header from '../../components/header';
import CustomCarousel from '../../components/customCarousel'
import CountryGrid from '../../components/list';
const Home = () => {
  const [activeTab, setActiveTab] = useState('all');

  // const tabData = {
  //   all: {
  //     title: 'All Countries',
  //     cards: [
  //       {
  //         id: 1,
  //         title: 'Global Statistics',
  //         content: 'Overview of all countries worldwide',
  //         type: 'large'
  //       },
  //       {
  //         id: 2,
  //         title: 'Quick Stats',
  //         content: 'Summary data',
  //         type: 'small'
  //       }
  //     ]
  //   },
  //   asia: {
  //     title: 'Asian Countries',
  //     cards: [
  //       {
  //         id: 1,
  //         title: 'Asia Pacific Region',
  //         content: 'Countries in Asia and Pacific region',
  //         type: 'large'
  //       },
  //       {
  //         id: 2,
  //         title: 'Asia Stats',
  //         content: 'Regional data',
  //         type: 'small'
  //       }
  //     ]
  //   },
  //   europe: {
  //     title: 'European Countries',
  //     cards: [
  //       {
  //         id: 1,
  //         title: 'European Union',
  //         content: 'Countries in European region',
  //         type: 'large'
  //       },
  //       {
  //         id: 2,
  //         title: 'Europe Stats',
  //         content: 'Regional data',
  //         type: 'small'
  //       }
  //     ]
  //   }
  // };


  return (
    <div className="countries-dashboard">
      <Container fluid className="custom-container">
        <Header setActiveTab={setActiveTab} activeTab={activeTab} />
        <Row className="welcome-section">
          <Col xs={12} >
            <div className='mobile-only'><div className="text-center my-2 ">
              <div className="border-top border-2 border-dark-heading  mb-2"></div>
              <h1 className="fw-bold text-dark-heading">WELCOME</h1>
              <div className="border-top border-2 border-dark-heading   mt-2"></div>
            </div></div>

            <div className='desktop-only'>
              <div className="d-flex align-items-center  justify-content-center my-2 ">
                <span className="line top "></span>
                <h1 className="mx-3 fw-bold text-dark-heading ">WELCOME</h1>
                <span className="line bottom"></span>
              </div>
            </div>
          </Col>
        </Row>

        {/* Content Cards Section */}
        <Row className="content-section py-4">
          <Col xs={12} sm={8} lg={9} className="order-2 order-sm-1" >
            <CustomCarousel />
          </Col>

          <Col xs={12} sm={4} lg={3} className='order-1 order-sm-2'>
            <Card className="content-card small-card  shadow-none">
              <Card.Body className="d-flex flex-column card-body justify-content-center align-items-center text-center">
                <div className="">
                  <img src="src/assets/images/shapes.png" alt="shapes" className='custom-img' />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <CountryGrid />
        </Row>

        <Row className="mt-5">
          <footer className="py-4">
            <Container className="text-center">
              {/* Social Icons */}
              <div className="d-flex justify-content-center gap-3 mb-3">
                 <i className=""><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
              </svg></i>
              <i className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg></i>
              <i className="bi bi-linkedin"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg></i>
              <i className="bi bi-linkedin"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-gitlab" viewBox="0 0 16 16">
                <path d="m15.734 6.1-.022-.058L13.534.358a.57.57 0 0 0-.563-.356.6.6 0 0 0-.328.122.6.6 0 0 0-.193.294l-1.47 4.499H5.025l-1.47-4.5A.572.572 0 0 0 2.47.358L.289 6.04l-.022.057A4.044 4.044 0 0 0 1.61 10.77l.007.006.02.014 3.318 2.485 1.64 1.242 1 .755a.67.67 0 0 0 .814 0l1-.755 1.64-1.242 3.338-2.5.009-.007a4.05 4.05 0 0 0 1.34-4.668Z" />
              </svg></i>
              </div>

              {/* Email */}
              <p className="mb-1 footer-text">Example@email.com</p>

              {/* Copyright */}
              <small className="footer-text">
                Copyright © 2025 Name. All rights reserved.
              </small>
            </Container>
          </footer>

        </Row>
      </Container>
    </div>
  );
};

export default Home;
