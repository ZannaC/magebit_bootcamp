import React from "react";
import { BrowserRouter as Link } from 'react-router-dom';

function Header () {
    return (
        <>
         <h1 classname="header">Header</h1>
         <nav>
         <ul>
            <li>
                <Link to="/"></Link>
            </li>
            <li>
                <Link to="/"></Link>
            </li>
            <li>
                <Link to="/"></Link>
            </li>
         </ul>
         </nav>
        </>
    )
}

export default Header;
