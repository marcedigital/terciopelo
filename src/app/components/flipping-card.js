// components/FlippingCard.js
import React, { useState, useEffect } from "react";
import "../globals.css";

const FlippingCard = ({ frontImage, backImage, title, description, isFirstCard }) => {
  const [flipped, setFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(isFirstCard); // Mostrar overlay solo en la primera tarjeta

  useEffect(() => {
    // Detecta si es dispositivo móvil
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardClick = () => {
    setFlipped(!flipped);
    if (showOverlay) setShowOverlay(false); // Ocultar overlay después del primer clic
  };

  return (
    <div
      className={`card relative w-full h-64 perspective transition-transform duration-500`}
      onClick={handleCardClick}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      {showOverlay && !flipped && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-10 pointer-events-none lg:hidden" >
          <span className="text-white text-5xl p-2 rounded-lg opacity-75 ">
            Click para revelar
          </span>
        </div>
      )}
      <div
        className={`inner-card w-full h-full transform transition-transform duration-300 ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="face front">
          <img
            src={frontImage}
            alt="Front"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div
          style={{ backgroundImage: `url(${backImage})` }}
          className="face back flex flex-col justify-center items-center text-white p-10 rounded-lg relative"
        >
          <h3 className="text-center text-[#ECDA98] text-[18px] leading-[30px] mb-3 font-semibold">
            {title}
          </h3>
          <div className="relative flex items-center justify-center">
            <p className="text-center text-[17px] font-afacad leading-[30px] mb-4">
              {description}
            </p>
            <span className="bg-[#ECDA98] w-[65%] mx-auto h-[1px] absolute bottom-0"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;
