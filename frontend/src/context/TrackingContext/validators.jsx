// validators.js

// export const validarCamposTipoCarga = (form, camposTipoCarga) => {
//   const erroresCampos = {};

//   if (form.tipo === "Contenedor con chassis") {
//     if (!camposTipoCarga.colorChassis.trim()) erroresCampos.colorChassis = "Color de chasis obligatorio";
//     if (!camposTipoCarga.serialChassis.trim()) erroresCampos.serialChassis = "Serial de chassis obligatorio";
//     if (!camposTipoCarga.colorContainer.trim()) erroresCampos.colorContainer = "Color de container obligatorio";
//     if (!camposTipoCarga.numeroSello.trim()) erroresCampos.numeroSello = "Número de sello obligatorio";
//     if (!camposTipoCarga.numeroPinkLock.trim()) erroresCampos.numeroPinkLock = "Número de pink lock obligatorio";
//   } else if (form.tipo === "Chassis") {
//     if (!camposTipoCarga.colorChassis.trim()) erroresCampos.colorChassis = "Color de chasis obligatorio";
//     if (!camposTipoCarga.serialChassis.trim()) erroresCampos.serialChassis = "Serial de chassis obligatorio";
//   } else if (form.tipo === "Trailer") {
//     if (!camposTipoCarga.tipoTrailer.trim()) erroresCampos.tipoTrailer = "Tipo de trailer obligatorio";
//     if (!camposTipoCarga.numeroTrailer.trim()) erroresCampos.numeroTrailer = "Número de trailer obligatorio";
//     if (!camposTipoCarga.estadoTrailer.trim()) erroresCampos.estadoTrailer = "Estado de trailer obligatorio";
//   } else if (form.tipo === "Box truck") {
//     if (!camposTipoCarga.dimLargo.trim()) erroresCampos.dimLargo = "Largo obligatorio";
//     if (!camposTipoCarga.dimAncho.trim()) erroresCampos.dimAncho = "Ancho obligatorio";
//     if (!camposTipoCarga.dimAlto.trim()) erroresCampos.dimAlto = "Alto obligatorio";
//     if (!camposTipoCarga.tipoBoxTruck.trim()) erroresCampos.tipoBoxTruck = "Tipo de box truck obligatorio";
//     if (!camposTipoCarga.numeroBoxTruck.trim()) erroresCampos.numeroBoxTruck = "Número de box truck obligatorio";
//   }

//   // Validación campos custom
//   camposTipoCarga.camposCustom.forEach((c, i) => {
//     if (c.obligatorio && !c.valor.trim()) {
//       erroresCampos[`custom_${i}`] = `${c.nombre} es obligatorio`;
//     }
//   });

//   return erroresCampos;
// };

export const validarCamposTipoCarga = (form, camposTipoCargaArray) => {
  const erroresCampos = {};
  if (!Array.isArray(camposTipoCargaArray)) return erroresCampos;

  // Recorrer cada carga en el array
  camposTipoCargaArray.forEach((camposTipoCarga, index) => {
    if (!camposTipoCarga || typeof camposTipoCarga !== "object") return;

    const prefix = `carga_${index}_`; // Prefijo para diferenciar errores por índice

    if (camposTipoCarga.tipo === "Contenedor con chassis") {
      if (!camposTipoCarga.colorChassis?.trim()) erroresCampos[prefix + "colorChassis"] = "Color de chasis obligatorio";
      if (!camposTipoCarga.serialChassis?.trim()) erroresCampos[prefix + "serialChassis"] = "Serial de chasis obligatorio";
      if (!camposTipoCarga.colorContainer?.trim()) erroresCampos[prefix + "colorContainer"] = "Color de container obligatorio";
      if (!camposTipoCarga.numeroSello?.trim()) erroresCampos[prefix + "numeroSello"] = "Número de sello obligatorio";
      if (!camposTipoCarga.numeroPinkLock?.trim()) erroresCampos[prefix + "numeroPinkLock"] = "Número de pink lock obligatorio";
    } else if (camposTipoCarga.tipo === "Chassis") {
      if (!camposTipoCarga.colorChassis?.trim()) erroresCampos[prefix + "colorChassis"] = "Color de chasis obligatorio";
      if (!camposTipoCarga.serialChassis?.trim()) erroresCampos[prefix + "serialChassis"] = "Serial de chasis obligatorio";
    } else if (camposTipoCarga.tipo === "Trailer") {
      if (!camposTipoCarga.tipoTrailer?.trim()) erroresCampos[prefix + "tipoTrailer"] = "Tipo de trailer obligatorio";
      if (!camposTipoCarga.numeroTrailer?.trim()) erroresCampos[prefix + "numeroTrailer"] = "Número de trailer obligatorio";
      if (!camposTipoCarga.estadoTrailer?.trim()) erroresCampos[prefix + "estadoTrailer"] = "Estado de trailer obligatorio";
    } else if (camposTipoCarga.tipo === "Box truck") {
      if (!camposTipoCarga.dimLargo?.trim()) erroresCampos[prefix + "dimLargo"] = "Largo obligatorio";
      if (!camposTipoCarga.dimAncho?.trim()) erroresCampos[prefix + "dimAncho"] = "Ancho obligatorio";
      if (!camposTipoCarga.dimAlto?.trim()) erroresCampos[prefix + "dimAlto"] = "Alto obligatorio";
      if (!camposTipoCarga.tipoBoxTruck?.trim()) erroresCampos[prefix + "tipoBoxTruck"] = "Tipo de box truck obligatorio";
      if (!camposTipoCarga.numeroBoxTruck?.trim()) erroresCampos[prefix + "numeroBoxTruck"] = "Número de box truck obligatorio";
    }

    // Validación campos custom
    if (Array.isArray(camposTipoCarga.camposCustom)) {
      camposTipoCarga.camposCustom.forEach((c, i) => {
        if (c.obligatorio && !c.valor?.trim()) {
          erroresCampos[`${prefix}custom_${i}`] = `${c.nombre} es obligatorio`;
        }
      });
    }
  });

  return erroresCampos;
};


export const validarPaso = (paso, form, camposTipoCarga) => {
  const nuevosErrores = {};

  if (paso === 1) {
    if (!form.tracking.trim()) nuevosErrores.tracking = "El tracking es obligatorio";
  } else if (paso === 2) {
    const erroresTipoCarga = validarCamposTipoCarga(form, camposTipoCarga);
    Object.assign(nuevosErrores, erroresTipoCarga);
  } else if (paso === 3) {
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

export const validarTodo = (form, camposTipoCarga) => {
  const todosErrores = {};

  if (!form.tracking.trim()) todosErrores.tracking = "El tracking es obligatorio";
  if (!form.tipo.trim()) todosErrores.tipo = "Debe seleccionar un tipo de carga";

  const erroresTipoCarga = validarCamposTipoCarga(form, camposTipoCarga);
  Object.assign(todosErrores, erroresTipoCarga);

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
