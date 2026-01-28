import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Vitrine from './pages/Vitrine';
import CartPage from './pages/CartPage';
import AdminPage from './pages/AdminPage';
import Footer from './components/Footer';

function App() {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
    alert(`${produto.nome} foi adicionado ao carrinho!`);
  };

  const removerDoCarrinho = (indexParaRemover) => {
    setCarrinho(carrinho.filter((_, index) => index !== indexParaRemover));
  };

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Passamos o tamanho do carrinho para a Navbar mostrar o número */}
        <Navbar cartCount={carrinho.length} />
        
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Vitrine onAdd={adicionarAoCarrinho} />} />
            <Route path="/carrinho" element={<CartPage items={carrinho} onRemove={removerDoCarrinho} />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;