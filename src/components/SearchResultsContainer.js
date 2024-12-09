import React from "react";
import Card from "./card";
import useMap from "../utils/useMap";
import './index.css';

function SearchResultsContainer() {
    const cardData = [
        {
            image: "https://preview.keenthemes.com/metronic8/demo61/assets/media//stock/900x600/20.jpg",
            title: "Bella Vistastraat 246",
            location: "1074 SH Amsterdam",
            size: "64 m2",
            beds: 2,
            energy: "C",
            price: "€499,000",
            agency: "Vondelland Makelaar B.V.",
            extraClass: "",
        },
        {
            image: "https://preview.keenthemes.com/metronic8/demo61/assets/media//stock/900x600/23.jpg",
            title: "Brenner 79 A",
            location: "1061 OG Amsterdam",
            size: "56 m2",
            beds: 2,
            energy: "D",
            price: "€575,000",
            agency: "RijksPlaats Makelaar",
            extraClass: "",
        },
        {
            image: "https://preview.keenthemes.com/metronic8/demo61/assets/media//stock/900x600/27.jpg",
            title: "Bella Vistastraat 246",
            location: "1109 RV Amsterdam",
            size: "109 m2",
            beds: 3,
            energy: "A",
            price: "€799,000",
            agency: "Vondelland Makelaar B.V.",
            extraClass: "focused",
        },
        {
            image: "https://preview.keenthemes.com/metronic8/demo61/assets/media//stock/900x600/11.jpg",
            title: "Argonautenstraat 16 C",
            location: "1074 SH Amsterdam",
            size: "73 m2",
            beds: 3,
            energy: "C",
            price: "€799,000",
            agency: "RijksPlaats Makelaar",
            extraClass: "",
        },
        {
            image: "https://preview.keenthemes.com/metronic8/demo61/assets/media//stock/900x600/13.jpg",
            title: "Bella Vistastraat 246",
            location: "1074 SH Amsterdam",
            size: "164 m2",
            beds: 5,
            energy: "C",
            price: "€810,000",
            agency: "RijksPlaats Makelaar",
            extraClass: "",
        },
        {
            image: "https://preview.keenthemes.com/metronic8/demo61/assets/media//stock/900x600/1.jpg",
            title: "Bella Vistastraat 246",
            location: "1074 SH Amsterdam",
            size: "64 m2",
            beds: 2,
            energy: "C",
            price: "€399,000",
            agency: "RijksPlaats Makelaar",
            extraClass: "",
        },
    ];
    
    // Initialize map using the hook
    useMap("map", [52.360373, 4.859594], 18);

    return (
        <div className="app-container">
            <div className="app-content">
                <div className="app-left">
                    <div className="record">
                        <div className="results">
                            <p>
                                Showing <b style={{ color: "#252f4a" }}>64</b> search results
                            </p>
                        </div>
                        <div className="filter-area">
                            <select name="rooms" className="dropdown-items clicked">
                                <option className="items">All</option>
                                <option className="items" selected>
                                    Popular
                                </option>
                                <option className="items">Top Rated</option>
                                <option className="items">Best Match</option>
                            </select>
                            <div className="toggle-card">
                                <img src="./assets/icons/icons-grid.svg" alt="grid-icon" className="grid-icon" />
                                <div className="row-btn">
                                    <img src="./assets/icons/icons-rows.svg" alt="row icon" className="row-icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Render Cards Dynamically */}
                    <div className="card-list">
                        {cardData.map((card, index) => (
                            <Card
                                key={index}
                                {...card}
                                index={index} // Pass index as a prop
                                extraClass={index === 2 ? "focused" : ""} // Add 'focused' class to only the 3rd card
                            />
                        ))}
                    </div>
                </div>
                {/* Add map container */}
                <div className="app-right">
                    <div id="map" style={{ width: "100%", height: "500px", borderRadius: "15px" }}></div>
                </div>
            </div>
        </div>
    );
}

export default SearchResultsContainer;
