import { RangeInput } from './components';
import { useState } from 'react';
import { formatNumberToCurrency, calculateInstallmentTotal } from './libs/currency';

function App() {
  const [values, setValues] = useState({
    amount: 5000,
    term: 3,
  });

  const handleChange = (name: string, val: number) => {
    setValues((prev) => {
      return {
        ...prev,
        [name]: val,
      };
    });
  };

  
  const total = calculateInstallmentTotal(values.amount, values.term);
  const dolarCurrency = formatNumberToCurrency(total);

  return (
    <section className="bg-primary-dark p-7 max-w-[450px] w-full space-y-8">
      <header>
        <h1 className="text-2xl text-center text-white font-bold">Simulá tu crédito</h1>
      </header>
      <div className="space-y-8">
        <RangeInput title="Monto total" variant="amount" max={50_000_0} min={5000} value={values.amount} step={500} onChange={handleChange} />
        <RangeInput title="Plazo" variant="term" max={24} min={3} value={values.term} step={1} onChange={handleChange} />
      </div>
      <footer className="flex flex-col">
        <div className="flex justify-between items-center px-4 py-2 text-white font-bold bg-primary-darker">
          <p className="text-lg uppercase">Cuota Fija por mes</p>
          <p className="text-3xl">{dolarCurrency}</p>
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
