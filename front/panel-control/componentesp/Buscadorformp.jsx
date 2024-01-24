import { useState } from "react";
import PropTypes from "prop-types";
import Axios from "axios"; // Importa Axios para realizar solicitudes HTTP al servidor

function Buscadorformp({ onSearchSuccess }) {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para almacenar el número de DNI ingresado

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    // Realiza una solicitud GET al servidor para buscar al cliente por DNI
    Axios.get(`http://localhost:3001/buscar-cliente?dni=${searchTerm}`)
      .then((response) => {
        // Supongamos que response.data contiene los datos del cliente encontrado
        const cliente = response.data;

        // Llama a la función onSearchSuccess para enviar los datos del cliente al componente del formulario
        onSearchSuccess(cliente);
      })
      .catch((error) => {
        console.error(error);
        // Maneja el error, por ejemplo, mostrando un mensaje al usuario
      });
  };

  return (
    <div className="search">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Buscar por DNI..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
}

Buscadorformp.propTypes = {
  onSearchSuccess: PropTypes.func.isRequired,
};

export default Buscadorformp;
