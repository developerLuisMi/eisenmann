import { useState } from "react";
import axios from "axios"; // Asegúrate de tener Axios instalado en tu proyecto
import PropTypes from "prop-types"; // Importa PropTypes
function BuscadorCliente({ onSearchResult }) {
  const [dni, setDni] = useState(""); // Estado para almacenar el número de DNI
  const [searchResults, setSearchResults] = useState([]); // Estado para almacenar los resultados de la búsqueda

  // Función para realizar la búsqueda
  const handleSearch = async () => {
    try {
      // Realizar una solicitud GET al servidor Node para buscar clientes por DNI
      const response = await axios.get(`http://localhost:3001/cliente/${dni}`);
      // Actualizar el estado con los resultados de la búsqueda
      setSearchResults(response.data);
      // Llama a la función proporcionada por el componente padre con los resultados de la búsqueda
      onSearchResult(response.data);
    } catch (error) {
      console.error("Error al buscar clientes:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ingrese dni"
        value={dni}
        onChange={(e) => setDni(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      {/* Mostrar los resultados de la búsqueda */}
      <ul>
        {searchResults.map((cliente) => (
          <li key={cliente.id}>{cliente.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

// Define la validación de propiedades utilizando PropTypes
BuscadorCliente.propTypes = {
  onSearchResult: PropTypes.func.isRequired, // Asegura que 'onSearchResult' sea una función requerida
};

export default BuscadorCliente;
