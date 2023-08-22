import React, { useState } from "react";

function Register () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            name: name,
            email: email,
            password: password
        }
        // console.log(document.querySelector('[name="csrf-token"]'))
        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify(obj)
            })
            .then(response => console.log(response))

            .then(response => setResponse(Boolean(response)))
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
