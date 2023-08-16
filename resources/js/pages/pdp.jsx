import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useProduct } from '../ProductContext';
import testImg from '../../img/pdp/testImg.png'

function Plp() {
    // amount of items
    const { updateAmount } = useProduct();
    const [productAmount, setProductAmount] = useState(1);

    const handleAmountIncrease = () => {
        setProductAmount(productAmount + 1);
        updateAmount(productAmount + 1);
    }

    const handleAmountDecrease = () => {
        if (productAmount <=1) {
            return;
        }
        setProductAmount(productAmount - 1);
        updateAmount(productAmount - 1);
    }

    return (
        <section className="descr">
            <img className="descr__img" src={testImg}></img>
            <div className="descr__block">
                <h1 className="descr__block-h1">The Dandy Chair</h1>
                <p className="descr__block-price">£250</p>
                 <div className="descr__block-inner-descr">
                    <h2 className="descr__block-inner-descr-h2">Description</h2>
                    <p className="descr__block-inner-descr-p">A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
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
                    <h2 className="descr__block-inner-dimensions-h2">Dimensions</h2>
                    <ul className="descr__block-inner-dimensions-list">
                        <li className="descr__block-inner-dimensions-list-item">
                            <span className="descr__block-inner-dimensions-list-item-header">
                                Height
                            </span>
                            <span className="descr__block-inner-dimensions-list-item-span">
                                110cm
                            </span>
                        </li>
                        <li className="descr__block-inner-dimensions-list-item">
                            <span className="descr__block-inner-dimensions-list-item-header">
                                Width
                            </span>
                            <span className="descr__block-inner-dimensions-list-item-span">
                                75cm
                            </span>
                        </li>
                        <li className="descr__block-inner-dimensions-list-item">
                            <span className="descr__block-inner-dimensions-list-item-header">
                                Depth
                            </span>
                            <span className="descr__block-inner-dimensions-list-item-span">
                                50cm
                            </span>
                        </li>
                    </ul>
                 </div>
                 <div className="descr__block-inner-buttons">
                    <div className="descr__block-inner-buttons-amount">
                        <p className="descr__block-inner-buttons-amount-p">Amount:</p>
                        <span className="descr__block-inner-buttons-amount-span">
                            <button className="descr__block-inner-buttons-amount-span-decrease" onClick={handleAmountDecrease}>
                                -
                            </button>
                            <span className="descr__block-inner-buttons-amount-span-amount">
                                {productAmount}
                            </span>
                            <button className="descr__block-inner-buttons-amount-span-increase" onClick={handleAmountIncrease}>
                                +
                            </button>
                        </span>
                    </div>
                    <Link className="descr__block-inner-buttons-add" to="/cart">
                        Перейти в корзину
                    </Link>
                 </div>
            </div>
        </section>
    )
}

export default Plp;
