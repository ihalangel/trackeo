import React from "react";
import { useTracking } from "./../../../../../context/Dasboards/TrackingContextAdmin.jsx";


export default function StepLugar({ index }) {
  const {
    form,
    handleUbicacionChange,
    errores,
    lugares,
  } = useTracking();

  const ubicacion = form.ubicaciones[index];


const handleLugarChange = (e) => {
  const value = e.target.value;
  handleUbicacionChange(index, "lugar", value);
  // Si selecciona "otro", resetea lugarOtro
  if (value !== "otro") {
    handleUbicacionChange(index, "lugarOtro", "");
  }
};

const handleLugarOtroChange = (e) => {
  handleUbicacionChange(index, "lugarOtro", e.target.value);
};





  return (
    <div>
      <label className="block text-sm font-medium mb-1">Lugar</label>
      <select
        value={ubicacion.lugar || ""}
        onChange={handleLugarChange}
        className="w-full p-2 border rounded"
      >
        <option value="">Selecciona un lugar</option>
        <optgroup label="Yardas propias">
          {lugares.yardas?.map((y) => (
            <option key={`yarda-${y.id}`} value={y.nombre}>
              {y.nombre}
            </option>
          ))}
        </optgroup>
        <optgroup label="Lugares ocasionales">
          {lugares.ocasionales?.map((o) => (
            <option key={`ocasional-${o.id}`} value={o.nombre}>
              {o.nombre}
            </option>
          ))}
        </optgroup>
        <option value="otro">Otro</option>
      </select>
      {ubicacion.lugar === "otro" && (
        <input
          type="text"
          placeholder="Nombre del lugar"
          value={ubicacion.lugarOtro || ""}
          onChange={handleLugarOtroChange}
          className="w-full p-2 border rounded mt-2"
        />
      )}
      {errores[`ubicacion_lugar_${index}`] && (
        <p className="text-red-600 text-sm mt-1">{errores[`ubicacion_lugar_${index}`]}</p>
      )}
    </div>
  );
}
