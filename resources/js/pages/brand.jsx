import React from "react";
import "../../sass/app.css";
import delivery from "../../../resources/img/homePage/icons/Delivery.svg";
import checkmark from "../../../resources/img/homePage/icons/Checkmark.svg";
import purchase from "../../../resources/img/homePage/icons/Purchase.svg";
import sprout from "../../../resources/img/homePage/icons/Sprout.svg";

function Brand() {
    return (
        <section className="section2">
            <h2 className="section2__container-h2">
                What makes our brand different
            </h2>
            <div className="section2__container">
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
                            <h3 className="section2__container-h3">
                                Next day as standard
                            </h3>
                        </li>
                        <li>
                            <h4 className="section2__container-h4">
                                Order before 3pm and get your order the next day
                                as standard
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
                            <h3 className="section2__container-h3">
                                Made by true artisans
                            </h3>
                        </li>
                        <li>
                            <h4 className="section2__container-h4">
                                Handmade crafted goods made with real passion
                                and craftmanship
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
                            <h3 className="section2__container-h3">
                                Unbeatable prices
                            </h3>
                        </li>
                        <li>
                            <h4 className="section2__container-h4">
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
                            <h3 className="section2__container-h3">
                                Recycled packaging
                            </h3>
                        </li>
                        <li>
                            <h4 className="section2__container-h4">
                                We use 100% recycled packaging to ensure our
                                footprint is manageable
                            </h4>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Brand;
