import React from "react";
import { useTracking } from "./../../../../../context/Dasboards/TrackingContextAdmin.jsx";

export default function StepFecha({ index }) {
  const { form, handleUbicacionChange, errores } = useTracking();
  const ubicacion = form.ubicaciones[index];

  return (
    <div>
      <label>
        Fecha estimada {ubicacion.tipo === "origen" ? "pickup" : "entrega"}:
        <input
          type="datetime-local"
          value={ubicacion.fecha || ""}
          onChange={(e) => handleUbicacionChange(index, "fecha", e.target.value)}
          style={{ marginLeft: 8, padding: 4, borderRadius: 4, border: "1px solid #ccc" }}
        />
      </label>
      {errores[`ubicacion_fecha_${index}`] && (
        <p style={{ color: "#dc2626", marginTop: 4, fontSize: 13 }}>
          {errores[`ubicacion_fecha_${index}`]}
        </p>
      )}
    </div>
  );
}
