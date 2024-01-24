import encapsulada from "../assets/img/encapsulada.jpg";
import Navbar from "../componentes/Navbar";
import Footer from "../componentes/Footer";
import Dowloadpdf from "./Dowloadpdf";
const Tolvaencapsulada = () => {
  return (
    <>
      <Navbar />
      <div className="tolvaencapsulada1">
        <div className="caja1">
          <img src={encapsulada} alt="" className="imagen" />
        </div>

        <div className="caja2">
          <h1>Tolvas Encapsuladas</h1>
          <p>
            Tolvas encapsuladas de alta resistencia y capacidad de carga, para
            trabajos de mineria y contruccion seguro de sus procesos de carga y
            descargas eficientes permite a nuestros clientes el transporte
            seguro les ofrecemos a su empresa la fabricacion de flotas altamente
            especializados con procesos de fabricacion modernos y solucion
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

export default Tolvaencapsulada;
