import React from 'react';
import styles from './styles.module.scss';

const CustomLabel = ({ title, value }) => (
    <div className={styles.container}>
        <span className={styles.title}>
            <p>{title}</p>
        </span>

        <span className={styles.value}>
            <p>{value}</p>
        </span>
    </div>
);

export default CustomLabel;
