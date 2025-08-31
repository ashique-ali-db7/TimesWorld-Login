import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from "./index.module.css"; // ✅ custom styles

const CountryGrid = () => {
  // Dummy data
  const countries = [
    { name: "Afghanistan", region: "Asia" },
    { name: "Albania", region: "Europe" },
    { name: "Afghanistan", region: "Asia" },
    { name: "Afghanistan", region: "Asia" },
    { name: "Afghanistan", region: "Asia" },
    { name: "Afghanistan", region: "Asia" },
    { name: "Afghanistan", region: "Asia" },
    { name: "Afghanistan", region: "Asia" },
    { name: "Afghanistan", region: "Asia" },
    { name: "Afghanistan", region: "Asia" },
    { name: "Afghanistan", region: "Asia" },
    { name: "Albania", region: "Europe" },
  ];

  const [visible, setVisible] = useState(6); // show 6 cards initially

  const loadMore = () => {
    setVisible((prev) => prev + 4); // load 4 more each click
  };

  return (
    <Container fluid className="py-4 px-3 px-md-4">
      <Row className="g-3">
        {countries.slice(0, visible).map((country, idx) => (
          <Col xs={12} md={6} key={idx}>
            <Card className={`${styles.customCard}`}>
              <Card.Body className="d-flex align-items-start gap-3 p-0">
                {/* placeholder image */}
                <img
                  src="src/assets/images/gallery.png"
                  alt=""
                  className={styles.galleryImage} // ✅ CSS Module applied
                />

             
               <div className="d-flex flex-column " >
                  <h6 className="fw-semibold mb-1 text-lg text-dark-heading">
                    {country.name}
                  </h6>
                  <small className={styles.countryRegion}>
                    {country.region}
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Load More button */}
      {visible < countries.length && (
        <div className="text-center mt-4">
          <Button className={styles.button} onClick={loadMore}>
            Load more
          </Button>
        </div>
      )}
    </Container>
  );
};

export default CountryGrid;
