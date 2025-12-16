import Link from "next/link";

export default function Process(){
  return (
    <section id="process" className="section bg-[var(--bg)]">
      <div className="container text-center">
        <h2 className="subtitle">
          Tu negocio en versión digital.
        </h2>
        <p className="mt-6 mb-6">
          Tan fácil como charlar, diseñar y servirlo online.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded shadow">
            <div className="text-2xl font-bold mb-2">1</div>
            <h4 className="font-semibold">Charlemos 🤝</h4>
            <p className="text-sm">Cuéntanos qué necesitas: vender, mostrar tu menú, automatizar pedidos o tener presencia digital.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <div className="text-2xl font-bold mb-2">2</div>
            <h4 className="font-semibold">Diseñamos ✏️</h4>
            <p className="text-sm">Creamos la herramienta ideal para tu negocio, simple y funcional.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <div className="text-2xl font-bold mb-2">3</div>
            <h4 className="font-semibold">Servimos ☕️</h4>
            <p className="text-sm">La configuramos, la publicamos y te enseñamos a usarla en minutos.</p>
          </div>
        </div>
        <div className="mt-8">
          <Link href="/precios" className="btn btn-primary">Quiero mi sitio</Link>
        </div>
      </div>
    </section>
  )
}
