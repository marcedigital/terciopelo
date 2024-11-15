import React, { useState, lazy } from "react";
const TikTok = lazy(() => import("./TikTok"));


const testimonials = [
  {
    id: 1,
    text: "Super recomendada! El salón es muy lindo, muy acogedor. Está decorado precioso y siempre que voy me crece el cabello montones. me encanta <3 Nico siempre te asesora, teda ideas y tips y cumple justamente con lo que se pide",
    author: "Fiorella M.",
  },
  {
    id: 2,
    text: "Una experiencia inigualable. Me encanta cómo cuidan mi cabello. Siempre salgo sintiéndome radiante y renovada.",
    author: "Carla R.",
  },
  // Add more testimonials as needed
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex justify-center mt-10">
    <div id="testimonials" className="flex flex-col items-center py-6 md:py-12 lg:py-20 px-4 md:px-10 lg:px-20 max-w-[1600px] justify-center">
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12 lg:mb-6">
        <div className="text-center lg:text-left">
          <h2 className="text-[28px] md:text-[45px] lg:text-[40px] leading-[45px] md:leading-[60px] lg:leading-[70px] font-levaus text-[#C293C2]">
            LO QUE LAS PERSONAS DICEN <br className="hidden xl:flex" />
            SOBRE SU TRANSFORMACIÓN Y EXPERIENCIA
          </h2>
          <p className=" justify-self-center lg:justify-self-start mt-4 text-[17px] lg:text-[20px] leading-[34px] lg:leading-[40px] font-afacad max-w-[600px] ">
            Cada cliente vive una experiencia transformadora que va más allá del
            cabello. Lee lo que mis clientes tienen que decir sobre cómo he
            cuidado su estilo, salud capilar y bienestar. Sus palabras reflejan
            mi compromiso de hacer que te sientas radiante en cada visita.
          </p>
          <h2 className="hidden lg:flex mt-20 text-[28px] md:text-[35px] font-levaus lg:text-[47px] leading-[80px] text-[#C293C2]">
            Síguenos en TikTok
          </h2>
        </div>
        <div className="relative flex items-center justify-center w-full max-w-[500px]">
          <button
            onClick={goToPrevious}
            className="absolute left-2 text-white text-[24px] md:text-[32px] p-2"
          >
            &#10094;
          </button>

          <div
            className="w-full h-[480px] md:h-[550px] bg-[#251525] text-white rounded-tl-full rounded-tr-full py-10 px-8 text-center flex flex-col items-center justify-center space-y-4"
            style={{
              backgroundImage: `url('/Images/bg-stars.avif')`, // Replace with your image path
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="text-[36px] font-serif text-[#C293C2]">
              <img src="/Icons/testimonial-icon.svg" alt="testimonial icon" />
            </span>
            <p className="text-[16px] md:text-[17px] xl:text-[20px] leading-relaxed font-afacad">
              {testimonials[currentIndex].text}
            </p>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-bold">
              {testimonials[currentIndex].author}
            </p>
          </div>

          <button
            onClick={goToNext}
            className="absolute right-2 text-white text-[24px] md:text-[32px] p-2"
          >
            &#10095;
          </button>
        </div>
      </div>
      <h2 className="text-center lg:hidden mt-9 text-[28px] md:text-[35px] font-levaus lg:text-[47px] leading-[80px] text-[#C293C2]">
        Síguenos en TikTok
      </h2>
      <TikTok/>
    </div>
    </div>
  );
};

export default Carousel;
