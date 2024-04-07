import React from 'react';
import './Navigation.css'; // Import the CSS file for styling

// Navigation component
const Navigation = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;