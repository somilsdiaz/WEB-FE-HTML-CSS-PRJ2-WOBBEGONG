import React from 'react';
import {
  fb,
  yt,
  ig,
  bancolombia,
  davivienda,
  aval,
  mcard,
  nequi,
  paypal,
  pse,
  visa
} from "../data/dataFooter";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[linear-gradient(0deg,_#4C37C0_0%,_#5536B9_97%,_#ffffff_100%)] text-white w-full pt-2">
      <div className="grid mx-auto grid-cols-1 md:grid-cols-3 items-center p-5">
        <div className="info text-center md:text-left">
          <p>NovaMart</p>
          <p>NIT: 123456789</p>
        </div>

        <div className="contact flex justify-center items-center gap-5">
          <a href="#"><img src={fb} alt="Facebook" className="h-7" /></a>
          <a href="#"><img src={ig} alt="Instagram" className="h-7" /></a>
          <a href="#"><img src={yt} alt="YouTube" className="h-7" /></a>
        </div>

        <div className="pays flex flex-wrap justify-center md:justify-end text-right gap-3 max-w-xs md:max-w-full mx-auto md:mx-0">
            <a href="#"><img src={bancolombia} alt="Bancolombia" className="w-auto h-6 md:h-8 mx-2" /></a>
            <a href="#"><img src={davivienda} alt="Davivienda" className="w-auto h-6 md:h-8 mx-2" /></a>
            <a href="#"><img src={aval} alt="Grupo Aval" className="w-auto h-6 md:h-8 mx-2" /></a>
            <a href="#"><img src={mcard} alt="Mastercard" className="w-auto h-6 md:h-8 mx-2" /></a>
            <a href="#"><img src={nequi} alt="Nequi" className="w-auto h-6 md:h-8 mx-2" /></a>
            <a href="#"><img src={paypal} alt="PayPal" className="w-auto h-6 md:h-8 mx-2" /></a>
            <a href="#"><img src={pse} alt="PSE" className="w-auto h-6 md:h-8 mx-2" /></a>
            <a href="#"><img src={visa} alt="Visa" className="w-auto h-6 md:h-8 mx-2" /></a>
        </div>

      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap justify-around border-t border-white py-5 px-4 md:px-10">
        <div className="footer-column mb-5 md:mb-0 w-full md:w-1/4">
          <h3 className="text-lg mb-3 text-center md:text-left">Nuestra Compañía</h3>
          <ul className="list-none p-0 text-center md:text-left">
            {["Quiénes somos", "Nuestras tiendas", "Nuestras marcas", "Contáctenos", "Trabaja con nosotros", "Tarjeta de crédito Alkosto", "Certificados tributarios", "Rifas", "Fondo de empleados y cooperativas"].map((item, index) => (
              <li key={index} className="mb-2">
                <a href="#" className="text-gray-200 hover:text-gray-600">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column mb-5 md:mb-0 w-full md:w-1/4">
          <h3 className="text-lg mb-3 text-center md:text-left">Compras en línea</h3>
          <ul className="list-none p-0 text-center md:text-left">
            {["Preguntas frecuentes", "Pago seguro", "Métodos de envío", "Medios de pago", "Seguros"].map((item, index) => (
              <li key={index} className="mb-2">
                <a href="#" className="text-gray-200 hover:text-gray-600">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column mb-5 md:mb-0 w-full md:w-1/4">
          <h3 className="text-lg mb-3 text-center md:text-left">Servicios</h3>
          <ul className="list-none p-0 text-center md:text-left">
            {["Instalaciones", "Agendar servicio de instalación", "Garantía extendida", "Garantías y centros de servicios técnico", "Instalación de Llantas", "Consulta tu factura"].map((item, index) => (
              <li key={index} className="mb-2">
                <a href="#" className="text-gray-200 hover:text-gray-600">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column mb-5 md:mb-0 w-full md:w-1/4">
          <h3 className="text-lg mb-3 text-center md:text-left">Políticas</h3>
          <ul className="list-none p-0 text-center md:text-left">
            {["Términos y condiciones del canal digital", "Contrato de compraventa en línea", "Política de privacidad", "Solicitud tratamiento de datos personales", "Política de cookies", "Política de cambios y devoluciones", "Código de ética", "Manual de normas SST para Terceros", "Línea ética", "Superintendencia de Industria y Comercio - SIC"].map((item, index) => (
              <li key={index} className="mb-2">
                <a href="#" className="text-gray-200 hover:text-gray-600">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
