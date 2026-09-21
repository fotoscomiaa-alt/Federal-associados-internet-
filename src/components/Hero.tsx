import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="heroGlow heroGlowOne" />
      <div className="heroGlow heroGlowTwo" />

      <div className="container heroGrid">
        <div className="heroCopy">
          <div className="eyebrow">
            CONECTIVIDADE <span>•</span> BENEFÍCIOS
          </div>

          <h1>
            Conexão que facilita <em>o seu dia a dia.</em>
          </h1>

          <p className="heroText">
            Internet, atendimento e vantagens pensados para você e sua família.
          </p>

          <div
            className="heroFeatureRow"
            aria-label="Destaques da Federal Associados"
          >
            <span>
              <b>⌁</b> Internet de alta qualidade
            </span>

            <span>
              <b>◌</b> Atendimento próximo
            </span>

            <span>
              <b>✦</b> Vantagens exclusivas
            </span>
          </div>

          <div className="actions">
            <Link className="btn primary" to="/planos">
              Conheça nossos planos <span>→</span>
            </Link>

            <a
              className="btn ghost"
              href="https://wa.me/5511972506989"
              target="_blank"
              rel="noreferrer"
            >
              Falar no WhatsApp
            </a>
          </div>

          <div className="stats">
            <span>
              <b>8</b> planos
            </span>

            <span>
              <b>100%</b> atendimento
            </span>

            <span>
              <b>+</b> vantagens
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}