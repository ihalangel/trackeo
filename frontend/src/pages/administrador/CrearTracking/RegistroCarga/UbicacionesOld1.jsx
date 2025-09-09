import React, { useState } from "react";

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
  const [stepIndex, setStepIndex] = useState(0);

  // Mostrar solo la ubicación actual según el stepIndex
  const currentUbicacion = ubicaciones[stepIndex];

  // Función para avanzar al siguiente paso, si existe
  const handleNextStep = () => {
    if (stepIndex < ubicaciones.length - 1) {
      setStepIndex(stepIndex + 1);
    }
  };

  // Función para agregar nueva ubicación después del paso actual
  const handleAgregarUbicacion = (tipo) => {
    agregarUbicacion(tipo);
    // Avanzamos al nuevo paso (que se añade al final del array)
    setStepIndex(ubicaciones.length);
  };

  return (
    <div>
      <h3 style={{ marginBottom: 8 }}>Ubicaciones</h3>

      {currentUbicacion ? (
        <div
          key={stepIndex}
          style={{
            border: "1px solid #ccc",
            borderRadius: 6,
            padding: 8,
            marginBottom: 12,
          }}
        >
          <strong>
            {currentUbicacion.tipo === "origen" ? "Origen" : "Destino"} {stepIndex + 1}
          </strong>

          <div style={{ marginTop: 8, marginBottom: 8 }}>
            <label>
              Lugar (seleccionar o crear):
              <select
                value={currentUbicacion.lugar}
                onChange={(e) =>
                  onUbicacionChange(stepIndex, "lugar", e.target.value)
                }
                style={{ marginLeft: 8, padding: 4, borderRadius: 4, border: "1px solid #ccc" }}
              >
                <option value="">-- Seleccionar lugar --</option>
                {lugares.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
            </label>
            <span style={{ marginLeft: 16 }}>o ingresar nueva dirección:</span>
            <input
              type="text"
              value={currentUbicacion.nuevaDireccion}
              onChange={(e) =>
                onUbicacionChange(stepIndex, "nuevaDireccion", e.target.value)
              }
              placeholder="Nueva dirección"
              style={{
                marginLeft: 8,
                padding: 4,
                borderRadius: 4,
                border: "1px solid #ccc",
                width: "35%",
              }}
            />
            {errores[`ubicacion_lugar_${stepIndex}`] && (
              <p style={{ color: "#dc2626", marginTop: 4, fontSize: 13 }}>
                {errores[`ubicacion_lugar_${stepIndex}`]}
              </p>
            )}
          </div>

          <div style={{ marginBottom: 8 }}>
            <label>
              Fecha estimada {currentUbicacion.tipo === "origen" ? "pickup" : "entrega"}:
              <input
                type="datetime-local"
                value={currentUbicacion.fecha}
                onChange={(e) =>
                  onUbicacionChange(stepIndex, "fecha", e.target.value)
                }
                style={{ marginLeft: 8, padding: 4, borderRadius: 4, border: "1px solid #ccc" }}
              />
            </label>
            {errores[`ubicacion_fecha_${stepIndex}`] && (
              <p style={{ color: "#dc2626", marginTop: 4, fontSize: 13 }}>
                {errores[`ubicacion_fecha_${stepIndex}`]}
              </p>
            )}
          </div>

          <div style={{ marginBottom: 8 }}>
            <label>
              Acción:
              <select
                value={currentUbicacion.accion}
                onChange={(e) =>
                  onUbicacionChange(stepIndex, "accion", e.target.value)
                }
                style={{
                  marginLeft: 8,
                  padding: 4,
                  borderRadius: 4,
                  border: errores[`ubicacion_accion_${stepIndex}`]
                    ? "1px solid #dc2626"
                    : "1px solid #ccc",
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
            {errores[`ubicacion_accion_${stepIndex}`] && (
              <p style={{ color: "#dc2626", marginTop: 4, fontSize: 13 }}>
                {errores[`ubicacion_accion_${stepIndex}`]}
              </p>
            )}
          </div>

          <div>
            <label>
              <input
                type="checkbox"
                checked={currentUbicacion.geoObligatoria}
                onChange={() => toggleGeoObligatoria(stepIndex)}
                style={{ marginRight: 6 }}
              />
              Geolocalización obligatoria para comprobación
            </label>
          </div>

          {ubicaciones.length > 1 && (
            <button
              type="button"
              onClick={() => {
                quitarUbicacion(stepIndex);
                // Si eliminas el paso actual, retrocedemos un paso para no quedar fuera de rango
                if (stepIndex === ubicaciones.length - 1) {
                  setStepIndex(stepIndex - 1);
                }
              }}
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
              Quitar {currentUbicacion.tipo === "origen" ? "origen" : "destino"}
            </button>
          )}
        </div>
      ) : (
        <p>No hay ubicaciones definidas.</p>
      )}

      <div style={{ display: "flex", gap: 12 }}>
        <button
          type="button"
          onClick={() => handleAgregarUbicacion("origen")}
          disabled={ubicaciones.some((u) => u.tipo === "origen")}
          style={{
            backgroundColor: ubicaciones.some((u) => u.tipo === "origen")
              ? "#9ca3af"
              : "#2563eb",
            color: "white",
            border: "none",
            borderRadius: 4,
            padding: "8px 12px",
            cursor: ubicaciones.some((u) => u.tipo === "origen")
              ? "not-allowed"
              : "pointer",
            flex: 1,
          }}
        >
          + Agregar origen
        </button>

        <button
          type="button"
          onClick={() => handleAgregarUbicacion("destino")}
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

        <button
          type="button"
          onClick={handleNextStep}
          disabled={stepIndex >= ubicaciones.length - 1}
          style={{
            backgroundColor: stepIndex >= ubicaciones.length - 1
              ? "#9ca3af"
              : "#2563eb",
            color: "white",
            border: "none",
            borderRadius: 4,
            padding: "8px 12px",
            cursor: stepIndex >= ubicaciones.length - 1
              ? "not-allowed"
              : "pointer",
            flex: 1,
          }}
        >
          Siguiente paso
        </button>
      </div>
    </div>
  );
}
