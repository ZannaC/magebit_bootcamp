import React, { useState, useEffect } from "react";
import { useProduct } from "../ProductContext";
import "../../sass/app.css";

function Login() {
    const { setLogin, loggedIn } = useProduct();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [response, setResponse] = useState("");

    const changeEmail = (e) => {
        setEmail(e.target.value);
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
                // 'X-CSRF-TOKEN': document.querySelector('[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify(obj),
        })
            .then((response) => response.json())

            .then((response) => {
                setResponse(response);
            });
    };

    useEffect(() => {
        if (response.userExists === 'est') {
            setLogin();
        }
    }, [response]);

    return (
        <section className="login__container">
            <div className="login">
                <h2>Log in to Avion</h2>
                <form className="login__form" method="POST">
                    <input
                        onChange={changeEmail}
                        name="email"
                        type="email"
                        placeholder="enter your email"
                        required
                    />
                    <input
                        onChange={changePassword}
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
