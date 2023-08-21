import React from "react";

function Register () {
    return (
        <form method="POST" action="/api/register">
            <input type="text" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Register;
