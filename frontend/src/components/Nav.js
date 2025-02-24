import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Raven's Nest Egg</Link>
            </div>
            <ul className="navbar-links">
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/expenses">Expenses</Link>
                </li>
                <li>
                    <Link to="/income">Income</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>    
                </li>
            </ul>
        </nav>
    )
};

export default Nav;