// import React from "react";
// // import { useTracking } from "./../../../../context/Dasboards/TrackingContextAdmin.jsx";
// import { TrackingProvider, useTracking } from "./../../../../context/TrackingContext/";


// export default function CamposTipoCarga() {
//   const {
//     tiposCarga,
//     form,
//     camposTipoCarga,
//     handleCamposTipoCargaChange,
//     errores,
//   } = useTracking();

//   const tipo = form.tipo;

//   // Render campos según tipo de carga
//   const renderCampos = () => {
//     switch (tipo) {
//       case "Contenedor con chassis":
//         return (
//           <>
//             <CampoTexto
//               label="Color del Chassis"
//               name="colorChassis"
//               value={camposTipoCarga.colorChassis}
//               onChange={handleCamposTipoCargaChange}
//               error={errores.colorChassis}
//             />
//             <CampoTexto
//               label="Serial del Chassis"
//               name="serialChassis"
//               value={camposTipoCarga.serialChassis}
//               onChange={handleCamposTipoCargaChange}
//               error={errores.serialChassis}
//             />
//             <CampoTexto
//               label="Color del Contenedor"
//               name="colorContainer"
//               value={camposTipoCarga.colorContainer}
//               onChange={handleCamposTipoCargaChange}
//               error={errores.colorContainer}
//             />
//             <CampoTexto
//               label="Número de Sello"
//               name="numeroSello"
//               value={camposTipoCarga.numeroSello}
//               onChange={handleCamposTipoCargaChange}
//               error={errores.numeroSello}
//             />
//             <CampoTexto
//               label="Número de Pink Lock"
//               name="numeroPinkLock"
//               value={camposTipoCarga.numeroPinkLock}
//               onChange={handleCamposTipoCargaChange}
//               error={errores.numeroPinkLock}
//             />
//           </>
//         );
//       case "Chassis":
//         return (
//           <>
//             <CampoTexto
//               label="Color del Chassis"
//               name="colorChassis"
//               value={camposTipoCarga.colorChassis}
//               onChange={handleCamposTipoCargaChange}
//               error={errores.colorChassis}
//             />
//             <CampoTexto
//               label="Serial del Chassis"
//               name="serialChassis"
//               value={camposTipoCarga.serialChassis}
//               onChange={handleCamposTipoCargaChange}
//               error={errores.serialChassis}
//             />
//           </>
//         );
//       case "Trailer":
//         return (
//           <>
//             <CampoSelect
//               label="Tipo de Trailer"
//               name="tipoTrailer"
//               value={camposTipoCarga.tipoTrailer}
//               onChange={handleCamposTipoCargaChange}
//               options={["Flatbed", "Refrigerado", "Tanker", "Dry Van"]}
//               error={errores.tipoTrailer}
//             />
//             <CampoTexto
//               label="Número de Trailer"
//               name="numeroTrailer"
//               value={camposTipoCarga.numeroTrailer}
//               onChange={handleCamposTipoCargaChange}
//               error={errores.numeroTrailer}
//             />
//             <CampoSelect
//               label="Estado del Trailer"
//               name="estadoTrailer"
//               value={camposTipoCarga.estadoTrailer}
//               onChange={handleCamposTipoCargaChange}
//               options={["Disponible", "En Uso", "En Mantenimiento"]}
//               error={errores.estadoTrailer}
//             />
//           </>
//         );
//       case "Box truck":
//         return (
//           <>
//             <CampoNumero
//               label="Largo (m)"
//               name="dimLargo"
//               value={camposTipoCarga.dimLargo}
//               onChange={handleCamposTipoCargaChange}
//               error={errores.dimLargo}
//             />
//             <CampoNumero
//               label="Ancho (m)"
//               name="dimAncho"
//               value={camposTipoCarga.dimAncho}
//               onChange={handleCamposTipoCargaChange}
//               error={errores.dimAncho}
//             />
//             <CampoNumero
//               label="Alto (m)"
//               name="dimAlto"
//               value={camposTipoCarga.dimAlto}
//               onChange={handleCamposTipoCargaChange}
//               error={errores.dimAlto}
//             />
//             <CampoSelect
//               label="Tipo Box Truck"
//               name="tipoBoxTruck"
//               value={camposTipoCarga.tipoBoxTruck}
//               onChange={handleCamposTipoCargaChange}
//               options={["Seco", "Refrigerado", "Isotermo"]}
//               error={errores.tipoBoxTruck}
//             />
//             <CampoTexto
//               label="Número Box Truck"
//               name="numeroBoxTruck"
//               value={camposTipoCarga.numeroBoxTruck}
//               onChange={handleCamposTipoCargaChange}
//               error={errores.numeroBoxTruck}
//             />
//           </>
//         );
//       default:
//         return <p>Seleccione un tipo de carga para mostrar campos específicos.</p>;
//     }
//   };

//   return (
//     <div>
//       <h3>Campos específicos del tipo de carga</h3>
//       {renderCampos()}
//     </div>
//   );
// }

// // Componentes auxiliares para inputs controlados y validaciones

// function CampoTexto({ label, name, value, onChange, error }) {
//   return (
//     <label style={{ display: "block", marginBottom: 12, fontWeight: "600" }}>
//       {label}
//       <input
//         type="text"
//         name={name}
//         value={value}
//         onChange={(e) => onChange(name, e.target.value)}
//         style={{
//           marginTop: 4,
//           width: "100%",
//           padding: 8,
//           borderRadius: 4,
//           border: error ? "1px solid #dc2626" : "1px solid #ccc",
//           outline: error ? "none" : undefined,
//         }}
//         aria-invalid={error ? "true" : "false"}
//       />
//       {error && <p style={{ color: "#dc2626", marginTop: 0, marginBottom: 8, fontSize: 14 }}>{error}</p>}
//     </label>
//   );
// }

// function CampoNumero({ label, name, value, onChange, error }) {
//   return (
//     <label style={{ display: "block", marginBottom: 12, fontWeight: "600" }}>
//       {label}
//       <input
//         type="number"
//         min="0"
//         step="any"
//         name={name}
//         value={value}
//         onChange={(e) => onChange(name, e.target.value)}
//         style={{
//           marginTop: 4,
//           width: "100%",
//           padding: 8,
//           borderRadius: 4,
//           border: error ? "1px solid #dc2626" : "1px solid #ccc",
//           outline: error ? "none" : undefined,
//         }}
//         aria-invalid={error ? "true" : "false"}
//       />
//       {error && <p style={{ color: "#dc2626", marginTop: 0, marginBottom: 8, fontSize: 14 }}>{error}</p>}
//     </label>
//   );
// }

// function CampoSelect({ label, name, value, onChange, options, error }) {
//   return (
//     <label style={{ display: "block", marginBottom: 12, fontWeight: "600" }}>
//       {label}
//       <select
//         name={name}
//         value={value}
//         onChange={(e) => onChange(name, e.target.value)}
//         style={{
//           marginTop: 4,
//           width: "100%",
//           padding: 8,
//           borderRadius: 4,
//           border: error ? "1px solid #dc2626" : "1px solid #ccc",
//           outline: error ? "none" : undefined,
//         }}
//         aria-invalid={error ? "true" : "false"}
//       >
//         <option value="">Seleccione...</option>
//         {options.map((opt) => (
//           <option key={opt} value={opt}>
//             {opt}
//           </option>
//         ))}
//       </select>
//       {error && <p style={{ color: "#dc2626", marginTop: 0, marginBottom: 8, fontSize: 14 }}>{error}</p>}
//     </label>
//   );
// }


























































import React from "react";
import { useTracking } from "./../../../../context/TrackingContext/";

export default function CamposTipoCarga() {
  const {
    tiposCarga,
    camposTipoCarga,
    handleCamposTipoCargaChange,
    errores,
    indiceCargaActual,
  } = useTracking();

  if (!camposTipoCarga || camposTipoCarga.length === 0) {
    return <p>No hay cargas disponibles para editar.</p>;
  }

  const cargaActual = camposTipoCarga[indiceCargaActual];
  const tipo = cargaActual.tipo;

  // Función que maneja el cambio del tipo en esta carga específica
  const onTipoChange = (e) => {
    const nuevoTipo = e.target.value;
    handleCamposTipoCargaChange("tipo", nuevoTipo);
  };

  const renderCampos = () => {
    switch (tipo) {
      case "Contenedor con chassis":
        return (
          <>
            <CampoTexto
              label="Color del Chassis"
              name="colorChassis"
              value={cargaActual.colorChassis}
              onChange={handleCamposTipoCargaChange}
              error={errores.colorChassis}
            />
            <CampoTexto
              label="Serial del Chassis"
              name="serialChassis"
              value={cargaActual.serialChassis}
              onChange={handleCamposTipoCargaChange}
              error={errores.serialChassis}
            />
            <CampoTexto
              label="Color del Contenedor"
              name="colorContainer"
              value={cargaActual.colorContainer}
              onChange={handleCamposTipoCargaChange}
              error={errores.colorContainer}
            />
            <CampoTexto
              label="Número de Sello"
              name="numeroSello"
              value={cargaActual.numeroSello}
              onChange={handleCamposTipoCargaChange}
              error={errores.numeroSello}
            />
            <CampoTexto
              label="Número de Pink Lock"
              name="numeroPinkLock"
              value={cargaActual.numeroPinkLock}
              onChange={handleCamposTipoCargaChange}
              error={errores.numeroPinkLock}
            />
          </>
        );
      case "Chassis":
        return (
          <>
            <CampoTexto
              label="Color del Chassis"
              name="colorChassis"
              value={cargaActual.colorChassis}
              onChange={handleCamposTipoCargaChange}
              error={errores.colorChassis}
            />
            <CampoTexto
              label="Serial del Chassis"
              name="serialChassis"
              value={cargaActual.serialChassis}
              onChange={handleCamposTipoCargaChange}
              error={errores.serialChassis}
            />
          </>
        );
      case "Trailer":
        return (
          <>
            <CampoSelect
              label="Tipo de Trailer"
              name="tipoTrailer"
              value={cargaActual.tipoTrailer}
              onChange={handleCamposTipoCargaChange}
              options={["Flatbed", "Refrigerado", "Tanker", "Dry Van"]}
              error={errores.tipoTrailer}
            />
            <CampoTexto
              label="Número de Trailer"
              name="numeroTrailer"
              value={cargaActual.numeroTrailer}
              onChange={handleCamposTipoCargaChange}
              error={errores.numeroTrailer}
            />
            <CampoSelect
              label="Estado del Trailer"
              name="estadoTrailer"
              value={cargaActual.estadoTrailer}
              onChange={handleCamposTipoCargaChange}
              options={["Disponible", "En Uso", "En Mantenimiento"]}
              error={errores.estadoTrailer}
            />
          </>
        );
      case "Box truck":
        return (
          <>
            <CampoNumero
              label="Largo (m)"
              name="dimLargo"
              value={cargaActual.dimLargo}
              onChange={handleCamposTipoCargaChange}
              error={errores.dimLargo}
            />
            <CampoNumero
              label="Ancho (m)"
              name="dimAncho"
              value={cargaActual.dimAncho}
              onChange={handleCamposTipoCargaChange}
              error={errores.dimAncho}
            />
            <CampoNumero
              label="Alto (m)"
              name="dimAlto"
              value={cargaActual.dimAlto}
              onChange={handleCamposTipoCargaChange}
              error={errores.dimAlto}
            />
            <CampoSelect
              label="Tipo Box Truck"
              name="tipoBoxTruck"
              value={cargaActual.tipoBoxTruck}
              onChange={handleCamposTipoCargaChange}
              options={["Seco", "Refrigerado", "Isotermo"]}
              error={errores.tipoBoxTruck}
            />
            <CampoTexto
              label="Número Box Truck"
              name="numeroBoxTruck"
              value={cargaActual.numeroBoxTruck}
              onChange={handleCamposTipoCargaChange}
              error={errores.numeroBoxTruck}
            />
          </>
        );
      default:
        return <p>Seleccione un tipo de carga para mostrar campos específicos.</p>;
    }
  };

  return (
    <div>
      <h3>Campos específicos del tipo de carga</h3>

      {/* Selector tipo carga para la carga actual */}
      <label style={{ marginBottom: 12, fontWeight: "600", display: "block" }}>
        Tipo de carga:
        <select value={tipo} onChange={onTipoChange} style={{ marginTop: 4, padding: 8, width: "100%", borderRadius: 4 }}>
          <option value="">Seleccione...</option>
          {tiposCarga.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>

      {renderCampos()}
    </div>
  );
}

// Componentes auxiliares para inputs controlados y validaciones
function CampoTexto({ label, name, value, onChange, error }) {
  return (
    <label style={{ display: "block", marginBottom: 12, fontWeight: "600" }}>
      {label}
      <input
        type="text"
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        style={{
          marginTop: 4,
          width: "100%",
          padding: 8,
          borderRadius: 4,
          border: error ? "1px solid #dc2626" : "1px solid #ccc",
          outline: error ? "none" : undefined,
        }}
        aria-invalid={error ? "true" : "false"}
      />
      {error && <p style={{ color: "#dc2626", marginTop: 0, marginBottom: 8, fontSize: 14 }}>{error}</p>}
    </label>
  );
}

function CampoNumero({ label, name, value, onChange, error }) {
  return (
    <label style={{ display: "block", marginBottom: 12, fontWeight: "600" }}>
      {label}
      <input
        type="number"
        min="0"
        step="any"
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        style={{
          marginTop: 4,
          width: "100%",
          padding: 8,
          borderRadius: 4,
          border: error ? "1px solid #dc2626" : "1px solid #ccc",
          outline: error ? "none" : undefined,
        }}
        aria-invalid={error ? "true" : "false"}
      />
      {error && <p style={{ color: "#dc2626", marginTop: 0, marginBottom: 8, fontSize: 14 }}>{error}</p>}
    </label>
  );
}

function CampoSelect({ label, name, value, onChange, options, error }) {
  return (
    <label style={{ display: "block", marginBottom: 12, fontWeight: "600" }}>
      {label}
      <select
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        style={{
          marginTop: 4,
          width: "100%",
          padding: 8,
          borderRadius: 4,
          border: error ? "1px solid #dc2626" : "1px solid #ccc",
          outline: error ? "none" : undefined,
        }}
        aria-invalid={error ? "true" : "false"}
      >
        <option value="">Seleccione...</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <p style={{ color: "#dc2626", marginTop: 0, marginBottom: 8, fontSize: 14 }}>{error}</p>}
    </label>
  );
}



















