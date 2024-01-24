const express = require("express");
const app = express();

app.listen(3001, () => {
  console.log("servidor corriendo");
});

app.get("/", function (req, res) {
  res.send("probando para segundo desplegue con new proyect con VITE");
});

const fs = require("fs");
const PDFDocument = require("pdfkit");
const nodemailer = require("nodemailer");
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bdprueba2",
});

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "luis.aizen.tk@gmail.com", // Cambia esto a tu dirección de correo
    pass: "btyf bnnz vhpf fswl", // Cambia esto a tu contraseña de correo
  },
});

// Función para generar el PDF
function generatePDF(formData) {
  const doc = new PDFDocument();
  const pdfFilePath = "formulario.pdf"; // Nombre del archivo PDF

  // Crear el PDF
  doc.pipe(fs.createWriteStream(pdfFilePath));
  doc.fontSize(12);
  doc.text("Formulario de solicitud", { align: "center" });
  doc.text(`Fecha: ${formData.fecha}`, { align: "right" });
  doc.text("Datos del formulario:");
  doc.text(`Nombre: ${formData.nombre}`);
  doc.text(`DNI: ${formData.dni}`);
  doc.text(`Gmail: ${formData.gmail}`);
  doc.text(`Teléfono: ${formData.telefono}`);
  doc.text(`Empresa: ${formData.empresa}`);
  doc.text(`RUC: ${formData.ruc}`);
  doc.text(`Ttolva: ${formData.ttolva}`);
  doc.text(`M3: ${formData.m3}`);
  doc.text(`Toneladas: ${formData.toneladas}`);
  doc.text(`Carrocería: ${formData.carroceria}`);
  doc.text(`Chasis: ${formData.chasis}`);
  doc.text(`Estructura: ${formData.estructura}`);
  doc.text(`Kingpin: ${formData.kingpin}`);
  doc.text(`Mecanismo A: ${formData.mecanismoa}`);
  doc.text(`Suspensión: ${formData.suspension}`);
  doc.text(`Ejes: ${formData.ejes}`);
  doc.text(`Sistema E: ${formData.sistemae}`);
  doc.text(`Parachoque: ${formData.parachoque}`);
  doc.text(`Alarma: ${formData.alarma}`);
  doc.text(`Portallantas: ${formData.portallantas}`);
  doc.text(`Portaherramientas: ${formData.portaherramientas}`);
  doc.text(`Portaextintor: ${formData.portaextintor}`);
  doc.text(`Prueba de Funcionamiento: ${formData.pruebafunci}`);
  doc.text(`Resumen Técnico: ${formData.resument}`);
  doc.text(`Garantía: ${formData.garantia}`);

  doc.end();

  return pdfFilePath;
}
app.post("/cliente", (req, res) => {
  const fechaActual = new Date().toLocaleDateString();
  // Obtén los datos del cuerpo de la solicitud POST
  const {
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
  } = req.body;

  const mecanismoaValue = mecanismoa === "Incluido" ? 1 : 0;
  const suspensionValue = suspension === "Incluido" ? 1 : 0;
  const ejesValue = ejes === "Incluido" ? 1 : 0;
  const sistemaeValue = sistemae === "Incluido" ? 1 : 0;
  const parachoqueValue = parachoque === "Incluido" ? 1 : 0;
  const alarmaValue = alarma === "Incluido" ? 1 : 0;
  const portallantasValue = portallantas === "Incluido" ? 1 : 0;
  const portaherramientasValue = portaherramientas === "Incluido" ? 1 : 0;
  const portaextintorValue = portaextintor === "Incluido" ? 1 : 0;
  const pruebafunciValue = pruebafunci === "Incluido" ? 1 : 0;
  const resumentValue = resument === "Incluido" ? 1 : 0;
  const garantiaValue = garantia === "Incluido" ? 1 : 0;
  // Inserta los datos en la tabla "cliente"
  db.query(
    "INSERT INTO cliente (nombre, dni, gmail, telefono, empresa, ruc, ttolva, m3, toneladas, carroceria, chasis, estructura, kingpin, fecha, mecanismoa, suspension, ejes, sistemae, parachoque, alarma, portallantas, portaherramientas, portaextintor, pruebafunci, resument, garantia) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
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
      fechaActual,
      mecanismoaValue, // Usar el valor convertido
      suspensionValue, // Usar el valor convertido
      ejesValue, // Usar el valor convertido
      sistemaeValue, // Usar el valor convertido
      parachoqueValue,
      alarmaValue,
      portallantasValue,
      portaherramientasValue,
      portaextintorValue,
      pruebafunciValue,
      resumentValue,
      garantiaValue,
    ],
    (err, result) => {
      if (err) {
        console.error(err);
        res
          .status(500)
          .send(
            "Error interno del servidor al agregar datos a la tabla 'cliente'"
          );
      } else {
        console.log(`Proforma registrado con ID: ${result.insertId}`);
        // Genera el PDF después de que se haya registrado el cliente
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
          fecha: fechaActual,
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
          // Agregar más campos del formulario aquí
        };
        const pdfFilePath = generatePDF(formData);

        // Configura los datos del correo electrónico
        const mailOptions = {
          from: "luis.aizen.tk@gmail.com",
          to: "eisenmanntolvas1993@gmail.com",
          subject: "Proforma de tolva encapsulada",
          text: "Por favor, encuentre el formulario adjunto.",
          attachments: [{ filename: "formulario.pdf", path: pdfFilePath }],
        };

        // Envía el correo electrónico
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error(error);
            res.status(500).send("Error al enviar el correo electrónico.");
          } else {
            console.log("Correo electrónico enviado: " + info.response);
            res
              .status(200)
              .send(`Cliente registrado con ID: ${result.insertId}`);
          }
        });
      }
    }
  );
});
// ...

// ...

app.post("/proforma2", (req, res) => {
  const {
    nombre_2,
    dni_2,
    gmail_2,
    telefono_2,
    empresa_2,
    ruc_2,
    ttolva_2,
    m3_2,
    toneladas_2,
    carroceria_2,
    chasis_2,
    estructura_2,
    kingpin_2,
    fechainicio,
    fechaentrega,
    mecanismoa_2,
    suspension_2,
    ejes_2,
    sistemae_2,
    parachoque_2,
    alarma_2,
    portallantas_2,
    portaherramientas_2,
    portaextintor_2,
    pruebafunci_2,
    resument_2,
    garantia_2,
  } = req.body;

  const mecanismoa_2Value = mecanismoa_2 === "si" ? 1 : 0;
  const suspension_2Value = suspension_2 === "si" ? 1 : 0;
  const ejes_2Value = ejes_2 === "si" ? 1 : 0;
  const sistemae_2Value = sistemae_2 === "si" ? 1 : 0;
  const parachoque_2Value = parachoque_2 === "si" ? 1 : 0;
  const alarma_2Value = alarma_2 === "si" ? 1 : 0;
  const portallantas_2Value = portallantas_2 === "si" ? 1 : 0;
  const portaherramientas_2Value = portaherramientas_2 === "si" ? 1 : 0;
  const portaextintor_2Value = portaextintor_2 === "si" ? 1 : 0;
  const pruebafunci_2Value = pruebafunci_2 === "si" ? 1 : 0;
  const resument_2Value = resument_2 === "si" ? 1 : 0;
  const garantia_2Value = garantia_2 === "si" ? 1 : 0;

  // Asegúrate de que las fechas estén en el formato adecuado para MySQL
  const fechainicioMySQL = fechainicio
    ? new Date(fechainicio).toISOString().slice(0, 10)
    : null;
  const fechaentregaMySQL = fechaentrega
    ? new Date(fechaentrega).toISOString().slice(0, 10)
    : null;

  db.query(
    "INSERT INTO proforma2 (nombre_2, dni_2, gmail_2, telefono_2, empresa_2, ruc_2, ttolva_2, m3_2, toneladas_2, carroceria_2, chasis_2, estructura_2, kingpin_2, fechainicio, fechaentrega, mecanismoa_2, suspension_2, ejes_2, sistemae_2, parachoque_2, alarma_2, portallantas_2, portaherramientas_2, portaextintor_2, pruebafunci_2, resument_2, garantia_2) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      nombre_2,
      dni_2,
      gmail_2,
      telefono_2,
      empresa_2,
      ruc_2,
      ttolva_2,
      m3_2,
      toneladas_2,
      carroceria_2,
      chasis_2,
      estructura_2,
      kingpin_2,
      fechainicioMySQL,
      fechaentregaMySQL,
      mecanismoa_2Value, // Usar el valor convertido
      suspension_2Value, // Usar el valor convertido
      ejes_2Value, // Usar el valor convertido
      sistemae_2Value, // Usar el valor convertido
      parachoque_2Value,
      alarma_2Value,
      portallantas_2Value,
      portaherramientas_2Value,
      portaextintor_2Value,
      pruebafunci_2Value,
      resument_2Value,
      garantia_2Value,
    ],
    (err, result) => {
      if (err) {
        console.error(err);
        res
          .status(500)
          .send(
            "Error interno del servidor al agregar datos a la tabla 'producto'"
          );
      } else {
        console.log(
          `Datos agregados a la tabla 'producto' con ID: ${result.insertId}`
        );
        res
          .status(200)
          .send(
            `Datos agregados a la tabla 'producto' con ID: ${result.insertId}`
          );
      }
    }
  );
});

/*MIDDLEWAR PARA DASHBOARD*/

// ...

app.post("/login", (req, res) => {
  const { usuario, contraseña } = req.body;
  const consult =
    "SELECT * FROM administradores WHERE usuario = ? AND contraseña = ?";

  db.query(consult, [usuario, contraseña], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error interno del servidor" });
    }

    if (result.length > 0) {
      // Autenticación exitosa, responde con un código de estado 200
      res.status(200).json({ message: "Inicio de sesión exitoso" });
    } else {
      // Autenticación fallida, responde con un código de estado 401
      res.status(401).json({ message: "Credenciales incorrectas" });
    }
  });
});

/* db.query(
    "SELECT * FROM administradores WHERE usuario = ?",
    [usuario],
    async (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: "Error interno del servidor" });
      } else {
        if (results.length === 0) {
          // Usuario no encontrado
          res.status(401).json({ message: "Credenciales incorrectas" });
        } else {
          const user = results[0];
          const isMatch = await bcrypt.compare(contraseña, user.contraseña);

          if (isMatch) {
            // Contraseña válida, se emite un token JWT
            const token = jwt.sign({ usuario: user.usuario }, JWT_SECRET);

            // Envía el token JWT como respuesta
            res
              .status(200)
              .json({ message: "Inicio de sesión exitoso", token });
          } else {
            // Contraseña incorrecta
            res.status(401).json({ message: "Credenciales incorrectas" });
          }
        }
      }
    }
  );*/

// Configuración de la ruta para buscar un cliente por DNI
app.get("/cliente/:dni", (req, res) => {
  const { dni } = req.params;
  db.query("SELECT * FROM cliente WHERE dni = ?", [dni], (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Error al obtener datos del cliente" });
    } else {
      res.json(rows);
    }
  });
});

app.get("/proforma2/all", (req, res) => {
  db.query(
    "SELECT ID, nombre_2, dni_2, telefono_2, ttolva_2, fechainicio, fechaentrega FROM proforma2",
    (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Error al obtener datos de proforma2" });
      } else {
        res.json(rows);
      }
    }
  );
});

app.get("/clientes/all", (req, res) => {
  db.query(
    "SELECT ID, nombre, dni, gmail, telefono, empresa, ruc, ttolva, m3, toneladas, carroceria, chasis, estructura, kingpin FROM cliente",
    (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Error al obtener datos de cliente" });
      } else {
        res.json(rows);
      }
    }
  );
});
