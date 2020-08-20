import React from 'react';
import { Navbar, Nav, Button, Form } from 'react-bootstrap';
import { useAuth0 } from "@auth0/auth0-react";
import styles from './styles.module.scss';

const CustomNav = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    return (
        <Navbar className={styles.nav} expand="lg">
            <Navbar.Brand href="/">
                <img
                    alt="LOGO"
                    src={require('../../imgs/logo_nav.png')}
                    width="90"
                    height="60"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Nav.Item>
                        <Nav.Link className={styles.about} href="/about-us">About Us</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
            {/*
            <Form inline className={styles.login}>
                {isAuthenticated ?
                    <Button variant="secondary" onClick={() => logout({ returnTo: window.location.origin })}>Logout</Button>
                :
                    <Button variant="primary" onClick={() => loginWithRedirect()}>Login</Button>
                }
            </Form>
            */}
        </Navbar>
    );
}

export default CustomNav;
