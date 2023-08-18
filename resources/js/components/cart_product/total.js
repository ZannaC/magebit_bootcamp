import React, { useState } from "react";

function Total() {
    return (
        <div className="totals">
            <div className="totals-item">
                <label>Subtotal</label>
                <div className="totals-value" id="cart-subtotal">
                    159.98
                </div>
            </div>
            <div className="totals-item">
                <label>Tax (5%)</label>
                <div className="totals-value" id="cart-tax">
                    7.99
                </div>
            </div>
            <div className="totals-item">
                <label>Shipping</label>
                <div className="totals-value" id="cart-shipping">
                    15.00
                </div>
            </div>
            <div className="totals-item totals-item-total">
                <label>Grand Total</label>
                <div className="totals-value" id="cart-total">
                    182.97
                </div>
            </div>
        </div>
    );
}

export default Total;
