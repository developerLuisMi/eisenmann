import Footer from "../componentes/Footer";
import conta from "../assets/img/conta.jpg";
import Navbar from "../componentes/Navbar";
import { FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa"; // Importamos íconos de FontAwesome

const Contactos = () => {
  return (
    <div className="contate">
      <Navbar />
      <img className="fondo2" src={conta} alt="Imagen de fondo" />
      <div className="titlecontact">
        <h1>Nos Encontramos en Perú - Arequipa</h1>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contáctanos</h2>
          <p>
            Si tienes alguna pregunta o necesitas más información, no dudes en
            contactarnos.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <p>Teléfono: 962394393 / 940 781 446</p>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <p>Correo Electrónico: eisenmann.arequipa@gmail.com</p>
            </div>
            <div className="contact-item">
              <FaMapMarker className="contact-icon" />
              <p>
                Dirección: Calle San Gerónimo Sub Lt 27 <br /> Cerro colorado -
                Arequipa - Perú
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contactos;
