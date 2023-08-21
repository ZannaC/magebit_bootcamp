import React, { useState } from "react";

function Register () {
    const [name, setName] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            name: name
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
            .then(response => response.json())

            .then(response => setResponse(Boolean(response)))
            console.log(response)
    }

    return (
        <form method="POST">
            <input onChange={(e) => setName(e.target.value)}name="name" type="text" />
            <button onClick={handleSubmit} type="submit">Submit</button>
        </form>
    )
}

export default Register;
