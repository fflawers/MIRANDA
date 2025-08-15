import React from 'react';

const Contacto = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Contáctanos</h2>
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label className="form-label">Nombre completo</label>
              <input type="text" className="form-control" placeholder="Tu nombre" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Correo electrónico</label>
              <input type="email" className="form-control" placeholder="ejemplo@correo.com" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Mensaje</label>
              <textarea className="form-control" rows="4" placeholder="¿En qué podemos ayudarte?" required />
            </div>
            <button type="submit" className="btn btn-primary w-100">Enviar mensaje</button>
          </form>
        </div>

        <div className="col-md-6 mt-4 mt-md-0">
          <h5>Dirección:</h5>
          <p>Calle Aromas 123, Col. Tranquilidad, CDMX</p>

          <h5>Teléfono:</h5>
          <p>+52 55 1234 5678</p>

          <h5>Horario:</h5>
          <p>Lunes a Sábado: 10:00 AM - 8:00 PM</p>

          <h5>Mapa:</h5>
          <div style={{ width: '100%', height: '250px' }}>
            <iframe
              title="Ubicación del spa"
              src="https://maps.google.com/maps?q=CDMX&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
