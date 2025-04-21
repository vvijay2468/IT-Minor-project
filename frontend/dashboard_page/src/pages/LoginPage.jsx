import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const users = [
  { username: 'john', password: '123', role: 'technician' },
  { username: 'adam', password: 'admin123', role: 'admin' },
  { username: 'joel', password: 'abc', role: 'consumer' }
];


const LoginPage = ({ setUserRole }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
  
    if (user) {
      setUserRole(user.role);
      navigate('/dashboard');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#f0f0f0'
    }}>
      <form onSubmit={handleLogin} style={{
        padding: '2rem',
        background: 'white',
        borderRadius: '1rem',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '300px',
        textAlign: 'center'
      }}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" style={{
          padding: '0.5rem',
          borderRadius: '0.5rem',
          border: 'none',
          backgroundColor: '#4CAF50',
          color: 'white',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
