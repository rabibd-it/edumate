import React from 'react';
import { Card, Col } from 'react-bootstrap';
const StudentReview = (props) => {
    const { name, image, description } = props.student;
    return (
        <Col>
            <Card>
                <Card.Img variant="top"
                    src={image}
                />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 200)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default StudentReview;