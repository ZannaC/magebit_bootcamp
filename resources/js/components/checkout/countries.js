import React from "react";
import Select from "react-select";
import { countries } from "countries-list";

const Countries = () => {
    const countryOptions = Object.keys(countries).map((countryCode) => ({
        value: countryCode,
        label: countries[countryCode].name,
    }));

    const customStyles = {
        container: (provided, state) => ({
            ...provided,
            width: state.isFocused || state.isSelected ? "100%" : "100%",
            fontFamily: "inherit",
            fontSize: "100%",
            lineHeight: "1.15",
        }),
        control: (provided, state) => ({
            ...provided,
            height: "15px",
            border: "2px inset -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133))",
            borderImage: "initial",
        }),
    };

    return (
        <div>
            <Select options={countryOptions} styles={customStyles} />
        </div>
    );
};

export default Countries;
