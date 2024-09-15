import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Import CSS for styling

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/" className="navbar-link">Dashboard</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/recording" className="navbar-link">Recording</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/manual-report" className="navbar-link">Manual Report</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
