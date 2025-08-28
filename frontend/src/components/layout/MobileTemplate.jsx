// src/components/layout/MobileTemplate.jsx

import React from 'react';
import NavbarMobile from '../navBarCel/navBarCel';
import BackgroundImage from "../BackgroundImage";

export default function MobileTemplate({ children }) {
  return (
    <div className="relative min-h-screen w-screen bg-gradient-to-b from-blue-900 to-blue-700">
      <BackgroundImage />
      <div className="relative z-10">
        {children}
      </div>
      <NavbarMobile />
    </div>
  );
}