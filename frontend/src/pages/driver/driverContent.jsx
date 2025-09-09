// import React from "react";
// import AppLogo from "./../../components/AppLogo.jsx";
// import { useIsMobile } from "./../../hooks/useIsMobile.jsx";
// import { useAuthContext } from "./../../context/AuthContext.jsx"; // IMPORTAR el hook correcto
// // import { FormularioWizardTrackingYarda } from "./../../components/registrarCargaDriver/formRegisCarga.jsx"
// const DocumentIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="h-10 w-10 text-emerald-500 mx-auto mb-4 transition-all duration-300 hover:brightness-125"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//     strokeWidth={1}
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//     />
//   </svg>
// );

// export default function DriverContent() {
//   const isMobile = useIsMobile();
//   const { user } = useAuthContext();

//   const canAcceptLoad = user?.canAcceptLoad;

//   return (
//     <div
//       className={`text-white p-6 ${isMobile ? "text-center" : "text-center"}`}
//     >
//       <div
//         className={`${isMobile ? "max-w-md mx-auto" : "max-w-xl mx-auto mt-8"}`}
//       >
//         {isMobile && (
//           <div className="mb-6 flex justify-center">
//             <AppLogo className="h-20 w-auto" />
//           </div>
//         )}
//         {isMobile && <DocumentIcon />}

//         {/* Bienvenida personalizada */}
//         <p className="text-xl mt-6 mb-6">
//           Bienvenido: <strong>{user?.nombre || "Invitado"}</strong>
//         </p>

//         {/* Botones */}
//         <div className="flex flex-col gap-4 max-w-xs mx-auto">
//           <button className="bg-green-600 hover:bg-green-700 text-white py-3 rounded font-semibold">
//             REGISTRAR CARGA
//           </button>

//           {canAcceptLoad && (
//             <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold">
//               ACEPTAR CARGA
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }




































// import React, { useEffect } from "react";
// import AppLogo from "./../../components/AppLogo.jsx";
// import { useIsMobile } from "./../../hooks/useIsMobile.jsx";
// import { useAuthContext } from "./../../context/AuthContext.jsx";
// import FormularioWizardTrackingYarda from './../../components/registrarCargaDriver/formRegisCarga.jsx';

// const DocumentIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="h-10 w-10 text-emerald-500 mx-auto mb-4 transition-all duration-300 hover:brightness-125"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//     strokeWidth={1}
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//     />
//   </svg>
// );

// export default function DriverContent() {
//   const isMobile = useIsMobile();
//   const { user } = useAuthContext();

//   // Logs para depuración
//   useEffect(() => {
//     console.log("DriverContent: user desde contexto", user);
//   }, [user]);

//   const canAcceptLoad = user?.canAcceptLoad;

//   return (
//     <div
//       className={`text-white p-6 ${isMobile ? "text-center" : "text-center"}`}
//     >
//       <div
//         className={`${isMobile ? "max-w-md mx-auto" : "max-w-xl mx-auto mt-8"}`}
//       >
//         {isMobile && (
//           <div className="mb-6 flex justify-center">
//             <AppLogo className="h-20 w-auto" />
//           </div>
//         )}
//         {isMobile && <DocumentIcon />}

//         {/* Bienvenida personalizada */}
//         <p className="text-xl mt-6 mb-6">
//           Bienvenido: <strong>{user?.nombre || "Invitado"}</strong>
//         </p>

//         {/* Botones */}
//         <div className="flex flex-col gap-4 max-w-xs mx-auto">
//           <button className="bg-green-600 hover:bg-green-700 text-white py-3 rounded font-semibold">
//             REGISTRAR CARGA
//           </button>

//           {canAcceptLoad && (
//             <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold">
//               ACEPTAR CARGA
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
















import React, { useEffect, useState } from "react";
import AppLogo from "./../../components/AppLogo.jsx";
import { useIsMobile } from "./../../hooks/useIsMobile.jsx";
import { useAuthContext } from "./../../context/AuthContext.jsx";
import FormularioWizardTrackingYarda from './../../components/registrarCargaDriver/formRegisCarga.jsx';

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

export default function DriverContent() {
  const isMobile = useIsMobile();
  const { user } = useAuthContext();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    console.log("DriverContent: user desde contexto", user);
  }, [user]);

  const canAcceptLoad = user?.canAcceptLoad;

  return (
    <div className={`text-white p-6 ${isMobile ? "text-center" : "text-center"}`}>
      <div className={`${isMobile ? "max-w-md mx-auto" : "max-w-xl mx-auto mt-8"}`}>
        {isMobile && (
          <div className="mb-6 flex justify-center">
            <AppLogo className="h-20 w-auto" />
          </div>
        )}
        {isMobile && <DocumentIcon />}
        <p className="text-xl mt-6 mb-6">
          Bienvenido: <strong>{user?.nombre || "Invitado"}</strong>
        </p>
        <div className="flex flex-col gap-4 max-w-xs mx-auto">
          <button
            className="bg-green-600 hover:bg-green-700 text-white py-3 rounded font-semibold"
            onClick={() => setShowForm(true)}
          >
            REGISTRAR CARGA
          </button>
          {canAcceptLoad && (
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold">
              ACEPTAR CARGA
            </button>
          )}
        </div>
        {/* Mostrar formulario solo si showForm es true */}
        {showForm && <FormularioWizardTrackingYarda />}
      </div>
    </div>
  );
}















































































