import React, { useState } from 'react';
import '../styles/ManualReport.css'; // Import CSS for styling
import clipboardCopy from 'clipboard-copy'; // Use clipboard-copy for copying text
import { FaInfoCircle, FaStickyNote, FaClipboardCheck, FaClipboard } from 'react-icons/fa';
import { IoFootstepsOutline } from "react-icons/io5";
import { faker } from '@faker-js/faker'; // Updated import for Faker

const ManualReport: React.FC = () => {
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [steps, setSteps] = useState('');
    const [expectedResult, setExpectedResult] = useState('');
    const [actualResult, setActualResult] = useState('');
    const [webhookUrl, setWebhookUrl] = useState('');
    const [copySuccess, setCopySuccess] = useState('');

    const generateReportDetails = () => {
        // Generate report details using Faker
        setTitle(faker.lorem.word());
        setSteps(faker.lorem.lines(3));
        setExpectedResult(faker.lorem.sentence());
        setActualResult(faker.lorem.sentence());
    };

    const handlePublish = async () => {
        try {
            // Here you would use the webhook URL to publish the report
            // For now, just logging to console
            console.log({
                title,
                description,
                steps,
                expectedResult,
                actualResult
            });
            alert('Bug report published successfully');
        } catch (error) {
            console.error('Error publishing bug report:', error);
        }
    };

    const handleCopy = (text: string) => {
        clipboardCopy(text)
            .then(() => setCopySuccess('Copied!'))
            .catch(() => setCopySuccess('Failed to copy.'));
    };

    return (
        <div className="manual-report">
            <h1>Create a Bug Report</h1>
            <form>
                <div className="form-group">
                    <FaInfoCircle className="input-icon" />
                    <textarea
                        className="form-input"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Describe the bug in detail..."
                    />
                </div>
                <button className="generate-button" type="button" onClick={generateReportDetails}>Generate Report</button>

                <div className="form-group">
                    <FaStickyNote className="input-icon" />
                    <input
                        className="form-input"
                        type="text"
                        value={title}
                        readOnly
                        placeholder="Title"
                    />
                    <FaClipboard
                        className="copy-icon"
                        onClick={() => handleCopy(title)}
                        title="Copy to clipboard"
                    />
                </div>

                <div className="form-group">
                    <IoFootstepsOutline className="input-icon" />
                    <textarea
                        className="form-input"
                        value={steps}
                        readOnly
                        placeholder="Steps to Reproduce"
                    />
                    <FaClipboard
                        className="copy-icon"
                        onClick={() => handleCopy(steps)}
                        title="Copy to clipboard"
                    />
                </div>

                <div className="form-group">
                    <FaClipboardCheck className="input-icon" />
                    <input
                        className="form-input"
                        type="text"
                        value={expectedResult}
                        readOnly
                        placeholder="Expected Result"
                    />
                    <FaClipboard
                        className="copy-icon"
                        onClick={() => handleCopy(expectedResult)}
                        title="Copy to clipboard"
                    />
                </div>

                <div className="form-group">
                    <FaClipboardCheck className="input-icon" />
                    <input
                        className="form-input"
                        type="text"
                        value={actualResult}
                        readOnly
                        placeholder="Actual Result"
                    />
                    <FaClipboard
                        className="copy-icon"
                        onClick={() => handleCopy(actualResult)}
                        title="Copy to clipboard"
                    />
                </div>

                <div className="form-group">
                    <FaInfoCircle className="input-icon" />
                    <input
                        className="form-input"
                        type="text"
                        value={webhookUrl}
                        onChange={(e) => setWebhookUrl(e.target.value)}
                        placeholder="Webhook URL"
                    />
                </div>

                <button className="publish-button" type="button" onClick={handlePublish}>Publish</button>
                {copySuccess && <span className="copy-success">{copySuccess}</span>}
            </form>
        </div>
    );
};

export default ManualReport;
