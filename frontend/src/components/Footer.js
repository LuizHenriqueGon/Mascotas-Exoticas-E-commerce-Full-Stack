import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <h4 style={titleStyle}>🦎 Mascotas Exóticas</h4>
          <p style={textStyle}>Especialistas em animais exóticos e consultoria especializada em Bragança Paulista.</p>
        </div>
        
        <div style={sectionStyle}>
          <h4 style={titleStyle}>Contacto</h4>
          <p style={textStyle}>📞 (11) 99999-9999</p>
          <p style={textStyle}>📧 contacto@mascotasexoticas.com.br</p>
        </div>

        <div style={sectionStyle}>
          <h4 style={titleStyle}>Redes Sociais</h4>
          <div style={socialGap}>
            <span>📸 Instagram</span> | <span>📘 Facebook</span>
          </div>
        </div>
      </div>
      
      <div style={bottomBar}>
        <p>© 2026 Mascotas Exóticas - Todos os direitos reservados. IFSP Câmpus Bragança Paulista.</p>
      </div>
    </footer>
  );
};

// Estilos para o Footer
const footerStyle = { backgroundColor: '#2c3e50', color: 'white', padding: '40px 0 20px', marginTop: '50px' };
const containerStyle = { display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' };
const sectionStyle = { flex: '1', minWidth: '250px', marginBottom: '20px' };
const titleStyle = { color: '#27ae60', marginBottom: '15px', borderBottom: '1px solid #34495e', display: 'inline-block', paddingBottom: '5px' };
const textStyle = { fontSize: '14px', lineHeight: '1.6', color: '#bdc3c7' };
const socialGap = { display: 'flex', gap: '15px', fontSize: '14px', cursor: 'pointer' };
const bottomBar = { textAlign: 'center', borderTop: '1px solid #34495e', marginTop: '30px', paddingTop: '20px', fontSize: '12px', color: '#7f8c8d' };

export default Footer;