import React, { useState } from 'react';

// Componentes
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Contato from './components/Contato';
import Galeria from './components/Galeria';

export default function App() {
  const [pagina, setPagina] = useState('home');

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#FFFFFF', 
      fontFamily: 'system-ui, -apple-system, sans-serif', 
      color: '#1E293B', 
      margin: 0, 
      padding: 0, 
      display: 'flex', 
      flexDirection: 'column',
      overflowX: 'hidden', // Impede qualquer barra lateral no celular
      width: '100%'
    }}>
      
      <Header setPagina={setPagina} />

      <main style={{ flexGrow: 1 }}>
        {pagina === 'home' && <Home />}
        {pagina === 'contato' && <Contato />}
        {pagina === 'galeria' && <Galeria />}
      </main>

      <Footer setPagina={setPagina} />

    </div>
  );
}