import React from "react";
import CollectionCard from "./CollectionCard";
import { useProduct } from "../../ProductContext";

function CollectionSection () {
    const { allProducts } = useProduct();

    return (
        <section className="collection">
            <div className="container collection__container">
                <ul className="collection__list">
                    {allProducts.slice(0, 4).map(product => (
                        <li className="collection__list-item" key={product.id}>
                            <CollectionCard img={product.image} name={product.name} price={product.price} />
                        </li>
                    ))}
                </ul>
                <div className="collection__button-block">
                    <button className="collection__button-block-btn">View collection</button>
                </div>
            </div>
        </section>
    )
}

export default CollectionSection;
