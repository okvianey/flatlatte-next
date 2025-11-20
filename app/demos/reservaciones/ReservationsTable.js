export default function ReservationsTable({ registros }) {


  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm mb-4">
      <h3 className="text-lg font-medium text-[#4B2E23]">Registros (Mock Google Sheets)</h3>

       <div className="mt-3 max-h-72 overflow-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-xs text-gray-500">
              <tr>
                <th className="py-1">#</th>
                <th>Nombre</th>
                <th>Teléfono</th>
                <th>Fecha</th>
                <th>Hora</th>
              </tr>
            </thead>
            <tbody>
              {registros.length === 0 && (
                <tr><td colSpan="5" className="py-2 text-gray-400">Sin reservas aún</td></tr>
              )}
              {registros.map((r, i) => (
                <tr key={r.id} className="border-t">
                  <td className="py-2">{i+1}</td>
                  <td className="py-2">{r.nombre}</td>
                  <td className="py-2">{r.telefono}</td>
                  <td className="py-2">{r.fecha}</td>
                  <td className="py-2">{r.hora}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-3 flex gap-2">
            {/* <button onClick={fetchRegistros} className="px-3 py-1 border rounded text-sm">Actualizar</button> */}
            <button onClick={() => { navigator.clipboard && navigator.clipboard.writeText(JSON.stringify(registros.slice(-10), null, 2)); }} className="px-3 py-1 border rounded text-sm">Copiar últimos</button>
            
          </div>
        </div>

    </div>
  );
}