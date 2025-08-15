import React, { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='container'>
    <nav className="navbar">
      <div className="logo">MiSitio</div>
      <div className={`menu ${open ? 'open' : ''}`}>
        <a href="/">Inicio</a>
        <a href="/servicios">Servicios</a>
        <a href="/contacto">Contacto</a>
        <a href="/acerca">Acerca</a>
      </div>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
