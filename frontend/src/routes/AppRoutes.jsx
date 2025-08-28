// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import LandingPage from '../pages/LandingPage.jsx'
// import Login from '../pages/Login.jsx'
// import Driver from '../pages/Driver.jsx'
// import Comprobador from '../pages/Comprobador.jsx'
// import Master from '../pages/Master.jsx'
// import SuperAdmin from '../pages/SuperAdmin.jsx'
// import NotFound from '../pages/NotFound.jsx'


// export default function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<LandingPage />}>
//         <Route path="driver" element={<Driver />} />
//         <Route path="comprobador" element={<Comprobador />} />
//         <Route path="master" element={<Master />} />
//         <Route path="superadmin" element={<SuperAdmin />} />
//       </Route>
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   )
// }

























// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import RequireRole from './RequireRole';
// import LandingPage from '../pages/LandingPage.jsx';
// import DriverDashboard from '../pages/DriverDashboard.jsx';
// import Comprobador from '../pages/Comprobador.jsx';
// import Master from '../pages/Master.jsx';
// import SuperAdmin from '../pages/SuperAdmin.jsx';
// import NotFound from '../pages/NotFound.jsx';

// export default function AppRoutes({ user }) {
//   return (
//     <Routes>
//       <Route path="/" element={<LandingPage />}>
//         {/* Ruta para drivers, solo accesible si el rol es driver */}
//         <Route element={<RequireRole user={user} allowedRoles={['driver']} />}>
//           <Route path="driver" element={<DriverDashboard />} />
//         </Route>

//         {/* Ruta para comprobadores */}
//         <Route element={<RequireRole user={user} allowedRoles={['comprobador']} />}>
//           <Route path="comprobador" element={<Comprobador />} />
//         </Route>

//         {/* Ruta para master, aunque use módulos de comprobador */}
//         <Route element={<RequireRole user={user} allowedRoles={['master']} />}>
//           <Route path="master" element={<Master />} />
//         </Route>

//         {/* Ruta para superadmins o similares */}
//         <Route element={<RequireRole user={user} allowedRoles={['super-admin']} />}>
//           <Route path="superadmin" element={<SuperAdmin />} />
//         </Route>

//       </Route>

//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// }










import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext.jsx';
import RequireRole from './RequireRole';
import LandingPage from '../pages/LandingPage.jsx';
import DriverDashboard from '../pages/DriverDashboard.jsx';
import Comprobador from '../pages/Comprobador.jsx';
import Master from '../pages/Master.jsx';
import SuperAdmin from '../pages/SuperAdmin.jsx';
import NotFound from '../pages/NotFound.jsx';

export default function AppRoutes() {
  const { user, loading } = useAuthContext();

  if (loading) return <div>Cargando usuario...</div>;

  return (
    <Routes>
      <Route path="/" element={<LandingPage />}>
        <Route element={<RequireRole allowedRoles={['driver']} />}>
          <Route path="driver" element={<DriverDashboard />} />
        </Route>
        <Route element={<RequireRole allowedRoles={['comprobador']} />}>
          <Route path="comprobador" element={<Comprobador />} />
        </Route>
        <Route element={<RequireRole allowedRoles={['master']} />}>
          <Route path="master" element={<Master />} />
        </Route>
        <Route element={<RequireRole allowedRoles={['super-admin']} />}>
          <Route path="superadmin" element={<SuperAdmin />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}












