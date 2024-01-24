// Importa useState y useEffect
import { useState, useEffect } from "react";
import Historialproformasp from "../componentesp/Historialproformasp";
import Sidebar from "../componentesp/Sidebar";
import axios from "axios"; // Importa Axios
function Historialp() {
  // Define un estado para almacenar los datos

  const [datas, setDatos] = useState([]);

  useEffect(() => {
    // Realiza una solicitud GET al servidor para obtener los datos
    axios
      .get("http://localhost:3001/clientes/all")
      .then((response) => {
        console.log("Datos recuperados:", response.data);
        setDatos(response.data);
      })
      .catch((error) => console.error("Error al obtener los datos:", error));
  }, []);

  return (
    <>
      <div className="histori">
        <div className="">
          <div className="container-fluid">
            <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
              <Sidebar />
            </div>
          </div>
        </div>

        <div className="historial">
          <div className="historial1">
            <h1>Historial Proformas de Clientes</h1>
          </div>

          <div className="historialpro1">
            <div>
              {/* Pasa los datos recuperados al componente Historialproformasp */}
              <Historialproformasp data={datas} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Historialp;
