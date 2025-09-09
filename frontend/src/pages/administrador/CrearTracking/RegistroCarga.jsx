// import React from "react";
// import { TrackingProvider, useTracking } from "./../../../context/Dasboards/TrackingContextAdmin.jsx";
// import DatosBasicos from "./RegistroCarga/DatosBasicos";
// import Ubicaciones from "./RegistroCarga/Ubicaciones";
// import NotasConfirmacion from "./RegistroCarga/NotasConfirmacion";

// export default function RegistroCargaWrapper({ cargaInicial, onGuardar, onCancelar }) {
//   return (
//     <TrackingProvider cargaInicial={cargaInicial} onGuardar={onGuardar} onCancelar={onCancelar}>
//       <RegistroCarga />
//     </TrackingProvider>
//   );
// }

// function RegistroCarga() {
//   const {
//        form,
//         setForm,
//         lugares,
//         setLugares,
//         errores,
//         setErrores,
//         paso,
//         setPaso,
//         tiposCarga,
//         estadosCarga,
//         accionesUbicacion,
//         conductoresEjemplo,
//         handleChange,
//         handleUbicacionChange,
//         agregarUbicacion,
//         quitarUbicacion,
//         toggleGeoObligatoria,
//         siguiente,
//         anterior,
//         guardar,
//         cancelar,
//   } = useTracking();

//   return (
//     <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16, marginBottom: 20, fontFamily: "Arial, sans-serif" }}>
//       {paso === 1 && (
//         <DatosBasicos
//           form={form}
//           onChange={handleChange}
//           errores={errores}
//           tiposCarga={tiposCarga}
//           conductores={conductoresEjemplo}
//         />
//       )}
//       {paso === 2 && (
//         <Ubicaciones
//           ubicaciones={form.ubicaciones}
//           onUbicacionChange={handleUbicacionChange}
//           agregarUbicacion={agregarUbicacion}
//           quitarUbicacion={quitarUbicacion}
//           toggleGeoObligatoria={toggleGeoObligatoria}
//           errores={errores}
//           lugares={lugares}
//           accionesUbicacion={accionesUbicacion}
//         />
//       )}
//       {paso === 3 && (
//         <NotasConfirmacion
//           notas={form.notas}
//           onNotasChange={value => setForm(f => ({ ...f, notas: value }))}
//           form={form}
//         />
//       )}
//       <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
//         {paso > 1 ? (
//           <button type="button" onClick={anterior} style={{/* styling */}}>Anterior</button>
//         ) : (
//           <button type="button" onClick={cancelar} style={{/* styling */}}>Cancelar</button>
//         )}
//         {paso < 3 ? (
//           <button type="button" onClick={siguiente} style={{/* styling */}}>Siguiente</button>
//         ) : (
//           <button type="button" onClick={guardar} style={{/* styling */}}>Guardar carga</button>
//         )}
//       </div>
//     </div>
//   );
// }




import React from "react";
import { TrackingProvider, useTracking } from "./../../../context/Dasboards/TrackingContextAdmin.jsx";
import DatosBasicos from "./RegistroCarga/DatosBasicos";
import Ubicaciones from "./RegistroCarga/Ubicaciones";
import NotasConfirmacion from "./RegistroCarga/NotasConfirmacion";

// El wrapper coloca el provider SOLO alrededor del formulario tracking
export default function RegistroCargaWrapper({ cargaInicial, onGuardar, onCancelar }) {
  return (
    <TrackingProvider cargaInicial={cargaInicial} onGuardar={onGuardar} onCancelar={onCancelar}>
      <RegistroCarga />
    </TrackingProvider>
  );
}

function RegistroCarga() {
  const {
    paso,
    siguiente,
    anterior,
    guardar,
    cancelar,
  } = useTracking();

  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: 8,
      padding: 16,
      marginBottom: 20,
      fontFamily: "Arial, sans-serif"
    }}>
      {paso === 1 && <DatosBasicos />}
      {paso === 2 && <Ubicaciones />}
      {paso === 3 && <NotasConfirmacion />}

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
        {paso > 1 ? (
          <button type="button" onClick={anterior}>Anterior</button>
        ) : (
          <button type="button" onClick={cancelar}>Cancelar</button>
        )}
        {paso < 3 ? (
          <button type="button" onClick={siguiente}>Siguiente</button>
        ) : (
          <button type="button" onClick={guardar}>Guardar carga</button>
        )}
      </div>
    </div>
  );
}
