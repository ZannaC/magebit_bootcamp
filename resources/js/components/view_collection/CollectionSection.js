import React from "react";
import { Link } from "react-router-dom";
import CollectionCard from "./CollectionCard";
import { useProduct } from "../../ProductContext";

function CollectionSection({
    imgClass,
    nameClass,
    priceClass,
    howManyItems,
    buttonClass = "collection__button-block-btn",
}) {
    const { allProducts } = useProduct();

    return (
        <section className="collection">
            <div className="container collection__container">
                <ul className="collection__list">
                    {allProducts.slice(0, howManyItems).map((product) => (
                        <li className="collection__list-item" key={product.id}>
                            <CollectionCard
                                img={product.image}
                                name={product.name}
                                price={product.price}
                                imgClass={imgClass}
                                nameClass={nameClass}
                                priceClass={priceClass}
                            />
                        </li>
                    ))}
                </ul>
                <div className="collection__button-block">
                    <Link to="/plp">
                        <button className={buttonClass}>View collection</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default CollectionSection;
