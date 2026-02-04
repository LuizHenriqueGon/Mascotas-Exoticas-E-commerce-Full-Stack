import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';

const ProductDetailsPage = ({ onAdd }) => {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    api.get(`/produtos/${id}`)
      .then(res => setProduto(res.data))
      .catch(err => console.error("Erro ao buscar detalhes", err));
  }, [id]);

  if (!produto) return <div style={{ padding: '50px', textAlign: 'center' }}>Carregando ficha técnica... 🦎</div>;

  return (
    <div style={{ maxWidth: '1100px', margin: '40px auto', padding: '20px', fontFamily: 'Segoe UI, sans-serif' }}>
      
      <Link to="/" style={{ textDecoration: 'none', color: '#7f8c8d', fontWeight: 'bold', display: 'block', marginBottom: '20px' }}>
        ⬅ Voltar para a Vitrine
      </Link>

      <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
        
        {/* LADO ESQUERDO: FOTO E COMPRA */}
        <div style={{ flex: '1', minWidth: '350px' }}>
          <img 
            src={produto.urlImagem} 
            alt={produto.nome} 
            style={{ width: '100%', borderRadius: '15px', boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }} 
          />
          
          <div style={{ padding: '25px', border: '1px solid #eee', borderRadius: '15px', marginTop: '25px', backgroundColor: '#fff', textAlign: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
            <h1 style={{ color: '#2c3e50', margin: '10px 0' }}>{produto.nome}</h1>
            <h2 style={{ color: '#27ae60', fontSize: '32px' }}>R$ {produto.preco?.toFixed(2)}</h2>
            
            <p style={{ margin: '15px 0', color: '#7f8c8d' }}>
              Fornecido por: <br/><strong>{produto.criador || 'Criadouro Certificado IBAMA'}</strong>
            </p>

            <button 
              onClick={() => onAdd(produto)} 
              disabled={produto.estoque === 0}
              style={{
                padding: '18px',
                width: '100%',
                backgroundColor: produto.estoque > 0 ? '#27ae60' : '#bdc3c7',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: produto.estoque > 0 ? 'pointer' : 'not-allowed',
                fontSize: '18px',
                fontWeight: 'bold',
                marginTop: '10px'
              }}
            >
              {produto.estoque > 0 ? '🛒 Adicionar ao Carrinho' : '🚫 Indisponível'}
            </button>
            <p style={{ fontSize: '12px', color: '#95a5a6', marginTop: '10px' }}>
                Documentação e nota fiscal inclusas.
            </p>
          </div>
        </div>

        {/* LADO DIREITO: FICHA TÉCNICA DETALHADA */}
        <div style={{ flex: '1.5', minWidth: '350px' }}>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <Badge cor="#3498db" texto={produto.grupo} />
            <Badge cor="#9b59b6" texto={`Origem: ${produto.localOrigem || 'Não informada'}`} />
          </div>
          
          <h2 style={{ color: '#34495e', marginBottom: '5px' }}>{produto.nome}</h2>
          <h4 style={{ fontStyle: 'italic', color: '#7f8c8d', marginTop: '0', fontWeight: 'normal' }}>
            {produto.nomeCientifico}
          </h4>

          <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '25px 0' }} />

          <Section icon="📖" title="Sobre a Espécie" content={produto.descricao} />
          <Section icon="🥗" title="Dieta & Nutrição" content={produto.alimentacao} />
          <Section icon="🌡️" title="Habitat & Cuidados Essenciais" content={produto.habitat} />
        </div>
      </div>
    </div>
  );
};

// Componentes Auxiliares
const Badge = ({ cor, texto }) => (
    <span style={{ backgroundColor: cor, color: 'white', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase' }}>
        {texto}
    </span>
);

const Section = ({ icon, title, content }) => (
  <div style={{ marginBottom: '30px' }}>
    <h3 style={{ color: '#2c3e50', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span>{icon}</span> {title}
    </h3>
    <div style={{ lineHeight: '1.8', color: '#555', textAlign: 'justify', whiteSpace: 'pre-line', backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #bdc3c7' }}>
      {content || "Informação detalhada não disponível no momento."}
    </div>
  </div>
);

export default ProductDetailsPage;