import React from 'react';
import './index.css'; 
import { toggleSidebar } from '../utils/sidebar';

function Navbar() {
    return (
        <>
        <nav className="navbar">
            <div className="logo-container">
                <img
                    className="menu-button"
                    src="./assets/icons/dots-menu.svg"
                    alt="menu logo"
                    style={{ width: "21px" }}
                />
                <img
                    className="brand"
                    src="https://preview.keenthemes.com/metronic8/demo61/assets/media/logos/demo44.svg"
                    alt="Metronic logo"
                />
                <i className="bx bx-menu menu-icon" onClick={() => toggleSidebar("sidebar")}></i>
            </div>
            <div className="sub-container">
                <ul className="nav-links">
                    <li id="link1">Home</li>
                    <li>Pages</li>
                    <li>Apps</li>
                    <li>Help</li>
                </ul>
                <div className="right-container">
                    <img
                        className="nav-icon border1"
                        src="./assets/icons/notification-icon.svg"
                        alt="Notification Icon"
                        style={{ width: "33px" }}
                    />
                    <img
                        className="nav-icon border2"
                        src="./assets/icons/message-icon.svg"
                        alt="Message Icon"
                    />
                    <img
                        className="nav-icon border3"
                        src="./assets/icons/menu-icon.svg"
                        alt="Menu Icon"
                    />
                    <div className="user-profile">
                        <span>
                            &nbsp;Hello <br />
                            <span className="username">Ethan</span>
                        </span>
                        <img
                            className="avatar"
                            src="https://preview.keenthemes.com/metronic8/demo61/assets/media/avatars/300-3.jpg"
                            alt="User Avatar"
                        />
                    </div>
                </div>
            </div>
        </nav>
        {/* Sidebar menu - smaller device */}
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
    </>
    );
}

export default Navbar;
