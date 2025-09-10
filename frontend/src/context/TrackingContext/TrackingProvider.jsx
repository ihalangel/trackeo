// // TrackingProvider.jsx
// import React, { createContext, useContext, useState, useEffect } from "react";
// import {
//   lugaresIniciales,
//   tiposCarga,
//   estadosCarga,
//   accionesUbicacion,
//   conductoresEjemplo,
// } from "./constants";
// import { validarPaso, validarTodo } from "./validators";

// export const TrackingContext = createContext();

// export function TrackingProvider({ children, cargaInicial, onGuardar, onCancelar }) {
//   const [form, setForm] = useState({
//     tracking: "",
//     tipo: "",
//     estado: "Pendiente",
//     conductor: "",
//     ubicaciones: [
//       {
//         tipo: "origen",
//         lugar: "",
//         nuevaDireccion: "",
//         fecha: "",
//         accion: "",
//         geoObligatoria: false,
//       },
//       {
//         tipo: "destino",
//         lugar: "",
//         nuevaDireccion: "",
//         fecha: "",
//         accion: "",
//         geoObligatoria: false,
//       },
//     ],
//     notas: "",
//   });
//   const [camposTipoCarga, setCamposTipoCarga] = useState({
//     colorChassis: "",
//     serialChassis: "",
//     colorContainer: "",
//     numeroSello: "",
//     numeroPinkLock: "",
//     tipoTrailer: "",
//     numeroTrailer: "",
//     estadoTrailer: "",
//     dimLargo: "",
//     dimAncho: "",
//     dimAlto: "",
//     tipoBoxTruck: "",
//     numeroBoxTruck: "",
//     camposCustom: [],
//   });
//   const [lugares, setLugares] = useState(lugaresIniciales);
//   const [errores, setErrores] = useState({});
//   const [paso, setPaso] = useState(1);

//   useEffect(() => {
//     if (cargaInicial) {
//       setForm({
//         ...cargaInicial,
//         ubicaciones: cargaInicial.ubicaciones || form.ubicaciones,
//       });
//       if (cargaInicial.camposTipoCarga) {
//         setCamposTipoCarga(cargaInicial.camposTipoCarga);
//       }
//       setErrores({});
//     }
//   }, [cargaInicial]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((f) => ({ ...f, [name]: value }));
//     setErrores({});
//   };

//   const handleUbicacionChange = (index, campo, valor) => {
//     setForm((f) => {
//       const ubicaciones = [...f.ubicaciones];
//       ubicaciones[index] = { ...ubicaciones[index], [campo]: valor };
//       if (campo === "nuevaDireccion" && valor.trim() !== "") {
//         ubicaciones[index].lugar = "";
//       }
//       return { ...f, ubicaciones };
//     });
//     setErrores({});
//   };

//   const handleCamposTipoCargaChange = (campo, valor) => {
//     setCamposTipoCarga((prev) => ({
//       ...prev,
//       [campo]: valor,
//     }));
//     setErrores({});
//   };

//   const agregarCampoCustom = (campoCustom) => {
//     setCamposTipoCarga((prev) => ({
//       ...prev,
//       camposCustom: [...prev.camposCustom, campoCustom],
//     }));
//   };

//   const quitarCampoCustom = (id) => {
//     setCamposTipoCarga((prev) => ({
//       ...prev,
//       camposCustom: prev.camposCustom.filter((c) => c.id !== id),
//     }));
//   };

//   const agregarUbicacion = (tipo) => {
//     setForm((f) => ({
//       ...f,
//       ubicaciones: [
//         ...f.ubicaciones,
//         { tipo, lugar: "", nuevaDireccion: "", fecha: "", accion: "", geoObligatoria: false },
//       ],
//     }));
//   };

//   const quitarUbicacion = (index) => {
//     setForm((f) => ({
//       ...f,
//       ubicaciones: f.ubicaciones.filter((_, i) => i !== index),
//     }));
//     setErrores({});
//   };

//   const toggleGeoObligatoria = (index) => {
//     setForm((f) => {
//       const ubicaciones = [...f.ubicaciones];
//       ubicaciones[index].geoObligatoria = !ubicaciones[index].geoObligatoria;
//       return { ...f, ubicaciones };
//     });
//   };

//   const siguiente = () => {
//     const validacion = validarPaso(paso, form, camposTipoCarga);
//     setErrores(validacion);
//     if (Object.keys(validacion).length === 0) {
//       setPaso((p) => p + 1);
//     }
//   };

//   const anterior = () => {
//     setErrores({});
//     setPaso((p) => p - 1);
//   };

//   const guardar = () => {
//     const validacion = validarTodo(form, camposTipoCarga);
//     setErrores(validacion);
//     if (Object.keys(validacion).length === 0) {
//       form.ubicaciones.forEach((u) => {
//         const nuevaDir = u.nuevaDireccion.trim();
//         if (nuevaDir && !lugares.includes(nuevaDir)) {
//           setLugares((prev) => [...prev, nuevaDir]);
//         }
//       });
//       onGuardar({ ...form, camposTipoCarga });
//       setForm({
//         tracking: "",
//         tipo: "",
//         estado: "Pendiente",
//         conductor: "",
//         ubicaciones: [
//           {
//             tipo: "origen",
//             lugar: "",
//             nuevaDireccion: "",
//             fecha: "",
//             accion: "",
//             geoObligatoria: false,
//           },
//           {
//             tipo: "destino",
//             lugar: "",
//             nuevaDireccion: "",
//             fecha: "",
//             accion: "",
//             geoObligatoria: false,
//           },
//         ],
//         notas: "",
//       });
//       setCamposTipoCarga({
//         colorChassis: "",
//         serialChassis: "",
//         colorContainer: "",
//         numeroSello: "",
//         numeroPinkLock: "",
//         tipoTrailer: "",
//         numeroTrailer: "",
//         estadoTrailer: "",
//         dimLargo: "",
//         dimAncho: "",
//         dimAlto: "",
//         tipoBoxTruck: "",
//         numeroBoxTruck: "",
//         camposCustom: [],
//       });
//       setErrores({});
//       setPaso(1);
//     } else {
//       setPaso(1);
//     }
//   };

//   const cancelar = () => {
//     setForm({
//       tracking: "",
//       tipo: "",
//       estado: "Pendiente",
//       conductor: "",
//       ubicaciones: [
//         {
//           tipo: "origen",
//           lugar: "",
//           nuevaDireccion: "",
//           fecha: "",
//           accion: "",
//           geoObligatoria: false,
//         },
//         {
//           tipo: "destino",
//           lugar: "",
//           nuevaDireccion: "",
//           fecha: "",
//           accion: "",
//           geoObligatoria: false,
//         },
//       ],
//       notas: "",
//     });
//     setCamposTipoCarga({
//       colorChassis: "",
//       serialChassis: "",
//       colorContainer: "",
//       numeroSello: "",
//       numeroPinkLock: "",
//       tipoTrailer: "",
//       numeroTrailer: "",
//       estadoTrailer: "",
//       dimLargo: "",
//       dimAncho: "",
//       dimAlto: "",
//       tipoBoxTruck: "",
//       numeroBoxTruck: "",
//       camposCustom: [],
//     });
//     setErrores({});
//     setPaso(1);
//     if (onCancelar) onCancelar();
//   };

//   return (
//     <TrackingContext.Provider
//       value={{
//         form,
//         setForm,
//         lugares,
//         setLugares,
//         errores,
//         setErrores,
//         paso,
//         setPaso,
//         tiposCarga,
//         estadosCarga,
//         accionesUbicacion,
//         conductoresEjemplo,
//         handleChange,
//         handleUbicacionChange,
//         agregarUbicacion,
//         quitarUbicacion,
//         toggleGeoObligatoria,
//         siguiente,
//         anterior,
//         guardar,
//         cancelar,
//         camposTipoCarga,
//         handleCamposTipoCargaChange,
//         agregarCampoCustom,
//         quitarCampoCustom,
//       }}
//     >
//       {children}
//     </TrackingContext.Provider>
//   );
// }












































































































import React, { createContext, useContext, useState, useEffect } from "react";
import {
  lugaresIniciales,
  tiposCarga,
  estadosCarga,
  accionesUbicacion,
  conductoresEjemplo,
} from "./constants";
import { validarPaso, validarTodo } from "./validators";

export const TrackingContext = createContext();

export function TrackingProvider({ children, cargaInicial, onGuardar, onCancelar }) {
  const [form, setForm] = useState({
    tracking: "",
    estado: "Pendiente",
    conductor: "",
    ubicaciones: [
      {
        tipo: "origen",
        lugar: "",
        nuevaDireccion: "",
        fecha: "",
        accion: "",
        geoObligatoria: false,
        finalizado: false,
      },
      {
        tipo: "destino",
        lugar: "",
        nuevaDireccion: "",
        fecha: "",
        accion: "",
        geoObligatoria: false,
        finalizado: false,
      },
    ],
    notas: "",
  });

  // Array donde cada elemento contiene campos específicos de tipo de carga para cada ubicación/destino
  const [camposTipoCarga, setCamposTipoCarga] = useState([
    {
      tipo: "", // Aquí guardamos el tipo para sincronizar con form.ubicaciones[i].tipo si quieres
      colorChassis: "",
      serialChassis: "",
      colorContainer: "",
      numeroSello: "",
      numeroPinkLock: "",
      tipoTrailer: "",
      numeroTrailer: "",
      estadoTrailer: "",
      dimLargo: "",
      dimAncho: "",
      dimAlto: "",
      tipoBoxTruck: "",
      numeroBoxTruck: "",
      camposCustom: [],
    },
    {
      tipo: "",
      colorChassis: "",
      serialChassis: "",
      colorContainer: "",
      numeroSello: "",
      numeroPinkLock: "",
      tipoTrailer: "",
      numeroTrailer: "",
      estadoTrailer: "",
      dimLargo: "",
      dimAncho: "",
      dimAlto: "",
      tipoBoxTruck: "",
      numeroBoxTruck: "",
      camposCustom: [],
    },
  ]);

  const [lugares, setLugares] = useState(lugaresIniciales);
  const [errores, setErrores] = useState({});
  const [paso, setPaso] = useState(1);

  // Estado para controlar índice actual del paso 2 (tipo carga) que se está editando (por ubicación)
  const [indiceCargaActual, setIndiceCargaActual] = useState(0);

  // Sincroniza carga inicial si existe
  useEffect(() => {
    if (cargaInicial) {
      setForm((f) => ({
        ...f,
        ...cargaInicial,
        ubicaciones: cargaInicial.ubicaciones || f.ubicaciones,
      }));

      if (cargaInicial.camposTipoCarga && Array.isArray(cargaInicial.camposTipoCarga)) {
        setCamposTipoCarga(cargaInicial.camposTipoCarga);
      }

      setErrores({});
      setIndiceCargaActual(0);
    }
  }, [cargaInicial]);

  // Actualiza campos básicos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrores({});
  };

  // Actualiza una ubicación especifica por índice
  const handleUbicacionChange = (index, campo, valor) => {
    setForm((f) => {
      const ubicaciones = [...f.ubicaciones];
      ubicaciones[index] = { ...ubicaciones[index], [campo]: valor };
      if (campo === "nuevaDireccion" && valor.trim() !== "") {
        ubicaciones[index].lugar = "";
      }
      return { ...f, ubicaciones };
    });
    setErrores({});
  };

  // Actualiza un campo de tipo de carga específico para la ubicación actual (indiceCargaActual)
  const handleCamposTipoCargaChange = (campo, valor) => {
    setCamposTipoCarga((prev) => {
      const copia = [...prev];
      copia[indiceCargaActual] = {
        ...copia[indiceCargaActual],
        [campo]: valor,
      };
      return copia;
    });
    setErrores({});
  };

  // Agrega una ubicación y simultáneamente un objeto de campos tipo carga vacío para esa ubicación nueva
  const agregarUbicacion = (tipo) => {
    setForm((f) => ({
      ...f,
      ubicaciones: [
        ...f.ubicaciones,
        {
          tipo,
          lugar: "",
          nuevaDireccion: "",
          fecha: "",
          accion: "",
          geoObligatoria: false,
          finalizado: false,
        },
      ],
    }));
    setCamposTipoCarga((prev) => [
      ...prev,
      {
        tipo: "",
        colorChassis: "",
        serialChassis: "",
        colorContainer: "",
        numeroSello: "",
        numeroPinkLock: "",
        tipoTrailer: "",
        numeroTrailer: "",
        estadoTrailer: "",
        dimLargo: "",
        dimAncho: "",
        dimAlto: "",
        tipoBoxTruck: "",
        numeroBoxTruck: "",
        camposCustom: [],
      },
    ]);
    setIndiceCargaActual(camposTipoCarga.length); // Vamos a la nueva carga agregada
  };

  // Quita una ubicación y su carga asociada, ajusta índice actual si hace falta
  const quitarUbicacion = (index) => {
    setForm((f) => ({
      ...f,
      ubicaciones: f.ubicaciones.filter((_, i) => i !== index),
    }));
    setCamposTipoCarga((prev) => prev.filter((_, i) => i !== index));
    setErrores({});
    if (indiceCargaActual >= index && indiceCargaActual > 0) {
      setIndiceCargaActual(indiceCargaActual - 1);
    }
  };

  // Alterna geoObligatoria para una ubicación
  const toggleGeoObligatoria = (index) => {
    setForm((f) => {
      const ubicaciones = [...f.ubicaciones];
      ubicaciones[index].geoObligatoria = !ubicaciones[index].geoObligatoria;
      return { ...f, ubicaciones };
    });
  };

  // Navegación de pasos, validando cada paso
  const siguiente = () => {
    // Si estamos en paso 2 y hay múltiples cargas, navegar entre ellas
    if (paso === 2 && indiceCargaActual < camposTipoCarga.length - 1) {
      setIndiceCargaActual(indiceCargaActual + 1);
      return; // no avanzar al paso siguiente todavía
    }
    const validacion = validarPaso(paso, form, camposTipoCarga);
    setErrores(validacion);
    if (Object.keys(validacion).length === 0) {
      setPaso((p) => p + 1);
      setIndiceCargaActual(0); // reset cuando cambie paso
    }
  };

  const anterior = () => {
    setErrores({});
    if (paso === 2 && indiceCargaActual > 0) {
      setIndiceCargaActual(indiceCargaActual - 1);
      return; // no retroceder paso, solo mover indice carga
    }
    setPaso((p) => p - 1);
  };

  // Función para conservar los datos de carga anterior en carga actual
  const conservarDatosCargaAnterior = () => {
    if (indiceCargaActual > 0) {
      setCamposTipoCarga((prev) => {
        const copia = [...prev];
        copia[indiceCargaActual] = { ...copia[indiceCargaActual - 1] };
        return copia;
      });
    }
  };

  // Guardar todo
  const guardar = () => {
    const validacion = validarTodo(form, camposTipoCarga);
    setErrores(validacion);
    if (Object.keys(validacion).length === 0) {
      form.ubicaciones.forEach((u) => {
        const nuevaDir = u.nuevaDireccion.trim();
        if (nuevaDir && !lugares.includes(nuevaDir)) {
          setLugares((prev) => [...prev, nuevaDir]);
        }
      });
      onGuardar({ ...form, camposTipoCarga });
      // Reset form completo
      setForm({
        tracking: "",
        estado: "Pendiente",
        conductor: "",
        ubicaciones: [
          {
            tipo: "origen",
            lugar: "",
            nuevaDireccion: "",
            fecha: "",
            accion: "",
            geoObligatoria: false,
            finalizado: false,
          },
          {
            tipo: "destino",
            lugar: "",
            nuevaDireccion: "",
            fecha: "",
            accion: "",
            geoObligatoria: false,
            finalizado: false,
          },
        ],
        notas: "",
      });
      setCamposTipoCarga([
        {
          tipo: "",
          colorChassis: "",
          serialChassis: "",
          colorContainer: "",
          numeroSello: "",
          numeroPinkLock: "",
          tipoTrailer: "",
          numeroTrailer: "",
          estadoTrailer: "",
          dimLargo: "",
          dimAncho: "",
          dimAlto: "",
          tipoBoxTruck: "",
          numeroBoxTruck: "",
          camposCustom: [],
        },
        {
          tipo: "",
          colorChassis: "",
          serialChassis: "",
          colorContainer: "",
          numeroSello: "",
          numeroPinkLock: "",
          tipoTrailer: "",
          numeroTrailer: "",
          estadoTrailer: "",
          dimLargo: "",
          dimAncho: "",
          dimAlto: "",
          tipoBoxTruck: "",
          numeroBoxTruck: "",
          camposCustom: [],
        },
      ]);
      setErrores({});
      setPaso(1);
      setIndiceCargaActual(0);
    } else {
      setPaso(1);
      setIndiceCargaActual(0);
    }
  };

  // Cancelar el formulario y resetear
  const cancelar = () => {
    setForm({
      tracking: "",
      estado: "Pendiente",
      conductor: "",
      ubicaciones: [
        {
          tipo: "origen",
          lugar: "",
          nuevaDireccion: "",
          fecha: "",
          accion: "",
          geoObligatoria: false,
          finalizado: false,
        },
        {
          tipo: "destino",
          lugar: "",
          nuevaDireccion: "",
          fecha: "",
          accion: "",
          geoObligatoria: false,
          finalizado: false,
        },
      ],
      notas: "",
    });
    setCamposTipoCarga([
      {
        tipo: "",
        colorChassis: "",
        serialChassis: "",
        colorContainer: "",
        numeroSello: "",
        numeroPinkLock: "",
        tipoTrailer: "",
        numeroTrailer: "",
        estadoTrailer: "",
        dimLargo: "",
        dimAncho: "",
        dimAlto: "",
        tipoBoxTruck: "",
        numeroBoxTruck: "",
        camposCustom: [],
      },
      {
        tipo: "",
        colorChassis: "",
        serialChassis: "",
        colorContainer: "",
        numeroSello: "",
        numeroPinkLock: "",
        tipoTrailer: "",
        numeroTrailer: "",
        estadoTrailer: "",
        dimLargo: "",
        dimAncho: "",
        dimAlto: "",
        tipoBoxTruck: "",
        numeroBoxTruck: "",
        camposCustom: [],
      },
    ]);
    setErrores({});
    setPaso(1);
    setIndiceCargaActual(0);
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
        camposTipoCarga,
        handleCamposTipoCargaChange,
        agregarCampoCustom: (campoCustom) => {
          setCamposTipoCarga((prev) => {
            const copia = [...prev];
            copia[indiceCargaActual].camposCustom.push(campoCustom);
            return copia;
          });
        },
        quitarCampoCustom: (id) => {
          setCamposTipoCarga((prev) => {
            const copia = [...prev];
            copia[indiceCargaActual].camposCustom = copia[indiceCargaActual].camposCustom.filter((c) => c.id !== id);
            return copia;
          });
        },
        indiceCargaActual,
        setIndiceCargaActual,
        conservarDatosCargaAnterior,
      }}
    >
      {children}
    </TrackingContext.Provider>
  );
}



