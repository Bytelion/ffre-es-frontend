import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import BackArrow from '../../icons/BackArrow/index.js';
import styles from './styles.module.scss';

const CustomBackButton = ({ title }) => {
    const history = useHistory();
    return (
        <Button className={styles.button} variant="link" size="sm" onClick={() => { history.goBack() }}>
            <BackArrow fill="#027BFF" />
            {title}
        </Button>
    );
}

export default CustomBackButton;
