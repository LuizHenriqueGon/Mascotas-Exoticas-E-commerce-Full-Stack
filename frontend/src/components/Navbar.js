import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount, usuario, onLogout }) => {
  return (
    <nav style={navStyle}>
      <div style={logoStyle}>🦎 Mascotas Exóticas</div>
      <ul style={menuStyle}>
        <li><Link to="/" style={linkStyle}>Vitrine</Link></li>
        
        {/* Link do Carrinho */}
        <li>
          <Link to="/cart" style={linkStyle}>
            Carrinho 🛒 <span style={badgeStyle}>{cartCount}</span>
          </Link>
        </li>

        {/* Link Meus Pedidos (Aparece para qualquer usuário logado) */}
        {usuario && (
             <li><Link to="/meus-pedidos" style={linkStyle}>Meus Pedidos</Link></li>
        )}

        {/* Link Gestão (Só Admin) */}
        {usuario && usuario.admin && (
          <li><Link to="/admin" style={linkStyle}>Gestão</Link></li>
        )}

        {/* Área do Usuário */}
        {usuario ? (
          <>
            <li style={{ color: '#ecf0f1', fontSize: '14px' }}>Olá, {usuario.nome.split(' ')[0]}</li>
            <li>
              <button onClick={onLogout} style={btnSairStyle}>Sair</button>
            </li>
          </>
        ) : (
          <li><Link to="/login" style={linkStyle}>Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

// Estilos
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
const menuStyle = { display: 'flex', listStyle: 'none', gap: '20px', alignItems: 'center' };
const linkStyle = { color: 'white', textDecoration: 'none', fontWeight: '500' };
const badgeStyle = { backgroundColor: '#e67e22', padding: '2px 8px', borderRadius: '10px', fontSize: '12px', marginLeft: '5px' };

const btnSairStyle = {
  backgroundColor: 'transparent',
  border: '1px solid #e74c3c',
  color: '#e74c3c',
  padding: '5px 15px',
  borderRadius: '5px',
  cursor: 'pointer',
  fontWeight: 'bold'
};

export default Navbar;