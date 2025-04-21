import React from 'react';
import { Link } from 'react-router-dom';

const ConsumerDashboard = () => {
  const blocks = [
    { name: 'Devices', path: '/devices' },
    { name: 'Maintenance', path: '/maintenance' },
  ];

  const gridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1.5rem',
    padding: '2rem',
  };

  const blockStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '2rem',
    width: '200px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
    transition: 'transform 0.2s ease, background-color 0.2s ease',
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
    e.currentTarget.style.backgroundColor = '#e6f0ff';
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.backgroundColor = '#f9f9f9';
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Consumer Dashboard</h2>
      <div style={gridStyle}>
        {blocks.map((block, index) => (
          <Link
            to={block.path}
            key={index}
            style={blockStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {block.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ConsumerDashboard;
