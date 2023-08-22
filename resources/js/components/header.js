import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search_svg from "../../img/header/search-svg.svg";
import Cart_svg from "../../img/header/cart-svg.svg";
import User_svg from "../../img/header/user-svg.svg";
import Menu_svg from "../../img/header/menu-svg.svg";
import Menu from "./menu";
import { useProduct } from "../ProductContext";
import Search from "../pages/search";

function Header() {
    const { amount } = useProduct();
    const [showHamburger, setShowHamburger] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setShowHamburger(true);
            } else {
                setShowHamburger(false);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header className="header">
            <Menu divClass={"div__class"} />
            <div className="header__top">
                <button className="header__top-left-btn">
                    <Link to="search">
                        <img src={Search_svg} alt="Search"></img>
                    </Link>
                </button>
                <Link className="header__top-center-link" to="/">
                    Avion
                </Link>
                <div className="header__top-right-div">
                    <button className="header__top-right-cart">
                        <Link className="header__top-right-cart-link" to="cart">
                            <img
                                className="header__top-right-cart-link-img"
                                src={Cart_svg}
                                alt="Cart"
                            ></img>
                            <span className="header__top-right-cart-link-img-count">
                                {amount}
                            </span>
                        </Link>
                    </button>
                    <button className="header__top-right-personal">
                        <img src={User_svg} alt="User"></img>
                    </button>
                </div>
            </div>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-list-elem">
                        <Link to="/">Homepage</Link>
                    </li>
                    <li className="header__nav-list-elem">
                        <Link to="/plp">Product listing</Link>
                    </li>
                    <li className="header__nav-list-elem">
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
