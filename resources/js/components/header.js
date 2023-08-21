import React from "react";
import { Link } from "react-router-dom";
import Search_svg from '../../img/header/search-svg.svg';
import Cart_svg from '../../img/header/cart-svg.svg';
import User_svg from '../../img/header/user-svg.svg';
import { useProduct } from '../ProductContext';

function Header () {

    const { amount } = useProduct();
    return (
        <header className="header">
            <div className="header__top">
                <button className="header__top-left-btn">
                    <img src={Search_svg}></img>
                </button>
                <div className="header__top-right-div">
                    <button className="header__top-right-cart">
                    <Link className="header__top-right-cart-link" to="cart">
                        <img className="header__top-right-cart-link-img" src={Cart_svg}></img>
                        <span className="header__top-right-cart-link-img-count">
                            {amount}
                        </span>
                    </Link>
                    </button>
                    <button className="header__top-right-personal">
                    <Link className="header__top-center-link" to="/login">
                        <img src={User_svg}></img>
                    </Link>
                    </button>
                </div>
            </div>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-list-elem">
                        <Link to ="/">Homepage</Link>
                    </li>
                    <li className="header__nav-list-elem">
                        <Link to ="/plp">Product listing</Link>
                    </li>
                    <li className="header__nav-list-elem">
                        <Link to ="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
