import React from "react";
import { useTracking } from "./../../../../../context/Dasboards/TrackingContextAdmin.jsx";

export default function StepGeo({ index }) {
  const { form, setForm } = useTracking();
  const ubicacion = form.ubicaciones[index];

  const handleGeoObligatoriaChange = (event) => {
    const value = event.target.value === "true"; // convertir string a boolean
    setForm(f => {
      const ubicaciones = [...f.ubicaciones];
      ubicaciones[index] = { ...ubicaciones[index], geoObligatoria: value };
      return { ...f, ubicaciones };
    });
  };

  return (
    <div>
      <label>¿Geolocalización obligatoria para comprobación?</label>
      <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
        <label>
          <input
            type="radio"
            name={`geoObligatoria_${index}`}
            value="true"
            checked={ubicacion.geoObligatoria === true}
            onChange={handleGeoObligatoriaChange}
          />
          Sí
        </label>
        <label>
          <input
            type="radio"
            name={`geoObligatoria_${index}`}
            value="false"
            checked={ubicacion.geoObligatoria === false}
            onChange={handleGeoObligatoriaChange}
          />
          No
        </label>
      </div>
    </div>
  );
}

