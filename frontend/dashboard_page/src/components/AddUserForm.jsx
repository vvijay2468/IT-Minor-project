import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const AddUserForm = ({ onUserAdded }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    role: "consumer",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      console.log("Attempting to add user:", userData);
      const docRef = await addDoc(collection(db, "users"), {
        ...userData,
        created_at: new Date(),
      });
      console.log("User added with ID:", docRef.id);
      setUserData({
        username: "",
        password: "",
        role: "consumer",
      });
      if (onUserAdded) onUserAdded();
    } catch (err) {
      console.error("Error adding user:", err);
      setError("Failed to add user. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "500px", margin: "20px auto", padding: "20px" }}
    >
      <h3>Add New User</h3>
      {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={userData.username}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <select
          name="role"
          value={userData.role}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        >
          <option value="consumer">Consumer</option>
          <option value="technician">Technician</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={loading}
        style={{
          padding: "10px 20px",
          backgroundColor: loading ? "#cccccc" : "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Adding..." : "Add User"}
      </button>
    </form>
  );
};

export default AddUserForm;
