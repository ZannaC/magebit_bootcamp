import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Search_svg from "../../img/header/search-svg.svg";
import Cart_svg from "../../img/header/cart-svg.svg";
import User_svg from "../../img/header/user-svg.svg";
import { useProduct } from "../ProductContext";
import { useUserContext } from "../UserContext";
import Search from "../pages/search";

    


function Header() {
    const { setLogin, loggedIn } = useProduct();
  
    const { amount } = useProduct();

    const [menuActive, setMenuActive] = useState(false);
    const items = [{value:"Login", href:"/login"}, {value:"Homepage", href:"/"}, {value:"About", href:"/about"}, {value:"Products", href:"/plp"}, {value:"Cart", href:"/cart"}, {value:"Checkout", href:"/checkout"}]
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
    }, []);

    const savedLogin = useUserContext();

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
                        <Link className="header__top-right-cart-link" to="cart">
                            <img
                                className="header__top-right-cart-link-img"
                                src={Cart_svg}
                            ></img>
                            <span className="header__top-right-cart-link-img-count">
                                {amount}
                            </span>
                        </Link>
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
                        <div className="app__burger-btn" onClick={handleMenuButton}>
                            <span className="app__burger-btn-span"/>
                        </div>
                    </nav>
                    <Menu header={"Avion"} items={items} active={menuActive} setActive={setMenuActive}/>
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
