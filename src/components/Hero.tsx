import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="heroGlow heroGlowOne" />
      <div className="heroGlow heroGlowTwo" />
      <div className="container heroGrid">
        <div className="heroCopy">
          <div className="eyebrow">CONECTIVIDADE <span>•</span> ATENDIMENTO HUMANO <span>•</span> BENEFÍCIOS</div>
          <h1>Conexão e benefícios <em>para sua rotina.</em></h1>
          <p className="heroText">Soluções de conectividade, atendimento humanizado e benefícios pensados para você e sua família.</p>
          <div className="heroFeatureRow" aria-label="Destaques da Federal Associados">
            <span><b>⌁</b> Internet de qualidade</span>
            <span><b>◌</b> Atendimento humano</span>
            <span><b>✦</b> Benefícios exclusivos</span>
          </div>
          <div className="actions"><Link className="btn primary" to="/planos">Conheça nossos planos <span>→</span></Link><a className="btn ghost" href="https://wa.me/5511972506989" target="_blank" rel="noreferrer">Falar no WhatsApp</a></div>
          <div className="stats"><span><b>8</b> planos</span><span><b>100%</b> atendimento</span><span><b>+</b> benefícios</span></div>
        </div>
        <div className="heroVisual" aria-label="Pessoa conectada usando smartphone">
          <div className="orb"></div>
          <div className="arc arcOne"></div><div className="arc arcTwo"></div>
          <div className="heroDevice"><div className="deviceNotch"></div><div className="phoneTop">Federal <small>ASSOCIADOS</small></div><div className="signal">● ● ● ●</div><strong>Conectado</strong><small>Seu plano, seus benefícios.</small><div className="miniCard">Atendimento humanizado</div></div>
        </div>
      </div>
    </section>
  );
}
