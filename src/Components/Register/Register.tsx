import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './../Login/Login.css'

export default function Register() {

    const [userFormInfo, setUserFormInfo] = useState<any>(0);

    return (
        <div className='LoginDiv'>
        <Form >
            <Form.Label className='LoginFormTitle'>Register</Form.Label>
            <Form.Group className='LoginInputGroup'>
                {/* <Form.Label className='LoginLabel' htmlFor='email'>Email</Form.Label> */}
                <Form.Control size="lg" className='LoginInput' id='email' placeholder='Email address'></Form.Control>
            </Form.Group>

            <Form.Group className='LoginInputGroup'> 
                {/* <Form.Label className='LoginLabel' htmlFor='password'>Password</Form.Label> */}
                <Form.Control size="lg" className='LoginInput' id='password' placeholder='Password' type='password'></Form.Control>
            </Form.Group>

            <Form.Group className='LoginInputGroup'> 
                {/* <Form.Label className='LoginLabel' htmlFor='password'>Password</Form.Label> */}
                <Form.Control size="lg" className='LoginInput' id='password' placeholder='Confirm Password' type='password'></Form.Control>
            </Form.Group>

            <Button size="lg" className='LoginButton' type='submit'>Sign up</Button>
            
        </Form>
    </div>
    )
}