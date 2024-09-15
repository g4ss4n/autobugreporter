import React, { useState } from 'react';
import '../styles/Recording.css'; // Import CSS for styling

const Recording: React.FC = () => {
    const [isRecording, setIsRecording] = useState(false);

    const handleRecord = () => {
        setIsRecording(true);
        // Start recording logic
    };

    const handleStop = () => {
        setIsRecording(false);
        // Stop recording logic and process data
    };

    return (
        <div className="recording">
            <h1>Recording</h1>
            <p>Record your steps to reproduce the bug.</p>
            <button onClick={handleRecord} disabled={isRecording}>
                Record
            </button>
            <button onClick={handleStop} disabled={!isRecording}>
                Stop
            </button>
        </div>
    );
};

export default Recording;
