import api from './api';

const ProdutoService = {
  // Busca todos os animais da vitrine
  listarTodos: () => api.get('/produtos'),

  // Busca um animal específico por ID
  buscarPorId: (id) => api.get(`/produtos/${id}`),

  // Cadastra um novo animal
  cadastrar: (produto) => api.post('/produtos', produto),

  // Atualiza um animal existente
  atualizar: (id, produto) => api.put(`/produtos/${id}`, produto),

  // Remove um animal da loja
  excluir: (id) => api.delete(`/produtos/${id}`),

  // Busca as categorias (ESSA É A QUE ESTAVA DANDO ERRO)
  listarCategorias: () => api.get('/categorias')
}; // <--- Certifique-se de que o objeto fecha aqui

export default ProdutoService;