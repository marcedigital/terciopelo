import React, { useState, useEffect } from "react";
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

  // Nuevo estado para mostrar el popup
  const [showProtocolPopup, setShowProtocolPopup] = useState(false);

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
      "https://api.cloudinary.com/v1_1/dlvrxt1eg/image/upload",
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
      setShowProtocolPopup(true);
    } catch (error) {
      console.error("Error:", error);
      setError("Error al procesar el comprobante. Por favor intenta nuevamente.");
    } finally {
      setIsUploading(false);
    }
  };

  // Nuevo manejador para el botón de WhatsApp
  const handleWhatsAppSend = () => {
    // Abrir WhatsApp en una nueva pestaña
    window.open("https://wa.me/50689632882?text=Hola%20👋%2C%20adjunto%20el%20comprobante%20de%20pago%20para%20mi%20cita.", "_blank");
    
    // Habilitar el timely (marcar como verificado)
    setIsVerified(true);
    
    // Mostrar el pop-up del protocolo
    setShowProtocolPopup(true);
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
                <p className="text-amber-800">
                  Para agendar tu cita, debes proporcionar el comprobante de reserva de &#8353;5000.<br/>
                  Este monto se descontará del costo final. <br/> 
                  SINPE: 8963 2882
                </p>
              </div>

              {/* <div className="flex-1 border-2 border-dashed border-gray-300 rounded-lg p-6">
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
                      <span className="text-gray-600 font-afacad">
                        Haz clic para seleccionar o arrastra tu comprobante aquí
                      </span>
                    </div>
                  </label>
                )}
              </div> */}
            </div>

            {error && (
              <div className="p-4 mt-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                {error}
              </div>
            )}

            {/* Botón original comentado */}
            {/* <button
              onClick={handleUpload}
              disabled={isUploading || !selectedFile}
              className="mt-6 bg-[#C293C2] text-white px-6 py-2 rounded-lg hover:bg-[#a97ba9] font-bold tracking-wider transition-colors disabled:opacity-50 w-full "
            >
              {isUploading ? "Subiendo..." : "Verificar Comprobante"}
            </button> */}
            
            {/* Nuevo botón de WhatsApp */}
            <button
              onClick={handleWhatsAppSend}
              className="mt-6 bg-[#C293C2] text-white px-6 py-2 rounded-lg hover:bg-[#a97ba9] font-bold tracking-wider transition-colors w-full"
            >
              Enviar Comprobante
            </button>
          </div>
        ) : (
          <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-bold">¡Ahora puedes continuar con tu reserva!</p>
          </div>
        )}

        <div className="mb-8">
          <ProtocolSection 
            isOpen={isProtocolOpen}
            onToggle={() => setIsProtocolOpen(!isProtocolOpen)}
          />
        </div>

        <div 
          className={`w-full rounded-xl overflow-hidden relative ${!isVerified ? 'pointer-events-none' : ''}`}
        >
          {!isVerified && (
            <div className="absolute inset-0 bg-gray-200/10 bg-opacity-50 backdrop-blur-[2px] z-10 flex items-center justify-center p-6">
              <div className="bg-white/90 rounded-xl p-6 shadow-lg max-w-4xl w-full pointer-events-auto">
                <h3 className="font-levaus text-[#C293C2] mb-4 text-xl text-center">Bueno saber - Paquetes de Servicios</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  {/* Package 1 */}
                  <div className="bg-gradient-to-br from-[#f8f4ff] to-[#fff5f0] border border-[#E49539]/20 rounded-lg p-4 text-center">
                    <h4 className="font-semibold font-afacad text-[#C293C2] mb-2 text-sm">Paquete Peinados Semanales</h4>
                    <p className="text-gray-700 font-afacad text-xs mb-3">Obtén un peinado profesional cada semana</p>
                    <div className="text-[#E49539] font-bold text-lg">₡50,000/mes</div>
                  </div>

                  {/* Package 2 */}
                  <div className="bg-gradient-to-br from-[#f8f4ff] to-[#fff5f0] border border-[#E49539]/20 rounded-lg p-4 text-center">
                    <h4 className="font-semibold font-afacad text-[#C293C2] mb-2 text-sm">Paquete Renacimiento Solar</h4>
                    <p className="text-gray-700 font-afacad text-xs mb-3">Trabajamos el renacimiento de tu cabello con 4 tratamientos especializados</p>
                    <div className="text-[#E49539] font-bold text-lg">₡100,000</div>
                  </div>

                  {/* Package 3 */}
                  <div className="bg-gradient-to-br from-[#f8f4ff] to-[#fff5f0] border border-[#E49539]/20 rounded-lg p-4 text-center">
                    <h4 className="font-semibold font-afacad text-[#C293C2] mb-2 text-sm">Paquete Corte de Pava</h4>
                    <p className="text-gray-700 font-afacad text-xs mb-3">Mantén tu fleco del largo que te gusta todo el tiempo</p>
                    <div className="text-[#E49539] font-bold text-lg">₡20,000/4 cortes</div>
                  </div>

                </div>
                
                {/* CTA Buttons */}
                <div className="mt-6 flex flex-col items-center space-y-3">
                  <button
                    onClick={() => {
                      window.open("https://wa.me/50689632882?text=Hola%20👋%2C%20me%20interesa%20comprar%20un%20paquete%20de%20servicios.", "_blank");
                      setIsVerified(true);
                    }}
                    className="bg-[#C293C2] hover:bg-[#a97ba9] text-white px-6 py-3 rounded-lg font-bold font-afacad tracking-wider transition-colors w-full max-w-xs"
                  >
                    Comprar Paquete
                  </button>
                  
                  <div className="text-gray-600 font-afacad text-sm">o</div>
                  
                  <button
                    onClick={() => {
                      window.open("https://wa.me/50689632882?text=Hola%20👋%2C%20adjunto%20el%20comprobante%20de%20pago%20para%20mi%20cita.", "_blank");
                      setIsVerified(true);
                      setShowProtocolPopup(true);
                    }}
                    className="bg-[#E49539] hover:bg-[#d4822b] text-white px-6 py-3 rounded-lg font-bold font-afacad tracking-wider transition-colors w-full max-w-xs"
                  >
                    Enviar comprobante de reserva
                  </button>
                </div>

              </div>
            </div>
          )}
          <iframe
            src="https://bookings.gettimely.com/terciopelobeauty/bb/book"
            className="w-full min-h-[600px]"
            style={{ border: "none", width: "100%", maxWidth: "1024px" }}
          />
        </div>
      </div>

      {showProtocolPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white max-w-xl w-full rounded-lg p-6 relative z-10 overflow-auto max-h-[90vh]">
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setShowProtocolPopup(false)}
            >
              <X size={24} />
            </button>
            <h2 className="text-xl font-levaus text-[#C293C2] mb-4">Protocolo para tu cita</h2>
            <div className="space-y-6 justify-items-left md:px-4 text-left">
              <div>
                <h3 className="font-semibold font-afacad text-[#C293C2] mb-2 lg:text-xl">Llegada puntual</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex text-left font-afacad lg:text-xl">
                    <span>Se darán 15 minutos de tolerancia después de la hora acordada, de lo contrario la cita será cancelada.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold font-afacad text-[#C293C2] mb-2 lg:text-xl">Comunicación abierta</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex text-left font-afacad lg:text-xl">
                    <span>Comunica cualquier alergia o sensibilidad a productos.</span>
                  </li>
                  <li className="flex text-left font-afacad lg:text-xl">
                    <span>Comparte cualquier afectación en tu salud familiar.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold font-afacad text-[#C293C2] mb-2 lg:text-xl">Durante el servicio</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex text-left font-afacad lg:text-xl">
                    <span>Si deseas una "Cita silenciosa" solicítala previamente.</span>
                  </li>
                  <li className="flex text-left font-afacad lg:text-xl">
                    <span>Relájate y disfruta de la experiencia.</span>
                  </li>
                  <li className="flex text-left font-afacad lg:text-xl">
                    <span>Siéntete libre de solicitar tu playlist o canción favorita.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold font-afacad text-[#C293C2] mb-2 lg:text-xl">Pago</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex text-left font-afacad lg:text-xl">
                    <span>Solo se aceptarán pagos en efectivo o SINPE Móvil.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold font-afacad text-[#C293C2] mb-2 lg:text-xl">Higiene personal</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex text-left font-afacad lg:text-xl">
                    <span>Lava tu cabello al menos 2 días antes de tu cita y asegúrate que esté libre de productos.</span>
                  </li>
                  <li className="flex text-left font-afacad lg:text-xl">
                    <span>De lo contrario tendrás un cobro adicional de ₡2500.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold font-afacad text-[#C293C2] mb-2 lg:text-xl">Medidas Sanitarias</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex text-left font-afacad lg:text-xl">
                    <span>Si presentas síntomas de gripe o cualquier otra afectación viral, utiliza mascarilla o reprograma tu cita con 12h de anticipación.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold font-afacad text-[#C293C2] mb-2 lg:text-xl">Código de vestimenta</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex text-left font-afacad lg:text-xl">
                    <span>Ven con ropa cómoda y que se pueda manchar. Aunque procuramos no dañar tu ropa, lo mejor es que te prepares, especialmente si tu cita incluye tinte.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button 
                onClick={() => setShowProtocolPopup(false)} 
                className="bg-[#C293C2] text-white px-4 py-2 rounded hover:bg-[#a97ba9]"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarWidget;