import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Vitrine from './pages/Vitrine';
import CartPage from './pages/CartPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MyOrdersPage from './pages/MyOrdersPage'; // <--- Importe a nova página
import AuthService from './services/AuthService';

function App() {
  const [cart, setCart] = useState([]);
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const usuarioSalvo = AuthService.getUsuario();
    if (usuarioSalvo) {
      setUsuario(usuarioSalvo);
    }
  }, []);

  const addToCart = (produto) => {
    setCart([...cart, produto]);
    alert(`${produto.nome} adicionado ao carrinho!`);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const limparCarrinho = () => {
    setCart([]);
  };

  const handleLogout = () => {
    AuthService.logout();
    setUsuario(null);
    alert("Você saiu do sistema.");
  };

  const RotaAdmin = ({ children }) => {
    return usuario && usuario.admin ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} usuario={usuario} onLogout={handleLogout} />
      
      <Routes>
        <Route path="/" element={<Vitrine onAdd={addToCart} />} />
        
        {/* Passando o usuário para o CartPage */}
        <Route 
          path="/cart" 
          element={
            <CartPage 
              items={cart} 
              onRemove={removeFromCart} 
              onLimparCarrinho={limparCarrinho} 
              usuario={usuario} 
            />
          } 
        />
        
        {/* Nova rota de Meus Pedidos */}
        <Route path="/meus-pedidos" element={<MyOrdersPage />} />
        
        <Route path="/login" element={<LoginPage onLogin={setUsuario} />} />
        <Route path="/register" element={<RegisterPage />} />
        
        <Route 
          path="/admin" 
          element={
            <RotaAdmin>
              <AdminPage />
            </RotaAdmin>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;