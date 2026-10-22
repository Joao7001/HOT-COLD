import React, { useState } from 'react';

export default function Contato() {
  const [contatoData, setContatoData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const handleContatoChange = (e) => {
    const { name, value } = e.target;
    setContatoData(prev => ({ ...prev, [name]: value }));
  };

  const handleEnviarMensagem = (e) => {
    e.preventDefault();
    const texto = `Olá, Hot & Cold! Meu nome é ${contatoData.nome}.\n\n*Telefone:* ${contatoData.telefone}\n*E-mail:* ${contatoData.email}\n*Mensagem:* ${contatoData.mensagem}`;
    const url = `https://wa.me/5551991664152?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contato" style={{ padding: '96px 48px', backgroundColor: '#F8FAFC' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        
        <div style={{ marginBottom: '48px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#E0F2FE', color: '#0369A1', padding: '6px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: '600', marginBottom: '24px' }}>
            ✓ Coleta e Conserto na nossa Assistência Técnica • Av. Brasil, 1460
          </div>
          <h2 style={{ fontSize: '46px', fontWeight: '900', color: '#0F172A', marginBottom: '16px', lineHeight: 1.1, letterSpacing: '-1px' }}>
            Entre em Contato<br />Conosco
          </h2>
          <p style={{ fontSize: '16px', color: '#475569', maxWidth: '500px', lineHeight: 1.6 }}>
            Fale com a nossa equipe para tirar dúvidas, agendar uma coleta ou fazer uma visita.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '40px', marginBottom: '80px' }}>
          
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', padding: '16px', boxShadow: '0 10px 40px rgba(15, 23, 42, 0.04)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '100%', height: '300px', borderRadius: '16px', overflow: 'hidden', marginBottom: '24px' }}>
              <iframe 
                title="Mapa de Localização"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.498114674686!2d-51.20038848488338!3d-29.99849508190807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519777759b66ba3%3A0xb69dbcfc3b482260!2sAv.%20Brasil%2C%201460%20-%20Navegantes%2C%20Porto%20Alegre%20-%20RS%2C%2090230-060!5e0!3m2!1spt-BR!2sbr!4v1698260000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            
            <div style={{ padding: '0 16px 16px 16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                <span style={{ color: '#0F172A', marginTop: '2px' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></span>
                <span style={{ fontSize: '15px', fontWeight: '700', color: '#0F172A', lineHeight: 1.5 }}>
                  Avenida Brasil, 1460 - São Geraldo, Porto Alegre - RS,<br/>90230-060, Brasil
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <span style={{ color: '#0F172A' }}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></span>
                <span style={{ fontSize: '14px', color: '#475569', fontWeight: '500' }}>
                  Segunda a Sexta: 08h às 18h • Sábado: 08h às 12h
                </span>
              </div>
              
              <a href="https://maps.google.com/?q=Av.+Brasil,+1460+-+Navegantes,+Porto+Alegre" target="_blank" rel="noreferrer" style={{ display: 'block', width: '100%', padding: '14px 0', backgroundColor: '#1E293B', color: '#FFFFFF', textAlign: 'center', borderRadius: '10px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>
                Abrir no Google Maps
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', padding: '40px', boxShadow: '0 10px 40px rgba(15, 23, 42, 0.04)' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0F172A', marginBottom: '24px' }}>Envie uma Mensagem</h3>
              <form onSubmit={handleEnviarMensagem} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <input type="text" name="nome" value={contatoData.nome} onChange={handleContatoChange} placeholder="Nome" required style={{ padding: '14px 16px', borderRadius: '8px', border: '1px solid #E2E8F0', backgroundColor: '#F8FAFC', fontSize: '15px', outline: 'none' }} />
                <input type="tel" name="telefone" value={contatoData.telefone} onChange={handleContatoChange} placeholder="Telefone" required style={{ padding: '14px 16px', borderRadius: '8px', border: '1px solid #E2E8F0', backgroundColor: '#F8FAFC', fontSize: '15px', outline: 'none' }} />
                <textarea name="mensagem" value={contatoData.mensagem} onChange={handleContatoChange} placeholder="Mensagem (Descreva seu problema)" rows="4" required style={{ padding: '14px 16px', borderRadius: '8px', border: '1px solid #E2E8F0', backgroundColor: '#F8FAFC', fontSize: '15px', outline: 'none', resize: 'vertical' }}></textarea>
                
                <button type="submit" style={{ backgroundColor: '#10B981', color: '#FFFFFF', padding: '14px', borderRadius: '8px', border: 'none', fontSize: '15px', fontWeight: '700', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  Enviar para o WhatsApp
                </button>
              </form>
            </div>

            {/* Informações de Contacto Direto - Apenas WhatsApp */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '0 16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: '#E2E8F0', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#475569' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </div>
                <span style={{ fontSize: '15px', fontWeight: '700', color: '#0F172A' }}>WhatsApp: (51) 99166-4152</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '64px' }}>
          <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '1px', color: '#64748B', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
            FAQ / Atendimento Rápido
          </span>
          <h2 style={{ fontSize: '32px', fontWeight: '900', color: '#0F172A', marginBottom: '40px', letterSpacing: '-0.5px' }}>
            Dúvidas Frequentes
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#0F172A', marginBottom: '12px' }}>Como funciona a coleta e conserto?</h4>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6 }}>Nós realizamos a coleta do seu eletrodoméstico com segurança no seu endereço. Levamos para a nossa Assistência Técnica na Av. Brasil, 1460, fazemos o reparo e entregamos de volta.</p>
            </div>
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#0F172A', marginBottom: '12px' }}>Quais as áreas de atendimento?</h4>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6 }}>Atendemos toda a cidade de Porto Alegre e também regiões metropolitanas próximas. Consulte o nosso WhatsApp informando o seu bairro para confirmarmos a disponibilidade.</p>
            </div>
            <div>
              <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#0F172A', marginBottom: '12px' }}>Qual é o tempo médio de conserto?</h4>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6 }}>O tempo de conserto geralmente leva de 24h a 48h, dependendo da disponibilidade das peças originais necessárias para a sua máquina ou geladeira.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}