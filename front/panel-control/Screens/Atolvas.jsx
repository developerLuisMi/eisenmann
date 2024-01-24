import { useEffect, useState } from "react";
import Sidebar from "../componentesp/Sidebar";
import Datatablep from "../componentesp/Datatablep";
import axios from "axios"; // Importa Axios

function Atolvas() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Realiza una solicitud GET al servidor para obtener los datos
    axios
      .get("http://localhost:3001/proforma2/all")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error al obtener los datos:", error));
  }, []);

  return (
    <>
      <div className="">
        <div className="container-fluid">
          <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
            <Sidebar />
          </div>
        </div>
      </div>

      <div className="atolvas1">
        <div className="atolvas2">
          <h1>Avance de Tolvas</h1>
        </div>

        <div className="datatable1">
          <div>
            <Datatablep data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Atolvas;
