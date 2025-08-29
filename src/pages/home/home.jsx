import React, { useState } from 'react';
import { Container, Row, Col, Nav, Card, Button } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import './home.css';

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

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <div className="countries-dashboard">
      <Container fluid className="px-5">
        
        <Row className="dashboard-header align-items-center py-4">
          <Col xs={12} md={6}>
            <h2 className="dashboard-title text-lg font-semibold text-dark-primary mb-0">
              Countries
            </h2>
          </Col>
          
          {/* Desktop Tabs */}
          <Col md={6} className="d-none d-md-block">
            <Nav variant="pills" className="custom-tabs justify-content-end">
              <Nav.Item>
                <Nav.Link
                  active={activeTab === 'all'}
                  onClick={() => handleTabChange('all')}
                  className="tab-link"
                >
                  All
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  active={activeTab === 'asia'}
                  onClick={() => handleTabChange('asia')}
                  className="tab-link"
                >
                  Asia
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  active={activeTab === 'europe'}
                  onClick={() => handleTabChange('europe')}
                  className="tab-link"
                >
                  Europe
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          
          {/* Mobile Breadcrumbs */}
          <Col xs={12} className="d-block d-md-none mt-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb custom-breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <button
                    className={`breadcrumb-btn ${activeTab === 'all' ? 'active' : ''}`}
                    onClick={() => handleTabChange('all')}
                  >
                    All
                  </button>
                </li>
                <li className="breadcrumb-item">
                  <button
                    className={`breadcrumb-btn ${activeTab === 'asia' ? 'active' : ''}`}
                    onClick={() => handleTabChange('asia')}
                  >
                    Asia
                  </button>
                </li>
                <li className="breadcrumb-item">
                  <button
                    className={`breadcrumb-btn ${activeTab === 'europe' ? 'active' : ''}`}
                    onClick={() => handleTabChange('europe')}
                  >
                    Europe
                  </button>
                </li>
              </ol>
            </nav>
          </Col>
        </Row>

        {/* Welcome Section */}
        <Row className="welcome-section py-4">
          <Col xs={12}>
            <div className="welcome-header text-center">
              <hr className="welcome-line" />
              <h1 className="welcome-title text-xl font-bold text-dark-primary">
                WELCOME
              </h1>
              <hr className="welcome-line" />
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
                  <Button 
                    variant="outline-secondary" 
                    size="sm" 
                    className="nav-btn rounded-circle p-2"
                  >
                    <ChevronLeft size={16} />
                  </Button>
                  
                  <div className="nav-dots d-flex gap-2">
                    <span className="nav-dot active"></span>
                    <span className="nav-dot"></span>
                    <span className="nav-dot"></span>
                  </div>
                  
                  <Button 
                    variant="outline-secondary" 
                    size="sm" 
                    className="nav-btn rounded-circle p-2"
                  >
                    <ChevronRight size={16} />
                  </Button>
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
