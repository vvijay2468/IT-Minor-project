import React, { useState, useEffect } from 'react';

const AlertsPage = ({ setCriticalAlert }) => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const alertsData = [
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

    // Set the alerts after fetching (or using hardcoded data)
    setAlerts(alertsData);
    
  }, []);  // Empty dependency array to run only once

  // Check for critical alerts after the alerts are set
  useEffect(() => {
    const hasCriticalAlert = alerts.some(alert => alert.alert_type === 'Critical');
    setCriticalAlert(hasCriticalAlert);
  }, [alerts, setCriticalAlert]);  // Re-run when 'alerts' changes

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
            <tr
              key={alert.alert_id}
              style={{ backgroundColor: getRowColor(alert.alert_type) }}
            >
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

// Function to decide the color of the row based on alert type
const getRowColor = (alertType) => {
  switch (alertType) {
    case 'Critical':
      return '#ff4d4d'; // Red for critical
    case 'Resolved':
      return '#4CAF50'; // Green for resolved
    case 'Warning':
      return '#ffcc00'; // Yellow for warning
    default:
      return 'white'; // Default color
  }
};

export default AlertsPage;


