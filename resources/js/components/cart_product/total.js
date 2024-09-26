import React, { useState } from "react";
import { useProduct } from "../../ProductContext";

function Total({ subtotal }) {
    // const { subtotal } = useProduct();
    return (
        <div className="totals">
            <div className="totals-item">
                <label>Subtotal</label>
                <div className="totals-value" id="cart-subtotal">
                    {subtotal}
                </div>
            </div>
            <div className="totals-item">
                <label>Tax (5%)</label>
                <div className="totals-value" id="cart-tax">
                    {subtotal * 0.05}
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
                    {subtotal + subtotal * 0.05 + 15}
                </div>
            </div>
        </div>
    );
}

export default Total;
