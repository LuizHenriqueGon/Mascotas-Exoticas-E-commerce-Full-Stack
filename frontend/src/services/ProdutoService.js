import api from './api';

const ProdutoService = {
  // Busca todos os animais da vitrine
  listarTodos: () => api.get('/produtos'),

  // Busca um animal específico por ID
  buscarPorId: (id) => api.get(`/produtos/${id}`),

  // Cadastra um novo animal
  cadastrar: (produto) => api.post('/produtos', produto),

  // ATUALIZA um animal existente (Essa é a função que estava faltando!)
  atualizar: (id, produto) => api.put(`/produtos/${id}`, produto),

  // REMOVE um animal da loja
  excluir: (id) => api.delete(`/produtos/${id}`),

  // Busca as categorias (usado para o filtro)
  listarCategorias: () => api.get('/categorias'),
};

export default ProdutoService;