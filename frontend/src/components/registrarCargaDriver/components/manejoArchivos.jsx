import { useState, useEffect } from "react";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const useManejoArchivos = (archivos) => {
  /*
    archivos: objeto con pares { nombreCampo: archivo | null }
    Retorna:
      - previews: URLs para previsualización de imágenes
      - errores: objeto con errores por nombreCampo si carga inválida
      - validarArchivo(nombreCampo, archivo): función para validar archivo
  */
  const [previews, setPreviews] = useState({});
  const [errores, setErrores] = useState({});

  // Valida tipo y tamaño de archivo
  const validarArchivo = (nombreCampo, archivo) => {
    if (!archivo) {
      setErrores((prev) => {
        const copy = { ...prev };
        delete copy[nombreCampo];
        return copy;
      });
      return true;
    }

    if (!archivo.type.startsWith("image/")) {
      setErrores((prev) => ({
        ...prev,
        [nombreCampo]: "Debe ser un archivo de imagen",
      }));
      return false;
    }

    if (archivo.size > MAX_FILE_SIZE) {
      setErrores((prev) => ({
        ...prev,
        [nombreCampo]: "Archivo debe ser menor a 5MB",
      }));
      return false;
    }

    setErrores((prev) => {
      const copy = { ...prev };
      delete copy[nombreCampo];
      return copy;
    });
    return true;
  };

  // Crear URLs para previsualización
  // useEffect(() => {
  //   const nuevosPreviews = {};
  //   Object.entries(archivos).forEach(([key, archivo]) => {
  //     if (archivo) {
  //       nuevosPreviews[key] = URL.createObjectURL(archivo);
  //     }
  //   });
  //   setPreviews(nuevosPreviews);

  //   return () => {
  //     Object.values(nuevosPreviews).forEach((url) => URL.revokeObjectURL(url));
  //     setPreviews({});
  //   };
  // }, [archivos]);






  useEffect(() => {
  const nuevosPreviews = {};
  Object.entries(archivos).forEach(([key, archivo]) => {
    if (archivo) {
      nuevosPreviews[key] = URL.createObjectURL(archivo);
    }
  });
  setPreviews(nuevosPreviews);

  return () => {
    Object.values(nuevosPreviews).forEach((url) => URL.revokeObjectURL(url));
    // No hacer setPreviews aquí
  };
}, [Object.values(archivos).map(f => f?.name).join(",")]); // o una dependencia menos volátil


  return { previews, errores, validarArchivo };
};

export default useManejoArchivos;
