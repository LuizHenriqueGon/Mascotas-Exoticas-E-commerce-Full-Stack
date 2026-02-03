import React, { useState } from 'react';
import AuthService from '../services/AuthService';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
  const [form, setForm] = useState({ email: '', senha: '' });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    AuthService.login(form)
      .then(res => {
        onLogin(res.data); // Atualiza o estado global
        alert(`Bem-vindo, ${res.data.nome}!`);
        // Redireciona dependendo do nível de acesso
        if (res.data.admin) navigate('/admin');
        else navigate('/');
      })
      .catch(() => alert("Email ou senha incorretos!"));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
      <h2>🔐 Acesso ao Sistema</h2>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input placeholder="Email" type="email" onChange={e => setForm({...form, email: e.target.value})} required />
        <input placeholder="Senha" type="password" onChange={e => setForm({...form, senha: e.target.value})} required />
        <button type="submit" style={{ backgroundColor: '#3498db', color: 'white', border: 'none', padding: '10px' }}>Entrar</button>
      </form>
      <p style={{ marginTop: '10px' }}>Não tem conta? <Link to="/register">Cadastre-se aqui</Link></p>
    </div>
  );
};

export default LoginPage;