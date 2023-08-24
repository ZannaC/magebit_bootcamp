import React, { useState, useEffect } from "react";
import requests from "../utils/requests";

function Register () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [response, setResponse] = useState("");

    useEffect(() => {
        console.log(response);
    }, [response])

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            name: name,
            email: email,
            password: password
        }
        // console.log(document.querySelector('[name="csrf-token"]'))
        requests('register', obj)
        .then(response => setResponse(response))
            // console.log(response)
    }

    return (
        <form method="POST">
            <input onChange={(e) => setName(e.target.value)}name="name" type="text" placeholder="name" />
            <input onChange={(e) => setEmail(e.target.value)}name="email" type="email" placeholder="email" />
            <input onChange={(e) => setPassword(e.target.value)}name="password" type="password" placeholder="password"/>
            <button onClick={handleSubmit} type="submit">Submit</button>
        </form>
    )
}

export default Register;
