import React from 'react';
import { Container, Card, Jumbotron } from 'react-bootstrap';
import CustomNav from '../../Components/CustomNav';
import CustomFooter from '../../Components/CustomFooter';
import styles from './styles.module.scss';

const About = () => (
    <div>
        <CustomNav />
        {/* Create Body Here */}
        <Container className={styles.main}>
            <Jumbotron fluid className={styles.jumbo}>
                <h3 className={styles.header}>About Us</h3>
                {/*<p className={styles.subheader}>Lorem Ipsum Blah Blah Blah</p>*/}
                <hr />
                <p className={styles.body}>
                    The Viridig project is intended to provide transparency into what is one of the largest government loan programs ever initiated by the United States government. By providing transparency into where the money has gone, we have a chance to better respond to scenrios like this. Additionally, we have a tool that can be used in the future to help identify where loans have been paid back, where loans were forgiven, and unfortunately, where fraud took place.
                </p>
            </Jumbotron>
        </Container>
        <CustomFooter />
    </div>
);

export default About;
