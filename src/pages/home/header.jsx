import { useState } from "react";
import { Container, Row, Col, Nav,  Navbar,Offcanvas } from 'react-bootstrap';
const Header = ({ setActiveTab, activeTab }) => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setShowOffcanvas(false); // Close mobile menu after selection
    };
    return (
        <Row className="dashboard-header py-2">
            <Col xs={12}>
                <Navbar expand="sm" className="countries-navbar px-0">
                    <Container fluid className="px-0">

                        <Navbar.Brand className="countries-brand  mb-0">
                            Countries
                        </Navbar.Brand>

                        <Navbar.Toggle
                            aria-controls="countries-navbar-nav"
                            className="custom-navbar-toggler "
                            onClick={() => setShowOffcanvas(true)}
                        />

                        <Navbar.Collapse id="countries-navbar-nav" className="justify-content-end desktop-only">
                            <Nav className="countries-nav">
                                <Nav.Link
                                    className={`countries-nav-link ${activeTab === 'all' ? 'active' : ''}`}
                                    onClick={() => handleTabChange('all')}
                                >
                                    All
                                </Nav.Link>
                                <Nav.Link
                                    className={`countries-nav-link ${activeTab === 'asia' ? 'active' : ''}`}
                                    onClick={() => handleTabChange('asia')}
                                >
                                    Asia
                                </Nav.Link>
                                <Nav.Link
                                    className={`countries-nav-link ${activeTab === 'europe' ? 'active' : ''}`}
                                    onClick={() => handleTabChange('europe')}
                                >
                                    Europe
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>

                    <Offcanvas
                        show={showOffcanvas}
                        onHide={() => setShowOffcanvas(false)}
                        placement="end"
                        className="countries-offcanvas"
                    >
                        <Offcanvas.Header closeButton className="countries-offcanvas-header">
                            <Offcanvas.Title className="countries-offcanvas-title">
                                Countries
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="countries-offcanvas-body">
                            <Nav className="flex-column countries-mobile-nav">
                                <Nav.Link
                                    className={`countries-mobile-link ${activeTab === 'all' ? 'active' : ''}`}
                                    onClick={() => handleTabChange('all')}
                                >
                                    All
                                </Nav.Link>
                                <Nav.Link
                                    className={`countries-mobile-link ${activeTab === 'asia' ? 'active' : ''}`}
                                    onClick={() => handleTabChange('asia')}
                                >
                                    Asia
                                </Nav.Link>
                                <Nav.Link
                                    className={`countries-mobile-link ${activeTab === 'europe' ? 'active' : ''}`}
                                    onClick={() => handleTabChange('europe')}
                                >
                                    Europe
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Navbar>
            </Col>
        </Row>
    );
};

export default Header;