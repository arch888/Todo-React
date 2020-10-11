import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import '../assets/Header.css';

class Header extends Component {
    render() {
        return (
            <Container className="py-3 header" fluid>
                <Row className="center-header">
                    <h4>Todo App</h4>
                </Row>
            </Container>
        );
    }
}

export default Header;