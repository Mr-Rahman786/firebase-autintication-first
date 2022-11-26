import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../../firebase/firebase.init';

const auth = getAuth(app);

const RegisterReactsBootsTrap = () => {
    const [passwordError, setPasswordError] = useState('');
    const [success, setSuccess] = useState(false);

    const handlerRegister = event => {
        event.preventDefault();
        setSuccess(false);
        const form = event.target;
        const email = form.email.value;
        const password=form.password.value
        console.log(email, password)
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setPasswordError('Please Provide at least two uppercase');
            return;
        }
        if (password.length < 6) {
             setPasswordError('Set password at list 6 carrecters')
             return;
        }
        if (!/(?=.*[?!@#$&*])/.test(password)) {
            setPasswordError('please set one special carrecter')
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(result)
                setSuccess(true)
                form.reset('')
            })
            .catch(error => {
                console.error('error:', error);
                setPasswordError(error.message)
        })

    }

    return (
        <div className='w-50 mx-auto border-2xl'>
        <h2 className='text-primary text-center'>Please Register Now</h2>
                    <Form onSubmit={handlerRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <p className='text-danger'>{passwordError}</p>
                {success && <p className='text-success'>User Created Successfully</p>}
            <Button variant="primary" type="submit">
                Register
            </Button>
            </Form>
        </div>
    );
};

export default RegisterReactsBootsTrap;