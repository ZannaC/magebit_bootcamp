import React from "react";
import ReactDOM from "react-dom";
import "../../sass/app.css";
import chair from "../../../resources/js/components/assets/HomePage-images/chair.png";
import sofa from "../../js/components/assets/HomePage-images/sofa.png";
import delivery from "../../js/components/assets/HomePage-images/icons/Delivery.svg";
import checkmark from "../../js/components/assets/HomePage-images/icons/Checkmark.svg";
import purchase from "../../js/components/assets/HomePage-images/icons/Purchase.svg";
import sprout from "../../js/components/assets/HomePage-images/icons/Sprout.svg";

function Homepage() {
    return (
        <div>
            <section className="section1">
                <div className="container section1__container">
                    <h1 className="section1__container-h1">
                        The furniture brand for the future, with timeless
                        designs
                    </h1>
                    <button className="section1__container-button">
                        View collection
                    </button>
                    <h2 className="section1__container-h2">
                        A new era in eco friendly furniture with Avelon, the
                        French luxury retail brand with nice fonts, tasteful
                        colors and a beautiful way to display things digitally
                        using modern web technologies.
                    </h2>
                </div>
                <div className="section1__image">
                    <img className="section1__image-img" src={chair} alt="" />
                </div>
            </section>
            <section className="section2">
                <div className="section2__container">
                    <h2 className="section2__container-h2">
                        What makes our brand different
                    </h2>
                    <div className="section2__container-infoBlock">
                        <ul>
                            <li>
                                <img
                                    className="section2__container-infoBlock-image-img"
                                    src={delivery}
                                    alt=""
                                />
                            </li>
                            <li>
                                <h3>Next day as standard</h3>
                            </li>
                            <li>
                                <h4>
                                    Order before 3pm and get your order the next
                                    day as standard
                                </h4>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <img
                                    className="section2__image-img"
                                    src={checkmark}
                                    alt=""
                                />
                            </li>
                            <li>
                                <h3>
                                    Handmade crafted goods made with real
                                    passion and craftmanship
                                </h3>
                            </li>
                            <li>
                                <h4>
                                    Order before 3pm and get your order the next
                                    day as standard
                                </h4>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <img
                                    className="section2__image-img"
                                    src={purchase}
                                    alt=""
                                />
                            </li>
                            <li>
                                <h3>Unbeatable prices</h3>
                            </li>
                            <li>
                                <h4>
                                    For our materials and quality you won`t find
                                    better prices anywhere
                                </h4>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <img
                                    className="section2__image-img"
                                    src={sprout}
                                    alt=""
                                />
                            </li>
                            <li>
                                <h3>Recycled packaging</h3>
                            </li>
                            <li>
                                <h4>
                                    We use 100% recycled packaging to ensure our
                                    footprint is manageable
                                </h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="section3">
                <h2 className="section3__container-h2">New ceramics</h2>
                <div className="section3__container-infoBlock"> Data</div>
                <button className="section3__container-button">
                    View collection
                </button>
            </section>
            <section className="section4">
                <h2 className="section4__container-h2">Our popular products</h2>
                <div className="section4__container-infoBlock"> Data</div>
                <button className="section4__container-button">
                    View collection{" "}
                </button>
            </section>
            <section className="section5">
                <div className="section5__container">
                    <h2 className="section5__container-h2">
                        Join the club and get the benefits
                    </h2>
                    <h3 className="section5__container-h3">
                        Sign up for our newsletter and receive exclusive offers
                        on new ranges, sales, pop up stores and more
                    </h3>
                    <input></input>
                </div>
            </section>

            <section className="section6">
                <div className="section6__container">
                    <h2 className="section6__container-h2">
                        From a studio in London to a global brand with over 400
                        outlets
                    </h2>
                    <h3 className="section6__container-h3">
                        When we started Avion, the idea was simple. Make high
                        quality furniture affordable and available for the mass
                        market. Handmade, and lovingly crafted furniture and
                        homeware is what we live, breathe and design so our
                        Chelsea boutique become the hotbed for the London
                        interior design community.
                    </h3>
                    <button className="section6__container-button">
                        Get in touch
                    </button>
                </div>
                <div className="section6__image">
                    <img
                        className="section6__image-img"
                        src={sofa}
                        alt="sofa image"
                    />
                </div>
            </section>
        </div>
    );
}

export default Homepage;
