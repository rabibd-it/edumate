import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes, faUserAlt, faUsers } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './About.css';
import StudentReview from '../StudentReview/StudentReview';

const About = () => {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        fetch('../student.JSON')
            .then(res => res.json())
            .then(data => setStudents(data))
    }, []);

    return (
        <div className="about">
            <Container fluid className="bg-light p-5">
                <h1 className="text-center">About Us</h1>
            </Container>

            {/* About Section Start */}
            <Container className="mt-5 mb-5">
                <Row>
                    <Col xs={12} md={5}>
                        <h2>We share knowledge with the world</h2>
                        <p>Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.</p>
                    </Col>
                    <Col xs={12} md={7}>
                        <Row xs={1} md={3} className="g-4 text-center">
                            <Col>
                                <Card style={{ background: '#fbf8cc' }}>
                                    <Card.Body>
                                        <FontAwesomeIcon icon={faCubes}></FontAwesomeIcon>
                                        <Card.Title>100+</Card.Title>
                                        <Card.Text>Courses</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ background: '#e9fbd5' }}>
                                    <Card.Body>
                                        <FontAwesomeIcon icon={faUserAlt}></FontAwesomeIcon>
                                        <Card.Title>50+</Card.Title>
                                        <Card.Text>Instructors</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ background: '#dcf1fd' }}>
                                    <Card.Body>
                                        <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                                        <Card.Title>10,000+</Card.Title>
                                        <Card.Text>Students</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            {/* About Section End */}

            {/* Student Says Start*/}
            <Container className="mt-5 mb-5 student-says">
                <div className="text-center mt-5 mb-5">
                    <h4 className="text-danger">STUDENT REVIEWS</h4>
                    <h1>What Our <span className="text-primary">Students</span> Says</h1>
                </div>
                <Row xs={1} md={3} className="g-4">
                    {
                        students.map(student => <StudentReview key={student.id} student={student}></StudentReview>)
                    }
                </Row>
            </Container>
            {/* Student Says End*/}
        </div>
    );
};

export default About;