import React from "react";

export default function Ubicaciones({
  ubicaciones,
  onUbicacionChange,
  agregarUbicacion,
  quitarUbicacion,
  toggleGeoObligatoria,
  errores,
  lugares,
  accionesUbicacion,
}) {
  return (
    <div>
      <h3 style={{ marginBottom: 8 }}>Ubicaciones</h3>
      {ubicaciones.map((u, i) => (
        <div key={i} style={{ border: "1px solid #ccc", borderRadius: 6, padding: 8, marginBottom: 12 }}>
          <strong>{u.tipo === "origen" ? "Origen" : "Destino"} {i + 1}</strong>
          <div style={{ marginTop: 8, marginBottom: 8 }}>
            <label>
              Lugar (seleccionar o crear):
              <select
                value={u.lugar}
                onChange={e => onUbicacionChange(i, "lugar", e.target.value)}
                style={{ marginLeft: 8, padding: 4, borderRadius: 4, border: "1px solid #ccc" }}
              >
                <option value="">-- Seleccionar lugar --</option>
                {lugares.map(l => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </label>
            <span style={{ marginLeft: 16 }}>o ingresar nueva dirección:</span>
            <input
              type="text"
              value={u.nuevaDireccion}
              onChange={e => onUbicacionChange(i, "nuevaDireccion", e.target.value)}
              placeholder="Nueva dirección"
              style={{ marginLeft: 8, padding: 4, borderRadius: 4, border: "1px solid #ccc", width: "35%" }}
            />
            {errores[`ubicacion_lugar_${i}`] && (
              <p style={{ color: "#dc2626", marginTop: 4, fontSize: 13 }}>{errores[`ubicacion_lugar_${i}`]}</p>
            )}
          </div>
          <div style={{ marginBottom: 8 }}>
            <label>
              Fecha estimada {u.tipo === "origen" ? "pickup" : "entrega"}:
              <input
                type="datetime-local"
                value={u.fecha}
                onChange={e => onUbicacionChange(i, "fecha", e.target.value)}
                style={{ marginLeft: 8, padding: 4, borderRadius: 4, border: "1px solid #ccc" }}
              />
            </label>
            {errores[`ubicacion_fecha_${i}`] && (
              <p style={{ color: "#dc2626", marginTop: 4, fontSize: 13 }}>{errores[`ubicacion_fecha_${i}`]}</p>
            )}
          </div>
          <div style={{ marginBottom: 8 }}>
            <label>
              Acción:
              <select
                value={u.accion}
                onChange={e => onUbicacionChange(i, "accion", e.target.value)}
                style={{ marginLeft: 8, padding: 4, borderRadius: 4, border: errores[`ubicacion_accion_${i}`] ? "1px solid #dc2626" : "1px solid #ccc" }}
              >
                <option value="">-- Seleccionar acción --</option>
                {accionesUbicacion.map(a => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </label>
            {errores[`ubicacion_accion_${i}`] && (
              <p style={{ color: "#dc2626", marginTop: 4, fontSize: 13 }}>{errores[`ubicacion_accion_${i}`]}</p>
            )}
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={u.geoObligatoria}
                onChange={() => toggleGeoObligatoria(i)}
                style={{ marginRight: 6 }}
              />
              Geolocalización obligatoria para comprobación
            </label>
          </div>
          {ubicaciones.length > 2 && (
            <button
              type="button"
              onClick={() => quitarUbicacion(i)}
              style={{
                marginTop: 8,
                backgroundColor: "#dc2626",
                color: "white",
                border: "none",
                borderRadius: 4,
                padding: "4px 8px",
                cursor: "pointer",
              }}
            >
              Quitar {u.tipo === "origen" ? "origen" : "destino"}
            </button>
          )}
        </div>
      ))}
      <div style={{ display: "flex", gap: 12 }}>
        <button
          type="button"
          onClick={() => agregarUbicacion("origen")}
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: 4,
            padding: "8px 12px",
            cursor: "pointer",
            flex: 1,
          }}
        >
          + Agregar origen
        </button>
        <button
          type="button"
          onClick={() => agregarUbicacion("destino")}
          style={{
            backgroundColor: "#059669",
            color: "white",
            border: "none",
            borderRadius: 4,
            padding: "8px 12px",
            cursor: "pointer",
            flex: 1,
          }}
        >
          + Agregar destino
        </button>
      </div>
    </div>
  );
}
