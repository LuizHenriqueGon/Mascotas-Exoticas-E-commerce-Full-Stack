import React, { useState, useEffect } from 'react';
import api from '../services/api';
import PedidoService from '../services/PedidoService';
import axios from 'axios';

const AdminPage = () => {
  const [produtos, setProdutos] = useState([]);
  const [vendas, setVendas] = useState([]);
  const [uploading, setUploading] = useState(false);
  
  const estadoInicial = { 
      id: null,
      nome: '', nomeCientifico: '', grupo: '', 
      preco: '', estoque: '', urlImagem: '', 
      localOrigem: '', criador: '', 
      descricao: '', alimentacao: '', habitat: '' 
  };
  
  const [form, setForm] = useState(estadoInicial);
  const [editando, setEditando] = useState(false);

  useEffect(() => {
    carregarDados();
  }, []);

  const carregarDados = () => {
    api.get('/produtos').then(res => setProdutos(res.data));
    PedidoService.listarVendas().then(res => setVendas(res.data)).catch(console.error);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Upload de Imagem (Opção A)
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    setUploading(true);

    try {
        const response = await axios.post("http://localhost:8080/upload", formData, {
            headers: { "Content-Type": "multipart/form-data" }
        });
        // Preenche o campo automaticamente com o link do nosso servidor
        setForm(prev => ({ ...prev, urlImagem: response.data }));
        alert("✅ Imagem enviada com sucesso!");
    } catch (error) {
        alert("Erro ao enviar imagem.");
    } finally {
        setUploading(false);
    }
  };

  const editarProduto = (produto) => {
    setForm(produto);
    setEditando(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelarEdicao = () => {
    setForm(estadoInicial);
    setEditando(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const metodo = form.id ? api.put : api.post;

    metodo('/produtos', form)
      .then(() => {
        alert(form.id ? '✅ Produto atualizado!' : '✅ Produto cadastrado!');
        setForm(estadoInicial);
        setEditando(false);
        carregarDados();
      })
      .catch(erro => alert("Erro ao salvar: " + erro.message));
  };

  const excluirProduto = (id) => {
    if (window.confirm("Tem certeza que deseja excluir?")) {
        api.delete(`/produtos/${id}`).then(carregarDados);
    }
  };

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'Segoe UI, sans-serif' }}>
      <h1 style={{ color: '#2c3e50', borderBottom: '2px solid #27ae60', paddingBottom: '10px' }}>
        ⚙️ Painel de Gestão
      </h1>
      
      {/* FORMULÁRIO */}
      <div style={{ ...cardStyle, borderLeft: editando ? '5px solid #3498db' : '5px solid #27ae60' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ marginTop: 0, color: editando ? '#3498db' : '#34495e' }}>
                {editando ? `✏️ Editando: ${form.nome}` : '➕ Cadastrar Novo Animal'}
            </h2>
            {editando && (
                <button onClick={cancelarEdicao} style={{ backgroundColor: '#95a5a6', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}>
                    Cancelar Edição
                </button>
            )}
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          
          {/* --- ÁREA DE IMAGEM ATUALIZADA --- */}
          <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', border: '1px dashed #bdc3c7' }}>
             <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '15px', fontSize: '16px' }}>📸 Foto do Animal:</label>
             
             <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                 
                 {/* Opção A: Upload */}
                 <div style={{ flex: 1, minWidth: '250px' }}>
                     <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#7f8c8d' }}>Opção A: Upload do Computador</span>
                     <input type="file" accept="image/*" onChange={handleImageUpload} style={{ marginTop: '5px', display: 'block' }} />
                     {uploading && <span style={{ color: '#e67e22', fontWeight: 'bold' }}> Enviando... ⏳</span>}
                 </div>

                 {/* Opção B: Link Direto */}
                 <div style={{ flex: 1, minWidth: '250px' }}>
                     <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#7f8c8d' }}>Opção B: Colar Link da Web</span>
                     <input 
                        name="urlImagem" 
                        placeholder="https://exemplo.com/foto.jpg" 
                        value={form.urlImagem} 
                        onChange={handleChange} 
                        // Removemos o readOnly para você poder digitar!
                        style={{ ...inputStyle, width: '100%', marginTop: '5px' }} 
                     />
                 </div>
             </div>

             {/* Preview da Imagem */}
             {form.urlImagem && (
                 <div style={{ marginTop: '20px', textAlign: 'center', backgroundColor: 'white', padding: '10px', borderRadius: '10px', display: 'inline-block' }}>
                    <p style={{ fontSize: '12px', marginBottom: '5px', color: '#7f8c8d', margin: 0 }}>Pré-visualização:</p>
                    <img 
                        src={form.urlImagem} 
                        alt="Preview" 
                        style={{ height: '150px', borderRadius: '5px', border: '1px solid #ddd', marginTop: '5px' }} 
                        onError={(e) => e.target.style.display = 'none'} // Esconde se o link for quebrado
                    />
                 </div>
             )}
          </div>
          {/* ---------------------------------- */}

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <input name="nome" placeholder="Nome Comum" value={form.nome} onChange={handleChange} required style={inputStyle} />
            <input name="nomeCientifico" placeholder="Nome Científico" value={form.nomeCientifico} onChange={handleChange} style={inputStyle} />
            <input name="grupo" placeholder="Grupo (Ex: Réptil)" value={form.grupo} onChange={handleChange} style={inputStyle} />
            <input name="preco" type="number" placeholder="Preço (R$)" value={form.preco} onChange={handleChange} required style={inputStyle} />
            <input name="estoque" type="number" placeholder="Estoque" value={form.estoque} onChange={handleChange} required style={inputStyle} />
            <input name="localOrigem" placeholder="País de Origem" value={form.localOrigem} onChange={handleChange} style={inputStyle} />
            <input name="criador" placeholder="Criador" value={form.criador} onChange={handleChange} style={inputStyle} />
          </div>

          <textarea name="descricao" placeholder="Descrição..." value={form.descricao} onChange={handleChange} style={textareaStyle} />
          <textarea name="alimentacao" placeholder="Alimentação..." value={form.alimentacao} onChange={handleChange} style={textareaStyle} />
          <textarea name="habitat" placeholder="Habitat..." value={form.habitat} onChange={handleChange} style={textareaStyle} />

          <button type="submit" style={{ ...btnStyle, backgroundColor: editando ? '#3498db' : '#27ae60' }}>
            {editando ? '🔄 Atualizar Produto' : '💾 Salvar Produto'}
          </button>
        </form>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h3>📦 Estoque Atual</h3>
        <table style={tableStyle}>
            <thead>
                <tr style={{ backgroundColor: '#ecf0f1' }}>
                    <th style={thStyle}>Foto</th>
                    <th style={thStyle}>Nome</th>
                    <th style={thStyle}>Preço</th>
                    <th style={thStyle}>Estoque</th>
                    <th style={thStyle}>Ações</th>
                </tr>
            </thead>
            <tbody>
                {produtos.map(prod => (
                    <tr key={prod.id} style={{ borderBottom: '1px solid #eee' }}>
                        <td style={tdStyle}>
                            <img src={prod.urlImagem} alt="" style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '5px' }} />
                        </td>
                        <td style={tdStyle}>
                            <strong>{prod.nome}</strong><br/>
                            <span style={{ fontSize: '12px', color: '#777' }}>{prod.grupo}</span>
                        </td>
                        <td style={tdStyle}>R$ {prod.preco.toFixed(2)}</td>
                        <td style={tdStyle}>{prod.estoque}</td>
                        <td style={tdStyle}>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button onClick={() => editarProduto(prod)} style={btnEditStyle}>✏️ Editar</button>
                                <button onClick={() => excluirProduto(prod.id)} style={btnDeleteStyle}>🗑️ Excluir</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
      
      <div style={{ marginTop: '50px', marginBottom: '50px' }}>
        <h3 style={{ borderTop: '2px solid #eee', paddingTop: '20px' }}>💰 Histórico de Vendas</h3>
        {vendas.length === 0 ? <p>Nenhuma venda realizada ainda.</p> : (
            <table style={tableStyle}>
            <thead>
                <tr style={{ backgroundColor: '#2c3e50', color: 'white' }}>
                <th style={thStyle}>Pedido #</th>
                <th style={thStyle}>Cliente</th>
                <th style={thStyle}>Total</th>
                </tr>
            </thead>
            <tbody>
                {vendas.map(venda => (
                <tr key={venda.id} style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={tdStyle}>{venda.id}</td>
                    <td style={tdStyle}>{venda.nomeCliente}</td>
                    <td style={tdStyle}>R$ {venda.valorTotal.toFixed(2)}</td>
                </tr>
                ))}
            </tbody>
            </table>
        )}
      </div>
    </div>
  );
};

// Estilos
const cardStyle = { backgroundColor: '#fff', padding: '25px', borderRadius: '10px', boxShadow: '0 2px 15px rgba(0,0,0,0.05)', marginBottom: '30px' };
const inputStyle = { padding: '12px', borderRadius: '6px', border: '1px solid #bdc3c7', fontSize: '14px' };
const textareaStyle = { padding: '12px', height: '80px', borderRadius: '6px', border: '1px solid #bdc3c7', fontFamily: 'inherit' };
const btnStyle = { padding: '12px', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px', marginTop: '10px' };

const btnDeleteStyle = { padding: '8px 12px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold' };
const btnEditStyle = { padding: '8px 12px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold' };

const tableStyle = { width: '100%', borderCollapse: 'collapse', marginTop: '10px', backgroundColor: 'white' };
const thStyle = { padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' };
const tdStyle = { padding: '12px', textAlign: 'left' };

export default AdminPage;