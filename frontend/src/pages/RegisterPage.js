import React, { useState } from 'react';
import AuthService from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [form, setForm] = useState({ nome: '', email: '', senha: '' });
  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();
    AuthService.cadastrar(form)
      .then(() => {
        alert("Conta criada com sucesso! Faça login.");
        navigate('/login');
      })
      .catch(err => alert("Erro ao cadastrar: " + (err.response?.data || "Erro desconhecido")));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
      <h2>📝 Criar Nova Conta</h2>
      <form onSubmit={handleCadastro} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input placeholder="Nome Completo" onChange={e => setForm({...form, nome: e.target.value})} required />
        <input placeholder="Email" type="email" onChange={e => setForm({...form, email: e.target.value})} required />
        <input placeholder="Senha" type="password" onChange={e => setForm({...form, senha: e.target.value})} required />
        <button type="submit" style={{ backgroundColor: '#27ae60', color: 'white', border: 'none', padding: '10px' }}>Cadastrar</button>
      </form>
    </div>
  );
};

export default RegisterPage;