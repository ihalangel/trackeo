import React, { useState, useEffect } from "react";

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
      // Iniciamos con un origen y un destino obligatorios
      { tipo: "origen", lugar: "", nuevaDireccion: "", fecha: "", accion: "", geoObligatoria: false },
      { tipo: "destino", lugar: "", nuevaDireccion: "", fecha: "", accion: "", geoObligatoria: false },
    ],
    notas: "",
  });

  const [lugares, setLugares] = useState(lugaresIniciales);
  const [errores, setErrores] = useState({});

  useEffect(() => {
    if (cargaInicial) {
      setForm({
        ...cargaInicial,
        ubicaciones: cargaInicial.ubicaciones || form.ubicaciones,
      });
      setErrores({});
    }
  }, [cargaInicial]);

  // Validación básica del formulario completo
  const validar = () => {
    const nuevosErrores = {};
    if (!form.tracking.trim()) nuevosErrores.tracking = "El tracking es obligatorio";
    if (!form.tipo.trim()) nuevosErrores.tipo = "Debe seleccionar un tipo de carga";

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

    return nuevosErrores;
  };

  // Cambiar campos simples
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value}));
    setErrores({});
  };

  // Cambiar campos dentro de ubicaciones
  const handleUbicacionChange = (index, campo, valor) => {
    setForm(f => {
      const ubicaciones = [...f.ubicaciones];
      ubicaciones[index] = { ...ubicaciones[index], [campo]: valor };

      if (campo === "nuevaDireccion" && valor.trim() !== "") {
        ubicaciones[index].lugar = ""; // Limpiar lugar si se ingresa nueva dirección
      }

      return { ...f, ubicaciones };
    });
    setErrores({});
  };

  // Agregar nueva ubicación del tipo indicado
  const agregarUbicacion = (tipo) => {
    setForm(f => ({
      ...f,
      ubicaciones: [
        ...f.ubicaciones,
        { tipo, lugar: "", nuevaDireccion: "", fecha: "", accion: "", geoObligatoria: false },
      ],
    }));
  };

  // Quitar ubicación por índice
  const quitarUbicacion = (index) => {
    setForm(f => ({
      ...f,
      ubicaciones: f.ubicaciones.filter((_, i) => i !== index),
    }));
    setErrores({});
  };

  // Alternar checkbox de geolocalización obligatoria
  const toggleGeoObligatoria = (index) => {
    setForm(f => {
      const ubicaciones = [...f.ubicaciones];
      ubicaciones[index].geoObligatoria = !ubicaciones[index].geoObligatoria;
      return { ...f, ubicaciones };
    });
  };

  // Guardar carga: validar y añadir nuevas direcciones a lugares
  const guardar = () => {
    const validacion = validar();
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
    }
  };

  return (
    <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16, marginBottom: 20, fontFamily: "Arial, sans-serif" }}>
      {/* Campos básicos */}
      <label style={{ display: "block", marginBottom: 8, fontWeight: "600" }}>
        Tracking:
        <input
          type="text"
          name="tracking"
          value={form.tracking}
          onChange={handleChange}
          style={{
            marginTop: 4,
            marginBottom: errores.tracking ? 4 : 12,
            width: "100%",
            padding: 8,
            borderRadius: 4,
            border: errores.tracking ? "1px solid #dc2626" : "1px solid #ccc",
            outline: errores.tracking ? "none" : undefined,
          }}
          aria-invalid={errores.tracking ? "true" : "false"}
        />
      </label>
      {errores.tracking && <p style={{ color: "#dc2626", marginTop: 0, marginBottom: 8, fontSize: 14 }}>{errores.tracking}</p>}

      <label style={{ display: "block", marginBottom: 8, fontWeight: "600" }}>
        Tipo de carga:
        <select
          name="tipo"
          value={form.tipo}
          onChange={handleChange}
          style={{
            marginTop: 4,
            width: "100%",
            padding: 8,
            borderRadius: 4,
            border: errores.tipo ? "1px solid #dc2626" : "1px solid #ccc",
            marginBottom: errores.tipo ? 4 : 12,
            outline: errores.tipo ? "none" : undefined,
          }}
          aria-invalid={errores.tipo ? "true" : "false"}
        >
          <option value="">Selecciona tipo</option>
          {tiposCarga.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </label>
      {errores.tipo && <p style={{ color: "#dc2626", marginTop: 0, marginBottom: 8, fontSize: 14 }}>{errores.tipo}</p>}

      {/* Sección ubicaciones */}
      <div>
        <h3 style={{ marginBottom: 8 }}>Ubicaciones</h3>
        {form.ubicaciones.map((u, i) => (
          <div key={i} style={{ border: "1px solid #ccc", borderRadius: 6, padding: 8, marginBottom: 12 }}>
            <strong>{u.tipo === "origen" ? "Origen" : "Destino"} {i + 1}</strong>
            <div style={{ marginTop: 8, marginBottom: 8 }}>
              <label>
                Lugar (seleccionar o crear):
                <select
                  value={u.lugar}
                  onChange={e => handleUbicacionChange(i, "lugar", e.target.value)}
                  style={{ marginLeft: 8, padding: 4, borderRadius: 4, border: "1px solid #ccc" }}
                >
                  <option value="">-- Seleccionar lugar --</option>
                  {lugares.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </label>
              <span style={{ marginLeft: 16 }}>o ingresar nueva dirección:</span>
              <input
                type="text"
                value={u.nuevaDireccion}
                onChange={e => handleUbicacionChange(i, "nuevaDireccion", e.target.value)}
                placeholder="Nueva dirección"
                style={{ marginLeft: 8, padding: 4, borderRadius: 4, border: "1px solid #ccc", width: "35%" }}
              />
              {errores[`ubicacion_lugar_${i}`] && (
                <p style={{ color: "#dc2626", marginTop: 4, fontSize: 13 }}>{errores[`ubicacion_lugar_${i}`]}</p>
              )}
            </div>
            <div style={{ marginBottom: 8 }}>
              <label>
                Fecha estimada {u.tipo === "origen" ? "pickup" : "entrega"}:
                <input
                  type="datetime-local"
                  value={u.fecha}
                  onChange={e => handleUbicacionChange(i, "fecha", e.target.value)}
                  style={{ marginLeft: 8, padding: 4, borderRadius: 4, border: "1px solid #ccc" }}
                />
              </label>
              {errores[`ubicacion_fecha_${i}`] && (
                <p style={{ color: "#dc2626", marginTop: 4, fontSize: 13 }}>{errores[`ubicacion_fecha_${i}`]}</p>
              )}
            </div>
            <div style={{ marginBottom: 8 }}>
              <label>
                Acción:
                <select
                  value={u.accion}
                  onChange={e => handleUbicacionChange(i, "accion", e.target.value)}
                  style={{ marginLeft: 8, padding: 4, borderRadius: 4, border: errores[`ubicacion_accion_${i}`] ? "1px solid #dc2626" : "1px solid #ccc" }}
                >
                  <option value="">-- Seleccionar acción --</option>
                  {accionesUbicacion.map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </label>
              {errores[`ubicacion_accion_${i}`] && (
                <p style={{ color: "#dc2626", marginTop: 4, fontSize: 13 }}>{errores[`ubicacion_accion_${i}`]}</p>
              )}
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={u.geoObligatoria}
                  onChange={() => toggleGeoObligatoria(i)}
                  style={{ marginRight: 6 }}
                />
                Geolocalización obligatoria para comprobación
              </label>
            </div>
            {form.ubicaciones.length > 2 && (
              <button
                type="button"
                onClick={() => quitarUbicacion(i)}
                style={{
                  marginTop: 8,
                  backgroundColor: "#dc2626",
                  color: "white",
                  border: "none",
                  borderRadius: 4,
                  padding: "4px 8px",
                  cursor: "pointer",
                }}
              >
                Quitar {u.tipo === "origen" ? "origen" : "destino"}
              </button>
            )}
          </div>
        ))}
        <div style={{ display: "flex", gap: 12 }}>
          <button
            type="button"
            onClick={() => agregarUbicacion("origen")}
            style={{
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: 4,
              padding: "8px 12px",
              cursor: "pointer",
              flex: 1,
            }}
          >
            + Agregar origen
          </button>
          <button
            type="button"
            onClick={() => agregarUbicacion("destino")}
            style={{
              backgroundColor: "#059669",
              color: "white",
              border: "none",
              borderRadius: 4,
              padding: "8px 12px",
              cursor: "pointer",
              flex: 1,
            }}
          >
            + Agregar destino
          </button>
        </div>
      </div>

      {/* Conductor asignado */}
      <div style={{ marginTop: 16 }}>
        <label style={{ fontWeight: "600" }}>
          Conductor asignado:
          <select
            name="conductor"
            value={form.conductor}
            onChange={handleChange}
            style={{ marginTop: 4, width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
          >
            <option value="">No asignado</option>
            {conductoresEjemplo.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </label>
      </div>

      {/* Notas */}
      <div style={{ marginTop: 16 }}>
        <label style={{ fontWeight: "600" }}>
          Notas o detalles adicionales:
          <textarea
            name="notas"
            value={form.notas || ""}
            onChange={e => setForm(f => ({ ...f, notas: e.target.value }))}
            style={{ marginTop: 4, width: "100%", minHeight: 60, padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
          />
        </label>
      </div>

      {/* Botones */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
        <button
          onClick={() => { setForm({
            tracking: "",
            tipo: "",
            estado: "Pendiente",
            conductor: "",
            notas: "",
            ubicaciones: [
              { tipo: "origen", lugar: "", nuevaDireccion: "", fecha: "", accion: "", geoObligatoria: false },
              { tipo: "destino", lugar: "", nuevaDireccion: "", fecha: "", accion: "", geoObligatoria: false },
            ],
          }); setErrores({}); onCancelar(); }}
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
        <button
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
      </div>
    </div>
  );
}





   

      
     

    
 



