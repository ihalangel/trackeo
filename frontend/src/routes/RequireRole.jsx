// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';

// const RequireRole = ({ user, allowedRoles }) => {
//   if (!user) {
//     // No está autenticado, redirige al login
//     return <Navigate to="/login" />;
//   }

//   if (!allowedRoles.includes(user.rol)) {
//     // No tiene permiso para esta ruta
//     return <Navigate to="/not-authorized" />;
//   }

//   // Si pasa validaciones, muestra las rutas hijas (Outlet)
//   return <Outlet />;
// };

// export default RequireRole;







// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import { useAuthContext } from '../context/AuthContext.jsx';

// const RequireRole = ({ allowedRoles }) => {
//   const { user, loading } = useAuthContext();

//   if (loading) return <div>Cargando...</div>;

//   if (!user) return <Navigate to="/login" />;

//   if (!allowedRoles.includes(user.rol)) return <Navigate to="/not-authorized" />;

//   return <Outlet />;
// };

// // export default RequireRole;



// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import { useAuthContext } from '../context/AuthContext.jsx';



// const RequireRole = ({ allowedRoles }) => {
//   const { user, loading } = useAuthContext();

//   if (loading) return <div>Cargando...</div>;

//   if (!user) return <Navigate to="/login" replace />;

//   if (!allowedRoles.includes(user.rol)) return <Navigate to="/not-authorized" replace />;

//   return <Outlet />;
// };


import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext.jsx';

const RequireRole = ({ allowedRoles }) => {
  const { user, loading } = useAuthContext();
  const location = useLocation();

  // Mientras se carga el estado de usuario, no mostrar nada para evitar redirecciones prematuras.
  if (loading) return <div>Cargando...</div>;

  // Si no hay usuario autenticado, redirigir a login, guardando la ruta actual en 'state' para volver tras login.
  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;

  // Si el usuario no tiene rol permitido, redirigir a página no autorizada.
  if (!allowedRoles.includes(user.rol)) return <Navigate to="/not-authorized" replace />;

console.log("RequireRole: loading", loading);
console.log("RequireRole: user", user);
console.log("RequireRole: allowedRoles", allowedRoles);
console.log("RequireRole: ruta actual", location.pathname);

  // Usuario autenticado y autorizado, renderizar ruta hija.
  return <Outlet />;
};

export default RequireRole;


