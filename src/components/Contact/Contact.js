import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhone, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <Container fluid className="bg-light p-5">
                <h1 className="text-center">Contact Us</h1>
            </Container>
            {/* Contact Info Start*/}
            <Container className="mt-5 mb-5">
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card className="bg-light">
                            <Card.Body className="text-center">
                                <FontAwesomeIcon icon={faMapMarker}></FontAwesomeIcon>
                                <Card.Title>Address</Card.Title>
                                <Card.Text>
                                    Shahid Kajol Shorni, Satkhira, Khulan, Bangladesh
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="bg-light">
                            <Card.Body className="text-center">
                                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                                <Card.Title>Phone</Card.Title>
                                <Card.Text>
                                    (+880)1718-243103
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card className="bg-light">
                            <Card.Body className="text-center">
                                <FontAwesomeIcon icon={faEnvelopeOpen}></FontAwesomeIcon>
                                <Card.Title>Email</Card.Title>
                                <Card.Text>
                                    support@edumate.com
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Contact Info End*/}

            {/* Contact From with Map Start*/}
            <Container className="mt-5 mb-5">
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d58884.2005343733!2d89.03545704265434!3d22.718481387492332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x39ff5d928458a869%3A0x1362c587e6ad6c70!2sSouth%20Bangla%20IT%20Zone%2C%20Narkeltola%20More%2C%20Shahid%20Kajol%20Shorni%2C%209400!3m2!1d22.727884799999998!2d89.079808!5e0!3m2!1sen!2sbd!4v1633334381019!5m2!1sen!2sbd" width="100%" height="450" title="Edu Mate"></iframe>
                    </Col>

                    <Col>
                        <h2>Get In Touch</h2>
                        <p>Have some suggestions or just want to say hi? Our support team are ready to help you 24/7.</p>
                        <Form>
                            <Row className="mb-4">
                                <Col>
                                    <Form.Control placeholder="Name" />
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Email" />
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col>
                                    <Form.Control placeholder="Phone" />
                                </Col>
                                <Col>
                                    <Form.Control placeholder="Subject" />
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col>
                                    <Form.Control as="textarea" style={{ height: '150px' }} placeholder="Message" />
                                </Col>
                            </Row>
                            <div className="d-grid">
                                <Button variant="primary text-uppercase">Submit Now</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
            {/* Contact From with Map End*/}
        </div>
    );
};

export default Contact;