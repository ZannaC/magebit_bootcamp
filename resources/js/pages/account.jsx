import React from "react";
import "../../sass/app.scss";
import { Link } from "react-router-dom";

function Account() {
    return (
        <div className="account__container">
            <section className="account__container-title">
                <h2>My account</h2>
                <h2>Welcome! </h2>
            </section>

            <section className="account__container-list">
                <h3 className="account__container-list-title">
                    Manage My Account
                </h3>
                <ul className="account__container-list-links">
                    <li className="account__container-list-links-active">
                        My Profile
                    </li>
                    <li>
                        <Link to="/register">My Payment</Link>
                    </li>
                </ul>
                <h3 className="account__container-list-title">My orders</h3>
                <ul className="account__container-list-links">
                    <li>
                        <Link to="/login">My returns</Link>
                    </li>
                    <li>
                        <Link to="/register">My Cancellations</Link>
                    </li>
                </ul>
                <h3 className="account__container-list-title">
                    My Wishlist<Link to="/login"></Link>
                </h3>
            </section>
            <section className="account__form">
                <div>
                    <h3 className="account__form-title">Edit Your Profile</h3>
                </div>
                <form className="user__form">
                    <section className="user__form-profile">
                        First Name
                        <input
                            name="name"
                            type="name"
                            placeholder="Md"
                            required
                        />
                        Last Name
                        <input
                            name="last name"
                            type="name"
                            placeholder="Rimel"
                            required
                        />
                        Email
                        <input
                            name="last name"
                            type="name"
                            placeholder="rime111@gmail.com"
                            required
                        />
                        Address
                        <input
                            name="last name"
                            type="name"
                            placeholder="Kingston, 5236, UK"
                            required
                        />
                    </section>
                    <section className="user__form-password">
                        <h3 className="user__form-password-title">
                            Password Changes
                        </h3>
                        <input
                            name="name"
                            type="name"
                            placeholder="Current Password"
                            required
                        />
                        <input
                            name="last name"
                            type="name"
                            placeholder="New Password"
                            required
                        />
                        <input
                            name="last name"
                            type="name"
                            placeholder="Confirm New Password"
                            required
                        />
                    </section>
                    <div className="user__form-button-block">
                        <button className="cancel" type="submit">
                            Cancel
                        </button>
                        <button type="submit">Save Changes</button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Account;
