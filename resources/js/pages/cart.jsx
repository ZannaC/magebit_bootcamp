import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../../sass/app.css";
import { Link, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useProduct } from "../ProductContext";
import Productcard from "../components/cart_product/card";
import Total from "../components/cart_product/total";
import ProductsRequest from "../utils/ProductsRequest";

function Cart() {
    // our product from our productContext
    const { products, setSubtotal } = useProduct();
    const [totalAmount, setTotalAmount] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
        ProductsRequest('get-cart-items', {userId: JSON.parse(localStorage.getItem('login'))?.userId})
        .then(response => setData(response.products));
    }, [])

    // useEffect(() => {
    //     let total = 0;
    //     products && products.forEach((product) => {
    //         total += Number(product.price) * Number(product.amount);
    //     });
    //     console.log (typeof total)
    //     setTotalAmount(total);
    // }, [products]);

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
                {data ? data.map((product) => (
                    <Productcard key={product.id} product={product} />
                ))
                :
                <div className="cart-empty">
                    <h3>Cart is empty</h3>
                </div>
                }
                <Total subtotal={totalAmount} />
                <Link to="checkout">
                    <button className="checkout">Checkout</button>
                </Link>
            </div>
        </div>
    );
}

export default Cart;
