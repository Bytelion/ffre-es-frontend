import React, { useState, useEffect } from 'react';
import CustomComment from '../CustomComment';
import { Form, Button } from 'react-bootstrap';
import { useAuth0 } from "@auth0/auth0-react";
import styles from './styles.module.scss';

const CustomCommentContainer = (props) => {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [users, setUsers] = useState([]);
    const { user, isAuthenticated } = useAuth0();

    const getUser = (id) => {
        const current = users.filter((user) => {
            return user.id == id;
        }).pop()

        if (current != null) {
            return current.email;
        }
    }

    const loadComments = () => {
        if (props.loanId != null) {
            fetch("https://100.26.168.169/user_comments")
                .then(response => response.json())
                .then((jsonData) => {
                    console.log(jsonData);
                    const matches = jsonData.filter((obj) => {
                        return obj.loan_id == props.loanId;
                    });

                    setComments(matches);
                });
        }
    }

    const handleSubmit = (event) => {

        const name = user.email;

        if (comment != null && comment.length > 0) {

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

            fetch('https://100.26.168.169/user_comments', requestOptions)
                .then(response => response.json())
                .then(data => loadComments());
        }
    }

    useEffect(() => {
        fetch("https://100.26.168.169/users")
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    useEffect(() => {
        loadComments();
    }, [props]);

    useEffect(() => {
        console.log(comments);
    }, [comments]);

    useEffect(() => {
        console.log(users);
    }, [users]);

    const handleChange = (event) => {
        setComment(event.target.value);
    }

    return (
        <div className={styles.container}>
            <h5 className={styles.header}>Comments <span className={styles.count}>({comments.length} Total)</span></h5>
            <hr />
            {comments && comments.map(comment => (
                <CustomComment user={getUser(comment.user_id)} time={comment.created_at} comment={comment.comment} />
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
