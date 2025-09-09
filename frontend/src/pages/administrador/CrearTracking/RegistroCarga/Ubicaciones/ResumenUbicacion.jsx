import React from "react";

export default function ResumenUbicacion({ ubicacion }) {
  return (
    <div className="p-4 border rounded-lg shadow bg-green-50">
      <h3 className="text-lg font-bold mb-2">✅ Ubicación cargada</h3>
      <ul className="text-sm space-y-1">
        <li><strong>Lugar:</strong> {ubicacion.lugar}</li>
        <li><strong>Fecha:</strong> {ubicacion.fecha}</li>
        <li><strong>Acción:</strong> {ubicacion.accion}</li>
        <li>
          <strong>Geolocalización obligatoria:</strong>{" "}
          {ubicacion.geoObligatoria ? "Sí" : "No"}
        </li>
      </ul>
    </div>
  );
}
