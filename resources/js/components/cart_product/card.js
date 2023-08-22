import React, { useState, useEffect } from "react";
import { useProduct } from "../../ProductContext";

function Productcard({product}) {
    const { subtotal, setSubtotal } = useProduct();
    console.log (product)
    // quantity
    const [amount, setAmount] = useState(product.amount);
    // total price
    useEffect(() => {
        setSubtotal(subtotal + product.price * amount);
    }, [amount]);

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
                    <img src={product.image}></img>
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
                <div className="product-removal">
                    <button className="remove-product">Remove</button>
                </div>
                <div className="product-line-price">{product.price * amount}</div>
            </div>
        </>
    );
}

export default Productcard;
