// TrackingContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const TrackingContext = createContext();

// const lugaresIniciales = [
//   "Long Beach, CA",
//   "Houston, TX",
//   "Dallas, TX",
//   "Vernon, CA",
// ];

const lugaresIniciales = {
  yardas: [
    { id: 1, nombre: "Long Beach Yard" },
    { id: 2, nombre: "Houston Yard" },
  ],
  ocasionales: [
    { id: 3, nombre: "Terminal Ocasional 1" },
    { id: 4, nombre: "Terminal Ocasional 2" },
  ]
};


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

export function TrackingProvider({ children, cargaInicial, onGuardar, onCancelar }) {
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

  // Validación dependiendo del paso
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

  // Validación completa
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

  // Handlers generales
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

  // Navegación pasos
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
      setPaso(1);
    }
  };

  // Función para cancelar edición
  const cancelar = () => {
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
    if (onCancelar) onCancelar();
  };

  return (
    <TrackingContext.Provider
      value={{
        form,
        setForm,
        lugares,
        setLugares,
        errores,
        setErrores,
        paso,
        setPaso,
        tiposCarga,
        estadosCarga,
        accionesUbicacion,
        conductoresEjemplo,
        handleChange,
        handleUbicacionChange,
        agregarUbicacion,
        quitarUbicacion,
        toggleGeoObligatoria,
        siguiente,
        anterior,
        guardar,
        cancelar,
      }}
    >
      {children}
    </TrackingContext.Provider>
  );
}

// Hook para consumir contexto
export function useTracking() {
  return useContext(TrackingContext);
}
