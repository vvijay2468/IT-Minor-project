import React from 'react';

const UsersPage = () => {
  const users = [
    { user_id: 1, username: 'admin01', password: '********', role: 'admin' },
    { user_id: 2, username: 'tech_guy', password: '********', role: 'technician' },
    { user_id: 3, username: 'homeuser1', password: '********', role: 'consumer' },
  ];

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Users</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>ID</th><th>Username</th><th>Password</th><th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.user_id}>
              <td>{user.user_id}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
