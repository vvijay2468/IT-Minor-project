import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const AddDeviceForm = ({ onDeviceAdded }) => {
  const [deviceData, setDeviceData] = useState({
    device_name: "",
    device_type: "",
    power_rating: "",
    location: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "devices"), {
        ...deviceData,
        power_rating: parseFloat(deviceData.power_rating),
        created_at: new Date(),
      });
      setDeviceData({
        device_name: "",
        device_type: "",
        power_rating: "",
        location: "",
      });
      if (onDeviceAdded) onDeviceAdded();
    } catch (error) {
      console.error("Error adding device: ", error);
    }
  };

  const handleChange = (e) => {
    setDeviceData({
      ...deviceData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "500px", margin: "20px auto", padding: "20px" }}
    >
      <h3>Add New Device</h3>
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          name="device_name"
          placeholder="Device Name"
          value={deviceData.device_name}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <input
          type="text"
          name="device_type"
          placeholder="Device Type"
          value={deviceData.device_type}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <input
          type="number"
          name="power_rating"
          placeholder="Power Rating (kW)"
          value={deviceData.power_rating}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={deviceData.location}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
      </div>
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Add Device
      </button>
    </form>
  );
};

export default AddDeviceForm;
