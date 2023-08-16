import React, { useState } from "react";

function Productcard() {
    const [amount, setAmount] = useState(1);

    const handleAmountIncrease = () => {
        setAmount(amount + 1);
    };

    const handleAmountDecrease = () => {
        if (amount <= 1) {
            return;
        }
        setAmount(amount - 1);
    };

    return (
        <>
            <div class="product">
                <div class="product-image">
                    <img src="https://images.unsplash.com/photo-1523263889714-d345f8119047?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1076&q=80"></img>
                </div>
                <div class="product-details">
                    <div class="product-title">Graystone vase</div>
                    <p class="product-description">
                        A timeless ceramic vase with a tri color grey glaze.
                    </p>
                </div>
                <div class="product-price">84.99</div>
                <div class="product-quantity">
                    <span className="descr__block-inner-buttons-amount-span">
                        <button
                            className="descr__block-inner-buttons-amount-span-decrease"
                            onClick={handleAmountDecrease}
                        >
                            {" "}
                            -{" "}
                        </button>
                        <span className="descr__block-inner-buttons-amount-span-amount">
                            {" "}
                            {amount}{" "}
                        </span>
                        <button
                            className="descr__block-inner-buttons-amount-span-increase"
                            onClick={handleAmountIncrease}
                        >
                            {" "}
                            +{" "}
                        </button>
                    </span>
                </div>
                <div class="product-removal">
                    <button class="remove-product">Remove</button>
                </div>
                <div class="product-line-price">84.99</div>
            </div>
        </>
    );
}

export default Productcard;
