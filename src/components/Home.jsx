import React, { useState, useEffect } from 'react';
import heroBg from '../assets/hero-bg.jpg';
import sobreImg from '../assets/sobre-img.png';

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const [formData, setFormData] = useState({
    tipo: 'Geladeira / Refrigerador',
    sintoma: 'Geladeira não gela embaixo',
    bairro: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'tipo') {
      const novoSintoma = value === 'Geladeira / Refrigerador' ? 'Geladeira não gela embaixo' : 'Não centrifuga ou não gira';
      setFormData({ ...formData, tipo: value, sintoma: novoSintoma });
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const mensagemWhatsAppForm = `Olá, Hot & Cold! Preciso de assistência técnica.\n\n*Aparelho:* ${formData.tipo}\n*Problema:* ${formData.sintoma}\n*Localização:* ${formData.bairro || 'Não informado'}`;
  const linkWhatsAppForm = `https://wa.me/5551991664152?text=${encodeURIComponent(mensagemWhatsAppForm)}`;
  const linkWhatsAppMaquina = `https://wa.me/5551991664152?text=${encodeURIComponent("Olá, Hot & Cold! Gostaria de solicitar a coleta e reparo da minha máquina de lavar.")}`;
  const linkWhatsAppGeladeira = `https://wa.me/5551991664152?text=${encodeURIComponent("Olá, Hot & Cold! Gostaria de solicitar a coleta e reparo da minha geladeira.")}`;

  const IconWhatsApp = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>;
  const IconInstagram = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;

  return (
    <>
      {isMobile ? (
        /* --- HERO EXCLUSIVO PARA CELULAR (LIMPO E SEM SOBREPOSIÇÃO) --- */
        <section style={{
          padding: '32px 20px 40px 20px',
          background: 'linear-gradient(180deg, #F0F9FF 0%, #FFFFFF 100%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: '#E0F2FE', color: '#0369A1', padding: '6px 12px', borderRadius: '999px', fontSize: '11px', fontWeight: '700', marginBottom: '16px' }}>
              ✓ Coleta e Conserto • Av. Brasil, 1460
            </div>

            <h1 style={{ fontSize: '32px', lineHeight: 1.15, fontWeight: '950', color: '#0F172A', marginBottom: '16px', letterSpacing: '-1px' }}>
              Assistência técnica especializada em <span style={{ color: '#0EA5E9' }}>máquinas de lavar</span> e <span style={{ color: '#0EA5E9' }}>geladeiras</span>
            </h1>

            <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#334155', marginBottom: '24px' }}>
              Buscamos o seu eletrodoméstico e realizamos o conserto com garantia e peças originais na nossa assistência técnica em Porto Alegre.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
              <a href="https://wa.me/5551991664152" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', backgroundColor: '#10B981', color: '#FFFFFF', padding: '14px', borderRadius: '12px', textDecoration: 'none', fontSize: '15px', fontWeight: '700', boxShadow: '0 6px 16px rgba(16, 185, 129, 0.25)' }}>
                <IconWhatsApp />
                Chamar no WhatsApp
              </a>
              <a href="https://www.instagram.com/hotecoldassistencia/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', backgroundColor: '#FB7185', color: '#FFFFFF', padding: '14px', borderRadius: '12px', textDecoration: 'none', fontSize: '15px', fontWeight: '700', boxShadow: '0 6px 16px rgba(251, 113, 133, 0.2)' }}>
                <IconInstagram />
                Siga no Instagram
              </a>
            </div>
          </div>

          {/* Card de Diferenciais organizado para Celular */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 10px 30px rgba(15, 23, 42, 0.06)',
            border: '1px solid #E2E8F0',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '12px'
          }}>
            <div style={{ fontSize: '13px', fontWeight: '600', color: '#1E293B', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#0EA5E9', fontWeight: 'bold' }}>✓</span> Garantia de Serviço e Peças</div>
            <div style={{ fontSize: '13px', fontWeight: '600', color: '#1E293B', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#0EA5E9', fontWeight: 'bold' }}>✓</span> Coleta no seu Endereço</div>
            <div style={{ fontSize: '13px', fontWeight: '600', color: '#1E293B', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#0EA5E9', fontWeight: 'bold' }}>✓</span> Ferramental e Solda Especializada</div>
            <div style={{ fontSize: '13px', fontWeight: '600', color: '#1E293B', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#0EA5E9', fontWeight: 'bold' }}>✓</span> Pagamento Facilitado</div>
          </div>
        </section>
      ) : (
        /* --- HERO ORIGINAL DO PC (100% INTACTO) --- */
        <section style={{
          position: 'relative',
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover', 
          backgroundPosition: 'right 15%', 
          backgroundRepeat: 'no-repeat',
          minHeight: '720px', 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 48px',
          overflow: 'hidden',
          backgroundColor: '#FFFFFF'
        }}>
          <div style={{ position: 'relative', zIndex: 10, maxWidth: '1240px', width: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', transform: 'translateY(-30px)' }}>
            <div style={{ maxWidth: '540px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#E0F2FE', color: '#0369A1', padding: '6px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: '600', marginBottom: '20px' }}>
                ✓ Coleta e Conserto na nossa Assistência Técnica • Av. Brasil, 1460
              </div>

              <h1 style={{ fontSize: '46px', lineHeight: 1.1, fontWeight: '950', color: '#0F172A', marginBottom: '20px', letterSpacing: '-1.5px' }}>
                Assistência técnica especializada em <span style={{ color: '#0EA5E9' }}>máquinas de lavar</span> e <span style={{ color: '#0EA5E9' }}>geladeiras</span>
              </h1>

              <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#334155', marginBottom: '32px', maxWidth: '480px' }}>
                Buscamos o seu eletrodoméstico e realizamos o conserto com garantia e peças originais na nossa assistência técnica em Porto Alegre. Atendimento especializado com quem entende do assunto.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="https://wa.me/5551991664152" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#10B981', color: '#FFFFFF', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: '700', boxShadow: '0 8px 20px rgba(16, 185, 129, 0.3)' }}>
                  <IconWhatsApp />
                  Chamar no WhatsApp
                </a>
                <a href="https://www.instagram.com/hotecoldassistencia/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#FB7185', color: '#FFFFFF', padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: '700', boxShadow: '0 8px 20px rgba(251, 113, 133, 0.25)' }}>
                  <IconInstagram />
                  Siga no Instagram
                </a>
              </div>
            </div>
          </div>

          <div style={{ 
            position: 'absolute', 
            bottom: '24px', 
            left: '50%', 
            transform: 'translateX(-50%)', 
            maxWidth: '1100px', 
            width: '90%', 
            backgroundColor: '#FFFFFF', 
            borderRadius: '12px', 
            padding: '16px 32px', 
            boxShadow: '0 10px 40px rgba(15, 23, 42, 0.08)', 
            border: '1px solid #E2E8F0', 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '24px', 
            alignItems: 'center', 
            flexWrap: 'wrap', 
            zIndex: 20 
          }}>
            <div style={{ fontSize: '13px', fontWeight: '600', color: '#1E293B', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#0EA5E9' }}>✓</span> Garantia de Serviço e Peças</div>
            <span style={{ color: '#E2E8F0' }}>•</span>
            <div style={{ fontSize: '13px', fontWeight: '600', color: '#1E293B', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#0EA5E9' }}>✓</span> Coleta no seu Endereço</div>
            <span style={{ color: '#E2E8F0' }}>•</span>
            <div style={{ fontSize: '13px', fontWeight: '600', color: '#1E293B', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#0EA5E9' }}>✓</span> Ferramental e Solda Especializada</div>
            <span style={{ color: '#E2E8F0' }}>•</span>
            <div style={{ fontSize: '13px', fontWeight: '600', color: '#1E293B', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ color: '#0EA5E9' }}>✓</span> Pagamento Facilitado</div>
          </div>

          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '140px', background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)', pointerEvents: 'none', zIndex: 15 }} />
        </section>
      )}

      {/* Sobre Nós */}
      <section id="sobre" style={{ padding: isMobile ? '48px 20px' : '80px 48px 96px 48px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(480px, 1fr))', gap: isMobile ? '32px' : '80px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1px', color: '#475569', textTransform: 'uppercase', marginBottom: '16px' }}>Autoridade & Experiência</span>
            <h2 style={{ fontSize: isMobile ? '28px' : '40px', lineHeight: 1.2, fontWeight: '800', color: '#0F172A', marginBottom: '24px', letterSpacing: '-1px' }}>Excelência técnica em máquinas de lavar e refrigeração</h2>
            <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#475569', marginBottom: '32px' }}>Experiência da equipe e constante treinamento no conserto do seu eletrodoméstico, com garantia de eficiência e sem atraso. Realizamos a coleta segura para a manutenção da sua máquina.</p>
            <a href="https://wa.me/5551991664152" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: isMobile ? '100%' : 'auto', boxSizing: 'border-box', gap: '8px', backgroundColor: '#A7F3D0', color: '#064E3B', padding: '14px 28px', borderRadius: '999px', textDecoration: 'none', fontSize: '15px', fontWeight: '700' }}>
              <IconWhatsApp />
              Solicitar Coleta de Eletrodoméstico
            </a>
          </div>
          <div>
            <img src={sobreImg} alt="Manutenção de peças" style={{ width: '100%', height: 'auto', borderRadius: isMobile ? '20px' : '32px', objectFit: 'cover', boxShadow: '0 20px 40px rgba(15, 23, 42, 0.08)' }} />
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" style={{ padding: isMobile ? '48px 20px' : '96px 48px', backgroundColor: '#F8FAFC' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '64px' }}>
            <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1px', color: '#64748B', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>Especialidades</span>
            <h2 style={{ fontSize: isMobile ? '28px' : '36px', fontWeight: '800', color: '#0F172A', margin: 0, letterSpacing: '-1px' }}>Serviços de Manutenção e Reparo</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'stretch' }}>
            
            {/* Cartão 1 */}
            <div style={{ backgroundColor: '#FFFFFF', padding: isMobile ? '28px 20px' : '40px', borderRadius: '24px', boxShadow: '0 10px 40px rgba(15, 23, 42, 0.04)', display: 'flex', flexDirection: 'column', height: '100%', boxSizing: 'border-box' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
                <div style={{ color: '#64748B', flexShrink: 0 }}><svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="2" ry="2"></rect><circle cx="12" cy="14" r="5"></circle><circle cx="12" cy="14" r="2.5"></circle><line x1="4" y1="8" x2="20" y2="8"></line><rect x="14" y="4.5" width="4" height="2" rx="0.5"></rect><circle cx="7" cy="5.5" r="0.5" fill="currentColor"></circle><circle cx="9" cy="5.5" r="0.5" fill="currentColor"></circle></svg></div>
                <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#0F172A', margin: 0, lineHeight: 1.2 }}>Máquinas de<br/>Lavar Roupas</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', color: '#475569', fontSize: '14.5px', lineHeight: 1.5 }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}><span style={{ color: '#10B981', display: 'flex', marginTop: '2px', flexShrink: 0 }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span><strong style={{ color: '#0F172A' }}>Não centrifuga ou não gira:</strong> Reparo de motor, sensor de rotação, correia e placa eletrônica.</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}><span style={{ color: '#10B981', display: 'flex', marginTop: '2px', flexShrink: 0 }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span><strong style={{ color: '#0F172A' }}>Vazamentos de água:</strong> Troca de mangueiras, retentores, gaxetas e vedação da cuba.</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}><span style={{ color: '#10B981', display: 'flex', marginTop: '2px', flexShrink: 0 }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span><strong style={{ color: '#0F172A' }}>Barulho excessivo ou trepidação:</strong> Troca de rolamentos, eixo, amortecedores e molas de suspensão.</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}><span style={{ color: '#10B981', display: 'flex', marginTop: '2px', flexShrink: 0 }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span><strong style={{ color: '#0F172A' }}>Não entra ou não escoa água:</strong> Válvulas solenoides, bomba de drenagem e pressostato.</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}><span style={{ color: '#10B981', display: 'flex', marginTop: '2px', flexShrink: 0 }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span><strong style={{ color: '#0F172A' }}>Higienização técnica completa:</strong> Desmontagem integral do cesto e cuba com remoção de crostas e mofo.</span></li>
              </ul>
              <a href={linkWhatsAppMaquina} target="_blank" rel="noreferrer" style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', backgroundColor: '#A7F3D0', color: '#064E3B', padding: '14px', borderRadius: '999px', textDecoration: 'none', fontSize: '14px', fontWeight: '700' }}>
                <IconWhatsApp /> Solicitar coleta de máquina
              </a>
            </div>

            {/* Cartão 2 */}
            <div style={{ backgroundColor: '#FFFFFF', padding: isMobile ? '28px 20px' : '40px', borderRadius: '24px', boxShadow: '0 10px 40px rgba(15, 23, 42, 0.04)', display: 'flex', flexDirection: 'column', height: '100%', boxSizing: 'border-box' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
                <div style={{ color: '#64748B', flexShrink: 0 }}><svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><path d="M5 9h14"></path><path d="M8 4v3"></path><path d="M8 11v4"></path></svg></div>
                <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#0F172A', margin: 0, lineHeight: 1.2 }}>Geladeiras &<br/>Refrigeradores</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', color: '#475569', fontSize: '14.5px', lineHeight: 1.5 }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}><span style={{ color: '#10B981', display: 'flex', marginTop: '2px', flexShrink: 0 }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span><strong style={{ color: '#0F172A' }}>Geladeira não gela embaixo:</strong> Desobstrução de duto, fusível térmico, bimetal e resistência de degelo.</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}><span style={{ color: '#10B981', display: 'flex', marginTop: '2px', flexShrink: 0 }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span><strong style={{ color: '#0F172A' }}>Vazamento de fluido (Gás):</strong> Detecção precisa de microvazamento e recarga técnica.</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}><span style={{ color: '#10B981', display: 'flex', marginTop: '2px', flexShrink: 0 }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span><strong style={{ color: '#0F172A' }}>Solda profissional de cobre:</strong> Soldagem oxiacetilênica e substituição de filtro secador com vácuo.</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}><span style={{ color: '#10B981', display: 'flex', marginTop: '2px', flexShrink: 0 }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span><strong style={{ color: '#0F172A' }}>Troca e reparo de compressor:</strong> Diagnóstico de motor trancado, relé térmico e placa inverter.</span></li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}><span style={{ color: '#10B981', display: 'flex', marginTop: '2px', flexShrink: 0 }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span><strong style={{ color: '#0F172A' }}>Borracha de vedação:</strong> Manutenção de gaxetas para evitar perda de rendimento e desperdício de energia.</span></li>
              </ul>
              <a href={linkWhatsAppGeladeira} target="_blank" rel="noreferrer" style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', backgroundColor: '#A7F3D0', color: '#064E3B', padding: '14px', borderRadius: '999px', textDecoration: 'none', fontSize: '14px', fontWeight: '700' }}>
                <IconWhatsApp /> Solicitar coleta de geladeira
              </a>
            </div>

            {/* Cartão 3 (Formulário) */}
            <div style={{ backgroundColor: '#E0F2FE', padding: isMobile ? '28px 20px' : '40px', borderRadius: '24px', display: 'flex', flexDirection: 'column', height: '100%', boxSizing: 'border-box' }}>
              <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '1px', color: '#0369A1', textTransform: 'uppercase', marginBottom: '12px' }}>Agilidade no Atendimento</span>
              <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0F172A', marginBottom: '24px', lineHeight: 1.2 }}>Qual é o problema do seu aparelho?</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flexGrow: 1 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#334155' }}>Tipo de Eletrodoméstico</label>
                  <select name="tipo" value={formData.tipo} onChange={handleInputChange} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #BAE6FD', fontSize: '14px', color: '#0F172A', backgroundColor: '#FFFFFF', outline: 'none', width: '100%', boxSizing: 'border-box' }}>
                    <option value="Geladeira / Refrigerador">Geladeira / Refrigerador</option>
                    <option value="Máquina de Lavar">Máquina de Lavar</option>
                  </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#334155' }}>Principal Sintoma / Problema</label>
                  <select name="sintoma" value={formData.sintoma} onChange={handleInputChange} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #BAE6FD', fontSize: '14px', color: '#0F172A', backgroundColor: '#FFFFFF', outline: 'none', width: '100%', boxSizing: 'border-box' }}>
                    {formData.tipo === 'Geladeira / Refrigerador' ? (
                      <>
                        <option value="Geladeira não gela embaixo">Geladeira não gela embaixo</option>
                        <option value="Vazamento de gás">Vazamento de gás</option>
                        <option value="Solda de tubos de cobre">Solda de tubos de cobre</option>
                        <option value="Troca e reparo de compressor">Troca e reparo de compressor</option>
                        <option value="Borracha de vedação e termostato">Borracha de vedação e termostato</option>
                      </>
                    ) : (
                      <>
                        <option value="Não centrifuga ou não gira">Não centrifuga ou não gira</option>
                        <option value="Vazamentos de água">Vazamentos de água</option>
                        <option value="Barulho excessivo ou trepidação">Barulho excessivo ou trepidação</option>
                        <option value="Não entra ou não escoa água">Não entra ou não escoa água</option>
                        <option value="Higienização técnica completa">Higienização técnica completa</option>
                      </>
                    )}
                  </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '12px', fontWeight: '600', color: '#334155' }}>Seu Bairro / Cidade</label>
                  <input type="text" name="bairro" value={formData.bairro} onChange={handleInputChange} placeholder="Ex: Centro, Porto Alegre" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #BAE6FD', fontSize: '14px', color: '#0F172A', backgroundColor: '#FFFFFF', outline: 'none', width: '100%', boxSizing: 'border-box' }} />
                </div>
              </div>
              <div style={{ backgroundColor: '#bae6fd', padding: '16px', borderRadius: '12px', marginTop: '24px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                 <div style={{ color: '#0284c7', flexShrink: 0 }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
                 <span style={{ fontSize: '13px', color: '#0369a1', fontWeight: '700', lineHeight: 1.4 }}>Técnicos de plantão para atendimento e coleta rápida em Porto Alegre.</span>
              </div>
              <a href={linkWhatsAppForm} target="_blank" rel="noreferrer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', backgroundColor: '#10B981', color: '#FFFFFF', padding: '14px', borderRadius: '999px', textDecoration: 'none', fontSize: '14px', fontWeight: '700', boxShadow: '0 4px 14px rgba(16, 185, 129, 0.25)' }}>
                <IconWhatsApp /> Enviar Detalhes pelo WhatsApp
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}