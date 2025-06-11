import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [hovered, setHovered] = useState(null);

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    padding: '20px 0',
    borderBottom: '1px solid #ddd',
    backgroundColor: '#fff',
  };

  const linkStyle = (path) => ({
    textDecoration: 'none',
    color: location.pathname === path ? 'white' : '#333',
    backgroundColor:
      location.pathname === path
        ? 'green'
        : hovered === path
        ? 'lightgreen'
        : 'transparent',
    padding: '8px 16px',
    borderRadius: '8px',
    fontWeight: location.pathname === path ? 'bold' : 'normal',
    transition: 'all 0.2s',
  });

  const handleMouseEnter = (path) => setHovered(path);
  const handleMouseLeave = () => setHovered(null);

  const navItems = [
    { to: '/', label: 'Small Towns' },
    { to: '/list', label: 'Cities' },
    { to: '/restaurants', label: 'Restaurants' },
    { to: '/recommend', label: 'Recommend' },
    { to: '/planner', label: 'Planner' },
  ];

  return (
    <nav style={navStyle}>
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          style={linkStyle(item.to)}
          onMouseEnter={() => handleMouseEnter(item.to)}
          onMouseLeave={handleMouseLeave}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
