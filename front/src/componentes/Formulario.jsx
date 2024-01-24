import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Importa PropTypes

const Formulario = ({ onSubmit }) => {
  const [nombre, setNombre] = useState("");
  const [dni, setDni] = useState("");
  const [gmail, setGmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [ruc, setRuc] = useState("");
  const [ttolva, setTtolva] = useState("tolva encapsulada");
  const [m3, setM3] = useState("22 m3");
  const [toneladas, setToneladas] = useState("32 toneladas");
  const [carroceria, setCarroceria] = useState("europeo");
  const [chasis, setChasis] = useState("");
  const [estructura, setEstructura] = useState("Acero Estructural ASTM A36");
  const [kingpin, setKingpin] = useState("Holland");
  const [mecanismoa, setMecanismoa] = useState("Incluido");
  const [suspension, setSuspension] = useState("Incluido");
  const [ejes, setEjes] = useState("Incluido");
  const [sistemae, setSistemae] = useState("Incluido");
  const [parachoque, setParachoque] = useState("Incluido");
  const [alarma, setAlarma] = useState("Incluido");
  const [portallantas, setPortallantas] = useState("Incluido");
  const [portaherramientas, setPortaherramientas] = useState("Incluido");
  const [portaextintor, setPortaextintor] = useState("Incluido");
  const [pruebafunci, setPruebafunci] = useState("Incluido");
  const [resument, setResument] = useState("Incluido");
  const [garantia, setGarantia] = useState("Incluido");
  const [formularioEnviado, setFormularioEnviado] = useState(false);
  const fechaActual = new Date().toLocaleDateString();

  {
    /*ERROR PARA MANEJAR VALIDACIONES AL FORMULARIO */
  }
  const [errorNombre, setErrorNombre] = useState(""); // Estado para el mensaje de error
  const [errorDni, setErrorDni] = useState("");
  const [errorGmail, setErrorGmail] = useState("");
  const [errorRUC, setErrorRUC] = useState("");
  const [errorTelefono, setErrorTelefono] = useState("");

  // Función para validar el nombre
  // Funciones de validación para cada campo
  const validarNombre = (nombre) => {
    if (/\d/.test(nombre)) {
      setErrorNombre("El nombre no debe contener números");
    } else {
      setErrorNombre("");
    }
  };

  useEffect(() => {
    validarNombre(nombre);
  }, [nombre]);

  const validarDni = (dni) => {
    const dniPattern = /^[0-9]{1,8}$/; // Expresión regular para 1 a 8 dígitos numéricos
    if (dni.length === 0) {
      setErrorDni(""); // Limpia el mensaje de error si el campo está vacío
    } else if (dni.length > 8) {
      setErrorDni("El DNI no puede contener más de 8 dígitos");
    } else if (/\s/.test(dni)) {
      setErrorDni("El DNI no puede contener espacios en blanco");
    } else if (!dniPattern.test(dni)) {
      setErrorDni("El DNI debe contener solo números");
    } else {
      setErrorDni(""); // Esto limpia el mensaje de error si no hay errores
    }
  };

  useEffect(() => {
    validarDni(dni);
  }, [dni]);

  const validarGmail = (gmail) => {
    if (/\s/.test(gmail)) {
      setErrorGmail("No puede contener espacios en blanco");
    } else {
      setErrorGmail("");
    }
  };

  useEffect(() => {
    validarGmail(gmail);
  }, [gmail]);

  const validarTelefono = (telefono) => {
    const telefonoPattern = /^\d+$/; // Expresión regular que solo permite números

    if (telefono.length === 0) {
      setErrorTelefono(""); // Limpia el mensaje de error si el campo está vacío
    } else if (/\s/.test(telefono)) {
      setErrorTelefono("El teléfono no puede contener espacios en blanco");
    } else if (!telefonoPattern.test(telefono)) {
      setErrorTelefono("El teléfono solo debe contener números");
    } else {
      setErrorTelefono(""); // Limpia el mensaje de error si no hay errores
    }
  };

  useEffect(() => {
    validarTelefono(telefono);
  }, [telefono]);

  const validarRUC = (ruc) => {
    const rucPattern = /^[0-9]{1,11}$/; // Expresión regular para 1 a 11 dígitos numéricos
    if (ruc.length === 0) {
      setErrorRUC(""); // Limpia el mensaje de error si el campo está vacío
    } else if (ruc.length > 11) {
      setErrorRUC("El RUC no puede contener más de 11 dígitos");
    } else if (/\s/.test(ruc)) {
      setErrorRUC("El RUC no puede contener espacios en blanco");
    } else if (!rucPattern.test(ruc)) {
      setErrorRUC("El RUC debe contener solo números");
    } else {
      setErrorRUC(""); // Esto limpia el mensaje de error si no hay errores
    }
  };

  useEffect(() => {
    validarRUC(ruc);
  }, [ruc]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormularioEnviado(true);

    const formData = {
      nombre,
      dni,
      gmail,
      telefono,
      empresa,
      ruc,
      ttolva,
      m3,
      toneladas,
      carroceria,
      chasis,
      estructura,
      kingpin,
      mecanismoa,
      suspension,
      ejes,
      sistemae,
      parachoque,
      alarma,
      portallantas,
      portaherramientas,
      portaextintor,
      pruebafunci,
      resument,
      garantia,
      fecha: fechaActual, // Agrega la fecha al objeto de datos
    };

    // Llama a la función onSubmit para enviar los datos al componente DownloadPdf
    onSubmit(formData);
  };

  const add = () => {
    // Realiza la solicitud POST para insertar datos en la tabla 'cliente'
    Axios.post("http://localhost:3001/cliente", {
      nombre: nombre,
      dni: dni,
      gmail: gmail,
      telefono: telefono,
      empresa: empresa,
      ruc: ruc,
      ttolva: ttolva,
      m3: m3,
      toneladas: toneladas,
      carroceria: carroceria,
      chasis: chasis,
      estructura: estructura,
      kingpin: kingpin,
      mecanismoa: mecanismoa,
      suspension: suspension,
      ejes: ejes,
      sistemae: sistemae,
      parachoque: parachoque,
      alarma: alarma,
      portallantas: portallantas,
      portaherramientas: portaherramientas,
      portaextintor: portaextintor,
      pruebafunci: pruebafunci,
      resument: resument,
      garantia: garantia,
    }).then((response) => {
      console.log(response.data); // Muestra la respuesta del servidor
      setFormularioEnviado(true); // Marca el formulario como enviado
    });
  };

  return (
    <>
      <div className="formulario0">
        <div className="formulario">
          {!formularioEnviado ? (
            <form onSubmit={handleSubmit}>
              {/* Agregamos campos de entrada con onChange */}
              <div className="columnas">
                <div className="columna">
                  <div className="campo">
                    <label>Nombre</label>
                    <input
                      onChange={(event) => {
                        setNombre(event.target.value);
                        validarNombre(event.target.value); // Llama a la función de validación en cada cambio
                      }}
                      type="text"
                      value={nombre}
                      placeholder="Nombre"
                      required
                    />
                    {errorNombre && <p className="error">{errorNombre}</p>}
                  </div>

                  <div className="campo">
                    <label>Gmail: </label>
                    <input
                      onChange={(event) => {
                        setGmail(event.target.value);
                        validarGmail(event.target.value);
                      }}
                      type="text"
                      value={gmail}
                      placeholder="Gmail"
                    />
                    {errorGmail && <p className="error">{errorGmail}</p>}
                  </div>

                  <div className="campo">
                    <label>Empresa: </label>
                    <input
                      onChange={(event) => {
                        setEmpresa(event.target.value);
                      }}
                      type="text"
                      value={empresa}
                      placeholder="Nombre Empresa"
                    />
                  </div>

                  <div className="campo">
                    <label>Tipo de Tolva: </label>
                    <select
                      className="proba6"
                      onChange={(event) => {
                        setTtolva(event.target.value);
                      }}
                      name="tolva"
                      value={ttolva}
                      id="tolva"
                    >
                      <option value="Tolva Encapsulada">
                        Tolva Encapsulada
                      </option>
                      <option value="Tolva Semirroquera">
                        Tolva Semirroquera
                      </option>
                    </select>
                  </div>

                  <div className="campo">
                    <label>Capacidad: </label>

                    <select
                      className="proba8"
                      onChange={(event) => {
                        setToneladas(event.target.value);
                      }}
                      name="toneladas"
                      value={toneladas}
                      id="toneladas"
                    >
                      <option value="32 toneladas">32 Toneladas</option>
                    </select>
                  </div>

                  <div className="campo">
                    <label className="label11">Tipo de chasis: </label>
                    <input
                      onChange={(event) => {
                        setChasis(event.target.value);
                      }}
                      type="text"
                      value={chasis}
                      placeholder="Tipo de chasis"
                    />
                  </div>

                  <div className="campo">
                    <label>KING PIN: </label>
                    <select
                      className="proba10"
                      onChange={(event) => {
                        setKingpin(event.target.value);
                      }}
                      name="kingpin"
                      value={kingpin}
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
                        setDni(event.target.value);
                        validarDni(event.target.value);
                      }}
                      type="text"
                      value={dni}
                      placeholder="DNI"
                    />
                    {errorDni && <p className="error">{errorDni}</p>}
                  </div>

                  <div className="campo">
                    <label>Telefono: </label>
                    <input
                      onChange={(event) => {
                        setTelefono(event.target.value);
                        validarTelefono(event.target.value);
                      }}
                      type="text"
                      value={telefono}
                      placeholder="Telefono"
                    />
                    {errorTelefono && <p className="error">{errorTelefono}</p>}
                  </div>

                  <div className="campo">
                    <label>RUC: </label>
                    <input
                      onChange={(event) => {
                        setRuc(event.target.value);
                        validarRUC(event.target.value);
                      }}
                      type="text"
                      value={ruc}
                      placeholder="RUC"
                    />
                    {errorRUC && <p className="error">{errorRUC}</p>}
                  </div>

                  <div className="campo">
                    <label>Dimensiones: </label>

                    <select
                      className="proba7"
                      onChange={(event) => {
                        setM3(event.target.value);
                      }}
                      name="m3"
                      value={m3}
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
                        setCarroceria(event.target.value);
                      }}
                      name="carroceria"
                      value={carroceria}
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
                        setEstructura(event.target.value);
                      }}
                      name="estructura"
                      value={estructura}
                      id="estructura"
                    >
                      <option value="acero estructural ASTM A36">
                        Acero Estructural ASTM A36
                      </option>
                      <option value="otros">otros</option>
                    </select>
                  </div>

                  {/* Campo de entrada para la fecha actual */}
                  <div className="campo">
                    <label>Fecha Actual:</label>
                    <input type="text" value={fechaActual} readOnly />
                  </div>
                </div>
              </div>

              <div className="subtitle__form">
                <h3>Incluye</h3>
              </div>

              <div className="optiones">
                <label className="optionest">Mecanismo de Apoyo:</label>
                <div className="optionesi">
                  <input
                    onChange={(event) => {
                      setMecanismoa(event.target.checked);
                    }}
                    type="checkbox"
                    name="mecanismoa"
                    value="yes"
                    checked={true}
                    disabled
                    className="custom-checkbox"
                  />
                </div>
              </div>

              <div className="optiones">
                <label className="optionest">Suspension:</label>

                <div className="optionesi">
                  <input
                    onChange={(event) => {
                      setSuspension(event.target.checked);
                    }}
                    type="checkbox"
                    name="suspension"
                    value="yes"
                    checked={true} // Agregamos "checked" para marcarlo por defecto
                    disabled
                    className="custom-checkbox"
                  />
                </div>
              </div>

              <div className="optiones">
                <label className="optionest">Ejes:</label>

                <div className="optionesi">
                  <input
                    onChange={(event) => {
                      setEjes(event.target.checked);
                    }}
                    type="checkbox"
                    name="ejes"
                    value="yes"
                    checked={true} // Agregamos "checked" para marcarlo por defecto
                    disabled
                    className="custom-checkbox"
                  />
                </div>
              </div>

              <div className="optiones">
                <label className="optionest">Sistema Electrico:</label>

                <div className="optionesi">
                  <input
                    onChange={(event) => {
                      setSistemae(event.target.checked);
                    }}
                    type="checkbox"
                    name="sistemae"
                    value="yes"
                    checked={true} // Agregamos "checked" para marcarlo por defecto
                    disabled
                    className="custom-checkbox"
                  />
                </div>
              </div>

              <div className="subtitle__form">
                <h3>Accesorios</h3>
              </div>

              <div className="optiones">
                <label className="optionest">
                  - Parachoques posterior metalico.
                </label>
                <div className="optionesi">
                  <input
                    onChange={(event) => {
                      setParachoque(event.target.checked);
                    }}
                    type="checkbox"
                    name="parachoque"
                    value="yes"
                    checked={true} // Agregamos "checked" para marcarlo por defecto
                    disabled
                    className="custom-checkbox"
                  />
                </div>
              </div>

              <div className="optiones">
                <label className="optionest">- Alarma de retroceso.</label>
                <div className="optionesi">
                  <input
                    onChange={(event) => {
                      setAlarma(event.target.checked);
                    }}
                    type="checkbox"
                    name="alarma"
                    value="yes"
                    checked={true} // Agregamos "checked" para marcarlo por defecto
                    disabled
                    className="custom-checkbox"
                  />
                </div>
              </div>
              <div className="optiones">
                <label className="optionest">- 2 Porta llantas.</label>
                <div className="optionesi">
                  <input
                    onChange={(event) => {
                      setPortallantas(event.target.checked);
                    }}
                    type="checkbox"
                    name="portallantas"
                    value="yes"
                    checked={true} // Agregamos "checked" para marcarlo por defecto
                    disabled
                    className="custom-checkbox"
                  />
                </div>
              </div>

              <div className="optiones">
                <label className="optionest">- 1 Porta herramientas.</label>
                <div className="optionesi">
                  <input
                    onChange={(event) => {
                      setPortaherramientas(event.target.checked);
                    }}
                    type="checkbox"
                    name="portaherramientas"
                    value="yes"
                    checked={true} // Agregamos "checked" para marcarlo por defecto
                    disabled
                    className="custom-checkbox"
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
                      setPortaextintor(event.target.checked);
                    }}
                    type="checkbox"
                    name="portaextintor"
                    value="yes"
                    checked={true} // Agregamos "checked" para marcarlo por defecto
                    disabled
                    className="custom-checkbox"
                  />
                </div>
              </div>

              <div className="subtitle__form">
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
                      setPruebafunci(event.target.checked);
                    }}
                    type="checkbox"
                    name="pruebafunci"
                    value="yes"
                    checked={true} // Agregamos "checked" para marcarlo por defecto
                    disabled
                    className="custom-checkbox"
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
                      setResument(event.target.checked);
                    }}
                    type="checkbox"
                    name="resument"
                    value="yes"
                    checked={true} // Agregamos "checked" para marcarlo por defecto
                    disabled
                    className="custom-checkbox"
                  />
                </div>
              </div>

              <div className="optiones">
                <label className="optionest">- Garantia y mantenimientos</label>
                <div className="optionesi">
                  <input
                    onChange={(event) => {
                      setGarantia(event.target.checked);
                    }}
                    type="checkbox"
                    name="garantia"
                    value="yes"
                    checked={true} // Agregamos "checked" para marcarlo por defecto
                    disabled
                    className="custom-checkbox"
                  />
                </div>
              </div>

              {formularioEnviado && <p>Formulario enviado con éxito.</p>}

              <div className="btn-05">
                <button onClick={add} type="submit" className="btn-1">
                  Enviar Proforma
                </button>
              </div>
            </form>
          ) : (
            // Mostrar un mensaje después de enviar el formulario
            <p>Formulario enviado con éxito.</p>
          )}

          {formularioEnviado && (
            <div className="btn-0">
              <Link to="/Dowloadpdf" className="bet">
                Visualizar PDF
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

Formulario.propTypes = {
  onSubmit: PropTypes.func.isRequired, // Debes ajustar el tipo según lo que esperes
};
export default Formulario;
