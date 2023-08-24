import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useProduct } from "../ProductContext";
import { useLocation } from "react-router-dom";
import CollectionSection from "../components/view_collection/CollectionSection";
import ProductsRequest from "../utils/ProductsRequest";

function Pdp() {
    // login
    const loggedIn = localStorage.getItem("login");
    // location with our product
    const location = useLocation();
    const { product } = location.state;
    // subtotal and function from context
    const { subtotal, setSubtotal } = useProduct();
    // amount of items
    const [productAmount, setProductAmount] = useState(1);
    // total price of item
    const [totalPrice, setTotalPrice] = useState(product.price);

    const handleAmountIncrease = () => {
        setProductAmount(productAmount + 1);
        setTotalPrice(totalPrice + product.price);
    };

    const handleAmountDecrease = () => {
        if (productAmount <= 1) {
            return;
        }
        setProductAmount(productAmount - 1);
        setTotalPrice(totalPrice - product.price);
    };
    // update products

    const setProducts = () => {
        const userId = JSON.parse(localStorage.getItem("login"))?.userId;
        const obj = {
            productId: product.id,
            userId: userId,
            quantity: productAmount,
        };
        ProductsRequest("cart-update", obj).then((res) => {
            console.log(res);
        });
        setSubtotal(subtotal + product.price * productAmount);
    };

    // SECTIONS

    const descrSection = (
        <section className="descr">
            <div className="descr__inner">
                <img className="descr__img" src={product.image}></img>
                <div className="descr__block">
                    <h1 className="descr__block-h1">{product.name}</h1>
                    <p className="descr__block-price">{"£" + product.price}</p>
                    <div className="descr__block-inner-descr">
                        <h2 className="descr__block-inner-descr-h2">
                            Description
                        </h2>
                        <p className="descr__block-inner-descr-p">
                            {product.description}
                        </p>
                        <ul className="descr__block-inner-descr-list">
                            <li className="descr__block-inner-descr-list-item">
                                Premium material
                            </li>
                            <li className="descr__block-inner-descr-list-item">
                                Handmade upholstery
                            </li>
                            <li className="descr__block-inner-descr-list-item">
                                Quality timeless classic
                            </li>
                        </ul>
                    </div>
                    <div className="descr__block-inner-dimensions">
                        <h2 className="descr__block-inner-dimensions-h2">
                            Dimensions
                        </h2>
                        <ul className="descr__block-inner-dimensions-list">
                            <li className="descr__block-inner-dimensions-list-item">
                                <span className="descr__block-inner-dimensions-list-item-header">
                                    Height
                                </span>
                                <span className="descr__block-inner-dimensions-list-item-span">
                                    {product.height}
                                </span>
                            </li>
                            <li className="descr__block-inner-dimensions-list-item">
                                <span className="descr__block-inner-dimensions-list-item-header">
                                    Width
                                </span>
                                <span className="descr__block-inner-dimensions-list-item-span">
                                    {product.width}
                                </span>
                            </li>
                            <li className="descr__block-inner-dimensions-list-item">
                                <span className="descr__block-inner-dimensions-list-item-header">
                                    Depth
                                </span>
                                <span className="descr__block-inner-dimensions-list-item-span">
                                    {product.depth}
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="descr__block-inner-buttons">
                        <div className="descr__block-inner-buttons-amount">
                            <p className="descr__block-inner-buttons-amount-p">
                                Amount:
                            </p>
                            <span className="descr__block-inner-buttons-amount-span">
                                <button
                                    className="descr__block-inner-buttons-amount-span-decrease"
                                    onClick={handleAmountDecrease}
                                >
                                    -
                                </button>
                                <span className="descr__block-inner-buttons-amount-span-amount">
                                    {productAmount}
                                </span>
                                <button
                                    className="descr__block-inner-buttons-amount-span-increase"
                                    onClick={handleAmountIncrease}
                                >
                                    +
                                </button>
                            </span>
                        </div>
                        {loggedIn ? (
                            <Link
                                onClick={setProducts}
                                className="descr__block-inner-buttons-add"
                                to="/cart"
                            >
                                Add to cart
                            </Link>
                        ) : (
                            <Link
                                onClick={setProducts}
                                className="descr__block-inner-buttons-add"
                                to="/login"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );

    const collectionSection = (
        <>
            <div className="container collection__container">
                <h2 className="collection__h2">You might also like</h2>
            </div>
            <CollectionSection
                imgClass={"collection__list-item-img"}
                nameClass={"collection__list-item-h4"}
                priceClass={"collection__list-item-p"}
                howManyItems={4}
            />
        </>
    );

    const differentSection = <section className="different"></section>;

    return (
        <>
            {descrSection}
            {collectionSection}
        </>
    );
}

export default Pdp;
