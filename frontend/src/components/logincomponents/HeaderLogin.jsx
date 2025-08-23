import React from 'react'

export default function HeaderLogin() {
  return (
    <header className="bg-white flex flex-col items-center p-6">
      <div className="w-16 h-16 rounded-full bg-blue-900 flex items-center justify-center mb-4">
        {/* Puedes cambiar este ícono por uno SVG o imagen corporativa */}
        <span className="text-white text-2xl font-bold">C</span>
      </div>
      <h1 className="text-blue-900 font-bold text-2xl text-center">
        Container & Yard Management
      </h1>
      <p className="text-gray-500 text-sm text-center max-w-xs mt-2">
        La solución corporativa para la gestión eficiente de contenedores y yardas.
      </p>
    </header>
  )
}
