import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import "../../../sass/app.css";

const CheckoutPage = ({ checkoutData, setCheckoutData, myRef }) => {
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setPasswordsMatch(event.target.value === repeatPassword);
    };

    const handleRepeatPasswordChange = (event) => {
        setRepeatPassword(event.target.value);
        setPasswordsMatch(event.target.value === password);
    };

    return (
        <>
            <div className="formikContainer">
                <Formik
                    enableReinitialize
                    initialValues={checkoutData}
                    onSubmit={async (values) => {
                        setCheckoutData(values);
                    }}
                >
                    <Form className="formBox">
                        <div className="firstNameBox">
                            <label htmlFor="firstName">First Name</label>
                            <Field
                                id="firstName"
                                name="firstName"
                                placeholder="Jane"
                            />
                        </div>
                        <div className="lastNameBox">
                            <label htmlFor="lastName">Last Name</label>
                            <Field
                                id="lastName"
                                name="lastName"
                                placeholder="Doe"
                            />
                        </div>
                        <div className="emailBox">
                            <label htmlFor="email">Email</label>
                            <Field
                                id="email"
                                name="email"
                                placeholder="jane@acme.com"
                                type="email"
                            />
                        </div>
                        <div className="countryBox">
                            <label htmlFor="country">Country</label>
                            <Field
                                id="country"
                                name="country"
                                placeholder="Latvia"
                            />
                        </div>
                        <div className="cityTownBox">
                            <label htmlFor="city">City / town</label>
                            <Field
                                id="cityTown"
                                name="cityTown"
                                placeholder="Riga"
                            />
                        </div>
                        <div className="zipCodeBox">
                            <label htmlFor="zipCode">ZIP code</label>
                            <Field
                                id="zipCode"
                                name="zipCode"
                                placeholder="LV-1234"
                            />
                        </div>

                        <div className="phoneNumberBox">
                            <label htmlFor="phoneNumber">Phone number</label>
                            <Field
                                id="phoneNumber"
                                name="phoneNumber"
                                placeholder="+37121234567"
                            />
                        </div>

                        <div className="passwordBox">
                            <label htmlFor="password">Password</label>
                            <Field
                                id="password"
                                name="password"
                                type="password"
                            />
                        </div>

                        <div className="repeatPasswordBox">
                            <label htmlFor="repeatPassword">
                                Repeat password
                            </label>
                            <Field
                                id="repeatPassword"
                                name="repeatPassword"
                                type="password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="submitButton"
                            hidden
                            ref={myRef}
                        >
                            Submit
                        </button>
                    </Form>
                </Formik>
            </div>
        </>
    );
};

export default CheckoutPage;
