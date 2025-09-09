import React from "react";

export default function NotasConfirmacion({ notas, onNotasChange, form }) {
  return (
    <div>
      <label style={{ fontWeight: "600" }}>
        Notas o detalles adicionales:
        <textarea
          name="notas"
          value={notas || ""}
          onChange={e => onNotasChange(e.target.value)}
          style={{ marginTop: 4, width: "100%", minHeight: 60, padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        />
      </label>

      <div style={{ marginTop: 20 }}>
        <h4>Resumen:</h4>
        <p><strong>Tracking:</strong> {form.tracking}</p>
        <p><strong>Tipo de carga:</strong> {form.tipo}</p>
        <p><strong>Estado:</strong> {form.estado}</p>
        <p><strong>Conductor:</strong> {form.conductor || "No asignado"}</p>
        <h5>Ubicaciones:</h5>
        {form.ubicaciones.map((u, i) => (
          <div key={i} style={{ paddingLeft: 12 }}>
            <p><strong>{u.tipo === "origen" ? "Origen" : "Destino"} {i + 1}:</strong></p>
            <p>Lugar: {u.lugar || u.nuevaDireccion || "No especificado"}</p>
            <p>Fecha estimada: {u.fecha || "No especificada"}</p>
            <p>Acción: {u.accion || "No especificada"}</p>
            <p>Geolocalización obligatoria: {u.geoObligatoria ? "Sí" : "No"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
