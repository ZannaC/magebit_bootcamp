import React from 'react';
import '../../sass/app.css';

function Login() {
    return (
        <section className="login__container">
            <div className="login">
                <h2>Log in to Avion</h2>
                <form className="login__form" action="" method="post">
                    <input type="text" placeholder="username" required />
                    <input type="password" placeholder="password" required />
                    <button type="submit">Log in</button>
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
