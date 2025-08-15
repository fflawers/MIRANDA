
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/Footer';

const TermsAndConditions = () => {
  return (
    <div className='BackgroundSuccess'>
        <Navbar/>
    <main className="terms-container">
        <header className="terms-header">
            <h1>Políticas de Serenity Spa</h1>
            <p className="intro-text">
            En Serenity Spa, nos esforzamos por ofrecerte una experiencia relajante y segura. A continuación, encontrarás nuestras políticas sobre reservas, privacidad y reembolsos.
            </p>
        </header>

        <section className="terms-section">
            <article id="terms" className="terms-article">
            <h2>Términos y Condiciones</h2>
            <p>
                Al reservar un servicio en Serenity Spa, el cliente acepta cumplir con nuestras políticas de reservas, cancelaciones y comportamiento en las instalaciones. Las reservas deben realizarse con al menos 24 horas de antelación, y cualquier cambio o cancelación debe notificarse con un mínimo de 12 horas previas al servicio para evitar cargos.
            </p>
            <p>
                Nos reservamos el derecho de negar el servicio a clientes que no respeten las normas del spa, incluyendo llegar puntualmente, mantener un ambiente tranquilo y respetar al personal y otros clientes. Serenity Spa no se hace responsable por lesiones o daños causados por el incumplimiento de las instrucciones del personal.
            </p>
            </article>

            <article id="privacy" className="terms-article">
            <h2>Aviso de Privacidad</h2>
            <p>
                En Serenity Spa, protegemos tu información personal, como nombre, número de teléfono, correo electrónico y preferencias de tratamiento, conforme a las leyes de protección de datos vigentes en el país. Esta información se utiliza exclusivamente para gestionar tus reservas, personalizar tu experiencia y, si das tu consentimiento, enviarte promociones o recordatorios de citas.
            </p>
            <p>
                No compartimos tus datos con terceros, salvo cuando sea necesario para procesar pagos o cumplir con requisitos legales. Puedes solicitar el acceso, rectificación o eliminación de tus datos contactándonos en info@serenityspa.com.
            </p>
            </article>

            <article id="returns" className="terms-article">
            <h2>Política de Reembolsos</h2>
            <p>
                Serenity Spa ofrece reembolsos por servicios no utilizados si la cancelación se realiza al menos 12 horas antes de la cita programada. Los reembolsos se procesarán dentro de los 7 días hábiles posteriores a la solicitud. Los productos comprados, como cremas, aceites o accesorios, pueden devolverse dentro de los 7 días posteriores a la compra, siempre que estén sin abrir y en su empaque original.
            </p>
            <p>
                No se aceptan reembolsos por servicios ya prestados o productos personalizados (por ejemplo, mezclas de aceites esenciales a medida). Si tienes alguna duda sobre un servicio o producto, contáctanos en nuestro servicio de atención al cliente para resolver tu caso.
            </p>
            </article>
        </section>
        </main>
        <Footer/>
    </div>
  );
};

export default TermsAndConditions;




