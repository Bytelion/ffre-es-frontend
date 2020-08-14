import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import styles from './styles.module.scss';

const CustomFooter = () => (
    <Jumbotron className={styles.footer}>
        <span>
            Built by <a href="https://www.bytelion.com/">Bytelion</a> &#169;
        </span>
    </Jumbotron>
);

export default CustomFooter;
