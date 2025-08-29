import React, { useState, useEffect, useRef } from "react";

import Webcam from "react-webcam";

const webcamRef = useRef(null);
const [captura, setCaptura] = useState(null);

const tomarFoto = () => {
  const imageSrc = webcamRef.current.getScreenshot();
  setCaptura(imageSrc);
  setFotoChasis(imageSrc); // Actualiza el estado en el padre
};

const videoConstraints = {
  width: 320,
  height: 240,
  facingMode: "environment", // cámara trasera en móviles
};

const tiposCarga = [
  { id: "chassis", label: "Chassis solo" },
  { id: "contenedor", label: "Contenedor sobre chassis" },
  { id: "trailer", label: "Trailer" },
  { id: "boxTruck", label: "Box Truck" },
  { id: "otro", label: "Otro" },
];

const Paso3CargaDinamica = ({
  datosBasicos,
  setDatosBasicos,
  errores,
  setErrores,
  previews,
  manejarCambioBasicos,
}) => {
  const [tipoCarga, setTipoCarga] = useState(datosBasicos.tipoCarga || "");

  // Limpiar campos no aplicables al cambiar tipo
  useEffect(() => {
    setErrores({});
    switch (tipoCarga) {
      case "chassis":
        setDatosBasicos((prev) => ({
          ...prev,
          tipoCarga,
          chasisSerial: prev.chassisSerial || "",
          chasisColor: prev.chassisColor || "",
          contenedorSerial: "",
          contenedorColor: "",
          pinLock: "",
          fotoChasis: prev.fotoChasis || null,
          fotoContenedor: null,
          fotoPinLock: null,
          trailerSerial: "",
          trailerColor: "",
          boxTruckSerial: "",
          boxTruckColor: "",
          fotoBoxTruck: null,
          descripcionOtro: "",
        }));
        break;
      case "contenedor":
        setDatosBasicos((prev) => ({
          ...prev,
          tipoCarga,
          // mantener campos previos si existen
          contenedorSerial: prev.contenedorSerial || "",
          contenedorColor: prev.contenedorColor || "",
          pinLock: prev.pinLock || "",
          fotoContenedor: prev.fotoContenedor || null,
          fotoPinLock: prev.fotoPinLock || null,
          trailerSerial: "",
          trailerColor: "",
          boxTruckSerial: "",
          boxTruckColor: "",
          fotoBoxTruck: null,
          descripcionOtro: "",
        }));
        break;
      case "trailer":
        setDatosBasicos((prev) => ({
          ...prev,
          tipoCarga,
          trailerSerial: prev.trailerSerial || "",
          trailerColor: prev.trailerColor || "",
          pinLock: prev.pinLock || "",
          fotoPinLock: prev.fotoPinLock || null,
          fotoContenedor: null,
          contenedorSerial: "",
          contenedorColor: "",
          boxTruckSerial: "",
          boxTruckColor: "",
          fotoBoxTruck: null,
          descripcionOtro: "",
        }));
        break;
      case "boxTruck":
        setDatosBasicos((prev) => ({
          ...prev,
          tipoCarga,
          boxTruckSerial: prev.boxTruckSerial || "",
          boxTruckColor: prev.boxTruckColor || "",
          fotoBoxTruck: prev.fotoBoxTruck || null,
          // limpiar otros campos
          chasisSerial: "",
          chasisColor: "",
          contenedorSerial: "",
          contenedorColor: "",
          pinLock: "",
          fotoChasis: null,
          fotoContenedor: null,
          fotoPinLock: null,
          trailerSerial: "",
          trailerColor: "",
          descripcionOtro: "",
        }));
        break;
      case "otro":
        setDatosBasicos((prev) => ({
          ...prev,
          tipoCarga,
          descripcionOtro: prev.descripcionOtro || "",
          // limpiar otros campos
          chasisSerial: "",
          chasisColor: "",
          contenedorSerial: "",
          contenedorColor: "",
          pinLock: "",
          fotoChasis: null,
          fotoContenedor: null,
          fotoPinLock: null,
          trailerSerial: "",
          trailerColor: "",
          boxTruckSerial: "",
          boxTruckColor: "",
          fotoBoxTruck: null,
        }));
        break;
      default:
        break;
    }
  }, [tipoCarga, setDatosBasicos, setErrores]);

  // Manejo del cambio tipo carga
  const handleTipoChange = (e) => {
    setTipoCarga(e.target.value);
  };

  return (
    <div>
      <h3>Tipo de carga</h3>
      <div>
        {tiposCarga.map(({ id, label }) => (
          <label key={id} style={{ marginRight: 15 }}>
            <input
              type="radio"
              name="tipoCarga"
              value={id}
              checked={tipoCarga === id}
              onChange={handleTipoChange}
            />{" "}
            {label}
          </label>
        ))}
      </div>
      {tipoCarga === "" && (
        <p style={{ color: "red" }}>Por favor selecciona un tipo de carga</p>
      )}

      {/* Campos por tipo */}
      {tipoCarga === "chassis" && (
        <>
          <label>
            Chassis Serial:
            <input
              type="text"
              name="chassisSerial"
              value={datosBasicos.chassisSerial || ""}
              onChange={manejarCambioBasicos}
            />
            {errores.chassisSerial && (
              <span style={{ color: "red" }}> {errores.chassisSerial}</span>
            )}
          </label>
          <br />
          <label>
            Chassis Color:
            <input
              type="text"
              name="chassisColor"
              value={datosBasicos.chassisColor || ""}
              onChange={manejarCambioBasicos}
            />
            {errores.chassisColor && (
              <span style={{ color: "red" }}> {errores.chassisColor}</span>
            )}
          </label>
          <br />
          <label>
            Foto de Serial Chassis:
            <input
              type="file"
              name="fotoChasis"
              accept="image/*"
              onChange={manejarCambioBasicos}
            />
            {errores.fotoChasis && (
              <span style={{ color: "red" }}> {errores.fotoChasis}</span>
            )}
          </label>
          <br />
          {previews.fotoChasis && (
            <img
              src={previews.fotoChasis}
              alt="Foto Chassis"
              style={{
                width: 100,
                height: 80,
                objectFit: "cover",
                marginBottom: 10,
              }}
            />
          )}
        </>
      )}

      {tipoCarga === "contenedor" && (
        <>
          <label>
            Chassis Serial:
            <input
              type="text"
              name="chassisSerial"
              value={datosBasicos.chassisSerial || ""}
              onChange={manejarCambioBasicos}
            />
            {errores.chassisSerial && (
              <span style={{ color: "red" }}> {errores.chassisSerial}</span>
            )}
          </label>
          <br />
          <label>
            Chassis Color:
            <input
              type="text"
              name="chassisColor"
              value={datosBasicos.chassisColor || ""}
              onChange={manejarCambioBasicos}
            />
            {errores.chassisColor && (
              <span style={{ color: "red" }}> {errores.chassisColor}</span>
            )}
          </label>
          <br />
          <label>
            Contenedor Serial:
            <input
              type="text"
              name="contenedorSerial"
              value={datosBasicos.contenedorSerial || ""}
              onChange={manejarCambioBasicos}
            />
            {errores.contenedorSerial && (
              <span style={{ color: "red" }}> {errores.contenedorSerial}</span>
            )}
          </label>
          <br />
          <label>
            Contenedor Color:
            <input
              type="text"
              name="contenedorColor"
              value={datosBasicos.contenedorColor || ""}
              onChange={manejarCambioBasicos}
            />
            {errores.contenedorColor && (
              <span style={{ color: "red" }}> {errores.contenedorColor}</span>
            )}
          </label>
          <br />
          <label>
            Pin Lock:
            <input
              type="text"
              name="pinLock"
              value={datosBasicos.pinLock || ""}
              onChange={manejarCambioBasicos}
            />
            {errores.pinLock && (
              <span style={{ color: "red" }}> {errores.pinLock}</span>
            )}
          </label>
          <br />

          <label>
            Foto Chassis:
            <input
              type="file"
              name="fotoChasis"
              accept="image/*"
              onChange={manejarCambioBasicos}
            />
            {errores.fotoChasis && (
              <span style={{ color: "red" }}> {errores.fotoChasis}</span>
            )}
          </label>
          <br />
          {previews.fotoChasis && (
            <img
              src={previews.fotoChasis}
              alt="Foto Chassis"
              style={{
                width: 100,
                height: 80,
                objectFit: "cover",
                marginBottom: 10,
              }}
            />
          )}

          <label>
            Foto Contenedor:
            <input
              type="file"
              name="fotoContenedor"
              accept="image/*"
              onChange={manejarCambioBasicos}
            />
            {errores.fotoContenedor && (
              <span style={{ color: "red" }}> {errores.fotoContenedor}</span>
            )}
          </label>
          <br />
          {previews.fotoContenedor && (
            <img
              src={previews.fotoContenedor}
              alt="Foto Contenedor"
              style={{
                width: 100,
                height: 80,
                objectFit: "cover",
                marginBottom: 10,
              }}
            />
          )}

          <label>
            Foto Pin Lock:
            <input
              type="file"
              name="fotoPinLock"
              accept="image/*"
              onChange={manejarCambioBasicos}
            />
            {errores.fotoPinLock && (
              <span style={{ color: "red" }}> {errores.fotoPinLock}</span>
            )}
          </label>
          <br />
          {previews.fotoPinLock && (
            <img
              src={previews.fotoPinLock}
              alt="Foto Pin Lock"
              style={{
                width: 100,
                height: 80,
                objectFit: "cover",
                marginBottom: 10,
              }}
            />
          )}
        </>
      )}

      {tipoCarga === "trailer" && (
        <>
          <label>
            Trailer Serial:
            <input
              type="text"
              name="trailerSerial"
              value={datosBasicos.trailerSerial || ""}
              onChange={manejarCambioBasicos}
            />
            {errores.trailerSerial && (
              <span style={{ color: "red" }}> {errores.trailerSerial}</span>
            )}
          </label>
          <br />
          <label>
            Trailer Color:
            <input
              type="text"
              name="trailerColor"
              value={datosBasicos.trailerColor || ""}
              onChange={manejarCambioBasicos}
            />
            {errores.trailerColor && (
              <span style={{ color: "red" }}> {errores.trailerColor}</span>
            )}
          </label>
          <br />
          <label>
            Pin Lock:
            <input
              type="text"
              name="pinLock"
              value={datosBasicos.pinLock || ""}
              onChange={manejarCambioBasicos}
            />
            {errores.pinLock && (
              <span style={{ color: "red" }}> {errores.pinLock}</span>
            )}
          </label>
          <br />

          <label>
            Foto Trailer:
            <input
              type="file"
              name="fotoTrailer"
              accept="image/*"
              onChange={manejarCambioBasicos}
            />
            {errores.fotoTrailer && (
              <span style={{ color: "red" }}> {errores.fotoTrailer}</span>
            )}
          </label>
          <br />
          {previews.fotoTrailer && (
            <img
              src={previews.fotoTrailer}
              alt="Foto Trailer"
              style={{
                width: 100,
                height: 80,
                objectFit: "cover",
                marginBottom: 10,
              }}
            />
          )}

          <label>
            Foto Pin Lock:
            <input
              type="file"
              name="fotoPinLock"
              accept="image/*"
              onChange={manejarCambioBasicos}
            />
            {errores.fotoPinLock && (
              <span style={{ color: "red" }}> {errores.fotoPinLock}</span>
            )}
          </label>
          <br />
          {previews.fotoPinLock && (
            <img
              src={previews.fotoPinLock}
              alt="Foto Pin Lock"
              style={{
                width: 100,
                height: 80,
                objectFit: "cover",
                marginBottom: 10,
              }}
            />
          )}
        </>
      )}

      {tipoCarga === "boxTruck" && (
        <>
          <label>
            Box Truck Serial:
            <input
              type="text"
              name="boxTruckSerial"
              value={datosBasicos.boxTruckSerial || ""}
              onChange={manejarCambioBasicos}
            />
            {errores.boxTruckSerial && (
              <span style={{ color: "red" }}> {errores.boxTruckSerial}</span>
            )}
          </label>
          <br />
          <label>
            Box Truck Color:
            <input
              type="text"
              name="boxTruckColor"
              value={datosBasicos.boxTruckColor || ""}
              onChange={manejarCambioBasicos}
            />
            {errores.boxTruckColor && (
              <span style={{ color: "red" }}> {errores.boxTruckColor}</span>
            )}
          </label>
          <br />
          <label>
            Foto Box Truck:
            <input
              type="file"
              name="fotoBoxTruck"
              accept="image/*"
              onChange={manejarCambioBasicos}
            />
            {errores.fotoBoxTruck && (
              <span style={{ color: "red" }}> {errores.fotoBoxTruck}</span>
            )}
          </label>
          <br />
          {previews.fotoBoxTruck && (
            <img
              src={previews.fotoBoxTruck}
              alt="Foto Box Truck"
              style={{
                width: 100,
                height: 80,
                objectFit: "cover",
                marginBottom: 10,
              }}
            />
          )}
        </>
      )}

      {tipoCarga === "otro" && (
        <>
          <label>
            Descripcion tipo de carga:
            <input
              type="text"
              name="descripcionOtro"
              value={datosBasicos.descripcionOtro || ""}
              onChange={manejarCambioBasicos}
            />
            {errores.descripcionOtro && (
              <span style={{ color: "red" }}> {errores.descripcionOtro}</span>
            )}
          </label>
        </>
      )}
    </div>
  );
};

export default Paso3CargaDinamica;
