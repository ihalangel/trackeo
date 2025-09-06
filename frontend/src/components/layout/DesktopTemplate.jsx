// src/components/layout/DesktopTemplate.jsx

import React from "react";
import NavbarDesktop from "../navBarDesktop/navBarDesktop"; // Crea este componente para desktop
import BackgroundImage from "./../BackgroundImage.jsx";

export default function DesktopTemplate({ children }) {
  return (
    <div className="relative  min-h-screen w-screen">
      {/*<div className="relative   mx-auto px-8 py-6">*/}

      {/* Fondo */}
      <BackgroundImage />

      {/* Navbar para desktop, visible solo en pantallas medianas hacia arriba */}
      <div className="hidden md:block">
        <NavbarDesktop />
      </div>

      {/* Contenido principal */}
      <main className="relative z-10 max-w-6xl mx-auto p-8">{children}</main>
    </div>
  );
}
