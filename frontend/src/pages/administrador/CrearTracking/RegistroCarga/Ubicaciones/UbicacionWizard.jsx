import React, { useState } from "react";
import StepLugar from "./StepLugar";
import StepFecha from "./StepFecha";
import StepAccion from "./StepAccion";
import StepGeo from "./StepGeo";
import ResumenUbicacion from "./ResumenUbicacion";
import { useTracking } from "./../../../../../context/Dasboards/TrackingContextAdmin.jsx";

export default function UbicacionWizard({ index }) {
  const {
    form,
    errores,
    handleUbicacionChange,
    quitarUbicacion,
    toggleGeoObligatoria,
    lugares,
    accionesUbicacion,
  } = useTracking();

  const ubicacion = form.ubicaciones[index];
  const [wizardStep, setWizardStep] = useState(0);

  const steps = [
    <StepLugar
      key="lugar"
      index={index}
      ubicacion={ubicacion}
      onUbicacionChange={handleUbicacionChange}
      errores={errores}
      lugares={lugares}
    />,
    <StepFecha
      key="fecha"
      index={index}
      ubicacion={ubicacion}
      onUbicacionChange={handleUbicacionChange}
      errores={errores}
    />,
    <StepAccion
      key="accion"
      index={index}
      ubicacion={ubicacion}
      onUbicacionChange={handleUbicacionChange}
      errores={errores}
      accionesUbicacion={accionesUbicacion}
    />,
    <StepGeo
      key="geo"
      index={index}
      ubicacion={ubicacion}
      toggleGeoObligatoria={toggleGeoObligatoria}
    />,
  ];

  const isLastStep = wizardStep === steps.length - 1;

  // Si la ubicación ya fue finalizada, mostramos el resumen
  if (ubicacion.finalizado) {
    return (
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: 6,
          padding: 12,
          marginBottom: 12,
        }}
      >
        <strong>
          {ubicacion.tipo === "origen" ? "Origen" : "Destino"} {index + 1}
        </strong>
        <ResumenUbicacion ubicacion={ubicacion} />
        <button
          type="button"
          onClick={() => quitarUbicacion(index)}
          style={{
            marginTop: 12,
            backgroundColor: "#dc2626",
            color: "white",
            border: "none",
            borderRadius: 4,
            padding: "6px 10px",
            cursor: "pointer",
          }}
        >
          Quitar {ubicacion.tipo}
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: 6,
        padding: 12,
        marginBottom: 12,
      }}
    >
      <strong>
        {ubicacion.tipo === "origen" ? "Origen" : "Destino"} {index + 1}
      </strong>
      <div style={{ marginTop: 12 }}>{steps[wizardStep]}</div>
      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <button
          type="button"
          onClick={() => setWizardStep((s) => Math.max(s - 1, 0))}
          disabled={wizardStep === 0}
          style={{
            flex: 1,
            backgroundColor: wizardStep === 0 ? "#9ca3af" : "#6b7280",
            color: "white",
            border: "none",
            borderRadius: 4,
            padding: "6px 10px",
            cursor: wizardStep === 0 ? "not-allowed" : "pointer",
          }}
        >
          Atrás
        </button>
        {!isLastStep ? (
          <button
            type="button"
            onClick={() =>
              setWizardStep((s) => Math.min(s + 1, steps.length - 1))
            }
            style={{
              flex: 1,
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: 4,
              padding: "6px 10px",
              cursor: "pointer",
            }}
          >
            Siguiente
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              handleUbicacionChange(index, "finalizado", true);
            }}
            style={{
              flex: 1,
              backgroundColor: "#059669",
              color: "white",
              border: "none",
              borderRadius: 4,
              padding: "6px 10px",
              cursor: "pointer",
            }}
          >
            Finalizar
          </button>
        )}
      </div>
      {ubicacion && (
        <button
          type="button"
          onClick={() => quitarUbicacion(index)}
          style={{
            marginTop: 12,
            backgroundColor: "#dc2626",
            color: "white",
            border: "none",
            borderRadius: 4,
            padding: "6px 10px",
            cursor: "pointer",
          }}
        >
          Quitar {ubicacion.tipo}
        </button>
      )}
    </div>
  );
}
