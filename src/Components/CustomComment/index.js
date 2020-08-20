import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './styles.module.scss';

const CustomComment = ({ user, time, comment }) => {
    const date = new Date(time);
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p className={styles.user}>{user}<span className={styles.date}>{weekdays[date.getDay()]}, {months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</span></p>
                <p className={styles.comment}>{comment}</p>
            </div>
            <hr />
        </div>
    );
}

export default CustomComment;
