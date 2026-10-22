import React, { useState, useEffect } from 'react';
import logo from '../assets/HOT & COLD.svg'; 

export default function Header({ setPagina }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: isMobile ? '12px 16px' : '0 48px',
      height: isMobile ? 'auto' : '76px',
      backgroundColor: 'rgba(255, 255, 255, 0.98)',
      borderBottom: '1px solid #E2E8F0',
      backdropFilter: 'blur(8px)',
      gap: isMobile ? '12px' : '0'
    }}>
      
      {isMobile ? (
        /* --- LAYOUT EXCLUSIVO CELULAR --- */
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <a href="#" onClick={(e) => { e.preventDefault(); setPagina('home'); window.scrollTo(0,0); }} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img src={logo} alt="Hot & Cold Assistência Técnica" style={{ height: '38px', width: 'auto', objectFit: 'contain' }} />
            </a>

            <a href="https://wa.me/5551991664152" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#10B981', color: '#FFFFFF', padding: '8px 14px', borderRadius: '10px', textDecoration: 'none', fontSize: '13px', fontWeight: '700', boxShadow: '0 4px 12px rgba(16, 185, 129, 0.25)' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              Chamar Agora
            </a>
          </div>

          <nav style={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: '13px', fontWeight: '600', color: '#475569', alignItems: 'center', borderTop: '1px solid #F1F5F9', paddingTop: '10px' }}>
            <a href="#sobre" onClick={(e) => handleScrollTo(e, 'sobre')} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>Sobre Nós</a>
            <a href="#servicos" onClick={(e) => handleScrollTo(e, 'servicos')} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>Serviços</a>
            <a onClick={(e) => { e.preventDefault(); setPagina('galeria'); window.scrollTo(0,0); }} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>Galeria</a>
            <a onClick={(e) => { e.preventDefault(); setPagina('contato'); window.scrollTo(0,0); }} style={{ textDecoration: 'none', color: '#0284C7', backgroundColor: '#E0F2FE', padding: '5px 12px', borderRadius: '999px', cursor: 'pointer' }}>
              Onde Estamos
            </a>
          </nav>
        </>
      ) : (
        /* --- LAYOUT ORIGINAL PC (INTACTO) --- */
        <>
          <a href="#" onClick={(e) => { e.preventDefault(); setPagina('home'); window.scrollTo(0,0); }} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', height: '100%' }}>
            <img src={logo} alt="Hot & Cold Assistência Técnica" style={{ height: '100%', width: 'auto', objectFit: 'contain', transform: 'scale(1.5)', transformOrigin: 'left center' }} />
          </a>

          <nav style={{ display: 'flex', gap: '32px', fontSize: '14px', fontWeight: '600', color: '#475569', alignItems: 'center' }}>
            <a href="#sobre" onClick={(e) => handleScrollTo(e, 'sobre')} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>Sobre Nós</a>
            <a href="#servicos" onClick={(e) => handleScrollTo(e, 'servicos')} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>Serviços</a>
            <a onClick={(e) => { e.preventDefault(); setPagina('galeria'); window.scrollTo(0,0); }} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>Galeria</a>
            <a onClick={(e) => { e.preventDefault(); setPagina('contato'); window.scrollTo(0,0); }} style={{ textDecoration: 'none', color: '#0284C7', backgroundColor: '#E0F2FE', padding: '8px 16px', borderRadius: '999px', cursor: 'pointer' }}>
              Onde Estamos
            </a>
          </nav>

          <a href="https://wa.me/5551991664152" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#10B981', color: '#FFFFFF', padding: '10px 22px', borderRadius: '12px', textDecoration: 'none', fontSize: '14px', fontWeight: '700', boxShadow: '0 4px 14px rgba(16, 185, 129, 0.25)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            Chamar Agora
          </a>
        </>
      )}
      
    </header>
  );
}