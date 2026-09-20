import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container nav">
        <Link to="/" className="logo" onClick={() => setOpen(false)} aria-label="Federal Associados — página inicial">
          <span className="logoMark"><i></i><i></i><i></i></span>
          <span className="logoWords">Federal <b>Associados</b></span>
        </Link>
        <button className="menuBtn" onClick={() => setOpen(!open)} aria-label="Abrir menu" aria-expanded={open}>☰</button>
        <nav className={open ? "navLinks open" : "navLinks"}>
          <Link to="/" onClick={() => setOpen(false)}>Início</Link>
          <Link to="/planos" onClick={() => setOpen(false)}>Planos</Link>
          <Link to="/beneficios" onClick={() => setOpen(false)}>Benefícios</Link>
          <Link to="/sobre" onClick={() => setOpen(false)}>Sobre</Link>
          <Link to="/faq" onClick={() => setOpen(false)}>FAQ</Link>
          <Link to="/contato" onClick={() => setOpen(false)}>Contato</Link>
          <a className="navCta" href="https://wa.me/5511972506989" target="_blank" rel="noreferrer">Fale conosco <span>↗</span></a>
        </nav>
      </div>
    </header>
  );
}
