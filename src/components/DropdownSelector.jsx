import React from "react";
import { initDropdowns } from "../utils/dropdown"; // Import the utility function
import "./dropdown.css"; // Dropdown styles
import "./index.css"; // General styles

const DropdownSelector = ({ label, options }) => {
    return (
        <>
        <div
            className="select-menu"
            onClick={() => {
                initDropdowns(); // Re-initialize dropdown functionality every time it is clicked
            }}
        >
            <div className="select-btn">
                <span className="sBtn-text">{label}</span>
                <i className="bx bx-chevron-down"></i>
            </div>
            <ul className="options">
                {options.map((option, index) => (
                    <li
                        key={index}
                        className={`option ${option === label ? "selected" : ""}`}
                    >
                        <span className="option-text">{option}</span>
                        <i className="bx bx-check" style={{ color: "#1B84FF" }}></i>
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
};

export default DropdownSelector;
