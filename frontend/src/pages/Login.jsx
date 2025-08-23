// import { useState } from "react";

// export default function Home() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log("Login con:", email, password);
//     // Aquí iría la llamada a la API
//   };

//   return (
// <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
//   <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 max-w-md w-full">
//     <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
//       Control de Yardas & Contenedores
//     </h1>
//     <form className="space-y-4">
//       <input
//         type="email"
//         placeholder="tu@email.com"
//         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
//       />
//       <input
//         type="password"
//         placeholder="••••••••"
//         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
//       />
//       <button
//         type="submit"
//         className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition"
//       >
//         Iniciar Sesión
//       </button>
//     </form>
//     <p className="text-center text-gray-500 mt-4">
//       ¿No tienes cuenta?{" "}
//       <a href="/register" className="text-green-500 font-semibold hover:underline">
//         Regístrate aquí
//       </a>
//     </p>
//   </div>
// </div>

//   );
// }




import React from 'react'
import HeaderLogin from '../components/logincomponents/HeaderLogin.jsx'
import FormLogin from '../components/logincomponents/FormLogin.jsx'
import FooterLogin from '../components/logincomponents/FooterLogin.jsx'
import ImageLogin from '../components/logincomponents/ImageLogin.jsx'

export default function LoginPage() {
  const handleRegisterClick = () => {
    alert('Redirigir a registro')
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="sm:hidden">
        <HeaderLogin />
      </header>

      {/* Main content */}
      <main className="flex-grow flex flex-col sm:flex-row">
        {/* Left side (form + header tablet+desktop) */}
        <section className="flex flex-col items-center justify-center sm:w-2/5 p-6">
          <div className="hidden sm:block w-full">
            <HeaderLogin />
          </div>
          <div className="w-full max-w-md mt-6">
            <FormLogin onRegisterClick={handleRegisterClick} />
          </div>
        </section>

        {/* Right side (imagen tablet+desktop y móvil abajo) */}
        <section className="sm:w-3/5">
          <ImageLogin />
        </section>
      </main>

      {/* Footer */}
      <FooterLogin />
    </div>
  )
}
