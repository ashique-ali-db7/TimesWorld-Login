import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import './home.css';
import Header from './header';
const Home = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabData = {
    all: {
      title: 'All Countries',
      cards: [
        {
          id: 1,
          title: 'Global Statistics',
          content: 'Overview of all countries worldwide',
          type: 'large'
        },
        {
          id: 2,
          title: 'Quick Stats',
          content: 'Summary data',
          type: 'small'
        }
      ]
    },
    asia: {
      title: 'Asian Countries',
      cards: [
        {
          id: 1,
          title: 'Asia Pacific Region',
          content: 'Countries in Asia and Pacific region',
          type: 'large'
        },
        {
          id: 2,
          title: 'Asia Stats',
          content: 'Regional data',
          type: 'small'
        }
      ]
    },
    europe: {
      title: 'European Countries',
      cards: [
        {
          id: 1,
          title: 'European Union',
          content: 'Countries in European region',
          type: 'large'
        },
        {
          id: 2,
          title: 'Europe Stats',
          content: 'Regional data',
          type: 'small'
        }
      ]
    }
  };


  return (
    <div className="countries-dashboard">
      <Container fluid className="px-5">
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
          <Col xs={12} lg={8} className="mb-4 mb-lg-0">
            {/* Large Card */}
            <Card className="content-card large-card h-100 border-0 shadow-sm">
              <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center p-5">

                {/* Placeholder Icons */}
                <div className="card-icons mb-4">
                  <div className="icon-group">
                    <div className="icon-triangle"></div>
                    <div className="icon-row">
                      <div className="icon-square"></div>
                      <div className="icon-circle"></div>
                    </div>
                  </div>
                </div>

                <h3 className="card-title text-lg font-semibold mb-3 text-dark-primary">
                  {tabData[activeTab].cards[0].title}
                </h3>
                <p className="card-text text-base text-dark-secondary mb-4">
                  {tabData[activeTab].cards[0].content}
                </p>

                {/* Navigation Controls */}
                <div className="card-navigation d-flex justify-content-center align-items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
</svg>

                  <div className="nav-dots d-flex gap-2">
                    <span className="nav-dot active"></span>
                    <span className="nav-dot"></span>
                    <span className="nav-dot"></span>
                  </div>

                  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} lg={4}>
            {/* Small Card */}
            <Card className="content-card small-card h-100 border-0 shadow-sm">
              <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center p-4">

                {/* Placeholder Icons */}
                <div className="card-icons mb-3">
                  <div className="icon-group small">
                    <div className="icon-triangle small"></div>
                    <div className="icon-row">
                      <div className="icon-square small"></div>
                      <div className="icon-circle small"></div>
                    </div>
                  </div>
                </div>

                <h4 className="card-title text-base font-semibold mb-2 text-dark-primary">
                  {tabData[activeTab].cards[1].title}
                </h4>
                <p className="card-text text-xs text-dark-secondary">
                  {tabData[activeTab].cards[1].content}
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default Home;
