import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        <strong>
          <Link to="/terms" role='button' className="footertext">Términos y Condiciones</Link><br />
        </strong>
      </p>
      <p>&copy; 2025 Made by FFG. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;