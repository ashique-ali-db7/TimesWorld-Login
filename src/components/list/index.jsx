import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from "./index.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountries, loadMore } from "../../slices/countriesSlice";
import Gallery from '../../assets/images/gallery.png'
const CountryGrid = () => {
    const dispatch = useDispatch();
    const { view, status, error, total } = useSelector(
        (state) => state.countries
    );
    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchCountries());
        }
    }, [status, dispatch]);

    if (status === "failed") return <p>Error: {error}</p>;

    return (
        <Container fluid className="py-4 px-3 px-md-4">
            <Row className="g-3">
                {view.map((country) => (
                    <Col xs={12} md={6} key={country.name}>
                        <Card className={`${styles.customCard}`}>
                            <Card.Body className="d-flex align-items-start gap-3 p-0">
                             
                                <img
                                    src={country.flag || <Gallery/>}
                                    alt=""
                                    className={styles.galleryImage} 
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

            {view.length < total && (
                <div className="text-center mt-4">
                    {status === "loading" ? <p>Loading...</p> : <Button className={styles.button} onClick={() => dispatch(loadMore())}>
                        Load more
                    </Button>}
                </div>
            )}
        </Container>
    );
};

export default CountryGrid;
