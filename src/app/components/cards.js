// pages/Cards.js
"use client";
import React from "react";
import FlippingCard from "./flipping-card";
import "../globals.css";

const Cards = ({ setIsModalOpen, isModalOpen }) => {
  const cardData = [
    {
      frontImage: "/Images/card-front1.avif",
      backImage: "/Images/card-back1.avif",
      title: "análisis capilar",
      description:
        "Todas las sesiones incluyen una valoración de tu salud capilar por medio de una microcámara de diagnóstico. Así tendremos toda la información para cuidar tu cabello de la forma correcta.",
    },
    {
      frontImage: "/Images/card-front2.avif",
      backImage: "/Images/card-back2.avif",
      title: "corte de cabello",
      description:
        "Cada corte incluye lavado, mascarilla y peinado. Trabajo con las referencias que traigas, mientras te guío según tu estructura facial para asegurarte el mejor resultado posible.",
    },
    {
      frontImage: "/Images/card-front3.avif",
      backImage: "/Images/card-back3.avif",
      title: "cambio de color",
      description:
        "Desde babylights sutiles hasta color global completo. Al trabajar con las mejores técnicas lograremos el tono y estilo que mejor se adapte a tu personalidad y preferencias.",
    },
    {
      frontImage: "/Images/card-front4.avif",
      backImage: "/Images/card-back4.avif",
      title: "tratamientos",
      description:
        "Te ayudaré a solucionar cualquier problema capilar gracias a tratamientos de alta calidad. Con productos como de alta gama revitalizaremos tu cabello, dejándolo más fuerte, saludable y lleno de vida.",
    },
    {
      frontImage: "/Images/card-front5.avif",
      backImage: "/Images/card-back5.avif",
      title: "peinado profesional",
      description:
        "Desde ondas elegantes hasta un recogido sofisticado, crearé el peinado perfecto para cualquier ocasión. Ya sea que busques un look casual o algo más formal, me aseguraré de que resalte tu estilo y te haga sentir increíble.",
    },
    {
      frontImage: "/Images/card-front6.avif",
      backImage: "/Images/card-back6.avif",
      title: "maquillaje",
      description:
        "Una limpieza facial para tu tipo de piel, seguida de un maquillaje impecable y un sellador especial que repele la humedad, el sudor e incluso el agua. Ideal para manatener un maquillaje perfecto todo el día.",
    },
  ];

  return (
    <div id="services"  className="flex flex-col items-center py-[10%] md:py-[4%] px-[8%] md:mt-10">
      <div className="text-center pb-[8%] max-w-[1200px] w-full">
        <h1 className="text-[28px] md:text-[45px] lg:text-[40px] text-[#B880B5] leading-[45px] md:leading-[60px] lg:leading-[70px] mb-3">
          De un cabello sin vida y difícil de manejar, <br className="hidden lg:flex"/> a una suavidad de terciopelo
        </h1>
        <p className="text-[15px] md:text-[17px] leading-[30px] md:leading-[33px] lg:leading-[28px] font-afacad">
          En Terciopelo Beauty, abordamos estos problemas desde la raíz. <br className="hidden md:flex" /> Mi
          enfoque está centrado en la salud capilar y en crear estilos
          personalizados. Para que hagas de tu <br className="hidden lg:flex" /> cabello tu mejor accesorio.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-[30px] py-14 justify-self-center justify-center">
          {cardData.map((card, index) => (
            <div key={index} className="w-full max-w-[327px]">
              <FlippingCard
                frontImage={card.frontImage}
                backImage={card.backImage}
                title={card.title}
                description={card.description}
                isFirstCard={index === 0} 
              />
            </div>
          ))}
        </div>

        <div className="mt-8 flex  justify-center space-x-4 lg:space-y-0 lg:space-x-4">
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
                <div className="relative text-white flex items-center justify-center font-semibold px-6 py-3">
                  <img
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
                <div className="relative text-white flex items-center justify-center font-semibold px-6 py-3">
                  <img
                    src="/Icons/eye (1).svg"
                    className="w-[40px] h-[40px] md:w-[80px] md:h-[80px] mr-2"
                  />
                  COTIZA UN CAMBIO DE COLOR
                </div>
              </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
