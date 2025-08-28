// import React from 'react'
// import puertoImg from './../assets/images/backgroundLogin.png'
// import LoginFlow from './../components/logincomponents/LoginButton.jsx'
// import NavbarMobile from './../components/navBarCel/navBarCel.jsx'

// export default function LandingPage() {
//   const handleRegisterClick = () => {
//     alert('Redirigir a registro')
//   }

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-gray-100">
//       {/* Background image */}
//       <div className="absolute inset-0">
//         <img
//           src={puertoImg}
//           alt="Container yard background"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 w-full max-w-md p-6 text-center text-white">
//         {/* Logo/Icon */}
//         <div className="flex justify-center mb-6">
//           <div className="bg-white/20 rounded-full p-4">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//               className="w-10 h-10"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M12 2v20m0-20l-6 6m6-6l6 6M6 12h12"
//               />
//             </svg>
//           </div>
//         </div>

//         {/* Title + Subtitle */}
//         <h1 className="text-2xl md:text-3xl font-bold mb-2">
//           Gestión de Contenedores
//         </h1>
//         <p className="text-gray-200 mb-8 text-sm md:text-base">
//           Control eficiente de yardas y logística portuaria.
//         </p>

//         {/* Buttons */}
//         <div className="space-y-4">
//          <LoginFlow/>
//         </div>
//       </div>

//       {/* Barra de navegación móvil */}
//       <NavbarMobile />
//     </div>
//   );
// }


// src/pages/LandingPage.jsx

// import React from "react";
// import BaseTemplate from "../components/layout/BaseTemplate";
// import LoginFlow from "../components/logincomponents/LoginButton";
// import LandingContent from"./Landing/LandingContent.jsx";

// export default function LandingPage() {
//   return (
//     <BaseTemplate>
//       <LandingContent/>
//         <LoginFlow />
      
//     </BaseTemplate>
//   );
// }


import React from "react";
import BaseTemplate from "../components/layout/BaseTemplate";
import LoginFlow from "../components/logincomponents/LoginButton";
import LandingContent from "./Landing/LandingContent.jsx";
import { Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext.jsx";

export default function LandingPage() {
  const { user } = useAuthContext();

  return (
    <BaseTemplate>
      {!user && <LandingContent />}
      {!user && <LoginFlow />}
      <Outlet /> {/* Aquí se renderizan las páginas hijas, como DriverDashboard */}
    </BaseTemplate>
  );
}
