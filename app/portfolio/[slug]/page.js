import { portfolioItems } from "@/assets/portfolio-items"
import ButtonIconL from "@/components/ui/ButtonIconL"


// Función para extraer slug del href
function getSlugFromHref(href) {
  return href.replace('/portfolio/', '').replace('/', '');
}

export async function generateStaticParams() {
  return portfolioItems.map(item => ({
    slug: getSlugFromHref(item.href)
  }));
}


export default async function PortfolioPage({ params }) {
  const { slug } = await params;

  const portfolioItem = portfolioItems.find(item => 
    item.slug === slug || 
    item.href.replace('/portfolio/', '').replace('/', '') === slug
  );

  // Si no se encuentra el proyecto
  if (!portfolioItem) {
    return (
      <div className="section">
        <div className="container">
          <h1 className="text-3xl font-bold text-gray-900">Proyecto no encontrado</h1>
          <p className="text-gray-600 mt-4">El proyecto que buscas no existe.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="section py-16">
      <div className="container">
        {/* Header del proyecto */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{portfolioItem.title}</h1>
          <p className="text-xl text-gray-600">{portfolioItem.description}</p>
        </div>


        {/* Detalles del proyecto */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Sobre el proyecto</h2>
            <p className="text-gray-700 leading-relaxed">
              {portfolioItem.longDescription || portfolioItem.description}
            </p>

            {/* Tecnologías */}
            <h3 className="text-xl font-semibold mb-4">Tecnologías</h3>
            <div className="flex flex-wrap gap-2">
              {portfolioItem.tags?.map((tech, index) => (
                <span 
                  key={index}
                  className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Enlaces del proyecto */}
            {(portfolioItem.url || portfolioItem.githubUrl) && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3">Enlaces</h3>
                <div className="flex gap-4">
                  {portfolioItem.url && (
                    <a 
                      href={portfolioItem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-accent"
                    >
                      Ver Demo
                    </a>
                  )}
                  {portfolioItem.githubUrl && (
                    <a 
                      href={portfolioItem.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-300 hover:border-amber-500 text-gray-700 hover:text-amber-600 px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      Código
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          <div>
             {/* Imagen del proyecto */}
            {portfolioItem.img && (
              <div className="h-100 bg-cover bg-top bg-no-repeat" style={{backgroundImage:`url(${portfolioItem.img})`}} />
            )}

            
          </div>
        </div>
         <div className="my-10 border-b border-gray-200"></div>

        <ButtonIconL url="/portfolio" icon={""}>Volver al portfolio</ButtonIconL>
      </div>
    </div>
  )
}