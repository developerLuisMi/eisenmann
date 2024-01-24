import logo from "../assets/img/eisenmannlogo.png";

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="logg">
        <img src={logo} alt="" className="logotipo" />
        <ul className="nosotros">
          <li>Nosotros</li>
          <li>Mision</li>
          <li>Vision</li>
        </ul>
      </div>

      <div className="servicios">
        <h1>Servicios</h1>
        <ul>
          <li>Fabricacion de estructuras metalicas</li>
          <li>Mantenimiento y reparacion</li>
          <li>Instalaciones electricas</li>
        </ul>
      </div>

      <div className="direccion">
        <h1>Direccion</h1>
        <ul>
          <li>Calle Estados Unidos J-6B</li>
          <li>Cerro colorado - Arequipa - Perú</li>
        </ul>
      </div>

      <div className="redes">
        <h1>Contactos</h1>
        <ul>
          <li>Facebook</li>
          <li>Whatsap</li>
          <li>Youtube</li>
          <li>Email</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
