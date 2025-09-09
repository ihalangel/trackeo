import React, { useState } from "react";
import BuscadorCarga from "./CrearTracking/BuscadorCarga";
import RegistroCarga from "./CrearTracking/RegistroCarga";
import ListadoCargas from "./CrearTracking/ListadoCargas";
import Modal from "./../../components/modalunico/Modal.jsx";

const cargasEjemplo = [
  { id: 1, tracking: "64717", tipo: "Contenedor con chassis", estado: "Pendiente", conductor: null },
  { id: 2, tracking: "64718", tipo: "Trailer", estado: "Asignada", conductor: "Juan Pérez" },
];

export default function CrearTrackingModal({ onClose }) {
  const [cargas, setCargas] = useState(cargasEjemplo);
  const [filtro, setFiltro] = useState("");
  const [cargaEditar, setCargaEditar] = useState(null);
  const [mostrarRegistro, setMostrarRegistro] = useState(false);
  const [mostrarListado, setMostrarListado] = useState(false); // nuevo estado

  // Filtra cargas por tracking o tipo
  const cargasFiltradas = cargas.filter(
    (c) =>
      c.tracking.toLowerCase().includes(filtro.toLowerCase()) ||
      (c.tipo && c.tipo.toLowerCase().includes(filtro.toLowerCase()))
  );

  const guardarCarga = (nuevaCarga) => {
    if (cargaEditar) {
      setCargas((old) => old.map((c) => (c.id === cargaEditar.id ? { ...c, ...nuevaCarga } : c)));
    } else {
      setCargas((old) => [...old, { id: old.length + 1, ...nuevaCarga }]);
    }
    setCargaEditar(null);
    setMostrarRegistro(false);
  };

  const cancelarRegistro = () => {
    setCargaEditar(null);
    setMostrarRegistro(false);
  };

  const modificarCarga = (id) => {
    const c = cargas.find((c) => c.id === id);
    setCargaEditar(c);
    setMostrarRegistro(true);
  };

  const asignarDriver = (id) => alert(`Asignar conductor a carga ${id}`);

  return (
    <Modal title="Add Tracking" onClose={onClose}>
      <div style={{ maxWidth: 600, margin: "auto", padding: 20, fontFamily: "Arial, sans-serif" }}>
        {!mostrarRegistro && (
          <>
            <button
              onClick={() => setMostrarRegistro(true)}
              style={{
                backgroundColor: "#2563eb",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
                marginBottom: 20,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              Registrar nueva carga
            </button>

            <BuscadorCarga filtro={filtro} onFiltroChange={setFiltro} />

            <button
              onClick={() => setMostrarListado(!mostrarListado)}
              style={{
                backgroundColor: mostrarListado ? "#dc2626" : "#059669",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
                marginTop: 20,
                marginBottom: 20,
                fontWeight: "bold",
                fontSize: 16,
                width: "100%",
              }}
            >
              { mostrarListado ?  "Ocultar Cargas sin asignar"  :  "Mostrar cargas sin Chofer Asignado" }
            </button>
          </>
        )}

        {mostrarRegistro && (
          <RegistroCarga
            cargaInicial={cargaEditar}
            onGuardar={guardarCarga}
            onCancelar={cancelarRegistro}
          />
        )}

        {mostrarListado && (
          <ListadoCargas
            cargas={cargasFiltradas}
            onAsignarDriver={asignarDriver}
            onModificar={modificarCarga}
          />
        )}
      </div>
    </Modal>
  );
}
