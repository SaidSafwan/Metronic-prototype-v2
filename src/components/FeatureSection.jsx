import React, { useEffect } from "react";
import { setupFeatureInteractions } from "../utils/interactiveFeatures"; // Import the utility function
import "./index.css";

const FeatureSection = () => {
    useEffect(() => {
        setupFeatureInteractions(); // Call the utility function to set up interactivity
    }, []); // Empty dependency ensures it runs only once after the component mounts

    return (
        <div className="feature-section">
            <ul className="feature-links">
                <li className="active">Rent</li>
                <li>Buy</li>
                <li>New Construction</li>
                <li>Business Space</li>
            </ul>
        </div>
    );
};

export default FeatureSection;
