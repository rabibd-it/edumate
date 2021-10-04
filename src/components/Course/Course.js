import React from 'react';
import { Badge, Card, Col, Image, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faVideo, faSignal } from '@fortawesome/free-solid-svg-icons';
const Course = (props) => {
    const { name, image, category, enrolled, duration, lectures, level, description, instructor, instructor_image, price } = props.course;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <div className="d-flex justify-content-between">
                        <Badge pill bg="secondary">{category}</Badge>
                        <span className="fw-bold">{enrolled} Enrolled</span>
                    </div>
                    <Card.Title className="mt-2 mb-2">
                        {name}
                    </Card.Title>
                    <div className="d-flex justify-content-between">
                        <span>
                            <FontAwesomeIcon icon={faClock} className="text-danger" />
                            {duration}
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faVideo} className="text-success" />
                            {lectures} Lectures
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faSignal} className="text-warning" />
                            {level}
                        </span>
                    </div>
                    <Card.Text className="mt-2">
                        {description.slice(0, 100)}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Row className="d-flex align-items-center">
                        <Col xs={6} md={9}>
                            <Image src={instructor_image}
                                width="50"
                                height="50"
                                roundedCircle />
                            <span className="m-3 fw-bold">{instructor}</span>
                        </Col>
                        <Col xs={6} md={3}>
                            <span className="price">${price}</span>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Course;