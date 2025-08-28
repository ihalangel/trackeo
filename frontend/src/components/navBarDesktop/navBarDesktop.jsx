// import React from 'react';
// import AppLogo from './../AppLogo.jsx';
// import { useAuthContext } from './../../context/AuthContext.jsx';

// export default function NavbarDesktop() {
//   const { user, logout } = useAuthContext();

//   return (
//     <nav className="bg-blue-900 text-white fixed top-0 left-0 w-full z-50 shadow-md">
//       <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
//         {/* Logo */}
//         <AppLogo className="h-14 w-auto" />

//         {/* Navigation links */}
//         <ul className="hidden md:flex space-x-8 font-medium">
//           <li><a href="#" className="hover:text-gray-300">Inicio</a></li>
//           <li><a href="#" className="hover:text-gray-300">Contenedores</a></li>
//           <li><a href="#" className="hover:text-gray-300">Yardas</a></li>
//           <li><a href="#" className="hover:text-gray-300">Reportes</a></li>
//           <li><a href="#" className="hover:text-gray-300">Contacto</a></li>
//         </ul>

//         {/* Login or Logout button */}
//         <div className="hidden md:block">
//           {!user ? (
//             <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-semibold transition">
//               Iniciar sesión
//             </button>
//           ) : (
//             <button
//               onClick={logout}
//               className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-semibold transition"
//               aria-label="Cerrar sesión"
//             >
//               {/* Puedes poner un ícono de 'off' aquí, o texto */}
//               Cerrar sesión
//             </button>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }






import React from 'react';
import AppLogo from './../AppLogo.jsx';
import { useAuthContext } from './../../context/AuthContext.jsx';

export default function NavbarDesktop() {
  const { user, logout } = useAuthContext();

  // const renderLinksByRole = () => {
  //   if (!user) return null;

  //   if (user.rol === 'driver') {
  //     return (
  //       <>
  //         <li><a href="/driver/dashboard" className="hover:text-gray-300">Dashboard</a></li>
  //         <li><a href="/driver/containers" className="hover:text-gray-300">Contenedores</a></li>
  //         <li><a href="/driver/yards" className="hover:text-gray-300">Yardas</a></li>
  //         <li><a href="/driver/reports" className="hover:text-gray-300">Reportes</a></li>
  //         <li><a href="/driver/contact" className="hover:text-gray-300">Contacto</a></li>
  //       </>
  //     );
  //   }

  //   // Otros roles se pueden agregar aquí en el futuro

  //   return null;
  // };

const renderLinksByRole = () => {
  if (!user || !user.rol) {
    return (
      <>
        <li><a href="/login" className="hover:text-gray-300">Iniciar sesión</a></li>
        <li><a href="/about" className="hover:text-gray-300">Acerca de</a></li>
      </>
    );
  }
  
  if (user.rol === 'driver') {
    return (
      <>
        <li><a href="/driver/dashboard" className="hover:text-gray-300">Dashboard</a></li>
        <li><a href="/driver/containers" className="hover:text-gray-300">Contenedores</a></li>
        <li><a href="/driver/yards" className="hover:text-gray-300">Yardas</a></li>
        <li><a href="/driver/reports" className="hover:text-gray-300">Reportes</a></li>
        <li><a href="/driver/contact" className="hover:text-gray-300">Contacto</a></li>
      </>
    );
  }
  
  // Aquí puedes agregar handlers para otros roles
  
  return null;
};

  return (
    <nav className="bg-blue-900 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <AppLogo className="h-14 w-auto" />

        {/* Navigation links */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {renderLinksByRole()}
        </ul>

        {/* Login or Logout button */}
        <div className="hidden md:block">
          {!user ? (
            <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded font-semibold transition">
              Iniciar sesión
            </button>
          ) : (
            <button
              onClick={logout}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-semibold transition"
              aria-label="Cerrar sesión"
            >
              Cerrar sesión
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}



