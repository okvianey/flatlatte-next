export default function MantenimientoSection({ plans }) {
  

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">
            Solo si decides continuar después del primer año
          </span>
          <h2 className="text-3xl font-bold mb-4">Renovación anual</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Una vez que tu proyecto esté terminado y publicado, para que
            continúe en línea es necesario renovar los servicios técnicos
            básicos cada año. Esta renovación no es automática y se decide
            cuando el proyecto ya está activo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border shadow-sm"
            >
              <h3 className="font-semibold text-lg mb-1">{plan.title}</h3>

              {plan.subtitle && (
                <p className="text-sm text-gray-500 mb-4">{plan.subtitle}</p>
              )}

              <p className="text-2xl font-bold">
                ${plan.price.toLocaleString()} MXN
              </p>
              <p className="text-xs text-neutral-500 mt-1 mb-4">
                Equivalente a ${Math.round(plan.price / 12).toLocaleString()} MXN / mes
              </p>

              <ul className="space-y-2 text-sm text-gray-700">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-green-500">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <p className="text-xs text-gray-500 mt-4">
                Pago anual · No mensual
              </p>
            </div>
          ))}
        </div>
        <p className="text-xs text-neutral-500 mt-8 text-center">
          Esta renovación se evalúa cada año. Si decides no renovarla, el sitio
          simplemente deja de estar en línea.
        </p>
      </div>
    </section>
  );
}
