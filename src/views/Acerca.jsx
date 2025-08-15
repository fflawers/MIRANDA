import React from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from '../footer/Footer';

const AcercaDe = () => {
  return (
    <div>
       <Navbar />
    <div className="container my-5">
      <h2 className="text-center mb-4">Sobre Nosotros</h2>
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1595871151608-bc7abd1caca3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="img-fluid rounded shadow"
            alt="Spa interior"
          />
        </div>
        <div className="col-md-6">
          <p>
            En <strong>SPA</strong>, creemos que el bienestar es un arte. Nuestra misión es brindar una experiencia sensorial única,
            combinando terapias tradicionales con un enfoque moderno y elegante.
          </p>
          <p>
            Fundado en 2020, nuestro spa fue diseñado para ser un refugio de paz en medio de la ciudad. Cada detalle, desde los aceites esenciales
            hasta la música ambiental, ha sido cuidadosamente elegido para ayudarte a reconectar contigo.
          </p>
          <p>
            Nuestro equipo está formado por profesionales certificados, comprometidos con ofrecerte lo mejor en masajes, faciales, aromaterapia y más.
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default AcercaDe;
