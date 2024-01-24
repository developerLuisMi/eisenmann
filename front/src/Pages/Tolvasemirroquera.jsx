import encapsulada from "../assets/img/encapsulada.jpg";
import Navbar from "../componentes/Navbar";
import Footer from "../componentes/Footer";
import Dowloadpdf from "./Dowloadpdf";
const Tolvasemirroquera = () => {
  return (
    <>
      <Navbar />
      <div className="tolvasemirroquera1">
        <div className="caja1">
          <img src={encapsulada} alt="" className="imagen" />
        </div>

        <div className="caja2">
          <h1>Tolvas Semirroquera</h1>
          <p>
            Tolva semirroquera con capacidad y alta resistencia especialista en
            el trabajo pesado cumpliendo trabajos exigentes brindando una buena
            garantia en nuestro producto para mineral y construccion y otras
            aplicaciones
          </p>
        </div>
      </div>

      <div className="proforma">
        <h1>Realizar Proforma</h1>
        <br />
      </div>

      <div className="formulario2">
        <Dowloadpdf />
      </div>
      <Footer />
    </>
  );
};

export default Tolvasemirroquera;
