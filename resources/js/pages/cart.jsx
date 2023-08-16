import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../../sass/app.css";
import { Link, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Productcard from "../components/cart_product/card";
import Total from "../components/cart_product/total";

function Cart({}) {
    return (
        <div className="container">
            <Helmet>
                <title>Shopping cart</title>
            </Helmet>
            <h2 className="your_shopping_cart">Your shopping cart</h2>
            <div class="shopping-cart">
                <div class="column-labels">
                    <label class="product-image">Image</label>
                    <label class="product-details">Product</label>
                    <label class="product-price">Price</label>
                    <label class="product-quantity">Quantity</label>
                    <label class="product-removal">Remove</label>
                    <label class="product-line-price">Total</label>
                </div>
                <Productcard></Productcard>
                <Productcard></Productcard>
                <Total></Total>
                <Link to="checkout">
                    <button class="checkout">Checkout</button>
                </Link>
            </div>
        </div>
    );
}

export default Cart;
