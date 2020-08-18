import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styles from './styles.module.scss';

const CustomNav = () => (
    <Navbar className={styles.nav} bg="light" expand="lg">
        <Navbar.Brand href="/">LOGO</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
            <Nav>
                <Nav.Item>
                    <Nav.Link href="/about-us">About Us</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default CustomNav;
