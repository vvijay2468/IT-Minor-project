import React from 'react';

const SensorDataPage = () => {
  const sensorData = [
    { data_id: 201, device_id: 1, timestamp: '2025-04-20 14:00:00', voltage: 230, current: 5.1, power_factor: 0.89, power_consumed: 1.17 },
    { data_id: 202, device_id: 2, timestamp: '2025-04-20 14:05:00', voltage: 240, current: 4.8, power_factor: 0.92, power_consumed: 1.06 },
    { data_id: 203, device_id: 3, timestamp: '2025-04-20 14:10:00', voltage: 235, current: 5.3, power_factor: 0.86, power_consumed: 1.23 },
  ];

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Sensor Data</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>ID</th><th>Device</th><th>Timestamp</th><th>Voltage (V)</th><th>Current (A)</th><th>PF</th><th>Energy (kWh)</th>
          </tr>
        </thead>
        <tbody>
          {sensorData.map(data => (
            <tr key={data.data_id}>
              <td>{data.data_id}</td>
              <td>{data.device_id}</td>
              <td>{data.timestamp}</td>
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
