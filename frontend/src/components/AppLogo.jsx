// src/components/AppLogo.jsx
import React from 'react';
import logoImg from '../assets/images/logo.png'; // Asegúrate de que la ruta sea correcta

export default function AppLogo({ className }) {
  return (
    <img
      src={logoImg}
      alt="Keep on Tracking Logo"
      className={className}
    />
  );
}