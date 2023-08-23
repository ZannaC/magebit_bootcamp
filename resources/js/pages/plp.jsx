import React, { useState, useEffect } from "react";
import CollectionCard from "../components/view_collection/CollectionCard";
import { useProduct } from "../ProductContext";
import { useNavigate } from 'react-router-dom';
import getAllProducts from "../utils/getAllProducts";

function Plp() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    // all products request
    useEffect(()=> {
        getAllProducts('products')
        .then(response => setData(response));
    }, [])

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

    const handleButtonPdpClick = (product) => {
        // console.log (product);
        navigate('/pdp', { state: { product } });
    }

    const listSection =
    <section className="plp__list-section">
        <ul className="plp__list">
            {data.slice(0, renderedProducts).map(product => (
                <button key={product.id} className="plp__list-button" onClick={() => handleButtonPdpClick(product)}>
                    <li className="plp__list-item">
                        <CollectionCard
                        img={product.image}
                        name={product.name}
                        price={product.price}
                        imgClass={'plp__list-item-img'}
                        nameClass={'plp__list-item-h4'}
                        priceClass={'plp__list-item-price'} />
                    </li>
                </button>
            ))}
        </ul>
        <div className="plp__list-section-btn-block">
            <button className="plp__list-section-btn-block-btn" onClick={handleButtonClick}>Load more</button>
        </div>
    </section>

    return (
        <>
            {/* <section className="plp__background"></section> */}
            <div className="plp">
                {filtersSection}
                {listSection}
            </div>
        </>
    )
}

export default Plp;
