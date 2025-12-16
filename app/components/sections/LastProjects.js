import { portfolioItems } from "@/assets/portfolio-items"
import Link from "next/link"
import Image from "next/image"

export default function LastProjects() {

  const showProjects = portfolioItems.filter((item) => item.showHome.length > 0)

  return (
    <section id="last-projects" className="section">
      <div className="container">
        <h2 className="subtitle">Proyectos recién molidos ☕</h2>
        <p className="mt-6 mb-6 text-start md:text-center">
          	Mira algunos de los Flat Lattes que hemos preparado.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {showProjects.map((it)=>(
            <Link
              key={it.title}
              href={it.href}
              className="block bg-white rounded overflow-hidden shadow group transition ease-in-out duration-300 transform hover:scale-[1.03]"
            >
              <div
                className="relative h-100 group filter-none sm:filter saturate-50 group-hover:filter-none"
              >
                <Image
                  src={it.img}
                  alt="img portfolio"
                  fill
                  className="object-cover"
                />  
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{it.title}</h3>
                <div className="text-xs text-[var(--accent)]">{it.type}</div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/proyectos" className="btn btn-primary">Ver más</Link>
        </div>
      </div>
    </section>
  )
}
