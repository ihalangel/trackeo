// import React from "react";

// export default function DatosBasicos({ form, onChange, errores, tiposCarga, conductores }) {
//   return (
//     <>
//       <label style={{ display: "block", marginBottom: 8, fontWeight: "600" }}>
//         Tracking:
//         <input
//           type="text"
//           name="tracking"
//           value={form.tracking}
//           onChange={onChange}
//           style={{
//             marginTop: 4,
//             marginBottom: errores.tracking ? 4 : 12,
//             width: "100%",
//             padding: 8,
//             borderRadius: 4,
//             border: errores.tracking ? "1px solid #dc2626" : "1px solid #ccc",
//             outline: errores.tracking ? "none" : undefined,
//           }}
//           aria-invalid={errores.tracking ? "true" : "false"}
//            />
//       </label>
//       {errores.tracking && <p style={{ color: "#dc2626", marginTop: 0, marginBottom: 8, fontSize: 14 }}>{errores.tracking}</p>}

//       <label style={{ display: "block", marginBottom: 8, fontWeight: "600" }}>
//         Tipo de carga:
//         <select
//           name="tipo"
//           value={form.tipo}
//           onChange={onChange}
//           style={{
//             marginTop: 4,
//             width: "100%",
//             padding: 8,
//             borderRadius: 4,
//             border: errores.tipo ? "1px solid #dc2626" : "1px solid #ccc",
//             marginBottom: errores.tipo ? 4 : 12,
//             outline: errores.tipo ? "none" : undefined,
//           }}
//           aria-invalid={errores.tipo ? "true" : "false"}
//         >
//           <option value="">Selecciona tipo</option>
//           {tiposCarga.map(t => (
//             <option key={t} value={t}>{t}</option>
//           ))}
//         </select>
//       </label>
//       {errores.tipo && <p style={{ color: "#dc2626", marginTop: 0, marginBottom: 8, fontSize: 14 }}>{errores.tipo}</p>}

//       <label style={{ marginTop: 16, fontWeight: "600" }}>
//         Conductor asignado:
//         <select
//           name="conductor"
//           value={form.conductor}
//           onChange={onChange}
//           style={{ marginTop: 4, width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
//         >
//           <option value="">No asignado</option>
//           {conductores.map(c => (
//             <option key={c} value={c}>{c}</option>
//           ))}
//         </select>
//       </label>
//     </>
//   );
// }






import React from "react";
import { useTracking } from "./../../../../context/Dasboards/TrackingContextAdmin.jsx";

export default function DatosBasicos() {
  const { form, errores, tiposCarga, conductoresEjemplo, handleChange } = useTracking();

  return (
    <>
      <label style={{ display: "block", marginBottom: 8, fontWeight: "600" }}>
        Tracking:
        <input
          type="text"
          name="tracking"
          value={form.tracking}
          onChange={handleChange}
          style={{
            marginTop: 4,
            marginBottom: errores.tracking ? 4 : 12,
            width: "100%",
            padding: 8,
            borderRadius: 4,
            border: errores.tracking ? "1px solid #dc2626" : "1px solid #ccc",
            outline: errores.tracking ? "none" : undefined,
          }}
          aria-invalid={errores.tracking ? "true" : "false"}
        />
      </label>
      {errores.tracking && (
        <p style={{ color: "#dc2626", marginTop: 0, marginBottom: 8, fontSize: 14 }}>
          {errores.tracking}
        </p>
      )}
      <label style={{ display: "block", marginBottom: 8, fontWeight: "600" }}>
        Tipo de carga:
        <select
          name="tipo"
          value={form.tipo}
          onChange={handleChange}
          style={{
            marginTop: 4,
            width: "100%",
            padding: 8,
            borderRadius: 4,
            border: errores.tipo ? "1px solid #dc2626" : "1px solid #ccc",
            marginBottom: errores.tipo ? 4 : 12,
            outline: errores.tipo ? "none" : undefined,
          }}
          aria-invalid={errores.tipo ? "true" : "false"}
        >
          <option value="">Selecciona tipo</option>
          {tiposCarga.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>
      {errores.tipo && (
        <p style={{ color: "#dc2626", marginTop: 0, marginBottom: 8, fontSize: 14 }}>
          {errores.tipo}
        </p>
      )}
      <label style={{ marginTop: 16, fontWeight: "600" }}>
        Conductor asignado:
        <select
          name="conductor"
          value={form.conductor}
          onChange={handleChange}
          style={{ marginTop: 4, width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        >
          <option value="">No asignado</option>
          {conductoresEjemplo.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>
    </>
  );
}
