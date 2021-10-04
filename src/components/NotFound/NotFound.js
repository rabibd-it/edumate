import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import img from '../../404.png';
const NotFound = () => {

    let history = useHistory();
    const handleButtonClick = () => {
        history.push("/");
    }
    return (
        <div className="text-center mt-5 mb-5">
            <Container>
                <img
                    src={img}
                    className="d-inline-block align-top img-fluid"
                    alt="404"
                />
                <h3 className="text-primary mt-3 mb-3">Something <span className="text-danger">Missing</span></h3>
                <p>The Page You Are Looking For May Have Been Moved, Deleted, Or Possibly Never Existed.</p>
                <Button onClick={handleButtonClick} variant="primary">Go to Homepage</Button>
            </Container>
        </div>
    );
};

export default NotFound;