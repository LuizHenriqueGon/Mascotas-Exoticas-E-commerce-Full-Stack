import React, { useEffect, useState } from 'react';
import ProdutoService from '../services/ProdutoService';

const CategoryFilter = ({ onSelectCategory }) => {
  // Adicione isso para testar
  console.log("Serviço carregado:", ProdutoService); 

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    ProdutoService.listarCategorias()
      .then(res => setCategorias(res.data))
      .catch(err => console.error("Erro ao carregar categorias", err));
  }, []);

  return (
    <div style={containerStyle}>
      <button style={btnStyle} onClick={() => onSelectCategory(null)}>Todos</button>
      {categorias.map(cat => (
        <button 
          key={cat.id} 
          style={btnStyle} 
          onClick={() => onSelectCategory(cat.id)}
        >
          {cat.nome}
        </button>
      ))}
    </div>
  );
};

const containerStyle = { display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '30px' };
const btnStyle = { padding: '8px 16px', borderRadius: '20px', border: '1px solid #27ae60', backgroundColor: 'white', color: '#27ae60', cursor: 'pointer', fontWeight: 'bold' };

export default CategoryFilter;