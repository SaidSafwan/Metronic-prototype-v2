import React, { useState } from "react";
import "./index.css";

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("Amsterdam"); // Initial value for the input

    const handleChange = (event) => {
        setSearchValue(event.target.value); // Update state on input change
    };

    return (
        <div className="input-container">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
                type="text"
                name="searchbar"
                placeholder="Location"
                value={searchValue} // Controlled input value
                onChange={handleChange} // Update state on input change
                className="search-bar"
            />
        </div>
    );
};

export default SearchBar;
