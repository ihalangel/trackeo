import React from "react";

export default function BuscadorCarga({ filtro, onFiltroChange }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <input
        type="text"
        placeholder="Buscar por Tracking o Tipo"
        value={filtro}
        onChange={(e) => onFiltroChange(e.target.value)}
        style={{
          width: "100%",
          padding: 8,
          borderRadius: 4,
          border: "1px solid #ccc",
          fontSize: 16,
        }}
      />
    </div>
  );
}


