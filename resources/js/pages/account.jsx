import React, { useState } from "react";
import "../../sass/app.scss";
import { Link } from "react-router-dom";

function Account() {
    const [name, setName] = useState("Ella");
    const [surname, setSurname] = useState("Walsh");
    const [email, setEmail] = useState("ella@example.com");
    const [address, setAddress] = useState("Abbey Road 45, London, UK");

    const [existingPassword, setExistingPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // const [newName, setNewName] = useState("");
    // const [newSurname, setNewSurname] = useState("");
    // const [newEmail, setNewEmail] = useState("");
    // const [newAddress, setNewAddress] = useState("");

    const [nameEditing, setNameEditing] = useState(false);
    const [surnameEditing, setSurnameEditing] = useState(false);
    const [emailEditing, setEmailEditing] = useState(false);
    const [addressEditing, setAddressEditing] = useState(false);
    const [passwordEditing, setPasswordEditing] = useState(false);
    const [newPasswordEditing, setNewPasswordEditing] = useState(false);
    const [confirmPasswordEditing, setConfirmPasswordEditing] = useState(false);
    const [existingPasswordError, setExistingPasswordError] = useState("");
    const [newPasswordError, setNewPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleNameClick = () => {
        setNameEditing(true);
    };

    const handleSurnameClick = () => {
        setSurnameEditing(true);
    };

    const handleEmailClick = () => {
        setEmailEditing(true);
    };

    const handleAddressClick = () => {
        setAddressEditing(true);
    };

    const handlePasswordClick = () => {
        setPasswordEditing(true);
    };

    const handleNewPasswordClick = () => {
        setNewPasswordEditing(true);
    };

    const handleConfirmPasswordClick = () => {
        setConfirmPasswordEditing(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setExistingPasswordError("");
        setNewPasswordError("");
        setConfirmPasswordError("");

        // const editingProfileFields =
        //     nameEditing || surnameEditing || emailEditing || addressEditing;

        // if (editingProfileFields) {
        //     if (
        //         newName !== name ||
        //         newSurname !== surname ||
        //         newEmail !== email ||
        //         newAddress !== address
        //     ) {
        //     }

        //     setNameEditing(false);
        //     setSurnameEditing(false);
        //     setEmailEditing(false);
        //     setAddressEditing(false);
        // }

        const editingPasswordFields =
            passwordEditing || newPasswordEditing || confirmPasswordEditing;

        if (editingPasswordFields) {
            if (existingPassword !== "333") {
                setExistingPasswordError("Existing password doesn't match.");
            }

            if (newPassword === existingPassword) {
                setNewPasswordError(
                    "The new password can't be the same as the previous one"
                );
            }

            if (newPassword !== confirmPassword) {
                setConfirmPasswordError(
                    "New password and confirm password don't match."
                );
            }
        }

        if (
            !existingPasswordError &&
            !newPasswordError &&
            !confirmPasswordError
        ) {
            console.log("Password:", existingPassword);
            console.log("New Password:", newPassword);
            console.log("Confirmed Password:", confirmPassword);

            setPasswordEditing(false);
            setNewPasswordEditing(false);
            setConfirmPasswordEditing(false);
            setSubmitted(true);
        }
    };

    const handleCancel = () => {
        // Reset fields to their initial values
        setName("Kate");
        setSurname("Parker");
        setEmail("kate@example.com");
        setAddress("Abbey Road 45, London, UK");
    };

    return (
        <div className="account__container">
            <section className="account__container-title">
                <h2>My account</h2>
                <h2>Welcome, {submitted ? name : "Kate"}! </h2>
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
                <form className="user__form" onSubmit={handleSubmit}>
                    <section className="user__form-profile">
                        First Name
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onClick={handleNameClick}
                            readOnly={!nameEditing}
                            required
                        />
                        Last Name
                        <input
                            type="text"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            onClick={handleSurnameClick}
                            readOnly={!surnameEditing}
                            required
                        />
                        Email
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onClick={handleEmailClick}
                            readOnly={!emailEditing}
                            required
                        />
                        Address
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            onClick={handleAddressClick}
                            readOnly={!addressEditing}
                            required
                        />
                    </section>
                    <section className="user__form-password">
                        <h3 className="user__form-password-title">
                            Password Changes
                        </h3>
                        <input
                            type="password"
                            placeholder="Current Password"
                            value={existingPassword}
                            onChange={(e) =>
                                setExistingPassword(e.target.value)
                            }
                            onClick={handlePasswordClick}
                            readOnly={!passwordEditing}
                        />
                        <input
                            type="password"
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            onClick={handleNewPasswordClick}
                            readOnly={!newPasswordEditing}
                        />

                        <input
                            type="password"
                            placeholder="Confirm New Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            onClick={handleConfirmPasswordClick}
                            readOnly={!confirmPasswordEditing}
                        />
                        {existingPasswordError && (
                            <p className="error">{existingPasswordError}</p>
                        )}
                        {newPasswordError && (
                            <p className="error">{newPasswordError}</p>
                        )}
                        {confirmPasswordError && (
                            <p className="error">{confirmPasswordError}</p>
                        )}
                    </section>
                    <div className="user__form-button-block">
                        <button
                            className="cancel"
                            type="button"
                            onClick={handleCancel}
                        >
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
