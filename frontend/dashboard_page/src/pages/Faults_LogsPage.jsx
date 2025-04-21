import React from 'react';

const FaultLogsPage = () => {
  const faults = [
    { fault_id: 101, data_id: 201, fault_type: 'Overcurrent', severity: 'High', fault_description: 'Current exceeded threshold', resolved: false, resolution_timestamp: null },
    { fault_id: 102, data_id: 202, fault_type: 'Low PF', severity: 'Medium', fault_description: 'Power factor below 0.85', resolved: true, resolution_timestamp: '2025-04-20 18:00:00' },
    { fault_id: 103, data_id: 203, fault_type: 'Voltage Spike', severity: 'Critical', fault_description: 'Sudden voltage rise detected', resolved: true, resolution_timestamp: '2025-04-19 13:15:00' },
  ];

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Fault Logs</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>ID</th><th>Data ID</th><th>Type</th><th>Severity</th><th>Description</th><th>Resolved</th><th>Resolved At</th>
          </tr>
        </thead>
        <tbody>
          {faults.map(fault => (
            <tr key={fault.fault_id}>
              <td>{fault.fault_id}</td>
              <td>{fault.data_id}</td>
              <td>{fault.fault_type}</td>
              <td>{fault.severity}</td>
              <td>{fault.fault_description}</td>
              <td>{fault.resolved ? 'Yes' : 'No'}</td>
              <td>{fault.resolution_timestamp || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FaultLogsPage;
