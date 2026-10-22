import React, { useState, useEffect } from 'react';

import img1 from '../assets/galeria1.jpg';
import img2 from '../assets/galeria2.jpg';
import img3 from '../assets/galeria3.jpg';
import img4 from '../assets/galeria4.jpg';
import img5 from '../assets/galeria5.jpg';
import img6 from '../assets/galeria6.jpg';

export default function Galeria() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fotos = [
    { id: 1, imagem: img1, badge: 'MANUTENÇÃO', badgeColor: '#3B82F6', descricao: 'Manutenção minuciosa de placa eletrónica e componentes internos.' },
    { id: 2, imagem: img2, badge: 'DIAGNÓSTICO', badgeColor: '#60A5FA', descricao: 'Acesso seguro aos componentes internos para testes de funcionamento.' },
    { id: 3, imagem: img3, badge: 'FERRAMENTAL', badgeColor: '#EF4444', descricao: 'Utilização de ferramentas profissionais adequadas para cada reparo.' },
    { id: 4, imagem: img4, badge: 'ATENDIMENTO', badgeColor: '#10B981', descricao: 'Diagnóstico rápido e eficiente diretamente no domicílio do cliente.' },
    { id: 5, imagem: img5, badge: 'HIGIENIZAÇÃO', badgeColor: '#2563EB', descricao: 'Higienização técnica completa do cesto e cuba com máquina de pressão.' },
    { id: 6, imagem: img6, badge: 'DESMONTAGEM', badgeColor: '#059669', descricao: 'Desmontagem integral para limpeza e substituição de peças estruturais.' }
  ];

  const IconWhatsApp = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>;
  const IconInstagram = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;

  return (
    <section style={{ padding: isMobile ? '40px 20px 80px 20px' : '80px 48px 120px 48px', backgroundColor: '#F8FAFC' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '64px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#E0F2FE', color: '#0369A1', padding: '6px 14px', borderRadius: '999px', fontSize: isMobile ? '11px' : '12px', fontWeight: '600', marginBottom: '24px' }}>
            ✓ Coleta e Conserto • Av. Brasil, 1460
          </div>
          <h1 style={{ fontSize: isMobile ? '32px' : '42px', fontWeight: '900', color: '#0F172A', marginBottom: '16px', letterSpacing: '-1px' }}>
            Fotos Reais dos Nossos Serviços
          </h1>
          <p style={{ fontSize: '16px', color: '#475569', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            Veja na prática nosso padrão de cuidado, ferramentas e dedicação técnica no conserto de eletrodomésticos.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px', marginBottom: isMobile ? '48px' : '80px' }}>
          {fotos.map((foto) => (
            <div key={foto.id} style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 40px rgba(15, 23, 42, 0.05)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '260px', backgroundColor: '#E2E8F0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={foto.imagem} alt={foto.badge} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '16px', left: '16px', backgroundColor: foto.badgeColor, color: '#FFFFFF', padding: '6px 14px', borderRadius: '8px', fontSize: '12px', fontWeight: '800', letterSpacing: '0.5px' }}>
                  {foto.badge}
                </div>
              </div>
              <div style={{ padding: '24px' }}>
                <p style={{ margin: 0, fontSize: '15px', color: '#334155', lineHeight: 1.6, fontWeight: '500' }}>
                  {foto.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bloco de Redes Sociais */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', padding: isMobile ? '28px 20px' : '48px', boxShadow: '0 10px 40px rgba(15, 23, 42, 0.05)', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))', gap: isMobile ? '32px' : '48px', alignItems: 'center' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <h3 style={{ fontSize: isMobile ? '24px' : '28px', fontWeight: '900', color: '#0F172A', marginBottom: '24px', lineHeight: 1.2, letterSpacing: '-0.5px' }}>
              Acompanhe nossa rotina de serviços e dicas úteis no Instagram!
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%', maxWidth: isMobile ? '100%' : '380px' }}>
              <a href="https://www.instagram.com/hotecoldassistencia/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', backgroundColor: '#FB7185', color: '#FFFFFF', padding: '14px 24px', borderRadius: '12px', textDecoration: 'none', fontSize: '15px', fontWeight: '700', boxShadow: '0 6px 16px rgba(251, 113, 133, 0.25)' }}>
                <IconInstagram />
                Siga no Instagram
              </a>

              <a href="https://wa.me/5551991664152" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', backgroundColor: '#10B981', color: '#FFFFFF', padding: '14px 24px', borderRadius: '12px', textDecoration: 'none', fontSize: '15px', fontWeight: '700', boxShadow: '0 6px 16px rgba(16, 185, 129, 0.25)' }}>
                <IconWhatsApp />
                Chamar no WhatsApp
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-end' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: isMobile ? '10px' : '16px', width: isMobile ? '100%' : 'auto' }}>
              <div style={{ width: isMobile ? '100%' : '120px', aspectRatio: '1/1', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                 <img src={img5} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ width: isMobile ? '100%' : '120px', aspectRatio: '1/1', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                 <img src={img6} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ width: isMobile ? '100%' : '120px', aspectRatio: '1/1', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                 <img src={img1} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}