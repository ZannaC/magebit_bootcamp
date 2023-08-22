import React, { useState, useEffect } from 'react';
import '../../sass/app.css';

function Signup() {
    const [fetchResponse, setFetchResponse] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    // Sets user typed data and removes field styling and error messages on input.
    const updateValue = (inputField, event) => {
        const emailField = document.getElementById('signUpEmail');
        const emailFieldMessage = document.getElementById('signUpEmailMessage');
        const nameField = document.getElementById('signUpName');
        const nameFieldMessage = document.getElementById('signUpNameMessage');
        const passwordField = document.getElementById('signUpPassword');
        const passwordFieldMessage = document.getElementById('signUpPasswordMessage');
        const passwordConfirmField = document.getElementById('signUpConfirmPassword');
        const passwordConfirmFieldMessage = document.getElementById('signUpConfirmPasswordMessage');
        const submitButton = document.getElementById('submitButton');

        submitButton.disabled = false;

        if (inputField === 'email') {
            setEmail(event.target.value);
            emailField.classList.remove('--invalid');
            emailFieldMessage.innerText = '';
        } else if (inputField === 'name') {
            setName(event.target.value);
            nameField.classList.remove('--invalid');
            nameFieldMessage.innerText = '';
        } else if (inputField === 'password') {
            setPassword(event.target.value);
            passwordField.classList.remove('--invalid');
            passwordFieldMessage.innerText = '';
        } else if (inputField === 'password_confirm') {
            passwordConfirmField.classList.remove('--invalid');
            passwordConfirmFieldMessage.innerText = '';
        }
    };

    // Returns true if user typed data is valid and displays error message if not.
    const isUserDataValid = (userData) => {
        let isValid = true;
        const emailField = document.getElementById('signUpEmail');
        const emailFieldMessage = document.getElementById('signUpEmailMessage');
        const nameField = document.getElementById('signUpName');
        const nameFieldMessage = document.getElementById('signUpNameMessage');
        const passwordField = document.getElementById('signUpPassword');
        const passwordFieldMessage = document.getElementById('signUpPasswordMessage');
        const passwordConfirmField = document.getElementById('signUpConfirmPassword');
        const passwordConfirmFieldMessage = document.getElementById('signUpConfirmPasswordMessage');
        const emptyFieldMessage = 'This is a required field.';
        const submitButton = document.getElementById('submitButton');

        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userData.email)) {
            isValid = false;
            emailField.classList.add('--invalid');
            emailFieldMessage.innerText = 'This is not a valid email.';
        }

        if (userData.email === '') {
            isValid = false;
            emailField.classList.add('--invalid');
            emailFieldMessage.innerText = emptyFieldMessage;
        }

        if (userData.name === '') {
            isValid = false;
            nameField.classList.add('--invalid');
            nameFieldMessage.innerText = emptyFieldMessage;
        }

        if (userData.password !== passwordConfirmField.value) {
            isValid = false;
            passwordConfirmField.classList.add('--invalid');
            passwordConfirmFieldMessage.innerText = 'Passwords don\'t match.';
        }

        if (userData.password === '') {
            isValid = false;
            passwordField.classList.add('--invalid');
            passwordFieldMessage.innerText = emptyFieldMessage;
        }

        if (passwordConfirmField.value === '') {
            isValid = false;
            passwordConfirmField.classList.add('--invalid');
            passwordConfirmFieldMessage.innerText = emptyFieldMessage;
        }

        if (isValid) {
            return true;
        }

        submitButton.disabled = true;

        return false;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            email,
            name,
            password,
        };

        if (isUserDataValid(userData)) {
            fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('[name="csrf-token"]').getAttribute('content'),
                },
                body: JSON.stringify(userData),
            })
                .then((response) => response.json())
                .then((response) => { setFetchResponse(response); });
        }
    };

    useEffect(() => {}, [fetchResponse]);

    return (
        <section className="sign_up__container">
            <div className="sign_up">
                <h2>Create an account</h2>

                <form className="sign_up__form" method="POST">
                    <label htmlFor="signUpEmail">
                        Email:
                        <input
                            id="signUpEmail"
                            type="email"
                            name="email"
                            onChange={(event) => updateValue('email', event)}
                        />
                        <p id="signUpEmailMessage" className="input_message" />
                    </label>

                    <label htmlFor="signUpName">
                        Name:
                        <input
                            id="signUpName"
                            type="text"
                            name="name"
                            onChange={(event) => updateValue('name', event)}
                        />
                        <p id="signUpNameMessage" className="input_message" />
                    </label>

                    <label htmlFor="signUpPassword">
                        Password:
                        <input
                            id="signUpPassword"
                            type="password"
                            name="password"
                            onChange={(event) => updateValue('password', event)}
                        />
                        <p id="signUpPasswordMessage" className="input_message" />
                    </label>

                    <label htmlFor="signUpConfirmPassword">
                        Confirm password:
                        <input
                            id="signUpConfirmPassword"
                            type="password"
                            name="password"
                            onChange={(event) => updateValue('password_confirm', event)}
                        />
                        <p id="signUpConfirmPasswordMessage" className="input_message" />
                    </label>

                    <button
                        id="submitButton"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Sign up
                    </button>
                </form>

                <p className="sign_up__have_account">
                    Already have an account?&nbsp;
                    <a href="/login">Log in.</a>
                </p>
            </div>
        </section>
    );
}

export default Signup;
