import 'bootstrap-icons/font/bootstrap-icons.css'
import Link from 'next/link'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container text-center">
        <h2 className="subtitle">Herramientas digitales tostadas a fuego lento</h2>
        <p className="mx-auto max-w-3xl mb-6">
         Creamos soluciones digitales que te ayudan a vender más y administrar mejor tu negocio. Ya sea que necesites mostrar tu menú o recibir pedidos, lo hacemos simple, bonito y funcional.
        </p>

        <div className="mt-10 grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto hidden md:grid">
          <div className="p-6 text-center">
            <i className="bi bi-heart text-5xl mb-2"></i>
            <h4 className="font-semibold mb-2">Diseño que se siente</h4>

          </div>
          <div className="p-6 rounded text-center">
            <i className="bi bi-hand-thumbs-up text-5xl mb-2"></i>
            <h4 className="font-semibold mb-2">Sin dramas técnicos</h4>
          </div>
          <div className="p-6 text-center">
            <i className="bi bi-gear text-5xl mb-2"></i>
            <h4 className="font-semibold mb-2">Funcional y eficiente</h4>
          </div>
        </div>

        <div className="mt-10">
          <Link href="/precios" className="btn btn-primary">Quiero mi sitio</Link>
        </div>
      </div>
    </section>
  )
}
