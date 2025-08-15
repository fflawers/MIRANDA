import { Routes, Route } from 'react-router-dom';
import Servicios from './views/Servicios';
import Index from './views';
import './assets/Global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacto from './views/Contacto';
import AcercaDe from './views/Acerca';


const PageConfig = () => {
  return (
    <Router basename="/MIRANDA"> 
      <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/servicios" element={<Servicios/>} />
      <Route path="/contacto" element={<Contacto/>} />
      <Route path="/acerca" element={<AcercaDe/>} />
    </Routes>
    </Router>
  );
};

export default PageConfig;
