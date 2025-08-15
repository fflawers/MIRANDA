import React from "react";


const servicios = [
  {
    titulo: 'Masaje Relajante',
    descripcion: 'Terapia corporal para liberar el estrés y mejorar la circulación.',
    imagen: 'https://plus.unsplash.com/premium_photo-1683134297492-cce5fc6dae31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    titulo: 'Facial Premium',
    descripcion: 'Limpieza profunda con productos orgánicos para rejuvenecer tu piel.',
    imagen: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    titulo: 'Aromaterapia',
    descripcion: 'Tratamiento con aceites esenciales que armoniza cuerpo y mente.',
    imagen: 'https://images.unsplash.com/photo-1605671507162-43e526ef6f97?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    titulo: 'Spa de Pies',
    descripcion: 'Masaje y exfoliación para pies cansados. Perfecto después de un largo día.',
    imagen: 'https://plus.unsplash.com/premium_photo-1661274108346-6e831c83d33e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Servicios = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Nuestros Servicios Premium</h2>
      <div className="row g-4">
        {servicios.map((servicio, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img src={servicio.imagen} className="card-img-top" alt={servicio.titulo} />
              <div className="card-body">
                <h5 className="card-title">{servicio.titulo}</h5>
                <p className="card-text">{servicio.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Servicios;