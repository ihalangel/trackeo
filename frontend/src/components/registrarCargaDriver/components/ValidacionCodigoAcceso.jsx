import React from 'react';

const ValidacionCodigoAcceso = ({
  codigoAcceso,
  setCodigoAcceso,
  validarCodigo,
  errorCodigo,
  onVolver,
}) => {
  return (
    <div className="form-contenedor">
      <p className="form-label">Ingresa tu código de acceso para continuar:</p>
      <input
        type="text"
        className="form-input"
        value={codigoAcceso}
        onChange={(e) => setCodigoAcceso(e.target.value)}
        placeholder="Código de acceso"
      />
      <button className="form-boton" onClick={validarCodigo}>Validar código</button>
      {errorCodigo && <p className="form-error">{errorCodigo}</p>}
      <button className="form-boton-pequeno" onClick={onVolver}>Volver</button>
    </div>
  );
};

export default ValidacionCodigoAcceso;
