import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/LandingPage.jsx'
import Login from '../pages/Login.jsx'
import Driver from '../pages/Driver.jsx'
import Comprobador from '../pages/Comprobador.jsx'
import Master from '../pages/Master.jsx'
import SuperAdmin from '../pages/SuperAdmin.jsx'
import NotFound from '../pages/NotFound.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}>
        <Route path="driver" element={<Driver />} />
        <Route path="comprobador" element={<Comprobador />} />
        <Route path="master" element={<Master />} />
        <Route path="superadmin" element={<SuperAdmin />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
