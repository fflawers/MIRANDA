import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";


const AcercaDe = () => {
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
            "url('https://images.unsplash.com/photo-1595871151608-bc7abd1caca3?q=80&w=1470&auto=format&fit=crop')",
        }}
      >
        <div className="container hero-overlay py-4">
          
          <h1 className="display-4 fw-bold mb-4 animate-fade-in">
            Sobre Serenity Spa
          </h1>
          <p className="lead mb-5">
            Un refugio de paz y bienestar diseñado para rejuvenecer cuerpo y mente.
          </p>
          <button
            className="btn btn-spa-gold btn-lg"
            onClick={() => navigate("/contacto")}
            aria-label="Reservar una experiencia en Serenity Spa"
          >
            Reservar Ahora
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <h2 className="display-5 fw-bold text-spa-green text-center mb-5">
            Nuestra Historia
          </h2>
          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop"
                className="img-fluid rounded shadow"
                alt="Spa interior"
                loading="lazy"
              />
            </div>
            <div className="col-md-6">
              <p className="text-muted mb-4">
                En <strong>Serenity Spa</strong>, creemos que el bienestar es un arte. Fundado en 2020, nuestro spa fue creado como un oasis de calma en el corazón de la ciudad, diseñado para ofrecer una experiencia sensorial única que combina técnicas tradicionales con un enfoque moderno y elegante.
              </p>
              <p className="text-muted mb-4">
                Cada detalle, desde los aceites esenciales artesanales hasta la música ambiental cuidadosamente seleccionada, está pensado para ayudarte a reconectar contigo mismo. Nuestra misión es transformar el bienestar en una experiencia inolvidable, donde el cuerpo, la mente y el espíritu encuentren armonía.
              </p>
              <p className="text-muted">
                Con instalaciones de lujo y un equipo de profesionales certificados, estamos comprometidos a ofrecerte tratamientos personalizados que superen tus expectativas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-5 bg-spa-cream">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card border-0 shadow-sm bg-white">
                <div className="card-body">
                  <h3 className="h4 fw-bold text-spa-green mb-3">Nuestra Misión</h3>
                  <p className="text-muted">
                    Proporcionar un santuario de relajación donde cada cliente pueda rejuvenecer y encontrar paz interior a través de tratamientos personalizados y un servicio excepcional.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 shadow-sm bg-white">
                <div className="card-body">
                  <h3 className="h4 fw-bold text-spa-green mb-3">Nuestra Visión</h3>
                  <p className="text-muted">
                    Ser el spa líder en bienestar, reconocido por nuestra dedicación a la excelencia, la innovación y la creación de experiencias únicas que inspiren armonía.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <h2 className="display-5 fw-bold text-spa-green text-center mb-5">
            Nuestro Equipo
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm bg-spa-cream text-center">
                <img
                  src="https://imagesspamiranda.s3.us-east-2.amazonaws.com/rubia.jpg"
                  className="card-img-top rounded-circle mx-auto mt-3"
                  alt="Terapeuta"
                  style={{ width: "150px", height: "150px", objectFit: "cover" }}
                  loading="lazy"
                />
                <div className="card-body">
                  <h3 className="h5 fw-bold text-spa-green">Equipo de Terapeutas</h3>
                  <p className="text-muted">
                    Profesionales certificados en masajes, aromaterapia y tratamientos faciales, comprometidos con tu bienestar.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm bg-spa-cream text-center">
                <img
                  src="https://imagesspamiranda.s3.us-east-2.amazonaws.com/pelonegro.jpg"
                  className="card-img-top rounded-circle mx-auto mt-3"
                  alt="Esteticistas"
                  style={{ width: "150px", height: "150px", objectFit: "cover" }}
                  loading="lazy"
                />
                <div className="card-body">
                  <h3 className="h5 fw-bold text-spa-green">Esteticistas Expertos</h3>
                  <p className="text-muted">
                    Especialistas en tratamientos rejuvenecedores que realzan tu belleza natural.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm bg-spa-cream text-center">
                <img
                  src="https://imagesspamiranda.s3.us-east-2.amazonaws.com/Woman+at+work.jpg"
                  className="card-img-top rounded-circle mx-auto mt-3"
                  alt="Staff de atención"
                  style={{ width: "150px", height: "150px", objectFit: "cover" }}
                  loading="lazy"
                />
                <div className="card-body">
                  <h3 className="h5 fw-bold text-spa-green">Atención al Cliente</h3>
                  <p className="text-muted">
                    Un equipo dedicado a garantizar que cada visita sea perfecta, desde la reserva hasta tu salida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-5 bg-spa-cream">
        <div className="container py-5">
          <h2 className="display-5 fw-bold text-spa-green text-center mb-5">
            Nuestros Valores
          </h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm bg-white text-center">
                <div className="card-body">
                  <h3 className="h5 fw-bold text-spa-green">Excelencia</h3>
                  <p className="text-muted">
                    Nos esforzamos por superar las expectativas en cada detalle de tu experiencia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm bg-white text-center">
                <div className="card-body">
                  <h3 className="h5 fw-bold text-spa-green">Bienestar</h3>
                  <p className="text-muted">
                    Promovemos la armonía entre cuerpo, mente y espíritu en cada tratamiento.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm bg-white text-center">
                <div className="card-body">
                  <h3 className="h5 fw-bold text-spa-green">Sostenibilidad</h3>
                  <p className="text-muted">
                    Usamos productos naturales y prácticas eco-amigables para cuidar de ti y del planeta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-spa-gold text-white text-center">
        <div className="container py-5">
          <h2 className="display-5 fw-bold mb-4">Descubre la Experiencia Serenity</h2>
          <p className="lead mb-5">
            Reserva tu momento de paz y déjate envolver por el lujo y la calma.
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

export default AcercaDe;