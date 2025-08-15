import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <nav className="navbar">
        <div className=""><img className='img-logo' src="https://imagesspamiranda.s3.us-east-2.amazonaws.com/LOGO.png" alt="" /></div>
        <div className={`menu ${open ? 'open' : ''}`}>
          <Link to="/">Inicio</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/acerca">Acerca</Link>
        </div>
        <div className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </nav>
    </div>
  );
};

export default Navbar;