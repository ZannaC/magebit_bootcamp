import React, {useState} from "react";
import "../../sass/app.css";
import CollectionCard from "../components/view_collection/CollectionCard";
import { useNavigate } from 'react-router-dom';

function Search() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    function handleSearchSubmit () {
        fetch ('/api/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({search: search})
        }).then(response => response.json())
        .then(response => setResults(response))
    }
    function handleSearchChange (event) {
        setSearch(event.target.value);
    }
    const handleButtonPdpClick = (product) => {
        navigate('/pdp', { state: { product } });
    };
    return (
        <div className="search-wrap">
            <div className="search-container">
                <input type="text" id="search-bar" placeholder="Search" value={search} onChange={handleSearchChange}/>
                <a href="#" onClick={handleSearchSubmit}>
                    <img
                        className="search-icon"
                        src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
                    ></img>
                </a>
            </div>
            <ul className="plp__list">
                {results.map((product) => (
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
        </div>
    );
}

export default Search;
