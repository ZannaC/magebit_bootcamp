import React from "react";
import { countries } from "countries-list";

const Countries = () => {
    const countryOptions = Object.keys(countries).map((countryCode) => ({
        value: countryCode,
        label: countries[countryCode].name,
    }));

    countryOptions.unshift({ value: "placeholder", label: "Select country" });

    const country = countryOptions.map((element) => {
        return <option key={element.value}>{element.label}</option>;
    });

    return <select>{country}</select>;
};

export default Countries;
