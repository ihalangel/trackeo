import React, { useState } from "react";
import UbicacionWizard from "./Ubicaciones/UbicacionWizard";
import { useTracking } from "./../../../../context/Dasboards/TrackingContextAdmin.jsx";


export default function Ubicaciones() {
  const {
    form,
    errores,
    lugares,
    accionesUbicacion,
    handleUbicacionChange,
    agregarUbicacion,
    quitarUbicacion,
    toggleGeoObligatoria,
  } = useTracking();

  const [stepIndex, setStepIndex] = useState(0);
  const ubicaciones = form.ubicaciones;
  const currentUbicacion = ubicaciones[stepIndex];

  const handleNextUbicacion = () => {
    if (stepIndex < ubicaciones.length - 1) {
      setStepIndex(stepIndex + 1);
    }
  };

  const handlePrevUbicacion = () => {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    }
  };

  const handleAgregarUbicacion = (tipo) => {
    agregarUbicacion(tipo);
    setStepIndex(ubicaciones.length);
  };

  return (
    <div>
      <h3 style={{ marginBottom: 8 }}>Ubicaciones</h3>
      {currentUbicacion ? (
        <UbicacionWizard
          key={stepIndex}
          index={stepIndex}
          ubicacion={currentUbicacion}
          onUbicacionChange={handleUbicacionChange}
          quitarUbicacion={quitarUbicacion}
          toggleGeoObligatoria={toggleGeoObligatoria}
          errores={errores}
          lugares={lugares}
          accionesUbicacion={accionesUbicacion}
        />
      ) : (
        <p>No hay ubicaciones definidas.</p>
      )}
      <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
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
          onClick={handlePrevUbicacion}
          disabled={stepIndex === 0}
          style={{
            backgroundColor: stepIndex === 0 ? "#9ca3af" : "#6b7280",
            color: "white",
            border: "none",
            borderRadius: 4,
            padding: "8px 12px",
            cursor: stepIndex === 0 ? "not-allowed" : "pointer",
            flex: 1,
          }}
        >
          Anterior
        </button>
        <button
          type="button"
          onClick={handleNextUbicacion}
          disabled={stepIndex >= ubicaciones.length - 1}
          style={{
            backgroundColor:
              stepIndex >= ubicaciones.length - 1 ? "#9ca3af" : "#2563eb",
            color: "white",
            border: "none",
            borderRadius: 4,
            padding: "8px 12px",
            cursor:
              stepIndex >= ubicaciones.length - 1 ? "not-allowed" : "pointer",
            flex: 1,
          }}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
