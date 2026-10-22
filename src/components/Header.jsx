import React from 'react';
import logo from '../assets/HOT & COLD.svg'; 

export default function Header({ setPagina }) {
  
  const handleScrollTo = (e, sectionId) => {
    e.preventDefault();
    setPagina('home'); 
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      height: 'auto',
      minHeight: '76px',
      backgroundColor: 'rgba(255, 255, 255, 0.98)',
      borderBottom: '1px solid #E2E8F0',
      backdropFilter: 'blur(8px)',
      flexWrap: 'wrap',
      gap: '12px'
    }}>
      
      <a href="#" onClick={(e) => { e.preventDefault(); setPagina('home'); window.scrollTo(0,0); }} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', padding: '8px 0' }}>
        <img src={logo} alt="Hot & Cold Assistência Técnica" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
      </a>

      <nav style={{ display: 'flex', gap: '20px', fontSize: '13px', fontWeight: '600', color: '#475569', alignItems: 'center', flexWrap: 'wrap' }}>
        <a href="#sobre" onClick={(e) => handleScrollTo(e, 'sobre')} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>Sobre</a>
        <a href="#servicos" onClick={(e) => handleScrollTo(e, 'servicos')} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>Serviços</a>
        <a onClick={(e) => { e.preventDefault(); setPagina('galeria'); window.scrollTo(0,0); }} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>Galeria</a>
        
        <a onClick={(e) => { e.preventDefault(); setPagina('contato'); window.scrollTo(0,0); }} style={{ textDecoration: 'none', color: '#0284C7', backgroundColor: '#E0F2FE', padding: '6px 12px', borderRadius: '999px', cursor: 'pointer' }}>
          Onde Estamos
        </a>
      </nav>

      <a href="https://wa.me/5551991664152" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#10B981', color: '#FFFFFF', padding: '8px 16px', borderRadius: '10px', textDecoration: 'none', fontSize: '13px', fontWeight: '700', boxShadow: '0 4px 14px rgba(16, 185, 129, 0.25)' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        WhatsApp
      </a>
      
    </header>
  );
}