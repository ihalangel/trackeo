import React, { useState } from "react";
// import "./FormularioWizardTrackingYarda.css";
import ValidacionCodigoAcceso from "./components/ValidacionCodigoAcceso.jsx";
import SelectorCamion from "./components/SelectorCamion.jsx";
import Paso3CargaDinamica from "./components/Paso3CargaDinamica.jsx";
import CamposAdicionales from "./components/CamposAdicionales.jsx";
import useManejoArchivos from "./components/manejoArchivos.jsx";

const FormularioWizardTrackingYarda = ({ userSession, onSubmit, onClose }) => {
  const [step, setStep] = useState(1);
  const [logueado, setLogueado] = useState(!!userSession);
  const [tienePerfil, setTienePerfil] = useState(null);
  const [codigoAcceso, setCodigoAcceso] = useState("");
  const [codigoValido, setCodigoValido] = useState(false);
  const [errorCodigo, setErrorCodigo] = useState("");
  const [listaCamionesUsuario, setListaCamionesUsuario] = useState([]);
  const [camionSeleccionado, setCamionSeleccionado] = useState(null);
  const [datosBasicos, setDatosBasicos] = useState({
    tipoCarga: "",
    chassisSerial: "",
    chassisColor: "",
    contenedorSerial: "",
    contenedorColor: "",
    trailerSerial: "",
    trailerColor: "",
    boxTruckSerial: "",
    boxTruckColor: "",
    descripcionOtro: "",
    pinLock: "",
    fotoChasis: null,
    fotoContenedor: null,
    fotoPinLock: null,
    fotoTrailer: null,
    fotoBoxTruck: null,
    truckColor: "",
    truckPlaca: "",
  });
  const [datosAdicionales, setDatosAdicionales] = useState({
    fotoConductor: null,
    licenciaConductor: null,
  });
  const [errores, setErrores] = useState({});

  React.useEffect(() => {
    if (logueado && userSession) {
      const camiones = [
        { id: 1, placa: "XYZ-123", color: "Rojo" },
        { id: 2, placa: "ABC-987", color: "Azul" },
      ];
      setListaCamionesUsuario(camiones);
    }
  }, [logueado, userSession]);

  const {
    previews: previewsBasicos,
    errores: erroresArchivosBasicos,
    validarArchivo: validarArchivoBasico,
  } = useManejoArchivos({
    fotoChasis: datosBasicos.fotoChasis,
    fotoContenedor: datosBasicos.fotoContenedor,
    fotoPinLock: datosBasicos.fotoPinLock,
  });

  const {
    previews: previewsAdicionales,
    errores: erroresArchivosAdicionales,
    validarArchivo: validarArchivoAdicional,
  } = useManejoArchivos({
    fotoConductor: datosAdicionales.fotoConductor,
    licenciaConductor: datosAdicionales.licenciaConductor,
  });

  const manejarCambioBasicos = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      const archivo = files[0];
      if (!validarArchivoBasico(name, archivo)) return;
      setDatosBasicos((prev) => ({ ...prev, [name]: archivo }));
    } else {
      setDatosBasicos((prev) => ({ ...prev, [name]: value }));
    }
  };

  const manejarCambioAdicionales = (e) => {
    const { name, files } = e.target;
    if (files) {
      const archivo = files[0];
      if (!validarArchivoAdicional(name, archivo)) return;
      setDatosAdicionales((prev) => ({ ...prev, [name]: archivo }));
    }
  };

  const manejarSeleccionCamion = (camion) => {
    setCamionSeleccionado(camion);
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

  const validarCodigoAcceso = () => {
    if (codigoAcceso === "COLAB123") {
      setCodigoValido(true);
      setErrorCodigo("");
    } else {
      setCodigoValido(false);
      setErrorCodigo("Código de acceso inválido");
    }
  };

  const validarPaso = () => {
    let valid = true;
    let nuevosErrores = {};
    if (step === 1) {
      if (tienePerfil === false && !codigoValido) {
        nuevosErrores.codigoAcceso = "Debe validar un código válido";
        valid = false;
      }
    }
    if (step === 2) {
      if (!camionSeleccionado) {
        if (!datosBasicos.truckColor || datosBasicos.truckColor.trim() === "") {
          nuevosErrores.truckColor = "Requerido";
          valid = false;
        }
        if (!datosBasicos.truckPlaca || datosBasicos.truckPlaca.trim() === "") {
          nuevosErrores.truckPlaca = "Requerido";
          valid = false;
        }
      }
    }
    if (step === 3) {
      const tipo = datosBasicos.tipoCarga;
      let camposRequeridos = [];
      let archivosRequeridos = [];
      switch (tipo) {
        case "chassis":
          camposRequeridos = ["chassisSerial", "chassisColor"];
          archivosRequeridos = ["fotoChasis"];
          break;
        case "contenedor":
          camposRequeridos = [
            "chassisSerial",
            "chassisColor",
            "contenedorSerial",
            "contenedorColor",
            "pinLock",
          ];
          archivosRequeridos = ["fotoChasis", "fotoContenedor", "fotoPinLock"];
          break;
        case "trailer":
          camposRequeridos = ["trailerSerial", "trailerColor", "pinLock"];
          archivosRequeridos = ["fotoTrailer", "fotoPinLock"];
          break;
        case "boxTruck":
          camposRequeridos = ["boxTruckSerial", "boxTruckColor"];
          archivosRequeridos = ["fotoBoxTruck"];
          break;
        case "otro":
          camposRequeridos = ["descripcionOtro"];
          archivosRequeridos = [];
          break;
        default:
          nuevosErrores.tipoCarga = "Debe seleccionar un tipo de carga";
          valid = false;
      }
      camposRequeridos.forEach((campo) => {
        if (
          !datosBasicos[campo] ||
          datosBasicos[campo].toString().trim() === ""
        ) {
          nuevosErrores[campo] = "Requerido";
          valid = false;
        }
      });
      archivosRequeridos.forEach((campo) => {
        if (!datosBasicos[campo]) {
          nuevosErrores[campo] = "Requerido";
          valid = false;
        }
      });
    }
    if (step === 4) {
      if ((codigoValido && !logueado) || !logueado) {
        if (!datosAdicionales.fotoConductor) {
          nuevosErrores.fotoConductor = "Requerido";
          valid = false;
        }
        if (!datosAdicionales.licenciaConductor) {
          nuevosErrores.licenciaConductor = "Requerido";
          valid = false;
        }
      }
    }
    setErrores(nuevosErrores);
    return valid;
  };

  const avanzarPaso = () => {
    if (!validarPaso()) return;
    setStep((prev) => prev + 1);
  };

  const retrocederPaso = () => {
    setStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!validarPaso()) return;
    const datosCompletos = {
      tienePerfil: tienePerfil || logueado,
      datosBasicos,
      datosAdicionales: codigoValido || logueado ? datosAdicionales : null,
      camionSeleccionado,
      usuarioLogueado: userSession || null,
    };
    onSubmit && onSubmit(datosCompletos);
  };

  return (
    <div className="form-contenedor">
      <h2 className="form-titulo">Registrar Carga - Paso {step} de 5</h2>

      {step === 1 && (
        <>
          {!logueado && tienePerfil === null && (
            <>
              <p className="form-label">¿Tienes perfil en la aplicación?</p>
              <button
                className="form-boton-pequeno"
                onClick={() => setTienePerfil(true)}
              >
                Sí
              </button>{" "}
              <button
                className="form-boton-pequeno"
                onClick={() => setTienePerfil(false)}
              >
                No
              </button>
            </>
          )}
          {!logueado && tienePerfil === true && (
            <>
              <p className="form-label">
                Por favor inicia sesión para continuar.
              </p>
              <button
                className="form-boton"
                onClick={() => alert("Función de login no implementada")}
              >
                Iniciar sesión
              </button>
              <button
                className="form-boton-pequeno"
                onClick={() => setTienePerfil(null)}
              >
                Volver
              </button>
            </>
          )}
          {!logueado && tienePerfil === false && !codigoValido && (
            <>
           {/*   <ValidacionCodigoAcceso
                codigoAcceso={codigoAcceso}
                setCodigoAcceso={setCodigoAcceso}
                validarCodigo={validarCodigoAcceso}
                errorCodigo={errorCodigo || errores.codigoAcceso}
                onVolver={() => setTienePerfil(null)}
              />*/}
            </>
          )}
          {(logueado || codigoValido) && (
            <>
              <p className="form-label">¡Código válido! Puedes continuar.</p>
              <button className="form-boton" onClick={avanzarPaso}>
                Siguiente
              </button>
            </>
          )}
        </>
      )}

      {step === 2 && (
        <>
          {logueado && (
            <SelectorCamion
              listaCamionesUsuario={listaCamionesUsuario}
              camionSeleccionado={camionSeleccionado}
              setCamionSeleccionado={manejarSeleccionCamion}
              setDatosBasicos={setDatosBasicos}
            />
          )}
          {(!camionSeleccionado || !logueado) && (
            <div>
              <h3 className="form-titulo">Datos del Camión</h3>
              <label className="form-label">
                Color del Truck:
                <input
                  type="text"
                  name="truckColor"
                  className="form-input"
                  value={datosBasicos.truckColor}
                  onChange={manejarCambioBasicos}
                />
                {errores.truckColor && (
                  <div className="form-error">{errores.truckColor}</div>
                )}
              </label>
              <br />
              <label className="form-label">
                Placa del Truck:
                <input
                  type="text"
                  name="truckPlaca"
                  className="form-input"
                  value={datosBasicos.truckPlaca}
                  onChange={manejarCambioBasicos}
                />
                {errores.truckPlaca && (
                  <div className="form-error">{errores.truckPlaca}</div>
                )}
              </label>
            </div>
          )}
          <div
            className="form-group"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <button className="form-boton-pequeno" onClick={retrocederPaso}>
              Anterior
            </button>
            <button className="form-boton-pequeno" onClick={avanzarPaso}>
              Siguiente
            </button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <Paso3CargaDinamica
            datosBasicos={datosBasicos}
            setDatosBasicos={setDatosBasicos}
            errores={{ ...errores, ...erroresArchivosBasicos }}
            setErrores={setErrores}
            previews={previewsBasicos}
            manejarCambioBasicos={manejarCambioBasicos}
          />
          <div
            className="form-group"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <button className="form-boton-pequeno" onClick={retrocederPaso}>
              Anterior
            </button>
            <button className="form-boton-pequeno" onClick={avanzarPaso}>
              Siguiente
            </button>
          </div>
        </>
      )}

      {step === 4 && (
        <>
          {codigoValido && !logueado && (
            <CamposAdicionales
              datosAdicionales={datosAdicionales}
              manejarCambioAdicionales={manejarCambioAdicionales}
              errores={{ ...errores, ...erroresArchivosAdicionales }}
              previews={previewsAdicionales}
            />
          )}
          <div
            className="form-group"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <button className="form-boton-pequeno" onClick={retrocederPaso}>
              Anterior
            </button>
            <button className="form-boton-pequeno" onClick={avanzarPaso}>
              Siguiente
            </button>
          </div>
        </>
      )}

      {step === 5 && (
        <>
          <h3 className="form-titulo">Revisión y Confirmación</h3>
          <p className="form-label">
            Por favor revisa los datos antes de enviar.
          </p>
          <pre
            className="form-input"
            style={{
              backgroundColor: "#eee",
              padding: 10,
              borderRadius: 4,
              maxHeight: 200,
              overflowY: "auto",
            }}
          >
            {JSON.stringify(
              {
                tienePerfil,
                camionSeleccionado,
                datosBasicos,
                datosAdicionales,
              },
              null,
              2
            )}
          </pre>
          <div
            className="form-group"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <button className="form-boton-pequeno" onClick={retrocederPaso}>
              Anterior
            </button>
            <button className="form-boton-pequeno" onClick={manejarEnvio}>
              Enviar
            </button>
          </div>
        </>
      )}

      <div style={{ marginTop: 20 }}>
        <button className="form-boton-pequeno" onClick={onClose}>
          Cancelar
        </button>
      </div>
    </div>
  );
};
export default FormularioWizardTrackingYarda;
