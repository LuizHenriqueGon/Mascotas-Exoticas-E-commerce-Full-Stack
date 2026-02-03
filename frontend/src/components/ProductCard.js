import React from 'react';

const ProductCard = ({ produto, onAdd }) => {
  const imagemPadrao = "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?q=80&w=200&auto=format&fit=crop";
  
  // Verifica se tem estoque
  const temEstoque = produto.estoque > 0;

  return (
    <div style={cardStyle}>
      <img src={produto.urlImagem || imagemPadrao} alt={produto.nome} style={imgStyle} />
      <h3>{produto.nome}</h3>
      <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#27ae60' }}>
        R$ {produto.preco?.toFixed(2)}
      </p>
      
      {/* Exibe o estoque para o cliente ver */}
      <p style={{ fontSize: '12px', color: '#7f8c8d' }}>
        {temEstoque ? `${produto.estoque} disponíveis` : 'Indisponível'}
      </p>

      {/* Botão Inteligente: Só ativa se tiver estoque */}
      <button 
        style={temEstoque ? btnStyle : btnEsgotadoStyle} 
        onClick={() => temEstoque && onAdd(produto)}
        disabled={!temEstoque}
      >
        {temEstoque ? '🛒 Adicionar' : '🚫 Esgotado'}
      </button>
    </div>
  );
};

// Estilos
const cardStyle = { border: '1px solid #eee', borderRadius: '15px', padding: '15px', width: '220px', backgroundColor: '#fff', textAlign: 'center' };
const imgStyle = { width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' };

// Estilo normal
const btnStyle = { width: '100%', padding: '8px', backgroundColor: '#2c3e50', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' };

// Estilo esgotado (cinza)
const btnEsgotadoStyle = { ...btnStyle, backgroundColor: '#95a5a6', cursor: 'not-allowed' };

export default ProductCard;