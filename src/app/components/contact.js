import React from "react";

const Contact = ({ setIsModalOpen, isModalOpen }) => {
  return (
    <div
      id="studio"
      style={{ backgroundImage: "url('/Images/bg-stars.avif')" }}
      className="py-[8%] lg:py-[5%] px-[10%] lg:lg:px-[8%] bg-cover bg-fixed"
    >
      <div className="flex flex-col xl:flex-row text-center xl:items-end gap-[40px] justify-center items-center">
        <div className="space-y-10 text-white max-w-[800px] w-full">
          <h1 className="text-[28px] md:text-[45px] lg:text-[40px] leading-[45px] md:leading-[60px] lg:leading-[70px] ">
            un lugar ideado para que explores el estilo que refleja tu esencia.
          </h1>
          <p className="text-[17px] lg:text-[20px] leading-[34px] lg:leading-[40px] mb-4 font-afacad">
            Hola! Soy Nicolle Pitty, fundadora de Terciopelo Beauty. He creado
            este espacio pensando en ti, en tus necesidades y en la importancia
            de sentirte realmente espectacular con tu cabello. En este salón, no
            solo se trata de peinar o cortar; se trata de ofrecerte un lugar
            seguro donde puedas elegir el estilo que refleje lo mejor de ti y te
            haga sentir increible.
          </p>
          <div className="rounded-[10px] hidden xl:block h-[200px] w-[85%] overflow-hidden border=[#ECDA98] border-2 mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.707304126917!2d-84.06858842403952!3d9.958292490145022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e58846e0fb53%3A0xc23b75751d5a4681!2sTerciopelo%20Beauty%20Studio!5e0!3m2!1ses!2scr!4v1730997251038!5m2!1ses!2scr"
              className="w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="min-w-[33%] max-w-[400px] lg:max-w-none">
          <img src="/Images/studio.avif" className="w-full max-h-[750px]" />
        </div>
        <div className="rounded-[10px] xl:hidden h-[200px] w-full max-w-[800px] overflow-hidden border-[#ECDA98] border-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.707304126917!2d-84.06858842403952!3d9.958292490145022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e58846e0fb53%3A0xc23b75751d5a4681!2sTerciopelo%20Beauty%20Studio!5e0!3m2!1ses!2scr!4v1730997251038!5m2!1ses!2scr"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div id="process" className="text-white mt-20 lg:mt-40">
        <div className="text-center mb-24">
          <h1 className="text-[28px] md:text-[45px] lg:text-[40px] leading-[45px] md:leading-[60px] lg:leading-[70px] mb-4 ">
            Así es como se aseguran resultados <br className="hidden lg:flex" />{" "}
            espectaculares en Terciopelo Beauty
          </h1>
          <p className="text-[17px] lg:text-[20px] leading-[34px] lg:leading-[40px] font-afacad">
            Confiar en un nuevo salón es un gran paso, por eso mi enfoque es
            claro y directo, para que cada <br className="hidden lg:flex" />{" "}
            cliente disfrute de un servicio impecable.
          </p>
        </div>
        <div className="space-y-10 max-w-[1100px] justify-self-center">
          <div className="flex justify-end">
            <div className="steps-gradient mt-2 space-y-3 relative w-full md:w-[85%] lg:w-[60%] ">
              <span className="bg-white font-semibold absolute h-[65px] lg:h-[83px] w-[65px] lg:w-[83px] flex items-center justify-center -top-8 lg:-top-12 right-6 lg:right-12 rounded-full border-2 border-[#E49539] text-[40px] text-[#E49539]">
                I
              </span>
              <h3 className="text-[17px] md:text-[20px] lg:text-[25px] font-semibold tracking-wider">
                Consulta inicial
              </h3>
              <p className="text-[15px] md:text-[17px] lg:text-[20px] font-afacad pr-[10%] pb-2">
                Escucho tus deseos y necesidades para entender el estado de tu
                cabello y el estilo que quieres lograr.
              </p>
            </div>
          </div>
          <div className="flex justify-start text-end">
            <div className="even-steps-gradient mt-2 space-y-3 relative w-full md:w-[85%] lg:w-[60%]">
              <span className="bg-white font-semibold absolute h-[65px] lg:h-[83px] w-[65px] lg:w-[83px] flex items-center justify-center -top-8 lg:-top-12 left-6 lg:left-12 rounded-full border-2 border-[#E49539] text-[40px] text-[#E49539]">
                II
              </span>
              <h3 className="text-[17px] md:text-[20px] lg:text-[25px] font-semibold tracking-wider">
                Análisis capilar profundo
              </h3>
              <p className="text-[15px] md:text-[17px] lg:text-[20px] pl-[5%] pb-2 font-afacad">
                Continúo un microanálisis capilar para entender la salud de tu
                cabello, asegurando que cualquier tratamiento sea seguro y
                efectivo.
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="steps-gradient mt-2 space-y-3 relative w-full md:w-[85%] lg:w-[60%]">
              <span className="bg-white font-semibold absolute h-[65px] lg:h-[83px] w-[65px] lg:w-[83px] flex items-center justify-center -top-8 lg:-top-12 right-6 lg:right-12 rounded-full border-2 border-[#E49539] text-[40px] text-[#E49539]">
                III
              </span>
              <h3 className="text-[17px] md:text-[20px] lg:text-[25px] font-semibold tracking-wider">
                Plan personalizado
              </h3>
              <p className="text-[15px] md:text-[17px] lg:text-[20px] pr-[10%] pb-2 font-afacad">
                Construyo un plan de acción especializado, con recomendaciones
                de corte, tinte, o tratamientos según tu tipo de cabello.
              </p>
            </div>
          </div>
          <div className="flex justify-start text-end">
            <div className="even-steps-gradient mt-2 space-y-3 relative w-full md:w-[85%] lg:w-[60%]">
              <span className="bg-white font-semibold absolute h-[65px] lg:h-[83px] w-[65px] lg:w-[83px] flex items-center justify-center -top-8 lg:-top-12 left-6 lg:left-12 rounded-full border-2 border-[#E49539] text-[40px] text-[#E49539]">
                IV
              </span>
              <h3 className="text-[17px] md:text-[20px] lg:text-[25px] font-semibold tracking-wider">
                Ejecución precisa
              </h3>
              <p className="text-[15px] md:text-[17px] lg:text-[20px] pl-[10%] pb-2 font-afacad">
                Me aseguro de trabajar con cuidado y excelente técnica para
                asegurar que el resultado final supere tus expectativas.
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="steps-gradient mt-2 space-y-3 relative w-full md:w-[85%] lg:w-[60%]">
              <span className="bg-white font-semibold absolute h-[65px] lg:h-[83px] w-[65px] lg:w-[83px] flex items-center justify-center -top-8 lg:-top-12 right-6 lg:right-12 rounded-full border-2 border-[#E49539] text-[40px] text-[#E49539]">
                V
              </span>
              <h3 className="text-[17px] md:text-[20px] lg:text-[25px] font-semibold tracking-wider">
                Seguimiento y cuidado
              </h3>
              <p className="text-[15px] md:text-[17px] lg:text-[20px] pr-[10%] pb-2 font-afacad">
                Finalizo con consejos y productos para mantener tu look y la
                salud de tu cabello hasta tu próxima visita.
              </p>
            </div>
          </div>
        </div>
        <div className=" mb-12 mt-24 md:mt-20 lg:mt-36 flex justify-center space-x-4 lg:space-y-0 lg:space-x-4">
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

export default Contact;
