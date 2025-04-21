import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const SensorDataPage = () => {
  const [sensorData, setSensorData] = useState([]);
  const [devices, setDevices] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDevices = async () => {
    const deviceSnapshot = await getDocs(collection(db, 'devices'));
    const deviceMap = {};
    
    if (deviceSnapshot.empty) {
      // Add a default device if no devices exist
      const defaultDevice = {
        device_name: 'Smart Meter A',
        device_type: 'Energy Meter',
        power_rating: 5.5,
        location: 'Building 1'
      };
      
      const docRef = await addDoc(collection(db, 'devices'), defaultDevice);
      deviceMap[docRef.id] = defaultDevice.device_name;
    } else {
      deviceSnapshot.docs.forEach(doc => {
        deviceMap[doc.id] = doc.data().device_name;
      });
    }
    
    return deviceMap;
  };

  const fetchSensorData = async () => {
    try {
      const deviceMap = await fetchDevices();
      setDevices(deviceMap);

      const dataQuery = query(collection(db, 'sensor_data'), orderBy('timestamp', 'desc'));
      const querySnapshot = await getDocs(dataQuery);
      const dataList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        device_name: deviceMap[doc.data().device_id] || 'Unknown Device',
        voltage: Number(doc.data().voltage).toFixed(2),
        current: Number(doc.data().current).toFixed(2),
        power_factor: Number(doc.data().power_factor).toFixed(2),
        power_consumed: Number(doc.data().power_consumed).toFixed(2)
      }));
      setSensorData(dataList);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSensorData();
    // Set up auto-refresh every 5 minutes
    const interval = setInterval(fetchSensorData, 300000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div style={{ padding: '20px', textAlign: 'center' }}>Loading sensor data...</div>;
  if (error) return <div style={{ padding: '20px', color: 'red', textAlign: 'center' }}>{error}</div>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Sensor Data</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>ID</th>
            <th>Device Name</th>
            <th>Timestamp</th>
            <th>Voltage (V)</th>
            <th>Current (A)</th>
            <th>PF</th>
            <th>Energy (kWh)</th>
          </tr>
        </thead>
        <tbody>
          {sensorData.map(data => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.device_name}</td>
              <td>{new Date(data.timestamp).toLocaleString()}</td>
              <td>{data.voltage}</td>
              <td>{data.current}</td>
              <td>{data.power_factor}</td>
              <td>{data.power_consumed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SensorDataPage;
