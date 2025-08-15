// src/components/Index.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import Unicos from "../Modales/Unicos";


const Index = () => {
  const navigate = useNavigate();

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
            Renueva tu ser, vive la elegancia del descanso
          </h1>
          <p className="lead mb-5">
            Serenity Spa: Tu refugio de lujo para el bienestar y la armonía.
          </p>
          <button
            className="btn btn-spa-gold btn-lg"
            onClick={() => navigate("/contacto")}
            aria-label="Reservar una experiencia premium en Serenity Spa"
          >
            Reservar Ahora
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <h2 className="display-5 fw-bold text-spa-green text-center mb-4">
            Bienvenidos a Serenity Spa
          </h2>
          <p className="text-center text-muted mb-5">
            En Serenity Spa, transformamos el bienestar en una experiencia sensorial única. Nuestro equipo de expertos combina técnicas tradicionales y modernas para ofrecerte tratamientos personalizados que rejuvenecen cuerpo y mente. Descubre un oasis de calma diseñado para ti.
          </p>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm bg-spa-cream">
                <div className="card-body text-center">
                  <h3 className="h5 fw-bold text-spa-green">Lujo Exclusivo</h3>
                  <p className="text-muted">
                    Instalaciones de primer nivel con un ambiente diseñado para la relajación absoluta.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm bg-spa-cream">
                <div className="card-body text-center">
                  <h3 className="h5 fw-bold text-spa-green">Tratamientos Personalizados</h3>
                  <p className="text-muted">
                    Masajes, faciales y terapias adaptadas a tus necesidades únicas.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm bg-spa-cream">
                <div className="card-body text-center">
                  <h3 className="h5 fw-bold text-spa-green">Bienestar Integral</h3>
                  <p className="text-muted">
                    Programas que cuidan tu cuerpo, mente y espíritu en perfecta armonía.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-5 bg-spa-cream">
        <div className="container py-5">
          <h2 className="display-5 fw-bold text-spa-green text-center mb-5">
            Nuestros Servicios
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm overflow-hidden">
                <div className="service-img-wrapper">
                  <img
                    src="https://imagesspamiranda.s3.us-east-2.amazonaws.com/Resultados+de+cirug%C3%ADa+est%C3%A9tica_+cambios+sorprendentes.jpg"
                    alt="Masaje relajante"
                    className="images-index"
                    loading="lazy"
                  />
                  <div className="service-overlay">
                    <p className="text-white fw-bold">Masaje Relajante</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm overflow-hidden">
                <div className="service-img-wrapper">
                  <img
                    src="https://imagesspamiranda.s3.us-east-2.amazonaws.com/Repost+from+%40semestetica+%F0%9F%91%89+El+envejecimiento+facial+se+produce+a+tres+nivele.jpg"
                    alt="Facial rejuvenecedor"
                    className="images-index"
                    loading="lazy"
                  />
                  <div className="service-overlay">
                    <p className="text-white fw-bold">Facial Rejuvenecedor</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm overflow-hidden">
                <div className="service-img-wrapper">
                  <img
                    src="https://imagesspamiranda.s3.us-east-2.amazonaws.com/descarga.jpg"
                    alt="Spa de día"
                    className="images-index"
                    loading="lazy"
                  />
                  <div className="service-overlay">
                    <p className="text-white fw-bold">Spa de Día</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <button
              className="btn btn-spa-green btn-lg"
              onClick={() => navigate("/servicios")}
            >
              Ver Todos los Servicios
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <h2 className="display-5 fw-bold text-spa-green text-center mb-5">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card border-0 shadow-sm bg-spa-cream">
                <div className="card-body">
                  <p className="text-muted fst-italic mb-3">
                    "Una experiencia inolvidable. El ambiente, los tratamientos y la atención son de otro nivel. ¡Volveré pronto!"
                  </p>
                  <p className="text-spa-green fw-bold">— Ana G.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 shadow-sm bg-spa-cream">
                <div className="card-body">
                  <p className="text-muted fst-italic mb-3">
                    "El masaje relajante fue justo lo que necesitaba. El personal es increíblemente profesional y atento."
                  </p>
                  <p className="text-spa-green fw-bold">— Carlos M.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-spa-gold text-white text-center">
        <div className="container py-5">
          <h2 className="display-5 fw-bold mb-4">Reserva Tu Momento de Paz</h2>
          <p className="lead mb-5">
            Déjate envolver por la serenidad de Serenity Spa. ¡Haz tu reserva hoy!
          </p>
          <button
            className="btn btn-outline-light btn-lg"
            onClick={() => navigate("/contacto")}
          >
            Reservar Ahora
          </button>
        </div>
      </section>

      {/* Unicos Component */}
      <Unicos />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;