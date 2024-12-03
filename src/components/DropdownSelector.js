import React, { useEffect } from "react";
import { initDropdowns } from "../utils/dropdown"; // Import utility
import { setupFilterItemInteractions } from "../utils/interactiveFilters"; // Import the utility
import "./dropdown.css"; // Import dropdown styles
import "./index.css"; 

const DropdownSelector = ({ label, options }) => {
    useEffect(() => {
        initDropdowns(); // Initialize dropdown interactions
        setupFilterItemInteractions(); // Call the utility to set up interactivity
    }, []);

    return (
        <div className="select-menu">
            <div className="select-btn">
                <span className="sBtn-text">{label}</span>
                <i className="bx bx-chevron-down"></i>
            </div>
            <ul className="options">
                {options.map((option, index) => (
                    <li key={index} className={`option ${option === label ? "selected" : ""}`}>
                        <span className="option-text">{option}</span>
                        <i className="bx bx-check" style={{ color: "#1B84FF" }}></i>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DropdownSelector;
