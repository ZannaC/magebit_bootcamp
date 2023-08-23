import React, { useState, useEffect, useRef } from 'react';
import '../../sass/app.css';

function Signup() {
    const [fetchResponse, setFetchResponse] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const emailField = useRef(null);
    const emailFieldMessage = useRef(null);
    const nameField = useRef(null);
    const nameFieldMessage = useRef(null);
    const passwordField = useRef(null);
    const passwordFieldMessage = useRef(null);
    const passwordConfirmField = useRef(null);
    const passwordConfirmFieldMessage = useRef(null);
    const submitButton = useRef(null);

    // Sets user typed data and removes field styling and error messages on input.
    const updateValue = (inputField, event) => {
        submitButton.current.disabled = false;

        if (inputField === 'email') {
            setEmail(event.target.value);
            emailField.current.classList.remove('--invalid');
            emailFieldMessage.current.innerText = '';
        } else if (inputField === 'name') {
            setName(event.target.value);
            nameField.current.classList.remove('--invalid');
            nameFieldMessage.current.innerText = '';
        } else if (inputField === 'password') {
            setPassword(event.target.value);
            passwordField.current.classList.remove('--invalid');
            passwordFieldMessage.current.innerText = '';
        } else if (inputField === 'password_confirm') {
            passwordConfirmField.current.classList.remove('--invalid');
            passwordConfirmFieldMessage.current.innerText = '';
        }
    };

    // Returns true if user typed data is valid and displays error message if not.
    const isUserDataValid = (userData) => {
        let isValid = true;
        const emptyFieldMessage = 'This is a required field.';

        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userData.email)) {
            isValid = false;
            emailField.current.classList.add('--invalid');
            emailFieldMessage.current.innerText = 'This is not a valid email.';
        }

        if (userData.email === '') {
            isValid = false;
            emailField.current.classList.add('--invalid');
            emailFieldMessage.current.innerText = emptyFieldMessage;
        }

        if (userData.name === '') {
            isValid = false;
            nameField.current.classList.add('--invalid');
            nameFieldMessage.current.innerText = emptyFieldMessage;
        }

        if (userData.password !== passwordConfirmField.current.value) {
            isValid = false;
            passwordConfirmField.current.classList.add('--invalid');
            passwordConfirmFieldMessage.current.innerText = 'Passwords don\'t match.';
        }

        if (userData.password === '') {
            isValid = false;
            passwordField.current.classList.add('--invalid');
            passwordFieldMessage.current.innerText = emptyFieldMessage;
        }

        if (passwordConfirmField.current.value === '') {
            isValid = false;
            passwordConfirmField.current.classList.add('--invalid');
            passwordConfirmFieldMessage.current.innerText = emptyFieldMessage;
        }

        if (isValid) {
            return true;
        }

        submitButton.current.disabled = true;

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
                            ref={emailField}
                            type="email"
                            name="email"
                            onChange={(event) => updateValue('email', event)}
                        />
                        <p ref={emailFieldMessage} className="input_message" />
                    </label>

                    <label htmlFor="signUpName">
                        Name:
                        <input
                            id="signUpName"
                            ref={nameField}
                            type="text"
                            name="name"
                            onChange={(event) => updateValue('name', event)}
                        />
                        <p ref={nameFieldMessage} className="input_message" />
                    </label>

                    <label htmlFor="signUpPassword">
                        Password:
                        <input
                            id="signUpPassword"
                            ref={passwordField}
                            type="password"
                            name="password"
                            onChange={(event) => updateValue('password', event)}
                        />
                        <p ref={passwordFieldMessage} className="input_message" />
                    </label>

                    <label htmlFor="signUpConfirmPassword">
                        Confirm password:
                        <input
                            id="signUpConfirmPassword"
                            ref={passwordConfirmField}
                            type="password"
                            name="password"
                            onChange={(event) => updateValue('password_confirm', event)}
                        />
                        <p ref={passwordConfirmFieldMessage} className="input_message" />
                    </label>

                    <button
                        ref={submitButton}
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
