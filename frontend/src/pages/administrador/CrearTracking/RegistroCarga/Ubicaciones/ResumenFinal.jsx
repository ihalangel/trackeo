function ResumenFinal() {
  const { form } = useTracking();

  return (
    <div>
      <h2>Resumen completo de la carga</h2>
      <pre>{JSON.stringify(form, null, 2)}</pre>
      {/* Aquí puedes diseñar tablas o listas bonitos */}
    </div>
  );
}
