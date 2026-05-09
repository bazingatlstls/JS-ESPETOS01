import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export default function Mesas() {
  const [mesas, setMesas] = useState([
    { id: 1, numero: '01', status: 'Livre', apelido: '' },
    { id: 2, numero: '02', status: 'Ocupada', apelido: 'João' }
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Gerenciamento de Mesas</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium">
          + Nova Mesa
        </button>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {mesas.map((mesa) => (
          <div key={mesa.id} className="bg-white p-4 rounded-xl shadow-md border-t-4 border-blue-500 text-center">
            <span className="text-sm text-gray-500 uppercase font-bold">Mesa {mesa.numero}</span>
            <p className="text-lg font-semibold my-2">{mesa.apelido || 'Disponível'}</p>
            <div className="flex flex-col gap-2">
              <button className="bg-green-100 text-green-700 py-1 rounded text-sm font-bold">ABRIR</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
