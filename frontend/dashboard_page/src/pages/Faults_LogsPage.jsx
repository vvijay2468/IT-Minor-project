import React, { useState, useEffect } from 'react';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/config';

const FaultLogsPage = () => {
  const [faults, setFaults] = useState([]);

  const fetchFaults = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'faults'));
      const faultsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setFaults(faultsList);
    } catch (error) {
      console.error("Error fetching faults:", error);
    }
  };

  useEffect(() => {
    fetchFaults();
  }, []);

  const handleResolvedChange = async (faultId, isResolved) => {
    try {
      const faultRef = doc(db, 'faults', faultId);
      await updateDoc(faultRef, {
        resolved: isResolved,
        resolution_timestamp: isResolved ? new Date().toISOString() : null
      });
      fetchFaults(); // Refresh the list
    } catch (error) {
      console.error("Error updating fault:", error);
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Fault Logs</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>ID</th>
            <th>Data ID</th>
            <th>Type</th>
            <th>Severity</th>
            <th>Description</th>
            <th>Resolved</th>
            <th>Resolved At</th>
          </tr>
        </thead>
        <tbody>
          {faults.map(fault => (
            <tr key={fault.id}>
              <td>{fault.id}</td>
              <td>{fault.data_id}</td>
              <td>{fault.fault_type}</td>
              <td>{fault.severity}</td>
              <td>{fault.fault_description}</td>
              <td>
                <input
                  type="checkbox"
                  checked={fault.resolved}
                  onChange={(e) => handleResolvedChange(fault.id, e.target.checked)}
                />
              </td>
              <td>{fault.resolution_timestamp || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FaultLogsPage;
