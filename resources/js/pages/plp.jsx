import React from "react";

function Plp() {

    const filtersSection =
    <section className="plp__filters">

    </section>

    const listSection =
    <section className="plp__list">

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
