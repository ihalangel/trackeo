// constants.js
export const lugaresIniciales = {
  yardas: [
    { id: 1, nombre: "Long Beach Yard" },
    { id: 2, nombre: "Houston Yard" },
  ],
  ocasionales: [
    { id: 3, nombre: "Terminal Ocasional 1" },
    { id: 4, nombre: "Terminal Ocasional 2" },
  ],
};

export const tiposCarga = [
  "Contenedor con chassis",
  "Chassis",
  "Trailer",
  "Box truck",
];

export const estadosCarga = [
  "Pendiente",
  "Asignada",
  "En proceso",
  "Entregada",
];

export const accionesUbicacion = [
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

export const conductoresEjemplo = ["Juan Pérez", "Carlos Ruiz", "Ana Gomez"];
