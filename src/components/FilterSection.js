import React, { useEffect } from "react";
import DropdownSelector from "./DropdownSelector";
import SearchBar from "./SearchBar";
import Button from "./Button";
import "./index.css"; // Style for filter section
import "./dropdown.css"; // Style for filter section
import { setupFeatureInteractions } from "../utils/interactiveFeatures"; // Import the utility function


const FilterSection = () => {
    useEffect(() => {
        setupFeatureInteractions(); // Call the utility function to set up interactivity
    }, []); // Empty dependency ensures it runs only once after the component mounts
    return (
        <div className="filter-section">
            <SearchBar />
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
            <Button className="filter-btn">
                <img src="./assets/icons/horizontal-adjust.svg" alt="adjust icon" style={{ width: "30px" }} />
            </Button>
            <Button className="search-btn">Search</Button>
        </div>
    );
};

export default FilterSection;
