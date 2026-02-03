import api from './api';

const AuthService = {
  login: (dados) => api.post('/auth/login', dados),
  cadastrar: (dados) => api.post('/auth/cadastrar', dados),
  
  // Salva o usuário no navegador para manter logado
  salvarUsuario: (user) => localStorage.setItem('usuarioLogado', JSON.stringify(user)),
  getUsuario: () => JSON.parse(localStorage.getItem('usuarioLogado')),
  logout: () => localStorage.removeItem('usuarioLogado')
};

export default AuthService;