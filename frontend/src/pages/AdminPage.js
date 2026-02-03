import React, { useEffect, useState } from 'react';
import ProdutoService from '../services/ProdutoService';
import PedidoService from '../services/PedidoService'; // [Importante] Não esqueça de importar o novo serviço

const AdminPage = () => {
  // --- Estados para Gestão de Produtos ---
  const [produtos, setProdutos] = useState([]);
  const [formData, setFormData] = useState({ nome: '', descricao: '', preco: '', estoque: '', urlImagem: '' });
  const [editandoId, setEditandoId] = useState(null);

  // --- Novo Estado para Histórico de Vendas ---
  const [vendas, setVendas] = useState([]);

  // Carrega tudo ao abrir a página
  useEffect(() => { 
    carregarProdutos();
    carregarVendas();
  }, []);

  const carregarProdutos = () => {
    ProdutoService.listarTodos().then(res => setProdutos(res.data));
  };

  const carregarVendas = () => {
    PedidoService.listarVendas()
      .then(res => setVendas(res.data))
      .catch(err => console.error("Erro ao carregar vendas", err));
  };

  // --- Funções do Formulário de Produtos ---
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editandoId) {
      ProdutoService.atualizar(editandoId, formData).then(() => {
        alert("Produto atualizado!");
        limparForm();
        carregarProdutos();
      });
    } else {
      ProdutoService.cadastrar(formData).then(() => {
        alert("Produto cadastrado!");
        limparForm();
        carregarProdutos();
      });
    }
  };

  const handleEdit = (p) => {
    setEditandoId(p.id);
    setFormData({ nome: p.nome, descricao: p.descricao, preco: p.preco, estoque: p.estoque, urlImagem: p.urlImagem });
  };

  const handleDelete = (id) => {
    if (window.confirm("Deseja mesmo remover este animal da loja?")) {
      ProdutoService.excluir(id).then(() => carregarProdutos());
    }
  };

  const limparForm = () => {
    setFormData({ nome: '', descricao: '', preco: '', estoque: '', urlImagem: '' });
    setEditandoId(null);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>⚙️ Painel de Gestão - Mascotas Exóticas</h2>
      
      {/* --- PARTE 1: Gestão de Produtos (Mantida) --- */}
      <form onSubmit={handleSubmit} style={formStyle}>
        <input name="nome" placeholder="Nome do Pet" value={formData.nome} onChange={handleInputChange} required />
        <input name="preco" placeholder="Preço" type="number" step="0.01" value={formData.preco} onChange={handleInputChange} required />
        <input name="estoque" placeholder="Qtd Stock" type="number" value={formData.estoque} onChange={handleInputChange} required />
        <input name="urlImagem" placeholder="URL da Imagem" value={formData.urlImagem} onChange={handleInputChange} />
        <textarea name="descricao" placeholder="Descrição dos cuidados" value={formData.descricao} onChange={handleInputChange} />
        <button type="submit" style={btnSalvarStyle}>{editandoId ? 'Atualizar Animal' : 'Cadastrar Novo'}</button>
        {editandoId && <button onClick={limparForm}>Cancelar</button>}
      </form>

      <h3 style={{ marginTop: '30px' }}>Inventário Atual</h3>
      <table style={{ width: '100%', marginTop: '10px', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#eee' }}>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Stock</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map(p => (
            <tr key={p.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td>{p.id}</td>
              <td>{p.nome}</td>
              <td>R$ {p.preco.toFixed(2)}</td>
              <td>{p.estoque} unidades</td>
              <td>
                <button onClick={() => handleEdit(p)} style={btnAcaoStyle}>Editar</button>
                <button onClick={() => handleDelete(p.id)} style={{...btnAcaoStyle, backgroundColor: '#e74c3c'}}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* --- PARTE 2: Histórico de Vendas (Adicionada) --- */}
      <hr style={{ margin: '40px 0', border: '2px solid #ccc' }} />

      <h2>📜 Histórico de Vendas (Controle)</h2>
      {vendas.length === 0 ? (
        <p>Nenhuma venda registrada.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#34495e', color: 'white' }}>
              <th style={{ padding: '10px' }}>ID Pedido</th>
              <th>Cliente</th>
              <th>Data</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {vendas.map(venda => (
              <tr key={venda.id} style={{ borderBottom: '1px solid #eee', textAlign: 'center' }}>
                <td style={{ padding: '10px' }}>#{venda.id}</td>
                <td>{venda.nomeCliente}</td>
                {/* Tratamento para não quebrar se a data for nula */}
                <td>{venda.dataPedido ? new Date(venda.dataPedido).toLocaleDateString() : '-'}</td>
                <td style={{ color: '#27ae60', fontWeight: 'bold' }}>
                  R$ {venda.valorTotal ? venda.valorTotal.toFixed(2) : '0.00'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

// --- Estilos CSS em JS ---
const formStyle = { display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', marginBottom: '20px' };
const btnSalvarStyle = { backgroundColor: '#27ae60', color: 'white', border: 'none', padding: '10px', cursor: 'pointer' };
const btnAcaoStyle = { marginRight: '5px', padding: '5px 10px', cursor: 'pointer', color: 'white', border: 'none', backgroundColor: '#3498db' };

export default AdminPage;