import React, { useEffect, useState } from 'react';
import { Col, Container, InputGroup, Button, Row, FormControl } from 'react-bootstrap';
import './Home.css';
import Course from '../Course/Course';
const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('../data.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    return (
        <div>
            {/* Top Banner Start */}
            <div className="top-banner-bg">
                <Container>
                    <Row className="justify-content-center">
                        <Col sm={12} md={9}>
                            <div className="top-banner">
                                <h1>World's Largest Online Learning Platform</h1>
                                <p>Take High-Quality Online Courses from the Best Online Instructors of Edu Mate</p>
                                <InputGroup className="mt-5">
                                    <FormControl size="lg"
                                        placeholder="Search your courses"
                                    />
                                    <Button variant="primary">
                                        Search
                                    </Button>
                                </InputGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* Top Banner End */}

            {/* Featured Courses Start */}
            <div className="courses pt-3 pb-5">
                <Container>
                    <div className="text-center mt-5 mb-5">
                        <h2>Explore Featured <span className="text-primary">Courses</span></h2>
                        <p>Take High-Quality Online Courses from the Best Online Instructors of EduMate</p>
                    </div>
                    <Row xs={1} md={3} className="g-4">
                        {
                            courses.slice(0, 6).map(course => <Course key={course.id} course={course}></Course>)
                        }
                    </Row>
                </Container>
            </div>
            {/* Featured Courses End */}
        </div>
    );
};

export default Home;