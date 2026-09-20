import {Link} from "react-router-dom";
export default function Footer(){return <footer className="footer"><div className="container footerGrid">
 <div><div className="logo light"><span>F</span> Federal <b>Associados</b></div><p>Conexão, atendimento e benefícios para sua rotina.</p></div>
 <div><h3>Empresa</h3><Link to="/sobre">Sobre nós</Link><Link to="/beneficios">Benefícios</Link><Link to="/faq">FAQ</Link></div>
 <div><h3>Planos</h3><Link to="/planos">Conheça os planos</Link><Link to="/contato">Contato</Link></div>
 <div><h3>Atendimento</h3><a href="https://wa.me/5511972506989">WhatsApp: 11 97250-6989</a></div>
 </div><div className="container copyright">© {new Date().getFullYear()} Federal Associados. Todos os direitos reservados.</div></footer>}