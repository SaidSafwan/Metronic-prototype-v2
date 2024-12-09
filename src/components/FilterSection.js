import React from "react";
import DropdownSelector from "./DropdownSelector";
import SearchBar from "./SearchBar";
// import Button from "./Button";
// import { setupFilterItemInteractions } from "../utils/interactiveFilters"; // Import the utility
import "./index.css";
import "./dropdown.css";

const FilterSection = () => {
    const handleClick = () => {
        // setupFilterItemInteractions(); // Reapply interactions dynamically on each click
    };

    return (
        <div className="filter-section" onClick={handleClick}>
            <SearchBar className="search-bar" />
            <DropdownSelector 
                label="Apartment"
                options={["All", "Apartment", "Condos", "Townhouse", "Commercial"]}
            />
            <DropdownSelector 
                label="€75,000"
                options={["All", "€75,000", "€100,000", "€150,000", "€200,000", "€500,000+"]}
            />
            <DropdownSelector 
                label="2 beds"
                options={["All", "1 beds", "2 beds", "3 beds", "4 beds", "5 beds"]}
            />
            <button className="filter-btn">
                <img src="./assets/icons/horizontal-adjust.svg" alt="adjust icon" style={{ width: "30px" }} />
            </button>
            <button class="search-btn">Search</button>
        </div>
    );
};

export default FilterSection;
