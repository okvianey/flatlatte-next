import 'bootstrap-icons/font/bootstrap-icons.css'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container text-center">
        <h2 className="font-heading mb-3">Webs tostadas a fuego lento.</h2>
        <p className="mx-auto max-w-2xl">
          Cuidamos cada detalle para que tu espacio digital se sienta tan acogedor como tu cafetería.
          Menús, pedidos o tu historia: todo simple, bonito y funcional.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded shadow text-center">
            <i className="bi bi-heart text-5xl mb-2"></i>
            <h4 className="font-semibold mb-2">Diseño que se siente</h4>
            <p className="text-sm">Creamos una web que refleja la esencia de tu espacio.</p>
          </div>
          <div className="p-6 bg-white rounded shadow text-center">
            <i className="bi bi-hand-thumbs-up text-5xl mb-2"></i>
            <h4 className="font-semibold mb-2">Sin dramas técnicos</h4>
            <p className="text-sm">Tu te encargas del espresso, nosotros del código.</p>
          </div>
          <div className="p-6 bg-white rounded shadow text-center">
            <i className="bi bi-gear text-5xl mb-2"></i>
            <h4 className="font-semibold mb-2">Funcional y eficiente</h4>
            <p className="text-sm">Bonito, rápido y claro. Sin secciones innecesarias.</p>
          </div>
        </div>

        <div className="mt-10">
          <a href="/precios" className="btn btn-primary">Quiero mi sitio web</a>
        </div>
      </div>
    </section>
  )
}
