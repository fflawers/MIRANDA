import { Routes, Route } from 'react-router-dom';
import Servicios from './views/Servicios';
import Index from './views';
import Contacto from './views/Contacto';
import AcercaDe from './views/Acerca';
import TermsAndConditions from './views/Legales';

const PageConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/acerca" element={<AcercaDe />} />
      <Route path="/terms" element={<TermsAndConditions />} />
      {/* <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/returns" element={<ReturnPolicy />} />  */}
    </Routes>
  );
};

export default PageConfig;