import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/Dashboard';
import AlertsPage from './pages/AlertsPage';
import FaultLogsPage from './pages/Faults_LogsPage';
import MaintenancePage from './pages/MaintenancePage';
import UsersPage from './pages/UsersPage';
import DevicesPage from './pages/DevicesPage';
import SensorDataPage from './pages/Sensor_DataPage';

function App() {
  const [userRole, setUserRole] = useState(null);

  return (
    <Router>
      <Routes>
        {/* Route for Login Page */}
        <Route path="/" element={<LoginPage setUserRole={setUserRole} />} />

        {/* Route for Technician Dashboard */}
        <Route path="/dashboard" element={<DashboardPage userRole={userRole} />} />

        {/* Routes for each of the table pages */}
        <Route path="/alerts" element={<AlertsPage />} />
        <Route path="/fault-logs" element={<FaultLogsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/sensor-data" element={<SensorDataPage />} />
        <Route path="/devices" element={<DevicesPage />} /> 
        <Route path="/maintenance" element={<MaintenancePage />} />
      </Routes>
    </Router>
  );
}

export default App;
