import React, { useState, useEffect } from "react";
import ProductsRequest from "../utils/ProductsRequest";
import { useProduct } from "../ProductContext";

function Register () {
    const { setLogin } = useProduct();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [response, setResponse] = useState("");

    useEffect(() => {
        response.userReg === 'success' && setLogin(response.userId);
    }, [response])

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            name: name,
            email: email,
            password: password
        }
        // console.log(document.querySelector('[name="csrf-token"]'))
        ProductsRequest('register', obj)
        .then(response => setResponse(response));
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
