import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import AddDeviceForm from "../components/AddDeviceForm";

const DevicesPage = () => {
  const [devices, setDevices] = useState([]);

  const fetchDevices = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "devices"));
      const devicesList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDevices(devicesList);
    } catch (error) {
      console.error("Error fetching devices: ", error);
    }
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Devices</h2>
      <AddDeviceForm onDeviceAdded={fetchDevices} />
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Power Rating (kW)</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {devices.map((device) => (
            <tr key={device.id}>
              <td>{device.id}</td>
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
