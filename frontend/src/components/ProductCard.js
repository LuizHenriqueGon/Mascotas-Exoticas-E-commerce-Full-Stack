import React from 'react';

// Certifique-se que o "onAdd" está aqui
const ProductCard = ({ produto, onAdd }) => {
  const imagemPadrao = "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?q=80&w=200&auto=format&fit=crop";

  return (
    <div style={cardStyle}>
      <img src={produto.urlImagem || imagemPadrao} alt={produto.nome} style={imgStyle} />
      <h3>{produto.nome}</h3>
      <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#27ae60' }}>
        R$ {produto.preco?.toFixed(2)}
      </p>
      
      {/* O clique agora vai encontrar a função que veio desde o App.js */}
      <button style={btnStyle} onClick={() => onAdd(produto)}>
        🛒 Adicionar
      </button>
    </div>
  );
};

// ... mantenha os estilos abaixo
const cardStyle = { border: '1px solid #eee', borderRadius: '15px', padding: '15px', width: '220px', backgroundColor: '#fff', textAlign: 'center' };
const imgStyle = { width: '100%', height: '150px', objectFit: 'cover', borderRadius: '10px' };
const btnStyle = { width: '100%', padding: '8px', backgroundColor: '#2c3e50', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' };

export default ProductCard;