import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../../sass/app.css";
import { Link, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useProduct } from "../ProductContext";
import Productcard from "../components/cart_product/card";
import Total from "../components/cart_product/total";

function Cart() {
    // our products from our productContext
    const { products } = useProduct();

    return (
        <div className="container">
            <Helmet>
                <title>Shopping cart</title>
            </Helmet>
            <h2 className="your_shopping_cart">Your shopping cart</h2>
            <div className="shopping-cart">
                <div className="column-labels">
                    <label className="product-image">Image</label>
                    <label className="product-details">Product</label>
                    <label className="product-price">Price</label>
                    <label className="product-quantity">Quantity</label>
                    <label className="product-removal">Remove</label>
                    <label className="product-line-price">Total</label>
                </div>
                {products ? (
                    products.map((product) => (
                        <Productcard key={product.id} product={product} />
                    ))
                ) : (
                    <div className="cart-empty">
                        <h3>Cart is empty</h3>
                    </div>
                )}

                <Link to="checkout">
                    <button className="checkout">Checkout</button>
                </Link>
            </div>
        </div>
    );
}

export default Cart;
