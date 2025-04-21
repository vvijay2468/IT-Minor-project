import React from 'react';

const DevicesPage = () => {
  const devices = [
    { device_id: 1, device_name: 'Smart Meter A', device_type: 'Energy Meter', power_rating: 5.5, location: 'Building 1' },
    { device_id: 2, device_name: 'Sensor B', device_type: 'Current Sensor', power_rating: 2.2, location: 'Building 2' },
    { device_id: 3, device_name: 'Sensor C', device_type: 'Voltage Sensor', power_rating: 3.0, location: 'Main Control Room' },
  ];

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Devices</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>ID</th><th>Name</th><th>Type</th><th>Power Rating (kW)</th><th>Location</th>
          </tr>
        </thead>
        <tbody>
          {devices.map(device => (
            <tr key={device.device_id}>
              <td>{device.device_id}</td>
              <td>{device.device_name}</td>
              <td>{device.device_type}</td>
              <td>{device.power_rating}</td>
              <td>{device.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DevicesPage;
