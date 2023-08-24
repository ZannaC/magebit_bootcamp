import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../sass/app.css";

function OrderCompleted() {
    return (
        <div className="ordercompleted">
            <h1>Thank you!</h1>
            <p>
                Thank you for choosing Avion!
                <br />
                <br />
                Your order has been successfully processed and completed.
                <br />
                <br />
                We're delighted to have served you.
            </p>
        </div>
    );
}

export default OrderCompleted;
