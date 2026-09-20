import {Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Planos from "./pages/Planos";
import Beneficios from "./pages/Beneficios";
import Sobre from "./pages/Sobre";
import FAQ from "./pages/FAQ";
import Contato from "./pages/Contato";

export default function App(){
 return <><Header/><main><Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/planos" element={<Planos/>}/>
  <Route path="/beneficios" element={<Beneficios/>}/>
  <Route path="/sobre" element={<Sobre/>}/>
  <Route path="/faq" element={<FAQ/>}/>
  <Route path="/contato" element={<Contato/>}/>
 </Routes></main><Footer/></>;
}