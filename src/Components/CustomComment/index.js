import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './styles.module.scss';

const CustomComment = ({ user, comment }) => (
    <div className={styles.container}>
        <div className={styles.content}>
            <p className={styles.user}>{user}<span className={styles.date}>Today at 4:30 PM</span></p>
            <p className={styles.comment}>{comment}</p>
        </div>
        <hr />
    </div>
);

export default CustomComment;
