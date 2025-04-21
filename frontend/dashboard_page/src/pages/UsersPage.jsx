import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import AddUserForm from "../components/AddUserForm";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      console.log("Starting users fetch...");
      const usersRef = collection(db, "users");
      console.log("Users collection reference:", usersRef);

      const querySnapshot = await getDocs(usersRef);
      console.log("Query snapshot received:", querySnapshot);

      const usersList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Processed users:", usersList);

      setUsers(usersList);
      setError(null);
    } catch (err) {
      console.error("Detailed error fetching users:", err);
      setError(`Failed to load users: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading)
    return <div style={{ padding: "20px", textAlign: "center" }}>Loading users...</div>;
  if (error)
    return (
      <div style={{ padding: "20px", color: "red", textAlign: "center" }}>
        <div>{error}</div>
        <button
          onClick={() => fetchUsers()}
          style={{ marginTop: "10px", padding: "5px 10px" }}
        >
          Retry
        </button>
      </div>
    );

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Users</h2>
      <AddUserForm onUserAdded={fetchUsers} />
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th>ID</th>
            <th>Username</th>
            <th>Password</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>********</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
