import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search_svg from "../../img/header/search-svg.svg";
import Cart_svg from "../../img/header/cart-svg.svg";
import User_svg from "../../img/header/user-svg.svg";
import Login_svg from '../../img/header/user-menu-svg.svg';
import Homepage_svg from '../../img/header/home-svg.svg';
import About_svg from '../../img/header/info-svg.svg';
import Products_svg from '../../img/header/list-svg.svg';
import Cart_Menu_svg from '../../img/header/cart-menu-svg.svg';
import { useProduct } from "../ProductContext";
import { useUserContext } from "../UserContext";
import Search from "../pages/search";
import Menu from "./menu";

function Header() {
    const { amount } = useProduct();
    const loggedIn = localStorage.getItem("login");
    const [menuActive, setMenuActive] = useState(false);
    const items = [{value: loggedIn ? "Personal account" : "Login", href: loggedIn ? "/account" : "/login", icon: Login_svg}, {value:"Homepage", href:"/", icon: Homepage_svg}, {value:"About", href:"/about", icon: About_svg}, {value:"Products", href:"/plp", icon: Products_svg}, {value:"Cart", href:"/cart", icon: Cart_Menu_svg}]

    const [showHamburger, setShowHamburger] = useState(false);

    const handleMenuButton = () => {
        setMenuActive(!menuActive);
    };
    menuActive
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "unset");

    const closeMenu = () => {
        setMenuActive(false);
        document.body.style.overflow = 'unset';
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setShowHamburger(true);
            } else {
                setShowHamburger(false);
            }
        };
    }, []);

    return (
        <header className="header">
            <div className="header__top">
                <button className="header__top-left-btn">
                    <Link to="/search">
                        <img src={Search_svg}></img>
                    </Link>
                </button>
                <Link className="header__top-center-link" to="/">
                    Avion
                </Link>
                <div className="header__top-right-div">
                    <button className="header__top-right-cart">
                        {loggedIn ? (
                            <Link
                                className="header__top-right-cart-link"
                                to="/cart"
                            >
                                <img
                                    className="header__top-right-cart-link-img"
                                    src={Cart_svg}
                                ></img>
                                <span className="header__top-right-cart-link-img-count">
                                    {amount}
                                </span>
                            </Link>
                        ) : (
                            <Link
                                className="header__top-right-cart-link"
                                to="/login"
                            >
                                <img
                                    className="header__top-right-cart-link-img"
                                    src={Cart_svg}
                                ></img>
                            </Link>
                        )}
                    </button>
                    <button className="header__top-right-personal">
                        {loggedIn ? (
                            <Link
                                className="header__top-right-personal-link"
                                to="/personal"
                            >
                                <img src={User_svg} />
                            </Link>
                        ) : (
                            <Link
                                className="header__top-center-link"
                                to="/login"
                            >
                                <img src={User_svg} />
                            </Link>
                        )}
                    </button>
                    <nav className="app__burger">
                        <div
                            className="app__burger-btn"
                            onClick={handleMenuButton}
                        >
                            <span className="app__burger-btn-span" />
                        </div>
                    </nav>
                    <Menu header={"Avion"} items={items} active={menuActive} setActive={setMenuActive} onCloseMenu={closeMenu}/>

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
