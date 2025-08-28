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







import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext.jsx';

const RequireRole = ({ allowedRoles }) => {
  const { user, loading } = useAuthContext();

  if (loading) return <div>Cargando...</div>;

  if (!user) return <Navigate to="/login" />;

  if (!allowedRoles.includes(user.rol)) return <Navigate to="/not-authorized" />;

  return <Outlet />;
};

export default RequireRole;
