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
                        <Link className="" to="/plp">PLP btn</Link>
                        <Link className="" to="/pdp">PLP btn</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
