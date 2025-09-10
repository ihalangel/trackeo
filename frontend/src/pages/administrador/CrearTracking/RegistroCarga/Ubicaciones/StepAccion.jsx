import React from "react";
// import { useTracking } from "./../../../../../context/Dasboards/TrackingContextAdmin.jsx";
import { TrackingProvider, useTracking } from "./../../../../../context/TrackingContext/";

export default function StepAccion({ index }) {
  const { form, handleUbicacionChange, errores, accionesUbicacion } = useTracking();
  const ubicacion = form.ubicaciones[index];

  return (
    <div>
      <label>
        Acción:
        <select
          value={ubicacion.accion || ""}
          onChange={(e) => handleUbicacionChange(index, "accion", e.target.value)}
          style={{
            marginLeft: 8,
            padding: 4,
            borderRadius: 4,
            border: errores[`ubicacion_accion_${index}`] ? "1px solid #dc2626" : "1px solid #ccc",
          }}
        >
          <option value="">-- Seleccionar acción --</option>
          {accionesUbicacion.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </label>
      {errores[`ubicacion_accion_${index}`] && (
        <p style={{ color: "#dc2626", marginTop: 4, fontSize: 13 }}>
          {errores[`ubicacion_accion_${index}`]}
        </p>
      )}
    </div>
  );
}
