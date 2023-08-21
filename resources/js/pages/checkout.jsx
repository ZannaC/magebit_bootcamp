import React from "react";
import ReactDOM from "react-dom";
import "../../sass/app.css";
import { Helmet } from "react-helmet";
import Countries from "../components/checkout/countries";
import PhoneNum from "../components/checkout/PhoneNum";

function Checkout() {
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
            <div className="container">
                <h2 className="flex-box">OnlineCourse</h2>
                <form className="flex-box">
                    <div className="biling_details">
                        <h3 className="billing_details">Billing details</h3>
                        <div className="customer_details">
                            <label htmlFor="first_name">
                                First name
                                <font color="red" required>
                                    {" "}
                                    *
                                </font>
                            </label>
                            <input
                                type="text"
                                name="first_name"
                                id="first_name"
                            />
                            <label htmlFor="last_name">
                                Last name
                                <font color="red" required>
                                    {" "}
                                    *
                                </font>
                            </label>
                            <input
                                type="text"
                                name="last_name"
                                id="last_name"
                            />
                            <label htmlFor="company_name">
                                Company name (optional)
                            </label>
                            <input
                                type="text"
                                name="company_name"
                                id="company_name"
                            />
                            <label htmlFor="countries">
                                Country
                                <font color="red" required>
                                    {" "}
                                    *
                                </font>
                            </label>
                            <Countries className="country_code" />
                            <label htmlFor="street_adress">
                                Street adress
                                <font color="red" required>
                                    {" "}
                                    *
                                </font>
                            </label>
                            <input
                                type="text"
                                name="street_adress"
                                id="street_adress"
                            />
                            <label htmlFor="town_city">
                                Town / city
                                <font color="red" required>
                                    {" "}
                                    *
                                </font>
                            </label>
                            <input
                                type="text"
                                name="town_city"
                                id="town_city"
                            />
                            <label htmlFor="zip_code">
                                ZIP code<font color="red"> *</font>
                            </label>
                            <input
                                type="text"
                                name="zip_code"
                                id="zip_code"
                                required
                            />
                            <label htmlFor="phone_number">
                                Phone<font color="red"> *</font>
                            </label>
                            <PhoneNum />
                            {/* <input
                                type="number"
                                name="phone_number"
                                id="phone_number"
                                required
                            /> */}
                            <label htmlFor="email_adress">
                                Email<font color="red"> *</font>
                            </label>
                            <input
                                type="email"
                                name="email_adress"
                                id="email_adress"
                                required
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
                                required
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
                                required
                            />
                            {!passwordsMatch && <p>Passwords do not match.</p>}
                        </div>
                    </div>
                </form>
                <div className="payment_method">
                    <h3 className="payment_method">Payment method</h3>
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
                    <button
                        type="submit"
                        form="form"
                        value="Place order"
                        className="place_order_btn"
                        disabled={!passwordsMatch}
                    >
                        PLACE ORDER
                    </button>
                    <br></br>
                </div>
            </div>
        </>
    );
}

export default Checkout;
