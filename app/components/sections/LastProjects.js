import { portfolioItems } from "@/assets/portfolio-items"
import Link from "next/link"
export default function LastProjects() {

  const showProjects = portfolioItems.filter((item) => item.showHome.length > 0)

  return (
    <section id="last-projects" className="section">
      <div className="container">
        <h2 className="text-2xl font-heading">Proyectos recién molidos ☕</h2>
        <p className="mt-6 mb-8">
          	Mira algunos de los Flat Lattes que hemos preparado.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {showProjects.map((it)=>(
            <a key={it.title} href={it.href}
              className="block bg-white rounded overflow-hidden shadow group transition ease-in-out duration-300 transform hover:scale-[1.03]"
            >
              <div
                className="h-100 bg-cover bg-center group filter-none sm:filter saturate-50 group-hover:filter-none"
                style={{ backgroundImage: `url(${it.img})` }} />
              <div className="p-4">
                <h3 className="font-semibold">{it.title}</h3>
                <div className="text-xs text-[var(--accent)]">{it.type}</div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/portfolio" className="btn btn-primary">Ver más</Link>
        </div>
      </div>
    </section>
  )
}
