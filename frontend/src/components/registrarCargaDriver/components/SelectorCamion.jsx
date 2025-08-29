import React from "react";

const SelectorCamion = ({
  listaCamionesUsuario,
  camionSeleccionado,
  setCamionSeleccionado,
  setDatosBasicos,
}) => {
  const manejarSeleccion = (e) => {
    const idSeleccionado = e.target.value;
    const camion = listaCamionesUsuario.find(
      (c) => c.id.toString() === idSeleccionado
    );
    setCamionSeleccionado(camion || null);
    if (camion) {
      setDatosBasicos((prev) => ({
        ...prev,
        truckColor: camion.color,
        truckPlaca: camion.placa,
      }));
    } else {
      setDatosBasicos((prev) => ({
        ...prev,
        truckColor: "",
        truckPlaca: "",
      }));
    }
  };

  return (
    <div>
      <p>Selecciona un camión registrado o ingresa uno nuevo:</p>
      <select
        onChange={manejarSeleccion}
        value={camionSeleccionado ? camionSeleccionado.id : ""}
      >
        <option value="">-- Ninguno --</option>
        {listaCamionesUsuario.map((camion) => (
          <option key={camion.id} value={camion.id}>
            {camion.placa} - {camion.color}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectorCamion;
