import React from 'react';

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '2rem'
};

const thtdStyle = {
  border: '1px solid #ccc',
  padding: '8px',
  textAlign: 'left'
};

const AdminDashboard = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2 style={{ marginBottom: '1rem' }}>Admin Dashboard</h2>

      <section>
        <h3>Alerts</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thtdStyle}>ID</th>
              <th style={thtdStyle}>Device ID</th>
              <th style={thtdStyle}>Type</th>
              <th style={thtdStyle}>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={thtdStyle}>1</td>
              <td style={thtdStyle}>D-23</td>
              <td style={thtdStyle}>Overheat</td>
              <td style={thtdStyle}>2025-04-10 12:34</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3>Devices</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thtdStyle}>Device ID</th>
              <th style={thtdStyle}>Location</th>
              <th style={thtdStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={thtdStyle}>D-23</td>
              <td style={thtdStyle}>Mangalore</td>
              <td style={thtdStyle}>Active</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3>Fault Logs</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thtdStyle}>Log ID</th>
              <th style={thtdStyle}>Device ID</th>
              <th style={thtdStyle}>Description</th>
              <th style={thtdStyle}>Resolved</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={thtdStyle}>FL-12</td>
              <td style={thtdStyle}>D-23</td>
              <td style={thtdStyle}>Power Surge</td>
              <td style={thtdStyle}>Yes</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3>Maintenance</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thtdStyle}>Task ID</th>
              <th style={thtdStyle}>Device ID</th>
              <th style={thtdStyle}>Date</th>
              <th style={thtdStyle}>Technician</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={thtdStyle}>M-08</td>
              <td style={thtdStyle}>D-23</td>
              <td style={thtdStyle}>2025-04-08</td>
              <td style={thtdStyle}>John</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3>Sensor Data</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thtdStyle}>Sensor ID</th>
              <th style={thtdStyle}>Device ID</th>
              <th style={thtdStyle}>Value</th>
              <th style={thtdStyle}>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={thtdStyle}>S-44</td>
              <td style={thtdStyle}>D-23</td>
              <td style={thtdStyle}>27°C</td>
              <td style={thtdStyle}>2025-04-10 12:00</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3>Users</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thtdStyle}>User ID</th>
              <th style={thtdStyle}>Username</th>
              <th style={thtdStyle}>Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={thtdStyle}>U-101</td>
              <td style={thtdStyle}>john</td>
              <td style={thtdStyle}>technician</td>
            </tr>
            <tr>
              <td style={thtdStyle}>U-102</td>
              <td style={thtdStyle}>adam</td>
              <td style={thtdStyle}>admin</td>
            </tr>
            <tr>
              <td style={thtdStyle}>U-103</td>
              <td style={thtdStyle}>joel</td>
              <td style={thtdStyle}>consumer</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3>Modify Users</h3>
        <p>This section can be used to create, update or delete user roles.</p>
        <ul>
          <li>Change password</li>
          <li>Update user roles</li>
          <li>Delete users</li>
        </ul>
      </section>
    </div>
  );
};

export default AdminDashboard;
