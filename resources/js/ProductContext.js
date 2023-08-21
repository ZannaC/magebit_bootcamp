import React, { createContext, useState, useContext } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(null);
    // VREMENNAJA DATA (DO BAZI DANNIH)

    const [allProducts, setAllProducts] = useState([
        {
            id: 1,
            name: "The Dandy Chair",
            price: 250,
            image: "https://www.ikea.com/us/en/images/products/stefan-chair-brown-black__0727320_pe735593_s5.jpg?f=xl",
        },
        {
            id: 2,
            name: "Rustic Vase Set",
            price: 155,
            image: "https://m.media-amazon.com/images/I/61JxVujQN3L._AC_UF894,1000_QL80_.jpg",
        },
        {
            id: 3,
            name: "The Silky Vase",
            price: 125,
            image: "https://silkyfactory.com/wp-content/uploads/2021/10/vaas5.jpg",
        },
        {
            id: 4,
            name: "The Lucy Lamp",
            price: 399,
            image: "https://chairish-prod.freetls.fastly.net/image/product/sized/40208db1-1aca-41eb-86dd-8efd835efe98/architect-task-desk-lamp-lucy-by-erco-germany-7866?aspect=fit&width=640&height=640",
        },
        {
            id: 5,
            name: "Rustic Vase Set",
            price: 155,
            image: "https://m.media-amazon.com/images/I/61JxVujQN3L._AC_UF894,1000_QL80_.jpg",
        },
        {
            id: 6,
            name: "KOko Vase Set",
            price: 155,
            image: "https://m.media-amazon.com/images/I/61JxVujQN3L._AC_UF894,1000_QL80_.jpg",
        },
        {
            id: 7,
            name: "Lusa Vase Set",
            price: 155,
            image: "https://m.media-amazon.com/images/I/61JxVujQN3L._AC_UF894,1000_QL80_.jpg",
        },
        {
            id: 8,
            name: "Honda Vase Set",
            price: 155,
            image: "https://m.media-amazon.com/images/I/61JxVujQN3L._AC_UF894,1000_QL80_.jpg",
        },
        {
            id: 9,
            name: "Mercedes Vase Set",
            price: 155,
            image: "https://m.media-amazon.com/images/I/61JxVujQN3L._AC_UF894,1000_QL80_.jpg",
        },
        {
            id: 10,
            name: "Toyota Vase Set",
            price: 155,
            image: "https://m.media-amazon.com/images/I/61JxVujQN3L._AC_UF894,1000_QL80_.jpg",
        },
        {
            id: 11,
            name: "Bmw Vase Set",
            price: 155,
            image: "https://m.media-amazon.com/images/I/61JxVujQN3L._AC_UF894,1000_QL80_.jpg",
        },
        {
            id: 12,
            name: "Audi Vase Set",
            price: 155,
            image: "https://m.media-amazon.com/images/I/61JxVujQN3L._AC_UF894,1000_QL80_.jpg",
        },
        {
            id: 13,
            name: "Vw Vase Set",
            price: 155,
            image: "https://m.media-amazon.com/images/I/61JxVujQN3L._AC_UF894,1000_QL80_.jpg",
        },
        {
            id: 14,
            name: "Reno Vase Set",
            price: 155,
            image: "https://m.media-amazon.com/images/I/61JxVujQN3L._AC_UF894,1000_QL80_.jpg",
        },
        {
            id: 15,
            name: "Supra Vase Set",
            price: 155,
            image: "https://m.media-amazon.com/images/I/61JxVujQN3L._AC_UF894,1000_QL80_.jpg",
        },
        {
            id: 16,
            name: "Porsche Vase Set",
            price: 155,
            image: "https://m.media-amazon.com/images/I/61JxVujQN3L._AC_UF894,1000_QL80_.jpg",
        },
    ]);


    const updateProducts = (newProduct) => {
        setProducts(newProduct);
    };

    return (
        <ProductContext.Provider
            value={{ products, allProducts, updateProducts }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export const useProduct = () => {
    return useContext(ProductContext);
};
