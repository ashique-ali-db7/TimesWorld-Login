import { useEffect, useState } from "react";
import { Container, Row, Col, Nav, Navbar, Offcanvas } from "react-bootstrap";
import styles from "./index.module.css";
import { useDispatch } from "react-redux";
import { setRegion } from "../../slices/countriesSlice";
const Header = ({ setActiveTab, activeTab }) => {

    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const dispatch = useDispatch()
    const handleTabChange = (tab) => {
        dispatch(setRegion(tab))
        setActiveTab(tab);
        setShowOffcanvas(false);
    };


    useEffect(() => {
        dispatch(setRegion("All"));
        setActiveTab("All");
    }, [dispatch, setActiveTab]);

    return (
        <Row className="py-2">
            <Col xs={12}>
                <Navbar expand="sm" className={styles.countriesNavbar}>
                    <Container fluid className="px-0">

                        <Navbar.Brand className={styles.countriesBrand}>
                            Countries
                        </Navbar.Brand>


                        <Navbar.Toggle
                            aria-controls="countries-navbar-nav"
                            className={styles.customNavbarToggler}
                            onClick={() => setShowOffcanvas(true)}
                        />


                        <Navbar.Collapse
                            id="countries-navbar-nav"
                            className="justify-content-end desktop-only"
                        >
                            <Nav>
                                {["All", "Asia", "Europe"].map((tab) => (
                                    <Nav.Link
                                        key={tab}
                                        className={`${styles.countriesNavLink} ${activeTab === tab ? styles.active : ""
                                            }`}
                                        onClick={() => handleTabChange(tab)}
                                    >
                                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                    </Nav.Link>
                                ))}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>


                    <Offcanvas
                        show={showOffcanvas}
                        onHide={() => setShowOffcanvas(false)}
                        placement="end"
                        className={styles.countriesOffcanvas}
                    >
                        <Offcanvas.Header closeButton className={styles.offcanvasHeader}>
                            <Offcanvas.Title className={styles.offcanvasTitle}>
                                Countries
                            </Offcanvas.Title>
                        </Offcanvas.Header>

                        <Offcanvas.Body className={styles.offcanvasBody}>
                            <Nav className="flex-column gap-2">
                                {["All", "Asia", "Europe"].map((tab) => (
                                    <Nav.Link
                                        key={tab}
                                        className={`${styles.mobileLink} ${activeTab === tab ? styles.activeMobile : ""
                                            }`}
                                        onClick={() => handleTabChange(tab)}
                                    >
                                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                    </Nav.Link>
                                ))}
                            </Nav>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Navbar>
            </Col>
        </Row>
    );
};

export default Header;
