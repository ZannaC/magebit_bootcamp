import React from "react";
import ProductsCard from "./ProductsCard";
import { useProduct } from "../../ProductContext";

function PopularProductsSection({ howManyProducts }) {
    const { allProducts } = useProduct();

    return (
        <section className="products">
            <div className="container products__container">
                <ul className="products__list">
                    {allProducts.slice(0, howManyProducts).map((product) => (
                        <li className="products__list-item" key={product.id}>
                            <ProductsCard
                                img={product.image}
                                name={product.name}
                                price={product.price}
                            />
                        </li>
                    ))}
                </ul>
                <div className="products__button-block">
                    <button className="products__button-block-btn">
                        View collection
                    </button>
                </div>
            </div>
        </section>
    );
}

export default PopularProductsSection;
