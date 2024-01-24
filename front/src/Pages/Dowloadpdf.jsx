import { useState } from "react";
import Pdfviewer from "../componentes/Pdfviewers";
import Formulario from "../componentes/Formulario";

const Dowloadpdf = () => {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    // Maneja los datos del formulario y actualiza el estado formData
    setFormData(data);
  };

  const handlePdfClose = () => {
    // Restablece el estado formData a null cuando se cierra el PDF
    setFormData(null);
  };

  return (
    <div>
      {formData ? (
        <div>
          <Pdfviewer
            formData={formData}
            onClose={handlePdfClose}
            ttolva={formData.ttolva} // Pasa el tipo de tolva seleccionado
          />
        </div>
      ) : (
        <Formulario onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default Dowloadpdf;
