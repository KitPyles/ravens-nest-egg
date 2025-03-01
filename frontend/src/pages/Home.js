import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
    <div>
        <h1>Welcome to Raven's Nest Egg</h1>
        <section>
            <h2>Your Personal Finance Companion</h2>
            <p> Track expenses, manage income, and achieve your financial goals.</p>
        </section>
        <section>
            <h3>Key Features</h3>
            <div>
                <div>
                    <h4>Expense Tracking</h4>
                    <p>Categroize and monitor your spending</p>
                </div>
                <div>
                    <h4>Income Management</h4>
                    <p>Keep track of all your income sources</p>
                </div>
                <div>
                    <h4>Settings</h4>
                    <p>Customize your Raven's Nest Egg experience.</p>
                </div>
            </div>
        </section>
        <section>
            <Link
                to="/login"
            >Login</Link>
            <Link
                to="/signup"
            >Sign Up</Link>
        </section>
    </div>
    );
};

export default Home;