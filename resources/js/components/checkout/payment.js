import React, { useState } from "react";
import { Link } from "react-router-dom";

function PaymentPage({ isPaymentChecked, setIsPaymentChecked }) {
    return (
        <div>
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
                        checked={isPaymentChecked}
                        onChange={(e) => setIsPaymentChecked(e.target.checked)}
                    />
                    <label htmlFor="term_and_conditions">
                        {" "}
                        I have read and agree to the website{" "}
                        <a href="#">terms and conditions</a>
                        <font color="red"> *</font>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default PaymentPage;
