import React from 'react'

export default function FormLogin({ onRegisterClick }) {
  return (
    <div className="flex flex-col items-center p-6">
      <button
        className="bg-green-500 hover:bg-green-700 text-white rounded-2xl shadow-md py-3 w-4/5 text-lg font-semibold"
        type="submit"
      >
        Iniciar Sesión
      </button>
      <button 
        onClick={onRegisterClick}
        className="text-gray-500 hover:text-blue-900 text-sm mt-4"
        type="button"
      >
        ¿No tienes cuenta? Regístrate
      </button>
    </div>
  )
}
