import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../sass/app.css";

function OrderCompleted() {
    return (
        <div className="ordercompleted">
            <h1>Thank you!</h1>
            <p>
                Thank you for choosing Avion! Your order has been successfully
                processed and completed. We're delighted to have served you.
            </p>
            <button type="submit" className="place_order_btn">
                <Link to="/personal">View order</Link>
            </button>
        </div>
    );
}

export default OrderCompleted;
