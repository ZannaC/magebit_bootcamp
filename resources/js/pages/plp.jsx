import React, { useState } from "react";
import CollectionCard from "../components/view_collection/CollectionCard";
import { useProduct } from "../ProductContext";

function Plp() {
    // all products
    const { allProducts } = useProduct();
    // number of rendered products
    const [renderedProducts, setRenderedProducts] = useState(9);

    const handleButtonClick = () => {
        setRenderedProducts(renderedProducts + 9);
    };

    const filtersSection =
    <section className="plp__filters">

    </section>

    const listSection =
    <section className="plp__list-section">
        <ul className="plp__list">
            {allProducts.slice(0, renderedProducts).map(product => (
                <li className="plp__list-item" key={product.id}>
                    <CollectionCard
                    img={product.image}
                    name={product.name}
                    price={product.price}
                    imgClass={'plp__list-item-img'}
                    nameClass={'plp__list-item-h4'}
                    priceClass={'plp__list-item-price'} />
                </li>
            ))}
        </ul>
        <div className="plp__list-section-btn-block">
            <button className="plp__list-section-btn-block-btn" onClick={handleButtonClick}>Load more</button>
        </div>
    </section>

    return (
        <>
            <section className="plp__background"></section>
            <div className="plp">
                {filtersSection}
                {listSection}
            </div>
        </>
    )
}

export default Plp;
