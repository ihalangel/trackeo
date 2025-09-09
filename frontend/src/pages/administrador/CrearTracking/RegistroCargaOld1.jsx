import React, { useState, useEffect } from "react";
import DatosBasicos from "./RegistroCarga/DatosBasicos";
import Ubicaciones from "./RegistroCarga/Ubicaciones";
import NotasConfirmacion from "./RegistroCarga/NotasConfirmacion";

// Datos base
const lugaresIniciales = [
  "Long Beach, CA",
  "Houston, TX",
  "Dallas, TX",
  "Vernon, CA",
];
const tiposCarga = [
  "Contenedor con chassis",
  "Chassis",
  "Trailer",
  "Box truck",
];
const estadosCarga = [
  "Pendiente",
  "Asignada",
  "En proceso",
  "Entregada",
];
const accionesUbicacion = [
  "Pickup (Recogida)",
  "Drop (Entrega)",
  "Loaded (Carga cargada)",
  "Unloaded (Carga descargada)",
  "Transit (En tránsito)",
  "Check-in (Comprobación)",
  "Inspection (Inspección)",
  "Cooling / Enfriar / Guardar",
  "Estacionado / Descanso",
  "Custom / Otro",
];
const conductoresEjemplo = ["Juan Pérez", "Carlos Ruiz", "Ana Gomez"];

export default function RegistroCarga({ cargaInicial, onGuardar, onCancelar }) {
  const [form, setForm] = useState({
    tracking: "",
    tipo: "",
    estado: "Pendiente",
    conductor: "",
    ubicaciones: [
      { tipo: "origen", lugar: "", nuevaDireccion: "", fecha: "", accion: "", geoObligatoria: false },
      { tipo: "destino", lugar: "", nuevaDireccion: "", fecha: "", accion: "", geoObligatoria: false },
    ],
    notas: "",
  });
  const [lugares, setLugares] = useState(lugaresIniciales);
  const [errores, setErrores] = useState({});
  const [paso, setPaso] = useState(1);

  useEffect(() => {
    if (cargaInicial) {
      setForm({
        ...cargaInicial,
        ubicaciones: cargaInicial.ubicaciones || form.ubicaciones,
      });
      setErrores({});
    }
  }, [cargaInicial]);

  // Validaciones dependiendo del paso
  const validarPaso = () => {
    const nuevosErrores = {};
    if (paso === 1) {
      if (!form.tracking.trim()) nuevosErrores.tracking = "El tracking es obligatorio";
      if (!form.tipo.trim()) nuevosErrores.tipo = "Debe seleccionar un tipo de carga";
    } else if (paso === 2) {
      form.ubicaciones.forEach((u, i) => {
        if (!u.lugar && !u.nuevaDireccion.trim()) {
          nuevosErrores[`ubicacion_lugar_${i}`] = "Debe escoger o ingresar un lugar";
        }
        if (!u.fecha.trim()) {
          nuevosErrores[`ubicacion_fecha_${i}`] = "La fecha es obligatoria";
        }
        if (!u.accion.trim()) {
          nuevosErrores[`ubicacion_accion_${i}`] = "Debe seleccionar una acción para la ubicación";
        }
      });
    }
    return nuevosErrores;
  };

  const validarTodo = () => {
    const todosErrores = {};
    if (!form.tracking.trim()) todosErrores.tracking = "El tracking es obligatorio";
    if (!form.tipo.trim()) todosErrores.tipo = "Debe seleccionar un tipo de carga";
    form.ubicaciones.forEach((u, i) => {
      if (!u.lugar && !u.nuevaDireccion.trim()) {
        todosErrores[`ubicacion_lugar_${i}`] = "Debe escoger o ingresar un lugar";
      }
      if (!u.fecha.trim()) {
        todosErrores[`ubicacion_fecha_${i}`] = "La fecha es obligatoria";
      }
      if (!u.accion.trim()) {
        todosErrores[`ubicacion_accion_${i}`] = "Debe seleccionar una acción para la ubicación";
      }
    });
    return todosErrores;
  };

  // Manejadores generales
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    setErrores({});
  };

  const handleUbicacionChange = (index, campo, valor) => {
    setForm(f => {
      const ubicaciones = [...f.ubicaciones];
      ubicaciones[index] = { ...ubicaciones[index], [campo]: valor };
      if (campo === "nuevaDireccion" && valor.trim() !== "") {
        ubicaciones[index].lugar = "";
      }
      return { ...f, ubicaciones };
    });
    setErrores({});
  };

  const agregarUbicacion = (tipo) => {
    setForm(f => ({
      ...f,
      ubicaciones: [
        ...f.ubicaciones,
        { tipo, lugar: "", nuevaDireccion: "", fecha: "", accion: "", geoObligatoria: false },
      ],
    }));
  };

  const quitarUbicacion = (index) => {
    setForm(f => ({
      ...f,
      ubicaciones: f.ubicaciones.filter((_, i) => i !== index),
    }));
    setErrores({});
  };

  const toggleGeoObligatoria = (index) => {
    setForm(f => {
      const ubicaciones = [...f.ubicaciones];
      ubicaciones[index].geoObligatoria = !ubicaciones[index].geoObligatoria;
      return { ...f, ubicaciones };
    });
  };

  // Navegación entre pasos
  const siguiente = () => {
    const validacion = validarPaso();
    setErrores(validacion);
    if (Object.keys(validacion).length === 0) {
      setPaso(p => p + 1);
    }
  };

  const anterior = () => {
    setErrores({});
    setPaso(p => p - 1);
  };

  const guardar = () => {
    const validacion = validarTodo();
    setErrores(validacion);
    if (Object.keys(validacion).length === 0) {
      // Añadir nuevas direcciones a lugares
      form.ubicaciones.forEach(u => {
        const nuevaDir = u.nuevaDireccion.trim();
        if (nuevaDir && !lugares.includes(nuevaDir)) {
          setLugares(prev => [...prev, nuevaDir]);
        }
      });
      onGuardar(form);
      // Reiniciar formulario
      setForm({
        tracking: "",
        tipo: "",
        estado: "Pendiente",
        conductor: "",
        ubicaciones: [
          { tipo: "origen", lugar: "", nuevaDireccion: "", fecha: "", accion: "", geoObligatoria: false },
          { tipo: "destino", lugar: "", nuevaDireccion: "", fecha: "", accion: "", geoObligatoria: false },
        ],
        notas: "",
      });
      setErrores({});
      setPaso(1);
    } else {
      setPaso(1); // Podría regresar a primer paso si hay errores, o manejar según lógica
    }
  };

  // Render paso actual
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16, marginBottom: 20, fontFamily: "Arial, sans-serif" }}>
      {paso === 1 && (
        <DatosBasicos
          form={form}
          onChange={handleChange}
          errores={errores}
          tiposCarga={tiposCarga}
          conductores={conductoresEjemplo}
        />
      )}
      {paso === 2 && (
        <Ubicaciones
          ubicaciones={form.ubicaciones}
          onUbicacionChange={handleUbicacionChange}
          agregarUbicacion={agregarUbicacion}
          quitarUbicacion={quitarUbicacion}
          toggleGeoObligatoria={toggleGeoObligatoria}
          errores={errores}
          lugares={lugares}
          accionesUbicacion={accionesUbicacion}
        />
      )}
      {paso === 3 && (
        <NotasConfirmacion
          notas={form.notas}
          onNotasChange={value => setForm(f => ({ ...f, notas: value }))}
          form={form}
        />
      )}

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
        {paso > 1 ? (
          <button
            type="button"
            onClick={anterior}
            style={{
              backgroundColor: "#9ca3af",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              fontWeight: "bold",
              flex: 1,
              marginRight: 12,
            }}
          >
            Anterior
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              setForm({
                tracking: "",
                tipo: "",
                estado: "Pendiente",
                conductor: "",
                notas: "",
                ubicaciones: [
                  { tipo: "origen", lugar: "", nuevaDireccion: "", fecha: "", accion: "", geoObligatoria: false },
                  { tipo: "destino", lugar: "", nuevaDireccion: "", fecha: "", accion: "", geoObligatoria: false },
                ],
              });
              setErrores({});
              onCancelar();
            }}
            style={{
              backgroundColor: "#9ca3af",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              fontWeight: "bold",
              flex: 1,
              marginRight: 12,
            }}
          >
            Cancelar
          </button>
        )}
        {paso < 3 ? (
          <button
            type="button"
            onClick={siguiente}
            style={{
              backgroundColor: "#2563eb",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              fontWeight: "bold",
              flex: 1,
            }}
          >
            Siguiente
          </button>
        ) : (
          <button
            type="button"
            onClick={guardar}
            style={{
              backgroundColor: "#16a34a",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              fontWeight: "bold",
              flex: 1,
            }}
          >
            Guardar carga
          </button>
        )}
      </div>
    </div>
  );
}
