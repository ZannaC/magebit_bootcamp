import React, { useState, useEffect } from "react";
import "../../sass/app.css";
import PaymentPage from "../components/checkout/payment";
import CheckoutPage from "../components/checkout/checkoutPage";

function Checkout() {
    // const [formData, setFormData] = useState({
    //     f_name: "",
    //     l_name: "",
    //     email: "",
    //     country: "",
    //     street_address: "",
    //     town_city: "",
    //     zip_code: "",
    //     phone: "",
    //     email: "",
    //     password: "",
    //     repeat_password: "",
    // });

    // const [formErrors, setFormErrors] = useState({
    //     f_name: false,
    //     l_name: false,
    //     email: false,
    //     country: false,
    //     street_address: false,
    //     town_city: false,
    //     zip_code: false,
    //     phone: false,
    //     email: false,
    //     password: false,
    //     repeat_password: false,
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     console.log(value);
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [name]: value,
    //     }));
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const newFormErrors = {};
    //     const requiredFields = [
    //         "f_name",
    //         "l_name",
    //         "country",
    //         "street_address",
    //         "town_city",
    //         "zip_code",
    //         "phone",
    //         "email",
    //         "password",
    //         "repeat_password",
    //     ];

    //     let isValid = true;

    //     requiredFields.forEach((field) => {
    //         if (!formData[field]) {
    //             newFormErrors[field] = true;
    //             isValid = false;
    //         }
    //     });

    //     setFormErrors(newFormErrors);

    //     if (isValid) {
    //         console.log("Form submitted", formData);
    //     }
    // };

    return (
        <div className="myContainer">
            <CheckoutPage />
            <PaymentPage />
        </div>
    );
}

export default Checkout;

{
    /* <Payment />
<br></br>

{formData.l_name && formData.f_name ? (
<h2>Order</h2>
) : (
<h4>Cart is empty</h4>
)} */
}

{
    /* {newFormErrors ? (
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
)} */
}
{
    /*
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
</button> */
}
{
    /* <br></br>
</div>
</div>
</> */
}
