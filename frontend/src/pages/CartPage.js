import React from 'react';

const CartPage = ({ items, onRemove }) => {
  const total = items.reduce((acc, item) => acc + item.preco, 0);

  return (
    <div style={{ padding: '30px' }}>
      <h2>Seu Carrinho de Mascotas 🛒</h2>
      {items.length === 0 ? (
        <p>O seu carrinho está vazio. Escolha um animal exótico na vitrine!</p>
      ) : (
        <div>
          {items.map((item, index) => (
            <div key={index} style={itemStyle}>
              <span>{item.nome} - R$ {item.preco.toFixed(2)}</span>
              <button onClick={() => onRemove(index)} style={btnRemove}>Remover</button>
            </div>
          ))}
          <h3 style={{ marginTop: '20px' }}>Total: R$ {total.toFixed(2)}</h3>
          <button style={btnFinalizar}>Finalizar Compra</button>
        </div>
      )}
    </div>
  );
};

const itemStyle = { display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #ddd' };
const btnRemove = { backgroundColor: '#e74c3c', color: 'white', border: 'none', padding: '5px', borderRadius: '4px', cursor: 'pointer' };
const btnFinalizar = { width: '100%', padding: '15px', backgroundColor: '#27ae60', color: 'white', border: 'none', borderRadius: '8px', fontSize: '18px', cursor: 'pointer', marginTop: '20px' };

export default CartPage;