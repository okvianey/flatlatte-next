import CardProject from "@/components/ui/CardProject"
import { portfolioItems } from '@/assets/portfolio-items'
import ButtonIconL from "@/components/ui/ButtonIconL"

export default function Proyectos() {

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="text-2xl font-heading">Proyectos recién molidos ☕</h2>
        <p className="mt-6 mb-8">
          Mira algunos de los Flat Lattes que hemos preparado.
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {portfolioItems.map((it, index) => (
            <CardProject key={index} title={it.title} href={it.href} img={it.img} type={it.type} />

          ))}
        </div>

        <div className="my-10 border-b border-gray-200"></div>

        <ButtonIconL url="/" icon={""}>Volver al inicio</ButtonIconL>

      </div>
    </section>
  )
}