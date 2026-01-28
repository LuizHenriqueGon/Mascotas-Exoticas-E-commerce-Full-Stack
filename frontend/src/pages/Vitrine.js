import React, { useEffect, useState } from 'react';
import ProdutoService from '../services/ProdutoService';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';

// 1. ADICIONE "onAdd" aqui nos parênteses
const Vitrine = ({ onAdd }) => {
  const [produtos, setProdutos] = useState([]);
  const [categoriaAtiva, setCategoriaAtiva] = useState(null);

  useEffect(() => {
    ProdutoService.listarTodos()
      .then(res => setProdutos(res.data))
      .catch(err => console.error("Erro ao carregar vitrine", err));
  }, []);

  const produtosFiltrados = categoriaAtiva 
    ? produtos.filter(p => p.categoria?.id === categoriaAtiva)
    : produtos;

  return (
    <div style={{ padding: '30px' }}>
      <h2 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '30px' }}>
        Explore as nossas Mascotas Exóticas 🐍
      </h2>

      <CategoryFilter onSelectCategory={setCategoriaAtiva} />
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '25px' }}>
        {produtosFiltrados.length > 0 ? (
          produtosFiltrados.map(p => (
            // 2. PASSE o onAdd para o ProductCard aqui
            <ProductCard key={p.id} produto={p} onAdd={onAdd} />
          ))
        ) : (
          <p style={{ textAlign: 'center', width: '100%' }}>Nenhum animal nesta categoria.</p>
        )}
      </div>
    </div>
  );
};

export default Vitrine;