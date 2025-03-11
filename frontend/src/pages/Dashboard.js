// src/pages/Dashboard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    // Placeholder state for financial data
    const [financialSummary, setFinancialSummary] = useState({
        totalIncome: 5000,
        totalExpenses: 3500,
        netSavings: 1500,
        savingsRate: 30
    });

    const [recentTransactions, setRecentTransactions] = useState([
        { id: 1, type: 'Income', description: 'Salary', amount: 3000, date: '2024-03-01' },
        { id: 2, type: 'Expense', description: 'Rent', amount: -1500, date: '2024-03-05' },
        { id: 3, type: 'Expense', description: 'Groceries', amount: -250, date: '2024-03-10' },
        { id: 4, type: 'Income', description: 'Freelance Work', amount: 500, date: '2024-03-15' }
    ]);

    return (
        <div>
            <h1>Dashboard</h1>
            
            {/* Financial Overview */}
            <section>
                <h2>Financial Summary</h2>
                <div>
                    <p>Total Income: ${financialSummary.totalIncome}</p>
                    <p>Total Expenses: ${financialSummary.totalExpenses}</p>
                    <p>Net Savings: ${financialSummary.netSavings}</p>
                    <p>Savings Rate: {financialSummary.savingsRate}%</p>
                </div>
            </section>

            {/* Quick Actions */}
            <section>
                <h2>Quick Actions</h2>
                <div>
                    <Link to="/add-income">Add Income</Link>
                    <Link to="/add-expense">Add Expense</Link>
                    <Link to="/create-budget">Create Budget</Link>
                </div>
            </section>

            {/* Recent Transactions */}
            <section>
                <h2>Recent Transactions</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentTransactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td>{transaction.date}</td>
                                <td>{transaction.description}</td>
                                <td>{transaction.type}</td>
                                <td style={{ 
                                    color: transaction.type === 'Income' ? 'green' : 'red' 
                                }}>
                                    ${transaction.amount}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            {/* Financial Goals */}
            <section>
                <h2>Financial Goals</h2>
                <div>
                    <p>Emergency Fund: $2000 / $5000</p>
                    <p>Retirement Savings: $10000 / $50000</p>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;