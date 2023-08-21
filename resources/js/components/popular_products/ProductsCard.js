import React from "react";

function ProductsCard({ img, name, price }) {
    return (
        <>
            <img className="products__list-item-img" src={img}></img>
            <h4 className="products__list-item-h4">{name}</h4>
            <p className="products__list-item-p">£{price}</p>
        </>
    );
}

export default ProductsCard;
