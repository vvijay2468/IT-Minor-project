import React from 'react';

const ConsumerDashboard = () => {
  // Dummy data for now
  const devices = [
    { id: 1, name: 'Smart Meter A1', status: 'Active' },
    { id: 2, name: 'Solar Inverter B2', status: 'Inactive' }
  ];

  const maintenance = [
    { id: 1, device: 'Smart Meter A1', date: '2024-04-01', status: 'Completed' },
    { id: 2, device: 'Solar Inverter B2', date: '2024-04-10', status: 'Scheduled' }
  ];

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Consumer Dashboard</h2>

      <div style={{ marginTop: '2rem' }}>
        <h3>Devices</h3>
        <table border="1" cellPadding="10" style={{ margin: 'auto' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {devices.map(device => (
              <tr key={device.id}>
                <td>{device.id}</td>
                <td>{device.name}</td>
                <td>{device.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3>Maintenance</h3>
        <table border="1" cellPadding="10" style={{ margin: 'auto' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Device</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {maintenance.map(entry => (
              <tr key={entry.id}>
                <td>{entry.id}</td>
                <td>{entry.device}</td>
                <td>{entry.date}</td>
                <td>{entry.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConsumerDashboard;
