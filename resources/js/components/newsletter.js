import React from 'react';
import '../../sass/app.css';

function Newsletter() {
    return (
        <section className="newsletter_banner">
            <img className="newsletter_banner__background" src="/images/newsletter_banner.jpeg" alt="room" />
            <div className="newsletter_banner__content">
                <h2>Join the club and get the benefits</h2>
                <p>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>

                <div className="content__benefits">
                    <span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1C6.61553 1 5.26216 1.41054 4.11101 2.17971C2.95987 2.94888 2.06266 4.04213 1.53285 5.32122C1.00303 6.6003 0.86441 8.00776 1.13451 9.36563C1.4046 10.7235 2.07129 11.9708 3.05026 12.9497C4.02922 13.9287 5.2765 14.5954 6.63437 14.8655C7.99224 15.1356 9.3997 14.997 10.6788 14.4672C11.9579 13.9373 13.0511 13.0401 13.8203 11.889C14.5895 10.7378 15 9.38447 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1ZM7 10.7954L4.5 8.2954L5.2953 7.5L7 9.2046L10.705 5.5L11.5029 6.29295L7 10.7954Z" fill="white" />
                        </svg>

                        <p>Exclusive offers</p>
                    </span>
                    <span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1C6.61553 1 5.26216 1.41054 4.11101 2.17971C2.95987 2.94888 2.06266 4.04213 1.53285 5.32122C1.00303 6.6003 0.86441 8.00776 1.13451 9.36563C1.4046 10.7235 2.07129 11.9708 3.05026 12.9497C4.02922 13.9287 5.2765 14.5954 6.63437 14.8655C7.99224 15.1356 9.3997 14.997 10.6788 14.4672C11.9579 13.9373 13.0511 13.0401 13.8203 11.889C14.5895 10.7378 15 9.38447 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1ZM7 10.7954L4.5 8.2954L5.2953 7.5L7 9.2046L10.705 5.5L11.5029 6.29295L7 10.7954Z" fill="white" />
                        </svg>

                        <p>Free events</p>
                    </span>
                    <span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1C6.61553 1 5.26216 1.41054 4.11101 2.17971C2.95987 2.94888 2.06266 4.04213 1.53285 5.32122C1.00303 6.6003 0.86441 8.00776 1.13451 9.36563C1.4046 10.7235 2.07129 11.9708 3.05026 12.9497C4.02922 13.9287 5.2765 14.5954 6.63437 14.8655C7.99224 15.1356 9.3997 14.997 10.6788 14.4672C11.9579 13.9373 13.0511 13.0401 13.8203 11.889C14.5895 10.7378 15 9.38447 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1ZM7 10.7954L4.5 8.2954L5.2953 7.5L7 9.2046L10.705 5.5L11.5029 6.29295L7 10.7954Z" fill="white" />
                        </svg>

                        <p>Large discounts</p>
                    </span>
                </div>

                <form className="content__sign_up" action="" method="post">
                    <input type="email" placeholder="your@email.com" required />
                    <button type="submit">Sign up</button>
                </form>
            </div>
        </section>
    );
}

export default Newsletter;
