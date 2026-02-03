import React, { useEffect, useState } from 'react';
import PedidoService from '../services/PedidoService';
import AuthService from '../services/AuthService';
import { Link } from 'react-router-dom';

const MyOrdersPage = () => {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const usuario = AuthService.getUsuario();
    if (usuario) {
      PedidoService.listarMeusPedidos(usuario.id)
        .then(response => {
          setPedidos(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error("Erro ao buscar pedidos", error);
          setLoading(false);
        });
    } else {
        setLoading(false);
    }
  }, []);

  if (loading) return <div style={{ padding: '40px', textAlign: 'center' }}>Carregando pedidos...</div>;

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>📦 Meus Pedidos</h2>
      <hr style={{ margin: '20px 0', border: '0', borderTop: '1px solid #eee' }} />

      {pedidos.length === 0 ? (
        <div style={{ textAlign: 'center', color: '#777' }}>
            <p>Você ainda não fez nenhuma compra.</p>
            <Link to="/" style={{ color: '#3498db', fontWeight: 'bold' }}>Ir para a loja</Link>
        </div>
      ) : (
        pedidos.map(pedido => (
          <div key={pedido.id} style={cardStyle}>
            <div style={headerStyle}>
              <span><strong>Pedido #{pedido.id}</strong></span>
              <span style={{ color: '#27ae60', fontWeight: 'bold' }}>R$ {pedido.valorTotal?.toFixed(2)}</span>
            </div>
            
            <p style={{ fontSize: '14px', color: '#555', margin: '10px 0' }}>
              📅 Data: {new Date(pedido.dataPedido).toLocaleDateString()} às {new Date(pedido.dataPedido).toLocaleTimeString()}
            </p>
            
            <div style={{ backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px' }}>
                <strong style={{ fontSize: '14px' }}>Itens comprados:</strong>
                <ul style={{ paddingLeft: '20px', marginTop: '5px', marginBottom: 0 }}>
                {pedido.produtos.map((prod, index) => (
                    <li key={index} style={{ fontSize: '14px', color: '#333' }}>
                        {prod.nome} - R$ {prod.preco.toFixed(2)}
                    </li>
                ))}
                </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

// Estilos locais
const cardStyle = { 
    border: '1px solid #ddd', 
    borderRadius: '8px', 
    padding: '20px', 
    marginBottom: '20px', 
    backgroundColor: 'white', 
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)' 
};

const headerStyle = {
    display: 'flex', 
    justifyContent: 'space-between', 
    borderBottom: '1px solid #eee', 
    paddingBottom: '10px',
    marginBottom: '10px'
};

export default MyOrdersPage;