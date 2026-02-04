import React, { useEffect, useState } from 'react';
import api from '../services/api';
import ProductCard from '../components/ProductCard';

const Vitrine = ({ onAdd }) => {
  const [produtos, setProdutos] = useState([]);
  const [filtro, setFiltro] = useState('Todos'); // Estado para saber qual filtro está ativo
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/produtos')
      .then(response => {
        setProdutos(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erro ao buscar produtos", error);
        setLoading(false);
      });
  }, []);

  // 1. Mágica para pegar os grupos únicos automaticamente
  // (Pega todos os grupos, remove duplicados e vazios)
  const gruposDisponiveis = ['Todos', ...new Set(produtos.map(p => p.grupo).filter(g => g))];

  // 2. Filtra os produtos com base no botão clicado
  const produtosFiltrados = filtro === 'Todos' 
    ? produtos 
    : produtos.filter(produto => produto.grupo === filtro);

  if (loading) return <div style={{ textAlign: 'center', padding: '50px' }}>Carregando catálogo... 🦎</div>;

  return (
    <div style={{ padding: '30px', maxWidth: '1200px', margin: '0 auto' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#2c3e50' }}>Explore nossas Mascotas Exóticas 🌿</h1>
        <p style={{ color: '#7f8c8d' }}>Animais legalizados e com documentação completa.</p>
        
        {/* --- BARRA DE FILTROS --- */}
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {gruposDisponiveis.map(grupo => (
            <button
              key={grupo}
              onClick={() => setFiltro(grupo)}
              style={{
                padding: '8px 20px',
                borderRadius: '20px',
                border: 'none',
                backgroundColor: filtro === grupo ? '#27ae60' : '#ecf0f1', // Verde se ativo, Cinza se inativo
                color: filtro === grupo ? 'white' : '#2c3e50',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              {grupo}
            </button>
          ))}
        </div>
      </div>

      {/* --- LISTA DE PRODUTOS --- */}
      <div style={gridStyle}>
        {produtosFiltrados.length > 0 ? (
          produtosFiltrados.map(produto => (
            <ProductCard 
              key={produto.id} 
              produto={produto} 
              onAdd={onAdd} 
            />
          ))
        ) : (
          <p style={{ width: '100%', textAlign: 'center', color: '#95a5a6' }}>
            Nenhum animal encontrado neste grupo.
          </p>
        )}
      </div>
    </div>
  );
};

// Estilo de Grade (Grid) para os cards ficarem alinhados
const gridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  justifyContent: 'center'
};

export default Vitrine;