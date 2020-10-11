import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import '../assets/Footer.css'


class Footer extends Component {
    render() {
        return (
            <Container className="footer" fluid>
                <Row className="center-footer">
                    Made in <span role="img" aria-label="Love">❤️</span> with React
                </Row>
            </Container>

        );
    }
}

export default Footer;