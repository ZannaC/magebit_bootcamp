import React, { useState, useEffect } from 'react';
import { useProduct } from '../ProductContext';
import '../../sass/app.css';

function Login() {
    const { setLoggedIn, loggedIn } = useProduct();
    const [fetchResponse, setFetchResponse] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Sets user typed data and removes field styling and error messages on input.
    const updateValue = (inputField, event) => {
        const emailField = document.getElementById('loginEmail');
        const emailFieldMessage = document.getElementById('loginEmailMessage');
        const passwordField = document.getElementById('loginPassword');
        const passwordFieldMessage = document.getElementById('loginPasswordMessage');

        if (inputField === 'email') {
            setEmail(event.target.value);
            emailField.classList.remove('--invalid');
            emailFieldMessage.innerText = '';
        } else if (inputField === 'password') {
            setPassword(event.target.value);
            passwordField.classList.remove('--invalid');
            passwordFieldMessage.innerText = '';
        }
    };

    // Returns true if input fields are not empty and displays error messages if they are.
    const isUserDataValid = (userData) => {
        let isValid = true;
        const emailField = document.getElementById('loginEmail');
        const emailFieldMessage = document.getElementById('loginEmailMessage');
        const passwordField = document.getElementById('loginPassword');
        const passwordFieldMessage = document.getElementById('loginPasswordMessage');
        const emptyFieldMessage = 'This is a required field.';

        if (userData.email === '') {
            isValid = false;
            emailField.classList.add('--invalid');
            emailFieldMessage.innerText = emptyFieldMessage;
        }

        if (userData.password === '') {
            isValid = false;
            passwordField.classList.add('--invalid');
            passwordFieldMessage.innerText = emptyFieldMessage;
        }

        if (isValid) {
            return true;
        }

        return false;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email,
            password,
        };

        if (isUserDataValid(userData)) {
            fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'X-CSRF-TOKEN': document.querySelector('[name="csrf-token"]').getAttribute('content')
                },
                body: JSON.stringify(userData),
            })
                .then((response) => response.json())
                .then((response) => { setFetchResponse(response); });
        }
    };

    useEffect(() => {
        if (fetchResponse.userExists === 'est') {
            setLoggedIn(true);
        }
        console.log(loggedIn);
    }, [fetchResponse]);

    return (
        <section className="login__container">
            <div className="login">
                <h2>Log in to Avion</h2>
                <form className="login__form" method="POST">
                    <input
                        id="loginEmail"
                        onChange={(event) => updateValue('email', event)}
                        name="email"
                        type="email"
                        placeholder="email"
                        required
                    />
                    <p id="loginEmailMessage" className="input_message" />
                    <input
                        id="loginPassword"
                        onChange={(event) => updateValue('password', event)}
                        name="password"
                        type="password"
                        placeholder="password"
                        required
                    />
                    <p id="loginPasswordMessage" className="input_message" />
                    <button
                        id="submitButton"
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
