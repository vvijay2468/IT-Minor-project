import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
  const [criticalAlert, setCriticalAlert] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for Login Page */}
          <Route path="/" element={<LoginPage setUserRole={setUserRole} />} />

          {/* Route for Dashboard */}
          <Route 
            path="/dashboard" 
            element={<DashboardPage userRole={userRole} criticalAlert={criticalAlert} />} 
          />

          {/* Routes for each of the table pages */}
          <Route path="/alerts" element={<AlertsPage setCriticalAlert={setCriticalAlert} />} />
          <Route path="/fault-logs" element={<FaultLogsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/sensor-data" element={<SensorDataPage />} />
          <Route path="/devices" element={<DevicesPage />} /> 
          <Route path="/maintenance" element={<MaintenancePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
