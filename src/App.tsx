import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Recording from './pages/Recording';
import ManualReport from './pages/ManualReport';
import Navbar from './components/Navbar'; // Import the Navbar component

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar /> {/* Include the Navbar component */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/recording" element={<Recording />} />
          <Route path="/manual-report" element={<ManualReport />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
