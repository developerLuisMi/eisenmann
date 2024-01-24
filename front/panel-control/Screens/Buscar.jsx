import Proformap from "../componentesp/Proformap";
import Sidebar from "../componentesp/Sidebar";

import Datatableclientep from "../componentesp/Datatableclientep";
import { useState } from "react"; // Importa useState en lugar de useEffect para el estado del DNI
import axios from "axios"; // Importa Axios

function Buscar() {
  const [searchResults, setSearchResults] = useState([]);
  const [dni, setDni] = useState(""); // Nuevo estado para el DNI ingresado por el usuario

  // Función para realizar la búsqueda
  const handleSearch = async () => {
    try {
      // Realiza una solicitud GET al servidor para buscar clientes por DNI
      const response = await axios.get(`http://localhost:3001/cliente/${dni}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  return (
    <>
      <div className="">
        <div className="container-fluid">
          <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
            <Sidebar />
          </div>
        </div>
      </div>

      <div className="proforma1">
        <div>
          <h1>PROFORMA DE TOLVA</h1>
        </div>

        <div className="buscador1">
          {/* Campo de entrada de texto para ingresar el DNI */}
          <input
            type="text"
            placeholder="Ingrese DNI"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          />
          {/* Botón para realizar la búsqueda */}
          <button onClick={handleSearch}>Buscar</button>
        </div>

        <div className="tablecliente">
          <Datatableclientep data={searchResults} />
        </div>
        <div className="pdfff">
          <Proformap />
        </div>
      </div>
    </>
  );
}

export default Buscar;
