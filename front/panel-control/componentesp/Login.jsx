import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
function Login({ onAuthenticationSuccess }) {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleLogin = async () => {
    // Realiza una solicitud al servidor para autenticar al usuario
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ usuario, contraseña }),
      });

      if (response.status === 200) {
        // Autenticación exitosa, redirige al Dashboard
        onAuthenticationSuccess();
        navigate("/Admin/Dashboard");
      } else {
        // Autenticación fallida, muestra un mensaje de error
        console.error("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <div className="containeringresar">
      <form>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            placeholder="username"
            value={usuario}
            className="custom-input"
            onChange={(event) => {
              setUsuario(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            placeholder="password"
            value={contraseña}
            className="custom-input"
            onChange={(event) => {
              setContraseña(event.target.value);
            }}
          />
        </div>
        <div className="buttoningresar">
          <button
            className="buttoningresar1"
            type="button"
            onClick={handleLogin}
          >
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  onAuthenticationSuccess: PropTypes.func.isRequired,
};
export default Login;

/*import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate(); // Obtén la función de navegación

  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3001/login", {
        usuario,
        contraseña,
      });

      if (response.status === 200) {
        // Autenticación exitosa, guardar el token en el localStorage
        const { token } = response.data;
        localStorage.setItem("token", token);

        // Navegar al dashboard
        navigate("/Dashboard");
      } else {
        // Autenticación fallida, muestra un mensaje de error
        console.error("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };
  return (
    <div className="containeringresar">
      <form>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            id="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            id="contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
        </div>
        <div className="buttoningresar">
          <button
            className="buttoningresar1"
            type="button"
            onClick={handleLogin}
          >
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
*/
