import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase/config';

const AlertsPage = ({ setCriticalAlert }) => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAlerts = async () => {
    try {
      const alertsQuery = query(collection(db, 'alerts'), orderBy('timestamp', 'desc'));
      const querySnapshot = await getDocs(alertsQuery);
      const alertsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      setAlerts(alertsList);
      // Check for critical alerts
      const hasCriticalAlert = alertsList.some(alert => alert.alert_type === 'Critical');
      setCriticalAlert(hasCriticalAlert);
      setError(null);
    } catch (err) {
      console.error('Error fetching alerts:', err);
      setError('Failed to load alerts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlerts();
  }, [setCriticalAlert]);

  if (loading) return <div style={{ padding: '20px', textAlign: 'center' }}>Loading alerts...</div>;
  if (error) return <div style={{ padding: '20px', color: 'red', textAlign: 'center' }}>{error}</div>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Alerts</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>Alert ID</th>
            <th>Fault ID</th>
            <th>Timestamp</th>
            <th>Message</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((alert) => (
            <tr
              key={alert.id}
              style={{ backgroundColor: getRowColor(alert.alert_type) }}
            >
              <td>{alert.id}</td>
              <td>{alert.fault_id}</td>
              <td>{new Date(alert.timestamp).toLocaleString()}</td>
              <td>{alert.alert_message}</td>
              <td>{alert.alert_type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const getRowColor = (alertType) => {
  switch (alertType) {
    case 'Critical':
      return '#ff4d4d';
    case 'Warning':
      return '#ffcc00';
    case 'Resolved':
      return '#4CAF50';
    default:
      return 'white';
  }
};

export default AlertsPage;


