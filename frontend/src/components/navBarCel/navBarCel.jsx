import React, { useState } from 'react';
import { useAuthContext } from './../../context/AuthContext.jsx';

export default function NavbarMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuthContext();

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-blue-900 text-white flex justify-between items-center px-6 py-2 z-50 md:hidden">
      <button
        aria-label="Abrir menú"
        onClick={() => setMenuOpen(!menuOpen)}
        className="focus:outline-none"
      >
        {/* Ícono menú hamburguesa */}
        <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div className="flex items-center space-x-8">
        {/* Aquí podrían ir botones o íconos comunes */}
      </div>

      {/* Menú lateral móvil */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-30 transition-opacity ${menuOpen ? 'block' : 'hidden'}`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`fixed left-0 top-0 h-full w-56 bg-white text-blue-900 shadow-lg z-50 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform`}
      >
        <div className="p-6">
          <button
            className="mb-6 focus:outline-none text-right w-full"
            onClick={() => setMenuOpen(false)}
          >
            Cerrar ✕
          </button>
          {/* Enlaces con control según login */}
          <a href="#" className="block py-2 font-semibold">Dashboard</a>
          <a href="#" className="block py-2">Contenedores</a>
          <a href="#" className="block py-2">Yardas</a>
          <a href="#" className="block py-2">Reportes</a>

          {/* Mostrar botón de salir solo si hay usuario */}
          {user ? (
            <button 
              className="block py-2 text-left w-full font-semibold text-red-600"
              onClick={() => {
                logout();
                setMenuOpen(false);
              }}
            >
              Salir
            </button>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
