import React from "react";

function CollectionCard ({img, name, price, imgClass , nameClass, priceClass}) {

    return (
        <>
            <img className={imgClass} src={img}></img>
            <h4 className={nameClass}>{name}</h4>
            <p className={priceClass}>£{price}</p>
        </>
    )
}

export default CollectionCard;
