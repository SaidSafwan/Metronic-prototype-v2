import React from 'react';
import { toggleSidebar } from '../utils/sidebar'; // Import the toggle function
import './index.css'; // Import CSS specific to the sidebar if needed

function Sidebar() {
    return (
        <div className="sidebar" id="sidebar">
            <i 
                className="bx bx-x close-btn" 
                onClick={() => toggleSidebar("sidebar")} // Close Sidebar on click
            ></i>
            <ul>
                <li>Home</li>
                <li>Pages</li>
                <li>Apps</li>
                <li>Help</li>
            </ul>
        </div>
    );
}

export default Sidebar;
