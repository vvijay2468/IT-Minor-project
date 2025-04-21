import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const MaintenancePage = () => {
  const [maintenance, setMaintenance] = useState([]);
  const [devices, setDevices] = useState([]);
  const [error, setError] = useState('');
  const [newMaintenance, setNewMaintenance] = useState({
    device_id: '',
    next_maintenance: '',
    technician_id: '',
    maintenance_type: '',
    maintenance_status: 'Scheduled',
    maintenance_notes: ''
  });

  const fetchMaintenance = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'maintenance'));
      const maintenanceList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMaintenance(maintenanceList);
    } catch (error) {
      console.error("Error fetching maintenance:", error);
    }
  };

  const fetchDevices = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'devices'));
      const devicesList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setDevices(devicesList);
    } catch (error) {
      console.error("Error fetching devices:", error);
    }
  };

  useEffect(() => {
    fetchMaintenance();
    fetchDevices();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Check if device exists
    const deviceExists = devices.some(device => device.id === newMaintenance.device_id);
    if (!deviceExists) {
      setError('Invalid Device ID. Please enter an existing device ID.');
      return;
    }

    try {
      await addDoc(collection(db, 'maintenance'), {
        ...newMaintenance,
        last_maintenance: new Date().toISOString().split('T')[0],
        created_at: new Date().toISOString()
      });
      setNewMaintenance({
        device_id: '',
        next_maintenance: '',
        technician_id: '',
        maintenance_type: '',
        maintenance_status: 'Scheduled',
        maintenance_notes: ''
      });
      fetchMaintenance();
    } catch (error) {
      setError('Error adding maintenance: ' + error.message);
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Maintenance Schedule</h2>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <h3>Add New Maintenance</h3>
        {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
        <div style={{ display: 'grid', gap: '1rem', maxWidth: '500px' }}>
          <select
            value={newMaintenance.device_id}
            onChange={(e) => setNewMaintenance({...newMaintenance, device_id: e.target.value})}
            required
          >
            <option value="">Select Device</option>
            {devices.map(device => (
              <option key={device.id} value={device.id}>
                {device.device_name} (ID: {device.id})
              </option>
            ))}
          </select>
          <input
            type="date"
            placeholder="Next Maintenance Date"
            value={newMaintenance.next_maintenance}
            onChange={(e) => setNewMaintenance({...newMaintenance, next_maintenance: e.target.value})}
            required
          />
          <input
            type="number"
            placeholder="Technician ID"
            value={newMaintenance.technician_id}
            onChange={(e) => setNewMaintenance({...newMaintenance, technician_id: e.target.value})}
            required
          />
          <input
            type="text"
            placeholder="Maintenance Type"
            value={newMaintenance.maintenance_type}
            onChange={(e) => setNewMaintenance({...newMaintenance, maintenance_type: e.target.value})}
            required
          />
          <textarea
            placeholder="Maintenance Notes"
            value={newMaintenance.maintenance_notes}
            onChange={(e) => setNewMaintenance({...newMaintenance, maintenance_notes: e.target.value})}
          />
          <button type="submit">Add Maintenance</button>
        </div>
      </form>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>ID</th><th>Device</th><th>Last</th><th>Next</th><th>Tech ID</th><th>Type</th><th>Status</th><th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {maintenance.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
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
