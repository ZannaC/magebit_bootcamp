import React, { useState, useEffect } from "react";
import ProductsRequest from "../../utils/ProductsRequest";
// import { debounce } from "lodash";

function Productcard({product, setSubTotal}) {
    const userId = JSON.parse(localStorage.getItem('login'))?.userId;
    const productId = product.id;
    // quantity
    const [clickAmount, setClickAmount] = useState(0);
    // product quantity
    const [productQuantity, setProductQuantity] = useState(product.quantity);

    function debounce(func, timeout = 300){
        let timer;
        return (...args) => {
          clearTimeout(timer);
          timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
      }

    const debouncedUpdateCart = () => {
        const obj = {
            productId: productId,
            quantity: clickAmount,
            userId: userId,
        };
        ProductsRequest('cart-update', obj)
        .then((res) => {
            setSubTotal(res.subTotal);
            setProductQuantity(res.productQuantity);
        })
    }; // 300 milliseconds debounce delay

    useEffect(() => {
        if (clickAmount !== 0) {
            const delayedUpdateCart = debounce(debouncedUpdateCart, 50);
            delayedUpdateCart(); // Вызываем созданную задержанную функцию сразу
            setClickAmount(0); // Очищаем количество кликов на 0
            return delayedUpdateCart.cancel; // Возвращаем функцию для отмены таймера при размонтировании
        }
    }, [clickAmount]);

    const handleAmountIncrease = () => {
        setClickAmount(clickAmount + 1);
    };

    const handleAmountDecrease = () => {
        if (productQuantity <= 1) {
            return;
        }
        setClickAmount(clickAmount - 1);
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
                            {productQuantity}{" "}
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
                <div className="product-line-price">{productQuantity * product.price}</div>
            </div>
        </>
    );
}

export default Productcard;
