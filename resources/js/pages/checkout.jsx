import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../sass/app.css";
import PaymentPage from "../components/checkout/payment";
import CheckoutPage from "../components/checkout/checkoutPage";
import ProductsRequest from "../utils/ProductsRequest";

export default function Checkout() {
    const [isPaymentChecked, setIsPaymentChecked] = useState(false);
    const [checkoutData, setCheckoutData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        cityTown: "",
        zipCode: "",
        phoneNumber: "",
        password: "",
        repeatPassword: "",
    });

    const navigate = useNavigate();
    const [isClicked, setIsClicked] = useState(false);

    const myRef = useRef(0);

    const handleClick = () => {
        myRef.current.click();
        setIsClicked(true);
    };

    useEffect(() => {
        if (!isClicked) return;
        const userId = JSON.parse(localStorage.getItem("login"))?.userId;
        ProductsRequest("checkout-save", {
            userId: userId,
            checkoutData: checkoutData,
        }).then((response) => {
            setIsClicked(false);
            if (response.code == 201) {
                navigate("/ordercompleted");
            }
        });
    }, [isClicked]);

    return (
        <div className="myContainer">
            <CheckoutPage
                checkoutData={checkoutData}
                setCheckoutData={setCheckoutData}
                myRef={myRef}
            />
            <PaymentPage
                isPaymentChecked={isPaymentChecked}
                setIsPaymentChecked={setIsPaymentChecked}
            />
            <button
                type="submit"
                form="form"
                value="Place order"
                className="place_order_btn"
                onClick={handleClick}
                disabled={!isPaymentChecked}
            >
                PLACE ORDER
            </button>
        </div>
    );
}
