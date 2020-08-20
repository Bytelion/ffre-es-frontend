import React, { useState, useEffect } from 'react';
import CustomComment from '../CustomComment';
import { Form, Button } from 'react-bootstrap';
import { useAuth0 } from "@auth0/auth0-react";
import styles from './styles.module.scss';

const CustomCommentContainer = (props) => {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const { user, isAuthenticated } = useAuth0();

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const name = user.name;

        if (comment != null && comment.length > 0) {
            setComments(comments.concat([{
                user: name,
                date: 'Today at 4:30 PM',
                comment: comment
            }]));

            const userId = user.sub.split('|').pop();
            const loanId = props.loanId;

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    'user_id': userId,
                    'loan_id': loanId,
                    'comment': comment
                })
            };

            fetch('http://100.26.168.169/user_comments', requestOptions)
                .then(response => response.json())
                .then(data => console.log(data));
        }
    }

    useEffect(() => {
        if (props.loanId != null) {
            fetch("http://100.26.168.169/user_comments")
                .then(response => response.json())
                .then((jsonData) => {
                    console.log(jsonData);
                    const matches = jsonData.filter((obj) => {
                        return obj.loan_id == props.loanId;
                    });

                    setComments(matches);
                });
        }
    }, [props]);

    useEffect(() => {
        console.log(`Comments updated: ${comments}`);
    }, [comments]);

    const handleChange = (event) => {
        setComment(event.target.value);
    }

    return (
        <div className={styles.container}>
            <h5 className={styles.header}>Comments <span className={styles.count}>({comments.length} Total)</span></h5>
            <hr />
            {comments && comments.map(comment => (
                <CustomComment user={comment.user} comment={comment.comment} />
            ))}
            {isAuthenticated ?
                <Form>
                    <Form.Group controlId="commentTextArea">
                        <Form.Label>Leave a Comment</Form.Label>
                        <Form.Control as="textarea" rows="2"
                            placeholder="Leave a Comment..." onChange={handleChange}/>
                    </Form.Group>
                    <Button onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            :
                <center><p>Login to Leave a Comment</p></center>
            }

        </div>
    );
}

export default CustomCommentContainer;
