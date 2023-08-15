import React from 'react';
import ReactDOM from 'react-dom';
import '../../sass/app.css';
import { Link, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Cart() {
    return (
        <div className="cart-wrapper">
            <Helmet>
                <title>Shopping cart</title>
            </Helmet>
            <h2 className='cart'>Your shopping cart</h2>
            <h3>Product</h3>
            <Link to="checkout">Checkout</Link>

        </div>
    );
}

export default Cart;
