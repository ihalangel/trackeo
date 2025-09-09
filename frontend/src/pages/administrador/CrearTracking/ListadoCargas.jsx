import React from "react";

export default function ListadoCargas({ cargas, onAsignarDriver, onModificar }) {
  return (
    <div>
      <h3 style={{ marginBottom: 8, fontWeight: "bold" }}>Listado de cargas</h3>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid #ccc" }}>
            <th style={{ textAlign: "left", padding: 8 }}>Tracking</th>
            <th style={{ textAlign: "left", padding: 8 }}>Tipo</th>
            <th style={{ textAlign: "left", padding: 8 }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cargas.length === 0 && (
            <tr>
              <td colSpan={3} style={{ padding: 8, textAlign: "center", fontStyle: "italic" }}>
                No hay cargas
              </td>
            </tr>
          )}
          {cargas.map((c) => (
            <tr key={c.id} style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: 8 }}>{c.tracking}</td>
              <td style={{ padding: 8 }}>{c.tipo || "-"}</td>
              <td style={{ padding: 8 }}>
                <button
                  onClick={() => onAsignarDriver(c.id)}
                  style={{
                    backgroundColor: "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: 4,
                    padding: "4px 8px",
                    cursor: "pointer",
                    marginRight: 8,
                    fontSize: 14,
                  }}
                >
                  Asignar conductor
                </button>
                <button
                  onClick={() => onModificar(c.id)}
                  style={{
                    backgroundColor: "#facc15",
                    color: "black",
                    border: "none",
                    borderRadius: 4,
                    padding: "4px 8px",
                    cursor: "pointer",
                    fontSize: 14,
                  }}
                >
                  Modificar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
