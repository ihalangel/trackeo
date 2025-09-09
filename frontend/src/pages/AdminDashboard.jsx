// import React, { useState } from "react";
// import CrearTrackingModal from './administrador/CrearTrakingModals.jsx';
// import ConsultarCargasModal from "./administrador/ConsultarCargasModal.jsx";
// import AdministrarUsuariosModal from "./administrador/AdministrarUsuariosModal.jsx";

// const AdminDashboard = () => {
//   const [modalAbierto, setModalAbierto] = useState(null);

//   const abrirModal = (modal) => setModalAbierto(modal);
//   const cerrarModal = () => setModalAbierto(null);

//   return (
//     <div className="p-6 max-w-4xl mx-auto text-center font-sans">
//       <h1 className="text-3xl font-bold mb-8 text-blue-900">Panel Administrador</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//         <button
//           onClick={() => abrirModal("crearTracking")}
//           className="bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold shadow"
//         >
//           Crear / Modificar Tracking / Asignar Carga
//         </button>
//         <button
//           onClick={() => abrirModal("consultarCargas")}
//           className="bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold shadow"
//         >
//           Consultar Cargas por Yarda
//         </button>
//         <button
//           onClick={() => abrirModal("administrarUsuarios")}
//           className="bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg font-semibold shadow"
//         >
//           Administrar Usuarios / Yardas / Créditos
//         </button>
//       </div>

//       {modalAbierto === "crearTracking" && (
//         <CrearTrackingModal onClose={cerrarModal} />
//       )}
//       {modalAbierto === "consultarCargas" && (
//         <ConsultarCargasModal onClose={cerrarModal} />
//       )}
//       {modalAbierto === "administrarUsuarios" && (
//         <AdministrarUsuariosModal onClose={cerrarModal} />
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;





import React from "react";
import BaseTemplate from "../components/layout/BaseTemplate";
import AdminContent from "./administrador/AdminContent.jsx";

const AdminDashboard = ({ user }) => {
  console.log("DriverContent render: user", user);
  return (
    <BaseTemplate>
      <AdminContent></AdminContent>
    </BaseTemplate>
  );
};
export default AdminDashboard;