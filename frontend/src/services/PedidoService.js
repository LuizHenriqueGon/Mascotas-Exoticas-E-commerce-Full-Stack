import api from './api';

const PedidoService = {
  // Envia a compra (Agora aceita o objeto usuário junto)
  finalizarCompra: (pedido) => api.post('/pedidos', pedido),
  
  // Lista tudo (Para Admin)
  listarVendas: () => api.get('/pedidos'),

  // --- NOVO: Lista só os meus pedidos ---
  listarMeusPedidos: (idUsuario) => api.get(`/pedidos/meus-pedidos/${idUsuario}`)
};

export default PedidoService;