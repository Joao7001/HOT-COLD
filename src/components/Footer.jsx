import React, { useState, useEffect } from 'react';

export default function Footer({ setPagina }) {
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
    <footer style={{ backgroundColor: '#0F172A', color: '#F8FAFC', padding: isMobile ? '48px 20px 28px 20px' : '64px 48px 32px 48px' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))', gap: isMobile ? '36px' : '48px', marginBottom: '48px' }}>
          
          <div>
            <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#FFFFFF', marginBottom: '16px', letterSpacing: '-0.5px' }}>
              HOT<span style={{ color: '#0EA5E9' }}>&</span>COLD
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px' }}>
              Assistência técnica especializada em máquinas de lavar e geladeiras em Porto Alegre. Conserto com garantia, agilidade e peças originais.
            </p>
            <a href="https://www.instagram.com/hotecoldassistencia/" target="_blank" rel="noreferrer" style={{ color: '#0EA5E9', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>
              Siga-nos no Instagram →
            </a>
          </div>

          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#FFFFFF', marginBottom: '20px' }}>Links Rápidos</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px', color: '#94A3B8', fontSize: '14px' }}>
              <li>
                <a href="#sobre" onClick={(e) => handleScrollTo(e, 'sobre')} style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" onClick={(e) => handleScrollTo(e, 'servicos')} style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>
                  Serviços Especializados
                </a>
              </li>
              <li>
                <a onClick={(e) => { e.preventDefault(); setPagina('galeria'); window.scrollTo(0,0); }} style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>
                  Galeria de Fotos
                </a>
              </li>
              <li>
                <a onClick={(e) => { e.preventDefault(); setPagina('contato'); window.scrollTo(0,0); }} style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>
                  Onde Estamos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#FFFFFF', marginBottom: '20px' }}>Atendimento</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px', color: '#94A3B8', fontSize: '14px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <span style={{ color: '#0EA5E9', fontSize: '16px' }}>📍</span> 
                <span>Av. Brasil, 1460<br/>Porto Alegre - RS</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: '#10B981', fontSize: '16px' }}>📱</span> 
                <a href="https://wa.me/5551991664152" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                  (51) 99166-4152
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: '#0EA5E9', fontSize: '16px' }}>🕒</span> 
                <span>Segunda a Sábado - 08h às 18h</span>
              </li>
            </ul>
          </div>

        </div>

        <div style={{ borderTop: '1px solid #1E293B', paddingTop: '32px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px', color: '#64748B', fontSize: '14px' }}>
          <p style={{ margin: 0 }}>
            &copy; 2026 Hot & Cold Assistência Técnica. Todos os direitos reservados.
          </p>
          <div style={{ fontSize: '13px' }}>
            Porto Alegre / RS
          </div>
        </div>
        
      </div>
    </footer>
  );
}