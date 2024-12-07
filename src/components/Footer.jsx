import React from "react";
import './index.css'; // Optional: If you want to style the footer separately

const Footer = () => {
    return (
        <footer className="footer">
            <div className="left-foot">
                <p>2024 © <span>Keenthemes</span></p>
            </div>

            <div className="right-foot">
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Purchase</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
