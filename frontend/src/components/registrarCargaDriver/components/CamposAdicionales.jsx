import React from "react";

const CamposAdicionales = ({
  datosAdicionales,
  manejarCambioAdicionales,
  errores,
  previews,
}) => {
  const camposArchivos = [
    { label: "Foto del conductor", name: "fotoConductor" },
    { label: "Licencia del conductor", name: "licenciaConductor" },
  ];

  return (
    <div>
      <h3>Datos adicionales para usuario nuevo</h3>
      {camposArchivos.map(({ label, name }) => (
        <div key={name}>
          <label>
            {label}:
            <input
              type="file"
              name={name}
              accept="image/*"
              onChange={manejarCambioAdicionales}
            />
            {errores[name] && (
              <span style={{ color: "red" }}> {errores[name]}</span>
            )}
          </label>
          <br />
          {previews[name] && (
            <img
              src={previews[name]}
              alt={label}
              style={{
                width: 100,
                height: 80,
                objectFit: "cover",
                marginBottom: 10,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CamposAdicionales;
