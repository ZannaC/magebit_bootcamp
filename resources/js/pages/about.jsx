import React from 'react';
import Newsletter from '../components/newsletter';
import '../../sass/app.css';

function About() {
    return (
        <>
            <section className="headline">
                <h1>A brand built on the love of craftmanship, quality and outstanding customer service</h1>
            </section>

            <article className="features">
                <section className="features__child">
                    <div className="child_content">
                        <div>
                            <h2>From a studio in London to a global brand with over 400 outlets</h2>
                            <p>Our vision was to create products that combine beauty, functionality, and sustainability.</p>
                            <p>We wanted to offer our customers a unique and personalized shopping experience, where they can find furniture that suits their taste and lifestyle.</p>
                        </div>
                        <button className='features__child-button' type="button">Get in touch</button>
                    </div>
                </section>

                <div className="features__child">
                    <img className="image_first" src="/images/interior1.png" alt="interior" />
                </div>

                <div className="features__child">
                    <img className="image_second" src="/images/interior2.png" alt="interior" />
                </div>

                <section className="features__child">
                    <div className="child_content">
                        <div>
                            <h2>Our service isn’t just personal, it’s actually hyper personally exquisite</h2>
                            <p>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
                            <p>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                        </div>
                        <button type="button">Get in touch</button>
                    </div>
                </section>
            </article>

            <Newsletter />
        </>
    );
}

export default About;
