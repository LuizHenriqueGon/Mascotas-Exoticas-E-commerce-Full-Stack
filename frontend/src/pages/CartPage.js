import React, { useState } from 'react';
import PedidoService from '../services/PedidoService';
import { useNavigate } from 'react-router-dom';

// Agora recebemos 'usuario' aqui nas props
const CartPage = ({ items, onRemove, onLimparCarrinho, usuario }) => { 
  const [nomeCliente, setNomeCliente] = useState('');
  const navigate = useNavigate();

  const total = items.reduce((acc, item) => acc + item.preco, 0);

  const handleFinalizar = () => {
    // Se o usuário não estiver logado, manda ele pro login antes!
    if (!usuario) {
      alert("Por favor, faça login para finalizar a compra.");
      navigate('/login');
      return;
    }

    if (!nomeCliente) {
      alert("Digite seu nome para a entrega.");
      return;
    }

    const pedido = {
      nomeCliente: nomeCliente,
      valorTotal: total,
      produtos: items,
      // --- AQUI VINCULAMOS O USUÁRIO ---
      usuario: { id: usuario.id } 
      // ---------------------------------
    };

    PedidoService.finalizarCompra(pedido)
      .then(() => {
        alert("✅ Compra realizada com sucesso!");
        onLimparCarrinho();
        navigate('/meus-pedidos'); // Redireciona para a nova página
      })
      .catch(erro => {
        alert("⚠️ Erro: " + (erro.response?.data || "Falha desconhecida"));
      });
  };

  return (
    <div style={{ padding: '30px' }}>
      <h2>Carrinho de Compras 🛒</h2>
      {items.length === 0 ? <p>Seu carrinho está vazio.</p> : (
        <div>
          {items.map((item, index) => (
            <div key={index} style={{ borderBottom: '1px solid #ddd', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
              <span>{item.nome}</span>
              <span>R$ {item.preco.toFixed(2)} <button onClick={() => onRemove(index)} style={{ marginLeft: '10px', color: 'red' }}>X</button></span>
            </div>
          ))}
          
          <div style={{ marginTop: '20px', backgroundColor: '#f8f9fa', padding: '20px' }}>
            <h3>Total: R$ {total.toFixed(2)}</h3>
            
            {/* Se já estiver logado, preenche o nome automático */}
            <input 
              placeholder="Nome para entrega" 
              value={nomeCliente} 
              onChange={e => setNomeCliente(e.target.value)}
              style={{ padding: '10px', marginRight: '10px' }}
            />
            
            <button onClick={handleFinalizar} style={{ padding: '10px 20px', backgroundColor: '#27ae60', color: 'white', border: 'none', cursor: 'pointer' }}>
              Finalizar Compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;