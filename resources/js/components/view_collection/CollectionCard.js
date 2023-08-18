import React from "react";

function CollectionCard ({img, name, price}) {

    return (
        <>
            <img className="collection__list-item-img" src={img}></img>
            <h4 className="collection__list-item-h4">{name}</h4>
            <p className="collection__list-item-p">£{price}</p>
        </>
    )
}

export default CollectionCard;
