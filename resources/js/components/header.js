import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search_svg from '../../img/header/search-svg.svg';
import Cart_svg from '../../img/header/cart-svg.svg';
import User_svg from '../../img/header/user-svg.svg';
import Menu from "./menu";
import { useProduct } from '../ProductContext';

function Header () {

    const { amount } = useProduct();

    const [menuActive, setMenuActive] = useState(false);
    const items = [{value:"Homepage", href:"/"}, {value:"Product listing", href:"/plp"}, {value:"About", href:"/about"}]
    const [showHamburger, setShowHamburger] = useState(false);

    const handleMenuButton = () => {
        setMenuActive(!menuActive);
    }
    menuActive ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';

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
            <div className="header__top">
                <button className="header__top-left-btn">
                    <img src={Search_svg} alt="Search"></img>
                </button>
                <Link className="header__top-center-link" to="/">Avion</Link>
                <div className="header__top-right-div">
                    <button className="header__top-right-cart">
                    <Link className="header__top-right-cart-link" to="cart">
                        <img className="header__top-right-cart-link-img" src={Cart_svg} alt="Cart"></img>
                        <span className="header__top-right-cart-link-img-count">
                            {amount}
                        </span>
                    </Link>
                    </button>
                    <button className="header__top-right-personal">
                        <img src={User_svg} alt="User"></img>
                    </button>
                    <nav className="app__burger">
                        <div className="app__burger-btn" onClick={handleMenuButton}>
                            <span className="app__burger-btn-span"/>
                        </div>
                    </nav>
                    <Menu header={"Menu"} items={items} active={menuActive} setActive={setMenuActive}/>
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
    );
}

export default Header;
