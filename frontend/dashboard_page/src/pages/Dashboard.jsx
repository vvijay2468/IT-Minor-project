import React from 'react';
import ConsumerDashboard from './ConsumerDashboard';
import TechnicianDashboard from './TechnicianDashboard';
import AdminDashboard from './AdminDashboard';

const Dashboard = ({ userRole }) => {
  if (!userRole) {
    return <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Unauthorized. Please login first.</h2>;
  }

  return (
    <>
      {userRole === 'consumer' && <ConsumerDashboard />}
      {userRole === 'technician' && <TechnicianDashboard />}
      {userRole === 'admin' && <AdminDashboard />}
    </>
  );
};

export default Dashboard;
