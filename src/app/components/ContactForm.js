import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = ({ isModalOpen, setIsModalOpen }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    hairLength: "",
    techniques: [],
  });
  const [isInstructionsVisible, setIsInstructionsVisible] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const formPayload = new FormData();
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("phone", formData.phone);
    formPayload.append("hairLength", formData.hairLength);
    formData.techniques.forEach((technique, index) => {
      formPayload.append(`technique_${index}`, technique);
    });

    if (selectedFile) {
      formPayload.append("file", selectedFile);
    }

    emailjs
      .sendForm(
        "service_cspzdp9",
        "template_3tavogq",
        e.target,
        "QQnBhytnVo7HZMzV1"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div
      style={{
        backgroundImage: "url('/Images/bg-stars.avif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`fixed flex flex-col justify-center ${
        isModalOpen ? "right-0" : "-right-[1500px]"
      } top-0 min-h-screen z-50 lg:w-2/3 py-5 duration-300 px-10 2xl:p-10 rounded-lg shadow-lg font-afacad backdrop-blur-md bg-opacity-70 overflow-y-auto`}
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
      <form className="space-y-6" onSubmit={handleSubmit}>
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
                  ✅ Con luz natural de día.<br/>
                  ✅ Preferiblemente en un exterior.<br/>
                  ✅ Tirando tu cabello hacia atrás y de espaldas.<br/>
                  🚫 No uses filtros, flash o luces artificiales.<br/>
                  🚫 No tomes la foto a contraluz.<br/>
                  🚫 Procura que no te ilumine el sol directamente.<br/>
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
                    className="py-2 px-4 bg-[#251525] rounded-[10px] text-white cursor-pointer transition-colors font-afacad w-auto max-w-[200px] flex justify-center items-center"
                  >
                    Adjuntar
                    <input
                      id="file-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
              </div>

              {selectedFile && (
                <p className="text-white text-sm mt-2">
                  Archivo seleccionado: {selectedFile.name}
                </p>
              )}
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
                    onClick={() =>
                      setFormData({ ...formData, hairLength: length.label })
                    }
                    className="flex gap-1 2xl:gap-3 w-full items-center p-1 2xl:p-2 rounded-lg text-white button-gradient transform transition-transform"
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