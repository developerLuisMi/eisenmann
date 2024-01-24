import semiroquera from "../assets/img/encapsulada.jpg";
import semirroquera from "../assets/img/semirroquera2.png";
{
  /*import plataformal from "../assets/img/plataformal.png";*/
}
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <>
      <div className="container">
        <div className="caja1">
          <img src={semiroquera} alt="" className="imagen" />
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

          <div className="btn-0">
            <button className="btn-1">
              <Link to="/Inicio/Tolvaencapsulada" className="bet">
                Solicitar Cotizacion
              </Link>
            </button>
          </div>
        </div>

        <div className="caja3">
          <h1>Tolvas Semi Roqueras</h1>
          <p>
            Tolva semirroquera con capacidad y alta resistencia especialista en
            el trabajo pesado cumpliendo trabajos exigentes brindando una buena
            garantia en nuestro producto para mineral y construccion y otras
            aplicaciones
          </p>
          <div className="btn-0">
            <button className="btn-1">
              <Link to="/Inicio/Tolvasemirroquera" className="bet">
                Solicitar Cotizacion
              </Link>
            </button>
          </div>
        </div>

        <div className="caja4">
          <img src={semirroquera} alt="" className="imagen" />
        </div>

        {/* <div className="caja5">
          <img src={plataformal} alt="" className="imagen" />
        </div>

        <div className="caja6">
          <h1>Plataformas L</h1>
          <p>
            Plataformas en L de alta resistencia y capacidad de carga, para
            trabajos de mineria y contruccion seguro de sus procesos de carga y
            descargas eficientes permite a nuestros clientes el transporte
            seguro les ofrecemos a su empresa la fabricacion de flotas altamente
            especializados con procesos de fabricacion modernos y solucion
          </p>

        <div className="btn-0">
          <button className="btn-1">
            <Link to="/Buton" className="bet">
              Solicitar Cotizacion
            </Link>
          </button>
        </div>

        </div>*/}
      </div>
    </>
  );
};

export default Cards;
