function App() {
  return (
    <section className="bg-primary-dark p-7 max-w-[450px] w-full">
      <header>
        <h1 className="text-2xl text-center text-white font-bold">Simulá tu crédito</h1>
      </header>
      <footer className="flex flex-col">
        <div className="flex justify-between items-center px-4 py-2 text-white font-bold bg-primary-darker">
          <p className="text-lg uppercase">Cuota Fija por mes</p>
          <p className="text-3xl">$ 2,412.91</p>
        </div>
        <div className="flex gap-2">
          <div className="flex-1">
            <button type="button" className="bg-secondary w-full px-4 py-3 text-white uppercase font-bold hover:shadow-xl transition-all">
              Obtener Credito
            </button>
          </div>
          <div className="flex w-[105px]">

            <button type="button" className="bg-primary-light px-1 uppercase text-white font-semibold text-xs hover:shadow-xl transition-all">
              Ver Detalle de Cuotas
            </button>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default App;
