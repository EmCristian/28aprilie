import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './../Login/Login.css'

import {Button, Form} from 'react-bootstrap';

export default function Login() {

    const handleLogin = () => {
        alert('hiiii');
    }

    return (
        <div className='LoginDiv'>
            <Form onSubmit={handleLogin}>
                <Form.Label className='LoginFormTitle'>Log in</Form.Label>
                <Form.Group className='LoginInputGroup'>
                    <Form.Control size="lg" className='LoginInput' id='email' placeholder='Email address'></Form.Control>
                </Form.Group>

                <Form.Group className='LoginInputGroup'> 
                    <Form.Control size="lg" className='LoginInput' id='password' placeholder='Password' type='password'></Form.Control>
                </Form.Group>
                <Button size="lg" className='LoginButton' type='submit'>Sign in</Button>
                
                <Form.Group className='LoginFooter'>
                    <label>Forgot password?</label>
                    <label>Don't have an account?<a>Register here</a></label>
                </Form.Group>
            </Form>
        </div>
    )
}