import React from "react";
import ReactDOM from "react-dom";
import "../../sass/app.css";
import chair from "../../../resources/img/homePage/chair.png";
import sofa from "../../../resources/img/homePage/sofa.png";
import Brand from "./brand";

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
            <Brand />
            <section className="section3">New ceramics</section>
            <section className="section4">
                <h2 className="section4__container-h2">Our popular products</h2>
                {/* <div className="section4__container-infoBlock"> Data</div>
                <button className="section4__container-button">
                    View collection
                </button> */}
            </section>
            <section className="section5">
                Join the club and get the benefits
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
                        market.
                    </h3>
                    <h3 className="section6__container-h3">
                        Handmade, and lovingly crafted furniture and homeware is
                        what we live, breathe and design so our Chelsea boutique
                        become the hotbed for the London interior design
                        community.
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
