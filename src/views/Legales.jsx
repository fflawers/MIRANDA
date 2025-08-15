import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";


const TermsAndConditions = () => {
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
            Políticas de Serenity Spa
          </h1>
          <p className="lead mb-5">
            Conoce nuestras políticas para disfrutar de una experiencia relajante y segura.
          </p>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <h2 className="display-5 fw-bold text-spa-green text-center mb-5">
            Nuestras Políticas
          </h2>
          <div className="row g-4">
            {/* Terms and Conditions */}
            <div className="col-12">
              <div className="card border-0 shadow-sm bg-spa-cream" id="terms">
                <div className="card-body">
                  <h3 className="h4 fw-bold text-spa-green mb-4">
                    Términos y Condiciones
                  </h3>
                  <p className="text-muted">
                    Al reservar un servicio en Serenity Spa, el cliente acepta cumplir con nuestras políticas de reservas, cancelaciones y comportamiento en las instalaciones. Las reservas deben realizarse con al menos 24 horas de antelación, y cualquier cambio o cancelación debe notificarse con un mínimo de 12 horas previas al servicio para evitar cargos.
                  </p>
                  <p className="text-muted">
                    Nos reservamos el derecho de negar el servicio a clientes que no respeten las normas del spa, incluyendo llegar puntualmente, mantener un ambiente tranquilo y respetar al personal y otros clientes. Serenity Spa no se hace responsable por lesiones o daños causados por el incumplimiento de las instrucciones del personal.
                  </p>
                  <p className="text-muted">
                    Los servicios deben pagarse en su totalidad al momento de la reserva, ya sea en línea o en nuestras instalaciones. Aceptamos pagos con tarjeta de crédito, débito y efectivo (solo en el spa).
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="col-12">
              <div className="card border-0 shadow-sm bg-spa-cream" id="privacy">
                <div className="card-body">
                  <h3 className="h4 fw-bold text-spa-green mb-4">
                    Aviso de Privacidad
                  </h3>
                  <p className="text-muted">
                    En Serenity Spa, protegemos tu información personal, como nombre, número de teléfono, correo electrónico y preferencias de tratamiento, conforme a las leyes de protección de datos vigentes en el país. Esta información se utiliza exclusivamente para gestionar tus reservas, personalizar tu experiencia y, si das tu consentimiento, enviarte promociones o recordatorios de citas.
                  </p>
                  <p className="text-muted">
                    No compartimos tus datos con terceros, salvo cuando sea necesario para procesar pagos o cumplir con requisitos legales. Puedes solicitar el acceso, rectificación o eliminación de tus datos contactándonos en{" "}
                    <a href="mailto:info@serenityspa.com" className="text-spa-green">
                      info@serenityspa.com
                    </a>.
                  </p>
                  <p className="text-muted">
                    Utilizamos medidas de seguridad avanzadas para proteger tu información, incluyendo encriptación de datos y protocolos seguros para transacciones en línea.
                  </p>
                </div>
              </div>
            </div>

            {/* Refund Policy */}
            <div className="col-12">
              <div className="card border-0 shadow-sm bg-spa-cream" id="returns">
                <div className="card-body">
                  <h3 className="h4 fw-bold text-spa-green mb-4">
                    Política de Reembolsos
                  </h3>
                  <p className="text-muted">
                    Serenity Spa ofrece reembolsos por servicios no utilizados si la cancelación se realiza al menos 12 horas antes de la cita programada. Los reembolsos se procesarán dentro de los 7 días hábiles posteriores a la solicitud. Los productos comprados, como cremas, aceites o accesorios, pueden devolverse dentro de los 7 días posteriores a la compra, siempre que estén sin abrir y en su empaque original.
                  </p>
                  <p className="text-muted">
                    No se aceptan reembolsos por servicios ya prestados o productos personalizados (por ejemplo, mezclas de aceites esenciales a medida). Si tienes alguna duda sobre un servicio o producto, contáctanos en nuestro servicio de atención al cliente para resolver tu caso.
                  </p>
                  <p className="text-muted">
                    En caso de cancelaciones por parte de Serenity Spa (por ejemplo, debido a circunstancias imprevistas), se ofrecerá un reembolso completo o la reprogramación de la cita, según prefiera el cliente.
                  </p>
                </div>
              </div>
            </div>

            {/* Liability and Safety */}
            <div className="col-12">
              <div className="card border-0 shadow-sm bg-spa-cream" id="liability">
                <div className="card-body">
                  <h3 className="h4 fw-bold text-spa-green mb-4">
                    Responsabilidad y Seguridad
                  </h3>
                  <p className="text-muted">
                    En Serenity Spa, priorizamos la seguridad de nuestros clientes y personal. Seguimos estrictos protocolos de higiene y desinfección en todas nuestras instalaciones y equipos. Los clientes deben informar al personal sobre cualquier condición médica o alergia antes de recibir un tratamiento.
                  </p>
                  <p className="text-muted">
                    Serenity Spa no se hace responsable por lesiones o reacciones adversas derivadas de la omisión de información relevante por parte del cliente. Recomendamos consultar con un médico antes de recibir tratamientos si tienes condiciones de salud específicas.
                  </p>
                  <p className="text-muted">
                    Nuestras instalaciones están diseñadas para cumplir con las normativas locales de seguridad y accesibilidad, garantizando un entorno seguro y cómodo para todos.
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
          <h2 className="display-5 fw-bold mb-4">
            ¿Listo para tu Experiencia de Bienestar?
          </h2>
          <p className="lead mb-5">
            Contáctanos si tienes alguna pregunta o reserva tu cita hoy.
          </p>
          <button
            className="btn btn-outline-light btn-lg"
            onClick={() => navigate("/contacto")}
          >
            Contáctanos
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TermsAndConditions;