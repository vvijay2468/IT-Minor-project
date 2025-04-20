import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/Dashboard';

function App() {
  const [userRole, setUserRole] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage setUserRole={setUserRole} />} />
        <Route path="/dashboard" element={<DashboardPage userRole={userRole} />} />
      </Routes>
    </Router>
  );
}

export default App;


