import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import PageConfig from './PageConfig';

import Navbar from './Navbar/Navbar';
import Footer from './footer/Footer'
// Este es tu componente principal
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <PageConfig />
      <Footer/>
    </BrowserRouter>

  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
