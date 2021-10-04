import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../logo.png';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarker, faPhone, faEnvelopeOpen, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer bg-dark pt-5 pb-5 text-white">
            <Container>
                <Row>
                    <Col xs={12} md={3}>
                        <img
                            src={logo}
                            width="64"
                            height="64"
                            className="d-inline-block align-top"
                            alt="Eud Mate"
                        />
                        <p className="text-white">Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.</p>

                        <div className="social">
                            <a href="https://www.facebook.com" className="facebook" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>

                            <a href="https://www.twitter.com" className="twitter" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>

                            <a href="https://www.linkedin.com" className="linkedin" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>

                            <a href="https://www.instagram.com" className="instagram" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        <h3 className="widget-title">Company</h3>
                        <div className="link-widget">
                            <NavLink to="/about">About Us</NavLink>
                            <NavLink to="/courses">Courses</NavLink>
                            <a href="#">Instructor</a>
                            <a href="#">Career</a>
                            <NavLink to="/contact">Contact</NavLink>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        <h3 className="widget-title">Courses</h3>
                        <div className="link-widget">
                            <a href="#">JavaScript</a>
                            <a href="#">Node Js</a>
                            <a href="#">PHP</a>
                            <a href="#">React</a>
                            <a href="#">HtML & CSS</a>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        <h3 className="widget-title">Address</h3>
                        <ul className="address-widget">
                            <li>
                                <FontAwesomeIcon icon={faMapMarker} />
                                <div className="desc">
                                    Shahid Kajol Shorni, Satkhira, Khulan, Bangladesh
                                </div>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPhone} />
                                <div className="desc">
                                    <a className="text-white" href="tel:(+880)1718-243103">(+880)1718-243103</a>
                                </div>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelopeOpen} />
                                <div className="desc">
                                    <a className="text-white" href="mailto:support@edumate.com">support@edumate.com</a>
                                </div>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faGlobe} />
                                <div className="desc">
                                    <a className="text-white" href="http://edumate.com">www.edumate.com</a>
                                </div>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;