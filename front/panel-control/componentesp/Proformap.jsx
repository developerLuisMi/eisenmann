import { useState } from "react";
import Axios from "axios";
import PropTypes from "prop-types";

const Proformap = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // lógica para enviar el formulario
  };
  const [nombre_2, setNombre_2] = useState("");
  const [dni_2, setDni_2] = useState("");
  const [gmail_2, setGmail_2] = useState("");
  const [telefono_2, setTelefono_2] = useState("");
  const [empresa_2, setEmpresa_2] = useState("");
  const [ruc_2, setRuc_2] = useState("");
  const [ttolva_2, setTtolva_2] = useState("tolva encapsulada");
  const [m3_2, setM3_2] = useState("m3");
  const [toneladas_2, setToneladas_2] = useState("toneladas");
  const [carroceria_2, setCarroceria_2] = useState("europeo");
  const [chasis_2, setChasis_2] = useState("");
  const [estructura_2, setEstructura_2] = useState("");
  const [kingpin_2, setKingpin_2] = useState("Holland");
  const [fechainicio, setFechainicio] = useState("");
  const [fechaentrega, setFechaentrega] = useState("");
  const [mecanismoa_2, setMecanismoa_2] = useState("si");
  const [suspension_2, setSuspension_2] = useState("si");
  const [ejes_2, setEjes_2] = useState("si");
  const [sistemae_2, setSistemae_2] = useState("si");
  const [parachoque_2, setParachoque_2] = useState("si");
  const [alarma_2, setAlarma_2] = useState("si");
  const [portallantas_2, setPortallantas_2] = useState("si");
  const [portaherramientas_2, setPortaherramientas_2] = useState("si");
  const [portaextintor_2, setPortaextintor_2] = useState("si");
  const [pruebafunci_2, setPruebafunci_2] = useState("si");
  const [resument_2, setResument_2] = useState("si");
  const [garantia_2, setGarantia_2] = useState("si");
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  const add = () => {
    // Realiza la solicitud POST para insertar datos en la tabla 'cliente'
    Axios.post("http://localhost:3001/proforma2", {
      nombre_2: nombre_2,
      dni_2: dni_2,
      gmail_2: gmail_2,
      telefono_2: telefono_2,
      empresa_2: empresa_2,
      ruc_2: ruc_2,
      ttolva_2: ttolva_2,
      m3_2: m3_2,
      toneladas_2: toneladas_2,
      carroceria_2: carroceria_2,
      chasis_2: chasis_2,
      estructura_2: estructura_2,
      fechainicio: fechainicio,
      fechaentrega: fechaentrega,
      kingpin_2: kingpin_2,
      mecanismoa_2: mecanismoa_2,
      suspension_2: suspension_2,
      ejes_2: ejes_2,
      sistemae_2: sistemae_2,
      parachoque_2: parachoque_2,
      alarma_2: alarma_2,
      portallantas_2: portallantas_2,
      portaherramientas_2: portaherramientas_2,
      portaextintor_2: portaextintor_2,
      pruebafunci_2: pruebafunci_2,
      resument_2: resument_2,
      garantia_2: garantia_2,
    }).then((response) => {
      console.log(response.data); // Muestra la respuesta del servidor
      setFormularioEnviado(true); // Marca el formulario como enviado
    });
  };

  return (
    <div className="formulario">
      {!formularioEnviado ? (
        <form onSubmit={handleSubmit}>
          <div className="columnas">
            <div className="columna">
              <div className="campo">
                <label>Nombre</label>
                <input
                  onChange={(event) => {
                    setNombre_2(event.target.value);
                  }}
                  type="text"
                  placeholder="Nombre"
                />
              </div>

              <div className="campo">
                <label>Gmail: </label>
                <input
                  onChange={(event) => {
                    setGmail_2(event.target.value);
                  }}
                  type="text"
                  placeholder="Gmail"
                />
              </div>

              <div className="campo">
                <label>Empresa: </label>
                <input
                  onChange={(event) => {
                    setEmpresa_2(event.target.value);
                  }}
                  type="text"
                  placeholder="Empresa"
                />
              </div>

              <div className="campo">
                <label>Tipo de Tolva: </label>
                <select
                  className="proba6"
                  onChange={(event) => {
                    setTtolva_2(event.target.value);
                  }}
                  name="tolva"
                  id="tolva"
                >
                  <option value="Tolva Encapsulada">Tolva Encapsulada</option>
                  <option value="Tolva Semirroquera">Tolva Semirroquera</option>
                </select>
              </div>

              <div className="campo">
                <label>Capacidad: </label>

                <select
                  className="proba8"
                  onChange={(event) => {
                    setToneladas_2(event.target.value);
                  }}
                  name="toneladas"
                  value={toneladas_2}
                  id="toneladas"
                >
                  <option value="32 toneladas">32 Toneladas</option>
                </select>
              </div>

              <div className="campo">
                <label className="label11">Tipo de chasis: </label>
                <input
                  onChange={(event) => {
                    setChasis_2(event.target.value);
                  }}
                  type="text"
                  placeholder="Chasis"
                />
              </div>

              <div className="campo">
                <label>KING PIN: </label>
                <select
                  className="proba10"
                  onChange={(event) => {
                    setKingpin_2(event.target.value);
                  }}
                  name="kingpin_2"
                  value={kingpin_2}
                  id="kingpin"
                >
                  <option value="holland">Holland</option>
                  <option value="jost">Jost</option>
                </select>
              </div>
            </div>

            <div className="columna">
              <div className="campo">
                <label>DNI: </label>
                <input
                  onChange={(event) => {
                    setDni_2(event.target.value);
                  }}
                  type="text"
                  placeholder="Dni"
                />
              </div>

              <div className="campo">
                <label>Telefono: </label>
                <input
                  onChange={(event) => {
                    setTelefono_2(event.target.value);
                  }}
                  type="text"
                  placeholder="Telefono"
                />
              </div>

              <div className="campo">
                <label>RUC: </label>
                <input
                  onChange={(event) => {
                    setRuc_2(event.target.value);
                  }}
                  type="text"
                  placeholder="Ruc"
                />
              </div>

              <div className="campo">
                <label>Dimensiones: </label>

                <select
                  className="proba7"
                  onChange={(event) => {
                    setM3_2(event.target.value);
                  }}
                  name="m3"
                  value={m3_2}
                  id="m3"
                >
                  <option value="22 m3">22 m3</option>
                  <option value="24 m3">24 m3</option>
                  <option value="26 m3">26 m3</option>
                </select>
              </div>

              <div className="campo">
                <label>Carroceria: </label>
                <select
                  className="proba10"
                  onChange={(event) => {
                    setCarroceria_2(event.target.value);
                  }}
                  name="carroceria"
                  id="carroceria"
                >
                  <option value="europeo">Europeo</option>
                  <option value="americano">Americano</option>
                </select>
              </div>

              <div className="campo">
                <label>Estructura: </label>
                <select
                  className="proba10"
                  onChange={(event) => {
                    setEstructura_2(event.target.value);
                  }}
                  name="estructura"
                  value={estructura_2}
                  id="estructura"
                >
                  <option value="acero estructural ASTM A36">
                    Acero Estructural ASTM A36
                  </option>
                  <option value="otros">otros</option>
                </select>
              </div>

              <div className="campo">
                <label>Fecha de Inicio: </label>
                <input
                  type="date"
                  value={fechainicio}
                  onChange={(e) => setFechainicio(e.target.value)}
                />
              </div>

              <div className="campo">
                <label>Fecha de Entrega: </label>
                <input
                  type="date"
                  value={fechaentrega}
                  onChange={(e) => setFechaentrega(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div>
            <h3>Incluye</h3>
          </div>

          <div className="optiones">
            <label className="optionest">Mecanismo de Apoyo:</label>
            <div className="optionesi">
              <input
                onChange={(event) => {
                  setMecanismoa_2(event.target.checked);
                }}
                type="checkbox"
                name="mecanismoa_2"
                value="yes"
                checked={mecanismoa_2}
                /* disabled
                className="custom-checkbox"*/
              />
            </div>
          </div>

          <div className="optiones">
            <label className="optionest">Suspension:</label>

            <div className="optionesi">
              <input
                onChange={(event) => {
                  setSuspension_2(event.target.checked);
                }}
                type="checkbox"
                name="suspension_2"
                value="yes"
                checked={suspension_2} // Agregamos "checked" para marcarlo por defecto
              />
            </div>
          </div>

          <div className="optiones">
            <label className="optionest">Ejes:</label>

            <div className="optionesi">
              <input
                onChange={(event) => {
                  setEjes_2(event.target.checked);
                }}
                type="checkbox"
                name="ejes"
                value="yes"
                checked={ejes_2} // Agregamos "checked" para marcarlo por defecto
              />
            </div>
          </div>

          <div className="optiones">
            <label className="optionest">Sistema Electrico:</label>

            <div className="optionesi">
              <input
                onChange={(event) => {
                  setSistemae_2(event.target.checked);
                }}
                type="checkbox"
                name="sistemae"
                value="yes"
                checked={sistemae_2} // Agregamos "checked" para marcarlo por defecto
              />
            </div>
          </div>

          <div>
            <h3>Accesorios</h3>
          </div>

          <div className="optiones">
            <label className="optionest">
              - Parachoques posterior metalico.
            </label>
            <div className="optionesi">
              <input
                onChange={(event) => {
                  setParachoque_2(event.target.checked);
                }}
                type="checkbox"
                name="parachoque"
                value="yes"
                checked={parachoque_2} // Agregamos "checked" para marcarlo por defecto
              />
            </div>
          </div>

          <div className="optiones">
            <label className="optionest">- Alarma de retroceso.</label>
            <div className="optionesi">
              <input
                onChange={(event) => {
                  setAlarma_2(event.target.checked);
                }}
                type="checkbox"
                name="alarma"
                value="yes"
                checked={alarma_2} // Agregamos "checked" para marcarlo por defecto
              />
            </div>
          </div>
          <div className="optiones">
            <label className="optionest">- 2 Porta llantas.</label>
            <div className="optionesi">
              <input
                onChange={(event) => {
                  setPortallantas_2(event.target.checked);
                }}
                type="checkbox"
                name="portallantas"
                value="yes"
                checked={portallantas_2} // Agregamos "checked" para marcarlo por defecto
              />
            </div>
          </div>

          <div className="optiones">
            <label className="optionest">- 1 Porta herramientas.</label>
            <div className="optionesi">
              <input
                onChange={(event) => {
                  setPortaherramientas_2(event.target.checked);
                }}
                type="checkbox"
                name="portaherramientas"
                value="yes"
                checked={portaherramientas_2} // Agregamos "checked" para marcarlo por defecto
              />
            </div>
          </div>

          <div className="optiones">
            <label className="optionest">
              - 1 Porta Extintor - Pico - Pala - Conos.
            </label>
            <div className="optionesi">
              <input
                onChange={(event) => {
                  setPortaextintor_2(event.target.checked);
                }}
                type="checkbox"
                name="portaextintor"
                value="yes"
                checked={portaextintor_2} // Agregamos "checked" para marcarlo por defecto
              />
            </div>
          </div>

          <div>
            <h3>Propuesta Tecnica</h3>
          </div>

          <div className="optiones">
            <label className="optionest">
              - Pruebas de funcionamiento <br />
              (Sist. de aire, valvulas, y bolsas)
            </label>
            <div className="optionesi">
              <input
                onChange={(event) => {
                  setPruebafunci_2(event.target.checked);
                }}
                type="checkbox"
                name="pruebafunci"
                value="yes"
                checked={pruebafunci_2} // Agregamos "checked" para marcarlo por defecto
              />
            </div>
          </div>

          <div className="optiones">
            <label className="optionest">
              - Resumen Tecnico Manual de Operacion - Partes
            </label>
            <div className="optionesi">
              <input
                onChange={(event) => {
                  setResument_2(event.target.checked);
                }}
                type="checkbox"
                name="resument"
                value="yes"
                checked={resument_2} // Agregamos "checked" para marcarlo por defecto
              />
            </div>
          </div>

          <div className="optiones">
            <label className="optionest">- Garantia y mantenimientos</label>
            <div className="optionesi">
              <input
                onChange={(event) => {
                  setGarantia_2(event.target.checked);
                }}
                type="checkbox"
                name="garantia"
                value="yes"
                checked={garantia_2} // Agregamos "checked" para marcarlo por defecto
              />
            </div>
          </div>

          {formularioEnviado && <p>Formulario enviado con éxito.</p>}

          <div className="btn-01">
            <button onClick={add} type="submit" className="btn-11">
              Realizar Orden de Fabricacion
            </button>
          </div>
        </form>
      ) : (
        // Mostrar un mensaje después de enviar el formulario
        <p>Formulario enviado con éxito.</p>
      )}
    </div>
  );
};

Proformap.propTypes = {
  onSubmit: PropTypes.func.isRequired, // Debes ajustar el tipo según lo que esperes
};
export default Proformap;
