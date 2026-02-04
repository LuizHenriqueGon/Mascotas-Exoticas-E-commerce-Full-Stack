import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ produto, onAdd }) => {
  const temEstoque = produto.estoque > 0;

  return (
    <div style={cardStyle}>
      {/* Imagem clicável leva para detalhes */}
      <Link to={`/produto/${produto.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img 
            src={produto.urlImagem || "https://via.placeholder.com/200"} 
            alt={produto.nome} 
            style={imgStyle} 
        />
        <h3>{produto.nome}</h3>
      </Link>

      <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#27ae60' }}>
        R$ {produto.preco?.toFixed(2)}
      </p>
      
      <p style={{ fontSize: '12px', color: '#7f8c8d' }}>
        {temEstoque ? `${produto.estoque} un. restantes` : 'Indisponível'}
      </p>

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
const cardStyle = { 
    border: '1px solid #eee', borderRadius: '15px', padding: '15px', 
    width: '220px', backgroundColor: '#fff', textAlign: 'center',
    transition: 'transform 0.2s', boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
};
const imgStyle = { width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px', cursor: 'pointer' };
const btnStyle = { width: '100%', padding: '8px', backgroundColor: '#2c3e50', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' };
const btnEsgotadoStyle = { ...btnStyle, backgroundColor: '#95a5a6', cursor: 'not-allowed' };

export default ProductCard;