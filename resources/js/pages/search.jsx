import React from "react";
import "../../sass/app.css";

function Search() {
    return (
        <div className="search-wrap">
            <form className="search-container">
                <input type="text" id="search-bar" placeholder="Search" />
                <a href="#" >
                    <img
                        className="search-icon"
                        src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
                    ></img>
                </a>
            </form>
        </div>
    );
}

export default Search;
