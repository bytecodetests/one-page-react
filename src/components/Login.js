import React from 'react';
// import { useState } from 'react';
import { Form, Button, Container, Row } from 'react-bootstrap';
import { LoginUser } from './api/Authentication';

function Login() {

    function handleSubmit(event){
        event.preventDefault();
        const state = {
            email:  event.target.email.value, 
            password: event.target.password.value
        };
        LoginUser(state)
        console.log(state);
    }

    return (
        <>
            <Container>
                <Row className="justify-content-md-center login_register_top">
                    <Form className='loginForm' onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control name="email" type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control name="password" type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Row>
            </Container>
        </>
    );
}

export default Login;