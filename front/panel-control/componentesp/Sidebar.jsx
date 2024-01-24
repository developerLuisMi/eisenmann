import "../panel.css";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="bg-white sidebar p-2">
      <div className="m-2">
        <i className="me-3 fs-4"></i>
        <span className="brand-name fs-4">EisenMann</span>
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <Link to="/" className="list-group-item py-2">
          <i className="bi bi-house fs-5 me-3"></i>
          <span>Inicio</span>
        </Link>

        <Link to="/Admin/Dashboard/Buscar" className="list-group-item py-2">
          <i className="bi bi-pass fs-5 me-3"></i>
          <span>Proforma Tolvas</span>
        </Link>

        <Link to="/Admin/Dashboard/Atolvas" className="list-group-item py-2">
          <i className="bi bi-graph-up-arrow fs-5 me-3"></i>
          <span>Tolvas Avance</span>
        </Link>

        <Link to="/Admin/Dashboard/Historialp" className="list-group-item py-2">
          <i className="bi bi-receipt-cutoff fs-5 me-3"></i>
          <span>Historial Proforma</span>
        </Link>

        <Link to="/Admin" className="list-group-item py-2">
          <i className="bi bi-power fs-5 me-3"></i>
          <span>Salir</span>
        </Link>
      </div>
    </div>
  );
}
export default Sidebar;
