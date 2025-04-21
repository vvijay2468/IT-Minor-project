import React from 'react';

const AlertsPage = () => {
  const alerts = [
    {
      alert_id: 1,
      fault_id: 101,
      timestamp: '2025-04-20 14:30:00',
      alert_message: 'Overcurrent detected in Device A',
      alert_type: 'Warning',
    },
    {
      alert_id: 2,
      fault_id: 102,
      timestamp: '2025-04-20 15:10:00',
      alert_message: 'Power factor below threshold in Device B',
      alert_type: 'Critical',
    },
    {
      alert_id: 3,
      fault_id: 103,
      timestamp: '2025-04-20 16:05:00',
      alert_message: 'Voltage spike detected in Device C',
      alert_type: 'Info',
    },
    {
      alert_id: 4,
      fault_id: 104,
      timestamp: '2025-04-20 17:45:00',
      alert_message: 'Device D resumed normal operation',
      alert_type: 'Resolved',
    },
  ];

  return (
    <div className="alerts-page" style={{ padding: '1rem' }}>
      <h2>Alerts</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Alert ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fault ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Timestamp</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Message</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Type</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((alert) => (
            <tr key={alert.alert_id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{alert.alert_id}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{alert.fault_id}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{alert.timestamp}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{alert.alert_message}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{alert.alert_type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlertsPage;
