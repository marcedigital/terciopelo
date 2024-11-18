import React, { useState } from "react";
import emailjs from "emailjs-com";

emailjs.init("FRLWdjvHLP4McJMHL");

const ContactForm = ({ isModalOpen, setIsModalOpen }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    hairLength: "",
    techniques: [],
  });

  // Función para subir imágenes a Cloudinary
  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default"); // Cambia esto por tu preset
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dlvrxt1eg/image/upload`, // Cambia YOUR_CLOUD_NAME por tu Cloud Name
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Error al subir la imagen");
    }

    const data = await response.json();
    return data.secure_url; // URL pública de la imagen subida
  };

  // Validación de archivos
  const validateFiles = (files) => {
    const maxSize = 5 * 1024 * 1024; // 5MB por archivo
    const validTypes = ["image/jpeg", "image/png", "image/jpg"];

    for (const file of files) {
      if (!validTypes.includes(file.type)) {
        alert("Por favor seleccione solo imágenes (JPG, PNG)");
        return false;
      }
      if (file.size > maxSize) {
        alert("Cada imagen debe ser menor a 5MB");
        return false;
      }
    }

    return true;
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleHairLengthChange = (length) => {
    setFormData({ ...formData, hairLength: length });
  };

  const getButtonClass = (length) => {
    return formData.hairLength === length.label
      ? "flex gap-1 2xl:gap-3 w-full items-center p-1 2xl:p-2 rounded-lg text-white button-gradient transform transition-transform bg-pink-600"
      : "flex gap-1 2xl:gap-3 w-full items-center p-1 2xl:p-2 rounded-lg text-white button-gradient transform transition-transform";
  };

  const handleTechniqueChange = (technique) => {
    setFormData((prev) => {
      if (prev.techniques.includes(technique)) {
        return {
          ...prev,
          techniques: prev.techniques.filter((t) => t !== technique),
        };
      } else {
        return {
          ...prev,
          techniques: [...prev.techniques, technique],
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);

    try {
      // Subir las imágenes seleccionadas a Cloudinary
      const uploadPromises = selectedFiles.map((file) =>
        uploadToCloudinary(file)
      );
      const imageUrls = await Promise.all(uploadPromises); // Aquí se definen las URLs

      // Enviar correo con las URLs de las imágenes
      await emailjs.send(
        "service_ih5xr8q",
        "template_nq37iba",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          hairLength: formData.hairLength,
          techniques: formData.techniques.join("\n"),
          imageUrls: imageUrls.join("\n"),
        },
        "FRLWdjvHLP4McJMHL"
      );

      alert("Mensaje enviado exitosamente!");
      // Resetear el formulario
      setFormData({
        name: "",
        email: "",
        phone: "",
        hairLength: "",
        techniques: [],
      });
      setSelectedFiles([]);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error:", error);
      alert("Error al enviar el mensaje. Por favor intente nuevamente.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('/Images/bg-stars.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`fixed flex flex-col ${
        // Removido justify-center para mejor scroll
        isModalOpen ? "right-0" : "-right-[1500px]"
      } top-0 bottom-0 z-50 lg:w-2/3 py-5 duration-300 px-10 2xl:p-10 rounded-lg shadow-lg font-afacad backdrop-blur-md bg-opacity-70 overflow-y-auto w-full`} // Añadido w-full y bottom-0
    >
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute top-2 left-4 text-white text-4xl font-bold hover:text-pink-500 transition-colors"
        style={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        &times;
      </button>

      <img src="/Icons/logo.svg" className="h-16 w-16 mx-auto mb-10" />
      {/* <form className="space-y-6" onSubmit={handleSubmit}> */}
      <form className="space-y-6 pb-20" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-4 2xl:space-y-6">
            <div>
              <label className="block text-white mb-1 font-afacad">
                Nombre Completo
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full text-sm px-4 py-1 2xl:py-2 bg-transparent text-white border-b border-l border-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-white mb-1 font-afacad">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full text-sm px-4 py-2 bg-transparent text-white border-b border-l border-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-white mb-1 font-afacad">
                Número Telefónico
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full text-sm px-4 py-1 2xl:py-2 bg-transparent text-white border-b border-l border-white focus:outline-none"
              />
            </div>

            <div className="mt-3 2xl:mt-5">
              <label className="block text-white mb-1 font-afacad">
                Agrega una fotografía de referencia
              </label>
              <div className=" top-full mt-2 max-w-[300px] p-4 bg-[#251525] text-white rounded-[10px] mb-5 text-sm shadow-lg ">
                <p>
                  Envíanos una foto de tu cabello siguiendo estas
                  recomendaciones:
                </p>
                <p className="mt-2 list-disc list-inside space-y-1">
                  ✅ Con luz natural de día.
                  <br />
                  ✅ Preferiblemente en un exterior.
                  <br />
                  ✅ Tirando tu cabello hacia atrás y de espaldas.
                  <br />
                  🚫 No uses filtros, flash o luces artificiales.
                  <br />
                  🚫 No tomes la foto a contraluz.
                  <br />
                  🚫 Procura que no te ilumine el sol directamente.
                  <br />
                </p>
              </div>
              <div className="mt-2 flex flex-wrap gap-4">
                <div
                  className="p-[2px] rounded-[10px] inline-block"
                  style={{
                    background:
                      "linear-gradient(97.01deg, #b880b5 3.23%, #e49539 95.58%)",
                  }}
                >
                  <label
                    htmlFor="file-upload"
                    className="p-2 bg-[#251525] rounded-[10px] text-white cursor-pointer transition-colors font-afacad w-auto max-w-[200px] flex justify-center items-center"
                  >
                    Adjuntar
                    <input
                      id="file-upload"
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={(event) => {
                        const files = Array.from(event.target.files || []);
                        if (validateFiles(files)) {
                          setSelectedFiles(files);
                        }
                      }}
                    />
                  </label>
                </div>

                {isUploading && (
                  <div className="text-white mt-2">Subiendo imágenes...</div>
                )}

                {selectedFiles.length > 0 && (
                  <div className="text-white text-sm mt-2">
                    <p>Archivos seleccionados:</p>
                    <ul className="list-disc pl-5">
                      {selectedFiles.map((file, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-between"
                        >
                          <span>{file.name}</span>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedFiles((files) =>
                                files.filter((_, i) => i !== index)
                              );
                            }}
                            className="text-red-500 ml-2"
                          >
                            ×
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-4 2xl:space-y-6">
            <div>
              <label className="block text-white mb-3 text-lg font-semibold">
                Técnicas de Color
              </label>
              <div className="space-y-1 2xl:space-y-2 font-afacad text-md">
                {[
                  "Balayage",
                  "Highlights",
                  "Color Block",
                  "Fantasia",
                  "Money Peace",
                  "Highlights MoneyPeace",
                  "Tinte Completo",
                  "Cubrimiento de Canas",
                ].map((technique, index) => (
                  <label
                    key={index}
                    htmlFor={`checkbox-${index}`}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id={`checkbox-${index}`}
                      className="hidden peer min-h-3 min-w-3"
                      onChange={() => handleTechniqueChange(technique)}
                    />
                    <div className="min-h-4 min-w-4 w-4 2xl:w-5 h-4 2xl:h-5 border-2 border-white rounded-sm peer-checked:bg-pink-600 flex items-center justify-center">
                      <svg
                        className="hidden w-2 2xl:w-3 h-2 2xl:h-3 text-white peer-checked:block"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-white text-xs">{technique}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-white mb-1 font-afacad">
                Selecciona el Largo de tu cabello
              </label>
              <div className="w-full space-y-1 2xl:space-y-2 font-afacad">
                {[
                  { label: "Corto", imageUrl: "/Images/1.avif" },
                  { label: "Medio", imageUrl: "/Images/2.avif" },
                  { label: "Largo", imageUrl: "/Images/3.avif" },
                  { label: "Extralargo", imageUrl: "/Images/4.avif" },
                ].map((length, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setFormData({ ...formData, hairLength: length.label })}
                    className={getButtonClass(length)}
                  >
                    <div className="w-[50px] 2xl:w-[80px] h-[50px] 2xl:h-[80px] overflow-hidden mb-1 rounded-full border-2 border-pink-600">
                      <img
                        src={length.imageUrl}
                        alt={length.label}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="text-sm">{length.label}</span>
                  </button>
                ))}
              </div>
            </div>
            <div
              className="mt-5 p-[2px] rounded-xl inline-block"
              style={{
                background:
                  "linear-gradient(97.01deg, #b880b5 3.23%, #e49539 95.58%)",
              }}
            >
              <button
                type="submit"
                className="group relative overflow-hidden w-full max-w-[230px] rounded-[15px] text-[13px] md:text-[20px] xl:text-[26px] leading-[15px] md:leading-[22px] lg:leading-[20px] xl:leading-[30px] font-[500]"
              >
                <div className="absolute inset-0 bg-purpleBtn/50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-purpleGradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative text-white flex items-center justify-center font-semibold font-levaus px-3 py-3">
                  <img
                    src="/Icons/eye (1).svg"
                    className="w-[30px] h-[30px] md:w-[60px] md:h-[60px] mr-2"
                  />
                  ENVIAR
                </div>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
