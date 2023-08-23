import React, { useState, useEffect } from "react";
import "../../sass/app.css";
import Countries from "../components/checkout/countries";
import PhoneNum from "../components/checkout/PhoneNum";
// import Payment from "../components/checkout/payment";

function Checkout() {
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [validationState, setValidationState] = useState(false);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setPasswordsMatch(event.target.value === repeatPassword);
    };

    const handleRepeatPasswordChange = (event) => {
        setRepeatPassword(event.target.value);
        setPasswordsMatch(event.target.value === password);
    };

    const [formData, setFormData] = useState({
        f_name: "",
        l_name: "",
        email: "",
        country: "",
        street_address: "",
        town_city: "",
        zip_code: "",
        phone: "",
        email: "",
        password: "",
        repeat_password: "",
    });

    const [formErrors, setFormErrors] = useState({
        f_name: false,
        l_name: false,
        email: false,
        country: false,
        street_address: false,
        town_city: false,
        zip_code: false,
        phone: false,
        email: false,
        password: false,
        repeat_password: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(value);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;

        const newFormErrors = {};

        if (!formData.f_name) {
            newFormErrors.f_name = true;
            isValid = false;
        }
        if (!formData.l_name) {
            newFormErrors.l_name = true;
            isValid = false;
        }
        if (!formData.country) {
            newFormErrors.country = true;
            isValid = false;
        }
        if (!formData.street_address) {
            newFormErrors.street_address = true;
            isValid = false;
        }
        if (!formData.town_city) {
            newFormErrors.town_city = true;
            isValid = false;
        }
        if (!formData.zip_code) {
            newFormErrors.zip_code = true;
            isValid = false;
        }
        if (!formData.phone) {
            newFormErrors.phone = true;
            isValid = false;
        }
        if (!formData.email) {
            newFormErrors.email = true;
            isValid = false;
        }
        if (!formData.password) {
            newFormErrors.password = true;
            isValid = false;
        }
        if (!formData.repeat_password) {
            newFormErrors.repeat_password = true;
            isValid = false;
        }

        setFormErrors(newFormErrors);

        if (isValid) {
            console.log("Form submited", formData);
        }
    };

    // useEffect(() => {
    //     if (password !== repeatPassword) {
    //         setPasswordsMatch(false);
    //     } else {
    //         setPasswordsMatch(true);
    //     }
    // }, [password, repeatPassword]);

    return (
        <>
            <div className="container">
                <h2 className="flex-box">OnlineCourse</h2>
                <form className="flex-box" onSubmit={handleSubmit}>
                    <div className="biling_details">
                        <h3 className="billing_details">Billing details</h3>
                        <div className="customer_details">
                            <label htmlFor="f_name">
                                First name
                                <font color="red"> *</font>
                            </label>
                            <input
                                type="text"
                                name="f_name"
                                id="f_name"
                                required
                                onChange={handleChange}
                                style={{
                                    borderColor: formErrors.f_name
                                        ? "red"
                                        : "initial",
                                }}
                            />
                            <label htmlFor="l_name">
                                Last name
                                <font color="red"> *</font>
                            </label>
                            <input
                                type="text"
                                name="l_name"
                                id="l_name"
                                required
                                onChange={handleChange}
                                style={{
                                    borderColor: formErrors.l_name
                                        ? "red"
                                        : "initial",
                                }}
                            />
                            {/* <label htmlFor="company_name">
                                Company name (optional)
                            </label>
                            <input
                                type="text"
                                name="company_name"
                                id="company_name"
                            /> */}
                            <label htmlFor="countries">
                                Country
                                <font color="red"> *</font>
                            </label>
                            <Countries className="country" />
                            <label htmlFor="street_adress">
                                Street adress
                                <font color="red"> *</font>
                            </label>
                            <input
                                type="text"
                                name="street_adress"
                                required
                                onChange={handleChange}
                                style={{
                                    borderColor: formErrors.street_address
                                        ? "red"
                                        : "initial",
                                }}
                            />
                            <label htmlFor="town_city">
                                Town / city
                                <font color="red"> *</font>
                            </label>
                            <input
                                type="text"
                                name="town_city"
                                id="town_city"
                                required
                                onChange={handleChange}
                                style={{
                                    borderColor: formErrors.town_city
                                        ? "red"
                                        : "initial",
                                }}
                            />
                            <label htmlFor="zip_code">
                                ZIP code<font color="red"> *</font>
                            </label>
                            <input
                                type="text"
                                name="zip_code"
                                id="zip_code"
                                required
                                onChange={handleChange}
                                style={{
                                    borderColor: formErrors.zip_code
                                        ? "red"
                                        : "initial",
                                }}
                            />
                            <label htmlFor="phone_number">
                                Phone<font color="red"> *</font>
                            </label>
                            <PhoneNum required />
                            <label htmlFor="email">
                                Email<font color="red"> *</font>
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                onChange={handleChange}
                                style={{
                                    borderColor: formErrors.email
                                        ? "red"
                                        : "initial",
                                }}
                            />
                            <label htmlFor="password">
                                Password<font color="red"> *</font>
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                placeholder="Enter password"
                                required
                                style={{
                                    borderColor: formErrors.email
                                        ? "red"
                                        : "initial",
                                }}
                            />
                            <label htmlFor="password_repeat">
                                Repeat Password<font color="red"> *</font>
                            </label>
                            <input
                                type="password"
                                name="password_repeat"
                                id="password_repeat"
                                value={repeatPassword}
                                onChange={handleRepeatPasswordChange}
                                placeholder="Repeat password"
                                required
                                style={{
                                    borderColor: formErrors.email
                                        ? "red"
                                        : "initial",
                                }}
                            />
                            <div></div>
                            {!passwordsMatch && (
                                <p className="pass_dont_match">
                                    Passwords do not match!
                                </p>
                            )}
                        </div>
                    </div>
                </form>
                <div className="payment_method">
                    <h3 className="payment_method">Payment method</h3>
                    <Payment />
                    <h4 className="payment_method_text">
                        Your personal data will be used to process your order,
                        support your experience throughout this website, and for
                        other purposes described in our{" "}
                        <a href="#">privecy policy.</a>
                    </h4>
                    <div className="terms_and_conditions">
                        <input
                            type="checkbox"
                            name="term_and_conditions"
                            id="term_and_conditions"
                        />
                        <label htmlFor="term_and_conditions">
                            {" "}
                            I have read and agree to the website{" "}
                            <a href="#">terms and conditions</a>
                            <font color="red"> *</font>
                        </label>
                    </div>
                    <br></br>

                    {formData.l_name && formData.f_name && formData.email ? (
                        <h2>Order</h2>
                    ) : (
                        <h4>Cart is empty</h4>
                    )}

                    {/* {newFormErrors ? (
                        <>
                            <button
                                type="submit"
                                form="form"
                                value="Place order"
                                className="place_order_btn"
                            >
                                PLACE ORDER
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                type="submit"
                                form="form"
                                value="Place order"
                                className="place_order_btn"
                                disabled
                            >
                                PLACE ORDER
                            </button>
                        </>
                    )} */}
                    {/*
                    <button
                        type="submit"
                        form="form"
                        value="Place order"
                        className="place_order_btn"
                        disabled={
                            // !passwordsMatch &&
                            !formData.f_name &&
                            !formData.l_name &&
                            !formData.country &&
                            !formData.street_address &&
                            !formData.town_city &&
                            !formData.zip_code &&
                            !formData.phone &&
                            !formData.email &&
                            !formData.password &&
                            !formData.password_repeat
                        }
                    >
                        PLACE ORDER
                    </button> */}
                    <br></br>
                </div>
            </div>
        </>
    );
}

export default Checkout;
