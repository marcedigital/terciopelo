import React, { useState } from "react";
import { Upload, X } from "lucide-react";
import emailjs from "emailjs-com";
import ProtocolSection from "./ProtocolSection";

emailjs.init("FRLWdjvHLP4McJMHL");

const CalendarWidget = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isProtocolOpen, setIsProtocolOpen] = useState(false);

  const sendEmail = async (imageUrl) => {
    try {
      await emailjs.send(
        "service_ih5xr8q",
        "template_7491sqh",
        {
          imageUrl: imageUrl,
        },
        "FRLWdjvHLP4McJMHL"
      );
    } catch (error) {
      console.error("Error al enviar email:", error);
      throw new Error("Error al enviar la notificación");
    }
  };

  const validateFile = (file) => {
    const maxSize = 5 * 1024 * 1024;
    const validTypes = ["image/jpeg", "image/png", "image/jpg"];

    if (!validTypes.includes(file.type)) {
      setError("Por favor seleccione solo imágenes (JPG, PNG)");
      return false;
    }
    if (file.size > maxSize) {
      setError("La imagen debe ser menor a 5MB");
      return false;
    }
    return true;
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && validateFile(file)) {
      setSelectedFile(file);
      setError("");
    }
  };

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dlvrxt1eg/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Error al subir la imagen");
    }

    const data = await response.json();
    return data.secure_url;
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Por favor selecciona un archivo primero");
      return;
    }

    setIsUploading(true);

    try {
      const imageUrl = await uploadToCloudinary(selectedFile);
      await sendEmail(imageUrl);
      localStorage.setItem('depositProofUrl', imageUrl);
      setIsVerified(true);
      setError("");
    } catch (error) {
      console.error("Error:", error);
      setError("Error al procesar el comprobante. Por favor intenta nuevamente.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div id="Agenda" className="w-full min-h-screen pt-[4vh] flex justify-center items-center mb-10">
      <div className="max-w-[1000px] w-full rounded-xl bg-white shadow-lg p-8 text-center">
        <h1 className="text-[28px] md:text-[45px] lg:text-[40px] leading-[45px] md:leading-[60px] lg:leading-[70px] font-levaus text-[#C293C2]">
          RESERVA UN ESPACIO EN LA AGENDA PARA <br className="hidden xl:flex" /> CUIDARTE Y TRANSFORMARTE
        </h1>
        
        <p className="text-[17px] lg:text-[20px] leading-[34px] lg:leading-[40px] mt-4 mb-8 font-afacad px-10 lg:px-20">
          No esperes más para darle a tu cabello el cuidado que deseas. Estoy lista para escucharte, asesorarte y crear un look que refleje tu esencia, asegurando que salgas del salón sintiéndote más espectacular que nunca.
        </p>

        {!isVerified ? (
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex-1 p-4 content-center justify-center bg-amber-50 border border-amber-200 font-afacad rounded-lg">
                <p className="text-amber-800">Para agendar tu cita, debes proporcionar el comprobante de reserva de &#8353;5000.<br/>Este monto se descontará del costo final. <br/> SINPE: 6962-1262</p>
              </div>

              <div className="flex-1 border-2 border-dashed border-gray-300 rounded-lg p-6">
                {selectedFile ? (
                  <div className="space-y-4">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <span className="text-green-600">Archivo seleccionado:</span>
                      <span className="font-medium">{selectedFile.name}</span>
                      <button
                        onClick={() => setSelectedFile(null)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <label className="cursor-pointer block">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept="image/*"
                      className="hidden"
                    />
                    <div className="flex flex-col items-center gap-2">
                      <Upload className="w-12 h-12 text-gray-400" />
                      <span className="text-gray-600">
                        Haz clic para seleccionar o arrastra tu comprobante aquí
                      </span>
                    </div>
                  </label>
                )}
              </div>
            </div>

            {error && (
              <div className="p-4 mt-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                {error}
              </div>
            )}

            <button
              onClick={handleUpload}
              disabled={isUploading || !selectedFile}
              className="mt-6 bg-[#C293C2] text-white px-6 py-2 rounded-lg hover:bg-[#a97ba9] transition-colors disabled:opacity-50 w-full"
            >
              {isUploading ? "Subiendo..." : "Verificar Comprobante"}
            </button>
          </div>
        ) : (
          <>
            <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-bold">¡Ahora puedes continuar con tu reserva!</p>
            </div>
            
            <div className="mb-8">
              <ProtocolSection 
                isOpen={isProtocolOpen}
                onToggle={() => setIsProtocolOpen(!isProtocolOpen)}
              />
            </div>
          </>
        )}

        <div 
          className={`w-full rounded-xl overflow-hidden relative ${!isVerified ? 'pointer-events-none' : ''}`}
        >
          {!isVerified && (
            <div className="absolute inset-0 bg-gray-200/10 bg-opacity-50 backdrop-blur-[2px] z-10"></div>
          )}
          <iframe
            src="https://bookings.gettimely.com/terciopelobeauty/bb/book"
            className="w-full min-h-[600px]"
            style={{ border: "none", width: "100%", maxWidth: "1024px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarWidget;