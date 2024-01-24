import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Inicio from "./Pages/Inicio";
import Servicios from "./Pages/Servicios";
import Contactos from "./Pages/Contactos";
import Tolvaencapsulada from "./Pages/Tolvaencapsulada";
import Dowloadpdf from "./Pages/Dowloadpdf";
import Admin from "../panel-control/Screens/Admin";
import Dashboard from "../panel-control/Screens/Dashboard";
import Buscar from "../panel-control/Screens/Buscar";
import Atolvas from "../panel-control/Screens/Atolvas";
import Historialp from "../panel-control/Screens/Historialp";
import Tolvasemirroquera from "./Pages/Tolvasemirroquera";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="App1">
      <Routes>
        <Route exact path="/" element={<Inicio />}></Route>
        <Route exact path="/Inicio" element={<Inicio />}></Route>
        <Route exact path="/Servicios" element={<Servicios />}></Route>
        <Route exact path="/Contactos" element={<Contactos />}></Route>
        <Route
          exact
          path="/Inicio/Tolvaencapsulada"
          element={<Tolvaencapsulada />}
        ></Route>
        <Route
          exact
          path="/Inicio/Tolvasemirroquera"
          element={<Tolvasemirroquera />}
        ></Route>
        <Route exact path="/Dowloadpdf" element={<Dowloadpdf />}></Route>

        <Route
          path="/Admin"
          element={<Admin setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/Admin/Dashboard"
          element={
            isAuthenticated ? (
              <Dashboard />
            ) : (
              <Navigate to="/Admin" replace={true} />
            )
          }
        />
        <Route
          path="/Admin/Dashboard/Buscar"
          element={
            isAuthenticated ? (
              <Buscar />
            ) : (
              <Navigate to="/Admin" replace={true} />
            )
          }
        />
        <Route
          path="/Admin/Dashboard/Atolvas"
          element={
            isAuthenticated ? (
              <Atolvas />
            ) : (
              <Navigate to="/Admin" replace={true} />
            )
          }
        />
        <Route
          path="/Admin/Dashboard/Historialp"
          element={
            isAuthenticated ? (
              <Historialp />
            ) : (
              <Navigate to="/Admin" replace={true} />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
