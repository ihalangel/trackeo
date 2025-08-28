import React from 'react';
import AppLogo from './../../components/AppLogo.jsx';
import { useIsMobile } from "./../../hooks/useIsMobile.jsx";

// Icono SVG de un documento.
const DocumentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-emerald-500 mx-auto mb-4 transition-all duration-300 hover:brightness-125"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

export default function LandingContent() {
  const isMobile = useIsMobile();

  return (
    <div className={`text-white p-6 ${isMobile ? 'text-center' : 'text-center'}`}>
      <div className={`${isMobile ? 'max-w-md mx-auto' : 'max-w-xl mx-auto mt-8'}`}>
        {isMobile && (
          <div className="mb-6 flex justify-center">
            {/* Logo para la vista móvil */}
            <AppLogo className="h-20 w-auto" />
          </div>
        )}
        <h1 className="text-4xl font-bold mb-4 md:text-5xl">
          {isMobile ? "Container and Yard" : "Container Yard Tor Management"}
        </h1>
        <p className="text-gray-200 mb-8 text-sm md:text-base">
          {isMobile
            ? "Control eficiente de la logística de contenedores y la gestión de la carga"
            : "Gestión de contenedores profesional y eficiente para una logística portuaria sin contratiempos."}
        </p>
        {/* Ícono para móvil, ahora posicionado después del texto */}
        {isMobile && <DocumentIcon />}
      </div>
    </div>
  );
}