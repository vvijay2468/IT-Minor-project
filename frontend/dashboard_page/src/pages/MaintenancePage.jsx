import React from 'react';

const MaintenancePage = () => {
  const maintenance = [
    {
      schedule_id: 1, device_id: 1, last_maintenance: '2025-03-01',
      next_maintenance: '2025-06-01', technician_id: 3, maintenance_type: 'Routine',
      maintenance_status: 'Scheduled', maintenance_notes: 'Quarterly inspection'
    },
    {
      schedule_id: 2, device_id: 2, last_maintenance: '2025-02-15',
      next_maintenance: '2025-05-15', technician_id: 4, maintenance_type: 'Repair',
      maintenance_status: 'Completed', maintenance_notes: 'Replaced faulty sensor'
    },
  ];

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Maintenance Schedule</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>ID</th><th>Device</th><th>Last</th><th>Next</th><th>Tech ID</th><th>Type</th><th>Status</th><th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {maintenance.map(item => (
            <tr key={item.schedule_id}>
              <td>{item.schedule_id}</td>
              <td>{item.device_id}</td>
              <td>{item.last_maintenance}</td>
              <td>{item.next_maintenance}</td>
              <td>{item.technician_id}</td>
              <td>{item.maintenance_type}</td>
              <td>{item.maintenance_status}</td>
              <td>{item.maintenance_notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MaintenancePage;
