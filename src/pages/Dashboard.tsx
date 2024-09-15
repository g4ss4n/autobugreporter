import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css'; // Import CSS for styling

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <h1>Bug Reporting Tool</h1>
            <p>
                Welcome to the <strong>Bug Reporting Tool</strong>, your comprehensive solution for efficient and organized bug reporting. Our platform is meticulously crafted to simplify the process of documenting, tracking, and managing software issues, empowering teams to resolve bugs swiftly and effectively.
            </p>
            <p>
                Whether you need to <strong>record a new bug</strong> with a streamlined interface or <strong>create a detailed manual report</strong>, our tool offers robust features tailored to support your development workflow. Explore the options below to get started and enhance your bug reporting process:
            </p>
            <div className="options">
                <Link to="/recording" className="btn">Record a Bug</Link>
                <Link to="/manual-report" className="btn">Create Manual Report</Link>
            </div>
        </div>
    );
};

export default Dashboard;
