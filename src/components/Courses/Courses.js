import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('../data.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    return (
        <div>
            <Container fluid className="bg-light p-5">
                <h1 className="text-center">All Courses</h1>
            </Container>
            {/* Courses Start */}
            <div className="courses pt-5 pb-5">
                <Container>
                    <Row xs={1} md={3} className="g-4">
                        {
                            courses.map(course => <Course key={course.id} course={course}></Course>)
                        }
                    </Row>
                </Container>
            </div>
            {/* Courses End */}
        </div>
    );
};

export default Courses;