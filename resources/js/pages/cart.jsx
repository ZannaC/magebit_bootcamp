import React from 'react';
import ReactDOM from 'react-dom';
import '../../sass/app.css';
import { Link, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Cart() {
    return (
        <div className="container">
            <Helmet>
                <title>Shopping cart</title>
            </Helmet>
            {/* <h2 className='cart'>Your shopping cart</h2>
            <div className="product_list">
                <div className="product_list product">
                    <h2>Product</h2>
                </div>
                <div className="product_list quantity">
                    <h2>Quantity</h2>
                </div>
                <div className="product_list total">
                    <h2>Total</h2>
                </div>
            </div> */}

            <h2 className="your_shopping_cart">
                Your shopping cart
            </h2>

            <div class="shopping-cart">

            <div class="column-labels">
                <label class="product-image">Image</label>
                <label class="product-details">Product</label>
                <label class="product-price">Price</label>
                <label class="product-quantity">Quantity</label>
                <label class="product-removal">Remove</label>
                <label class="product-line-price">Total</label>
            </div>

            <div class="product">
                <div class="product-image">
                <img src="https://images.unsplash.com/photo-1523263889714-d345f8119047?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1076&q=80"></img>
                </div>
                <div class="product-details">
                <div class="product-title">Graystone vase</div>
                <p class="product-description">A timeless ceramic vase with a tri color grey glaze.</p>
                </div>
                <div class="product-price">84.99</div>
                <div class="product-quantity">
                <input type="number" value="1" min="1" />
                </div>
                <div class="product-removal">
                <button class="remove-product">
                    Remove
                </button>
                </div>
                <div class="product-line-price">84.99</div>
            </div>

            <div class="product">
                <div class="product-image">
                <img src="https://images.unsplash.com/photo-1523263889714-d345f8119047?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1076&q=80"></img>
                </div>
                <div class="product-details">
                <div class="product-title">Basic white vase</div>
                <p class="product-description">Beautiful and simple this is one for the classics.</p>
                </div>
                <div class="product-price">74.99</div>
                <div class="product-quantity">
                <input type="number" value="1" min="1" />
                </div>
                <div class="product-removal">
                <button class="remove-product">
                    Remove
                </button>
                </div>
                <div class="product-line-price">74.99</div>
            </div>

            <div class="totals">
                <div class="totals-item">
                <label>Subtotal</label>
                <div class="totals-value" id="cart-subtotal">159.98</div>
                </div>
                <div class="totals-item">
                <label>Tax (5%)</label>
                <div class="totals-value" id="cart-tax">7.99</div>
                </div>
                <div class="totals-item">
                <label>Shipping</label>
                <div class="totals-value" id="cart-shipping">15.00</div>
                </div>
                <div class="totals-item totals-item-total">
                <label>Grand Total</label>
                <div class="totals-value" id="cart-total">182.97</div>
                </div>
            </div>
                <Link to="checkout"><button class="checkout">Checkout</button></Link>
            </div>
        </div>
    );
}

export default Cart;
