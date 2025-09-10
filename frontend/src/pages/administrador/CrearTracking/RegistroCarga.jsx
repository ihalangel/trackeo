import React, { useState } from "react";
import { TrackingProvider, useTracking } from "./../../../context/TrackingContext/";
import DatosBasicos from "./RegistroCarga/DatosBasicos";
import Ubicaciones from "./RegistroCarga/Ubicaciones";
import NotasConfirmacion from "./RegistroCarga/NotasConfirmacion";
import CamposTipoCarga from "./RegistroCarga/CamposTipoCarga";


export default function RegistroCargaWrapper({ cargaInicial, onGuardar, onCancelar }) {
  return (
    <TrackingProvider cargaInicial={cargaInicial} onGuardar={onGuardar} onCancelar={onCancelar}>
      <RegistroCarga />
    </TrackingProvider>
  );
}

function ResumenFinal() {
  const { form } = useTracking();
  return (
    <div>
      <h2>Resumen completo de la carga</h2>
      <pre>{JSON.stringify(form, null, 2)}</pre>
      {/* Aquí se puede mejorar el diseño con tablas o listados */}
    </div>
  );
}

function RegistroCarga() {
  const { form, guardar, cancelar, paso, siguiente, anterior } = useTracking();
  const [mostrarResumen, setMostrarResumen] = useState(false);

  // Determina si todas las ubicaciones están finalizadas
  const todasFinalizadas = form.ubicaciones.every(u => u.finalizado);

  // Logica para renderizar según paso global y estado finalizado
  if (mostrarResumen || (paso === 4 && todasFinalizadas)) {

    return (
      <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16, marginBottom: 20, fontFamily: "Arial, sans-serif" }}>
        <ResumenFinal />
        <div style={{ marginTop: 20 }}>
          <button
            onClick={() => {
              guardar();
              setMostrarResumen(false);
            }}
            style={{ padding: "10px 15px" }}
          >
            Guardar Tracking
          </button>
          <button
            onClick={() => {
              cancelar();
            }}
            style={{ padding: "10px 15px", marginLeft: 12 }}
          >
            Cancelar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16, marginBottom: 20, fontFamily: "Arial, sans-serif" }}>
      {paso === 1 && <DatosBasicos />}
      {paso === 2 && <CamposTipoCarga />}
      {paso === 3 && <Ubicaciones />}
      {paso === 4 && <NotasConfirmacion />}



      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
  {paso > 1 ? (
    <button type="button" onClick={anterior}>Anterior</button>
  ) : (
    <button type="button" onClick={cancelar}>Cancelar</button>
  )}
  {paso < 4 ? (
    <button type="button" onClick={siguiente}>Siguiente</button>
  ) : (
    <button
      type="button"
      onClick={() => setMostrarResumen(true)}
    >
      Ver Resumen y Guardar
    </button>
  )}
</div>
    </div>
  );
}

