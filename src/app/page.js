"use client";
import { useEffect, useState, lazy } from "react";

const Sidebar = lazy(() => import("./components/sidebar"));
const Cards = lazy(() => import("./components/cards"));
const Contact = lazy(() => import("./components/contact"));
const Carousel = lazy(() => import("./components/Carousel"));
const ContactForm = lazy(() => import("./components/ContactForm"));
const ThreeCards = lazy(() => import("./components/ThreeCards"));
const Footer = lazy(() => import("./components/Footer"));
const CalendarWidget = lazy(() => import("./components/CalendarWidget"));

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, isOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  const planet1Style = {
    transform: `translate(${
      (mousePosition.x -
        (typeof window !== "undefined" ? window.innerWidth : 0) / 2) /
      10
    }px, ${
      (mousePosition.y -
        (typeof window !== "undefined" ? window.innerHeight : 0) / 2) /
      10
    }px)`,
  };
  const planet2Style = {
    transform: `translate(${
      (mousePosition.x -
        (typeof window !== "undefined" ? window.innerWidth : 0) / 2) /
      7
    }px, ${
      (mousePosition.y -
        (typeof window !== "undefined" ? window.innerHeight : 0) / 2) /
      7
    }px)`,
  };
  const planet3Style = {
    transform: `translate(${
      (mousePosition.x -
        (typeof window !== "undefined" ? window.innerWidth : 0) / 2) /
      5
    }px, ${
      (mousePosition.y -
        (typeof window !== "undefined" ? window.innerHeight : 0) / 2) /
      5
    }px)`,
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-gradient-to-b from-[#411b4c] to-[#190926] flex items-center justify-center z-50">
          <img
            src="/Images/logo.png"
            alt="Logo"
            className="h-40 w-auto object-contain"
          />
        </div>
      )}

      {!loading && (
        <div className="relative overflow-x-hidden">
          <div
            style={{
              background:
                "radial-gradient(65% 65% at 50% 52.59%, #735383 0%, #413345 100%)",
            }}
            className="min-h-screen relative text-white overflow-hidden"
          >
            <header className=" z-50 py-6 px-4 md:px-7 lg:px-10 lg:ml-10">
              <div className="flex justify-between items-center w-full">
                <div className="hidden lg:flex items-center space-x-3 w-[130px] max-w-[153px] h-[130px] max-h-[153px]">
                  <img
                    src={"/Images/logo.png"}
                    alt="Logo"
                    className="h-full w-full"
                  />
                </div>

                <nav className="hidden lg:flex space-x-[25px] tracking-wider items-center text-[17px] leading-[24px] font-[500]">
                  <a href="#services" className="hover:underline">
                    Servicios
                  </a>
                  <a href="#studio" className="hover:underline">
                    Estudio
                  </a>
                  <a href="#process" className="hover:underline">
                    Proceso
                  </a>
                  <a href="#testimonials" className="hover:underline">
                    Testimonios
                  </a>
                  <button
                    onClick={() =>
                      document
                        .getElementById("Agenda")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                    className="bg-brownBtn hover:bg-brownGradient font-afacad text-white px-[16px] py-[10px] rounded-[10px]"
                  >
                    Agenda una cita
                  </button>
                </nav>
                <div className="flex lg:hidden items-end justify-end w-full">
                  <button onClick={() => isOpen(true)} className="">
                    <img alt="hamburguer-menu" src="/Icons/hamburguer-menu.svg" />
                  </button>
                </div>
              </div>
              {/* for small devices only */}
              <div className="flex lg:hidden items-center justify-center w-full h-[90px] ">
                <img
                  src={"/Icons/logo.svg"}
                  alt="Logo"
                  className="h-[full] w-[90px]"
                />
              </div>
            </header>

            {/* Main Section */}
            <main className="flex flex-col lg:flex-row justify-center items-center relative z-10">
              <div className="lg:w-1/2 text-center lg:text-left pt-10 flex flex-col self-start 2xl:pt-40 px-10 lg:ml-10">
                <h2 className="text-[27px] md:text-[50px] xl:text-[65px] leading-[40px] md:leading-[60px] xl:leading-[80px]">
                  DONDE LA SALUD CAPILAR Y EL ESTILO SE ENCUENTRAN
                </h2>
                <p className="mt-3 md:mt-6 text-[15px] leading-[30px] md:text-[17px] md:leading-[35px] font-afacad">
                  Tu cabello es una expresión única de personalidad y estilo. Con el
                  uso de tratamientos capilares personalizados para todo tipo de
                  cabello, Terciopelo Beauty te ofrece una experiencia de lujo que
                  garantiza un cabello suave, sedoso, y saludable.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-2 sm:flex sm:justify-center md:gap-6 justify-center lg:justify-start">
                  <button
                    onClick={() =>
                      document
                        .getElementById("Agenda")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                    className="group relative overflow-hidden w-full max-w-[260px] lg:h-[115px] rounded-[15px] text-[13px] md:text-[20px] xl:text-[26px] leading-[15px] md:leading-[22px] lg:leading-[20px] xl:leading-[30px] font-[500]"
                  >
                    <div className="absolute inset-0 bg-brownBtn/[83] transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-brownGradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative text-white flex items-center font-semibold justify-center px-2 py-3">
                      <img
                      alt="agenda-icon"
                        src="/Icons/agenda-icon.svg"
                        className="w-[30px] h-[30px] md:w-[80px] md:h-[80px] mr-2"
                      />
                      AGENDA UNA CITA
                    </div>
                  </button>
                  <button
                    onClick={() => setIsModalOpen(!isModalOpen)}
                    className="group relative overflow-hidden w-full max-w-[260px] lg:h-[115px] rounded-[15px] text-[13px] md:text-[20px] xl:text-[26px] leading-[15px] md:leading-[22px] lg:leading-[20px] xl:leading-[30px] font-[500]"
                  >
                    <div className="absolute inset-0 bg-purpleBtn/50 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-purpleGradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative text-white flex items-center font-semibold justify-center px-2 py-3">
                      <img
                      alt="eye-icon"
                        src="/Icons/eye (1).svg"
                        className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] mr-2"
                      />
                      COTIZA UN CAMBIO DE COLOR
                    </div>
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 mt-0 md:mt-5 lg:mt-0 ">
                <img
                  src={"/Images/hero-image.avif"}
                  alt="Hero Image"
                  className="rounded-lg w-full h-full"
                />
              </div>
            </main>
            <Sidebar
              isOpen={isOpen}
              open={open}
              setIsModalOpen={setIsModalOpen}
              isModalOpen={isModalOpen}
            />

            {/* Absolute Images */}
            <div
              className="absolute -z-0 inset-0 hidden lg:flex justify-center items-center h-full"
              style={{ pointerEvents: "none" }}
            >
              <div
                className="absolute top-[20%] left-[60%] transform -translate-x-1/2"
                style={{ ...planet1Style }}
              >
                <img src="/Images/planet1.avif" alt="Planet 1" />
              </div>
              <div
                className="absolute top-[40%] right-0 transform translate-x-1/2 translate-y-1/2"
                style={{ ...planet2Style }}
              >
                <img src="/Images/planet2.avif" alt="Planet 2" />
              </div>
              <div
                className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ ...planet3Style }}
              >
                <img src="/Images/planet3.avif" alt="Planet 3" />
              </div>
            </div>
          </div>

          <ThreeCards />

          <Cards setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
          <div>
            <ContactForm
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </div>

          <Contact setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />

          <Carousel />
          <CalendarWidget />
          <Footer setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
        </div>
      )}
    </>
  );
};

export default HomePage;
