import React, {useState} from "react";
import { Link } from "react-router-dom";
import LinkedIn_svg from "../../img/footer/footer-linkedin.js";
import Twitter_svg from "../../img/footer/footer-twitter.js";
import Facebook_svg from "../../img/footer/footer-facebook.js";
import Instagram_svg from "../../img/footer/footer-instagram.js";
import Skype_svg from "../../img/footer/footer-skype.js";
import Pinterest_svg from "../../img/footer/footer-pinterest.js";

function Footer () {

const [emailError, setEmailError] = useState("");
const [email, setEmail] = useState("");
function handleEmailSubmit () {
    const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
    const regex = regexExp.test(email);
    if (regex) {
        setEmailError('');
        fetch ('/api/newsletter-subscribe',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify({email: email})
            })
    }   else {
        setEmailError('Invalid email format');
    }
}
function handleEmailChange (event) {
    setEmail(event.target.value);
}
    return (
        <footer className="footer">
            <div className="container footer__container">
                <div className="footer__top">
                    <div className="footer__top-left">
                        <ul className = "footer__top-left-list">
                            <h3 className="footer__top-left-list-h3">Menu</h3>
                            <li className="footer__top-left-list-item">
                            <Link to ="#">New arrivals</Link>
                            </li>
                            <li className="footer__top-left-list-item">
                            <Link to ="#">Best sellers</Link>
                            </li>
                            <li className="footer__top-left-list-item">
                            <Link to ="#">Recently viewed</Link>
                            </li>
                            <li className="footer__top-left-list-item">
                            <Link to ="#">Popular this week</Link>
                            </li>
                            <li className="footer__top-left-list-item">
                            <Link to ="#">All products</Link>
                            </li>
                        </ul>
                        <ul className = "footer__top-center-list">
                            <h3 className="footer__top-center-list-h3">Categories</h3>
                            <li className="footer__top-center-list-item">
                            <Link to ="#">Crockery</Link>
                            </li>
                            <li className="footer__top-center-list-item">
                            <Link to ="#">Furniture</Link>
                            </li>
                            <li className="footer__top-center-list-item">
                            <Link to ="#">Homeware</Link>
                            </li>
                            <li className="footer__top-center-list-item">
                            <Link to ="#">Plant pots</Link>
                            </li>
                            <li className="footer__top-center-list-item">
                            <Link to ="#">Chairs</Link>
                            </li>
                        </ul>
                        <ul className = "footer__top-right-list">
                            <h3 className="footer__top-right-list-h3">Our company</h3>
                            <li className="footer__top-right-list-item">
                            <Link to ="#">About us</Link>
                            </li>
                            <li className="footer__top-right-list-item">
                            <Link to ="#">Vacancies</Link>
                            </li>
                            <li className="footer__top-right-list-item">
                            <Link to ="#">Contact us</Link>
                            </li>
                            <li className="footer__top-right-list-item">
                            <Link to ="#">Privacy</Link>
                            </li>
                            <li className="footer__top-right-list-item">
                            <Link to ="#">Returns policy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__top-right">
                        <h3 className="footer__top-right-form-h3">Join our mailing list</h3>
                        <div className="footer__top-right-form">
                            <input className="footer__top-right-form-input" type="email" name="email" placeholder="your@email.com" value={email} onChange={handleEmailChange}/>
                            <button className="footer__top-right-form-button" onClick={handleEmailSubmit}>Sign up</button>
                        </div>
                    {emailError && <div className="footer__top-error">
                        {emailError}
                    </div>}
                    </div>
                </div>
                <div className="footer__bottom">
                    <p className="footer__bottom-p">Copyright 2022 Avion LTD</p>
                    <ul className="footer__bottom-list">
                        <li className="footer__bottom-list-item">
                            <a className="footer__bottom-list-item-link" href="https://linkedin.com">
                                <LinkedIn_svg />
                            </a>
                        </li>
                        <li className="footer__bottom-list-item">
                            <a className="footer__bottom-list-item-link" href="https://twitter.com">
                                <Twitter_svg />
                            </a>
                        </li>
                        <li className="footer__bottom-list-item">
                            <a className="footer__bottom-list-item-link" href="https://facebook.com">
                                <Facebook_svg />
                            </a>
                        </li>
                        <li className="footer__bottom-list-item">
                            <a className="footer__bottom-list-item-link" href="https://instagram.com">
                                <Instagram_svg />
                            </a>
                        </li>
                        <li className="footer__bottom-list-item">
                            <a className="footer__bottom-list-item-link" href="https://skype.com">
                                <Skype_svg />
                            </a>
                        </li>
                        <li className="footer__bottom-list-item">
                            <a className="footer__bottom-list-item-link" href="https://pinterest.com">
                                <Pinterest_svg />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
