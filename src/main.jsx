import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import PageConfig from './PageConfig';
import Navbar from './Navbar/Navbar';
import Footer from './footer/Footer';

const App = () => {
  return (
    <BrowserRouter basename="/MIRANDA">
      <Navbar />
      <PageConfig />
      <Footer />
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);