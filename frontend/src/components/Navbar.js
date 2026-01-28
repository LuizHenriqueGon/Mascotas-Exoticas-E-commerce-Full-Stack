import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <nav style={navStyle}>
      <div style={logoStyle}>🦎 Mascotas Exóticas</div>
      <ul style={menuStyle}>
        <li><Link to="/" style={linkStyle}>Vitrine</Link></li>
        <li>
          <Link to="/carrinho" style={linkStyle}>
            Carrinho 🛒 <span style={badgeStyle}>{cartCount}</span>
          </Link>
        </li>
        <li><Link to="/admin" style={linkStyle}>Gestão</Link></li>
      </ul>
    </nav>
  );
};

// Definição dos estilos que estavam faltando
const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 50px',
  height: '70px',
  backgroundColor: '#2c3e50',
  color: 'white'
};

const logoStyle = { fontSize: '24px', fontWeight: 'bold', color: '#27ae60' };
const menuStyle = { display: 'flex', listStyle: 'none', gap: '25px', alignItems: 'center' };
const linkStyle = { color: 'white', textDecoration: 'none', fontWeight: '500' };
const badgeStyle = { backgroundColor: '#e67e22', padding: '2px 8px', borderRadius: '10px', fontSize: '12px', marginLeft: '5px' };

export default Navbar;