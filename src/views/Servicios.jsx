// import React from "react";
// import Navbar from "../Navbar/Navbar";
// import Footer from '../footer/Footer';

// const servicios = [
//   {
//     titulo: 'Masaje Relajante',
//     descripcion: 'Terapia corporal para liberar el estrés y mejorar la circulación.',
//     imagen: 'https://plus.unsplash.com/premium_photo-1683134297492-cce5fc6dae31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     titulo: 'Facial Premium',
//     descripcion: 'Limpieza profunda con productos orgánicos para rejuvenecer tu piel.',
//     imagen: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     titulo: 'Aromaterapia',
//     descripcion: 'Tratamiento con aceites esenciales que armoniza cuerpo y mente.',
//     imagen: 'https://images.unsplash.com/photo-1605671507162-43e526ef6f97?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
//   {
//     titulo: 'Spa de Pies',
//     descripcion: 'Masaje y exfoliación para pies cansados. Perfecto después de un largo día.',
//     imagen: 'https://plus.unsplash.com/premium_photo-1661274108346-6e831c83d33e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//   },
// ];

// const Servicios = () => {
//   return (
//     <div className="BackgroundSuccess">
//        <Navbar />
//     <div className="container my-5">
//       <h2 className="text-center mb-4">Nuestros Servicios Premium</h2>
//       <div className="row g-4">
//         {servicios.map((servicio, index) => (
//           <div key={index} className="col-md-6 col-lg-4">
//             <div className="card h-100 shadow-sm">
//               <img src={servicio.imagen} className="card-img-top" alt={servicio.titulo} />
//               <div className="card-body">
//                 <h5 className="card-title">{servicio.titulo}</h5>
//                 <p className="card-text">{servicio.descripcion}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     <Footer />
//     </div>
//   );
// };


// export default Servicios;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";

const servicios = [
  {
    titulo: "Masaje Relajante",
    descripcionCorta: "Terapia corporal para liberar el estrés y mejorar la circulación.",
    descripcionLarga:
      "Nuestro masaje relajante utiliza técnicas suaves y aceites esenciales para aliviar la tensión muscular, mejorar la circulación y promover un estado de calma profunda. Perfecto para desconectar del ajetreo diario.",
    duracion: "60 min",
    precio: "$80 USD",
    imagen: "https://plus.unsplash.com/premium_photo-1683134297492-cce5fc6dae31?q=80&w=2070&auto=format&fit=crop",
  },
  {
    titulo: "Facial Premium",
    descripcionCorta: "Limpieza profunda con productos orgánicos para rejuvenecer tu piel.",
    descripcionLarga:
      "Este tratamiento incluye limpieza profunda, exfoliación, mascarilla hidratante y masaje facial con productos orgánicos de alta calidad. Ideal para revitalizar y rejuvenecer tu piel, dejándola radiante.",
    duracion: "45 min",
    precio: "$65 USD",
    imagen: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1170&auto=format&fit=crop",
  },
  {
    titulo: "Aromaterapia",
    descripcionCorta: "Tratamiento con aceites esenciales que armoniza cuerpo y mente.",
    descripcionLarga:
      "Experimenta el poder de los aceites esenciales personalizados en un tratamiento que combina masaje y aromaterapia para equilibrar cuerpo y mente. Perfecto para aliviar el estrés y mejorar el bienestar emocional.",
    duracion: "75 min",
    precio: "$90 USD",
    imagen: "https://images.unsplash.com/photo-1605671507162-43e526ef6f97?q=80&w=1169&auto=format&fit=crop",
  },
  {
    titulo: "Spa de Pies",
    descripcionCorta: "Masaje y exfoliación para pies cansados. Perfecto después de un largo día.",
    descripcionLarga:
      "Un tratamiento rejuvenecedor que incluye exfoliación, hidratación y masaje reflexológico para pies cansados. Relaja y revitaliza tus pies con productos naturales y aceites calmantes.",
    duracion: "30 min",
    precio: "$45 USD",
    imagen: "https://plus.unsplash.com/premium_photo-1661274108346-6e831c83d33e?q=80&w=1169&auto=format&fit=crop",
  },
];

const Servicios = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(null);

  const handleShowModal = (index) => setShowModal(index);
  const handleCloseModal = () => setShowModal(null);

  return (
    <div className="bg-spa-cream">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="hero-section d-flex align-items-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop')",
        }}
      >
        <div className="container hero-overlay py-4">
        
          <h1 className="display-4 fw-bold mb-4 animate-fade-in">
            Nuestros Servicios Premium
          </h1>
          <p className="lead mb-5">
            Descubre tratamientos diseñados para rejuvenecer tu cuerpo y mente en Serenity Spa.
          </p>
          <button
            className="btn btn-spa-gold btn-lg"
            onClick={() => navigate("/contacto")}
            aria-label="Reservar un servicio en Serenity Spa"
          >
            Reservar Ahora
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <h2 className="display-5 fw-bold text-spa-green text-center mb-5">
            Explora Nuestros Servicios
          </h2>
          <div className="row g-4">
            {servicios.map((servicio, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm service-card">
                  <div className="service-img-wrapper">
                    <img
                      src={servicio.imagen}
                      className="card-img-top"
                      alt={servicio.titulo}
                      loading="lazy"
                    />
                    <div className="service-overlay">
                      <button
                        className="btn btn-spa-green"
                        onClick={() => handleShowModal(index)}
                        aria-label={`Ver detalles de ${servicio.titulo}`}
                      >
                        Más Detalles
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-spa-green">{servicio.titulo}</h5>
                    <p className="card-text text-muted">{servicio.descripcionCorta}</p>
                    <p className="text-muted small">
                      Duración: {servicio.duracion} | Precio: {servicio.precio}
                    </p>
                  </div>
                </div>

                {/* Modal for Service Details */}
                <div
                  className={`modal fade ${showModal === index ? "show d-block" : ""}`}
                  tabIndex="-1"
                  aria-labelledby={`${servicio.titulo}-modal`}
                  aria-hidden={showModal !== index}
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title text-spa-green">{servicio.titulo}</h5>
                        <button
                          type="button"
                          className="btn-close"
                          onClick={handleCloseModal}
                          aria-label="Cerrar"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <img
                          src={servicio.imagen}
                          className="img-fluid rounded mb-3"
                          alt={servicio.titulo}
                          loading="lazy"
                        />
                        <p>{servicio.descripcionLarga}</p>
                        <p className="text-muted">
                          <strong>Duración:</strong> {servicio.duracion}
                        </p>
                        <p className="text-muted">
                          <strong>Precio:</strong> {servicio.precio}
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-spa-gold"
                          onClick={() => navigate("/contacto")}
                        >
                          Reservar Ahora
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          onClick={handleCloseModal}
                        >
                          Cerrar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {showModal === index && (
                  <div className="modal-backdrop fade show" onClick={handleCloseModal}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-5 bg-spa-cream">
        <div className="container py-5">
          <h2 className="display-5 fw-bold text-spa-green text-center mb-5">
            Paquetes Exclusivos
          </h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card border-0 shadow-sm bg-white">
                <div className="card-body">
                  <h3 className="h4 fw-bold text-spa-green mb-3">Paquete Serenidad Total</h3>
                  <p className="text-muted">
                    Incluye un masaje relajante, facial premium y aromaterapia para una experiencia completa de relajación.
                  </p>
                  <p className="text-muted small">Duración: 2.5 horas | Precio: $180 USD</p>
                  <button
                    className="btn btn-spa-green mt-3"
                    onClick={() => navigate("/contacto")}
                  >
                    Reservar Paquete
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 shadow-sm bg-white">
                <div className="card-body">
                  <h3 className="h4 fw-bold text-spa-green mb-3">Paquete Día de Spa</h3>
                  <p className="text-muted">
                    Disfruta de un masaje relajante, spa de pies y acceso a nuestras instalaciones de hidroterapia.
                  </p>
                  <p className="text-muted small">Duración: 3 horas | Precio: $200 USD</p>
                  <button
                    className="btn btn-spa-green mt-3"
                    onClick={() => navigate("/contacto")}
                  >
                    Reservar Paquete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-spa-gold text-white text-center">
        <div className="container py-5">
          <h2 className="display-5 fw-bold mb-4">Tu Bienestar Comienza Aquí</h2>
          <p className="lead mb-5">
            Reserva tu tratamiento favorito y déjate envolver por la calma de Serenity Spa.
          </p>
          <button
            className="btn btn-outline-light btn-lg"
            onClick={() => navigate("/contacto")}
          >
            Reservar Ahora
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Servicios;
