import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const ProtocolSection = ({ isOpen, onToggle }) => {
  return (
    <div className="w-full font-afacad">
      <button
        onClick={onToggle}
        className="w-full flex text-center justify-center gap-2 text-white bg-[#E49539] hover:bg-[#a97ba9] transition-all duration-300 py-3 px-6 rounded-lg"
      >
        <span className="font-semibold">Por favor lee con atención nuestro protocolo de servicio</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      <div
        className={`mt-4 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border rounded-lg p-6 bg-white">
          <h2 className="text-xl font-levaus text-[#C293C2] mb-4">Protocolo para tu cita</h2>
  

          <div className="space-y-6 justify-items-center md:px-36">
            <div>
              <h3 className="font-semibold text-[#C293C2] mb-2">Llegada puntual</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex text-center">
                  <span>Se darán 15 minutos de tolerancia después de la hora acordada, de lo contrario la cita será cancelada.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#C293C2] mb-2">Comunicación abierta</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex text-center">
                  <span>Comunica cualquier alergia o sensibilidad a productos.</span>
                </li>
                <li className="flex text-center">
                  <span>Comparte cualquier afectación en tu salud familiar.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#C293C2] mb-2">Durante el servicio</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex text-center">
                  <span>Si deseas una "Cita silenciosa" solicítala previamente.</span>
                </li>
                <li className="flex text-center">
                  <span>Relájate y disfruta de la experiencia.</span>
                </li>
                <li className="flex text-center">
                  <span>Siéntente libre de solicitar tu playlist o canción favorita.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#C293C2] mb-2">Pago</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex text-center">
                  <span>Solo se aceptarán pagos en efectivo o SINPE Móvil.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#C293C2] mb-2">Higiene personal</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex text-center">
                  <span>Lava tu cabello al menos 2 días antes de tu cita y asegurate que esté libre de productos.</span>
                </li>
                <li className="flex text-center">
                  <span>De lo contrario tendrás un cobro adicional de ₡2500.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#C293C2] mb-2">Medidas Sanitarias</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex text-center">
                  <span>Si presentas síntomas de gripe o cualquier otra afectación viral, utiliza mascarilla o reprograma tu cita con 12h de anticipación.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#C293C2] mb-2">Código de vestimenta</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex text-center">
                  <span>Ven con ropa cómoda y que se pueda manchar. Aunque procuramos no dañar tu ropa, lo mejor es que te prepares, especialmente si tu cita incluye tinte.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtocolSection;