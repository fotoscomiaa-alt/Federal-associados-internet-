import { Link } from "react-router-dom";
import plans from "../data/plans.json";

function planWhatsAppLink(planName: string) {
  const message = `Olá! Tenho interesse no plano ${planName} da Federal Associados. Gostaria de saber mais detalhes e como contratar.`;
  return `https://wa.me/5511972506989?text=${encodeURIComponent(message)}`;
}

export default function Plans({ preview = false }: { preview?: boolean }) {
  const list = preview ? plans.slice(0, 4) : plans;
  return <section className="section plans"><div className="container"><div className="sectionHead"><div className="eyebrow">PLANOS</div><h2>Internet para todos os momentos</h2><p>Escolha o plano ideal para o seu perfil.</p></div><div className="plansGrid">{list.map((p, i) => <article className="planCard" key={p.id}>{i === 1 && <span className="badge">Mais escolhido</span>}<div className="brand">{p.operator}</div><h3>{p.name}</h3><div className="gb">{p.data}</div><div className="detail">{p.call}</div><div className="price">R$ {p.price.replace(".", ",")}<small>/mês</small></div><a className="planBtn" href={planWhatsAppLink(p.name)} target="_blank" rel="noreferrer">Quero esse plano <span>↗</span></a></article>)}</div>{preview && <div className="center"><Link className="btn primary" to="/planos">Ver todos os planos</Link></div>}</div></section>;
}
