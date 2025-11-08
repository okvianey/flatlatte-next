export default function Process(){
  return (
    <section id="process" className="section bg-[var(--bg)]">
      <div className="container text-center">
        <h2 className="text-2xl font-heading">
          Tu café en versión digital.
        </h2>
        <p className="mt-6 mb-8">
          Tan fácil como charlar, diseñar y servirlo online.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded shadow">
            <div className="text-2xl font-bold mb-2">1</div>
            <h4 className="font-semibold">Charlemos 🤝</h4>
            <p className="text-sm">Cuéntanos sobre tu café, tu historia y lo que sueñas compartir.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <div className="text-2xl font-bold mb-2">2</div>
            <h4 className="font-semibold">Diseñamos ✏️</h4>
            <p className="text-sm">Damos forma a una web funcional y acogedora, tan auténtica como tu marca.</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <div className="text-2xl font-bold mb-2">3</div>
            <h4 className="font-semibold">Servimos ☕️</h4>
            <p className="text-sm">Publicamos tu sitio y te ayudamos a mantenerlo fresco y vivo.</p>
          </div>
        </div>
        <div className="mt-8">
          <a href="/precios" className="btn btn-primary">Quiero mi sitio</a>
        </div>
      </div>
    </section>
  )
}
