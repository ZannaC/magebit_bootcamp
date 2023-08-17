import React, { useState } from "react";

function Productcard({product}) {
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
            <div className="product">
                <div className="product-image">
                    <img src="https://images.unsplash.com/photo-1523263889714-d345f8119047?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1076&q=80"></img>
                </div>
                <div className="product-details">
                    <div className="product-title">{product.name}</div>
                    <p className="product-description">
                    {product.description}
                    </p>
                </div>
                <div className="product-price">{product.price}</div>
                <div className="product-quantity">
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
                            {product.amount}{" "}
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
                <div className="product-removal">
                    <button className="remove-product">Remove</button>
                </div>
                <div className="product-line-price">84.99</div>
            </div>
        </>
    );
}

export default Productcard;
