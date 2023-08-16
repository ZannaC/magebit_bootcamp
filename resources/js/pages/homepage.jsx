import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import '../../sass/app.css';

function Homepage() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <Link to="/cart">Cart</Link>
                        <div className="card-header">Example Component</div>
                        <div className="header">I'm an example component!</div>
                        <div className="h1">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
