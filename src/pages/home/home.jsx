import { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from './home.module.css';
import Header from '../../components/header';
import CustomCarousel from '../../components/customCarousel';
import CountryGrid from '../../components/list';
import Google from '../../assets/icons/google';
import Facebook from '../../assets/icons/facebook';
import Linkedin from '../../assets/icons/linkidin';
import Github from '../../assets/icons/github';
import shapes from '../../assets/images/shapes.png'
const Home = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className={styles.countriesDashboard}>
      <Container fluid className={styles.customContainer}>
        <Header setActiveTab={setActiveTab} activeTab={activeTab} />

        <Row className={styles.welcomeSection}>
          <Col xs={12}>
            <div className="mobile-only">
              <div className="text-center my-2">
                <div className="border-top border-2 border-dark-heading mb-2"></div>
                <h1 className="fw-bold text-dark-heading">WELCOME</h1>
                <div className="border-top border-2 border-dark-heading mt-2"></div>
              </div>
            </div>

            <div className="desktop-only">
              <div className="d-flex align-items-center justify-content-center my-2">
                <span className={`${styles.line} ${styles.top}`}></span>
                <h1 className="mx-3 fw-bold text-dark-heading">WELCOME</h1>
                <span className={`${styles.line} ${styles.bottom}`}></span>
              </div>
            </div>
          </Col>
        </Row>

        <Row className={`${styles.contentSection} py-4`}>
          <Col xs={12} sm={8} lg={9} className="order-2 order-sm-1">
            <CustomCarousel />
          </Col>

          <Col xs={12} sm={4} lg={3} className="order-1 order-sm-2">
            <Card className={`${styles.contentCard} ${styles.smallCard} shadow-none`}>
              <Card.Body className="d-flex flex-column card-body justify-content-center align-items-center text-center">
                <div>
                  <img
                    src={shapes}
                    alt="shapes"
                    className={styles.customImg}
                  />
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
              <div className="d-flex justify-content-center gap-3 mb-3">
                <Google size={32} />
                <Facebook size={32} />
                <Linkedin size={32} />
                <Github size={32} />
              </div>

              <p className={`mb-1 ${styles.footerText}`}>Example@email.com</p>

              <small className={styles.footerText}>
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
