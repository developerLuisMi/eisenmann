import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../assets/img/eisenmannlogo.png";
function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  useEffect(() => {
    // Desactivar el desplazamiento suave
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);

    // Volver a activar el desplazamiento suave después de un pequeño retraso
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = "smooth";
    }, 10000000);
  }, []);
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        <img src={logo} alt="" className="logotiponavbar" />
      </a>
      <ul className={active}>
        <li className="nav__item">
          <Link to="/Inicio" className="nav__link">
            INICIO
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/Servicios" className="nav__link">
            SERVICIOS
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/Contactos" className="nav__link">
            CONTACTOS
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;

/*import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar1">
      <div>
        <nav className="navbar2">
          <ul>
            <li className="navbrand">
              <Link to="/Inicio" className="navlink1">
                EISENMANN
              </Link>
            </li>
            <li>
              <Link to="/Inicio" className="navlink1">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/Servicios" className="navlink1">
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/Contactos" className="navlink1">
                Contactos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </header>
  );
};

export default Navbar;*/
