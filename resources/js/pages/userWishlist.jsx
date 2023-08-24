import React, { useState } from "react";
import "../../sass/app.css";
import { wishlistData } from "./userWishlistData";

const UserWishlist = () => {
    const [currentWishlistIndex, setCurrentWishlistIndex] = useState(0);

    const handleScrollLeft = () => {
        setCurrentWishlistIndex(
            (prevIndex) =>
                (prevIndex - 1 + wishlistData.length) % wishlistData.length
        );
    };

    const handleScrollRight = () => {
        setCurrentWishlistIndex(
            (prevIndex) => (prevIndex + 1) % wishlistData.length
        );
    };

    return (
        <div className="wishlist-container">
            <div className="image-container">
                {" "}
                <h2 className="wishlist-container-title">Wishlist</h2>
                <img
                    src={wishlistData[currentWishlistIndex].image}
                    alt={`Wishlist Item ${currentWishlistIndex + 1}`}
                />{" "}
                <div className="button-block">
                    <button
                        className="button-block-btn"
                        onClick={() => {
                            if (currentWishlistIndex === 0) {
                                return;
                            }
                            handleScrollLeft();
                        }}
                    >
                        Left
                    </button>
                    <button
                        className="button-block-btn"
                        onClick={() => {
                            if (
                                currentWishlistIndex ===
                                wishlistData.length - 1
                            ) {
                                return;
                            }
                            handleScrollRight();
                        }}
                    >
                        Right
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserWishlist;
