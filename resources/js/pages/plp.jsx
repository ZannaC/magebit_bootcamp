import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CollectionCard from '../components/view_collection/CollectionCard';
import requests from '../utils/requests';

function Checkbox({ id, label, setProducts }) {
    const productFilter = {
        Furniture: false,
        Homeware: false,
        Sofas: false,
        'Light Fittings': false,
        Accessories: false,
    };

    const updateProductFilter = () => {
        const checkboxes = document.querySelectorAll('.filter__checkbox');
        checkboxes.forEach((checkbox) => {
            productFilter[checkbox.name] = checkbox.checked;
        });
        const productsToFilter = Object.keys(productFilter).filter((index) => productFilter[index] !== false);

        if (productsToFilter.length !== 0) {
            requests('productFilter', productsToFilter)
                .then((response) => setProducts(response));
        } else {
            requests('products')
                .then((response) => setProducts(response));
        }
    };

    return (
        <label htmlFor={id}>
            <input
                id={id}
                className="filter__checkbox"
                name={label}
                type="checkbox"
                onChange={updateProductFilter}
            />
            {label}
        </label>
    );
}

function Plp() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    // all products request
    useEffect(() => {
        requests('products')
            .then((response) => setProducts(response));
    }, []);

    // number of rendered products
    const [renderedProducts, setRenderedProducts] = useState(9);

    const handleButtonClick = () => {
        setRenderedProducts(renderedProducts + 9);
    };

    const handleButtonPdpClick = (product) => {
        navigate('/pdp', { state: { product } });
    };

    const listSection = (
        <section className="plp__list-section">
            <ul className="plp__list">
                {products.slice(0, renderedProducts).map((product) => (
                    <button
                        type="button"
                        key={product.id}
                        className="plp__list-button"
                        onClick={() => handleButtonPdpClick(product)}
                    >
                        <li className="plp__list-item">
                            <CollectionCard
                                img={product.image}
                                name={product.name}
                                price={product.price}
                                imgClass="plp__list-item-img"
                                nameClass="plp__list-item-h4"
                                priceClass="plp__list-item-price"
                            />
                        </li>
                    </button>
                ))}
            </ul>
            <div className="plp__list-section-btn-block">
                <button
                    type="button"
                    className="plp__list-section-btn-block-btn"
                    onClick={handleButtonClick}
                >
                    Load more
                </button>
            </div>
        </section>
    );

    return (
        <div className="plp">
            <section className="plp__filters">
                <p>Product Type</p>
                <Checkbox id="typeFurniture" label="Furniture" setProducts={setProducts} />
                <Checkbox id="typeHomeware" label="Homeware" setProducts={setProducts} />
                <Checkbox id="typeSofas" label="Sofas" setProducts={setProducts} />
                <Checkbox id="typeLightFittings" label="Light Fittings" setProducts={setProducts} />
                <Checkbox id="typeAccessories" label="Accessories" setProducts={setProducts} />
            </section>
            {listSection}
        </div>
    );
}

export default Plp;
