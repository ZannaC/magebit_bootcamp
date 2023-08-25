import React, { useState, useEffect, useRef } from 'react';
import { useProduct } from '../ProductContext';
import '../../sass/app.css';

function Login() {
    const { setLogin, loggedIn } = useProduct();
    const [fetchResponse, setFetchResponse] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailField = useRef(null);
    const emailFieldMessage = useRef(null);
    const passwordField = useRef(null);
    const passwordFieldMessage = useRef(null);

    // Sets user typed data and removes field styling and error messages on input.
    const updateValue = (inputField, event) => {
        if (inputField === 'email') {
            setEmail(event.target.value);
            emailField.current.classList.remove('--invalid');
            emailFieldMessage.current.innerText = '';
        } else if (inputField === 'password') {
            setPassword(event.target.value);
            passwordField.current.classList.remove('--invalid');
            passwordFieldMessage.current.innerText = '';
        }
    };

    // Returns true if input fields are not empty and displays error messages if they are.
    const isUserDataValid = (userData) => {
        let isValid = true;
        const emptyFieldMessage = 'This is a required field.';

        if (userData.email === '') {
            isValid = false;
            emailField.current.classList.add('--invalid');
            emailFieldMessage.current.innerText = emptyFieldMessage;
        }

        if (userData.password === '') {
            isValid = false;
            passwordField.current.classList.add('--invalid');
            passwordFieldMessage.current.innerText = emptyFieldMessage;
        }

        if (isValid) {
            return true;
        }

        return false;
    };

    const showUserInvalidMessage = () => {
        emailField.current.classList.add('--invalid');
        passwordField.current.classList.add('--invalid');
        passwordFieldMessage.current.innerText = 'Incorrect username or password.';
        emailField.current.value = '';
        passwordField.current.value = '';
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            email,
            password,
        };

        if (isUserDataValid(userData)) {
            fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('[name="csrf-token"]').getAttribute('content'),
                },
                body: JSON.stringify(userData),
            })
                .then((response) => response.json())
                .then((response) => setFetchResponse(response));
        }
    };

    useEffect(() => {
        if (fetchResponse.userExists === 'success') {
            setLogin(fetchResponse.userId);
        } else if (fetchResponse.userExists === 'error') {
            showUserInvalidMessage();
        }
    }, [fetchResponse]);

    return (
        <section className="login__container">
            <div className="login">
                <h2>Log in to Avion</h2>
                <form className="login__form" method="POST">
                    <input
                        ref={emailField}
                        onChange={(event) => updateValue('email', event)}
                        name="email"
                        type="email"
                        placeholder="email"
                        required
                    />
                    <p ref={emailFieldMessage} className="input_message" />
                    <input
                        ref={passwordField}
                        onChange={(event) => updateValue('password', event)}
                        name="password"
                        type="password"
                        placeholder="password"
                        required
                    />
                    <p ref={passwordFieldMessage} className="input_message" />
                    <button
                        onClick={handleSubmit}
                        type="submit"
                    >
                        Log in
                    </button>
                </form>
                <p className="login__create_account">
                    New to Avion?&nbsp;
                    <a href="/signup">Create an account.</a>
                </p>
            </div>
        </section>
    );
}

export default Login;
