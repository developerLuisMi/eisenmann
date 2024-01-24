import PropTypes from "prop-types";
import logoImage from "../assets/img/eisenmannlogo.png";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";

const headerStyles = StyleSheet.create({
  header: {
    backgroundColor: "#F4AE2A", // Color de fondo de la cabecera
    padding: 10,
    flexDirection: "row", // Establece la dirección del contenido a fila
    justifyContent: "space-between", // Alinea los elementos en la cabecera
    alignItems: "center", // Alinea los elementos verticalmente en el centro
  },
  logo: {
    margin: 0,
    marginBottom: 10,
    padding: 10,
    width: 300, // Ajusta el ancho del logotipo según tus necesidades
    height: 100, // Ajusta la altura del logotipo según tus necesidades
    marginTop: 10, // Puedes ajustar la posición vertical del logotipo
  },
  dataContainer: {
    flexDirection: "column",
    alignItems: "left",
  },
  dataBox: {
    border: "1pt solid #000", // Borde alrededor del cuadro
    padding: 5, // Espacio dentro del cuadro
    marginRight: 5, // Espacio entre los cuadros
    borderRadius: 1, // Bordes redondeados
    textAlign: "center", // Texto centrado

    width: 170,
  },
  dataLabel: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 2,
  },
  dataText: {
    fontSize: 12,
    color: "#000000",
  },
});

const pdfStyles = StyleSheet.create({
  page: {
    width: 100,
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    padding: 10,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  border: {
    border: "1.5pt solid #F4AE2A",
    padding: 10,
    marginBottom: 10,
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    textAlign: "center",
    fontSize: 10,
  },
});

const Pdfviewer = ({ formData, onClose, ttolva }) => {
  const currentDate = new Date().toLocaleDateString();

  const tituloPDF = `Proforma de ${ttolva}`;

  return (
    <div className="pdfform">
      <PDFViewer width="100%" height="638">
        <Document>
          <Page size="A4" style={pdfStyles.page}>
            <View style={pdfStyles.section}>
              <View style={headerStyles.header}>
                {/* Logo */}
                <Image src={logoImage} style={headerStyles.logo} />

                <View style={headerStyles.dataContainer}>
                  {/* Columna 1: RUC */}
                  <View style={headerStyles.dataBox}>
                    <Text style={headerStyles.dataText}>R.U.C 20602961738</Text>
                  </View>

                  {/* Columna 2: COTIZACION */}
                  <View style={headerStyles.dataBox}>
                    <Text style={headerStyles.dataText}>COTIZACIÓN</Text>
                  </View>

                  {/* Columna 3: Fecha actual */}
                  <View style={headerStyles.dataBox}>
                    <Text style={headerStyles.dataText}>
                      FECHA {currentDate}
                    </Text>
                  </View>
                </View>
              </View>
              {/* Añade esta sección */}
              {/* Añade esta sección */}
              <Text style={pdfStyles.title}>{tituloPDF}</Text>
              {/* Datos Personales */}
              <View style={pdfStyles.border}>
                <Text style={pdfStyles.subTitle}>Datos Personales:</Text>
                <Text style={pdfStyles.text}>Nombre: {formData.nombre}</Text>
                <Text style={pdfStyles.text}>DNI: {formData.dni}</Text>
                <Text style={pdfStyles.text}>Gmail: {formData.gmail}</Text>
                <Text style={pdfStyles.text}>
                  Telefono: {formData.telefono}
                </Text>
                <Text style={pdfStyles.text}>Empresa: {formData.empresa}</Text>
                <Text style={pdfStyles.text}>Ruc: {formData.ruc}</Text>
              </View>
              {/* Datos del Producto */}
              <View style={pdfStyles.border}>
                <Text style={pdfStyles.subTitle}>Datos del Producto:</Text>
                <Text style={pdfStyles.text}>
                  Tipo de tolva: {formData.ttolva}
                </Text>
                <Text style={pdfStyles.text}>m3: {formData.m3}</Text>
                <Text style={pdfStyles.text}>
                  Toneladas: {formData.toneladas}
                </Text>
                <Text style={pdfStyles.text}>
                  Carroceria: {formData.carroceria}
                </Text>
                <Text style={pdfStyles.text}>
                  Estructura: {formData.estructura}
                </Text>
                <Text style={pdfStyles.text}>King Pin: {formData.kingpin}</Text>
                <Text style={pdfStyles.text}>
                  Mecanismo de apoyo: {formData.mecanismoa}
                </Text>
                <Text style={pdfStyles.text}>
                  Suspension: {formData.suspension}
                </Text>
                <Text style={pdfStyles.text}>Ejes: {formData.ejes}</Text>
                <Text style={pdfStyles.text}>
                  Sistema Electrico: {formData.sistemae}
                </Text>
                <Text style={pdfStyles.text}>
                  Parachoques posteriror metalico: {formData.parachoque}
                </Text>
                <Text style={pdfStyles.text}>
                  Alarma de Retroceso: {formData.alarma}
                </Text>
                <Text style={pdfStyles.text}>
                  2 Porta llantas: {formData.portallantas}
                </Text>
                <Text style={pdfStyles.text}>
                  1 Porta herramientas: {formData.portaherramientas}
                </Text>
                <Text style={pdfStyles.text}>
                  1 Porta extintor - Pico - Pala - Conos:{" "}
                  {formData.portaextintor}
                </Text>
                <Text style={pdfStyles.text}>
                  Prueba de funcionamiento (Sist. de Aire, Valvulas y Bolsas):{" "}
                  {formData.pruebafunci}
                </Text>
                <Text style={pdfStyles.text}>
                  Resument Tecnico Manual de operacion - Partes:{" "}
                  {formData.resument}
                </Text>
                <Text style={pdfStyles.text}>
                  Garantia y mantenimientos: {formData.garantia}
                </Text>
              </View>
            </View>
            <View style={pdfStyles.footer}>
              <Text>¡Gracias por elegirnos!</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
      <button onClick={onClose}>Cerrar PDF</button>{" "}
      {/* Agrega un botón para cerrar el PDF */}
    </div>
  );
};

Pdfviewer.propTypes = {
  formData: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    gmail: PropTypes.string.isRequired,
    telefono: PropTypes.string.isRequired,
    empresa: PropTypes.string.isRequired,
    ruc: PropTypes.string.isRequired,
    ttolva: PropTypes.string.isRequired,
    m3: PropTypes.string.isRequired,
    toneladas: PropTypes.string.isRequired,
    carroceria: PropTypes.string.isRequired,
    chasis: PropTypes.string.isRequired,
    estructura: PropTypes.string.isRequired,
    kingpin: PropTypes.string.isRequired,
    mecanismoa: PropTypes.string.isRequired,
    suspension: PropTypes.string.isRequired,
    ejes: PropTypes.string.isRequired,
    sistemae: PropTypes.string.isRequired,
    parachoque: PropTypes.string.isRequired,
    alarma: PropTypes.string.isRequired,
    portallantas: PropTypes.string.isRequired,
    portaherramientas: PropTypes.string.isRequired,
    portaextintor: PropTypes.string.isRequired,
    pruebafunci: PropTypes.string.isRequired,
    resument: PropTypes.string.isRequired,
    garantia: PropTypes.string.isRequired,
    // Agrega más validaciones para otros campos aquí
  }).isRequired,
  onClose: PropTypes.func.isRequired, // Agrega PropTypes para onClose
  ttolva: PropTypes.string.isRequired,
};

export default Pdfviewer;
