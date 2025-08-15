import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";

const Contacto = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (replace with actual API call)
    setFormStatus("success");
    setTimeout(() => {
      setFormStatus(null);
      setFormData({ nombre: "", correo: "", mensaje: "" });
    }, 3000);
  };

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
            Contáctanos
          </h1>
          <p className="lead mb-5">
            Estamos aquí para ayudarte a planificar tu experiencia de bienestar en Serenity Spa.
          </p>
          
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <h2 className="display-5 fw-bold text-spa-green text-center mb-5">
            Ponte en Contacto
          </h2>
          <div className="row g-4">
            {/* Contact Form */}
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Tu nombre"
                    required
                    aria-describedby="nombreHelp"
                  />
                  <div id="nombreHelp" className="form-text">
                    Ingresa tu nombre completo.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="correo" className="form-label">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="correo"
                    name="correo"
                    value={formData.correo}
                    onChange={handleInputChange}
                    placeholder="ejemplo@correo.com"
                    required
                    aria-describedby="correoHelp"
                  />
                  <div id="correoHelp" className="form-text">
                    Usaremos este correo para responderte.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="mensaje" className="form-label">
                    Mensaje
                  </label>
                  <textarea
                    className="form-control"
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="¿En qué podemos ayudarte?"
                    required
                    aria-describedby="mensajeHelp"
                  />
                  <div id="mensajeHelp" className="form-text">
                    Describe tu consulta o solicitud.
                  </div>
                </div>
                <button type="submit" className="btn btn-spa-green btn-lg w-100">
                  Enviar Mensaje
                </button>
                {formStatus === "success" && (
                  <div className="alert alert-success mt-3" role="alert">
                    ¡Mensaje enviado! Te contactaremos pronto.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Details */}
            <div className="col-md-6">
              <div className="card border-0 shadow-sm bg-spa-cream">
                <div className="card-body">
                  <h3 className="h4 fw-bold text-spa-green mb-4">
                    Información de Contacto
                  </h3>
                  <h5>Dirección</h5>
                  <p className="text-muted">
                    Calle Aromas 123, Col. Tranquilidad, CDMX
                  </p>
                  <h5>Teléfono</h5>
                  <p className="text-muted">
                    <a href="tel:+525512345678" className="text-spa-green">
                      +52 55 1234 5678
                    </a>
                  </p>
                  <h5>Correo</h5>
                  <p className="text-muted">
                    <a href="mailto:info@serenityspa.com" className="text-spa-green">
                      info@serenityspa.com
                    </a>
                  </p>
                  <h5>Horario</h5>
                  <p className="text-muted">Lunes a Sábado: 10:00 AM - 8:00 PM</p>
                  <h5>Síguenos</h5>
                  <div className="d-flex gap-3">
                    <a
                      href="https://facebook.com"
                      className="text-spa-green"
                      aria-label="Síguenos en Facebook"
                    >
                      <i className="bi bi-facebook fs-4"></i>
                    </a>
                    <a
                      href="https://instagram.com"
                      className="text-spa-green"
                      aria-label="Síguenos en Instagram"
                    >
                      <i className="bi bi-instagram fs-4"></i>
                    </a>
                    <a
                      href="https://twitter.com"
                      className="text-spa-green"
                      aria-label="Síguenos en Twitter"
                    >
                      <i className="bi bi-twitter fs-4"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h5>Encuéntranos</h5>
                <div style={{ width: "100%", height: "250px" }}>
                  <iframe
                    title="Ubicación de Serenity Spa"
                    src="https://maps.google.com/maps?q=CDMX&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contacto;