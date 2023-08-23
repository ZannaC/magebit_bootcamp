import React, { useState, useEffect } from "react";
import { useProduct } from "../ProductContext";
import "../../sass/app.css";

function Login() {
    const { setLogin, loggedIn } = useProduct();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [response, setResponse] = useState("");
    // validation states
    const [noUserError, setNoUserError] = useState(false);
    const [emptyEmail, setEmptyEmail] = useState(false);
    const [emptyPassword, setEmptyPassword] = useState(false);

    useEffect(() => {
        if (email === "") {
            setEmptyEmail(true);
        } else {
            setEmptyEmail(false);
        }
        if (password === "") {
            setEmptyPassword(true);
        } else {
            setEmptyPassword(false);
        }
    }, [email, password])

    const changeEmail = (e) => {
        setEmail(e.target.value);
        setNoUserError(false);
    };

    const changePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            email: email,
            password: password,
        };
        fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'X-CSRF-TOKEN': document.querySelector('[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify(obj),
        })
            .then((response) => response.json())

            .then((response) => {
                setResponse(response);
            });
    };

    useEffect(() => {
        if (response.userExists === 'success') {
            setLogin(response.userId);
        } else if (response.userExists === 'error') {
            console.log (response)
            setNoUserError(true);
        }
    }, [response]);

    return (
        <section className="login__container">
            <div className="login">
                <h2>Log in to Avion</h2>
                <form className='login__form' method="POST">
                    <div className="login__form-input-email-block">
                        <span className={noUserError ? 'login__form-input-email-block-span-error' : 'login__form-input-email-block-span'}>Wrong email</span>
                        <input
                            onChange={changeEmail}
                            className={noUserError ?
                             'login__form-input-error'
                             :
                             'login__form-input'
                            }
                            name="email"
                            type="email"
                            placeholder="enter your email"
                            required
                        />
                    </div>
                    <input
                        onChange={changePassword}
                        className='login__form-input'
                        name="password"
                        type="password"
                        placeholder="password"
                        required
                    />
                    <button onClick={handleSubmit} type="submit">
                        Log in
                    </button>
                </form>
                <p className="login__create_account">
                    New to Avion?&nbsp;
                    <a href="/">Create an account.</a>
                </p>
            </div>
        </section>
    );
}

export default Login;
